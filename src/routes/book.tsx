import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteShell, PageTitle } from "@/components/SiteShell";
import { ALL_SERVICES, SALON } from "@/lib/salon";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book an Appointment | BEST CUT Barber Manchester" },
      { name: "description", content: "Book your haircut or shave at BEST CUT, 317 Littleton Rd, Manchester M7 3TA. Pick a service, date and time." },
      { property: "og:title", content: "Book at BEST CUT" },
      { property: "og:description", content: "Reserve your chair at BEST CUT Manchester." },
    ],
  }),
  component: Book,
});

const TIMES = Array.from({ length: 20 }, (_, i) => {
  const m = 9 * 60 + i * 30;
  return `${String(Math.floor(m / 60)).padStart(2, "0")}:${m % 60 ? "30" : "00"}`;
});

const schema = z.object({
  name: z.string().trim().min(1, "Enter your name").max(80),
  phone: z.string().trim().regex(/^[+\d\s()-]{7,20}$/, "Enter a valid phone number"),
  service: z.string().min(1, "Choose a service"),
  date: z.string().min(1, "Pick a date"),
  time: z.string().min(1, "Pick a time"),
  notes: z.string().max(300).optional(),
});

const field = "w-full rounded-sm border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring";

function Book() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", time: "", notes: "" });
  const [error, setError] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) return setError(r.error.issues[0]?.message ?? "Please check the form");
    setError("");
    const d = r.data;
    const msg = `Hi BEST CUT, I'd like to book:\nService: ${d.service}\nDate: ${d.date} at ${d.time}\nName: ${d.name}\nPhone: ${d.phone}${d.notes ? `\nNotes: ${d.notes}` : ""}`;
    window.open(`https://wa.me/${SALON.phone.replace("+", "")}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <SiteShell>
      <PageTitle eyebrow="Reserve your chair" title="Book Now" />
      <form onSubmit={submit} className="mx-auto max-w-xl space-y-4 border border-border bg-card p-6 md:p-10 mb-20 mx-5 md:mx-auto">
        <input className={field} placeholder="Your name" value={form.name} onChange={set("name")} maxLength={80} />
        <input className={field} placeholder="Phone number" type="tel" value={form.phone} onChange={set("phone")} maxLength={20} />
        <select className={field} value={form.service} onChange={set("service")}>
          <option value="">Choose a service</option>
          {ALL_SERVICES.map((s) => <option key={s.name} value={s.name}>{s.name} – £{s.price}</option>)}
        </select>
        <div className="grid grid-cols-2 gap-4">
          <input className={field} type="date" min={today} value={form.date} onChange={set("date")} />
          <select className={field} value={form.time} onChange={set("time")}>
            <option value="">Time</option>
            {TIMES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <textarea className={field} rows={3} placeholder="Notes (optional)" value={form.notes} onChange={set("notes")} maxLength={300} />
        {error && <p className="text-sm text-destructive">{error}</p>}
        <button className="w-full rounded-sm bg-primary py-4 font-semibold uppercase tracking-widest text-primary-foreground hover:opacity-90">Send Booking via WhatsApp</button>
        <p className="text-center text-sm text-muted-foreground">Prefer to call? <a href={`tel:${SALON.phone}`} className="text-primary">{SALON.phoneDisplay}</a></p>
      </form>
    </SiteShell>
  );
}

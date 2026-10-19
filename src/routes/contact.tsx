import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { SiteShell, PageTitle } from "@/components/SiteShell";
import { SALON } from "@/lib/salon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | BEST CUT Barber, 317 Littleton Rd Manchester" },
      { name: "description", content: "Contact BEST CUT barber at 317 Littleton Rd, Manchester M7 3TA. Call or WhatsApp 07770 545404. Opening hours and map." },
      { property: "og:title", content: "Contact BEST CUT Manchester" },
      { property: "og:description", content: "Call, WhatsApp or visit us on Littleton Rd, M7 3TA." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const card = "flex gap-4 border border-border bg-card p-6";
  return (
    <SiteShell>
      <PageTitle eyebrow="Get in touch" title="Contact Us" />
      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-20 md:grid-cols-2">
        <div className="space-y-4">
          <div className={card}><MapPin className="h-6 w-6 shrink-0 text-primary" /><div><h2 className="text-2xl">Address</h2><p className="text-muted-foreground">{SALON.street}, {SALON.city} {SALON.postcode}</p></div></div>
          <a href={`tel:${SALON.phone}`} className={card}><Phone className="h-6 w-6 shrink-0 text-primary" /><div><h2 className="text-2xl">Call</h2><p className="text-muted-foreground">{SALON.phoneDisplay}</p></div></a>
          <a href={`https://wa.me/${SALON.phone.replace("+", "")}`} target="_blank" rel="noreferrer" className={card}><MessageCircle className="h-6 w-6 shrink-0 text-primary" /><div><h2 className="text-2xl">WhatsApp</h2><p className="text-muted-foreground">Message us anytime</p></div></a>
          <div className={card}><Clock className="h-6 w-6 shrink-0 text-primary" /><div className="w-full"><h2 className="text-2xl">Opening Hours</h2>
            <ul className="mt-1 text-muted-foreground">{SALON.hours.map(([d, h]) => <li key={d} className="flex justify-between"><span>{d}</span><span>{h}</span></li>)}</ul></div></div>
        </div>
        <iframe title="BEST CUT on the map" loading="lazy" className="min-h-96 h-full w-full border border-border" src="https://www.google.com/maps?q=317+Littleton+Rd,+Manchester+M7+3TA&output=embed" />
      </section>
    </SiteShell>
  );
}

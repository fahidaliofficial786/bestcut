import { createFileRoute, Link } from "@tanstack/react-router";
import { Scissors, Star, Clock, MapPin } from "lucide-react";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import { SiteShell } from "@/components/SiteShell";
import { SALON } from "@/lib/salon";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: "BEST CUT",
  telephone: SALON.phone,
  priceRange: "££",
  address: { "@type": "PostalAddress", streetAddress: SALON.street, addressLocality: SALON.city, postalCode: SALON.postcode, addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 53.5066, longitude: -2.2654 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "16:00" },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BEST CUT | Barber & Salon in Manchester M7 – Littleton Rd" },
      { name: "description", content: "BEST CUT barber shop at 317 Littleton Rd, Manchester M7 3TA. Skin fades, haircuts, beard trims & hot towel shaves. Book online or call 07770 545404." },
      { property: "og:title", content: "BEST CUT | Barber in Manchester" },
      { property: "og:description", content: "Fades, cuts & shaves on Littleton Rd, Salford/Manchester M7. Book online today." },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <section className="relative flex min-h-[88vh] items-center">
        <img src={hero} alt="Inside BEST CUT barber shop Manchester" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-overlay" />
        <div className="relative mx-auto w-full max-w-6xl px-5">
          <p className="text-xs uppercase tracking-[0.35em] text-primary">Barber & Salon · Manchester M7</p>
          <h1 className="mt-4 text-7xl leading-none md:text-[9rem]">Best Cut<br /><span className="text-primary">in Town.</span></h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">Sharp fades, clean lines and proper hot towel shaves on Littleton Road.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/book" className="rounded-sm bg-primary px-8 py-4 font-semibold uppercase tracking-widest text-primary-foreground hover:opacity-90">Book Now</Link>
            <Link to="/prices" className="rounded-sm border border-primary px-8 py-4 font-semibold uppercase tracking-widest text-primary hover:bg-primary/10">View Prices</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-20 md:grid-cols-3">
        {[
          { icon: Scissors, t: "Skilled Barbers", d: "Fades, tapers, scissor cuts and designs done right." },
          { icon: Clock, t: "Open 7 Days", d: "Book ahead online or walk in when you're passing." },
          { icon: Star, t: "Fair Prices", d: "Quality cuts from just £10, kids from £12." },
        ].map(({ icon: I, t, d }) => (
          <div key={t} className="border border-border bg-card p-8">
            <I className="h-8 w-8 text-primary" />
            <h2 className="mt-4 text-3xl">{t}</h2>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="flex items-end justify-between">
          <h2 className="text-5xl">Our Work</h2>
          <Link to="/gallery" className="text-sm uppercase tracking-widest text-primary">See gallery →</Link>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3">
          {[g1, g2, g3].map((s, i) => <img key={i} src={s} alt="Barber work at BEST CUT" loading="lazy" width={1024} height={1024} className="aspect-square w-full object-cover" />)}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-5xl">Find Us</h2>
            <p className="mt-4 flex gap-2 text-muted-foreground"><MapPin className="h-5 w-5 text-primary" />{SALON.street}, {SALON.city} {SALON.postcode}</p>
            <a href={`tel:${SALON.phone}`} className="mt-2 block text-2xl text-primary">{SALON.phoneDisplay}</a>
          </div>
          <iframe title="BEST CUT location map" loading="lazy" className="h-72 w-full border border-border" src="https://www.google.com/maps?q=317+Littleton+Rd,+Manchester+M7+3TA&output=embed" />
        </div>
      </section>
    </SiteShell>
  );
}

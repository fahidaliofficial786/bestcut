import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageTitle } from "@/components/SiteShell";
import { PRICES } from "@/lib/salon";

export const Route = createFileRoute("/prices")({
  head: () => ({
    meta: [
      { title: "Price List | BEST CUT Barber Manchester M7" },
      { name: "description", content: "Haircut, skin fade, beard trim and hot towel shave prices at BEST CUT, 317 Littleton Rd, Manchester." },
      { property: "og:title", content: "BEST CUT Price List" },
      { property: "og:description", content: "Affordable barber prices in Manchester M7." },
    ],
  }),
  component: Prices,
});

function Prices() {
  return (
    <SiteShell>
      <PageTitle eyebrow="Services" title="Price List" />
      <div className="mx-auto grid max-w-6xl gap-8 px-5 pb-20 md:grid-cols-3">
        {PRICES.map((g) => (
          <div key={g.group} className="border border-border bg-card p-8">
            <h2 className="text-3xl text-primary">{g.group}</h2>
            <ul className="mt-6 space-y-4">
              {g.items.map((i) => (
                <li key={i.name} className="flex items-baseline gap-2">
                  <span>{i.name}</span>
                  <span className="flex-1 border-b border-dotted border-border" />
                  <span className="font-semibold text-primary">£{i.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pb-20 text-center">
        <Link to="/book" className="rounded-sm bg-primary px-8 py-4 font-semibold uppercase tracking-widest text-primary-foreground">Book an Appointment</Link>
      </div>
    </SiteShell>
  );
}

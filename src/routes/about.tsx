import { createFileRoute, Link } from "@tanstack/react-router";
import { Scissors, Users, Award } from "lucide-react";
import g2 from "@/assets/g2.jpg";
import { SiteShell, PageTitle } from "@/components/SiteShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | BEST CUT Barber Shop Manchester M7" },
      { name: "description", content: "Meet BEST CUT, the local barber on Littleton Rd, Manchester M7. Skilled barbers, friendly service and sharp cuts for all ages." },
      { property: "og:title", content: "About BEST CUT Manchester" },
      { property: "og:description", content: "Your local barber on Littleton Road." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteShell>
      <PageTitle eyebrow="Our Story" title="About Us" />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 md:grid-cols-2 md:items-center">
        <img src={g2} alt="Barber giving a hot towel shave at BEST CUT" loading="lazy" width={1024} height={1024} className="aspect-square w-full object-cover" />
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>BEST CUT is a neighbourhood barber shop on Littleton Road in Manchester M7, serving Salford, Broughton and Cheetham Hill.</p>
          <p>We believe every client deserves a sharp, confident look. From clean skin fades to classic scissor cuts and traditional hot towel shaves, our barbers take their time to get it right.</p>
          <p>Walk in or book ahead — kids, students and gents of every age are welcome.</p>
          <Link to="/book" className="inline-block rounded-sm bg-primary px-8 py-4 font-semibold uppercase tracking-widest text-primary-foreground">Book Your Cut</Link>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-20 md:grid-cols-3">
        {[
          { icon: Scissors, t: "Precision", d: "Detailed fades, line-ups and finishes." },
          { icon: Users, t: "Community", d: "A friendly local shop for the whole family." },
          { icon: Award, t: "Quality", d: "Premium products and spotless tools, every time." },
        ].map(({ icon: I, t, d }) => (
          <div key={t} className="border border-border bg-card p-8">
            <I className="h-8 w-8 text-primary" />
            <h2 className="mt-4 text-3xl">{t}</h2>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}

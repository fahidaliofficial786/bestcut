import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import { SiteShell, PageTitle } from "@/components/SiteShell";

const PHOTOS = [
  { src: g1, alt: "Skin fade haircut at BEST CUT Manchester" },
  { src: hero, alt: "BEST CUT barber shop interior", wide: true },
  { src: g2, alt: "Hot towel beard shave" },
  { src: g3, alt: "Barber tools at BEST CUT" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | BEST CUT Barber Shop Manchester" },
      { name: "description", content: "Photos of fades, beard work and the shop at BEST CUT on Littleton Rd, Manchester M7." },
      { property: "og:title", content: "BEST CUT Gallery" },
      { property: "og:description", content: "See our latest cuts and shaves." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <SiteShell>
      <PageTitle eyebrow="Our Work" title="Gallery" />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 pb-20 md:grid-cols-3">
        {PHOTOS.map((p) => (
          <button key={p.alt} onClick={() => setOpen(p.src)} className={`overflow-hidden ${p.wide ? "col-span-2" : ""}`}>
            <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full aspect-square object-cover transition-transform duration-500 hover:scale-105" style={p.wide ? { aspectRatio: "2/1" } : undefined} />
          </button>
        ))}
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay p-4 backdrop-blur" onClick={() => setOpen(null)}>
          <button className="absolute right-5 top-5 text-foreground" aria-label="Close"><X className="h-8 w-8" /></button>
          <img src={open} alt="" className="max-h-[90vh] max-w-full object-contain" />
        </div>
      )}
    </SiteShell>
  );
}

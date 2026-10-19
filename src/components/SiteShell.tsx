import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, Phone, X, MapPin } from "lucide-react";
import { SALON } from "@/lib/salon";
import logo from "@/assets/logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/prices", label: "Prices" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/book", label: "Book" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" aria-label="BEST CUT home"><img src={logo} alt="BEST CUT logo" className="h-14 w-auto md:h-16" /></Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>{n.label}</Link>
            ))}
            <a href={`tel:${SALON.phone}`} className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground"><Phone className="h-4 w-4" />Call</a>
          </nav>
          <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <nav className="flex flex-col gap-4 border-t border-border px-5 py-5 lg:hidden">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="uppercase tracking-widest text-foreground">{n.label}</Link>
            ))}
            <a href={`tel:${SALON.phone}`} className="text-primary">{SALON.phoneDisplay}</a>
          </nav>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
          <div>
            <img src={logo} alt="BEST CUT logo" loading="lazy" className="h-20 w-auto" />
            <p className="mt-2 text-sm text-muted-foreground">Barber & salon in Manchester (M7).</p>
          </div>
          <address className="not-italic text-sm text-muted-foreground space-y-2">
            <p className="flex gap-2"><MapPin className="h-4 w-4 text-primary" />{SALON.street}, {SALON.city} {SALON.postcode}</p>
            <a href={`tel:${SALON.phone}`} className="flex gap-2 hover:text-primary"><Phone className="h-4 w-4 text-primary" />{SALON.phoneDisplay}</a>
          </address>
          <ul className="text-sm text-muted-foreground space-y-1">
            {SALON.hours.map(([d, h]) => <li key={d} className="flex justify-between max-w-xs"><span>{d}</span><span>{h}</span></li>)}
          </ul>
        </div>
        <p className="pb-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} BEST CUT Manchester</p>
      </footer>
    </div>
  );
}

export function PageTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-16 pb-8 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h1 className="mt-3 text-5xl md:text-7xl">{title}</h1>
    </div>
  );
}

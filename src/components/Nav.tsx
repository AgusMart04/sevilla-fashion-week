import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import logoStar from "@/assets/logo-blanco-png.png";

const links = [
  { label: "Concepto", to: "/concepto" },
  { label: "Evento", to: "/evento" },
  { label: "Sevilla", to: "/sevilla" },
  { label: "Sedes", to: "/sedes" },
  { label: "Patrocinio", to: "/patrocinio" },
  { label: "Fest Sevilla", to: "/fest-sevilla" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled || open ? "glass border-b border-border" : ""
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">
          <a
            href="/#top"
            className="group flex items-center gap-3 min-h-[44px]"
          >
            <img
              src={logoStar}
              alt="Sevilla Fashion Week"
              className="h-7 w-auto transition-all duration-500 group-hover:h-8"
            />
            <span className="font-serif text-base tracking-luxury uppercase text-silver-bright">
              SFW
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.label}
                  to={l.to}
                  className={`group relative text-[11px] uppercase tracking-[0.24em] transition-colors ${
                    active ? "text-silver-bright" : "text-muted-foreground hover:text-silver-bright"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-silver transition-all duration-500 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <Link
            to="/patrocinio"
            className="hidden lg:inline-flex items-center gap-3 border border-silver/40 px-5 py-2.5 text-[11px] uppercase tracking-[0.24em] text-silver-bright transition-all duration-500 hover:bg-silver hover:text-ink min-h-[44px]"
          >
            Patrocinar
            <span className="h-px w-4 bg-current" />
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-1.5 p-3 -mr-3 min-h-[44px] min-w-[44px] items-end justify-center"
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className={`h-px w-7 bg-silver-bright transition-all duration-500 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-px w-7 bg-silver-bright transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-7 bg-silver-bright transition-all duration-500 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "oklch(0.04 0.002 270 / 0.85)",
          backdropFilter: "blur(40px) saturate(160%)",
          WebkitBackdropFilter: "blur(40px) saturate(160%)",
        }}
      >
        <div className="flex h-full flex-col px-6 pt-28 pb-12">
          <div className="text-[10px] uppercase tracking-[0.4em] text-silver/60 mb-10">
            Navegación
          </div>
          <nav className="flex flex-col">
            {links.map((l, i) => {
              const style = {
                animation: open ? `rise 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.06}s both` : undefined,
              };
              const active = pathname === l.to;
              return (
                <Link
                  key={l.label}
                  to={l.to}
                  className={`border-b border-border py-5 font-display text-4xl sm:text-5xl text-silver-bright/90 transition-all duration-500 ${active ? "italic text-silver-bright" : ""}`}
                  style={style}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto pt-10 flex flex-col gap-4">
            <Link
              to="/patrocinio"
              className="inline-flex justify-center items-center border border-silver/40 px-5 py-4 text-[11px] uppercase tracking-[0.32em] text-silver-bright min-h-[52px] hover:bg-silver hover:text-ink transition-colors"
            >
              Convertirse en patrocinador
            </Link>
            <a
              href="mailto:partners@sevillafashionweek.com"
              className="text-center font-serif italic text-sm text-silver/80"
            >
              partners@sevillafashionweek.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

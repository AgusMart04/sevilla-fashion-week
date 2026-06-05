import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import sponsor1 from "@/assets/sponsors/sponsor-1.png";
import sponsor2 from "@/assets/sponsors/sponsor-2.png";
import sponsor3 from "@/assets/sponsors/sponsor-3.png";
import sponsor4 from "@/assets/sponsors/sponsor-4.png";
import sponsor5 from "@/assets/sponsors/sponsor-5.png";
import sponsor6 from "@/assets/sponsors/sponsor-6.png";
import sponsor7 from "@/assets/sponsors/sponsor-7.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const tiers = [
  {
    tag: "Tier I",
    name: "Privilege",
    desc: "Asociación exclusiva con la edición. Naming, presencia integral en todos los soportes y experiencias dedicadas para invitados estratégicos.",
    perks: ["Naming oficial", "Stand 12m²", "30 invitaciones", "Video 60s"],
    featured: true,
    details: {
      sections: [
        {
          title: "Visibilidad & Branding",
          items: [
            "Logotipo en todos los materiales promocionales (invitaciones, pancartas, redes sociales)",
            "Mención en directo durante la inauguración y clausura",
            "Mención especial en entrevistas de prensa",
          ],
        },
        {
          title: "Espacio Físico",
          items: ["Stand de 4m × 3m (12m²) en el recinto del evento"],
        },
        {
          title: "Accesos",
          items: [
            "30 invitaciones a los desfiles",
            "10 credenciales de acceso (excepto backstage)",
          ],
        },
        {
          title: "Digital & Audiovisual",
          items: [
            "Logotipo y enlace en la web oficial",
            "Logo en el video institucional del evento",
            "Proyección de video promocional de 60 segundos en la sala de desfiles",
            "5 publicaciones del logo en redes sociales",
          ],
        },
        {
          title: "Presencia Física",
          items: [
            "Logo en panel del evento (3m × 4m)",
            "Logo en vallas publicitarias exteriores",
            "Logo en invitaciones impresas y digitales",
          ],
        },
        {
          title: "Activaciones",
          items: [
            "Distribución de obsequios y material promocional",
            "Actividad promocional en el evento (sujeta a aprobación)",
          ],
        },
      ],
    },
  },
  {
    tag: "Tier II",
    name: "Excellence",
    desc: "Visibilidad premium en jornadas clave y participación activa en programación profesional e industria.",
    perks: ["Stand 9m²", "20 invitaciones", "Video 30s", "Redes sociales"],
    details: {
      sections: [
        {
          title: "Visibilidad & Branding",
          items: [
            "Logotipo en material promocional y publicidad online",
            "Mención en comunicados de prensa",
          ],
        },
        {
          title: "Espacio Físico",
          items: ["Stand de 3m × 3m (9m²)"],
        },
        {
          title: "Accesos",
          items: [
            "20 invitaciones a los desfiles",
            "6 credenciales de acceso (excepto backstage)",
          ],
        },
        {
          title: "Digital & Audiovisual",
          items: [
            "Logotipo en la web oficial",
            "Logo en el video institucional",
            "Video promocional de 30 segundos en sala",
            "5 publicaciones del logo en redes sociales",
          ],
        },
        {
          title: "Presencia Física",
          items: [
            "Logo en panel del evento (3m × 4m)",
            "Logo en invitaciones impresas y digitales",
            "Mención en vivo durante la inauguración",
          ],
        },
        {
          title: "Activaciones",
          items: [
            "Distribución de obsequios y material promocional",
            "Actividad promocional en el evento (sujeta a aprobación)",
          ],
        },
      ],
    },
  },
  {
    tag: "Tier III",
    name: "Prestige",
    desc: "Asociación exclusiva por vertical: beauty, joyería, hospitality, tecnología, automoción.",
    perks: ["Stand 4m²", "10 invitaciones", "Logo en web", "Redes sociales"],
    details: {
      sections: [
        {
          title: "Visibilidad & Branding",
          items: ["Mención en comunicados de prensa"],
        },
        {
          title: "Espacio Físico",
          items: ["Stand de 2m × 2m (4m²)"],
        },
        {
          title: "Accesos",
          items: [
            "10 invitaciones a los desfiles",
            "4 credenciales de acceso (excepto backstage)",
          ],
        },
        {
          title: "Digital & Audiovisual",
          items: [
            "Logotipo en la web oficial",
            "Logo en el video institucional",
            "3 publicaciones del logo en redes sociales",
          ],
        },
        {
          title: "Presencia Física",
          items: [
            "Logo en panel del evento (3m × 4m)",
            "Mención en vivo durante la inauguración",
          ],
        },
        {
          title: "Activaciones",
          items: [
            "Distribución de obsequios y material promocional",
            "Actividad promocional en el evento (sujeta a aprobación)",
          ],
        },
      ],
    },
  },
  {
    tag: "A medida",
    name: "Custom",
    desc: "Diseñamos una asociación a medida según los objetivos estratégicos de tu marca.",
    perks: ["Asociación flexible", "Co-creación", "Sin límites"],
  },
];

export function Sponsors() {
  const [openTier, setOpenTier] = useState<string | null>(null);
  const selectedTier = tiers.find((t) => t.tag === openTier);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const handleContactClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="patrocinadores" className="relative bg-background py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div>
              <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-silver">
                <span className="h-px w-8 bg-silver" />
                <span>V · Colaboración</span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl silver-text max-w-3xl text-balance">
                Oportunidades de <span className="italic">colaboración</span>.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Espacios estratégicos para marcas globales que buscan asociarse con
              un evento internacional de moda en su edición fundacional.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {tiers.map((t, i) => (
            <Reveal key={t.tag} delay={i * 140}>
              <article
                className={`group relative h-full p-10 md:p-14 transition-all duration-700 ${
                  t.featured
                    ? "bg-card text-silver-bright"
                    : "bg-background hover:bg-card"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="text-[10px] uppercase tracking-[0.4em] text-silver">
                    {t.tag}
                  </div>
                  {t.featured && (
                    <div className="text-[9px] uppercase tracking-[0.32em] text-ink bg-silver-bright px-2 py-1">
                      Exclusivo
                    </div>
                  )}
                </div>
                <h3 className="mt-8 font-display text-4xl md:text-5xl silver-text">
                  {t.name}
                </h3>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {t.desc}
                </p>
                <ul className="mt-10 space-y-3">
                  {t.perks.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-4 text-[11px] uppercase tracking-[0.24em] text-silver-bright"
                    >
                      <span className="h-px w-6 bg-silver" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-12 flex flex-wrap items-center gap-6">
                  {t.details && (
                    <button
                      onClick={() => setOpenTier(t.tag)}
                      className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-silver/60 hover:text-silver-bright transition-colors min-h-[44px]"
                    >
                      Ver detalles
                      <span className="h-px w-6 bg-silver/40" />
                    </button>
                  )}
                  <Link
                    to="/contacto"
                    onClick={handleContactClick}
                    className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-silver-bright group/cta min-h-[44px]"
                  >
                    Solicitar dossier
                    <span className="h-px w-8 bg-silver transition-all duration-500 group-hover/cta:w-14" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Logo wall */}
        <Reveal delay={300}>
          <div className="mt-24">
            <div className="text-[10px] uppercase tracking-[0.4em] text-silver/60 text-center mb-10">
              Espacios reservados — Edición 2026
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
              {[
                { name: "Sponsor 1", logo: sponsor1 },
                { name: "Sponsor 2", logo: sponsor2 },
                { name: "Sponsor 3", logo: sponsor3 },
                { name: "Sponsor 4", logo: sponsor4 },
                { name: "Sponsor 5", logo: sponsor5 },
                { name: "Sponsor 6", logo: sponsor6 },
                { name: "Sponsor 7", logo: sponsor7 },
              ].map((s) => (
                <div
                  key={s.name}
                  className="aspect-[3/2] bg-background flex items-center justify-center p-3 md:p-4"
                >
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`placeholder-${i}`}
                  className="aspect-[3/2] bg-background flex items-center justify-center text-silver/20 font-serif italic text-xs"
                >
                  Your Brand
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Dialog open={!!openTier} onOpenChange={(open) => !open && setOpenTier(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-background border-border">
          {selectedTier && (
            <>
              <DialogHeader>
                <div className="text-[10px] uppercase tracking-[0.4em] text-silver mb-2">
                  {selectedTier.tag}
                </div>
                <DialogTitle className="font-display text-3xl md:text-4xl silver-text">
                  {selectedTier.name}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {selectedTier.desc}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 space-y-8">
                {selectedTier.details.sections.map((section) => (
                  <div key={section.title}>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-silver mb-4">
                      {section.title}
                    </h4>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-2 h-px w-4 shrink-0 bg-silver/40" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  to="/contacto"
                  onClick={(e) => {
                    setOpenTier(null);
                    handleContactClick(e);
                  }}
                  className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-silver-bright group/cta min-h-[44px]"
                >
                  Solicitar dossier
                  <span className="h-px w-8 bg-silver transition-all duration-500 group-hover/cta:w-14" />
                </Link>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

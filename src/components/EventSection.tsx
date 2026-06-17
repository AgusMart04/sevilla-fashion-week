import { useState } from "react";
import event from "@/assets/event.jpg";
import escenario from "@/assets/escenario.jpg";
import { Reveal } from "./Reveal";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const days = [
  { d: "01–04", l: "SEP", t: "Desfiles", desc: "Cuatro jornadas de pasarela con firmas internacionales y talento emergente seleccionado." },
  { d: "05–07", l: "SEP", t: "Showroom", desc: "Exhibición curada de colecciones para compradores y prensa especializada." },
  { d: "08–10", l: "SEP", t: "Industria", desc: "Networking, rondas de negocio, charlas internacionales y alianzas estratégicas." },
];

export function EventSection() {
  const [escenarioOpen, setEscenarioOpen] = useState(false);

  return (
    <section id="evento" className="relative overflow-hidden bg-purple-deep py-32 md:py-48">
      <img
        src={event}
        alt=""
        aria-hidden
        loading="lazy"
        width={1600}
        height={1100}
        className="absolute right-0 top-0 h-[60%] w-1/2 object-cover opacity-30 [mask-image:linear-gradient(to_left,black,transparent)]"
      />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal>
          <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-8 bg-primary" />
            <span>II · El Evento</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl gold-text max-w-4xl text-balance">
            Diez días. <span className="italic">Una</span> ciudad.<br />
            Un punto de encuentro.
          </h2>
        </Reveal>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {days.map((day, i) => (
            <Reveal key={day.d} delay={i * 180}>
              <article className="group relative h-full bg-card p-10 md:p-12 transition-all duration-700 hover:bg-purple-deep border border-transparent hover:border-primary/20">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-6xl md:text-7xl gold-text transition-all duration-700 group-hover:[filter:brightness(1.2)_contrast(1.1)]">{day.d}</span>
                  <span className="font-serif text-lg text-silver/60">{day.l}</span>
                </div>
                <div className="mt-12 text-[10px] uppercase tracking-[0.4em] text-primary">
                  Fase 0{i + 1}
                </div>
                <h3 className="mt-3 font-serif text-3xl md:text-4xl text-silver-bright italic">
                  {day.t}
                </h3>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-xs">
                  {day.desc}
                </p>
                <div className="absolute bottom-10 left-10 right-10 h-px silver-line opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              ["Desfiles", "Pasarela oficial"],
              ["Showroom", "Selección curada"],
              ["Rondas", "B2B internacional"],
              ["Charlas", "Voces globales"],
            ].map(([t, d]) => (
              <div key={t} className="bg-card p-6">
                <div className="text-[11px] uppercase tracking-[0.32em] text-silver-bright">{t}</div>
                <div className="mt-2 text-xs text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-32 border-t border-primary/20 pt-24 pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-7 lg:pt-16">
                <button
                  type="button"
                  onClick={() => setEscenarioOpen(true)}
                  className="relative overflow-hidden hairline block w-full cursor-zoom-in group"
                >
                  <img
                    src={escenario}
                    alt="Plano técnico del escenario Sevilla Fashion Week"
                    width={1400}
                    height={1000}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                </button>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-primary">
                  <span className="h-px w-8 bg-primary" />
                  <span>El escenario</span>
                </div>
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl gold-text text-balance">
                  Donde la moda <span className="italic">toma forma</span>.
                </h3>
                <p className="mt-8 max-w-md text-muted-foreground leading-relaxed">
                  Pasarela en T con panel LED central, iluminación lineal perimetral
                  y torres truss modulares. Un diseño pensado para maximizar la
                  experiencia visual de cada desfile.
                </p>
                <div className="mt-10 grid grid-cols-2 gap-6">
                  {[
                    { label: "Sonido", value: "Line Array" },
                    { label: "Paneles LED", value: "4 unidades" },
                    { label: "Torres truss", value: "8 estructuras" },
                    { label: "Spots móviles", value: "24 unidades" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-[10px] uppercase tracking-[0.32em] text-primary/60 mb-1">{s.label}</div>
                      <div className="font-serif text-lg text-silver-bright">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Dialog open={escenarioOpen} onOpenChange={setEscenarioOpen}>
        <DialogContent className="max-w-5xl border-border bg-foreground p-0">
          <img
            src={escenario}
            alt="Plano técnico del escenario Sevilla Fashion Week"
            className="w-full h-auto"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
}

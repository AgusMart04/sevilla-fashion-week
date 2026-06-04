import event from "@/assets/event.jpg";
import { Reveal } from "./Reveal";

const days = [
  { d: "01–04", l: "SEP", t: "Desfiles", desc: "Cuatro jornadas de pasarela con firmas internacionales y talento emergente seleccionado." },
  { d: "05–07", l: "SEP", t: "Showroom", desc: "Exhibición curada de colecciones para compradores y prensa especializada." },
  { d: "08–10", l: "SEP", t: "Industria", desc: "Networking, rondas de negocio, charlas internacionales y alianzas estratégicas." },
];

export function EventSection() {
  return (
    <section id="evento" className="relative overflow-hidden bg-ink py-32 md:py-48">
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
          <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-silver">
            <span className="h-px w-8 bg-silver" />
            <span>II · El Evento</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl silver-text max-w-4xl text-balance">
            Diez días. <span className="italic">Una</span> ciudad.<br />
            Un punto de encuentro.
          </h2>
        </Reveal>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {days.map((day, i) => (
            <Reveal key={day.d} delay={i * 180}>
              <article className="group relative h-full bg-background p-10 md:p-12 transition-all duration-700 hover:bg-card">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-6xl md:text-7xl silver-text">{day.d}</span>
                  <span className="font-serif text-lg text-silver/60">{day.l}</span>
                </div>
                <div className="mt-12 text-[10px] uppercase tracking-[0.4em] text-silver">
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
              <div key={t} className="bg-background p-6">
                <div className="text-[11px] uppercase tracking-[0.32em] text-silver-bright">{t}</div>
                <div className="mt-2 text-xs text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

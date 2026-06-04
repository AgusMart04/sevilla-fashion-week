import sevilla from "@/assets/sevilla.jpg";
import { Reveal } from "./Reveal";

const pillars = [
  { n: "01", t: "Cultura", d: "Flamenco, museos, herencia mudéjar." },
  { n: "02", t: "Gastronomía", d: "Estrellas Michelin y tradición viva." },
  { n: "03", t: "Arquitectura", d: "Del gótico al contemporáneo." },
  { n: "04", t: "Historia", d: "Tres mil años de cruce de civilizaciones." },
  { n: "05", t: "Turismo", d: "Tercer destino urbano de España." },
];

export function Sevilla() {
  return (
    <section id="sevilla" className="relative bg-background">
      <div className="relative h-[80vh] min-h-[520px] overflow-hidden">
        <img
          src={sevilla}
          alt="Sevilla cinematográfica"
          width={1800}
          height={1100}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-background" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <Reveal>
            <div className="text-center">
              <div className="mb-6 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.4em] text-silver">
                <span className="h-px w-8 bg-silver" />
                <span>III · Destino</span>
                <span className="h-px w-8 bg-silver" />
              </div>
              <h2 className="font-display text-6xl md:text-8xl lg:text-9xl silver-text">
                Sevilla
              </h2>
              <p className="mt-6 font-serif italic text-xl md:text-2xl text-silver/90">
                Más que una ubicación. Un destino.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-border">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 120}>
              <div className="group h-full bg-background p-8 transition-all duration-700 hover:bg-card">
                <div className="font-serif text-2xl text-silver/50">{p.n}</div>
                <div className="mt-8 font-serif text-2xl italic text-silver-bright">{p.t}</div>
                <div className="mt-3 text-xs text-muted-foreground leading-relaxed">{p.d}</div>
                <div className="mt-6 h-px w-6 bg-silver/40 transition-all duration-700 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

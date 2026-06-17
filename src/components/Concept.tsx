import { useState } from "react";
import concept from "@/assets/concept.jpg";
import { Reveal } from "./Reveal";

export function Concept() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="concepto" className="relative bg-purple-mid py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="sticky top-32">
                <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-primary">
                  <span className="h-px w-8 bg-primary" />
                  <span>I · Concepto</span>
                </div>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-balance gold-text">
                  Donde la moda se encuentra con la <span className="italic">historia</span>.
                </h2>
                <div className="mt-6 h-px w-16 gold-line" />

                <div className="relative mt-12">
                  <div
                    className={`space-y-10 max-w-md text-muted-foreground leading-relaxed transition-all duration-500 ${
                      expanded ? "" : "max-h-[280px] overflow-hidden md:max-h-none md:overflow-visible"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] mb-4">
                        <span className="h-px w-8 bg-primary" />
                        <span className="text-primary">Una plataforma internacional</span>
                      </div>
                      <p>
                        Sevilla Fashion Week es una plataforma internacional de moda
                        creada para posicionar a Sevilla como uno de los grandes centros
                        creativos del sur de Europa.
                      </p>
                      <p className="mt-4">
                        El evento reúne diseñadores, marcas, medios de comunicación,
                        compradores y profesionales de la industria en un espacio donde
                        convergen la moda, la cultura, el turismo y los negocios.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] mb-4">
                        <span className="h-px w-8 bg-primary" />
                        <span className="text-primary">Más que desfiles</span>
                      </div>
                      <p>
                        Además de los desfiles, incluye presentaciones de colecciones,
                        producciones audiovisuales, networking, actividades culturales
                        y acciones promocionales vinculadas al destino Sevilla.
                      </p>
                      <p className="mt-4">
                        Busca impulsar el talento emergente y consolidado, generando
                        oportunidades comerciales, visibilidad internacional y conexiones
                        estratégicas entre los distintos actores del sector.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] mb-4">
                        <span className="h-px w-8 bg-primary" />
                        <span className="text-primary">El escenario perfecto</span>
                      </div>
                      <p>
                        Gracias a su patrimonio histórico, su infraestructura turística
                        y su proyección internacional, Sevilla ofrece un escenario único
                        para el desarrollo de una fashion week con identidad propia,
                        capaz de atraer participantes y visitantes de distintos países.
                      </p>
                    </div>
                  </div>

                  {!expanded && (
                    <div className="md:hidden absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-mid to-transparent pointer-events-none" />
                  )}
                </div>

                <button
                  onClick={() => setExpanded(!expanded)}
                  className="md:hidden mt-6 text-[11px] uppercase tracking-[0.32em] text-silver/60 hover:text-silver-bright transition-colors"
                >
                  {expanded ? "Menos ↑" : "Leer más ↓"}
                </button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={200}>
              <div className="relative aspect-[4/5] overflow-hidden hairline">
                <img
                  src={concept}
                  alt="Patrimonio de Sevilla"
                  width={1400}
                  height={1600}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[40%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 font-serif italic text-lg md:text-xl text-silver-bright">
                  «Una ciudad que ha hospedado imperios, ahora hospeda a la moda.»
                </div>
              </div>
            </Reveal>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
              {[
                { k: "01", t: "Cultura", d: "Patrimonio milenario como escenario." },
                { k: "02", t: "Comercio", d: "Plataforma de negocio internacional." },
                { k: "03", t: "Creatividad", d: "Talento emergente y firmas globales." },
              ].map((it, i) => (
                <Reveal key={it.k} delay={300 + i * 120}>
                  <div className="group bg-card p-8 transition-all duration-500 hover:bg-purple-deep border border-transparent hover:border-primary/20">
                    <div className="font-serif text-3xl text-silver/60 mb-4">{it.k}</div>
                    <div className="text-[11px] uppercase tracking-[0.32em] text-silver-bright">
                      {it.t}
                    </div>
                    <div className="mt-3 text-sm text-muted-foreground">{it.d}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

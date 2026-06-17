import { Reveal } from "./Reveal";
import logoStar from "@/assets/logo-blanco-png.png";
import levelsLogo from "@/assets/levels-logo-blanco.png";
import festHero from "@/assets/fest-hero.jpg";
import fest1 from "@/assets/fest-1.jpg";
import fest2 from "@/assets/fest-2.jpg";
import fest3 from "@/assets/fest-3.jpg";
import fest4 from "@/assets/fest-4.jpg";

const gallery = [
  { src: fest1, alt: "Arquitectura lumínica del club", aspect: "aspect-[3/4]" },
  { src: fest2, alt: "Multitud en penumbra", aspect: "aspect-[5/4]" },
  { src: fest3, alt: "Cabina de DJ minimalista", aspect: "aspect-square" },
  { src: fest4, alt: "Estilismo editorial nocturno", aspect: "aspect-[3/4]" },
  { src: fest2, alt: "Atmósfera escénica", aspect: "aspect-[4/3]" },
  { src: fest1, alt: "Diseño escenográfico", aspect: "aspect-[3/4]" },
];

const partners = [
  "Sound System Co.",
  "Lighting Atelier",
  "Spirits Maison",
  "Hotel Partner",
  "Mobility",
  "Streaming",
  "Hospitality",
  "Media Partner",
];

export function FestSevilla() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-purple-deep">
        <img
          src={festHero}
          alt="Fest Sevilla — Levels"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-deep/60 via-purple-deep/40 to-purple-deep" />
        <div className="absolute inset-0 noise" />
        {/* Subtle gold glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, oklch(0.78 0.14 85 / 0.12) 0%, transparent 55%)",
          }}
        />

        <div className="absolute inset-x-0 top-28 z-10 flex justify-center px-6 rise rise-1">
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary/60" />
            <span>Fest Sevilla · After-Hours Oficial</span>
            <span className="h-px w-10 bg-primary/60" />
          </div>
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="rise rise-2 relative">
            <div className="absolute inset-0 -m-8 rounded-full blur-3xl opacity-50"
              style={{ background: "radial-gradient(circle, oklch(0.78 0.14 85 / 0.25), transparent 70%)" }}
            />
            <div
              className="relative px-10 py-6 border border-primary/30"
              style={{
                background: "oklch(0.12 0.06 300 / 0.4)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <div className="text-[10px] uppercase tracking-[0.5em] text-primary/70 mb-3">
                Productora invitada
              </div>
              <div className="font-display text-6xl md:text-8xl gold-text tracking-tight">
                LEVELS
              </div>
            </div>
          </div>

          <div className="rise rise-3 mt-8 flex items-center gap-6 opacity-80">
            <img src={logoStar} alt="Sevilla Fashion Week" className="h-14 w-auto" />
            <span className="text-primary/60 font-serif text-3xl">×</span>
            <img src={levelsLogo} alt="Levels" className="h-12 w-auto" />
          </div>

          <h1 className="rise rise-3 mt-6 font-display gold-text text-[clamp(2.25rem,6vw,5rem)] text-balance max-w-4xl">
            Fest <span className="italic font-light">Sevilla</span>
          </h1>

          <p className="rise rise-3 mt-6 max-w-2xl text-balance font-serif italic text-base md:text-xl text-primary/85">
            La convergencia del diseño, el espacio y la cultura electrónica internacional.
          </p>

          <div className="rise rise-4 absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-primary/70">
            <span>Descubrir</span>
            <span className="h-12 w-px bg-gradient-to-b from-silver/60 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* ============ ABOUT + GALLERY ============ */}
      <section className="relative bg-purple-mid py-24 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-5">
                <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-primary">
                  <span className="h-px w-8 bg-primary" />
                  <span>I · Sobre Levels</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl gold-text text-balance">
                  Una década definiendo la <span className="italic">cultura electrónica</span> en Argentina.
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed lg:pt-12">
                <p>
                  Levels es una productora argentina reconocida por curar
                  experiencias inmersivas que unen música electrónica de
                  vanguardia, diseño escenográfico y dirección de arte de
                  estándar internacional.
                </p>
                <p>
                  En Fest Sevilla, Levels traslada su lenguaje al corazón de
                  Andalucía para coproducir las noches oficiales de Sevilla
                  Fashion Week — una pieza diseñada para la industria, los
                  invitados y el público internacional.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Masonry gallery */}
          <div className="mt-16 md:mt-24 columns-1 md:columns-2 lg:columns-3 gap-2 md:gap-3">
            {gallery.map((g, i) => (
              <Reveal key={i} delay={i * 100}>
                <div
                  className={`group relative overflow-hidden hairline ${g.aspect} mb-2 md:mb-3 break-inside-avoid`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 text-[10px] uppercase tracking-[0.32em] text-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {g.alt}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VIDEO ============ */}
      <section className="relative bg-purple-mid py-24 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <Reveal>
            <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-primary">
              <span className="h-px w-8 bg-primary" />
              <span>II · Esto es LEVELS</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl gold-text text-balance">
              Un adelanto de lo que <span className="italic">viene</span>.
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-12 aspect-video w-full hairline overflow-hidden">
              <iframe
                src="https://www.youtube-nocookie.com/embed/WdC2mPiDvBE?autoplay=1&mute=1&loop=1&playlist=WdC2mPiDvBE&controls=1&showinfo=0&rel=0&modestbranding=1"
                title="Levels — Adelanto"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PARTNERS ============ */}
      <section className="relative bg-purple-deep py-24 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <Reveal>
            <div className="text-center">
              <div className="mb-6 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.4em] text-primary">
                <span className="h-px w-8 bg-primary" />
                <span>III · Partners</span>
                <span className="h-px w-8 bg-primary" />
              </div>
              <h2 className="font-display text-4xl md:text-6xl gold-text text-balance">
                Partners de la <span className="italic">experiencia nocturna</span>.
              </h2>
              <p className="mt-6 max-w-xl mx-auto text-sm text-muted-foreground">
                Marcas seleccionadas que dan forma a la atmósfera, la
                producción y la hospitalidad de Fest Sevilla.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
              {partners.map((p, i) => (
                <div
                  key={i}
                  className="aspect-[3/2] bg-card flex items-center justify-center"
                >
                  <div className="font-serif italic text-sm text-primary/30 tracking-wide">
                    {p}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center text-[10px] uppercase tracking-[0.4em] text-primary/40">
              Espacios reservados — Edición 2026
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

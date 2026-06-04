import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import festHero from "@/assets/fest-hero.jpg";

export function FestTeaser() {
  return (
    <section className="relative bg-ink py-24 md:py-40 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img
          src={festHero}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/30" />
      </div>
      <div className="absolute inset-0 noise" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-silver">
                <span className="h-px w-8 bg-silver" />
                <span>After-Hours · Levels</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl silver-text text-balance">
                Donde la alta costura se encuentra con el <span className="italic">ritmo electrónico</span>.
              </h2>
              <p className="mt-8 max-w-xl font-serif italic text-lg md:text-xl text-silver/80">
                «Fest Sevilla: la experiencia oficial After-Hours de SFW, co-producida con Levels.»
              </p>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end">
              <Link
                to="/fest-sevilla"
                className="group inline-flex items-center gap-4 border border-silver/40 px-8 py-5 text-[11px] uppercase tracking-[0.32em] text-silver-bright transition-all duration-500 hover:bg-silver hover:text-ink min-h-[52px]"
              >
                Descubrir Fest
                <span className="h-px w-8 bg-current transition-all duration-500 group-hover:w-14" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

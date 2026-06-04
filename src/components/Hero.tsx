import { Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";


export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      <img
        src={hero}
        alt="Sevilla Fashion Week"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink" />
      <div className="absolute inset-0 noise" />

      {/* Top label */}
      <div className="absolute inset-x-0 top-28 z-10 flex justify-center px-6 rise rise-1">
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-silver">
          <span className="h-px w-10 bg-silver/60" />
          <span>Edición Inaugural · MMXXVI</span>
          <span className="h-px w-10 bg-silver/60" />
        </div>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="rise rise-2 font-display silver-text text-[clamp(3.5rem,11vw,11rem)] text-balance">
          Sevilla<br className="md:hidden" />
          <span className="italic font-light"> Fashion </span>
          Week
        </h1>

        <p className="rise rise-3 mt-8 max-w-xl text-balance font-serif text-lg md:text-xl text-silver/90 italic">
          Un nuevo destino internacional de la moda en el corazón de Andalucía.
        </p>

        <div className="rise rise-3 mt-12 flex items-center gap-6 text-[11px] uppercase tracking-[0.4em] text-silver-bright">
          <span>01 SEP</span>
          <span className="h-px w-8 bg-silver" />
          <span>10 SEP</span>
        </div>

        <div className="rise rise-4 mt-16 flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/patrocinio"
            className="group relative inline-flex items-center justify-center overflow-hidden bg-silver-bright px-10 py-4 text-[11px] uppercase tracking-[0.32em] text-ink transition-all duration-500 hover:bg-silver min-h-[52px]"
          >
            <span className="relative z-10">Convertirse en patrocinador</span>
            <div className="absolute inset-0 shimmer" />
          </Link>
          <Link
            to="/concepto"
            className="group inline-flex items-center gap-3 border border-silver/30 px-10 py-4 text-[11px] uppercase tracking-[0.32em] text-silver-bright transition-all duration-500 hover:border-silver hover:bg-silver/5 min-h-[52px]"
          >
            Descubrir el proyecto
            <span className="h-px w-6 bg-current transition-all duration-500 group-hover:w-10" />
          </Link>

        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-border glass">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-8 px-6 py-5 md:px-12">
          <span className="hidden md:block font-serif text-sm italic text-silver/80">
            Sevilla te invita.
          </span>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
            <span>10 Días</span>
            <span className="h-px w-4 bg-silver/40" />
            <span>3 Fases</span>
            <span className="h-px w-4 bg-silver/40" />
            <span>+50 Diseñadores</span>
            <span className="h-px w-4 bg-silver/40 hidden md:inline-block" />
            <span className="hidden md:inline">Showroom Internacional</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import texture from "@/assets/texture.jpg";
import { Reveal } from "./Reveal";

export function Networking() {
  return (
    <section className="relative overflow-hidden bg-ink py-32 md:py-48">
      <img
        src={texture}
        alt=""
        aria-hidden
        loading="lazy"
        width={1600}
        height={900}
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/40" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-silver">
              <span className="h-px w-8 bg-silver" />
              <span>VI · Plataforma</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl silver-text text-balance">
              Una plataforma internacional de <span className="italic">conexión</span>.
            </h2>
            <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Conectamos marcas, diseñadores, inversores e instituciones en un
              entorno curado donde nacen alianzas estratégicas con proyección
              internacional.
            </p>
          </Reveal>

          <Reveal delay={200} className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-px bg-border h-full">
              {[
                ["+50", "Diseñadores"],
                ["+200", "Marcas invitadas"],
                ["+1 200", "Profesionales"],
                ["+40", "Países"],
              ].map(([k, l]) => (
                <div key={l} className="bg-ink/60 backdrop-blur-sm p-8 flex flex-col justify-between min-h-[180px]">
                  <div className="font-display text-5xl silver-text">{k}</div>
                  <div className="text-[10px] uppercase tracking-[0.32em] text-silver">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

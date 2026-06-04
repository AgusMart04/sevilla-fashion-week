import logoCompleto from "@/assets/logo-completo-png.png";

export function Footer() {
  return (
    <footer className="relative bg-ink border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <img
              src={logoCompleto}
              alt="Sevilla Fashion Week"
              className="h-12 md:h-14 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm text-muted-foreground italic font-serif">
              «Donde la moda se encuentra con la historia.»
            </p>
            <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-silver">
              <span className="h-px w-8 bg-silver" />
              <span>01 — 10 Septiembre 2026</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.4em] text-silver/60 mb-6">
              Contacto
            </div>
            <a
              href="mailto:partners@sevillafashionweek.com"
              className="block font-serif text-base italic text-silver-bright hover:text-silver mb-2"
            >
              partners@sevillafashionweek.com
            </a>
            <a
              href="mailto:press@sevillafashionweek.com"
              className="block font-serif text-base italic text-silver-bright hover:text-silver"
            >
              press@sevillafashionweek.com
            </a>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.4em] text-silver/60 mb-6">
              Síguenos
            </div>
            <div className="flex flex-col gap-2">
              {["Instagram", "LinkedIn", "Vimeo"].map((s) => (
                <a key={s} href="#" className="text-sm text-muted-foreground hover:text-silver-bright transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.4em] text-silver/60 mb-6">
              Institucional
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Aviso legal</span>
              <span>Privacidad</span>
              <span>Press kit</span>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-[10px] uppercase tracking-[0.32em] text-silver/40">
            © MMXXVI · Sevilla Fashion Week × Levels. Todos los derechos reservados.
          </div>
          <div className="text-[10px] uppercase tracking-[0.32em] text-silver/40 italic font-serif">
            Sevilla te invita.
          </div>
        </div>
      </div>
    </footer>
  );
}

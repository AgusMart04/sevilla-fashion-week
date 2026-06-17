import logoCompleto from "@/assets/logo-completo-png.png";

export function Footer() {
  return (
    <footer className="relative bg-purple-deep border-t border-primary/20">
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
            <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-primary">
              <span className="h-px w-8 bg-primary" />
              <span>01 — 10 Septiembre 2026</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.4em] text-primary/60 mb-6">
              Contacto
            </div>
            <a
              href="mailto:sevillafashionweek.oficial@gmail.com"
              className="block font-serif text-base italic text-silver-bright hover:text-silver"
            >
              sevillafashionweek.oficial@gmail.com
            </a>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.4em] text-primary/60 mb-6">
              Síguenos
            </div>
            <div className="flex flex-col gap-3">
              <a href="https://www.instagram.com/sevillafashionweek/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-silver-bright transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                Instagram
              </a>
              <a href="https://www.tiktok.com/@sevillafashionweek" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-silver-bright transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.51a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.56a8.27 8.27 0 0 0 4.76 1.5V6.61a4.83 4.83 0 0 1-1-.01z"/></svg>
                TikTok
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.4em] text-primary/60 mb-6">
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

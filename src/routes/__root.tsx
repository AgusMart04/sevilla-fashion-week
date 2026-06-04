import { Outlet, Link, createRootRoute, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="text-[10px] uppercase tracking-[0.4em] text-silver mb-6">404</div>
        <h1 className="font-display text-6xl silver-text">Página no encontrada</h1>
        <p className="mt-6 text-sm text-muted-foreground">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-3 border border-silver/40 px-8 py-3 text-[11px] uppercase tracking-[0.32em] text-silver-bright transition-all hover:bg-silver hover:text-ink"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error }: { error: Error; reset: () => void }) {
  console.error(error);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-4xl silver-text">Algo no ha cargado</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Vuelve a intentarlo o regresa al inicio.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="/"
            className="border border-border px-6 py-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground hover:text-silver-bright transition-all"
          >
            Inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#070708" },
      { title: "Sevilla Fashion Week" },
      { name: "description", content: "Sevilla Fashion Week — Un nuevo destino internacional de la moda." },
      { property: "og:site_name", content: "Sevilla Fashion Week" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RoutedOutlet() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return (
    <div key={pathname} className="animate-route-fade">
      <Outlet />
    </div>
  );
}

function RootComponent() {
  return (
    <main className="relative bg-background text-foreground min-h-screen flex flex-col">
      <Nav />
      <div className="flex-1">
        <RoutedOutlet />
      </div>
      <Footer />
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { EventSection } from "@/components/EventSection";

export const Route = createFileRoute("/evento")({
  head: () => ({
    meta: [
      { title: "El Evento — Sevilla Fashion Week" },
      { name: "description", content: "Programa, desfiles y experiencias de Sevilla Fashion Week 2026." },
      { property: "og:title", content: "El Evento — Sevilla Fashion Week" },
      { property: "og:description", content: "Diez días, tres fases, más de cincuenta diseñadores." },
      { property: "og:image", content: "https://sevilla-fashion-week-demo.vercel.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://sevilla-fashion-week-demo.vercel.app/og-image.jpg" },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <EventSection />
    </div>
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { SevillaMap } from "@/components/SevillaMap";

export const Route = createFileRoute("/sedes")({
  head: () => ({
    meta: [
      { title: "Sedes — Sevilla Fashion Week" },
      { name: "description", content: "Mapa interactivo con todas las sedes oficiales de Sevilla Fashion Week." },
      { property: "og:title", content: "Sedes — Sevilla Fashion Week" },
      { property: "og:description", content: "Una constelación de localizaciones que componen la experiencia." },
      { property: "og:image", content: "https://sevilla-fashion-week-demo.vercel.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://sevilla-fashion-week-demo.vercel.app/og-image.jpg" },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <SevillaMap />
    </div>
  ),
});

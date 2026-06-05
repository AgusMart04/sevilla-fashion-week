import { createFileRoute } from "@tanstack/react-router";
import { Concept } from "@/components/Concept";

export const Route = createFileRoute("/concepto")({
  head: () => ({
    meta: [
      { title: "Concepto — Sevilla Fashion Week" },
      { name: "description", content: "El concepto de Sevilla Fashion Week: patrimonio, comercio y creatividad como lenguaje común." },
      { property: "og:title", content: "Concepto — Sevilla Fashion Week" },
      { property: "og:description", content: "Donde la moda se encuentra con la historia." },
      { property: "og:image", content: "https://sevilla-fashion-week-demo.vercel.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://sevilla-fashion-week-demo.vercel.app/og-image.jpg" },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Concept />
    </div>
  ),
});

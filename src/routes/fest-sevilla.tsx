import { createFileRoute } from "@tanstack/react-router";
import { FestSevilla } from "@/components/FestSevilla";

export const Route = createFileRoute("/fest-sevilla")({
  head: () => ({
    meta: [
      { title: "Fest Sevilla · Levels — Sevilla Fashion Week" },
      {
        name: "description",
        content:
          "Fest Sevilla: la experiencia oficial After-Hours de Sevilla Fashion Week, co-producida con Levels. Donde la alta costura se encuentra con el ritmo electrónico.",
      },
      { property: "og:title", content: "Fest Sevilla · Levels" },
      { property: "og:description", content: "La experiencia oficial After-Hours de Sevilla Fashion Week." },
      { property: "og:image", content: "https://sevilla-fashion-week-demo.vercel.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://sevilla-fashion-week-demo.vercel.app/og-image.jpg" },
    ],
  }),
  component: FestSevilla,
});

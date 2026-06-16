import { createFileRoute } from "@tanstack/react-router";
import { GuestCountries } from "@/components/GuestCountries";

export const Route = createFileRoute("/paises-invitados")({
  head: () => ({
    meta: [
      { title: "Países Invitados — Sevilla Fashion Week" },
      { name: "description", content: "27 países de cinco continentes reunidos en Sevilla Fashion Week. Descubrí las delegaciones internacionales." },
      { property: "og:title", content: "Países Invitados — Sevilla Fashion Week" },
      { property: "og:description", content: "27 países de cinco continentes reunidos en una pasarela sin fronteras." },
      { property: "og:image", content: "https://sevilla-fashion-week-demo.vercel.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://sevilla-fashion-week-demo.vercel.app/og-image.jpg" },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <GuestCountries />
    </div>
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { Sevilla } from "@/components/Sevilla";

export const Route = createFileRoute("/sevilla")({
  head: () => ({
    meta: [
      { title: "Sevilla — Destino Internacional" },
      { name: "description", content: "Sevilla como destino internacional para la moda: patrimonio, cultura y hospitalidad." },
      { property: "og:title", content: "Sevilla — Destino Internacional" },
      { property: "og:description", content: "Una ciudad que ha hospedado imperios, ahora hospeda a la moda." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Sevilla />
    </div>
  ),
});

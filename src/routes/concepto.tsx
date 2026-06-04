import { createFileRoute } from "@tanstack/react-router";
import { Concept } from "@/components/Concept";

export const Route = createFileRoute("/concepto")({
  head: () => ({
    meta: [
      { title: "Concepto — Sevilla Fashion Week" },
      { name: "description", content: "El concepto de Sevilla Fashion Week: patrimonio, comercio y creatividad como lenguaje común." },
      { property: "og:title", content: "Concepto — Sevilla Fashion Week" },
      { property: "og:description", content: "Donde la moda se encuentra con la historia." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Concept />
    </div>
  ),
});

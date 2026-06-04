import { createFileRoute } from "@tanstack/react-router";
import { EventSection } from "@/components/EventSection";

export const Route = createFileRoute("/evento")({
  head: () => ({
    meta: [
      { title: "El Evento — Sevilla Fashion Week" },
      { name: "description", content: "Programa, desfiles y experiencias de Sevilla Fashion Week 2026." },
      { property: "og:title", content: "El Evento — Sevilla Fashion Week" },
      { property: "og:description", content: "Diez días, tres fases, más de cincuenta diseñadores." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <EventSection />
    </div>
  ),
});

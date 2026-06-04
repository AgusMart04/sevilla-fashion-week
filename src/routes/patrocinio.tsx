import { createFileRoute } from "@tanstack/react-router";
import { Sponsors } from "@/components/Sponsors";
import { Networking } from "@/components/Networking";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/patrocinio")({
  head: () => ({
    meta: [
      { title: "Patrocinio — Sevilla Fashion Week" },
      { name: "description", content: "Oportunidades de patrocinio y colaboración estratégica con Sevilla Fashion Week." },
      { property: "og:title", content: "Patrocinio — Sevilla Fashion Week" },
      { property: "og:description", content: "Asociación exclusiva con un evento internacional de moda en su edición fundacional." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Sponsors />
      <Networking />
      <ContactForm />
    </div>
  ),
});

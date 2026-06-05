import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Sevilla Fashion Week" },
      { name: "description", content: "Formulario de contacto y solicitud de dossier de patrocinio de Sevilla Fashion Week." },
      { property: "og:title", content: "Contacto — Sevilla Fashion Week" },
      { property: "og:description", content: "Súmate a la primera edición de Sevilla Fashion Week. Solicita información sobre patrocinio y colaboración." },
      { property: "og:image", content: "https://sevilla-fashion-week-demo.vercel.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://sevilla-fashion-week-demo.vercel.app/og-image.jpg" },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <ContactForm />
    </div>
  ),
});

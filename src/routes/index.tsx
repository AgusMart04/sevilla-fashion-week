import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Concept } from "@/components/Concept";
import { EventSection } from "@/components/EventSection";
import { Sevilla } from "@/components/Sevilla";
import { SevillaMap } from "@/components/SevillaMap";
import { Sponsors } from "@/components/Sponsors";
import { FestTeaser } from "@/components/FestTeaser";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sevilla Fashion Week — Un nuevo destino internacional de la moda" },
      {
        name: "description",
        content:
          "Sevilla Fashion Week. Del 1 al 10 de septiembre, la moda internacional se encuentra con la historia en Andalucía. Patrocinio, desfiles e industria.",
      },
      { name: "keywords", content: "Sevilla Fashion Week, Fashion Week Sevilla, Fashion Week España, moda Sevilla, pasarela Sevilla" },
      { property: "og:title", content: "Sevilla Fashion Week" },
          { property: "og:description", content: "Un nuevo destino internacional de la moda en el corazón de Andalucía. 1–10 Septiembre." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sevilla-fashion-week-demo.vercel.app" },
      { property: "og:image", content: "https://sevilla-fashion-week-demo.vercel.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://sevilla-fashion-week-demo.vercel.app/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Sevilla Fashion Week",
          startDate: "2026-09-01",
          endDate: "2026-09-10",
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            name: "Sevilla",
            address: { "@type": "PostalAddress", addressLocality: "Sevilla", addressCountry: "ES" },
          },
          description: "Evento internacional de moda en Sevilla — desfiles, showroom e industria.",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  // Handle hash scrolling when landing on / with a #hash (e.g. coming from another route)
  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (!hash) return;
    // Wait for sections (and images) to layout
    const tryScroll = (attempt = 0) => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempt < 20) {
        setTimeout(() => tryScroll(attempt + 1), 100);
      }
    };
    // Defer to allow first paint
    setTimeout(() => tryScroll(), 50);
  }, []);

  return (
    <>
      <Hero />
      <Concept />
      <EventSection />
      <Sevilla />
      <SevillaMap />
      <Sponsors />
      <FestTeaser />
      <ContactForm />
    </>
  );
}

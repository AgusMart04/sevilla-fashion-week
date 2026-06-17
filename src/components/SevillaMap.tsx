import { useEffect, useState, type ComponentType } from "react";
import type { DivIcon } from "leaflet";
import { Reveal } from "./Reveal";

type MapComponents = {
  MapContainer: ComponentType<Record<string, unknown>>;
  TileLayer: ComponentType<Record<string, unknown>>;
  Marker: ComponentType<Record<string, unknown>>;
  Popup: ComponentType<{ children?: React.ReactNode }>;
  silverIcon: DivIcon;
};

// EDITABLE: add/remove/edit map markers here
export const VENUES = [
  {
    id: "plaza-espana",
    name: "Plaza de España",
    type: "Desfile Oficial",
    coords: [37.3772, -5.9869] as [number, number],
    description: "Ceremonia inaugural y desfiles principales bajo la arquería monumental.",
  },
  {
    id: "alcazar",
    name: "Real Alcázar",
    type: "Gala & Showroom",
    coords: [37.3830, -5.9905] as [number, number],
    description: "Showroom histórico y gala privada de patrocinadores.",
  },
  {
    id: "metropol",
    name: "Setas de Sevilla",
    type: "Pasarela Contemporánea",
    coords: [37.3934, -5.9923] as [number, number],
    description: "Desfiles de diseñadores emergentes y propuestas conceptuales.",
  },
  {
    id: "fibes",
    name: "FIBES",
    type: "Industria & Networking",
    coords: [37.4174, -5.9407] as [number, number],
    description: "Rondas de negocio, charlas internacionales y alianzas estratégicas.",
  },
  {
    id: "alfonso-xiii",
    name: "Hotel Alfonso XIII",
    type: "Hospitality Oficial",
    coords: [37.3805, -5.9919] as [number, number],
    description: "Alojamiento oficial de invitados internacionales y prensa.",
  },
  {
    id: "triana",
    name: "Triana",
    type: "Distrito Cultural",
    coords: [37.3826, -6.0008] as [number, number],
    description: "Recorrido cultural y experiencias gastronómicas curadas.",
  },
  {
    id: "sevilla-fc",
    name: "Sevilla Fútbol Club",
    type: "Institución Deportiva",
    coords: [37.3840, -5.9706] as [number, number],
    description: "Estadio Ramón Sánchez-Pizjuán.",
  },
];

const DARK_TILES = "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png";
const LABEL_TILES = "https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png";

export function SevillaMap() {
  const [Comp, setComp] = useState<MapComponents | null>(null);
  const [mapZoom, setMapZoom] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 768 ? 12 : 13
  );

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setMapZoom(e.matches ? 12 : 13);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const [rl, L] = await Promise.all([
        import("react-leaflet"),
        import("leaflet"),
      ]);
      // @ts-ignore
      await import("leaflet/dist/leaflet.css");

      const silverIcon = L.divIcon({
        className: "sfw-marker",
        html: `<div class="sfw-marker-dot"></div><div class="sfw-marker-ring"></div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });

      if (mounted) setComp({ ...rl, silverIcon });
    })();
    return () => {
      mounted = false;
    };
  }, []);


  return (
    <section id="mapa" className="relative bg-purple-deep py-32 md:py-48 overflow-hidden">
      <style>{`
        .sfw-marker { position: relative; }
        .sfw-marker-dot {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 10px; height: 10px; background: oklch(0.78 0.14 85); border-radius: 50%;
          box-shadow: 0 0 0 1px oklch(0.78 0.14 85 / 0.4), 0 0 12px oklch(0.78 0.14 85 / 0.6);
          z-index: 2;
        }
        .sfw-marker-ring {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 28px; height: 28px; border: 1px solid oklch(0.78 0.14 85 / 0.4); border-radius: 50%;
          animation: sfwPulse 2.6s ease-out infinite;
        }
        @keyframes sfwPulse {
          0% { transform: translate(-50%,-50%) scale(0.6); opacity: 1; }
          100% { transform: translate(-50%,-50%) scale(2.2); opacity: 0; }
        }
        .leaflet-container { background: oklch(0.12 0.06 300); font-family: var(--font-sans); }
        .leaflet-popup-content-wrapper {
          background: oklch(0.14 0.06 300 / 0.92);
          backdrop-filter: blur(20px);
          color: oklch(0.96 0.005 80);
          border: 1px solid oklch(1 0 0 / 0.12);
          border-radius: 2px;
          box-shadow: 0 24px 60px oklch(0 0 0 / 0.6);
          padding: 4px;
        }
        .leaflet-popup-content { margin: 16px 18px; min-width: 220px; }
        .leaflet-popup-tip { background: oklch(0.14 0.06 300); border: 1px solid oklch(1 0 0 / 0.12); }
        .leaflet-popup-close-button { color: oklch(0.78 0.14 85) !important; font-size: 18px !important; padding: 8px !important; }
        .leaflet-control-zoom a {
          background: oklch(0.14 0.06 300 / 0.8) !important;
          color: oklch(0.78 0.14 85) !important;
          border: 1px solid oklch(1 0 0 / 0.1) !important;
          backdrop-filter: blur(12px);
        }
        .leaflet-control-attribution {
          background: oklch(0.12 0.06 300 / 0.6) !important;
          color: oklch(0.62 0.008 80) !important;
          font-size: 9px !important;
        }
        .leaflet-control-attribution a { color: oklch(0.78 0.14 85) !important; }
      `}</style>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal>
          <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-8 bg-primary" />
            <span>IV · El Mapa de la Experiencia</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="font-display text-5xl md:text-7xl gold-text max-w-3xl text-balance">
              Sedes y <span className="italic">puntos clave</span>.
            </h2>
            <p className="max-w-md text-muted-foreground">
              La ciudad entera se convierte en escenario. Una constelación de
              localizaciones que componen la experiencia.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16 hairline overflow-hidden">
            <div className="aspect-[4/3] md:aspect-[21/10] w-full bg-purple-deep relative">
              {Comp ? (
                <Comp.MapContainer
                  center={[37.388, -5.982]}
                  zoom={mapZoom}
                  scrollWheelZoom={false}
                  dragging={true}
                  touchZoom={false}
                  doubleClickZoom={false}
                  keyboard={false}
                  zoomControl={false}
                  style={{ height: "100%", width: "100%" }}
                >
                  <Comp.TileLayer url={DARK_TILES} attribution='&copy; OpenStreetMap, CARTO' />
                  <Comp.TileLayer url={LABEL_TILES} />
                  {VENUES.map((v) => (
                    <Comp.Marker key={v.id} position={v.coords} icon={Comp.silverIcon}>
                      <Comp.Popup>
                        <div className="text-[10px] uppercase tracking-[0.32em] text-primary mb-2">
                          {v.type}
                        </div>
                        <div className="font-serif text-xl italic text-primary-bright mb-2">
                          {v.name}
                        </div>
                        <div className="text-xs text-muted-foreground leading-relaxed">
                          {v.description}
                        </div>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.name + ", Sevilla")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-3 text-[10px] uppercase tracking-[0.32em] text-primary/70 border border-silver/30 px-4 py-2 hover:bg-primary/10 transition-colors"
                        >
                          Abrir en Google Maps →
                        </a>
                      </Comp.Popup>
                    </Comp.Marker>
                  ))}
                </Comp.MapContainer>
              ) : (
                <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.32em] text-muted-foreground">
                  Cargando mapa…
                </div>
              )}

            </div>
          </div>


        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-px bg-border">
          {VENUES.map((v, i) => (
            <Reveal key={v.id} delay={i * 80}>
              <div className="bg-card p-5 h-full">
                <div className="text-[9px] uppercase tracking-[0.32em] text-primary/70">
                  {v.type}
                </div>
                <div className="mt-2 font-serif text-base italic text-primary-bright">
                  {v.name}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

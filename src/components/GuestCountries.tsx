import { useState } from "react";
import { Reveal } from "./Reveal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const countries = [
  { name: "Argentina", code: "ar", region: "América del Sur" },
  { name: "España", code: "es", region: "Europa" },
  { name: "Portugal", code: "pt", region: "Europa" },
  { name: "Paraguay", code: "py", region: "América del Sur" },
  { name: "Uruguay", code: "uy", region: "América del Sur" },
  { name: "Panamá", code: "pa", region: "América Central" },
  { name: "Brasil", code: "br", region: "América del Sur" },
  { name: "Bolivia", code: "bo", region: "América del Sur" },
  { name: "Perú", code: "pe", region: "América del Sur" },
  { name: "Colombia", code: "co", region: "América del Sur" },
  { name: "Venezuela", code: "ve", region: "América del Sur" },
  { name: "Rep. Democrática del Congo", code: "cd", region: "África" },
  { name: "Italia", code: "it", region: "Europa" },
  { name: "Singapur", code: "sg", region: "Asia" },
  { name: "Kazajistán", code: "kz", region: "Asia" },
  { name: "Francia", code: "fr", region: "Europa", city: "París" },
  { name: "Reino Unido", code: "gb", region: "Europa", city: "Londres" },
  { name: "México", code: "mx", region: "América del Norte" },
  { name: "Hungría", code: "hu", region: "Europa", city: "Budapest" },
  { name: "Indonesia", code: "id", region: "Asia" },
  { name: "Emiratos Árabes Unidos", code: "ae", region: "Asia", city: "Dubái" },
  { name: "India", code: "in", region: "Asia" },
  { name: "Costa Rica", code: "cr", region: "América Central" },
  { name: "Puerto Rico", code: "pr", region: "Caribe" },
  { name: "Serbia", code: "rs", region: "Europa" },
  { name: "Canadá", code: "ca", region: "América del Norte", city: "Vancouver" },
  { name: "Estados Unidos", code: "us", region: "América del Norte" },
  { name: "Montenegro", code: "me", region: "Europa" },
];

export function GuestCountries() {
  const [selected, setSelected] = useState<(typeof countries)[number] | null>(null);

  return (
    <section id="paises" className="relative bg-purple-mid py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal>
          <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-8 bg-primary" />
            <span>VIII · Países Invitados</span>
          </div>

          <h2 className="font-display text-5xl md:text-7xl gold-text max-w-3xl text-balance">
            28 países. <span className="italic">Una</span> pasarela.
          </h2>
          <div className="mt-6 h-px w-16 gold-line" />

          <p className="mt-6 max-w-md text-muted-foreground">
            Sevilla Fashion Week convoca a la industria de la moda de cinco continentes.
            Cada país aporta su identidad a una pasarela sin fronteras.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-[1px] bg-purple-mid">
          {countries.map((c, i) => (
            <Reveal key={c.name} delay={i * 30}>
              <button
                type="button"
                onClick={() => setSelected(c)}
                className="group relative h-full w-full bg-card px-4 py-5 flex flex-col items-center justify-center text-center transition-all duration-700 hover:bg-purple-deep min-h-[110px] cursor-pointer"
              >
                <img
                  src={`https://flagcdn.com/w80/${c.code}.png`}
                  alt={`Bandera de ${c.name}`}
                  loading="lazy"
                  className="h-7 w-auto rounded-sm transition-transform duration-500 group-hover:scale-110"
                />
                <span className="mt-2 text-[11px] font-medium leading-tight text-foreground">
                  {c.name}
                </span>
                {c.city && (
                  <span className="mt-0.5 text-[9px] text-primary">
                    {c.city}
                  </span>
                )}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="sm:max-w-sm bg-purple-deep border-border">
          {selected && (
            <>
              <DialogTitle className="text-center">
                <span className="sr-only">{selected.name}</span>
              </DialogTitle>
              <div className="flex flex-col items-center gap-4 py-4">
                <img
                  src={`https://flagcdn.com/w320/${selected.code}.png`}
                  alt={`Bandera de ${selected.name}`}
                  className="h-28 w-auto rounded shadow-lg"
                />
                <div className="text-center">
                  <h3 className="text-lg font-display font-medium text-foreground">
                    {selected.name}
                  </h3>
                  <p className="mt-1 text-xs text-primary">{selected.region}</p>
                  {selected.city && (
                    <p className="text-xs text-muted-foreground">
                      Sede: {selected.city}
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

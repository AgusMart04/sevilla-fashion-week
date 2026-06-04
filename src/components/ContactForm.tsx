import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

const CATEGORIES = ["Sponsor", "Diseñador", "Institución", "Prensa", "Otro"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    category: "Sponsor",
    message: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="relative bg-background py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 noise" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-silver">
                <span className="h-px w-8 bg-silver" />
                <span>VII · Únete</span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl silver-text text-balance">
                Súmate a la <span className="italic">primera edición</span>.
              </h2>
              <p className="mt-10 max-w-md text-muted-foreground leading-relaxed">
                Sé parte del inicio de un nuevo destino de la moda. Conversemos
                sobre cómo tu marca o institución puede asociarse a Sevilla
                Fashion Week.
              </p>
              <div className="mt-12 space-y-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.32em] text-silver/60 mb-1">Email</div>
                  <a href="mailto:partners@sevillafashionweek.com" className="font-serif text-xl italic text-silver-bright hover:text-silver">
                    partners@sevillafashionweek.com
                  </a>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.32em] text-silver/60 mb-1">Sede</div>
                  <div className="font-serif text-xl italic text-silver-bright">Sevilla · Andalucía · España</div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={200}>
              <div className="glass p-8 md:p-12">
                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="text-[10px] uppercase tracking-[0.4em] text-silver mb-6">
                      Mensaje recibido
                    </div>
                    <h3 className="font-display text-4xl silver-text">Gracias.</h3>
                    <p className="mt-6 text-muted-foreground max-w-md mx-auto">
                      Nuestro equipo te contactará en las próximas 48h para
                      compartir el dossier de patrocinio.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Field label="Nombre completo" required>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="sfw-input"
                          placeholder="Nombre Apellidos"
                        />
                      </Field>
                      <Field label="Empresa / Organización" required>
                        <input
                          required
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="sfw-input"
                          placeholder="Nombre de la entidad"
                        />
                      </Field>
                      <Field label="Cargo">
                        <input
                          value={form.role}
                          onChange={(e) => setForm({ ...form, role: e.target.value })}
                          className="sfw-input"
                          placeholder="Director / Brand Manager"
                        />
                      </Field>
                      <Field label="Email corporativo" required>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="sfw-input"
                          placeholder="nombre@empresa.com"
                        />
                      </Field>
                    </div>
                    <Field label="Categoría de interés" required>
                      <div className="flex flex-wrap gap-2">
                        {CATEGORIES.map((c) => (
                          <button
                            type="button"
                            key={c}
                            onClick={() => setForm({ ...form, category: c })}
                            className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.24em] border transition-all ${
                              form.category === c
                                ? "bg-silver-bright text-ink border-silver-bright"
                                : "border-border text-silver-bright hover:border-silver/60"
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </Field>
                    <Field label="Mensaje">
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={4}
                        className="sfw-input resize-none"
                        placeholder="Cuéntanos sobre tu interés en el proyecto…"
                      />
                    </Field>
                    <button
                      type="submit"
                      className="group relative w-full md:w-auto inline-flex items-center justify-center overflow-hidden bg-silver-bright px-12 py-4 text-[11px] uppercase tracking-[0.32em] text-ink transition-all hover:bg-silver"
                    >
                      <span className="relative z-10">Enviar solicitud</span>
                      <div className="absolute inset-0 shimmer" />
                    </button>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-silver/40">
                      Sevilla Fashion Week — Comunicación institucional
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        .sfw-input {
          width: 100%;
          background: oklch(0.06 0.002 270 / 0.6);
          border: 1px solid oklch(1 0 0 / 0.08);
          color: oklch(0.96 0.005 80);
          padding: 14px 16px;
          font-size: 14px;
          font-family: var(--font-sans);
          transition: border-color 0.3s, background 0.3s;
        }
        .sfw-input:focus {
          outline: none;
          border-color: oklch(0.78 0.012 80);
          background: oklch(0.08 0.002 270 / 0.8);
        }
        .sfw-input::placeholder { color: oklch(0.5 0.008 80 / 0.6); }
      `}</style>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-[0.32em] text-silver mb-3">
        {label} {required && <span className="text-silver/50">*</span>}
      </span>
      {children}
    </label>
  );
}

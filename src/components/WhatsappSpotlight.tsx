import type { Icon } from "@phosphor-icons/react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { cta, whatsappLink } from "@/config/site";
import { Reveal } from "./Reveal";

export type WhatsappSpotlightItem = {
  icon: Icon;
  title: string;
  body: string;
};

/**
 * Destaque de automação de WhatsApp: o exemplo mais procurado dentro de
 * "automação de processos", não uma quinta frente do negócio. Fica entre
 * Process e IconList em /automacao, depois que o visitante já viu as
 * quatro categorias e o método de diagnóstico primeiro.
 *
 * Reaproveita o gradiente ink-900→ink-950 da célula em destaque do
 * ServiceGrid e o halo dourado decorativo do HeroPanel, em vez de criar
 * um idioma visual novo só para esta seção.
 */
export function WhatsappSpotlight({
  id,
  kicker,
  title,
  body,
  items,
  ctaNote,
  message,
}: {
  id?: string;
  kicker: string;
  title: string;
  body: string;
  items: WhatsappSpotlightItem[];
  /** Linha curta ao lado do botão, no rodapé da seção. */
  ctaNote?: string;
  message?: string;
}) {
  return (
    <section
      id={id}
      className="relative isolate overflow-hidden bg-gradient-to-b from-ink-900 to-ink-950"
    >
      {/* Halo dourado: mesmo idioma decorativo do HeroPanel. Dourado só entra
          como preenchimento translúcido sobre superfície escura, nunca como texto. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 12% 0%, rgba(245,208,13,0.25), transparent 55%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-4 py-1.5 text-xs font-semibold text-ink-950">
            <WhatsappLogo size={14} weight="bold" aria-hidden="true" />
            {kicker}
          </span>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300">
            {body}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.05] p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-500/15">
                  <item.icon size={22} weight="regular" className="text-gold-500" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.24}>
          <div className="mt-12 flex flex-col items-start gap-5 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
            {ctaNote && (
              <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
                {ctaNote}
              </p>
            )}
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform active:scale-[0.98] hover:bg-gold-300"
            >
              <WhatsappLogo size={18} weight="bold" />
              {cta.contact}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

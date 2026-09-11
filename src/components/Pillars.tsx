import Link from "next/link";
import {
  ArrowRight,
  ChartLineUp,
  Robot,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: ChartLineUp,
    kicker: "Para ser encontrado",
    title: "Presença digital",
    body: "O canal onde o cliente descobre a sua empresa e decide entrar em contato.",
    items: [
      "Sites institucionais",
      "Landing pages",
      "Tráfego pago (Google e Meta Ads)",
      "SEO e conteúdo",
      "SEO local (Google Maps)",
    ],
    href: "/presenca-digital",
  },
  {
    icon: Robot,
    kicker: "Para operar sem desperdício",
    title: "Automação e sistemas",
    body: "Onde a operação perde tempo e receita todo mês — medido primeiro, automatizado depois.",
    items: [
      "Diagnóstico operacional",
      "Automação de processos",
      "IA aplicada",
      "Integrações entre sistemas",
    ],
    href: "/automacao",
  },
];

export function Pillars() {
  return (
    <section id="frentes" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <Reveal>
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Duas frentes que trabalham juntas
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.href} delay={i * 0.06} className="h-full">
            <Link
              href={pillar.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-[0_1px_2px_rgba(2,2,2,0.04),0_18px_40px_-24px_rgba(2,2,2,0.35)] transition duration-300 hover:-translate-y-1 hover:border-ink-950 hover:shadow-[0_2px_4px_rgba(2,2,2,0.06),0_28px_60px_-24px_rgba(2,2,2,0.45)] lg:p-10"
            >
              {/* Filete dourado: o dourado só entra como preenchimento, nunca como texto. */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-gold-500"
              />

              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-950">
                <pillar.icon size={26} weight="regular" className="text-gold-500" />
              </span>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {pillar.kicker}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {pillar.title}
              </h3>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-muted">
                {pillar.body}
              </p>

              <ul className="mt-7 flex flex-wrap gap-2 border-t border-border pt-7">
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-surface-alt px-3.5 py-1.5 text-sm font-medium text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <span className="mt-auto pt-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-white transition-colors group-hover:bg-ink-900">
                  Ver detalhes
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

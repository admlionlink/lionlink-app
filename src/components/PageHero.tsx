import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { cta, whatsappLink } from "@/config/site";

/** Hero das páginas internas: mais contido que o da home, sem painel gráfico. */
export function PageHero({
  kicker,
  title,
  body,
  note,
  message,
}: {
  kicker: string;
  title: string;
  body: string;
  /** Linha discreta abaixo do CTA, para contexto extra (ex.: setores atendidos). */
  note?: string;
  message?: string;
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-16 lg:px-8 lg:pt-20 lg:pb-20">
        <p className="text-sm font-medium text-muted">{kicker}</p>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-foreground leading-[1.1] md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
          {body}
        </p>
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-white transition-transform active:scale-[0.98] hover:bg-ink-900"
        >
          <WhatsappLogo size={18} weight="bold" />
          {cta.contact}
        </a>
        {note && (
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted">
            {note}
          </p>
        )}
      </div>
    </section>
  );
}

import { LinkSimple, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { cta, whatsappLink } from "@/config/site";

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-16 pb-20 lg:px-8 lg:pt-20 lg:pb-28">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground leading-[1.1] md:text-5xl lg:text-6xl">
            Conectamos sua empresa aos seus clientes.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            Sites, tráfego pago e automação de atendimento para empresas que
            querem ser encontradas e responder rápido.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-white transition-transform active:scale-[0.98] hover:bg-ink-900"
            >
              <WhatsappLogo size={18} weight="bold" />
              {cta.contact}
            </a>
            <a
              href="#frentes"
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-alt"
            >
              Ver o que fazemos
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <HeroPanel />
        </div>
      </div>
    </section>
  );
}

/**
 * Ilustração do hero: o site que atrai e o atendimento que responde, ligados
 * pelo elo da marca. Construída em CSS — nada de foto de banco de imagem, e
 * nenhuma requisição de imagem no caminho do LCP da home.
 *
 * É decorativa: o h1 e o parágrafo ao lado já dizem tudo que ela mostra, então
 * o painel inteiro fica fora da árvore de acessibilidade.
 *
 * Sem números aqui de propósito. Métrica em ilustração é lida como promessa, e
 * o site não afirma nada que a empresa ainda não tenha para mostrar.
 */
function HeroPanel() {
  return (
    <div
      aria-hidden="true"
      className="relative isolate flex flex-col justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-ink-900 to-ink-950 p-6 sm:p-8 lg:min-h-[440px] lg:p-10"
    >
      {/* Halo dourado: o dourado só entra sobre superfície escura. */}
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 30% 25%, rgba(245,208,13,0.32), transparent 62%)",
        }}
      />

      <div>
        {/* O site: o cliente chega aqui. */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:p-5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="ml-2 flex-1 truncate rounded-full bg-white/[0.07] px-3 py-1 text-[11px] font-medium text-zinc-400">
              lionlink.com.br
            </span>
          </div>

          <div className="mt-5 space-y-2.5">
            <span className="block h-2.5 w-4/5 rounded-full bg-white/25" />
            <span className="block h-2.5 w-3/5 rounded-full bg-white/[0.14]" />
          </div>

          <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-3.5 py-1.5 text-[11px] font-semibold text-ink-950">
            <WhatsappLogo size={12} weight="bold" />
            {cta.contact}
          </span>
        </div>

        {/* O elo: o que liga as duas frentes, e o que dá nome à empresa. */}
        <div className="flex flex-col items-center">
          <span className="h-5 w-px bg-gold-500/50" />
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/30 bg-ink-950">
            <LinkSimple size={16} weight="bold" className="text-gold-500" />
          </span>
          <span className="h-5 w-px bg-gold-500/50" />
        </div>

        {/* O atendimento: o que acontece depois que ele chega. */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/15">
              <WhatsappLogo size={16} weight="fill" className="text-gold-500" />
            </span>
            <p className="text-[13px] font-semibold text-white">
              Atendimento automático
            </p>
          </div>

          <div className="mt-4 space-y-2">
            <span className="block h-6 w-3/5 rounded-xl rounded-bl-sm bg-white/[0.09]" />
            <span className="ml-auto block h-6 w-2/3 rounded-xl rounded-br-sm bg-gold-500/20" />
          </div>
        </div>
      </div>
    </div>
  );
}

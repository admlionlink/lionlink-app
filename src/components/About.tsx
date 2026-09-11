import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { Reveal } from "./Reveal";

/**
 * Bloco editorial, sem imagem de banco. A seção afirma quem está do outro
 * lado do projeto, e foto de banco de imagem numa seção "Sobre" é afirmação
 * falsa sobre identidade — enquanto não houver material real, o texto
 * sustenta sozinho, em escala maior.
 *
 * O rótulo "Sobre a Lion Link" existe só para SEO e leitor de tela (`sr-only`):
 * visualmente o rail mostra o símbolo da marca, sem borda nem fundo — a
 * transparência já vem do PNG.
 *
 * As duas frentes são links de verdade para as páginas-pilar: o sublinhado
 * dourado só se justifica porque leva a algum lugar.
 */
export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-surface-alt">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="flex h-full items-center justify-center lg:col-span-4">
            <h2 className="sr-only">Sobre a Lion Link</h2>
            <Image
              src="/brand/simbolo-icone.png"
              alt=""
              width={312}
              height={185}
              className="h-28 w-auto lg:h-36"
            />
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-8">
            <p className="max-w-2xl text-2xl font-medium leading-[1.4] tracking-tight text-foreground md:text-3xl">
              A {site.name} atende pequenas e médias empresas em duas frentes: a{" "}
              <Link
                href="/presenca-digital"
                className="underline decoration-gold-500 decoration-[3px] underline-offset-[6px] transition-colors hover:decoration-ink-950"
              >
                presença digital
              </Link>{" "}
              que traz o cliente e a{" "}
              <Link
                href="/automacao"
                className="underline decoration-gold-500 decoration-[3px] underline-offset-[6px] transition-colors hover:decoration-ink-950"
              >
                automação
              </Link>{" "}
              que dá conta dele depois que ele chega.
            </p>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted">
              Trabalhamos direto com cada cliente, do primeiro rascunho até o
              projeto no ar, sem repassar o trabalho para terceiros.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

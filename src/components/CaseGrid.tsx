import Image from "next/image";
import { ArrowUpRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

export type CaseItem = {
  tag: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  siteUrl?: string;
  image?: string;
  imageAlt?: string;
};

/** Grade de cases reais, com desafio, solução e resultado medido — não estudo de caso genérico. */
export function CaseGrid({
  title,
  body,
  items,
}: {
  title: string;
  body?: string;
  items: CaseItem[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <Reveal>
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
        {body && (
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
            {body}
          </p>
        )}
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05} className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 z-10 h-1 bg-gold-500"
              />

              {item.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? ""}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  {item.tag}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
                  <p>
                    <span className="font-semibold text-foreground">Desafio: </span>
                    {item.challenge}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Solução: </span>
                    {item.solution}
                  </p>
                </div>

                <ul className="mt-6 space-y-2.5 border-t border-border pt-6 text-sm text-foreground">
                  {item.results.map((result) => (
                    <li key={result} className="flex items-start gap-2.5">
                      <CheckCircle
                        size={18}
                        weight="fill"
                        className="mt-0.5 shrink-0 text-gold-500"
                      />
                      {result}
                    </li>
                  ))}
                </ul>

                {item.siteUrl && (
                  <a
                    href={item.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mt-auto inline-flex w-fit items-center gap-1.5 pt-8 text-sm font-semibold text-foreground transition-colors hover:text-muted"
                  >
                    Ver site
                    <ArrowUpRight size={16} weight="bold" />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "./Reveal";

export type ServiceItem = {
  icon: Icon;
  title: string;
  body: string;
  /** Só o primeiro item usa imagem: ele é a célula em destaque do bento. */
  image?: string;
  imageAlt?: string;
};

/**
 * Bento assimétrico de 4 células: 2+1 na primeira linha, 1+2 na segunda.
 * A quantidade de células acompanha a de itens, então a grade nunca fica com buraco.
 */
export function ServiceGrid({
  title,
  body,
  items,
}: {
  title: string;
  body?: string;
  items: [ServiceItem, ServiceItem, ServiceItem, ServiceItem];
}) {
  const [featured, second, third, fourth] = items;

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

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <div className="relative isolate flex h-full min-h-[280px] flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br from-ink-900 to-ink-950 p-8">
            {featured.image && (
              <>
                <Image
                  src={featured.image}
                  alt={featured.imageAlt ?? ""}
                  fill
                  className="-z-10 object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-ink-950/75 to-ink-950/30" />
              </>
            )}
            <featured.icon size={28} weight="regular" className="mb-4 text-gold-500" />
            <h3 className="text-xl font-semibold text-white">{featured.title}</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-300">
              {featured.body}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="md:col-span-1">
          <div className="flex h-full min-h-[280px] flex-col justify-end rounded-3xl bg-gold-300/30 p-8">
            <second.icon size={28} weight="regular" className="mb-4 text-ink-950" />
            <h3 className="text-xl font-semibold text-foreground">
              {second.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{second.body}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-1">
          <div className="flex h-full min-h-[220px] flex-col justify-end rounded-3xl border border-border bg-surface p-8">
            <third.icon size={28} weight="regular" className="mb-4 text-muted" />
            <h3 className="text-xl font-semibold text-foreground">
              {third.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{third.body}</p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2">
          <div className="flex h-full min-h-[220px] flex-col justify-end rounded-3xl border border-border bg-surface p-8">
            <fourth.icon size={28} weight="regular" className="mb-4 text-muted" />
            <h3 className="text-xl font-semibold text-foreground">
              {fourth.title}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
              {fourth.body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

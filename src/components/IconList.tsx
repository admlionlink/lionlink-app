import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "./Reveal";

export type IconListItem = {
  icon: Icon;
  title: string;
  body: string;
};

/**
 * Lista de itens em duas colunas, cada um com ícone, título e descrição curta.
 * Usada nos diferenciais da home e nas entregas da página de automação.
 */
export function IconList({
  id,
  title,
  body,
  items,
}: {
  id?: string;
  title: string;
  body?: string;
  items: IconListItem[];
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <Reveal>
        <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
        {body && (
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            {body}
          </p>
        )}
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <div className="flex gap-4">
              <item.icon
                size={24}
                weight="regular"
                className="mt-1 shrink-0 text-ink-950"
              />
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

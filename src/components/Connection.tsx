import { Reveal } from "./Reveal";

const moments = [
  {
    title: "Atrair",
    body: "O site e as campanhas trazem gente com intenção real de contratar.",
  },
  {
    title: "Atender",
    body: "A automação de WhatsApp responde na hora, inclusive fora do horário comercial.",
  },
  {
    title: "Operar",
    body: "A automação e os sistemas organizam o que vem depois, e o diagnóstico mostra onde a operação ainda perde.",
  },
];

export function Connection() {
  return (
    <section className="bg-surface-alt">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Por que as duas coisas andam juntas
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
            Trazer visita não resolve se o atendimento demora. Atender rápido
            não resolve se ninguém chega. A Lion Link cuida do caminho inteiro.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {moments.map((moment, i) => (
            <Reveal key={moment.title} delay={i * 0.06}>
              <div className="flex gap-5">
                <span
                  aria-hidden="true"
                  className="mt-1 h-10 w-0.5 shrink-0 rounded-full bg-gold-500"
                />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {moment.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {moment.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

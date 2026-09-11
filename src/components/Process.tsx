import { Reveal } from "./Reveal";

export type ProcessStep = {
  title: string;
  body: string;
};

export function Process({
  title,
  body,
  steps,
}: {
  title: string;
  body?: string;
  steps: ProcessStep[];
}) {
  return (
    <section className="bg-surface-alt">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {title}
          </h2>
          {body && (
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
              {body}
            </p>
          )}
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <div className="border-t-2 border-ink-950 pt-5">
                <span className="font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

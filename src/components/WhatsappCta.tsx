import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { cta, site, whatsappLink } from "@/config/site";
import { Reveal } from "./Reveal";

export function WhatsappCta({
  title,
  body,
  message,
}: {
  title: string;
  body: string;
  message?: string;
}) {
  return (
    <section id="contato" className="bg-ink-950">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:py-28">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-zinc-400">
            {body}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform active:scale-[0.98] hover:bg-gold-300"
            >
              <WhatsappLogo size={18} weight="bold" />
              {cta.contact}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {site.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

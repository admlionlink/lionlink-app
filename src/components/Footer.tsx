import Image from "next/image";
import Link from "next/link";
import { nav, site, whatsappLink } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
          <Link href="/" aria-label={site.name}>
            <Image
              src="/brand/logo-branco.png"
              alt={site.name}
              width={172}
              height={58}
              className="h-8 w-auto"
            />
          </Link>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              WhatsApp
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-500">
            © 2026 {site.name}. Todos os direitos reservados.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-zinc-500 transition-colors hover:text-white"
          >
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}

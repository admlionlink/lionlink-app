// Fonte única dos dados do negócio.
// Um rótulo por intenção: se um texto de CTA muda aqui, muda no site inteiro.

export const site = {
  name: "Lion Link Soluções Digitais",
  shortName: "Lion Link",
  email: "lionlinkbr@gmail.com",

  whatsappNumber: "5511912157087",

  // TODO: confirmar o domínio final antes de publicar.
  url: "https://lionlink.com.br",
} as const;

export const cta = {
  contact: "Falar no WhatsApp",
} as const;

export const nav = [
  { href: "/presenca-digital", label: "Presença digital" },
  { href: "/automacao", label: "Automação" },
  { href: "/#sobre", label: "Sobre" },
] as const;

/**
 * Monta o link do WhatsApp com mensagem pré-preenchida.
 * A mensagem muda por página, para a conversa já começar com contexto.
 */
export function whatsappLink(
  message = "Olá! Vim pelo site e gostaria de conversar sobre um projeto.",
): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

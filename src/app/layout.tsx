import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Sites, tráfego e automação de atendimento`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Criação de sites, tráfego pago, SEO e automação de WhatsApp para empresas que querem ser encontradas e atender rápido.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    url: site.url,
    title: `${site.name} | Sites, tráfego e automação de atendimento`,
    description:
      "Criação de sites, tráfego pago, SEO e automação de WhatsApp para empresas que querem ser encontradas e atender rápido.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}

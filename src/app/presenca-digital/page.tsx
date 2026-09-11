import type { Metadata } from "next";
import {
  Buildings,
  RocketLaunch,
  Target,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { ServiceGrid, type ServiceItem } from "@/components/ServiceGrid";
import { Process } from "@/components/Process";
import { WhatsappCta } from "@/components/WhatsappCta";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Criação de sites, tráfego pago e SEO",
  description:
    "Sites institucionais, landing pages, gestão de tráfego pago no Google e Meta Ads, SEO e otimização para o Google Maps para empresas que precisam ser encontradas.",
  alternates: { canonical: "/presenca-digital" },
};

const services: [ServiceItem, ServiceItem, ServiceItem, ServiceItem] = [
  {
    icon: Buildings,
    title: "Criação de sites institucionais",
    body: "O endereço oficial da sua empresa na internet, com as informações que o cliente procura antes de decidir, texto pensado para converter e pronto para quem acessa pelo celular.",
    image: "https://picsum.photos/seed/lionlink-code-review/1200/800",
    imageAlt: "",
  },
  {
    icon: RocketLaunch,
    title: "Landing pages",
    body: "Páginas focadas em conversão, para campanhas, lançamentos ou captação de contatos.",
  },
  {
    icon: Target,
    title: "Tráfego pago",
    body: "Google Ads para quem já está buscando, Meta Ads para quem ainda não conhece a empresa, e remarketing para quem visitou e não converteu.",
  },
  {
    icon: MagnifyingGlass,
    title: "SEO e conteúdo",
    body: "Estrutura técnica, conteúdo e ficha do Google otimizada para aparecer na busca orgânica e no Google Maps, sem depender só de anúncio.",
  },
];

const steps = [
  {
    title: "Diagnóstico",
    body: "Entendemos o negócio, o público e o que precisa acontecer depois da visita.",
  },
  {
    title: "Estrutura",
    body: "Definimos as páginas, a mensagem e por onde o cliente entra.",
  },
  {
    title: "Produção",
    body: "Construímos o site e preparamos as campanhas para subir junto.",
  },
  {
    title: "Publicação",
    body: "Colocamos no ar, medimos os resultados e ajustamos o que não performou.",
  },
];

export default function PresencaDigitalPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          kicker="Presença digital"
          title="Ser encontrado por quem já está procurando."
          body="Site, landing page, tráfego pago e SEO trabalhando na mesma direção, para a sua empresa aparecer no momento em que o cliente decide contratar."
          message="Olá! Vim pelo site e gostaria de falar sobre site, tráfego ou SEO."
        />
        <ServiceGrid
          title="O que entra nessa frente"
          body="Cada peça resolve uma parte do caminho até o contato. Elas podem ser contratadas juntas ou separadas."
          items={services}
        />
        <Process title="Como conduzimos o projeto" steps={steps} />
        <WhatsappCta
          title="Quer o site e as campanhas rodando juntos?"
          body="Conte como sua empresa capta cliente hoje. A gente aponta o que dá para melhorar antes de qualquer proposta."
          message="Olá! Vim pela página de presença digital e queria conversar sobre um projeto."
        />
      </main>
      <Footer />
    </>
  );
}

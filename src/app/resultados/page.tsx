import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { CaseGrid, type CaseItem } from "@/components/CaseGrid";
import { WhatsappCta } from "@/components/WhatsappCta";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Resultados de clientes reais",
  description:
    "Cases reais de contabilidade, saúde e crédito pessoal: o desafio, o que implementamos e o resultado medido depois.",
  alternates: { canonical: "/resultados" },
};

const cases: CaseItem[] = [
  {
    tag: "Serviços · Contabilidade",
    title: "Diferencial Contábil",
    challenge:
      "15 atendentes espalhados em 5 departamentos, cada um com seu próprio WhatsApp — cliente sem saber para quem ligar e histórico se perdendo em conversa solta.",
    solution:
      "WhatsApp centralizado com CRM integrado e automação de triagem para encaminhar cada conversa ao departamento certo.",
    results: [
      "80% das mensagens respondidas em menos de 2h",
      "Histórico centralizado de mais de 2.000 clientes",
      "15 atendentes operando em um único número",
    ],
    siteUrl: "https://dcontabil.com",
    image: "/cases/diferencial-contabil.webp",
    imageAlt: "Equipe da Diferencial Contábil atendendo pelo computador",
  },
  {
    tag: "Saúde",
    title: "Clínica Shekinah",
    challenge:
      "Recepção sobrecarregada, leads perdidos por falta de resposta rápida e nenhum follow-up com quem não fechava consulta na hora.",
    solution:
      "Chatbot de autoatendimento 24/7 com CRM de histórico de pacientes e campanhas automáticas de reativação.",
    results: [
      "+145% de leads por mês",
      "Agendamento automático, sem depender da recepção",
      "Consultório com fila de espera",
    ],
    siteUrl: "https://clinicashekinah.com.br",
    image: "/cases/clinica-shekinah.webp",
    imageAlt: "Atendimento na Clínica Shekinah",
  },
  {
    tag: "Saúde",
    title: "Dr. André Arouca",
    challenge:
      "Consultório pequeno, crescimento limitado e dependência quase total de indicação boca a boca.",
    solution:
      "WhatsApp integrado, CRM com histórico de pacientes e automação de follow-up e lembrete de consulta.",
    results: [
      "De 5 para 50 pacientes por mês",
      "Fila de espera de 3 meses",
      "Menos faltas com lembretes automáticos",
    ],
    siteUrl: "https://andrearouca.com",
    image: "/cases/andre-arouca.webp",
    imageAlt: "Dr. André Arouca",
  },
  {
    tag: "Financeiro",
    title: "CrediCliente",
    challenge:
      "Pouca visibilidade digital, sem site otimizado e sem estratégia para captar cliente de crédito pessoal online.",
    solution:
      "Site de alta conversão com landing pages por produto de crédito e tráfego pago segmentado no Google e Meta Ads.",
    results: [
      "+100% de leads por mês",
      "Campanhas ativas no Google Ads e Meta Ads",
      "Presença digital consolidada no setor",
    ],
    siteUrl: "https://credicliente.com.br",
  },
];

export default function ResultadosPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          kicker="Resultados"
          title="O que a gente entrega, com nome e resultado."
          body="Quatro empresas, quatro setores diferentes. Aqui está o desafio de cada uma, o que implementamos e o número medido depois — não um estudo de caso genérico."
          message="Olá! Vim pela página de resultados e queria saber mais sobre um projeto parecido."
        />
        <CaseGrid title="Cases" items={cases} />
        <WhatsappCta
          title="Quer um resultado parecido com esse na sua empresa?"
          body="Conte o que você faz e o que hoje trava o crescimento. A gente aponta o caminho antes de qualquer proposta."
          message="Olá! Vim pela página de resultados e gostaria de conversar sobre um projeto."
        />
      </main>
      <Footer />
    </>
  );
}

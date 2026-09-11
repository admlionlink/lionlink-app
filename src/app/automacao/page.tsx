import type { Metadata } from "next";
import {
  MagnifyingGlass,
  Lightning,
  Brain,
  PlugsConnected,
  MapTrifold,
  ListNumbers,
  ChartBar,
  ArrowsClockwise,
  UsersThree,
  ChatCircleDots,
  Robot,
  ClockCountdown,
} from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { ServiceGrid, type ServiceItem } from "@/components/ServiceGrid";
import { Process } from "@/components/Process";
import {
  WhatsappSpotlight,
  type WhatsappSpotlightItem,
} from "@/components/WhatsappSpotlight";
import { IconList, type IconListItem } from "@/components/IconList";
import { WhatsappCta } from "@/components/WhatsappCta";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Automação, IA aplicada e integração de sistemas",
  description:
    "Diagnóstico operacional, automação de processos, IA aplicada e integração entre sistemas para escritórios, times financeiros e clínicas que perdem tempo e receita em rotina manual.",
  alternates: { canonical: "/automacao" },
};

const services: [ServiceItem, ServiceItem, ServiceItem, ServiceItem] = [
  {
    icon: MagnifyingGlass,
    title: "Diagnóstico operacional",
    body: "Mapeamos o fluxo real da operação, não o que está no manual, com número em cima de cada ponto de perda.",
    image: "https://picsum.photos/seed/lionlink-diagnostico/1200/800",
    imageAlt: "",
  },
  {
    icon: Lightning,
    title: "Automação de processos",
    body: "Cobrança, conciliação, aprovação, confirmação, triagem e atendimento no WhatsApp deixam de depender de alguém lembrar.",
  },
  {
    icon: Brain,
    title: "IA aplicada",
    body: "Lê, classifica, resume e organiza o trabalho mecânico. A decisão que exige responsabilidade continua com uma pessoa.",
  },
  {
    icon: PlugsConnected,
    title: "Integrações e sistemas sob medida",
    body: "ERP, banco, agenda, WhatsApp e planilhas conversando entre si, mais as ferramentas internas que faltam no meio do caminho.",
  },
];

const steps = [
  {
    title: "Diagnóstico",
    body: "Onde você perde tempo, onde perde receita e onde assume risco sem saber. Duas a três semanas, com o investimento abatido do projeto.",
  },
  {
    title: "Ganho rápido",
    body: "Entram em produção as automações de retorno mais imediato, com o indicador combinado antes de começar. Trinta a sessenta dias.",
  },
  {
    title: "Implantação",
    body: "Integramos sistemas, redesenhamos o fluxo e treinamos a equipe. Entrega por fases, com resultado visível em cada uma.",
  },
  {
    title: "Sustentação",
    body: "As automações seguem monitoradas e ajustadas, com relatório mensal dos indicadores combinados no começo.",
  },
];

const whatsappFeatures: WhatsappSpotlightItem[] = [
  {
    icon: UsersThree,
    title: "Multiatendimento numa linha só",
    body: "Vários atendentes na mesma conta de WhatsApp, cada um com sua fila, sem conversa cruzada e sem perder o histórico quando muda quem atende.",
  },
  {
    icon: ChatCircleDots,
    title: "Chatbot de pré-atendimento",
    body: "Recebe a conversa, entende o que a pessoa precisa, reúne o básico e encaminha para quem resolve — sem repetir pergunta.",
  },
  {
    icon: Robot,
    title: "Canais de suporte autônomos",
    body: "Horário de funcionamento, status de pedido, dúvida frequente: resolvido sozinho, sem depender de alguém disponível do outro lado.",
  },
  {
    icon: ClockCountdown,
    title: "Resposta na hora, o dia inteiro",
    body: "Fim de semana, feriado ou depois do expediente: a primeira resposta chega na hora, mesmo com a equipe offline.",
  },
];

const deliverables: IconListItem[] = [
  {
    icon: MapTrifold,
    title: "Mapa da operação real",
    body: "O fluxo como ele acontece de verdade, com os pontos de perda marcados e quantificados.",
  },
  {
    icon: ListNumbers,
    title: "Priorização por retorno",
    body: "O que atacar primeiro, o que atacar depois e o que não vale a pena tocar agora.",
  },
  {
    icon: Lightning,
    title: "Automações em produção",
    body: "Construídas, testadas, integradas aos sistemas que você já usa e com a equipe treinada.",
  },
  {
    icon: PlugsConnected,
    title: "Integrações entre sistemas",
    body: "Seu ERP, banco, agenda, WhatsApp e planilhas conversando entre si.",
  },
  {
    icon: ChartBar,
    title: "Painel de indicadores",
    body: "Os números que você nunca teve na mão, atualizados sem ninguém precisar montar.",
  },
  {
    icon: ArrowsClockwise,
    title: "Acompanhamento contínuo",
    body: "Monitoramento, ajuste de regra e novas automações conforme a operação evolui.",
  },
];

export default function AutomacaoPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          kicker="Automação e sistemas"
          title="Sua operação perde dinheiro em lugares que ninguém está olhando."
          body="Mapeamos onde o tempo e a receita vazam e fechamos esses buracos com automação, IA e integração entre sistemas. Começa com um diagnóstico que entrega número, não promessa."
          note="Atendemos escritórios de advocacia, escritórios de contabilidade, times financeiros e clínicas."
          message="Olá! Vim pelo site e gostaria de entender onde minha operação está perdendo."
        />
        <ServiceGrid
          title="Da medição à operação rodando"
          body="Automação escolhida pela ordem de retorno, não pela ordem de novidade."
          items={services}
        />
        <Process
          title="Primeiro a gente mede. Depois automatiza o que dá retorno."
          body="Automação sem diagnóstico é ferramenta cara resolvendo o problema errado."
          steps={steps}
        />
        <WhatsappSpotlight
          id="whatsapp"
          kicker="O exemplo mais procurado"
          title="O WhatsApp responde na hora, inclusive fora do horário comercial."
          body="É o exemplo mais procurado dentro da automação de processos — não é uma frente à parte. Sai do mesmo diagnóstico, só que aplicado ao atendimento que hoje passa pelo WhatsApp da empresa."
          items={whatsappFeatures}
          ctaNote="Quer ver como isso ficaria no atendimento da sua empresa?"
          message="Olá! Vim pela página de automação e queria saber mais sobre a automação de atendimento no WhatsApp."
        />
        <IconList
          title="O que você recebe"
          body="Não é um relatório bonito. É operação rodando."
          items={deliverables}
        />
        <WhatsappCta
          title="Quanto sua operação perde por mês sem ninguém perceber?"
          body="O diagnóstico mostra onde o tempo e a receita vazam e o que dá para recuperar primeiro. Se ao final não fizer sentido seguir, você fica com o mapa."
          message="Olá! Vim pela página de automação e queria saber sobre o diagnóstico operacional."
        />
      </main>
      <Footer />
    </>
  );
}

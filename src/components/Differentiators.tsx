import {
  ChatCircleText,
  CalendarCheck,
  ArrowsLeftRight,
  Code,
} from "@phosphor-icons/react/dist/ssr";
import { IconList, type IconListItem } from "./IconList";

const items: IconListItem[] = [
  {
    icon: ChatCircleText,
    title: "Comunicação direta",
    body: "Você fala direto com quem constrói o projeto, sem intermediários.",
  },
  {
    icon: CalendarCheck,
    title: "Prazos claros",
    body: "Cronograma definido no início, sem surpresa no meio do caminho.",
  },
  {
    icon: ArrowsLeftRight,
    title: "Ponta a ponta",
    body: "Quem constrói o site é quem monta a automação que atende o cliente depois.",
  },
  {
    icon: Code,
    title: "Código que fica com você",
    body: "Projetos entregues com código organizado, sem dependência da agência.",
  },
];

export function Differentiators() {
  return (
    <IconList
      id="diferenciais"
      title="Por que a Lion Link"
      body="Um jeito de trabalhar pensado para empresas que precisam de previsibilidade, não de surpresas no meio do projeto."
      items={items}
    />
  );
}

import { Badge } from "@/src/components/ui/badge";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqProps {
  badge?: string;
  heading?: string;
  description?: string;
  faqs?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    question: "O Vestida é um app de vendas?",
    answer:
      "Não. O Vestida é um app de trocas. Você não compra nem vende, apenas troca vestidos novos ou semi-novos com outras usuárias.",
  },
  {
    question: "Quanto custa usar o app?",
    answer:
      "Teremos uma versão gratuita e planos acessíveis para quem quiser mais recursos, como destaque de vestidos e filtros avançados.",
  },
  {
    question: "É seguro?",
    answer:
      "Sim. Você pode ver o perfil das usuárias antes de trocar e temos recomendações de boas práticas para garantir uma experiência confiável.",
  },
  {
    question: "Preciso ter muitos vestidos para usar o app?",
    answer:
      "Não. Você pode começar com apenas 1 vestido disponível para troca.",
  },
];

const Faq = ({
  badge = "FAQ",
  heading = "Perguntas Frequentes",
  description = "Tire suas dúvidas sobre como funciona o Vestida e como começar a trocar vestidos.",
  faqs = defaultFaqs,
}: FaqProps) => {
  return (
    <section className="py-32" id="faq">
      <div className="container">
        <div className="text-center">
          <Badge className="text-xs font-medium">{badge}</Badge>
          <h1 className="mt-4 text-5xl font-semibold">{heading}</h1>
          <p className="mt-6 font-medium text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-xl">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 flex gap-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{faq.question}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Faq };

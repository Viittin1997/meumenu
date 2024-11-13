import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o robô de WhatsApp?",
    answer: "O robô atende automaticamente as mensagens dos clientes, apresenta o cardápio, processa pedidos e envia confirmações. Ele funciona 24 horas por dia, 7 dias por semana."
  },
  {
    question: "Preciso ter WhatsApp Business?",
    answer: "Sim, é necessário ter uma conta WhatsApp Business para integrar com nossa plataforma. Ajudamos você em todo o processo de configuração."
  },
  {
    question: "Como é feita a integração com impressoras?",
    answer: "Fornecemos um aplicativo que pode ser instalado em qualquer computador conectado à sua impressora térmica. Os pedidos são impressos automaticamente assim que confirmados."
  },
  {
    question: "Posso personalizar as mensagens do robô?",
    answer: "Sim! Você pode personalizar todas as mensagens, incluindo saudações, confirmações e respostas automáticas para adequar à identidade do seu negócio."
  },
  {
    question: "Quanto tempo leva para começar a usar?",
    answer: "A configuração é rápida e pode ser feita no mesmo dia. Nossa equipe oferece suporte completo para garantir que você comece a usar o sistema rapidamente."
  }
];

const FAQ = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tudo que você precisa saber sobre o MeuMenu
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
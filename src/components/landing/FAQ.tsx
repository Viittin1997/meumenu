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
    answer: "Não, você pode usar qualquer número de WhatsApp para integrar com nossa plataforma. Ajudamos você em todo o processo de configuração."
  },
  {
    question: "Como é feita a integração com impressoras?",
    answer: "Fornecemos um aplicativo que pode ser instalado em qualquer computador conectado à sua impressora térmica. Os pedidos são impressos automaticamente assim que confirmados."
  },
  {
    question: "As mensagens do robô podem ser personalizadas?",
    answer: "Para garantir a melhor experiência para seus clientes, o robô utiliza mensagens padronizadas que foram cuidadosamente desenvolvidas para otimizar o processo de atendimento."
  },
  {
    question: "Quanto tempo leva para começar a usar?",
    answer: "O processo de configuração e criação do cardápio digital leva de 1 a 4 dias úteis. Nossa equipe trabalha para garantir que seu cardápio fique perfeito e profissional."
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
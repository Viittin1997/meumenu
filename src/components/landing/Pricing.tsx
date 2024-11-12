import { Check } from "lucide-react";
import CTAButton from "./CTAButton";

const features = [
  "Atendimento via WhatsApp com Robô",
  "Cardápio Digital",
  "Painel de Pedidos",
  "Impressão de Pedidos",
  "Relatórios Financeiros",
  "Abertura e Fechamento de Caixa",
  "Programa Fidelidade",
  "Cupons de Desconto",
  "Sorteio de Pedidos",
  "Sistema de PDV",
  "Sistema de Mesas"
];

const plans = [
  {
    name: "Semestral",
    price: "R$ 637,95",
    period: "/6 meses",
    description: "Economia de 15%",
    discount: "15% OFF"
  },
  {
    name: "Mensal",
    price: "R$ 124,95",
    period: "/mês",
    description: "Pagamento mensal",
    discount: null
  },
  {
    name: "Anual",
    price: "R$ 1.124,95",
    period: "/ano",
    description: "Maior economia",
    discount: "25% OFF"
  }
];

const Pricing = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-xl text-gray-600">
            Todas as funcionalidades em todos os planos
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 ${
                index === 1
                  ? "border-2 border-primary shadow-xl scale-105 bg-primary/5"
                  : "border border-gray-200"
              }`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                {plan.discount && (
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {plan.discount}
                  </span>
                )}
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
                <li className="flex items-center gap-2 bg-primary/10 p-2 rounded-lg">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">SUPORTE 24 HORAS</span>
                </li>
                <li className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
                  <Check className="w-5 h-5 text-gray-400" />
                  <span className="font-medium text-gray-500">Pagamento online (Em breve)</span>
                </li>
              </ul>
              <CTAButton
                text="Começar Agora"
                className={`w-full justify-center ${
                  index !== 1 ? "!bg-secondary !text-primary hover:!bg-secondary/80" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
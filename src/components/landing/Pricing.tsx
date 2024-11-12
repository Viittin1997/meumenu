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
    name: "Mensal",
    price: "R$ 124,95",
    period: "/mês",
    description: "Pagamento mensal",
    discount: null
  },
  {
    name: "Semestral",
    price: "R$ 637,95",
    period: "/6 meses",
    description: "Economia de 15%",
    discount: "15% OFF"
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
                index === 2
                  ? "border-2 border-whatsapp shadow-xl"
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
                  <span className="inline-block bg-whatsapp/10 text-whatsapp px-3 py-1 rounded-full text-sm font-semibold">
                    {plan.discount}
                  </span>
                )}
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-whatsapp" />
                    <span>{feature}</span>
                  </li>
                ))}
                <li className="flex items-center gap-2 bg-whatsapp/10 p-2 rounded-lg">
                  <Check className="w-5 h-5 text-whatsapp" />
                  <span className="font-semibold text-whatsapp">SUPORTE 24 HORAS</span>
                </li>
              </ul>
              <CTAButton
                text="Começar Agora"
                className="w-full justify-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
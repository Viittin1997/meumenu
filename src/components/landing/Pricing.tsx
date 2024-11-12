import { Check } from "lucide-react";
import CTAButton from "./CTAButton";

const plans = [
  {
    name: "Básico",
    price: "R$ 197",
    description: "Ideal para começar",
    features: [
      "Atendimento via WhatsApp",
      "Cardápio Digital",
      "Pedidos Automáticos",
      "Relatórios Básicos",
      "1 Impressora",
    ]
  },
  {
    name: "Profissional",
    price: "R$ 297",
    description: "Mais popular",
    features: [
      "Tudo do Básico",
      "Programa de Fidelidade",
      "Cupons de Desconto",
      "Taxa de Entrega Automática",
      "3 Impressoras",
      "Suporte Prioritário"
    ]
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    description: "Para grandes redes",
    features: [
      "Tudo do Profissional",
      "API Personalizada",
      "Impressoras Ilimitadas",
      "Integrações Customizadas",
      "Gestor de Conta Dedicado",
      "Suporte 24/7"
    ]
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
            Preços acessíveis para todos os tamanhos de negócio
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 ${
                index === 1
                  ? "border-2 border-whatsapp shadow-xl"
                  : "border border-gray-200"
              }`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-2">{plan.price}</div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-whatsapp" />
                    <span>{feature}</span>
                  </li>
                ))}
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
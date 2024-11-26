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
    price: "R$ 599,95",
    period: "/6 meses",
    description: "Economia de 20%",
    discount: "20% OFF"
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
    price: "R$ 974,95",
    period: "/ano",
    description: "Maior economia",
    discount: "35% OFF"
  }
];

const Pricing = () => {
  return (
    <section className="py-12 bg-white">
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
                  ? "border-2 border-primary shadow-xl scale-105 bg-primary text-white"
                  : "border border-gray-200"
              }`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className={index === 1 ? "text-white/80" : "text-gray-600"}>{plan.period}</span>
                </div>
                {plan.discount && (
                  <span className={`inline-block ${index === 1 ? "bg-white text-primary" : "bg-primary/10 text-primary"} px-3 py-1 rounded-full text-sm font-semibold`}>
                    {plan.discount}
                  </span>
                )}
                <p className={index === 1 ? "text-white/80 mt-2" : "text-gray-600 mt-2"}>{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className={`w-5 h-5 ${index === 1 ? "text-white" : "text-primary"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
                <li className={`flex items-center gap-2 ${index === 1 ? "bg-emerald-500 text-white" : "bg-emerald-100"} p-2 rounded-lg`}>
                  <Check className={`w-5 h-5 ${index === 1 ? "text-white" : "text-emerald-600"}`} />
                  <span className={index === 1 ? "font-semibold text-white" : "font-semibold text-emerald-600"}>SUPORTE 24 HORAS</span>
                </li>
                <li className={`flex items-center gap-2 ${index === 1 ? "bg-white/10" : "bg-gray-100"} p-2 rounded-lg`}>
                  <Check className={`w-5 h-5 ${index === 1 ? "text-white/70" : "text-gray-400"}`} />
                  <span className={index === 1 ? "font-medium text-white/70" : "font-medium text-gray-500"}>Pagamento online (Em breve)</span>
                </li>
              </ul>
              <CTAButton
                text="Começar Agora"
                className={`w-full justify-center ${
                  index === 1 
                    ? "!bg-white !text-primary hover:!bg-white/90" 
                    : "!bg-gray-200 !text-primary hover:!bg-gray-300"
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
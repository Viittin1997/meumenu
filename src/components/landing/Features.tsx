import { MessageSquare, Clock, PieChart, Truck, Gift, Printer } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Atendimento Automático",
    description: "Robô inteligente que atende seus clientes 24/7 via WhatsApp"
  },
  {
    icon: Clock,
    title: "Pedidos Instantâneos",
    description: "Processamento automático de pedidos com confirmação imediata"
  },
  {
    icon: PieChart,
    title: "Relatórios Detalhados",
    description: "Acompanhe vendas, produtos mais pedidos e horários de pico"
  },
  {
    icon: Truck,
    title: "Taxa de Entrega",
    description: "Cálculo automático baseado na localização do cliente"
  },
  {
    icon: Gift,
    title: "Programa Fidelidade",
    description: "Sistema de pontos e cupons para fidelizar clientes"
  },
  {
    icon: Printer,
    title: "Impressão Automática",
    description: "Integração com impressoras para pedidos e comandas"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Tudo que você precisa para seu delivery
          </h2>
          <p className="text-xl text-gray-600">
            Ferramentas poderosas para automatizar e crescer seu negócio
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:border-whatsapp/30 hover:shadow-lg transition-all group"
            >
              <feature.icon className="w-12 h-12 text-whatsapp mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
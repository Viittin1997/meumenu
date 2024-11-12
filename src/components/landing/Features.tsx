import { MessageSquare, Clock, PieChart, Truck, Gift, Printer, FileText, Store, Percent, Trophy, Table } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Atendimento via WhatsApp com Robô",
    description: "Robô inteligente que atende seus clientes 24/7 via WhatsApp"
  },
  {
    icon: FileText,
    title: "Cardápio Digital",
    description: "Cardápio digital completo e personalizado para seu negócio"
  },
  {
    icon: Store,
    title: "Painel de Pedidos",
    description: "Gerencie todos os pedidos em um único lugar"
  },
  {
    icon: Printer,
    title: "Impressão de Pedidos",
    description: "Impressão automática de pedidos e comandas"
  },
  {
    icon: PieChart,
    title: "Relatórios Financeiros",
    description: "Acompanhe vendas, produtos mais pedidos e resultados"
  },
  {
    icon: Clock,
    title: "Abertura e Fechamento de Caixa",
    description: "Controle completo do fluxo de caixa do seu negócio"
  },
  {
    icon: Trophy,
    title: "Programa Fidelidade",
    description: "Sistema de pontos para fidelizar seus clientes"
  },
  {
    icon: Percent,
    title: "Cupons de Desconto",
    description: "Crie e gerencie cupons de desconto personalizados"
  },
  {
    icon: Gift,
    title: "Sorteio de Pedidos",
    description: "Realize sorteios automáticos entre seus clientes"
  },
  {
    icon: Store,
    title: "Sistema de PDV",
    description: "PDV completo para gerenciar vendas presenciais"
  },
  {
    icon: Table,
    title: "Sistema de Mesas",
    description: "Controle de mesas para restaurantes e bares"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Todas as funcionalidades que você precisa para seu delivery
          </h2>
          <p className="text-xl text-gray-600">
            Ferramentas poderosas para automatizar e crescer seu negócio
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
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
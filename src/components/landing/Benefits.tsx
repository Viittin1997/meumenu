const benefits = [
  {
    type: "Pizzarias",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    benefits: [
      "Cardápio digital com sabores e bordas",
      "Atendimento automático via WhatsApp",
      "Sistema de mesas e delivery",
      "Relatórios financeiros detalhados",
      "Programa de fidelidade"
    ]
  },
  {
    type: "Hamburguerias",
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398",
    benefits: [
      "Cardápio com personalizações",
      "Robô para atendimento 24h",
      "Cupons de desconto",
      "Sistema de PDV completo",
      "Realização de sorteio de pedidos"
    ]
  },
  {
    type: "Açaíterias",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888",
    benefits: [
      "Montagem personalizada de pedidos",
      "Atendimento via WhatsApp com Robô",
      "Impressão automática de pedidos",
      "Controle de caixa simplificado",
      "Sistema de pontos para clientes"
    ]
  }
];

const Benefits = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Solução ideal para seu negócio
          </h2>
          <p className="text-xl text-gray-600">
            Adaptado para diferentes tipos de estabelecimentos
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.type}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{item.type}</h3>
                <ul className="space-y-3">
                  {item.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-whatsapp"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
const testimonials = [
  {
    name: "João Silva",
    business: "Pizzaria do João",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    text: "Desde que implementamos o MeuMenu, nossas vendas aumentaram 40% e o tempo de atendimento caiu pela metade!"
  },
  {
    name: "Maria Santos",
    business: "Hamburgueria M&M",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    text: "O robô do WhatsApp é incrível! Nossos clientes adoram a praticidade e a rapidez no atendimento."
  },
  {
    name: "Pedro Costa",
    business: "Açaí do Pedro",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    text: "O programa de fidelidade trouxe muitos clientes de volta. A gestão ficou muito mais fácil com os relatórios."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Histórias reais de sucesso com o MeuMenu
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.business}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
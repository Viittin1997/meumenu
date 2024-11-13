const testimonials = [
  {
    name: "João Pedro",
    business: "Pizzaria Peppe Pazzo",
    text: "Desde que implementamos o MeuMenu, nossas vendas aumentaram 40% e o tempo de atendimento caiu pela metade!"
  },
  {
    name: "João Victor",
    business: "Açaí do João",
    text: "O robô do WhatsApp é incrível! Nossos clientes adoram a praticidade e a rapidez no atendimento."
  },
  {
    name: "Lucas Eduardo",
    business: "Hamburgueria Rei do Sabor",
    text: "O programa de fidelidade trouxe muitos clientes de volta. A gestão ficou muito mais fácil com os relatórios."
  }
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50">
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
              <div className="mb-6">
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.business}</p>
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
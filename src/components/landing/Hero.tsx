import { Phone, ArrowRight } from "lucide-react";
import CTAButton from "./CTAButton";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Automatize seu delivery com um
              <span className="text-whatsapp"> robô no WhatsApp</span>
            </h1>
            <p className="text-xl text-gray-600">
              Aumente suas vendas e simplifique o atendimento com um assistente virtual 24/7 que processa pedidos, calcula taxas e fideliza clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton text="Começar Agora" />
              <button className="inline-flex items-center gap-2 text-gray-600 hover:text-whatsapp transition-colors">
                Ver demonstração
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-whatsapp/20 to-transparent rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white p-6 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 border-b pb-4">
                <Phone className="w-6 h-6 text-whatsapp" />
                <span className="font-medium">Atendimento Automático</span>
              </div>
              <div className="space-y-4 mt-4">
                <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
                  Olá! Gostaria de fazer um pedido 😋
                </div>
                <div className="bg-whatsapp/10 p-3 rounded-lg max-w-[80%] ml-auto">
                  Olá! Seja bem-vindo ao MeuMenu! 👋
                  Escolha uma opção:
                  1 - Ver cardápio
                  2 - Fazer pedido
                  3 - Ver promoções
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
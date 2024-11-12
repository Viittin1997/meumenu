import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Benefits from "@/components/landing/Benefits";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import CTAButton from "@/components/landing/CTAButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-whatsapp">MeuMenu</div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="hover:text-whatsapp transition-colors">Recursos</a>
              <a href="#benefits" className="hover:text-whatsapp transition-colors">Benefícios</a>
              <a href="#pricing" className="hover:text-whatsapp transition-colors">Preços</a>
              <CTAButton text="Começar Agora" />
            </nav>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Benefits />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>

      <footer className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-whatsapp mb-4">MeuMenu</h3>
              <p className="text-gray-600">
                Automatização inteligente para seu delivery
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Recursos</li>
                <li>Preços</li>
                <li>Cases</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Sobre</li>
                <li>Contato</li>
                <li>Carreiras</li>
                <li>Imprensa</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Privacidade</li>
                <li>Termos</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-gray-600">
            © 2024 MeuMenu. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Benefits from "@/components/landing/Benefits";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import CTAButton from "@/components/landing/CTAButton";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1 flex justify-center md:justify-start">
              <span className="text-xl font-bold text-primary">MeuMenu</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-sm lg:text-base hover:text-primary transition-colors"
              >
                Recursos
              </button>
              <button 
                onClick={() => scrollToSection('benefits')} 
                className="text-sm lg:text-base hover:text-primary transition-colors"
              >
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-sm lg:text-base hover:text-primary transition-colors"
              >
                Preços
              </button>
              <CTAButton text="Começar Agora" />
            </nav>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="benefits">
          <Benefits />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <Testimonials />
        <FAQ />
      </main>

      <footer className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            © 2024 MeuMenu. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
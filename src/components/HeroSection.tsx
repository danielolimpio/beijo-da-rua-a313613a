import { Button } from "@/components/ui/button";
import { Lock, CheckCircle, Heart } from "lucide-react";
import heroImage from "@/assets/hero-woman-rose.png";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Novos Lugares,
              <br />
              Relacionamentos
              <br />
              Inesquecíveis
            </h1>
            <p className="text-lg text-muted-foreground">
              Junte-se à nossa comunidade hoje! Conheça os melhores apps de namoro para homens brasileiros.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
              Comece Agora
            </Button>
          </div>

          {/* Right Content - Image and Features */}
          <div className="relative">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Mulher sorridente segurando rosa vermelha" 
                className="w-full h-auto object-cover object-bottom"
              />
              
              {/* Feature Tags */}
              <div className="absolute -right-4 top-20 space-y-4">
                <div className="bg-background rounded-full px-6 py-3 shadow-custom-md flex items-center gap-2 border-2 border-primary">
                  <Lock className="w-5 h-5 text-primary" />
                  <span className="font-semibold">100% Privacidade</span>
                </div>
                <div className="bg-background rounded-full px-6 py-3 shadow-custom-md flex items-center gap-2 border-2 border-success">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="font-semibold">Perfis Verificados</span>
                </div>
                <div className="bg-background rounded-full px-6 py-3 shadow-custom-md flex items-center gap-2 border-2 border-primary">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Melhores Matches</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

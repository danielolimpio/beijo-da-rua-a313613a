import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman-rose.png";
import perfisValidados from "@/assets/perfis-validados.png";
import maisMatches from "@/assets/mais-matches.png";
import privado from "@/assets/privado.png";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero pt-8 pb-0 overflow-hidden">
      <div className="container mx-auto px-4 h-full">
        <div className="grid md:grid-cols-2 gap-12 items-center h-full">
          {/* Left Content */}
          <div className="space-y-6 pb-12 -mt-8">
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
          <div className="relative h-[500px] md:h-[550px]">
            <div className="relative h-full">
              <img 
                src={heroImage} 
                alt="Mulher sorridente segurando rosa vermelha" 
                className="w-full h-full object-cover object-bottom"
              />
              
              {/* Feature Tags */}
              <div className="absolute right-16 top-20 space-y-6">
                <img 
                  src={perfisValidados} 
                  alt="Perfis Validados" 
                  className="w-[260px] h-auto animate-float"
                  style={{ animationDelay: '0s' }}
                />
                <img 
                  src={maisMatches} 
                  alt="Mais Matches" 
                  className="w-[260px] h-auto animate-float"
                  style={{ animationDelay: '0.3s' }}
                />
                <img 
                  src={privado} 
                  alt="100% Privado" 
                  className="w-[260px] h-auto animate-float"
                  style={{ animationDelay: '0.6s' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman-rose.png";
import perfisValidados from "@/assets/perfis-validados.png";
import maisMatches from "@/assets/mais-matches.png";
import privado from "@/assets/privado.png";

const HeroSection = () => {
  // Generate hearts with random positions and delays
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    size: 20 + Math.random() * 30,
    animation: ['animate-float-up', 'animate-float-up-slow', 'animate-float-up-fast'][Math.floor(Math.random() * 3)]
  }));

  return (
    <section className="bg-gradient-hero pt-6 sm:pt-8 pb-0 overflow-hidden relative">
      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className={`absolute ${heart.animation}`}
            style={{
              left: `${heart.left}%`,
              bottom: '-10%',
              animationDelay: `${heart.delay}s`,
              width: `${heart.size}px`,
              height: `${heart.size}px`,
              opacity: 0.5,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="hsl(var(--primary))"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-2 sm:px-4 h-full relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center h-full">
          {/* Left Content */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6 pb-6 sm:pb-8 md:pb-12 md:-mt-8 px-2 sm:px-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              Novos Lugares,
              <br />
              Relacionamentos
              <br />
              Inesquecíveis
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Junte-se à nossa comunidade hoje! Conheça os melhores apps de namoro para homens brasileiros.
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg w-full sm:w-auto"
            >
              Comece Agora
            </Button>
          </div>

          {/* Right Content - Image and Features */}
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[550px]">
            <div className="relative h-full">
              <img 
                src={heroImage} 
                alt="Mulher sorridente segurando rosa vermelha" 
                className="w-full h-full object-cover object-bottom"
              />
              
              {/* Feature Tags - Hidden on very small screens, visible on sm+ */}
              <div className="hidden sm:block absolute right-0 md:-right-8 top-10 sm:top-20 space-y-3 sm:space-y-6">
                <img 
                  src={perfisValidados} 
                  alt="Perfis Validados" 
                  className="w-[180px] sm:w-[220px] md:w-[260px] h-auto animate-float"
                  style={{ animationDelay: '0s' }}
                />
                <img 
                  src={maisMatches} 
                  alt="Mais Matches" 
                  className="w-[180px] sm:w-[220px] md:w-[260px] h-auto animate-float"
                  style={{ animationDelay: '0.3s' }}
                />
                <img 
                  src={privado} 
                  alt="100% Privado" 
                  className="w-[180px] sm:w-[220px] md:w-[260px] h-auto animate-float"
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

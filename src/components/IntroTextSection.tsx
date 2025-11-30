const IntroTextSection = () => {
  return (
    <section className="py-8 sm:py-12 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="relative p-6 sm:p-8 rounded-2xl border-4 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 shadow-lg">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-background px-4">
            <span className="text-primary font-bold text-sm">Nosso Propósito</span>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-center text-foreground leading-relaxed">
            Através de um quiz gratuito personalizado, identificamos seu perfil amoroso e indicamos a plataforma ideal — além de conectar você a grupos reais de solteiros com os mesmos interesses. Não somos um app de namoro, somos o guia definitivo para você escolher com inteligência.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroTextSection;

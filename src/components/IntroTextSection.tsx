const IntroTextSection = () => {
  return (
    <section className="pt-0 pb-8 sm:pb-12 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="relative p-6 sm:p-8 rounded-2xl bg-card shadow-custom-md">
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-primary rounded-2xl p-[2px] -z-10">
            <div className="absolute inset-[2px] bg-card rounded-2xl" />
          </div>
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-card px-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent font-bold text-sm">Nosso Propósito</span>
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

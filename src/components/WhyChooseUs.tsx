import { SmilePlus, Target, Filter, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: SmilePlus,
      title: "Fácil de Usar",
      description: "Passos simples para montar seu perfil e começar a conversar.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Target,
      title: "Match Inteligente",
      description: "Descubra quais apps combinam com seu estilo de vida.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Filter,
      title: "Filtre Rápido",
      description: "Não perca tempo. Encontre só o que realmente importa para você.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Shield,
      title: "Comunidade Confiável",
      description: "Dicas reais de homens que já passaram por isso.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-section-alt overflow-x-hidden">
      <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 px-4">
            Por Que Escolher o Beijo da Rua?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Nosso conteúdo é como um guia de bolso para homens que querem entender apps de namoro sem perder tempo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-custom-md text-center hover:shadow-custom-lg transition-shadow"
              >
                <div className={`${feature.bgColor} w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                  <Icon className={`w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 ${feature.color}`} />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

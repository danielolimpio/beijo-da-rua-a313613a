import { SmilePlus, Target, Filter, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: SmilePlus,
      title: "Fácil de Usar",
      description: "Passos simples para montar seu perfil e começar a conversar.",
      color: "text-accent-foreground",
      bgColor: "bg-accent",
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
      color: "text-secondary-foreground",
      bgColor: "bg-secondary",
    },
    {
      icon: Shield,
      title: "Comunidade Confiável",
      description: "Dicas reais de homens que já passaram por isso.",
      color: "text-success",
      bgColor: "bg-success/10",
    },
  ];

  return (
    <section className="py-20 bg-gradient-trust">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Por Que Escolher o Beijo da Rua?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nosso conteúdo é como um guia de bolso para homens que querem entender apps de namoro sem perder tempo.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-custom-md text-center hover:shadow-custom-lg transition-shadow"
              >
                <div className={`${feature.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Icon className={`w-10 h-10 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
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

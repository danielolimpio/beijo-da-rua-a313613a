import { Users, UserCheck, UserPlus, User } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "66.064",
      label: "Membros Totais",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: UserCheck,
      value: "41.906",
      label: "Membros Online",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      icon: UserPlus,
      value: "20.972",
      label: "Mulheres Online",
      color: "text-warning",
      bgColor: "bg-warning/10",
    },
    {
      icon: User,
      value: "6.825",
      label: "Homens Online",
      color: "text-accent-foreground",
      bgColor: "bg-accent",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Tudo Começa Com Um Encontro
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aprenda com quem já conseguiu. Veja como aumentar suas chances de encontrar alguém especial.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-custom-md text-center hover:shadow-custom-lg transition-shadow"
              >
                <div className={`${stat.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

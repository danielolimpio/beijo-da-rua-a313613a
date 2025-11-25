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
    <section className="py-12 sm:py-16 lg:py-20 bg-background overflow-x-hidden">
      <div className="container mx-auto px-2 sm:px-4 max-w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 px-4">
            Tudo Começa Com Um Encontro
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Aprenda com quem já conseguiu. Veja como aumentar suas chances de encontrar alguém especial.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl sm:rounded-2xl p-3 sm:p-6 lg:p-8 shadow-custom-md text-center hover:shadow-custom-lg transition-shadow"
              >
                <div className={`${stat.bgColor} w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4`}>
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${stat.color}`} />
                </div>
                <div className={`text-xl sm:text-2xl lg:text-4xl font-bold mb-1 sm:mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground font-medium">
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

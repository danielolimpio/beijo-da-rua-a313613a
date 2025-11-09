import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PopularMembers = () => {
  const members = [
    { name: "Fernando Souza", status: "registrado há 4 meses", online: true, seed: "Fernando1" },
    { name: "Erika B. Carvalho", status: "registrado há 2 semanas", online: true, seed: "Erika1" },
    { name: "William R. Soares", status: "registrado há 1 semana", online: false, seed: "William1" },
    { name: "Kerolin Rosa", status: "registrado há 3 meses", online: true, seed: "Kerolin1" },
    { name: "Tobias Wagner", status: "registrado há 5 dias", online: true, seed: "Tobias1" },
    { name: "Amanda Silva", status: "registrado há 2 meses", online: false, seed: "Amanda1" },
    { name: "Barros Pereira", status: "registrado há 6 meses", online: true, seed: "Barros1" },
    { name: "Emily Fernandes", status: "registrado há 1 mês", online: true, seed: "Emily1" },
    { name: "Alves Fernandes", status: "registrado há 3 semanas", online: false, seed: "Alves1" },
    { name: "Sousa Carvalho", status: "registrado há 4 dias", online: true, seed: "Sousa1" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Membros Mais Populares
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Inspire-se neles. Aprenda como construir um perfil que atrai matches reais.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="default" className="bg-primary">Novos Membros</Button>
            <Button variant="outline">Membros Ativos</Button>
            <Button variant="outline">Membros Populares</Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
          {members.map((member, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-custom-md text-center hover:shadow-custom-lg transition-shadow"
            >
              <div className="relative inline-block mb-4">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.seed}`}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto border-4 border-primary/20"
                />
                {member.online && (
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-success rounded-full border-4 border-background"></div>
                )}
              </div>
              <h4 className="font-bold text-foreground mb-1">{member.name}</h4>
              <p className="text-xs text-muted-foreground">{member.status}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-secondary text-secondary-foreground">
            Ver Mais Populares
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularMembers;

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import popularMember1 from "@/assets/popular-member1.png";
import popularMember2 from "@/assets/popular-member2.png";
import popularMember3 from "@/assets/popular-member3.png";
import popularMember4 from "@/assets/popular-member4.png";
import popularMember5 from "@/assets/popular-member5.png";
import popularMember6 from "@/assets/popular-member6.png";
import popularMember7 from "@/assets/popular-member7.png";
import popularMember8 from "@/assets/popular-member8.png";
import popularMember9 from "@/assets/popular-member9.png";
import popularMember10 from "@/assets/popular-member10.png";

const PopularMembers = () => {
  const members = [
    { name: "Fernando Souza", status: "registrado há 4 meses", online: true, image: popularMember1 },
    { name: "Erika B. Carvalho", status: "registrado há 2 semanas", online: true, image: popularMember2 },
    { name: "Aline R. Soares", status: "registrado há 1 semana", online: false, image: popularMember3 },
    { name: "Kerolin Rosa", status: "registrado há 3 meses", online: true, image: popularMember4 },
    { name: "Tatiane Figueiredo", status: "registrado há 5 dias", online: true, image: popularMember5 },
    { name: "Amanda Silva", status: "registrado há 2 meses", online: false, image: popularMember6 },
    { name: "Gisele Barros", status: "registrado há 6 meses", online: true, image: popularMember7 },
    { name: "Emily Fernandes", status: "registrado há 1 mês", online: true, image: popularMember8 },
    { name: "Alves Fernandes", status: "registrado há 3 semanas", online: false, image: popularMember9 },
    { name: "Kathy Carvalho", status: "registrado há 4 dias", online: true, image: popularMember10 },
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
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto border-4 border-primary/20 object-cover"
                />
                {member.online && (
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-success rounded-full border-4 border-background animate-pulse"></div>
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

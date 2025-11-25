import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
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
import popularMember11 from "@/assets/popular-member11.jpg";
import popularMember12 from "@/assets/popular-member12.jpg";
import popularMember13 from "@/assets/popular-member13.jpg";
import popularMember14 from "@/assets/popular-member14.jpg";
import popularMember15 from "@/assets/popular-member15.jpg";
import popularMember16 from "@/assets/popular-member16.jpg";
import popularMember17 from "@/assets/popular-member17.jpg";
import popularMember18 from "@/assets/popular-member18.jpg";
import popularMember19 from "@/assets/popular-member19.jpg";
import popularMember20 from "@/assets/popular-member20.jpg";
import popularMember21 from "@/assets/popular-member21.jpg";
import popularMember22 from "@/assets/popular-member22.jpg";
import popularMember23 from "@/assets/popular-member23.jpg";
import popularMember24 from "@/assets/popular-member24.jpg";
import popularMember25 from "@/assets/popular-member25.jpg";
import popularMember26 from "@/assets/popular-member26.jpg";
import popularMember27 from "@/assets/popular-member27.jpg";
import popularMember28 from "@/assets/popular-member28.jpg";
import popularMember29 from "@/assets/popular-member29.jpg";
import popularMember30 from "@/assets/popular-member30.jpg";
import newMember1 from "@/assets/new-member1.jpeg";
import newMember2 from "@/assets/new-member2.jpeg";
import newMember3 from "@/assets/new-member3.jpeg";
import newMember4 from "@/assets/new-member4.jpeg";
import newMember5 from "@/assets/new-member5.jpeg";
import newMember6 from "@/assets/new-member6.jpeg";
import newMember7 from "@/assets/new-member7.jpeg";
import newMember8 from "@/assets/new-member8.jpeg";
import newMember9 from "@/assets/new-member9.jpeg";
import newMember10 from "@/assets/new-member10.jpeg";
import member1 from "@/assets/member1.png";
import member2 from "@/assets/member2.png";
import member3 from "@/assets/member3.png";
import member4 from "@/assets/member4.png";
import member5 from "@/assets/member5.png";
import extraMember1 from "@/assets/extra-member1.jpeg";
import extraMember2 from "@/assets/extra-member2.jpeg";
import extraMember3 from "@/assets/extra-member3.jpeg";
import extraMember4 from "@/assets/extra-member4.jpeg";
import extraMember5 from "@/assets/extra-member5.jpeg";
import extraMember6 from "@/assets/extra-member6.jpeg";
import extraMember7 from "@/assets/extra-member7.jpeg";
import extraMember8 from "@/assets/extra-member8.jpeg";
import extraMember9 from "@/assets/extra-member9.jpeg";

const PopularMembers = () => {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState<"novos" | "ativos" | "populares">("populares");

  // Shuffle array with seed for consistent randomization per filter
  const shuffleArray = <T,>(array: T[], seed: string): T[] => {
    const arr = [...array];
    let currentIndex = arr.length;
    
    // Simple seeded random for consistent but different ordering per filter
    const random = () => {
      const x = Math.sin(seed.split('').reduce((a, b) => a + b.charCodeAt(0), 0) + currentIndex) * 10000;
      return x - Math.floor(x);
    };

    while (currentIndex !== 0) {
      const randomIndex = Math.floor(random() * currentIndex);
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr;
  };

  const allMembers = [
    // Novos membros (menos de 30 dias)
    { name: "Ana M.", status: "registrado há 5 dias", city: "SP - São Paulo", online: true, image: member1, daysRegistered: 5 },
    { name: "Carolina S.", status: "registrado há 2 semanas", city: "RJ - Rio de Janeiro", online: true, image: member2, daysRegistered: 14 },
    { name: "Juliana R.", status: "registrado há 1 semana", city: "MG - Belo Horizonte", online: false, image: member3, daysRegistered: 7 },
    { name: "Patricia L.", status: "registrado há 4 dias", city: "BA - Salvador", online: true, image: member4, daysRegistered: 4 },
    { name: "Beatriz C.", status: "registrado há 4 semanas", city: "RS - Porto Alegre", online: true, image: member5, daysRegistered: 28 },
    { name: "Larissa F.", status: "registrado há 3 dias", city: "SP - Campinas", online: true, image: newMember1, daysRegistered: 3 },
    { name: "Mariana T.", status: "registrado há 6 dias", city: "PR - Curitiba", online: true, image: newMember2, daysRegistered: 6 },
    { name: "Renata S.", status: "registrado há 10 dias", city: "CE - Fortaleza", online: false, image: newMember3, daysRegistered: 10 },
    { name: "Camila R.", status: "registrado há 2 dias", city: "PE - Recife", online: true, image: newMember4, daysRegistered: 2 },
    { name: "Gabriela L.", status: "registrado há 8 dias", city: "SC - Florianópolis", online: true, image: newMember5, daysRegistered: 8 },
    { name: "Fernanda M.", status: "registrado há 12 dias", city: "GO - Goiânia", online: true, image: newMember6, daysRegistered: 12 },
    { name: "Isabela C.", status: "registrado há 2 semanas", city: "AM - Manaus", online: false, image: newMember7, daysRegistered: 15 },
    { name: "Natália P.", status: "registrado há 20 dias", city: "PA - Belém", online: true, image: newMember8, daysRegistered: 20 },
    { name: "Daniela V.", status: "registrado há 3 semanas", city: "MA - São Luís", online: true, image: newMember9, daysRegistered: 25 },
    { name: "Vanessa O.", status: "registrado há 9 dias", city: "ES - Vitória", online: true, image: newMember10, daysRegistered: 9 },
    { name: "Sofia M.", status: "registrado há 5 dias", city: "RJ - Niterói", online: true, image: extraMember1, daysRegistered: 5 },
    { name: "Amanda R.", status: "registrado há 11 dias", city: "SP - Santos", online: false, image: extraMember2, daysRegistered: 11 },
    { name: "Letícia S.", status: "registrado há 7 dias", city: "MG - Uberlândia", online: true, image: extraMember3, daysRegistered: 7 },
    { name: "Bianca T.", status: "registrado há 13 dias", city: "PR - Londrina", online: true, image: extraMember4, daysRegistered: 13 },
    { name: "Carla N.", status: "registrado há 18 dias", city: "RS - Caxias do Sul", online: false, image: extraMember5, daysRegistered: 18 },
    { name: "Luciana P.", status: "registrado há 22 dias", city: "BA - Feira de Santana", online: true, image: extraMember6, daysRegistered: 22 },
    { name: "Rafaela B.", status: "registrado há 16 dias", city: "SC - Joinville", online: true, image: extraMember7, daysRegistered: 16 },
    { name: "Priscila A.", status: "registrado há 28 dias", city: "PE - Caruaru", online: true, image: extraMember8, daysRegistered: 28 },
    { name: "Thais G.", status: "registrado há 19 dias", city: "CE - Juazeiro do Norte", online: false, image: extraMember9, daysRegistered: 19 },
    // Membros existentes
    { name: "Fernando Souza", status: "registrado há 4 meses", city: "SP - São Paulo", online: true, image: popularMember1, daysRegistered: 120 },
    { name: "Erika B. Carvalho", status: "registrado há 2 meses", city: "RJ - Rio de Janeiro", online: true, image: popularMember2, daysRegistered: 60 },
    { name: "Aline R. Soares", status: "registrado há 5 meses", city: "MG - Uberlândia", online: false, image: popularMember3, daysRegistered: 150 },
    { name: "Kerolin Rosa", status: "registrado há 3 meses", city: "BA - Salvador", online: true, image: popularMember4, daysRegistered: 90 },
    { name: "Tatiane Figueiredo", status: "registrado há 2 meses", city: "PR - Londrina", online: true, image: popularMember5, daysRegistered: 60 },
    { name: "Amanda Silva", status: "registrado há 2 meses", city: "RS - Caxias do Sul", online: false, image: popularMember6, daysRegistered: 60 },
    { name: "Gisele Barros", status: "registrado há 6 meses", city: "CE - Fortaleza", online: true, image: popularMember7, daysRegistered: 180 },
    { name: "Emily Fernandes", status: "registrado há 1 mês", city: "PE - Caruaru", online: true, image: popularMember8, daysRegistered: 30 },
    { name: "Alves Fernandes", status: "registrado há 5 meses", city: "SP - Campinas", online: false, image: popularMember9, daysRegistered: 150 },
    { name: "Kathy Carvalho", status: "registrado há 3 meses", city: "AM - Manaus", online: true, image: popularMember10, daysRegistered: 90 },
    { name: "Juliana Costa", status: "registrado há 4 meses", city: "SC - Joinville", online: true, image: popularMember11, daysRegistered: 120 },
    { name: "Rafaela Oliveira", status: "registrado há 1 mês", city: "SP - Santos", online: true, image: popularMember12, daysRegistered: 30 },
    { name: "Camila Ribeiro", status: "registrado há 2 meses", city: "MG - Juiz de Fora", online: false, image: popularMember13, daysRegistered: 60 },
    { name: "Beatriz Santos", status: "registrado há 3 meses", city: "PA - Belém", online: true, image: popularMember14, daysRegistered: 90 },
    { name: "Larissa Martins", status: "registrado há 5 meses", city: "RS - Pelotas", online: true, image: popularMember15, daysRegistered: 150 },
    { name: "Fernanda Lima", status: "registrado há 2 meses", city: "PR - Maringá", online: false, image: popularMember16, daysRegistered: 60 },
    { name: "Priscila Alves", status: "registrado há 4 meses", city: "SP - Ribeirão Preto", online: true, image: popularMember17, daysRegistered: 120 },
    { name: "Mariana Rocha", status: "registrado há 6 meses", city: "RN - Natal", online: true, image: popularMember18, daysRegistered: 180 },
    { name: "Vanessa Souza", status: "registrado há 3 meses", city: "SC - Blumenau", online: false, image: popularMember19, daysRegistered: 90 },
    { name: "Isabela Cardoso", status: "registrado há 1 mês", city: "MG - Montes Claros", online: true, image: popularMember20, daysRegistered: 30 },
    { name: "Letícia Moreira", status: "registrado há 2 meses", city: "RJ - Niterói", online: true, image: popularMember21, daysRegistered: 60 },
    { name: "Bruna Pereira", status: "registrado há 5 meses", city: "SP - Sorocaba", online: false, image: popularMember22, daysRegistered: 150 },
    { name: "Gabriela Nunes", status: "registrado há 3 meses", city: "BA - Feira de Santana", online: true, image: popularMember23, daysRegistered: 90 },
    { name: "Vitória Mendes", status: "registrado há 4 meses", city: "PR - Cascavel", online: true, image: popularMember24, daysRegistered: 120 },
    { name: "Carolina Dias", status: "registrado há 2 meses", city: "SP - Piracicaba", online: false, image: popularMember25, daysRegistered: 60 },
    { name: "Natália Correia", status: "registrado há 2 meses", city: "MG - Contagem", online: true, image: popularMember26, daysRegistered: 60 },
    { name: "Patrícia Teixeira", status: "registrado há 1 mês", city: "RS - Santa Maria", online: true, image: popularMember27, daysRegistered: 30 },
    { name: "Renata Campos", status: "registrado há 5 meses", city: "SP - São José dos Campos", online: false, image: popularMember28, daysRegistered: 150 },
    { name: "Luciana Freitas", status: "registrado há 4 meses", city: "RJ - Petrópolis", online: true, image: popularMember29, daysRegistered: 120 },
    { name: "Daniela Monteiro", status: "registrado há 3 meses", city: "MG - Betim", online: true, image: popularMember30, daysRegistered: 90 },
  ];

  const baseFiltered = allMembers.filter(member => {
    if (filter === "novos") return member.daysRegistered <= 30;
    if (filter === "ativos") return member.online;
    return true; // populares mostra todos
  });

  const filteredMembers = shuffleArray(baseFiltered, filter);
  const displayedMembers = showAll ? filteredMembers : filteredMembers.slice(0, 10);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background overflow-x-hidden">
      <div className="container mx-auto px-2 sm:px-4 max-w-full">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 px-4">
            Membros Mais Populares
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-4 sm:mb-6 px-4">
            Inspire-se neles. Aprenda como construir um perfil que atrai matches reais.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 px-2">
            <Button 
              variant={filter === "novos" ? "default" : "outline"}
              onClick={() => setFilter("novos")}
              className="text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-10"
            >
              Novos Membros
            </Button>
            <Button 
              variant={filter === "ativos" ? "default" : "outline"}
              onClick={() => setFilter("ativos")}
              className="text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-10"
            >
              Membros Ativos
            </Button>
            <Button 
              variant={filter === "populares" ? "default" : "outline"}
              onClick={() => setFilter("populares")}
              className="text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-10"
            >
              Membros Populares
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          {displayedMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-custom-md text-center hover:shadow-custom-lg transition-shadow"
            >
              <div className="relative inline-block mb-2 sm:mb-4">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full mx-auto border-2 sm:border-4 border-primary/20 object-cover"
                />
                <div className={`absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full border-2 sm:border-4 border-background ${
                  member.online 
                    ? 'bg-success animate-pulse' 
                    : 'bg-muted-foreground/40'
                }`}></div>
              </div>
              <h4 className="text-xs sm:text-sm lg:text-base font-bold text-foreground mb-1 truncate">{member.name}</h4>
              <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{member.status}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground font-medium mt-1 truncate">{member.city}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-secondary text-secondary-foreground"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Ver Menos" : "Ver Mais Populares"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularMembers;

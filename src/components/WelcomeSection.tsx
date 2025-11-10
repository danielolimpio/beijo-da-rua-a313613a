import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import member1 from "@/assets/member1.png";
import member2 from "@/assets/member2.png";
import member3 from "@/assets/member3.png";
import member4 from "@/assets/member4.png";
import member5 from "@/assets/member5.png";
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

const WelcomeSection = () => {
  const members = [
    { id: 1, name: "Ana M.", avatar: member1, daysRegistered: 5 },
    { id: 2, name: "Carolina S.", avatar: member2, daysRegistered: 14 },
    { id: 3, name: "Juliana R.", avatar: member3, daysRegistered: 7 },
    { id: 4, name: "Patricia L.", avatar: member4, daysRegistered: 4 },
    { id: 5, name: "Beatriz C.", avatar: member5, daysRegistered: 28 },
    { id: 6, name: "Larissa F.", avatar: newMember1, daysRegistered: 3 },
    { id: 7, name: "Mariana T.", avatar: newMember2, daysRegistered: 6 },
    { id: 8, name: "Renata S.", avatar: newMember3, daysRegistered: 10 },
    { id: 9, name: "Camila R.", avatar: newMember4, daysRegistered: 2 },
    { id: 10, name: "Gabriela L.", avatar: newMember5, daysRegistered: 8 },
    { id: 11, name: "Fernanda M.", avatar: newMember6, daysRegistered: 12 },
    { id: 12, name: "Isabela C.", avatar: newMember7, daysRegistered: 15 },
    { id: 13, name: "Natália P.", avatar: newMember8, daysRegistered: 20 },
    { id: 14, name: "Daniela V.", avatar: newMember9, daysRegistered: 25 },
    { id: 15, name: "Vanessa O.", avatar: newMember10, daysRegistered: 9 },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Bem-vindo ao Beijo da Rua
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Você já encontrou seu match? Mais de 4 milhões de homens já descobriram qual app combina com eles. Junte-se hoje!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Latest Members */}
          <div className="bg-card rounded-2xl p-8 shadow-custom-md">
            <h3 className="text-2xl font-bold mb-6">Últimos membros cadastrados</h3>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {members.map((member) => (
                  <CarouselItem key={member.id} className="basis-1/3 md:basis-1/5">
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                        <img 
                          src={member.avatar} 
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <span className="text-xs mt-2 font-medium text-center">{member.name}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>

          {/* Right: Find Your Match */}
          <div className="bg-primary rounded-2xl p-8 shadow-custom-md text-primary-foreground">
            <h3 className="text-2xl font-bold mb-6">Encontre Seu Par Perfeito</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Sou um(a)</label>
                <Select defaultValue="homem">
                  <SelectTrigger className="w-full bg-background text-foreground">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="homem">Homem</SelectItem>
                    <SelectItem value="mulher">Mulher</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm mb-2">Procuro por</label>
                <Select defaultValue="mulher">
                  <SelectTrigger className="w-full bg-background text-foreground">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mulher">Mulher</SelectItem>
                    <SelectItem value="homem">Homem</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">Idade de</label>
                  <Select defaultValue="18">
                    <SelectTrigger className="w-full bg-background text-foreground">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({length: 63}, (_, i) => i + 18).map((age) => (
                        <SelectItem key={age} value={age.toString()}>{age}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm mb-2">até</label>
                  <Select defaultValue="25">
                    <SelectTrigger className="w-full bg-background text-foreground">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({length: 63}, (_, i) => i + 18).map((age) => (
                        <SelectItem key={age} value={age.toString()}>{age}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2">País</label>
                <Select defaultValue="brasil">
                  <SelectTrigger className="w-full bg-background text-foreground">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="brasil">Brasil</SelectItem>
                    <SelectItem value="portugal">Portugal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full bg-background text-primary hover:bg-background/90 mt-4">
                Buscar Par
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;

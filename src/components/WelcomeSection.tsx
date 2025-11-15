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
              className="w-full mb-6"
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
            
            {/* WhatsApp and Telegram Group Buttons */}
            <div className="flex gap-3">
              <a 
                href="https://gruposdewhats.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Grupos de WhatsApp
              </a>
              
              <a 
                href="https://gruposdotelegram.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#0088cc] hover:bg-[#006BA1] text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Grupos de Telegram
              </a>
            </div>
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

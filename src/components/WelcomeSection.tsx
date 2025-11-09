import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WelcomeSection = () => {
  const members = [
    { id: 1, name: "Fernando S.", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fernando" },
    { id: 2, name: "Erika B.", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Erika" },
    { id: 3, name: "William R.", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=William" },
    { id: 4, name: "Kerolin R.", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kerolin" },
    { id: 5, name: "Tobias W.", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tobias" },
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
            <div className="flex items-center gap-4 mb-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="flex gap-4 flex-1 justify-center">
                {members.map((member) => (
                  <div key={member.id} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-full h-full rounded-full bg-background"
                      />
                    </div>
                    <span className="text-xs mt-2 font-medium">{member.name}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronRight className="w-4 h-4" />
              </Button>
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

import coupleCafe from "@/assets/couple-cafe.jpg";
import couplePark from "@/assets/couple-park.jpg";
import coupleParty from "@/assets/couple-party.jpg";
import { Badge } from "@/components/ui/badge";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      image: coupleCafe,
      category: "Namoro Sério",
      title: "Sonhos se tornam realidade quando você escolhe o app certo",
      author: "Hester Reves",
      date: "16 de abril de 2025",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hester"
    },
    {
      id: 2,
      image: couplePark,
      category: "Amizade",
      title: "Como encontrar amizades verdadeiras através de apps",
      author: "Ana Carolina Silva",
      date: "10 de março de 2025",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana"
    },
    {
      id: 3,
      image: coupleParty,
      category: "Relacionamento Casual",
      title: "Conheci alguém especial sem compromisso nas festas de SP",
      author: "Pedro Miguel Santos",
      date: "25 de fevereiro de 2025",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro"
    }
  ];

  return (
    <section className="py-20 bg-gradient-success">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Histórias de Sucesso do Beijo da Rua
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça histórias reais de homens que encontraram amor, amizade ou parceria através dos apps certos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div 
              key={story.id}
              className="bg-card rounded-2xl overflow-hidden shadow-custom-md hover:shadow-custom-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {story.category}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                  {story.title}
                </h3>
                <div className="flex items-center gap-3">
                  <img 
                    src={story.avatar} 
                    alt={story.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-sm">{story.author}</p>
                    <p className="text-xs text-muted-foreground">{story.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

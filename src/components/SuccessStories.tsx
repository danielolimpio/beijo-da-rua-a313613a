import articleAbordar from "@/assets/article-abordar-mulher.jpg";
import articlePerfilConquistador from "@/assets/article-perfil-conquistador.jpg";
import articleCantadas from "@/assets/article-cantadas-irresistiveis.jpg";
import authorImage from "@/assets/team-daniel.jpg";
import { Badge } from "@/components/ui/badge";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      image: articleAbordar,
      category: "Conquista",
      title: "Como Abordar uma Mulher com Confiança e Naturalidade",
      author: "Daniel Olimpio",
      date: "21 de novembro de 2025",
      avatar: authorImage,
      link: "/blog/posts/como-abordar-uma-mulher-com-confianca"
    },
    {
      id: 2,
      image: articlePerfilConquistador,
      category: "Conquista",
      title: "Os Segredos de um Perfil Conquistador nas Redes Sociais",
      author: "Daniel Olimpio",
      date: "22 de novembro de 2025",
      avatar: authorImage,
      link: "/blog/posts/os-segredos-de-um-perfil-conquistador"
    },
    {
      id: 3,
      image: articleCantadas,
      category: "Conquista",
      title: "Cantadas Irresistíveis que Realmente Funcionam em 2025",
      author: "Daniel Olimpio",
      date: "23 de novembro de 2025",
      avatar: authorImage,
      link: "/blog/posts/cantadas-irresistiveis-que-funcionam"
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
          {stories.map((story) => {
            const CardContent = (
              <div className="bg-card rounded-2xl overflow-hidden shadow-custom-md hover:shadow-custom-lg transition-shadow">
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
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-sm">{story.author}</p>
                      <p className="text-xs text-muted-foreground">{story.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            );

            return story.link ? (
              <a key={story.id} href={story.link} className="block">
                {CardContent}
              </a>
            ) : (
              <div key={story.id}>
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

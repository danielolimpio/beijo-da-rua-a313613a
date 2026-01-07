import { Badge } from "@/components/ui/badge";
import { recentArticles } from "@/data/blogArticles";

const SuccessStories = () => {
  // Pega os 3 artigos mais recentes do blog
  const stories = recentArticles.slice(0, 3).map((article) => ({
    id: article.id,
    image: article.image,
    category: article.category,
    title: article.title,
    author: article.author,
    date: article.date,
    avatar: article.authorImage,
    link: article.link
  }));

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-success overflow-x-hidden">
      <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 px-4">
            Histórias de Sucesso do Beijo da Rua
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Conheça histórias reais de homens que encontraram amor, amizade ou parceria através dos apps certos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {stories.map((story) => {
            const CardContent = (
              <div className="bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-custom-md hover:shadow-custom-lg transition-shadow">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {story.category}
                  </Badge>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
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

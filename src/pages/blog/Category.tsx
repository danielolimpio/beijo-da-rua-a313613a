import { useParams } from "react-router-dom";
import { Heart, Users, MessageCircle, Smartphone, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlogSidebar from "@/components/BlogSidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import authorImage from "@/assets/team-daniel.jpg";
import articleCover from "@/assets/article-abordar-mulher.jpg";
import articlePerfilConquistador from "@/assets/article-perfil-conquistador.jpg";
import articleCantadas from "@/assets/article-cantadas-irresistiveis.jpg";

const categories = {
  conquista: {
    title: "Conquista",
    description: "Aprenda a se aproximar, encantar e criar atração com respeito e autenticidade. Aqui você encontra dicas práticas de abordagem, linguagem corporal, cantadas que funcionam, como lidar com o nervosismo e se tornar um conquistador consciente — do primeiro \"oi\" ao primeiro encontro.",
    icon: Heart,
    color: "text-rose-500"
  },
  relacionamento: {
    title: "Relacionamento",
    description: "Do namoro casual ao amor duradouro: entenda os segredos da convivência saudável, comunicação eficaz, sinais de compatibilidade e como transformar conexões em histórias reais. Artigos com insights psicológicos, dicas práticas e reflexões para quem quer ir além do flerte.",
    icon: Users,
    color: "text-purple-500"
  },
  paquera: {
    title: "Paquera",
    description: "Domine a arte de quebrar o gelo com naturalidade. Descubra como identificar sinais de interesse, flertar sem forçar, iniciar conversas em qualquer lugar — na rua, em festas ou online — e transformar olhares em diálogos reais, sem medo de parecer invasivo ou desesperado.",
    icon: MessageCircle,
    color: "text-blue-500"
  },
  aplicativos: {
    title: "Aplicativos",
    description: "Encontre o app ideal para seu estilo e objetivo amoroso. Reviews completos, dicas de perfil, estratégias para aumentar matches e evitar armadilhas dos principais apps de namoro — do Tinder ao Hinge — tudo atualizado para 2025 e adaptado ao público brasileiro.",
    icon: Smartphone,
    color: "text-green-500"
  },
  autoestima: {
    title: "Autoestima",
    description: "Porque atração começa dentro de você. Aqui você trabalha sua confiança, supera inseguranças, aprende a se valorizar sem depender da validação alheia e constrói uma presença que atrai — não por fingimento, mas por autenticidade e equilíbrio emocional.",
    icon: Sparkles,
    color: "text-amber-500"
  }
};

const articlesByCategory = {
  conquista: [
    {
      id: 3,
      title: "Cantadas Irresistíveis que Realmente Funcionam em 2025",
      excerpt: "Frases criativas, respeitosas e eficazes para quebrar o gelo e causar boa impressão. Testadas e aprovadas por especialistas em conquista.",
      image: articleCantadas,
      author: "Daniel Olimpio",
      authorImage: authorImage,
      date: "23 de novembro de 2025",
      link: "/blog/posts/cantadas-irresistiveis-que-funcionam"
    },
    {
      id: 2,
      title: "Os Segredos de um Perfil Conquistador nas Redes Sociais",
      excerpt: "Descubra como criar uma presença digital que atrai olhares e desperta interesse real. Fotos, bio e atitude: tudo revelado aqui.",
      image: articlePerfilConquistador,
      author: "Daniel Olimpio",
      authorImage: authorImage,
      date: "22 de novembro de 2025",
      link: "/blog/posts/os-segredos-de-um-perfil-conquistador"
    },
    {
      id: 1,
      title: "Como Abordar uma Mulher com Confiança e Naturalidade",
      excerpt: "Aprenda técnicas práticas para iniciar conversas sem medo e conquistar com autenticidade. Dicas que funcionam na rua, em eventos e até online.",
      image: articleCover,
      author: "Daniel Olimpio",
      authorImage: authorImage,
      date: "21 de novembro de 2025",
      link: "/blog/posts/como-abordar-uma-mulher-com-confianca"
    }
  ],
  relacionamento: [],
  paquera: [],
  aplicativos: [],
  autoestima: []
};

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const categoryData = category ? categories[category as keyof typeof categories] : null;

  if (!categoryData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold">Categoria não encontrada</h1>
            <a href="/blog" className="text-primary hover:underline mt-4 inline-block">
              Voltar para o Blog
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = categoryData.icon;
  const articles = category ? articlesByCategory[category as keyof typeof articlesByCategory] : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <a href="/blog" className="text-primary hover:underline mb-4 inline-block">
              ← Voltar para o Blog
            </a>
            <div className="flex items-center gap-4 mb-4">
              <IconComponent className={`h-12 w-12 ${categoryData.color}`} />
              <h1 className="text-4xl md:text-5xl font-bold">{categoryData.title}</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-4xl">
              {categoryData.description}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              {articles.length > 0 ? (
                <div className="space-y-8">
                  {articles.map((article) => (
                    <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover min-h-[200px]"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <CardHeader className="p-0 mb-4">
                            <CardTitle className="text-2xl mb-2 hover:text-primary transition-colors">
                              <a href={article.link}>{article.title}</a>
                            </CardTitle>
                            <CardDescription className="text-base">
                              {article.excerpt}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="p-0">
                            <div className="flex items-center gap-3 mb-4">
                              <img 
                                src={article.authorImage} 
                                alt={article.author}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                              <div>
                                <p className="font-medium text-sm">{article.author}</p>
                                <p className="text-xs text-muted-foreground">{article.date}</p>
                              </div>
                            </div>
                            <Button asChild>
                              <a href={article.link}>Ler artigo completo</a>
                            </Button>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Artigos em breve</CardTitle>
                    <CardDescription>
                      Estamos preparando conteúdos incríveis sobre {categoryData.title.toLowerCase()} para você. 
                      Em breve você encontrará artigos completos, dicas práticas e insights exclusivos aqui.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Enquanto isso, confira nossas outras categorias ou explore nossos apps de namoro recomendados.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            <aside className="lg:w-80">
              <BlogSidebar activeCategory={category} />
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;

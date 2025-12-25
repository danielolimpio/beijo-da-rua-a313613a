import { Heart, Users, MessageCircle, Smartphone, Sparkles, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlogSidebar from "@/components/BlogSidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import StructuredData from "@/components/StructuredData";
import SEO from "@/components/SEO";
import { getWebSiteSchema } from "@/lib/structuredData";
import { recentArticles } from "@/data/blogArticles";

const categories = [
  {
    id: "conquista",
    title: "Conquista",
    description: "Aprenda a se aproximar, encantar e criar atração com respeito e autenticidade. Aqui você encontra dicas práticas de abordagem, linguagem corporal, cantadas que funcionam, como lidar com o nervosismo e se tornar um conquistador consciente — do primeiro \"oi\" ao primeiro encontro.",
    icon: Heart,
    color: "text-rose-500"
  },
  {
    id: "relacionamento",
    title: "Relacionamento",
    description: "Do namoro casual ao amor duradouro: entenda os segredos da convivência saudável, comunicação eficaz, sinais de compatibilidade e como transformar conexões em histórias reais. Artigos com insights psicológicos, dicas práticas e reflexões para quem quer ir além do flerte.",
    icon: Users,
    color: "text-purple-500"
  },
  {
    id: "paquera",
    title: "Paquera",
    description: "Domine a arte de quebrar o gelo com naturalidade. Descubra como identificar sinais de interesse, flertar sem forçar, iniciar conversas em qualquer lugar — na rua, em festas ou online — e transformar olhares em diálogos reais, sem medo de parecer invasivo ou desesperado.",
    icon: MessageCircle,
    color: "text-blue-500"
  },
  {
    id: "aplicativos",
    title: "Aplicativos",
    description: "Encontre o app ideal para seu estilo e objetivo amoroso. Reviews completos, dicas de perfil, estratégias para aumentar matches e evitar armadilhas dos principais apps de namoro — do Tinder ao Hinge — tudo atualizado para 2025 e adaptado ao público brasileiro.",
    icon: Smartphone,
    color: "text-green-500"
  },
  {
    id: "autoestima",
    title: "Autoestima",
    description: "Porque atração começa dentro de você. Aqui você trabalha sua confiança, supera inseguranças, aprende a se valorizar sem depender da validação alheia e constrói uma presença que atrai — não por fingimento, mas por autenticidade e equilíbrio emocional.",
    icon: Sparkles,
    color: "text-amber-500"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Blog - Dicas de Namoro e Relacionamentos"
        description="Conquista, relacionamentos e autoconfiança: artigos e dicas para se destacar nos apps de namoro. Conteúdo atualizado para 2025."
        canonical="https://beijodarua.com.br/blog"
        keywords="blog namoro, dicas relacionamento, conquista, paquera, autoestima"
      />
      <StructuredData data={getWebSiteSchema()} />
      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
      <DynamicBreadcrumb />
      <div className="flex-1 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-primary to-secondary p-4 rounded-full">
                  <BookOpen className="w-12 h-12 text-primary-foreground" strokeWidth={2.5} />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
              Blog Beijo da Rua
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Conquista, relacionamentos e autoconfiança: tudo que você precisa para se destacar no mundo dos apps de namoro
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              {/* Recent Articles */}
              {recentArticles.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Artigos Recentes</h2>
                  <div className="space-y-6">
                    {recentArticles.map((article) => (
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
                            <div className="inline-block px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-medium mb-3">
                              {article.category}
                            </div>
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
                </div>
              )}

              {/* Categories */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Categorias</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <Card key={category.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-center gap-3 mb-2">
                            <IconComponent className={`h-8 w-8 ${category.color}`} />
                            <CardTitle className="text-2xl">{category.title}</CardTitle>
                          </div>
                          <CardDescription className="text-base">
                            {category.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button asChild className="w-full">
                            <a href={`/blog/${category.id}`}>
                              Ver Artigos
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>

            <aside className="lg:w-80">
              <BlogSidebar />
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;

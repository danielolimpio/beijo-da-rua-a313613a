import { Smartphone, ArrowLeft, BookOpen, Shield, Star, Zap, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlogSidebar from "@/components/BlogSidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { recentArticles } from "@/data/blogArticles";

const categoryId = "aplicativos";
const articles = recentArticles.filter(article => article.categoryIds?.includes(categoryId) || article.categoryIds?.includes("apps-de-namoro") || article.categoryId === categoryId || article.categoryId === "apps-de-namoro");

const AplicativosCategory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Aplicativos de Namoro: Reviews e Dicas | Beijo da Rua"
        description="Encontre o app ideal para seu objetivo amoroso. Reviews completos, dicas de perfil e estratégias para aumentar matches no Tinder, Bumble, Happn e mais."
        canonical="https://beijodarua.com.br/blog/aplicativos/"
      />
      <Header />
      <div className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb e Navegação */}
          <div className="mb-8">
            <a href="/blog/" className="text-primary hover:underline mb-4 inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar para o Blog
            </a>
            
            {/* Hero da Categoria */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full bg-green-500/10">
                <Smartphone className="h-12 w-12 text-green-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Aplicativos de Namoro</h1>
            </div>
            
            {/* Descrição Rica SEO */}
            <div className="prose prose-lg max-w-4xl text-muted-foreground space-y-4">
              <p className="text-xl leading-relaxed">
                Encontre o app ideal para seu estilo e objetivo amoroso. Reviews completos, dicas de perfil, 
                estratégias para aumentar matches e evitar armadilhas dos principais apps de namoro — do 
                Tinder ao Hinge — tudo atualizado para 2025 e adaptado ao público brasileiro.
              </p>
            </div>
          </div>

          {/* Seção de Benefícios */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <Card className="bg-gradient-to-br from-green-500/5 to-green-500/10 border-green-500/20">
              <CardContent className="p-4 flex items-center gap-3">
                <Star className="h-8 w-8 text-green-500" />
                <div>
                  <p className="font-semibold">Reviews</p>
                  <p className="text-sm text-muted-foreground">Análises honestas</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-500/5 to-green-500/10 border-green-500/20">
              <CardContent className="p-4 flex items-center gap-3">
                <Zap className="h-8 w-8 text-green-500" />
                <div>
                  <p className="font-semibold">Estratégias</p>
                  <p className="text-sm text-muted-foreground">Mais matches</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-500/5 to-green-500/10 border-green-500/20">
              <CardContent className="p-4 flex items-center gap-3">
                <Shield className="h-8 w-8 text-green-500" />
                <div>
                  <p className="font-semibold">Segurança</p>
                  <p className="text-sm text-muted-foreground">Evite golpes</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-500/5 to-green-500/10 border-green-500/20">
              <CardContent className="p-4 flex items-center gap-3">
                <Users className="h-8 w-8 text-green-500" />
                <div>
                  <p className="font-semibold">Comparativos</p>
                  <p className="text-sm text-muted-foreground">App ideal</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Conteúdo Educativo SEO */}
          <div className="bg-card rounded-xl p-6 md:p-8 mb-12 border">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-green-500" />
              Como Escolher o Melhor App de Namoro?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Com dezenas de apps de namoro disponíveis no Brasil, escolher o certo pode ser a diferença 
                entre encontrar alguém especial ou perder tempo com frustrações. Cada app tem seu público, 
                algoritmo e dinâmica — e conhecer essas nuances é essencial.
              </p>
              <p>
                Nesta categoria, você encontra reviews detalhados do Tinder, Bumble, Happn, Hinge, Badoo, 
                Facebook Dating e outros. Analisamos funcionalidades, preços, público predominante e, 
                principalmente, qual app funciona melhor para cada objetivo: casual, sério, ou específico.
              </p>
              <p>
                <strong>Além dos reviews:</strong> ensinamos como criar perfis que se destacam, escolher 
                fotos que geram matches, escrever bios atraentes e iniciar conversas que realmente levam 
                a encontros. Estratégias testadas e adaptadas para o cenário brasileiro.
              </p>
            </div>
          </div>

          {/* Apps em Destaque */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Apps Analisados</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Tinder", link: "/apps/tinder", color: "from-rose-500/10 to-rose-500/20" },
                { name: "Bumble", link: "/apps/bumble", color: "from-yellow-500/10 to-yellow-500/20" },
                { name: "Happn", link: "/apps/happn", color: "from-orange-500/10 to-orange-500/20" },
                { name: "Hinge", link: "/apps/hinge", color: "from-purple-500/10 to-purple-500/20" },
                { name: "Badoo", link: "/apps/badoo", color: "from-indigo-500/10 to-indigo-500/20" },
                { name: "OkCupid", link: "/apps/okcupid", color: "from-blue-500/10 to-blue-500/20" },
              ].map((app) => (
                <a 
                  key={app.name}
                  href={app.link}
                  className={`bg-gradient-to-br ${app.color} rounded-lg p-4 text-center hover:scale-105 transition-transform border`}
                >
                  <p className="font-semibold">{app.name}</p>
                  <p className="text-xs text-muted-foreground">Ver análise</p>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6">Artigos sobre Apps de Namoro</h2>
              
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
                <Card className="bg-gradient-to-br from-green-500/5 to-transparent">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-green-500" />
                      Mais Artigos em Breve
                    </CardTitle>
                    <CardDescription className="text-base">
                      Estamos preparando mais conteúdos sobre apps de namoro. 
                      Em breve você encontrará comparativos detalhados, guias de otimização 
                      de perfil e estratégias avançadas para cada plataforma.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Enquanto isso, explore nossas páginas dedicadas a cada app — 
                      com análises completas e dicas específicas.
                    </p>
                    <Button asChild variant="outline">
                      <a href="/apps-de-namoro/">Ver todos os Apps</a>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>

            <aside className="lg:w-80">
              <BlogSidebar activeCategory={categoryId} />
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AplicativosCategory;

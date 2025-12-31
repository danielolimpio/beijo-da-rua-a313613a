import { Users, ArrowLeft, BookOpen, Heart, MessageCircle, Shield, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlogSidebar from "@/components/BlogSidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { recentArticles } from "@/data/blogArticles";

const categoryId = "relacionamento";
const articles = recentArticles.filter(article => article.categoryId === categoryId);

const RelacionamentoCategory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Relacionamento Sério e Duradouro | Beijo da Rua"
        description="Do namoro ao amor duradouro: dicas de comunicação, compatibilidade e convivência saudável. Transforme conexões em relacionamentos reais e significativos."
        canonical="https://beijodarua.com.br/blog/relacionamento/"
      />
      <Header />
      <div className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb e Navegação */}
          <div className="mb-8">
            <a href="/blog" className="text-primary hover:underline mb-4 inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar para o Blog
            </a>
            
            {/* Hero da Categoria */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full bg-purple-500/10">
                <Users className="h-12 w-12 text-purple-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Relacionamento</h1>
            </div>
            
            {/* Descrição Rica SEO */}
            <div className="prose prose-lg max-w-4xl text-muted-foreground space-y-4">
              <p className="text-xl leading-relaxed">
                Do namoro casual ao amor duradouro: entenda os segredos da convivência saudável, comunicação eficaz, 
                sinais de compatibilidade e como transformar conexões em histórias reais. Artigos com insights 
                psicológicos, dicas práticas e reflexões para quem quer ir além do flerte.
              </p>
            </div>
          </div>

          {/* Seção de Benefícios */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <Card className="bg-gradient-to-br from-purple-500/5 to-purple-500/10 border-purple-500/20">
              <CardContent className="p-4 flex items-center gap-3">
                <Heart className="h-8 w-8 text-purple-500" />
                <div>
                  <p className="font-semibold">Conexão Real</p>
                  <p className="text-sm text-muted-foreground">Além da atração</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500/5 to-purple-500/10 border-purple-500/20">
              <CardContent className="p-4 flex items-center gap-3">
                <MessageCircle className="h-8 w-8 text-purple-500" />
                <div>
                  <p className="font-semibold">Comunicação</p>
                  <p className="text-sm text-muted-foreground">Base do sucesso</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500/5 to-purple-500/10 border-purple-500/20">
              <CardContent className="p-4 flex items-center gap-3">
                <Shield className="h-8 w-8 text-purple-500" />
                <div>
                  <p className="font-semibold">Confiança</p>
                  <p className="text-sm text-muted-foreground">Pilar essencial</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500/5 to-purple-500/10 border-purple-500/20">
              <CardContent className="p-4 flex items-center gap-3">
                <Clock className="h-8 w-8 text-purple-500" />
                <div>
                  <p className="font-semibold">Longevidade</p>
                  <p className="text-sm text-muted-foreground">Amor duradouro</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Conteúdo Educativo SEO */}
          <div className="bg-card rounded-xl p-6 md:p-8 mb-12 border">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-purple-500" />
              Como Construir Relacionamentos que Duram?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Conquistar é apenas o primeiro passo. O verdadeiro desafio — e a maior recompensa — está em 
                transformar uma conexão inicial em um relacionamento sólido, saudável e duradouro. Nesta categoria, 
                você encontra o mapa para essa jornada.
              </p>
              <p>
                Abordamos desde os primeiros passos do namoro até questões de convivência a longo prazo: como manter 
                a chama acesa, resolver conflitos sem destruir a relação, identificar sinais de compatibilidade real, 
                e construir uma parceria baseada em respeito mútuo e crescimento conjunto.
              </p>
              <p>
                <strong>Relacionamentos bem-sucedidos não acontecem por acaso.</strong> Eles são construídos 
                diariamente através de escolhas conscientes, comunicação aberta e disposição para evoluir juntos. 
                Aqui você aprende os fundamentos que ninguém te ensinou.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6">Artigos sobre Relacionamento</h2>
              
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
                <Card className="bg-gradient-to-br from-purple-500/5 to-transparent">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-purple-500" />
                      Artigos em Desenvolvimento
                    </CardTitle>
                    <CardDescription className="text-base">
                      Estamos preparando conteúdos profundos sobre relacionamentos saudáveis e duradouros. 
                      Em breve você encontrará artigos sobre comunicação, resolução de conflitos, 
                      compatibilidade e como manter a chama acesa.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Enquanto isso, explore nossos artigos sobre conquista — a primeira etapa 
                      para construir qualquer relacionamento significativo.
                    </p>
                    <Button asChild variant="outline">
                      <a href="/blog/conquista">Ver artigos de Conquista</a>
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

export default RelacionamentoCategory;

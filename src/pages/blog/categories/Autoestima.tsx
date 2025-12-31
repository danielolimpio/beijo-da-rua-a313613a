import { Sparkles, ArrowLeft, BookOpen, Heart, Brain, Star, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlogSidebar from "@/components/BlogSidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { recentArticles } from "@/data/blogArticles";

const categoryId = "autoestima";
const articles = recentArticles.filter(article => article.categoryId === categoryId);

const AutoestimaCategory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Autoestima e Confiança para Conquistar | Beijo da Rua"
        description="Desenvolva autoestima sólida e confiança genuína. Aprenda a se valorizar, superar inseguranças e construir uma presença atraente que conquista naturalmente."
        canonical="https://beijodarua.com.br/blog/autoestima/"
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
              <div className="p-4 rounded-full bg-amber-500/10">
                <Sparkles className="h-12 w-12 text-amber-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Autoestima</h1>
            </div>
            
            {/* Descrição Rica SEO */}
            <div className="prose prose-lg max-w-4xl text-muted-foreground space-y-4">
              <p className="text-xl leading-relaxed">
                Porque atração começa dentro de você. Aqui você trabalha sua confiança, supera inseguranças, 
                aprende a se valorizar sem depender da validação alheia e constrói uma presença que atrai — 
                não por fingimento, mas por autenticidade e equilíbrio emocional.
              </p>
            </div>
          </div>

          {/* Seção de Benefícios */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <Card className="bg-gradient-to-br from-amber-500/5 to-amber-500/10 border-amber-500/20">
              <CardContent className="p-4 flex items-center gap-3">
                <Heart className="h-8 w-8 text-amber-500" />
                <div>
                  <p className="font-semibold">Amor Próprio</p>
                  <p className="text-sm text-muted-foreground">Base da conquista</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-500/5 to-amber-500/10 border-amber-500/20">
              <CardContent className="p-4 flex items-center gap-3">
                <Brain className="h-8 w-8 text-amber-500" />
                <div>
                  <p className="font-semibold">Mentalidade</p>
                  <p className="text-sm text-muted-foreground">Pensamento vencedor</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-500/5 to-amber-500/10 border-amber-500/20">
              <CardContent className="p-4 flex items-center gap-3">
                <Star className="h-8 w-8 text-amber-500" />
                <div>
                  <p className="font-semibold">Presença</p>
                  <p className="text-sm text-muted-foreground">Carisma natural</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-500/5 to-amber-500/10 border-amber-500/20">
              <CardContent className="p-4 flex items-center gap-3">
                <Target className="h-8 w-8 text-amber-500" />
                <div>
                  <p className="font-semibold">Propósito</p>
                  <p className="text-sm text-muted-foreground">Direção clara</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Conteúdo Educativo SEO */}
          <div className="bg-card rounded-xl p-6 md:p-8 mb-12 border">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-amber-500" />
              Por Que Autoestima é o Segredo da Conquista?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                A autoestima é o alicerce invisível de toda conquista bem-sucedida. Quando você se valoriza genuinamente, 
                essa energia é percebida por quem está ao seu redor. Mulheres são naturalmente atraídas por homens que 
                demonstram segurança sem arrogância, presença sem desespero.
              </p>
              <p>
                Nesta categoria, você encontrará artigos que vão além das técnicas superficiais. Trabalhamos a raiz: 
                como superar traumas de rejeição, desenvolver uma autoimagem positiva, lidar com a ansiedade social 
                e construir confiança duradoura que não depende de validação externa.
              </p>
              <p>
                <strong>O homem com autoestima elevada:</strong> não tem medo de ouvir "não", porque sabe que seu valor 
                não está em uma única interação. Ele aborda com naturalidade, conversa sem pressão e conquista porque 
                transmite paz interior — a qualidade mais atraente que existe.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6">Artigos sobre Autoestima</h2>
              
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
                <Card className="bg-gradient-to-br from-amber-500/5 to-transparent">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-amber-500" />
                      Artigos em Desenvolvimento
                    </CardTitle>
                    <CardDescription className="text-base">
                      Estamos preparando conteúdos profundos sobre autoestima e confiança masculina para você. 
                      Em breve você encontrará artigos sobre como desenvolver presença, superar inseguranças, 
                      construir valor próprio e atrair naturalmente.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Enquanto isso, explore nossos artigos sobre conquista — muitos deles abordam aspectos 
                      fundamentais da autoconfiança e presença masculina que você já pode aplicar hoje.
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

export default AutoestimaCategory;

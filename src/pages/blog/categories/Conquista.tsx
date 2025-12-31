import { Heart, ArrowLeft, BookOpen, Sparkles, Target, MessageCircle, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlogSidebar from "@/components/BlogSidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { recentArticles } from "@/data/blogArticles";

const categoryId = "conquista";
const articles = recentArticles.filter(article => article.categoryId === categoryId);

const ConquistaCategory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Conquista: Dicas de Abordagem e Sedução | Beijo da Rua"
        description="Aprenda técnicas de abordagem, sedução e conquista com respeito. Dicas práticas para criar atração, quebrar o gelo e conquistar com autenticidade."
        canonical="https://beijodarua.com.br/blog/conquista/"
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
              <div className="p-4 rounded-full bg-rose-500/10">
                <Heart className="h-12 w-12 text-rose-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Conquista</h1>
            </div>
            
            {/* Descrição Rica SEO */}
            <div className="prose prose-lg max-w-4xl text-muted-foreground space-y-4">
              <p className="text-xl leading-relaxed">
                Aprenda a se aproximar, encantar e criar atração com respeito e autenticidade. Aqui você encontra 
                dicas práticas de abordagem, linguagem corporal, cantadas que funcionam, como lidar com o nervosismo 
                e se tornar um conquistador consciente — do primeiro "oi" ao primeiro encontro.
              </p>
            </div>
          </div>

          {/* Seção de Benefícios */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <Card className="bg-gradient-to-br from-rose-500/5 to-rose-500/10 border-rose-500/20">
              <CardContent className="p-4 flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-rose-500" />
                <div>
                  <p className="font-semibold">Atração</p>
                  <p className="text-sm text-muted-foreground">Desperte interesse</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-rose-500/5 to-rose-500/10 border-rose-500/20">
              <CardContent className="p-4 flex items-center gap-3">
                <Target className="h-8 w-8 text-rose-500" />
                <div>
                  <p className="font-semibold">Abordagem</p>
                  <p className="text-sm text-muted-foreground">Técnicas eficazes</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-rose-500/5 to-rose-500/10 border-rose-500/20">
              <CardContent className="p-4 flex items-center gap-3">
                <MessageCircle className="h-8 w-8 text-rose-500" />
                <div>
                  <p className="font-semibold">Conversa</p>
                  <p className="text-sm text-muted-foreground">Crie conexão</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-rose-500/5 to-rose-500/10 border-rose-500/20">
              <CardContent className="p-4 flex items-center gap-3">
                <Eye className="h-8 w-8 text-rose-500" />
                <div>
                  <p className="font-semibold">Presença</p>
                  <p className="text-sm text-muted-foreground">Linguagem corporal</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Conteúdo Educativo SEO */}
          <div className="bg-card rounded-xl p-6 md:p-8 mb-12 border">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-rose-500" />
              A Arte de Conquistar com Autenticidade
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Conquistar não é manipular ou fingir ser quem você não é. A verdadeira arte da conquista está 
                em desenvolver sua melhor versão e aprender a comunicá-la de forma atraente e respeitosa. 
                Nesta categoria, você encontra o caminho para se tornar um conquistador consciente.
              </p>
              <p>
                Abordamos desde técnicas de abordagem na rua e em eventos, até a construção de uma presença 
                magnética que atrai naturalmente. Você aprenderá a ler sinais de interesse, superar o medo 
                da rejeição, criar conversas envolventes e transformar interações casuais em conexões reais.
              </p>
              <p>
                <strong>O conquistador moderno:</strong> não precisa de truques baratos ou frases decoradas. 
                Ele desenvolve confiança genuína, respeita limites, e conquista porque transmite valor real — 
                não uma fachada. Essa é a abordagem que ensinamos aqui.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6">Artigos sobre Conquista</h2>
              
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
                <Card className="bg-gradient-to-br from-rose-500/5 to-transparent">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-rose-500" />
                      Artigos em Desenvolvimento
                    </CardTitle>
                    <CardDescription className="text-base">
                      Estamos preparando conteúdos práticos sobre a arte de conquistar. 
                      Em breve você encontrará mais artigos sobre abordagem, linguagem corporal 
                      e como criar atração de forma natural.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Enquanto isso, explore nossos artigos existentes — cada um foi criado 
                      para ajudá-lo a desenvolver habilidades reais de conquista.
                    </p>
                    <Button asChild variant="outline">
                      <a href="/blog">Ver todos os artigos</a>
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

export default ConquistaCategory;

import { MessageCircle, ArrowLeft, BookOpen, Eye, Smile, Zap, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlogSidebar from "@/components/BlogSidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { recentArticles } from "@/data/blogArticles";

const categoryId = "paquera";
const articles = recentArticles.filter(article => article.categoryIds?.includes(categoryId) || article.categoryId === categoryId);

const PaqueraCategory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Paquera e Flerte: Técnicas que Funcionam | Beijo da Rua"
        description="Domine a arte de flertar com naturalidade. Aprenda a identificar sinais de interesse, quebrar o gelo e transformar olhares em conversas reais."
        canonical="https://beijodarua.com.br/blog/paquera/"
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
              <div className="p-4 rounded-full bg-blue-500/10">
                <MessageCircle className="h-12 w-12 text-blue-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Paquera</h1>
            </div>
            
            {/* Descrição Rica SEO */}
            <div className="prose prose-lg max-w-4xl text-muted-foreground space-y-4">
              <p className="text-xl leading-relaxed">
                Domine a arte de quebrar o gelo com naturalidade. Descubra como identificar sinais de interesse, 
                flertar sem forçar, iniciar conversas em qualquer lugar — na rua, em festas ou online — e 
                transformar olhares em diálogos reais, sem medo de parecer invasivo ou desesperado.
              </p>
            </div>
          </div>

          {/* Seção de Benefícios */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <Card className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 border-blue-500/20">
              <CardContent className="p-4 flex items-center gap-3">
                <Eye className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="font-semibold">Leitura Corporal</p>
                  <p className="text-sm text-muted-foreground">Sinais de interesse</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 border-blue-500/20">
              <CardContent className="p-4 flex items-center gap-3">
                <Smile className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="font-semibold">Naturalidade</p>
                  <p className="text-sm text-muted-foreground">Sem forçar a barra</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 border-blue-500/20">
              <CardContent className="p-4 flex items-center gap-3">
                <Zap className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="font-semibold">Timing</p>
                  <p className="text-sm text-muted-foreground">Momento certo</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 border-blue-500/20">
              <CardContent className="p-4 flex items-center gap-3">
                <Target className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="font-semibold">Abordagem</p>
                  <p className="text-sm text-muted-foreground">Técnicas eficazes</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Conteúdo Educativo SEO */}
          <div className="bg-card rounded-xl p-6 md:p-8 mb-12 border">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-500" />
              A Arte de Paquerar com Respeito e Eficácia
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Paquerar é uma arte que poucos dominam de verdade. Não se trata de usar frases decoradas ou 
                técnicas manipuladoras, mas de desenvolver uma sensibilidade social que permite conexões 
                genuínas em qualquer ambiente.
              </p>
              <p>
                Nesta categoria, você aprende a ler linguagem corporal, identificar quando uma mulher está 
                aberta para conversa, como iniciar diálogos de forma natural e, principalmente, como 
                manter o interesse sem parecer desesperado ou invasivo.
              </p>
              <p>
                <strong>A paquera eficaz é respeitosa.</strong> Quando você entende os sinais e respeita 
                os limites, as interações fluem naturalmente. Você se torna alguém agradável de conhecer, 
                não alguém que causa desconforto. Essa é a diferença entre conquistar e afastar.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6">Artigos sobre Paquera</h2>
              
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
                <Card className="bg-gradient-to-br from-blue-500/5 to-transparent">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-blue-500" />
                      Artigos em Desenvolvimento
                    </CardTitle>
                    <CardDescription className="text-base">
                      Estamos preparando conteúdos práticos sobre a arte de paquerar. 
                      Em breve você encontrará artigos sobre linguagem corporal, abordagens naturais, 
                      como quebrar o gelo e manter conversas interessantes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Enquanto isso, confira nossos artigos de conquista — muitos deles abordam 
                      técnicas de abordagem e comunicação que se aplicam diretamente à paquera.
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

export default PaqueraCategory;

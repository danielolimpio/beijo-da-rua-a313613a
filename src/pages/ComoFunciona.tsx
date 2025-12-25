import { Link } from "react-router-dom";
import { Star, Target, Users, BookOpen, Shield, TrendingUp, Heart, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import SEO from "@/components/SEO";

const ComoFunciona = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Como Funciona - Beijo da Rua | Guia de Apps de Namoro"
        description="Entenda como o Beijo da Rua funciona: quiz personalizado, avaliações de apps, grupos reais e conteúdo especializado."
        canonical="https://beijodarua.com.br/como-funciona"
        keywords="como funciona beijo da rua, quiz namoro, avaliação apps namoro"
      />
      
      <Header />
      <main className="pt-24 sm:pt-28 lg:pt-32">
        <DynamicBreadcrumb />
        
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            {/* Main Intro */}
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Como Funciona o Beijo da Rua?
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Através de um <strong>quiz gratuito personalizado</strong>, identificamos seu perfil amoroso e indicamos a plataforma ideal — além de conectar você a <strong>grupos reais de solteiros</strong> com os mesmos interesses. Não somos um app de namoro, somos o <strong>guia definitivo</strong> para você escolher com inteligência.
              </p>
            </div>

            {/* Four Pillars */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
              {/* Pillar 1: Nossas Avaliações */}
              <Card className="border-2 hover:shadow-custom-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Star className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Nossas Avaliações de Apps</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    Analisamos dezenas de apps com base em <strong>segurança, diversidade, eficácia e custo-benefício</strong>. Cada plataforma é testada durante semanas, e você acessa reviews completos com prós, contras e para quem funciona melhor. Relacionamento sério, casual ou LGBTQIA+ — temos a recomendação certa para economizar seu tempo e dinheiro.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Tinder</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Bumble</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Happn</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">+10 apps</span>
                  </div>
                  <Link to="/apps-de-namoro">
                    <Button className="w-full">
                      Ver Todos os Apps Avaliados
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Pillar 2: Quiz Personalizado */}
              <Card className="border-2 hover:shadow-custom-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Target className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-2xl">Quiz de Perfil Amoroso</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    Responda <strong>5 perguntas estratégicas</strong> e descubra qual app combina com seu estilo de relacionamento, faixa etária e objetivos. Desenvolvido com base em <strong>dados de milhares de usuários brasileiros</strong>, considera personalidade, tempo disponível e tipo de conexão. Resultado personalizado com dicas práticas para <strong>aumentar suas chances de match em até 3x</strong>.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/30 p-4 rounded-lg mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-success" />
                      <span className="font-semibold text-sm">+50.000 quizzes realizados</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Média de 4.8/5 estrelas de satisfação</p>
                  </div>
                  <Link to="/quiz">
                    <Button className="w-full" variant="default">
                      Fazer Quiz Grátis Agora
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Pillar 3: Grupos Reais */}
              <Card className="border-2 hover:shadow-custom-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-success/10 rounded-lg">
                      <Users className="w-8 h-8 text-success" />
                    </div>
                    <CardTitle className="text-2xl">Grupos Reais de Relacionamento</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    Acesso exclusivo a <strong>comunidades verificadas</strong> no WhatsApp e Telegram — sem bots, sem golpes. Nossos grupos conectam pessoas reais: namoro, amizade, encontros casuais e mais. Cada grupo tem <strong>moderação ativa</strong> para garantir ambiente seguro. Milhares de brasileiros já fizeram conexões reais através dos nossos grupos.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-success" />
                      <span className="text-sm">Grupos moderados e seguros</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-success" />
                      <span className="text-sm">Perfis reais verificados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-success" />
                      <span className="text-sm">Conversas autênticas</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <a 
                      href="https://gruposdewhats.com.br/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white">
                        WhatsApp
                      </Button>
                    </a>
                    <a 
                      href="https://gruposdotelegram.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button className="w-full bg-[#0088cc] hover:bg-[#006BA1] text-white">
                        Telegram
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Pillar 4: Blog com Dicas */}
              <Card className="border-2 hover:shadow-custom-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <BookOpen className="w-8 h-8 text-secondary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">Blog: Dicas Baseadas em Ciência</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    Conteúdo baseado em <strong>pesquisas de psicologia e comportamento</strong> escritos por especialistas. Artigos sobre cantadas eficazes, perfis vencedores, técnicas de conversação e linguagem corporal. Citamos estudos de <strong>USP, Harvard e APA</strong> para informação confiável. Publicamos semanalmente artigos que ajudam milhares de homens a melhorarem suas habilidades sociais.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <Link to="/blog/cantadas-irresistiveis-que-funcionam" className="block text-sm text-primary hover:underline">
                      → Cantadas que Funcionam em 2025
                    </Link>
                    <Link to="/blog/como-abordar-uma-mulher-com-confianca" className="block text-sm text-primary hover:underline">
                      → Como Abordar com Confiança
                    </Link>
                    <Link to="/blog/os-segredos-de-um-perfil-conquistador" className="block text-sm text-primary hover:underline">
                      → Segredos de um Perfil Vencedor
                    </Link>
                  </div>
                  <Link to="/blog">
                    <Button className="w-full" variant="outline">
                      Ler Mais Artigos
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Keywords Section */}
            <div className="bg-muted/30 rounded-2xl p-6 sm:p-8 lg:p-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                O Que Você Encontra Aqui
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
                Referência em <strong>melhores apps de namoro 2025</strong> com <strong>avaliações baseadas em dados reais</strong>. Nosso <strong>quiz de perfil amoroso</strong> já ajudou +50 mil homens a encontrarem matches de qualidade. Conecte-se a <strong>grupos reais de solteiros</strong> moderados e aprenda com artigos especializados. O guia completo para namorar melhor.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">Apps de Namoro 2025</span>
                <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">Quiz Personalizado</span>
                <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">Grupos Verificados</span>
                <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">Reviews Honestos</span>
                <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">Conteúdo Científico</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ComoFunciona;

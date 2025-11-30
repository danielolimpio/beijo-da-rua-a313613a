import { Link } from "react-router-dom";
import { Star, Target, Users, BookOpen, Shield, TrendingUp, Heart, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutUsSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Main Intro */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Como Funciona o Beijo da Rua?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Somos um <strong>portal de curadoria especializada</strong> que ajuda homens brasileiros a encontrarem o app de namoro ideal. 
            Diferente de outros sites, não vendemos ilusões — oferecemos <strong>informação real, análises honestas e conteúdo baseado em pesquisa</strong>.
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
                Analisamos dezenas de apps de namoro com base em critérios reais: <strong>segurança de dados</strong>, <strong>diversidade de perfis</strong>, 
                <strong>eficácia para matches</strong> e <strong>custo-benefício</strong>. Cada plataforma é testada por nossa equipe durante semanas, 
                e você acessa reviews completos com prós, contras e para quem cada app funciona melhor. Se você busca relacionamento sério, 
                encontros casuais ou conexões LGBTQIA+, temos a recomendação certa. Nosso objetivo é economizar seu tempo e dinheiro, 
                indicando exatamente onde investir sua energia para <strong>resultados reais em 2025</strong>.
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
                Responda apenas <strong>5 perguntas estratégicas</strong> e descubra qual app combina com seu estilo de relacionamento, 
                faixa etária e objetivos reais. Nosso quiz foi desenvolvido com base em <strong>dados comportamentais de milhares de usuários brasileiros</strong> 
                e considera fatores como personalidade (tímido ou extrovertido), disponibilidade de tempo e tipo de conexão buscada. 
                O resultado não é genérico: você recebe uma recomendação específica, com dicas práticas de como otimizar seu perfil 
                para <strong>aumentar suas chances de match em até 3x</strong>. Funciona para quem busca desde namoro sério até amizades e encontros casuais.
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
                Acesso exclusivo a <strong>comunidades verificadas de solteiros</strong> no WhatsApp e Telegram — sem bots, sem golpes, 
                sem perfis falsos. Diferente dos apps tradicionais, nossos grupos conectam pessoas reais com interesses genuínos: 
                namoro, amizade, encontros casuais, casais liberais e muito mais. Cada grupo passa por <strong>moderação ativa</strong> 
                para garantir um ambiente respeitoso e seguro. É a forma mais autêntica de conhecer pessoas na sua cidade ou região, 
                com conversas que fluem naturalmente. Milhares de brasileiros já fizeram conexões reais através dos nossos grupos — 
                alguns até encontraram relacionamentos sérios que duraram anos.
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
                Conteúdo editorial de alta qualidade, escrito por especialistas e baseado em <strong>pesquisas reais de psicologia e comportamento</strong>. 
                Nossos artigos abordam desde <strong>cantadas que realmente funcionam</strong> até estratégias para construir um perfil irresistível, 
                passando por técnicas de conversação, linguagem corporal e gerenciamento de expectativas. Citamos estudos de instituições como 
                <strong>USP, Harvard e APA (American Psychological Association)</strong> para garantir informação confiável. 
                Se você quer namorar com inteligência, nosso blog é o seu guia definitivo. Publicamos semanalmente novos artigos que ajudam 
                milhares de homens a melhorarem suas habilidades sociais e amorosas.
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
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            O Que Você Encontra Aqui
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
            Somos referência em <strong>melhores apps de namoro 2025</strong>, oferecendo <strong>site de relacionamento confiável</strong> 
            com <strong>avaliação de apps de relacionamento</strong> baseada em dados reais. Nosso <strong>quiz de perfil amoroso</strong> já ajudou 
            mais de 50 mil homens a encontrarem matches de qualidade. Conecte-se a <strong>grupos reais de solteiros</strong> moderados e seguros, 
            e aprenda com artigos escritos por especialistas. Não somos apenas mais um site — somos o guia completo para você namorar melhor.
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
  );
};

export default AboutUsSection;
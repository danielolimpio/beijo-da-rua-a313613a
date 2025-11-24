import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Shield, Heart, CheckCircle, Globe, TrendingUp } from "lucide-react";
import bumbleLogo from "@/assets/bumble-logo.webp";

const Bumble = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
            <img 
              src={bumbleLogo} 
              alt="Bumble Logo" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg bg-[#FFC629] p-4"
            />
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4">
                Bumble
              </h1>
              <p className="text-2xl mb-2">
                Onde as conexões começam com respeito, segurança e intenção
              </p>
              <div className="flex items-center gap-4 justify-center md:justify-start mt-4">
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  <span className="text-xl font-bold">4.5</span>
                </div>
                <Badge variant="secondary" className="text-lg px-4 py-1">
                  Recomendado
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            O Bumble é um dos apps de relacionamento mais relevantes do mundo, com uma proposta única: nas conexões heterossexuais, só as mulheres podem dar o primeiro "oi". Esse modelo, criado em 2014 por Whitney Wolfe Herd (ex-cofundadora do Tinder), foi pensado para combater o assédio e promover interações mais equilibradas, respeitosas e intencionais.
          </p>
        </div>
      </section>

      {/* Três Modos */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Três Formas de Conectar</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O Bumble não é só para namorar. A plataforma oferece três modos integrados:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Date</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Para quem busca romance ou relacionamentos sérios</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>BFF</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Para fazer novas amizades</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Bizz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Para networking profissional</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dados e Estatísticas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Dados e Perfil do Público (2024–2025)</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">70M+</div>
                <p className="text-muted-foreground">Usuários ativos worldwide</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">22-28M</div>
                <p className="text-muted-foreground">Visitas mensais ao site</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">150+</div>
                <p className="text-muted-foreground">Países disponíveis</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">25-34</div>
                <p className="text-muted-foreground">Faixa etária predominante</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Principais Países por Uso</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Estados Unidos: ~24% do tráfego global</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Reino Unido: ~6%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Alemanha: ~5%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Canadá e Austrália também entre os top 5</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Brasil: entre os 10-15 países com mais downloads na América Latina</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Distribuição por Faixa Etária</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span>25 a 34 anos</span>
                    <Badge>32% dos usuários</Badge>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>18 a 24 anos</span>
                    <Badge>28% dos usuários</Badge>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>35 a 44 anos</span>
                    <Badge>20% dos usuários</Badge>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Isso faz do Bumble uma ótima opção para jovens adultos e profissionais em fase de estabelecimento pessoal e carreira.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gênero dos Usuários</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span>Homens</span>
                    <Badge>~60%</Badge>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Mulheres</span>
                    <Badge>~39%</Badge>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Não-binários/LGBTQIA+</span>
                    <Badge variant="secondary">Crescente</Badge>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Apesar de a maioria ser masculina, o controle inicial da conversa pelas mulheres ajuda a equilibrar a experiência e reduzir mensagens indesejadas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Por que o Bumble se destaca? */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Por que o Bumble se destaca?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  <CardTitle>Verificação de Identidade</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Verificação obrigatória com selfie ao vivo — reduz drasticamente perfis falsos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  <CardTitle>Foco em Segurança</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ferramentas como bloqueio automático de linguagem ofensiva, chamadas de vídeo dentro do app e suporte 24/7.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  <CardTitle>Algoritmo com IA</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Aprende com suas interações para sugerir matches mais compatíveis.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Heart className="w-8 h-8 text-primary" />
                  <CardTitle>Cultura de Respeito</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A plataforma bane comportamentos tóxicos e incentiva conexões baseadas em igualdade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Para quem é ideal? */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Para Quem é Ideal?</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    <strong>Mulheres</strong> que querem mais controle e segurança no namoro online.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    <strong>Homens</strong> dispostos a esperar um "oi" e que valorizam conversas iniciadas com intenção.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    <strong>Pessoas solteiras</strong> após mudanças de vida (mudança de cidade, término, novo emprego) que buscam amizades reais (via BFF).
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    <strong>Profissionais</strong> que querem expandir sua rede com respeito e propósito (via Bizz).
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-xl text-muted-foreground mt-8 max-w-3xl mx-auto">
            Com milhões de relacionamentos, casamentos e amizades formados, o Bumble é uma escolha sólida para quem busca qualidade, não só quantidade.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            Pronto Para Começar no Bumble?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Cadastre-se agora e comece a fazer conexões baseadas em respeito, segurança e intenção.
          </p>
          <Button 
            size="lg" 
            className="bg-background text-primary hover:bg-background/90"
            asChild
          >
            <a href="https://bumble.com/pt/" target="_blank" rel="noopener noreferrer">
              Cadastrar no Bumble
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bumble;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Shield, Heart, CheckCircle, Globe, TrendingUp } from "lucide-react";
import bumbleLogo from "@/assets/bumble-logo.webp";
import { trackAppClick } from "@/lib/analytics";
import { Link } from "react-router-dom";

const Bumble = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
      <DynamicBreadcrumb />
      
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
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Dados e Perfil do Público (2024–2025)</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Alcance Global</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Com mais de <strong className="text-foreground">70 milhões de usuários ativos</strong> worldwide, o Bumble está presente em mais de <strong className="text-foreground">150 países</strong>.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Tráfego Online</p>
                  <p className="text-sm text-muted-foreground">
                    22 a 28 milhões de visitas mensais ao site bumble.com (out/2024)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Principais Países</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-success/20 text-success">1º</Badge>
                    <span><strong>Estados Unidos</strong> (~24% do tráfego global)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary">2º</Badge>
                    <span>Reino Unido (~6%)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary">3º</Badge>
                    <span>Alemanha (~5%)</span>
                  </li>
                  <li className="text-sm text-muted-foreground">
                    Canadá e Austrália também entre os top 5
                  </li>
                </ul>
                <p className="text-sm text-success font-semibold mt-4">
                  ✓ Brasil entre os 10-15 países com mais downloads na América Latina
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Faixa Etária</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">25 a 34 anos</span>
                      <span className="text-sm text-muted-foreground">32%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '32%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">18 a 24 anos</span>
                      <span className="text-sm text-muted-foreground">28%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '28%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">35 a 44 anos</span>
                      <span className="text-sm text-muted-foreground">20%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '20%'}}></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Ótima opção para jovens adultos e profissionais em fase de estabelecimento
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Distribuição por Gênero</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Homens</span>
                      <span className="text-sm text-muted-foreground">60%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Mulheres</span>
                      <span className="text-sm text-muted-foreground">40%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '40%'}}></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Maior equilíbrio comparado a outros apps, graças ao modelo de "mulheres iniciam"
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
          <div className="flex justify-center gap-4">
            <a 
              href="https://bumble.com/pt/" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackAppClick('Bumble', 'bottom_cta')}
            >
              <Button size="lg" className="bg-background text-primary hover:bg-background/90">
                Cadastrar no Bumble
              </Button>
            </a>
            <Link to="/quiz">
              <Button size="lg" className="bg-background/20 text-primary-foreground hover:bg-background/30 border-0">
                Fazer Quiz
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bumble;

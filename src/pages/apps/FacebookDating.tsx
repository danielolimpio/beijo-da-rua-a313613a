import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Shield, Heart, CheckCircle, Globe, TrendingUp, Zap, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import facebookDatingLogo from "@/assets/facebook-dating-logo.jpg";
import { trackAppClick } from "@/lib/analytics";

const FacebookDating = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Facebook Dating Brasil | Namoro Gratuito"
        description="Facebook Dating: encontros 100% gratuitos baseados em grupos, eventos e interesses em comum. Separado do seu perfil principal. Veja como funciona."
        canonical="https://beijodarua.com.br/apps/facebook-dating/"
        keywords="facebook dating brasil, facebook namoro, dating facebook, facebook encontros, namoro gratuito"
      />
      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
      <DynamicBreadcrumb />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FF6B8A] via-[#E91E63] to-[#9C27B0] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <img 
              src={facebookDatingLogo} 
              alt="Facebook Dating Logo" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg bg-white p-4"
            />
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4">
                Facebook Dating
              </h1>
              <p className="text-2xl font-semibold mb-4">
                Encontros baseados em interesses e conexões reais
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Badge className="bg-white text-[#E91E63] hover:bg-white/90">
                  <Star className="w-4 h-4 mr-1 fill-[#E91E63]" />
                  4.1
                </Badge>
                <Badge className="bg-white/20 hover:bg-white/30">
                  <Users className="w-4 h-4 mr-1" />
                  Integrado ao Facebook
                </Badge>
                <Badge className="bg-white/20 hover:bg-white/30">100% Gratuito</Badge>
              </div>
            </div>
          </div>
          <p className="text-xl text-center max-w-4xl mx-auto">
            O Facebook Dating conecta você a pessoas com interesses em comum através de grupos, eventos e 
            preferências — tudo separado do seu perfil principal.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Intro */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">O que é o Facebook Dating?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Lançado em 2019, o Facebook Dating é a plataforma de namoro integrada ao Facebook que utiliza a 
              vasta rede social para criar conexões mais significativas. O recurso é completamente gratuito e 
              funciona de forma separada do perfil principal do Facebook, garantindo privacidade.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O diferencial do Facebook Dating está na capacidade de sugerir matches baseados em interesses 
              compartilhados, grupos em comum e eventos que você participa, criando conexões mais orgânicas e 
              autênticas. É especialmente popular em cidades menores e no interior do Brasil, onde outros apps 
              têm menor penetração.
            </p>
          </div>

          {/* Dados e Perfil */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Dados e Perfil do Público</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-6 h-6 text-primary" />
                    Presença no Brasil
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    O Brasil é um dos <strong className="text-foreground">maiores mercados</strong> do Facebook Dating, 
                    com milhões de usuários ativos especialmente em regiões fora das capitais.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Vantagem Regional</p>
                    <p className="text-sm text-muted-foreground">
                      Alto alcance em cidades pequenas e médias onde outros apps têm poucos usuários
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-6 h-6 text-primary" />
                    Privacidade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-success/20 text-success">✓</Badge>
                      <span>Perfil separado do Facebook principal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-success/20 text-success">✓</Badge>
                      <span>Amigos não veem você no Dating</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-success/20 text-success">✓</Badge>
                      <span>Atividade não aparece no feed</span>
                    </li>
                  </ul>
                  <p className="text-sm text-success font-semibold mt-4">
                    ✓ Pode bloquear contatos específicos de ver seu perfil
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    Faixa Etária
                  </CardTitle>
                </CardHeader>
                <CardContent>
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
                        <span className="text-sm font-medium">35 a 44 anos</span>
                        <span className="text-sm text-muted-foreground">28%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '28%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">45+ anos</span>
                        <span className="text-sm text-muted-foreground">25%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '25%'}}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Público diversificado, com boa presença de usuários acima de 35 anos
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Distribuição por Gênero</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Homens</span>
                        <span className="text-sm text-muted-foreground">52%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '52%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Mulheres</span>
                        <span className="text-sm text-muted-foreground">48%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '48%'}}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Um dos melhores equilíbrios de gênero entre os apps de namoro
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Por que se destaca */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Por que o Facebook Dating se destaca?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-6 h-6 text-[#E91E63]" />
                    Interesses em Comum
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    O algoritmo sugere pessoas baseado em grupos que você participa, eventos que frequenta 
                    e interesses declarados no seu perfil do Facebook.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-6 h-6 text-[#E91E63]" />
                    Secret Crush
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Recurso exclusivo que permite adicionar até 9 amigos ou seguidores do Instagram como 
                    "crushes secretos". Se a pessoa também te adicionar, vocês dão match.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-[#E91E63]" />
                    Ótimo para o Interior
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Como o Facebook tem alta penetração em todo o Brasil, o Dating funciona bem mesmo em 
                    cidades pequenas onde Tinder e Bumble têm poucos usuários.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-[#E91E63]" />
                    100% Gratuito
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Todos os recursos são gratuitos, sem planos premium ou limitações de mensagens. 
                    Uma raridade no mercado de apps de namoro.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Para quem é ideal */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Para quem é ideal?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Moradores do interior</h3>
                      <p className="text-sm text-muted-foreground">
                        Se você mora em cidade pequena ou média, o Facebook Dating provavelmente tem mais usuários 
                        ativos que Tinder ou Bumble na sua região
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Quem valoriza interesses em comum</h3>
                      <p className="text-sm text-muted-foreground">
                        Se você quer conhecer pessoas com hobbies, valores e comunidades similares às suas
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Pessoas acima de 35 anos</h3>
                      <p className="text-sm text-muted-foreground">
                        O público do Facebook Dating tende a ser mais maduro, ideal para quem busca relacionamentos sérios
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Quem não quer pagar</h3>
                      <p className="text-sm text-muted-foreground">
                        Todos os recursos são gratuitos — mensagens, likes, filtros — sem paywalls
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#FF6B8A] via-[#E91E63] to-[#9C27B0] text-white rounded-2xl p-12 text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 fill-white" />
            <h2 className="text-4xl font-bold mb-6">
              Pronto para encontrar alguém com seus interesses?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              O Facebook Dating conecta você a pessoas que compartilham seus interesses, frequentam os mesmos 
              eventos e participam das mesmas comunidades — de graça.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://www.facebook.com/dating" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackAppClick('Facebook Dating', 'bottom_cta')}
              >
                <Button size="lg" className="bg-white text-[#E91E63] hover:bg-white/90 font-bold">
                  Ativar Facebook Dating
                </Button>
              </a>
              <Link to="/quiz">
                <Button size="lg" className="bg-white/20 text-white hover:bg-white/30 border-0">
                  Fazer Quiz
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FacebookDating;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Shield, Heart, CheckCircle, Globe, TrendingUp, Zap, Target, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import skoutLogo from "@/assets/skout-logo.png";
import { trackAppClick } from "@/lib/analytics";

const Skout = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Skout Brasil - Rede Social Global para Amizade e Namoro"
        description="Skout: 50M+ usuários em todo o mundo. Faça amizades internacionais, pratique idiomas e encontre conexões genuínas. Ideal para quem busca diversidade."
        canonical="https://beijodarua.com.br/apps/skout/"
        keywords="skout brasil, skout app, app fazer amigos, amizade internacional, skout funciona"
      />
      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
      <DynamicBreadcrumb />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00A4E4] via-[#0088CC] to-[#005B99] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <img 
              src={skoutLogo} 
              alt="Skout Logo" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg bg-white p-4"
            />
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4">
                Skout
              </h1>
              <p className="text-2xl font-semibold mb-4">
                Conecte-se com pessoas do mundo inteiro e faça novas amizades
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Badge className="bg-white text-[#00A4E4] hover:bg-white/90">
                  <Star className="w-4 h-4 mr-1 fill-[#00A4E4]" />
                  4.1
                </Badge>
                <Badge className="bg-white/20 hover:bg-white/30">
                  <Users className="w-4 h-4 mr-1" />
                  50M+ usuários globais
                </Badge>
                <Badge className="bg-white/20 hover:bg-white/30">Amizade & Namoro</Badge>
              </div>
            </div>
          </div>
          <p className="text-xl text-center max-w-4xl mx-auto">
            O Skout é uma rede social global que conecta pessoas de diferentes países e culturas. 
            Ideal para quem quer fazer novas amizades, praticar idiomas ou encontrar um amor internacional.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Intro */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">O que é o Skout?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Fundado em 2007, o Skout é uma das redes sociais mais antigas focadas em conectar pessoas ao redor do mundo. 
              Diferente de apps tradicionais de namoro, o Skout funciona como uma plataforma híbrida que permite tanto 
              fazer amizades quanto encontrar um interesse romântico.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com recursos como transmissões ao vivo, chat global e localização, o Skout é perfeito para quem quer 
              expandir seu círculo social além das fronteiras. É especialmente popular entre pessoas que viajam 
              frequentemente ou que desejam conhecer culturas diferentes.
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
                    Presença Global
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Com mais de <strong className="text-foreground">50 milhões de usuários</strong> em todo o mundo, 
                    o Skout é uma das maiores redes de conexão internacional.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Alcance Internacional</p>
                    <p className="text-sm text-muted-foreground">
                      Disponível em mais de 180 países, com forte presença nos EUA, Europa e América Latina
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary" />
                    Objetivo dos Usuários
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-success/20 text-success">55%</Badge>
                      <span>Buscam novas amizades</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-success/20 text-success">30%</Badge>
                      <span>Interessados em namoro</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-success/20 text-success">15%</Badge>
                      <span>Networking internacional</span>
                    </li>
                  </ul>
                  <p className="text-sm text-success font-semibold mt-4">
                    ✓ Perfeito para expandir seu círculo social globalmente
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
                        <span className="text-sm font-medium">18 a 24 anos</span>
                        <span className="text-sm text-muted-foreground">40%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '40%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">25 a 34 anos</span>
                        <span className="text-sm text-muted-foreground">35%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '35%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">35 a 44 anos</span>
                        <span className="text-sm text-muted-foreground">18%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '18%'}}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Público jovem e diversificado, ideal para quem busca conexões dinâmicas
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
                        <span className="text-sm text-muted-foreground">58%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '58%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Mulheres</span>
                        <span className="text-sm text-muted-foreground">42%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '42%'}}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Distribuição típica de apps sociais, com boa presença feminina internacional
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Por que se destaca */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Por que o Skout se destaca?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-6 h-6 text-[#00A4E4]" />
                    Conexões Internacionais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Conheça pessoas de mais de 180 países. Perfeito para quem quer praticar idiomas, 
                    fazer amigos internacionais ou encontrar alguém de outra cultura.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 text-[#00A4E4]" />
                    Lives e Transmissões
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Faça transmissões ao vivo para milhares de pessoas ou assista lives de usuários 
                    ao redor do mundo. Uma forma dinâmica de se conectar.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-6 h-6 text-[#00A4E4]" />
                    Shake to Chat
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Balance o celular para ser conectado aleatoriamente com alguém online. 
                    Uma forma divertida e espontânea de conhecer novas pessoas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-[#00A4E4]" />
                    Perfis Verificados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sistema de verificação por foto para garantir que você está conversando 
                    com pessoas reais e aumentar a segurança na plataforma.
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
                      <h3 className="font-semibold mb-2">Quem quer amizades internacionais</h3>
                      <p className="text-sm text-muted-foreground">
                        Se você quer conhecer pessoas de outros países, praticar idiomas ou 
                        expandir seu networking global
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
                      <h3 className="font-semibold mb-2">Viajantes frequentes</h3>
                      <p className="text-sm text-muted-foreground">
                        Ideal para quem viaja muito e quer conhecer pessoas nos destinos 
                        antes mesmo de chegar
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
                      <h3 className="font-semibold mb-2">Pessoas extrovertidas</h3>
                      <p className="text-sm text-muted-foreground">
                        Com lives e chat global, é perfeito para quem gosta de interações 
                        dinâmicas e espontâneas
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
                      <h3 className="font-semibold mb-2">Jovens de 18-34 anos</h3>
                      <p className="text-sm text-muted-foreground">
                        A maioria do público está nessa faixa etária, aumentando as chances 
                        de encontrar pessoas com interesses similares
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#00A4E4] via-[#0088CC] to-[#005B99] text-white rounded-2xl p-12 text-center">
            <Globe className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Pronto para conhecer o mundo?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Com o Skout, você pode fazer amigos em mais de 180 países, participar de lives 
              e encontrar conexões que vão além das fronteiras.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://www.skout.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackAppClick('Skout', 'bottom_cta')}
              >
                <Button size="lg" className="bg-white text-[#00A4E4] hover:bg-white/90 font-bold">
                  Baixar o Skout
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

export default Skout;
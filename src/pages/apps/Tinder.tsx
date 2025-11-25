import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Shield, Heart, CheckCircle, Globe, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import tinderLogo from "@/assets/tinder-logo.jpeg";
import { trackAppClick } from "@/lib/analytics";

const Tinder = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FF6B6B] via-[#FF5864] to-[#FD297B] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <img 
              src={tinderLogo} 
              alt="Tinder Logo" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg bg-white p-4"
            />
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4">
                Tinder
              </h1>
              <p className="text-2xl font-semibold mb-4">
                O app que revolucionou o namoro online
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Badge className="bg-white text-[#FF5864] hover:bg-white/90">
                  <Star className="w-4 h-4 mr-1 fill-[#FF5864]" />
                  4.2
                </Badge>
                <Badge className="bg-white/20 hover:bg-white/30">
                  <Users className="w-4 h-4 mr-1" />
                  10M+ usuários no Brasil
                </Badge>
                <Badge className="bg-white/20 hover:bg-white/30">Popular</Badge>
              </div>
            </div>
          </div>
          <p className="text-xl text-center max-w-4xl mx-auto">
            Rápido, direto e com milhões de matches. O Tinder é o aplicativo de encontros mais popular do mundo, 
            com mais de 55 bilhões de matches desde 2012.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Intro */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">O que é o Tinder?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              O Tinder é o aplicativo de encontros mais popular do mundo. Lançado em 2012, ele transformou a forma como 
              as pessoas se conectam, introduzindo o famoso gesto de "swipe" (deslizar para a direita ou esquerda) para 
              decidir quem quer conhecer. Com mais de 55 bilhões de matches até hoje, o Tinder é a escolha de milhões de 
              pessoas que buscam encontros casuais, relacionamentos sérios ou apenas novas amizades.
            </p>
          </div>

          {/* Dados e Perfil */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Dados e Perfil do Público (2024–2025)</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-6 h-6 text-primary" />
                    Alcance Global
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Disponível em mais de <strong className="text-foreground">190 países</strong>, o Tinder é um dos apps 
                    de maior penetração no mundo, especialmente entre jovens adultos.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Tráfego Online</p>
                    <p className="text-sm text-muted-foreground">
                      30 a 35 milhões de visitas mensais no site tinder.com (out/2024)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    Principais Países
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-success/20 text-success">1º</Badge>
                      <span><strong>Brasil</strong> (~15% do tráfego global)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary">2º</Badge>
                      <span>Estados Unidos (~11%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary">3º</Badge>
                      <span>Polônia (~6%)</span>
                    </li>
                    <li className="text-sm text-muted-foreground">
                      Alemanha e Argentina também estão entre os top 5
                    </li>
                  </ul>
                  <p className="text-sm text-success font-semibold mt-4">
                    ✓ O Brasil é o país com maior crescimento nos últimos anos
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
                        <span className="text-sm text-muted-foreground">31%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '31%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">18 a 24 anos</span>
                        <span className="text-sm text-muted-foreground">20%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '20%'}}></div>
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
                    Público majoritariamente jovem, com forte presença de adultos em fase profissional
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
                        <span className="text-sm text-muted-foreground">64%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '64%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Mulheres</span>
                        <span className="text-sm text-muted-foreground">36%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '36%'}}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Homens costumam ser mais ativos em swipes, enquanto mulheres tendem a ser mais seletivas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Por que se destaca */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Por que o Tinder se destaca?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-6 h-6 text-[#FF5864]" />
                    Simplicidade Extrema
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Basta um swipe para dizer "sim" ou "não". Se houver match, a conversa começa. 
                    Não há burocracia nem questionários longos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-6 h-6 text-[#FF5864]" />
                    Match Instantâneo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ideal para quem busca conexões rápidas e sem burocracia. O algoritmo conecta pessoas 
                    que se curtiram mutuamente de forma imediata.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-6 h-6 text-[#FF5864]" />
                    Recursos Premium
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Tinder Gold/Platinum oferecem recursos avançados:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                      Ver quem curtiu seu perfil
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                      Dar "super likes" ilimitados
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                      Desfazer swipes errados
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-[#FF5864]" />
                    Diversidade e Inclusão
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Opções amplas de identidade de gênero e orientação sexual, tornando o app inclusivo 
                    para todos os perfis LGBTQIA+.
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
                      <h3 className="font-semibold mb-2">Jovens adultos (18–34 anos)</h3>
                      <p className="text-sm text-muted-foreground">
                        Que buscam encontros casuais, relacionamentos ou apenas explorar novas conexões
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
                      <h3 className="font-semibold mb-2">Pessoas em grandes cidades</h3>
                      <p className="text-sm text-muted-foreground">
                        O Tinder tem alta densidade de usuários urbanos, aumentando as chances de encontrar alguém perto de você
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
                      <h3 className="font-semibold mb-2">Quem prefere simplicidade</h3>
                      <p className="text-sm text-muted-foreground">
                        Se você não quer preencher longos questionários ou esperar por combinações complexas, o Tinder é perfeito
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
                      <h3 className="font-semibold mb-2">Usuários LGBTQIA+</h3>
                      <p className="text-sm text-muted-foreground">
                        Com opções de identidade e orientação flexíveis, o Tinder é uma das plataformas mais inclusivas do mercado
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#FF6B6B] via-[#FF5864] to-[#FD297B] text-white rounded-2xl p-12 text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 fill-white" />
            <h2 className="text-4xl font-bold mb-6">
              Pronto para dar o primeiro swipe?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Com sua interface intuitiva, alcance global e cultura de "match rápido", o Tinder continua sendo 
              a referência para quem quer começar uma conversa com apenas um deslize.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://tinder.com/pt" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackAppClick('Tinder', 'bottom_cta')}
              >
                <Button size="lg" className="bg-white text-[#FF5864] hover:bg-white/90 font-bold">
                  Cadastrar-se no Tinder
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

export default Tinder;

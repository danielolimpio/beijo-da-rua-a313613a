import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Heart, Shield, TrendingUp, Star, CheckCircle2 } from "lucide-react";
import happnLogo from "@/assets/happn-logo.jpg";

const Happn = () => {
  const stats = [
    { icon: Users, label: "Usuários Globais", value: "155M+" },
    { icon: MapPin, label: "Países", value: "190+" },
    { icon: Heart, label: "Cruzamentos", value: "Bilhões" },
    { icon: Star, label: "Avaliação", value: "4.0/5" }
  ];

  const features = [
    {
      title: "Cruzamentos Reais",
      description: "Veja pessoas que estiveram no mesmo lugar que você, no mesmo horário",
      icon: MapPin
    },
    {
      title: "Spots Favoritos",
      description: "Descubra lugares em comum — cafés, parques, academias",
      icon: Heart
    },
    {
      title: "Crushes e Notificações",
      description: "Saiba quando alguém que você curtiu também te curtiu",
      icon: TrendingUp
    },
    {
      title: "Segurança e Privacidade",
      description: "Controle total sobre o que compartilha e sua localização",
      icon: Shield
    }
  ];

  const idealFor = [
    "Pessoas que vivem em grandes cidades — quanto mais movimentada for sua rotina, mais chances de encontrar alguém interessante",
    "Quem busca encontros com 'história' — vocês já se viram, já estiveram no mesmo lugar. Isso cria uma conexão imediata e natural",
    "Profissionais, estudantes e viajantes — perfeito para quem quer conhecer gente nova em seu bairro, universidade ou cidade de destino",
    "Usuários que cansaram de swipes aleatórios — o Happn oferece uma experiência mais orgânica, menos superficial"
  ];

  const topCountries = [
    { country: "França", percentage: "23%", badge: "Origem" },
    { country: "Brasil", percentage: "18%", badge: "2º Maior Mercado" },
    { country: "Índia", percentage: "9%", badge: "Emergente" },
    { country: "Turquia", percentage: "~6%", badge: "Top 5" },
    { country: "Argentina", percentage: "~5%", badge: "Top 5" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F94877] to-[#FF6B9D] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                <img 
                  src={happnLogo} 
                  alt="Happn logo" 
                  className="w-20 h-20 rounded-2xl bg-white p-2"
                />
                <div>
                  <h1 className="text-5xl font-bold mb-2">Happn</h1>
                  <Badge className="bg-white/20 text-white border-white/30">Inovador</Badge>
                </div>
              </div>
              <p className="text-2xl font-semibold mb-4">
                O app que conecta você às pessoas que já cruzaram seu caminho na vida real
              </p>
              <p className="text-lg opacity-90 mb-6">
                Em vez de te mostrar perfis aleatórios, o Happn te apresenta as pessoas que você já cruzou no mundo físico — na rua, no café, no trabalho, na academia ou em qualquer lugar que você tenha passado. Tudo começa na vida real.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-[#F94877] hover:bg-white/90"
                asChild
              >
                <a href="https://www.happn.com/pt/" target="_blank" rel="noopener noreferrer">
                  Começar no Happn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F94877]/10 mb-4">
                  <stat.icon className="w-8 h-8 text-[#F94877]" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Por que o Happn se destaca?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conexões autênticas baseadas em coincidências reais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-custom-lg transition-shadow">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F94877]/10 mb-4 mx-auto">
                    <feature.icon className="w-8 h-8 text-[#F94877]" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data & Public Profile Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Dados e perfil do público (2024–2025)</h2>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-[#F94877]" />
                    Principais Países por Uso
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topCountries.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold">{item.country}</span>
                          <Badge variant="secondary">{item.badge}</Badge>
                        </div>
                        <span className="text-[#F94877] font-bold">{item.percentage}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    → O Brasil é o segundo maior mercado global do Happn, o que significa que há muitas oportunidades de conexão local.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-6 h-6 text-[#F94877]" />
                      Faixa Etária
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>25 a 34 anos</span>
                      <span className="font-bold text-[#F94877]">~30%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>18 a 24 anos</span>
                      <span className="font-bold text-[#F94877]">~25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>35 a 44 anos</span>
                      <span className="font-bold text-[#F94877]">~20%</span>
                    </div>
                    <p className="text-sm text-muted-foreground pt-2">
                      → O público é jovem, urbano e ativo, com foco em experiências reais e imediatas.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-6 h-6 text-[#F94877]" />
                      Distribuição de Gênero
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Homens</span>
                      <span className="font-bold text-[#F94877]">~55%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Mulheres</span>
                      <span className="font-bold text-[#F94877]">~45%</span>
                    </div>
                    <p className="text-sm text-muted-foreground pt-2">
                      → Mais equilibrado do que outros apps, o Happn atrai um público que valoriza encontros baseados em coincidência, não apenas em seleção.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Tráfego e Alcance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">155M+ usuários globais</p>
                      <p className="text-sm text-muted-foreground">Disponível em mais de 190 países</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">8 a 12 milhões de visitas mensais</p>
                      <p className="text-sm text-muted-foreground">A maior parte do uso ocorre no aplicativo móvel (fonte: SimilarWeb, outubro 2024)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Bilhões de cruzamentos registrados</p>
                      <p className="text-sm text-muted-foreground">Conexões baseadas em encontros reais no mundo físico</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Para quem é ideal?</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {idealFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Heart className="w-6 h-6 text-[#F94877] flex-shrink-0 mt-1" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F94877] text-white">
        <div className="container mx-auto px-4 text-center">
          <MapPin className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            Pronto para encontrar alguém que cruzou seu caminho?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Com mais de 155 milhões de usuários e bilhões de cruzamentos registrados, o Happn é a escolha certa para quem acredita que o amor pode começar... na esquina da sua casa.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-[#F94877] hover:bg-white/90"
            asChild
          >
            <a href="https://www.happn.com/pt/" target="_blank" rel="noopener noreferrer">
              Começar no Happn Agora
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Happn;

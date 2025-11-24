import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Shield, Heart, CheckCircle, Globe, TrendingUp, MapPin, Clock } from "lucide-react";
import happnLogo from "@/assets/happn-logo.jpg";
import { trackAppClick } from "@/lib/analytics";

const Happn = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F94877] to-[#FF6B9D] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
            <img 
              src={happnLogo} 
              alt="Happn Logo" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg bg-white p-4"
            />
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4">
                Happn
              </h1>
              <p className="text-2xl mb-2">
                O app que conecta você às pessoas que já cruzaram seu caminho na vida real
              </p>
              <div className="flex items-center gap-4 justify-center md:justify-start mt-4">
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  <span className="text-xl font-bold">4.0</span>
                </div>
                <Badge variant="secondary" className="text-lg px-4 py-1">
                  Inovador
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
            O Happn é um app de encontros diferente de tudo que você já viu. Em vez de te mostrar perfis aleatórios, ele te apresenta as pessoas que você já cruzou no mundo físico — na rua, no café, no trabalho, na academia ou em qualquer lugar que você tenha passado. Seu diferencial? Tudo começa na vida real. Lançado em 2014, o Happn se tornou uma sensação global, especialmente entre quem busca conexões autênticas baseadas em coincidências reais — como se o destino tivesse dado um "match" antes mesmo de você abrir o app.
          </p>
        </div>
      </section>

      {/* Formas de Conectar */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conexões baseadas em cruzamentos reais no seu dia a dia
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#F94877]/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#F94877]" />
                </div>
                <CardTitle>Cruzamentos Reais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Veja pessoas que estiveram no mesmo lugar que você, no mesmo horário</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#F94877]/10 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-[#F94877]" />
                </div>
                <CardTitle>Spots Favoritos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Descubra lugares em comum — cafés, parques, academias</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#F94877]/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#F94877]" />
                </div>
                <CardTitle>Crushes e Notificações</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Saiba quando alguém que você curtiu também te curtiu ou cruzou novamente</p>
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
                <Globe className="w-12 h-12 text-[#F94877] mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">155M+</div>
                <p className="text-muted-foreground">Usuários globais</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-[#F94877] mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">8-12M</div>
                <p className="text-muted-foreground">Visitas mensais ao site</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingUp className="w-12 h-12 text-[#F94877] mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">190+</div>
                <p className="text-muted-foreground">Países disponíveis</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Star className="w-12 h-12 text-[#F94877] mx-auto mb-4" />
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
                    <CheckCircle className="w-5 h-5 text-[#F94877]" />
                    <span>França: ~23% do tráfego global — país de origem e mercado líder</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#F94877]" />
                    <span>Brasil: ~18% — segundo maior mercado global</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#F94877]" />
                    <span>Índia: ~9% — mercado emergente em expansão</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#F94877]" />
                    <span>Turquia e Argentina também entre os top 5</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  → O Brasil é o segundo maior mercado global do Happn, o que significa que há muitas oportunidades de conexão local.
                </p>
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
                    <Badge>30% dos usuários</Badge>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>18 a 24 anos</span>
                    <Badge>25% dos usuários</Badge>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>35 a 44 anos</span>
                    <Badge>20% dos usuários</Badge>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  O público é jovem, urbano e ativo, com foco em experiências reais e imediatas.
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
                    <Badge>~55%</Badge>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Mulheres</span>
                    <Badge>~45%</Badge>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Mais equilibrado do que outros apps, o Happn atrai um público que valoriza encontros baseados em coincidência, não apenas em seleção.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Por que o Happn se destaca? */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Por que o Happn se destaca?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-[#F94877]" />
                  <CardTitle>Cruzamentos Reais</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Você só vê pessoas que já estiveram no mesmo lugar que você, no mesmo horário — conexões baseadas em coincidências reais.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Heart className="w-8 h-8 text-[#F94877]" />
                  <CardTitle>Spots Favoritos</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Veja onde vocês costumam frequentar — cafés, parques, museus, academias — e descubra lugares em comum.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-[#F94877]" />
                  <CardTitle>Crushes e Notificações</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Saiba quando alguém que você curtiu também te curtiu, ou quando vocês cruzaram novamente.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-[#F94877]" />
                  <CardTitle>Segurança e Privacidade</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Você controla o que compartilha e pode desativar sua localização a qualquer momento.
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
                  <CheckCircle className="w-6 h-6 text-[#F94877] mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    <strong>Pessoas que vivem em grandes cidades</strong> — quanto mais movimentada for sua rotina, mais chances de encontrar alguém interessante.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#F94877] mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    <strong>Quem busca encontros com "história"</strong> — vocês já se viram, já estiveram no mesmo lugar. Isso cria uma conexão imediata e natural.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#F94877] mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    <strong>Profissionais, estudantes e viajantes</strong> — perfeito para quem quer conhecer gente nova em seu bairro, universidade ou cidade de destino.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#F94877] mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    <strong>Usuários que cansaram de swipes aleatórios</strong> — o Happn oferece uma experiência mais orgânica, menos superficial.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-xl text-muted-foreground mt-8 max-w-3xl mx-auto">
            Com mais de 155 milhões de usuários e bilhões de cruzamentos registrados, o Happn é a escolha certa para quem acredita que o amor pode começar... na esquina da sua casa.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F94877] text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            Pronto Para Começar no Happn?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Cadastre-se agora e comece a encontrar pessoas que cruzaram seu caminho.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-[#F94877] hover:bg-white/90"
            asChild
          >
            <a 
              href="https://www.happn.com/pt/" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackAppClick('Happn', 'bottom_cta')}
            >
              Cadastrar no Happn
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Happn;

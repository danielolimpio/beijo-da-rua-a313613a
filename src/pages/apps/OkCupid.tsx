import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Shield, Heart, CheckCircle, Globe, TrendingUp, MessageCircle, Brain } from "lucide-react";
import okcupidLogo from "@/assets/okcupid-logo.jpeg";
import { trackAppClick } from "@/lib/analytics";
import { Link } from "react-router-dom";

const OkCupid = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="OkCupid Brasil | Compatibilidade Inteligente"
        description="OkCupid: 91M+ usuários, algoritmo de compatibilidade baseado em valores. Inclusivo com 22 gêneros e 13 orientações. Encontre conexões profundas."
        canonical="https://beijodarua.com.br/apps/okcupid/"
        keywords="okcupid brasil, app okcupid, okcupid namoro, compatibilidade, namoro lgbtqia+"
      />
      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
      <DynamicBreadcrumb />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
            <img 
              src={okcupidLogo} 
              alt="OkCupid Logo" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg bg-white p-4"
            />
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4">
                OkCupid
              </h1>
              <p className="text-2xl mb-2">
                O app de relacionamento onde a compatibilidade começa com perguntas inteligentes
              </p>
              <div className="flex items-center gap-4 justify-center md:justify-start mt-4">
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  <span className="text-xl font-bold">4.1</span>
                </div>
                <Badge variant="secondary" className="text-lg px-4 py-1">
                  Compatibilidade
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
            O OkCupid é um dos apps de encontros mais completos e inclusivos do mercado. Lançado em 2004 (muito antes da era dos "swipes"), ele se baseia em perguntas, valores, interesses e identidades para criar conexões mais profundas e significativas. Em vez de priorizar apenas fotos, o OkCupid quer que você seja visto pelo que você é — e pelo que você busca.
          </p>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">O Que Torna o OkCupid Único</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A plataforma oferece um dos questionários mais detalhados do setor, com centenas de perguntas opcionais que alimentam um algoritmo de compatibilidade porcentual.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Algoritmo Inteligente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Compatibilidade porcentual baseada em valores e respostas</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Inclusão Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">22 opções de gênero e 13 orientações sexuais</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Perfis Ricos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Bio detalhada, prompts criativos e perguntas personalizadas</p>
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
                  Com mais de <strong className="text-foreground">91 milhões de usuários registrados</strong>, o OkCupid está presente em mais de <strong className="text-foreground">110 países</strong>.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Tráfego Online</p>
                  <p className="text-sm text-muted-foreground">
                    14 a 18 milhões de visitas mensais ao site okcupid.com (out/2024)
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
                    <span><strong>Estados Unidos</strong> (~30% do tráfego global)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary">2º</Badge>
                    <span>Reino Unido (~8%)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary">3º</Badge>
                    <span>Canadá (~6%)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary">4º</Badge>
                    <span><strong>Brasil</strong> (~5%)</span>
                  </li>
                  <li className="text-sm text-muted-foreground">
                    Índia e Austrália também com crescimento consistente
                  </li>
                </ul>
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
                      <span className="text-sm text-muted-foreground">35%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '35%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">35 a 44 anos</span>
                      <span className="text-sm text-muted-foreground">22%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '22%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">18 a 24 anos</span>
                      <span className="text-sm text-muted-foreground">18%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '18%'}}></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Público mais maduro que valoriza diálogo e alinhamento de valores
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
                  Equilíbrio razoável com foco em compatibilidade profunda
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Por que o OkCupid se destaca? */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Por que o OkCupid se destaca?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Brain className="w-8 h-8 text-primary" />
                  <CardTitle>Algoritmo de Compatibilidade</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Baseado em respostas reais — não apenas em aparência. Quanto mais você responde, mais preciso fica o match.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Heart className="w-8 h-8 text-primary" />
                  <CardTitle>Totalmente Inclusivo</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Uma das primeiras plataformas a adotar opções não-binárias e linguagem neutra.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-8 h-8 text-primary" />
                  <CardTitle>Perfis Ricos em Texto</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Espaço para bio detalhada, respostas a perguntas icônicas e prompts criativos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  <CardTitle>Gratuito com Recursos Avançados</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Muitas funções premium estão disponíveis mesmo na versão gratuita.
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
                    <strong>Pessoas que cansaram de apps superficiais</strong> e querem conversas reais baseadas em valores compartilhados.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    <strong>Usuários LGBTQIA+</strong> — por sua abordagem respeitosa e inclusiva desde o cadastro.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    <strong>Quem busca relacionamentos sérios</strong> baseados em valores, política, religião, estilo de vida, etc.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    <strong>Intelectuais, ativistas, artistas ou curiosos</strong> que gostam de se expressar por escrito.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-xl text-muted-foreground mt-8 max-w-3xl mx-auto">
            Com mais de 91 milhões de usuários registrados e milhões de mensagens trocadas diariamente, o OkCupid continua sendo a escolha de quem acredita que amor, amizade e paixão começam com uma boa conversa — e não apenas com um clique.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            Pronto Para Começar no OkCupid?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Cadastre-se agora e comece a fazer conexões baseadas em compatibilidade real.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://www.okcupid.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackAppClick('OkCupid', 'bottom_cta')}
            >
              <Button size="lg" className="bg-background text-primary hover:bg-background/90">
                Cadastrar no OkCupid
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

export default OkCupid;

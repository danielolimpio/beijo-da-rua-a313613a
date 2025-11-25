import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Shield, Heart, CheckCircle, Globe, TrendingUp, Zap, Eye, MessageCircle } from "lucide-react";
import badooLogo from "@/assets/badoo-logo.jpeg";
import { trackAppClick } from "@/lib/analytics";
import { Link } from "react-router-dom";

const Badoo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#6C5CE7] via-[#A29BFE] to-[#7B68EE] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <img 
              src={badooLogo} 
              alt="Badoo Logo" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg bg-white p-4"
            />
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4">
                Badoo
              </h1>
              <p className="text-2xl font-semibold mb-4">
                O app que conecta milhões de pessoas reais todos os dias
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Badge className="bg-white text-[#6C5CE7] hover:bg-white/90">
                  <Star className="w-4 h-4 mr-1 fill-[#6C5CE7]" />
                  4.3
                </Badge>
                <Badge className="bg-white/20 hover:bg-white/30">
                  <Users className="w-4 h-4 mr-1" />
                  100M+ usuários
                </Badge>
                <Badge className="bg-white/20 hover:bg-white/30">Popular</Badge>
              </div>
            </div>
          </div>
          <p className="text-xl text-center max-w-4xl mx-auto">
            Lançado em 2006, o Badoo é um dos pioneiros em apps de relacionamento. Com verificação por selfie, 
            conversa sem match e mais de 1 bilhão de conexões desde seu lançamento, ele conecta pessoas reais 
            de forma simples e segura.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Intro */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">O que é o Badoo?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              O Badoo é um dos aplicativos de relacionamento mais populares e estabelecidos do mundo. Lançado em 2006, 
              muito antes da explosão dos apps modernos, ele foi pioneiro ao integrar recursos como localização em tempo real, 
              verificação por selfie e conexões baseadas em interesses comuns. Hoje, o Badoo ajuda milhões de pessoas a 
              encontrarem amizades, encontros casuais ou relacionamentos sérios, tudo com foco em autenticidade e segurança.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Com mais de <strong className="text-foreground">1 bilhão de conexões</strong> feitas desde seu lançamento e 
              mais de <strong className="text-foreground">100 milhões de downloads</strong> apenas na Google Play Store, 
              o Badoo se destaca por sua interface simples, mas poderosa, que permite que você converse imediatamente — 
              sem precisar esperar por um "match" para começar a interagir.
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
                    Presente em mais de <strong className="text-foreground">190 países</strong>, com forte penetração 
                    na Europa, América Latina e Ásia.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Tráfego Online</p>
                    <p className="text-sm text-muted-foreground">
                      45 a 55 milhões de visitas mensais no site badoo.com (out/2024)
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
                      <span><strong>Brasil</strong> (~19% do tráfego global)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary">2º</Badge>
                      <span>México (~8%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary">3º</Badge>
                      <span>Estados Unidos (~6%)</span>
                    </li>
                    <li className="text-sm text-muted-foreground">
                      Rússia e Itália também estão entre os top 5
                    </li>
                  </ul>
                  <p className="text-sm text-success font-semibold mt-4">
                    ✓ O Badoo é extremamente popular na América Latina, especialmente no Brasil
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
                        <span className="text-sm text-muted-foreground">33%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '33%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">18 a 24 anos</span>
                        <span className="text-sm text-muted-foreground">27%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '27%'}}></div>
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
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Público jovem e ativo, que valoriza agilidade, autenticidade e possibilidade de escolha
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
                    O Badoo investe em ferramentas de moderação e verificação para equilibrar a experiência e proteger todas as partes
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Por que se destaca */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Por que o Badoo se destaca?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 text-[#6C5CE7]" />
                    Conversa Sem Precisar de Match
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Diferentemente de outros apps, você pode enviar uma mensagem assim que curtir um perfil 
                    (dependendo do modo e região). Sem espera, sem burocracia.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-[#6C5CE7]" />
                    Verificação por Selfie
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Verificação em tempo real ajuda a garantir que os perfis sejam de pessoas reais, 
                    aumentando a segurança e autenticidade das conexões.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-6 h-6 text-[#6C5CE7]" />
                    "Quem me viu?"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Recurso exclusivo que mostra quem visualizou seu perfil recentemente, permitindo que você 
                    tome a iniciativa.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-6 h-6 text-[#6C5CE7]" />
                    Modo "Encounters"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Navegue por perfis próximos com base na sua localização em tempo real. Perfeito para 
                    encontros locais e imediatos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-[#6C5CE7]" />
                    Centro de Segurança Integrado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Orientações, bloqueios rápidos e suporte 24/7 para encontros mais seguros. A segurança 
                    dos usuários é prioridade máxima.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-6 h-6 text-[#6C5CE7]" />
                    Flexibilidade de Intenções
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ajuste sua intenção (amizade, namoro, casual) a qualquer momento. O Badoo se adapta 
                    ao que você está buscando.
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
                      <h3 className="font-semibold mb-2">Quem quer testar sem burocracia</h3>
                      <p className="text-sm text-muted-foreground">
                        Sem esperar por matches ou regras rígidas — converse imediatamente com quem você curtir
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
                      <h3 className="font-semibold mb-2">Conexões locais e imediatas</h3>
                      <p className="text-sm text-muted-foreground">
                        Especialmente em grandes cidades brasileiras, onde o Badoo tem forte presença
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
                      <h3 className="font-semibold mb-2">Usuários que mudam de ideia</h3>
                      <p className="text-sm text-muted-foreground">
                        Ajuste sua intenção entre amizade, namoro ou casual a qualquer momento
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
                      <h3 className="font-semibold mb-2">Quem prioriza segurança</h3>
                      <p className="text-sm text-muted-foreground">
                        Mas não abre mão de simplicidade e rapidez nas conexões
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#6C5CE7] via-[#A29BFE] to-[#7B68EE] text-white rounded-2xl p-12 text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 fill-white" />
            <h2 className="text-4xl font-bold mb-6">
              Pronto para conectar com pessoas reais?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Com mais de 15 anos de experiência no mercado, o Badoo prova que a combinação de acessibilidade, 
              segurança e foco em pessoas reais continua sendo sua maior força.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://badoo.com/pt/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackAppClick('Badoo', 'bottom_cta')}
              >
                <Button size="lg" className="bg-white text-[#6C5CE7] hover:bg-white/90 font-bold">
                  Cadastrar-se no Badoo
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

export default Badoo;
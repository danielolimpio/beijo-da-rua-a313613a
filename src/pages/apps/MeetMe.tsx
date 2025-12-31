import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Shield, Heart, CheckCircle, Globe, TrendingUp, Zap, Target, MessageCircle, Video, Gift, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import meetmeLogo from "@/assets/meetme-logo.jpeg";
import { trackAppClick } from "@/lib/analytics";

const MeetMe = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="MeetMe App | Conheça Pessoas e Faça Transmissões ao Vivo"
        description="Análise completa do MeetMe: app social para conhecer pessoas, fazer lives e chat. Descubra se o MeetMe é ideal para você. Prós, contras e dicas."
        canonical="https://beijodarua.com.br/apps/meetme/"
        keywords="meetme app, meetme brasil, app fazer amigos, meetme funciona, live chat app"
      />
      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
      <DynamicBreadcrumb />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#7B4AC9] via-[#9B6DD9] to-[#6B3AB9] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <img 
              src={meetmeLogo} 
              alt="MeetMe Logo" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg bg-white p-4"
            />
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4">
                MeetMe
              </h1>
              <p className="text-2xl font-semibold mb-4">
                Conheça novas pessoas através de lives e chat interativo
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Badge className="bg-white text-[#7B4AC9] hover:bg-white/90">
                  <Star className="w-4 h-4 mr-1 fill-[#7B4AC9]" />
                  4.2
                </Badge>
                <Badge className="bg-white/20 hover:bg-white/30">
                  <Users className="w-4 h-4 mr-1" />
                  100M+ downloads
                </Badge>
                <Badge className="bg-white/20 hover:bg-white/30">Social & Dating</Badge>
              </div>
            </div>
          </div>
          <p className="text-xl text-center max-w-4xl mx-auto">
            O MeetMe é uma plataforma social que combina funcionalidades de namoro com entretenimento ao vivo. 
            Perfeito para quem quer conhecer pessoas de forma descontraída através de lives, jogos e chat.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Intro */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">O que é o MeetMe?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Fundado em 2005, o MeetMe é uma das plataformas sociais mais antigas focadas em conectar pessoas 
              de forma divertida e interativa. Diferente de apps tradicionais de namoro, o MeetMe oferece uma 
              experiência completa com transmissões ao vivo, jogos sociais e chat em grupo.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com mais de 100 milhões de downloads e milhões de usuários ativos diariamente, o MeetMe é ideal 
              para quem prefere conhecer pessoas de forma mais natural, sem a pressão do swipe tradicional.
            </p>
          </div>

          {/* Números Impressionantes */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">MeetMe em Números</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center bg-gradient-to-br from-[#7B4AC9]/10 to-[#9B6DD9]/10 border-[#7B4AC9]/20">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-[#7B4AC9] mb-2">100M+</div>
                  <p className="text-sm text-muted-foreground">Downloads totais</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-[#7B4AC9]/10 to-[#9B6DD9]/10 border-[#7B4AC9]/20">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-[#7B4AC9] mb-2">2M+</div>
                  <p className="text-sm text-muted-foreground">Usuários ativos/dia</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-[#7B4AC9]/10 to-[#9B6DD9]/10 border-[#7B4AC9]/20">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-[#7B4AC9] mb-2">50K+</div>
                  <p className="text-sm text-muted-foreground">Lives diárias</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-[#7B4AC9]/10 to-[#9B6DD9]/10 border-[#7B4AC9]/20">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-[#7B4AC9] mb-2">180+</div>
                  <p className="text-sm text-muted-foreground">Países</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Dados e Perfil */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Perfil do Público</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-[#7B4AC9]" />
                    Objetivo dos Usuários
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-[#7B4AC9]/20 text-[#7B4AC9]">45%</Badge>
                      <span>Fazer novas amizades</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-[#7B4AC9]/20 text-[#7B4AC9]">35%</Badge>
                      <span>Encontros e namoro</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-[#7B4AC9]/20 text-[#7B4AC9]">20%</Badge>
                      <span>Entretenimento e lives</span>
                    </li>
                  </ul>
                  <p className="text-sm text-success font-semibold mt-4">
                    ✓ Ambiente descontraído para conexões naturais
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-[#7B4AC9]" />
                    Faixa Etária
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">18 a 24 anos</span>
                        <span className="text-sm text-muted-foreground">38%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-[#7B4AC9] h-2 rounded-full" style={{width: '38%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">25 a 34 anos</span>
                        <span className="text-sm text-muted-foreground">32%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-[#7B4AC9] h-2 rounded-full" style={{width: '32%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">35 a 44 anos</span>
                        <span className="text-sm text-muted-foreground">20%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-[#7B4AC9] h-2 rounded-full" style={{width: '20%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">45+ anos</span>
                        <span className="text-sm text-muted-foreground">10%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-[#7B4AC9] h-2 rounded-full" style={{width: '10%'}}></div>
                      </div>
                    </div>
                  </div>
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
                        <span className="text-sm text-muted-foreground">55%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-[#7B4AC9] h-2 rounded-full" style={{width: '55%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Mulheres</span>
                        <span className="text-sm text-muted-foreground">45%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-[#7B4AC9] h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-success font-semibold mt-4">
                    ✓ Um dos melhores equilíbrios de gênero entre apps sociais
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-6 h-6 text-[#7B4AC9]" />
                    Presença no Brasil
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    O MeetMe tem crescido significativamente no Brasil, especialmente entre 
                    jovens que buscam uma experiência social mais interativa.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Principais Cidades</p>
                    <p className="text-sm text-muted-foreground">
                      São Paulo, Rio de Janeiro, Belo Horizonte, Salvador e Fortaleza
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recursos Principais */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Recursos que Fazem a Diferença</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-[#7B4AC9]/20 hover:border-[#7B4AC9]/40 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="w-6 h-6 text-[#7B4AC9]" />
                    Transmissões ao Vivo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Faça ou assista transmissões ao vivo, interaja com apresentadores e 
                    conheça pessoas enquanto se diverte. Uma forma natural de quebrar o gelo.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#7B4AC9]/20 hover:border-[#7B4AC9]/40 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 text-[#7B4AC9]" />
                    Chat e Match
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sistema de match integrado com chat em tempo real. Envie mensagens, 
                    fotos e conheça pessoas próximas ou do mundo inteiro.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#7B4AC9]/20 hover:border-[#7B4AC9]/40 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-[#7B4AC9]" />
                    Jogos Sociais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Jogue jogos interativos com outros usuários. Uma forma divertida de 
                    conhecer pessoas e mostrar sua personalidade.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#7B4AC9]/20 hover:border-[#7B4AC9]/40 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="w-6 h-6 text-[#7B4AC9]" />
                    Presentes Virtuais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Envie presentes virtuais para pessoas especiais ou durante lives. 
                    Uma forma de se destacar e mostrar interesse.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Prós e Contras */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Prós e Contras</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-success/30">
                <CardHeader>
                  <CardTitle className="text-success flex items-center gap-2">
                    <CheckCircle className="w-6 h-6" />
                    Pontos Positivos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Lives e entretenimento integrado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Bom equilíbrio de gênero (45% mulheres)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Jogos sociais para quebrar o gelo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Chat gratuito sem precisar de match</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Ambiente descontraído e menos pressão</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Verificação de perfil disponível</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-destructive/30">
                <CardHeader>
                  <CardTitle className="text-destructive flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    Pontos de Atenção
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>Muitos usuários buscam só amizade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>Alguns recursos premium são pagos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>Anúncios na versão gratuita</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>Menos focado em relacionamentos sérios</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Para quem é ideal */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Para quem é ideal?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-[#7B4AC9]/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Extrovertidos que gostam de lives</h3>
                      <p className="text-sm text-muted-foreground">
                        Se você gosta de interações ao vivo e não tem vergonha de aparecer, 
                        o MeetMe é perfeito para você
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#7B4AC9]/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Quem prefere conexões naturais</h3>
                      <p className="text-sm text-muted-foreground">
                        Ideal para quem não gosta da pressão do swipe e prefere conhecer 
                        pessoas de forma mais orgânica
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#7B4AC9]/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Jovens de 18-34 anos</h3>
                      <p className="text-sm text-muted-foreground">
                        A maioria do público está nessa faixa etária, tornando mais fácil 
                        encontrar pessoas com interesses similares
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#7B4AC9]/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Quem quer amizade e namoro</h3>
                      <p className="text-sm text-muted-foreground">
                        Perfeito se você está aberto tanto a fazer novos amigos quanto 
                        a encontrar um interesse romântico
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#7B4AC9] via-[#9B6DD9] to-[#6B3AB9] text-white rounded-2xl p-12 text-center">
            <Video className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Pronto para conhecer pessoas de forma divertida?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Com o MeetMe, você pode fazer lives, jogar e conversar com milhões de pessoas 
              em um ambiente descontraído e seguro.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://www.meetme.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackAppClick('MeetMe', 'bottom_cta')}
              >
                <Button size="lg" className="bg-white text-[#7B4AC9] hover:bg-white/90 font-bold">
                  Baixar o MeetMe
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

export default MeetMe;

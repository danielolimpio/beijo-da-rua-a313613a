import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Shield, Heart, CheckCircle, Globe, TrendingUp, Target, MessageCircle, Video, Gift, Sparkles, Languages, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import datingLogo from "@/assets/dating-logo.jpeg";
import { trackAppClick } from "@/lib/analytics";

const Dating = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Dating.com | Conheça Pessoas do Mundo Inteiro"
        description="Análise completa do Dating.com: app internacional para conhecer pessoas de outros países. Descubra se o Dating.com é ideal para você."
        canonical="https://beijodarua.com.br/apps/dating/"
        keywords="dating.com brasil, dating app internacional, namoro internacional, conhecer estrangeiros"
      />
      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
      <DynamicBreadcrumb />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#E31B23] via-[#C41920] to-[#A0151B] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <img 
              src={datingLogo} 
              alt="Dating.com Logo" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg bg-white p-4"
            />
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4">
                Dating.com
              </h1>
              <p className="text-2xl font-semibold mb-4">
                Conheça pessoas do mundo inteiro e encontre o amor sem fronteiras
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Badge className="bg-white text-[#E31B23] hover:bg-white/90">
                  <Star className="w-4 h-4 mr-1 fill-[#E31B23]" />
                  4.3
                </Badge>
                <Badge className="bg-white/20 hover:bg-white/30">
                  <Users className="w-4 h-4 mr-1" />
                  40M+ membros
                </Badge>
                <Badge className="bg-white/20 hover:bg-white/30">Internacional</Badge>
              </div>
            </div>
          </div>
          <p className="text-xl text-center max-w-4xl mx-auto">
            O Dating.com é a plataforma ideal para quem quer conhecer pessoas de outros países e culturas. 
            Com tradução integrada e videochamadas, o amor não conhece fronteiras.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Intro */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">O que é o Dating.com?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Fundado em 1993, o Dating.com é um dos sites de namoro mais antigos e respeitados do mundo. 
              A plataforma se especializou em conectar pessoas de diferentes países, tornando-se referência 
              em relacionamentos internacionais.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com recursos como tradução automática de mensagens, videochamadas e presentes virtuais, 
              o Dating.com remove as barreiras de idioma e distância, permitindo conexões genuínas 
              entre pessoas de culturas diferentes.
            </p>
          </div>

          {/* Números Globais */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Presença Global</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center bg-gradient-to-br from-[#E31B23]/10 to-[#C41920]/10 border-[#E31B23]/20">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-[#E31B23] mb-2">40M+</div>
                  <p className="text-sm text-muted-foreground">Membros registrados</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-[#E31B23]/10 to-[#C41920]/10 border-[#E31B23]/20">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-[#E31B23] mb-2">32</div>
                  <p className="text-sm text-muted-foreground">Idiomas suportados</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-[#E31B23]/10 to-[#C41920]/10 border-[#E31B23]/20">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-[#E31B23] mb-2">200+</div>
                  <p className="text-sm text-muted-foreground">Países</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-[#E31B23]/10 to-[#C41920]/10 border-[#E31B23]/20">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-[#E31B23] mb-2">30+</div>
                  <p className="text-sm text-muted-foreground">Anos de experiência</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Perfil do Público */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Perfil do Público</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-[#E31B23]" />
                    Objetivo dos Usuários
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-[#E31B23]/20 text-[#E31B23]">50%</Badge>
                      <span>Relacionamento internacional</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-[#E31B23]/20 text-[#E31B23]">30%</Badge>
                      <span>Amizades internacionais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-[#E31B23]/20 text-[#E31B23]">20%</Badge>
                      <span>Praticar idiomas</span>
                    </li>
                  </ul>
                  <p className="text-sm text-success font-semibold mt-4">
                    ✓ Ideal para quem quer expandir horizontes além do Brasil
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-6 h-6 text-[#E31B23]" />
                    Países Mais Ativos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#E31B23]" />
                      <span>Estados Unidos, Canadá, Reino Unido</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#E31B23]" />
                      <span>Alemanha, França, Itália</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#E31B23]" />
                      <span>Brasil, Argentina, México</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#E31B23]" />
                      <span>Japão, Coreia do Sul, Filipinas</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4">
                    Forte presença em todos os continentes
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-[#E31B23]" />
                    Faixa Etária
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">25 a 34 anos</span>
                        <span className="text-sm text-muted-foreground">35%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-[#E31B23] h-2 rounded-full" style={{width: '35%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">35 a 44 anos</span>
                        <span className="text-sm text-muted-foreground">30%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-[#E31B23] h-2 rounded-full" style={{width: '30%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">45 a 54 anos</span>
                        <span className="text-sm text-muted-foreground">22%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-[#E31B23] h-2 rounded-full" style={{width: '22%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">18 a 24 anos</span>
                        <span className="text-sm text-muted-foreground">13%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-[#E31B23] h-2 rounded-full" style={{width: '13%'}}></div>
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
                        <span className="text-sm text-muted-foreground">54%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-[#E31B23] h-2 rounded-full" style={{width: '54%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Mulheres</span>
                        <span className="text-sm text-muted-foreground">46%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-[#E31B23] h-2 rounded-full" style={{width: '46%'}}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-success font-semibold mt-4">
                    ✓ Bom equilíbrio para plataforma internacional
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recursos Principais */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Recursos que Conectam o Mundo</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-[#E31B23]/20 hover:border-[#E31B23]/40 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Languages className="w-6 h-6 text-[#E31B23]" />
                    Tradução Automática
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Mensagens são traduzidas automaticamente em tempo real para 32 idiomas. 
                    Converse com qualquer pessoa do mundo sem barreiras linguísticas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#E31B23]/20 hover:border-[#E31B23]/40 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="w-6 h-6 text-[#E31B23]" />
                    Videochamadas HD
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Veja e converse com seus matches em alta definição. Perfeito para 
                    conhecer melhor alguém antes de um encontro presencial.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#E31B23]/20 hover:border-[#E31B23]/40 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="w-6 h-6 text-[#E31B23]" />
                    Presentes Reais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Envie presentes reais (flores, chocolates) para seu match em qualquer 
                    lugar do mundo. Uma forma especial de demonstrar interesse.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#E31B23]/20 hover:border-[#E31B23]/40 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-[#E31B23]" />
                    Streams Interativas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Participe de transmissões ao vivo e interaja com pessoas do mundo 
                    inteiro. Uma forma dinâmica de fazer novas conexões.
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
                      <span>Tradução automática em 32 idiomas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Presença em mais de 200 países</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Videochamadas de alta qualidade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>30+ anos de experiência no mercado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Sistema de verificação robusto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Possibilidade de enviar presentes reais</span>
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
                      <span>Modelo de créditos para mensagens</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>Pode ser caro para uso frequente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>Distância pode ser um desafio para encontros</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>Necessário cuidado com perfis falsos</span>
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
              <Card className="border-[#E31B23]/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Quem quer conhecer estrangeiros</h3>
                      <p className="text-sm text-muted-foreground">
                        Se você sonha em ter um relacionamento internacional ou 
                        fazer amigos de outros países
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#E31B23]/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Quem planeja morar fora</h3>
                      <p className="text-sm text-muted-foreground">
                        Ideal para quem está planejando imigrar e quer conhecer 
                        pessoas do país de destino
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#E31B23]/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Quem quer praticar idiomas</h3>
                      <p className="text-sm text-muted-foreground">
                        Perfeito para quem está aprendendo um novo idioma e quer 
                        praticar com nativos
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#E31B23]/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Viajantes frequentes</h3>
                      <p className="text-sm text-muted-foreground">
                        Ideal para quem viaja muito e quer conhecer pessoas 
                        nos destinos que visita
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#E31B23] via-[#C41920] to-[#A0151B] text-white rounded-2xl p-12 text-center">
            <Globe className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Pronto para conhecer o mundo?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Com o Dating.com, você pode se conectar com pessoas de mais de 200 países, 
              sem barreiras de idioma, e encontrar o amor onde quer que ele esteja.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://www.dating.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackAppClick('Dating.com', 'bottom_cta')}
              >
                <Button size="lg" className="bg-white text-[#E31B23] hover:bg-white/90 font-bold">
                  Começar no Dating.com
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

export default Dating;

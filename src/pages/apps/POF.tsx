import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Shield, Heart, CheckCircle, Globe, TrendingUp, Zap, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import pofLogo from "@/assets/pof-logo.jpeg";
import { trackAppClick } from "@/lib/analytics";

const POF = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="POF (Plenty of Fish) Brasil - App de Namoro 100% Gratuito"
        description="POF: o app de namoro gratuito com 150M+ usuários. Converse sem pagar, filtros avançados e comunidade ativa. Descubra se o POF é ideal para você."
        canonical="https://beijodarua.com.br/apps/pof/"
        keywords="pof brasil, plenty of fish, pof grátis, app namoro grátis, pof funciona"
      />
      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
      <DynamicBreadcrumb />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F97373] via-[#E85A5A] to-[#D64545] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <img 
              src={pofLogo} 
              alt="POF (Plenty of Fish) Logo" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg bg-white p-4"
            />
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4">
                POF (Plenty of Fish)
              </h1>
              <p className="text-2xl font-semibold mb-4">
                O app de namoro gratuito mais popular do mundo
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Badge className="bg-white text-[#E85A5A] hover:bg-white/90">
                  <Star className="w-4 h-4 mr-1 fill-[#E85A5A]" />
                  4.0
                </Badge>
                <Badge className="bg-white/20 hover:bg-white/30">
                  <Users className="w-4 h-4 mr-1" />
                  150M+ usuários globais
                </Badge>
                <Badge className="bg-white/20 hover:bg-white/30">Gratuito</Badge>
              </div>
            </div>
          </div>
          <p className="text-xl text-center max-w-4xl mx-auto">
            Um dos pioneiros do namoro online, o POF oferece uma experiência completa e gratuita para quem busca 
            conexões reais sem precisar pagar por recursos essenciais.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Intro */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">O que é o POF (Plenty of Fish)?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              O Plenty of Fish (POF) é um dos aplicativos de namoro mais antigos e conhecidos do mundo, fundado em 2003. 
              Com mais de 150 milhões de usuários registrados globalmente, o POF se destaca por oferecer a maioria de 
              seus recursos de forma gratuita, diferente de muitos concorrentes que limitam funcionalidades básicas a 
              planos pagos.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O app utiliza um sistema de compatibilidade baseado em questionários que ajuda a encontrar pessoas com 
              interesses e valores similares, tornando-o uma opção interessante para quem busca relacionamentos mais 
              significativos.
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
                    Alcance Global
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Disponível em mais de <strong className="text-foreground">20 países</strong>, com forte presença 
                    nos EUA, Canadá, Reino Unido e Austrália.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Usuários Ativos</p>
                    <p className="text-sm text-muted-foreground">
                      Aproximadamente 4 milhões de usuários ativos diariamente
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    Engajamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-success/20 text-success">✓</Badge>
                      <span>Mensagens ilimitadas grátis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-success/20 text-success">✓</Badge>
                      <span>Ver quem visualizou seu perfil</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-success/20 text-success">✓</Badge>
                      <span>Filtros de busca avançados</span>
                    </li>
                  </ul>
                  <p className="text-sm text-success font-semibold mt-4">
                    ✓ Mais de 1 bilhão de mensagens enviadas por mês
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
                        <span className="text-sm text-muted-foreground">35%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '35%'}}></div>
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
                        <span className="text-sm text-muted-foreground">22%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '22%'}}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Público mais maduro comparado a outros apps, ideal para relacionamentos sérios
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
                        <span className="text-sm text-muted-foreground">55%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '55%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Mulheres</span>
                        <span className="text-sm text-muted-foreground">45%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Equilíbrio de gênero melhor que a maioria dos apps de namoro
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Por que se destaca */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Por que o POF se destaca?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-6 h-6 text-[#E85A5A]" />
                    Totalmente Gratuito
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Diferente de outros apps, o POF permite enviar mensagens ilimitadas, ver quem visitou seu 
                    perfil e usar filtros de busca avançados sem pagar nada.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-6 h-6 text-[#E85A5A]" />
                    Teste de Compatibilidade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    O "Chemistry Test" do POF analisa personalidade, necessidades emocionais e estilo de 
                    relacionamento para sugerir matches mais compatíveis.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-[#E85A5A]" />
                    Perfis Detalhados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Permite criar perfis mais completos com informações sobre interesses, estilo de vida, 
                    valores e o que busca em um relacionamento.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-[#E85A5A]" />
                    Recursos de Segurança
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sistema de denúncias robusto, bloqueio de usuários e moderação ativa para garantir 
                    uma experiência segura.
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
                      <h3 className="font-semibold mb-2">Quem busca relacionamentos sérios</h3>
                      <p className="text-sm text-muted-foreground">
                        O foco em compatibilidade e perfis detalhados atrai pessoas interessadas em conexões duradouras
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
                      <h3 className="font-semibold mb-2">Usuários que não querem pagar</h3>
                      <p className="text-sm text-muted-foreground">
                        Com recursos gratuitos completos, é perfeito para quem quer uma experiência completa sem custos
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
                      <h3 className="font-semibold mb-2">Pessoas de 30+ anos</h3>
                      <p className="text-sm text-muted-foreground">
                        O público mais maduro do POF oferece melhor compatibilidade para quem busca relacionamentos estáveis
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
                      <h3 className="font-semibold mb-2">Quem valoriza compatibilidade</h3>
                      <p className="text-sm text-muted-foreground">
                        Se você prefere matches baseados em personalidade e valores, não apenas em aparência
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#F97373] via-[#E85A5A] to-[#D64545] text-white rounded-2xl p-12 text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 fill-white" />
            <h2 className="text-4xl font-bold mb-6">
              Pronto para encontrar seu match perfeito?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Com milhões de usuários ativos e recursos gratuitos completos, o POF é uma excelente opção para 
              quem busca conexões reais sem gastar nada.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://www.pof.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackAppClick('POF', 'bottom_cta')}
              >
                <Button size="lg" className="bg-white text-[#E85A5A] hover:bg-white/90 font-bold">
                  Cadastrar-se no POF
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

export default POF;
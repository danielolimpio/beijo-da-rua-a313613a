import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Shield, Heart, CheckCircle, Globe, TrendingUp, Target, MessageCircle, Brain, Award, Clock, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";
import eharmonyLogo from "@/assets/eharmony-logo.jpeg";
import { trackAppClick } from "@/lib/analytics";

const Eharmony = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="eHarmony App | O Site de Relacionamentos Sérios #1 do Mundo"
        description="Análise completa do eHarmony: app para relacionamentos sérios com algoritmo de compatibilidade científico. Descubra se é ideal para você."
        canonical="https://beijodarua.com.br/apps/eharmony/"
        keywords="eharmony brasil, eharmony funciona, app relacionamento sério, namoro sério online"
      />
      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
      <DynamicBreadcrumb />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4A7C4E] via-[#5A8C5E] to-[#3A6C3E] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <img 
              src={eharmonyLogo} 
              alt="eHarmony Logo" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg bg-white p-4"
            />
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4">
                eHarmony
              </h1>
              <p className="text-2xl font-semibold mb-4">
                O site de relacionamentos sérios #1 do mundo
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Badge className="bg-white text-[#4A7C4E] hover:bg-white/90">
                  <Star className="w-4 h-4 mr-1 fill-[#4A7C4E]" />
                  4.4
                </Badge>
                <Badge className="bg-white/20 hover:bg-white/30">
                  <Users className="w-4 h-4 mr-1" />
                  66M+ membros
                </Badge>
                <Badge className="bg-white/20 hover:bg-white/30">Relacionamento Sério</Badge>
              </div>
            </div>
          </div>
          <p className="text-xl text-center max-w-4xl mx-auto">
            O eHarmony é pioneiro em usar ciência e algoritmos avançados para criar matches com alta 
            compatibilidade. Focado exclusivamente em relacionamentos sérios e casamentos duradouros.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Intro */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">O que é o eHarmony?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Fundado em 2000, o eHarmony revolucionou o mundo do namoro online ao introduzir o conceito 
              de compatibilidade baseada em ciência. Desenvolvido com a ajuda de psicólogos, o algoritmo 
              do eHarmony analisa 32 dimensões da personalidade para encontrar matches verdadeiramente compatíveis.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Diferente de apps de swipe, o eHarmony é projetado para quem busca um relacionamento sério 
              e duradouro. A plataforma já foi responsável por milhões de casamentos ao redor do mundo.
            </p>
          </div>

          {/* Estatísticas de Sucesso */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Histórico de Sucesso Comprovado</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center bg-gradient-to-br from-[#4A7C4E]/10 to-[#5A8C5E]/10 border-[#4A7C4E]/20">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-[#4A7C4E] mb-2">2M+</div>
                  <p className="text-sm text-muted-foreground">Casamentos realizados</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-[#4A7C4E]/10 to-[#5A8C5E]/10 border-[#4A7C4E]/20">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-[#4A7C4E] mb-2">66M+</div>
                  <p className="text-sm text-muted-foreground">Membros registrados</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-[#4A7C4E]/10 to-[#5A8C5E]/10 border-[#4A7C4E]/20">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-[#4A7C4E] mb-2">15min</div>
                  <p className="text-sm text-muted-foreground">Novo match a cada</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-[#4A7C4E]/10 to-[#5A8C5E]/10 border-[#4A7C4E]/20">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-[#4A7C4E] mb-2">200+</div>
                  <p className="text-sm text-muted-foreground">Países atendidos</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Algoritmo de Compatibilidade */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">O Algoritmo de Compatibilidade</h2>
            <Card className="border-[#4A7C4E]/30 bg-gradient-to-br from-[#4A7C4E]/5 to-transparent">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Brain className="w-10 h-10 text-[#4A7C4E]" />
                      <h3 className="text-xl font-bold">32 Dimensões de Compatibilidade</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      O questionário do eHarmony analisa aspectos fundamentais da personalidade:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Valores fundamentais e crenças</li>
                      <li>• Estilo de comunicação</li>
                      <li>• Inteligência emocional</li>
                      <li>• Interesses e hobbies</li>
                      <li>• Objetivos de vida e família</li>
                      <li>• Compatibilidade física e química</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="w-10 h-10 text-[#4A7C4E]" />
                      <h3 className="text-xl font-bold">Desenvolvido por Especialistas</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Criado pelo Dr. Neil Clark Warren, psicólogo clínico com 35+ anos 
                      de experiência em terapia de casais.
                    </p>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm italic">
                        "O match perfeito não é sobre encontrar alguém idêntico, mas alguém 
                        cujas diferenças complementem as suas."
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">- Dr. Neil Clark Warren, Fundador</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Perfil do Público */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Perfil do Público</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-[#4A7C4E]" />
                    Objetivo dos Usuários
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-[#4A7C4E]/20 text-[#4A7C4E]">85%</Badge>
                      <span>Buscam casamento</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-[#4A7C4E]/20 text-[#4A7C4E]">12%</Badge>
                      <span>Relacionamento sério de longo prazo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-[#4A7C4E]/20 text-[#4A7C4E]">3%</Badge>
                      <span>Amizade que pode evoluir</span>
                    </li>
                  </ul>
                  <p className="text-sm text-success font-semibold mt-4">
                    ✓ Público mais comprometido do mercado
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-[#4A7C4E]" />
                    Faixa Etária
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">25 a 34 anos</span>
                        <span className="text-sm text-muted-foreground">28%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-[#4A7C4E] h-2 rounded-full" style={{width: '28%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">35 a 44 anos</span>
                        <span className="text-sm text-muted-foreground">32%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-[#4A7C4E] h-2 rounded-full" style={{width: '32%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">45 a 54 anos</span>
                        <span className="text-sm text-muted-foreground">25%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-[#4A7C4E] h-2 rounded-full" style={{width: '25%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">55+ anos</span>
                        <span className="text-sm text-muted-foreground">15%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-[#4A7C4E] h-2 rounded-full" style={{width: '15%'}}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Público mais maduro e focado em compromisso
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
                        <span className="text-sm font-medium">Mulheres</span>
                        <span className="text-sm text-muted-foreground">52%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-[#4A7C4E] h-2 rounded-full" style={{width: '52%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Homens</span>
                        <span className="text-sm text-muted-foreground">48%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-[#4A7C4E] h-2 rounded-full" style={{width: '48%'}}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-success font-semibold mt-4">
                    ✓ O melhor equilíbrio de gênero entre todos os apps de namoro
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-6 h-6 text-[#4A7C4E]" />
                    Tempo até o Match
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    O eHarmony prioriza qualidade sobre quantidade. Em média:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-[#4A7C4E]/20 text-[#4A7C4E]">3-5</Badge>
                      <span>Matches de alta compatibilidade por semana</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-[#4A7C4E]/20 text-[#4A7C4E]">2 meses</Badge>
                      <span>Tempo médio para encontrar um relacionamento</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recursos Principais */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Recursos Exclusivos</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-[#4A7C4E]/20 hover:border-[#4A7C4E]/40 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-6 h-6 text-[#4A7C4E]" />
                    Questionário de Compatibilidade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Questionário detalhado que leva cerca de 30 minutos para completar. 
                    Analisa 32 dimensões da personalidade para encontrar matches altamente compatíveis.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#4A7C4E]/20 hover:border-[#4A7C4E]/40 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HeartHandshake className="w-6 h-6 text-[#4A7C4E]" />
                    Guided Communication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sistema exclusivo de comunicação guiada que ajuda a conhecer seu match 
                    de forma estruturada, aumentando as chances de conexão real.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#4A7C4E]/20 hover:border-[#4A7C4E]/40 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 text-[#4A7C4E]" />
                    Video Date
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Recurso de videochamada integrado para conhecer seu match antes do 
                    primeiro encontro presencial, economizando tempo e aumentando segurança.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#4A7C4E]/20 hover:border-[#4A7C4E]/40 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-[#4A7C4E]" />
                    Verificação de Identidade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sistema robusto de verificação que garante que você está conversando 
                    com pessoas reais e comprometidas com relacionamentos sérios.
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
                      <span>Algoritmo científico de compatibilidade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Equilíbrio quase perfeito de gênero (52/48)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Público 100% focado em relacionamentos sérios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Mais de 2 milhões de casamentos realizados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Comunicação guiada para melhores conexões</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Perfis detalhados e verificados</span>
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
                      <span>Questionário inicial longo (30+ minutos)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>Plano premium mais caro que concorrentes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>Menos usuários que apps de swipe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>Processo mais lento para encontrar matches</span>
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
              <Card className="border-[#4A7C4E]/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Quem busca casamento</h3>
                      <p className="text-sm text-muted-foreground">
                        Se seu objetivo é encontrar um parceiro para a vida toda, 
                        o eHarmony é a escolha certa
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#4A7C4E]/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Profissionais de 30-50 anos</h3>
                      <p className="text-sm text-muted-foreground">
                        O público principal é de pessoas maduras, estabelecidas e 
                        prontas para um compromisso sério
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#4A7C4E]/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Quem valoriza compatibilidade</h3>
                      <p className="text-sm text-muted-foreground">
                        Perfeito para quem prefere qualidade sobre quantidade e 
                        acredita em compatibilidade científica
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#4A7C4E]/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Quem está disposto a investir</h3>
                      <p className="text-sm text-muted-foreground">
                        O eHarmony exige investimento de tempo e dinheiro, mas 
                        entrega resultados comprovados
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#4A7C4E] via-[#5A8C5E] to-[#3A6C3E] text-white rounded-2xl p-12 text-center">
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Pronto para encontrar seu parceiro ideal?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Com o eHarmony, você tem acesso a um algoritmo científico que já resultou em 
              mais de 2 milhões de casamentos ao redor do mundo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://www.eharmony.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackAppClick('eHarmony', 'bottom_cta')}
              >
                <Button size="lg" className="bg-white text-[#4A7C4E] hover:bg-white/90 font-bold">
                  Começar no eHarmony
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

export default Eharmony;

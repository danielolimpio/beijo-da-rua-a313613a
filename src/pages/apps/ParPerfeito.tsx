import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Shield, Heart, CheckCircle, Globe, TrendingUp, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";
import parperfeitoLogo from "@/assets/parperfeito-logo.jpeg";
import { trackAppClick } from "@/lib/analytics";

const ParPerfeito = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
      <DynamicBreadcrumb />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#E91E9E] via-[#D81B7A] to-[#1E3A8A] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <img 
              src={parperfeitoLogo} 
              alt="ParPerfeito Logo" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg bg-white p-4"
            />
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4">
                ParPerfeito
              </h1>
              <p className="text-2xl font-semibold mb-4">
                O site de namoro brasileiro focado em relacionamentos sérios
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Badge className="bg-white text-[#D81B7A] hover:bg-white/90">
                  <Star className="w-4 h-4 mr-1 fill-[#D81B7A]" />
                  4.2
                </Badge>
                <Badge className="bg-white/20 hover:bg-white/30">
                  <Users className="w-4 h-4 mr-1" />
                  16M+ usuários no Brasil
                </Badge>
                <Badge className="bg-white/20 hover:bg-white/30">Relacionamento Sério</Badge>
              </div>
            </div>
          </div>
          <p className="text-xl text-center max-w-4xl mx-auto">
            Um dos pioneiros do namoro online no Brasil, o ParPerfeito é especializado em conectar pessoas que 
            buscam relacionamentos sérios e duradouros através de um sistema de compatibilidade avançado.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Intro */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">O que é o ParPerfeito?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Fundado em 2000, o ParPerfeito é um dos sites de namoro mais tradicionais e respeitados do Brasil. 
              Parte do grupo Meetic (Match Group), a plataforma se especializou em conectar brasileiros que buscam 
              relacionamentos sérios, casamento e construção de família.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Diferente de apps focados em encontros casuais, o ParPerfeito utiliza questionários detalhados de 
              personalidade e preferências para criar um perfil de compatibilidade que aumenta as chances de 
              encontrar um parceiro(a) realmente compatível para um relacionamento duradouro.
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
                    Presença no Brasil
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Com mais de <strong className="text-foreground">16 milhões de usuários</strong> cadastrados, 
                    é uma das maiores plataformas de namoro do Brasil.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Foco Regional</p>
                    <p className="text-sm text-muted-foreground">
                      Forte presença em todas as regiões do Brasil, especialmente no Sudeste e Sul
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
                      <Badge variant="secondary" className="bg-success/20 text-success">85%</Badge>
                      <span>Buscam relacionamento sério</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-success/20 text-success">65%</Badge>
                      <span>Pensam em casamento</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-success/20 text-success">40%</Badge>
                      <span>Querem formar família</span>
                    </li>
                  </ul>
                  <p className="text-sm text-success font-semibold mt-4">
                    ✓ Milhares de casamentos realizados através da plataforma
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
                        <span className="text-sm font-medium">35 a 44 anos</span>
                        <span className="text-sm text-muted-foreground">35%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '35%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">45 a 54 anos</span>
                        <span className="text-sm text-muted-foreground">28%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '28%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">25 a 34 anos</span>
                        <span className="text-sm text-muted-foreground">22%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '22%'}}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Público mais maduro, ideal para quem busca estabilidade e compromisso
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
                        <div className="bg-primary h-2 rounded-full" style={{width: '52%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Homens</span>
                        <span className="text-sm text-muted-foreground">48%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '48%'}}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Excelente equilíbrio de gênero, com leve maioria feminina — vantajoso para homens
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Por que se destaca */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Por que o ParPerfeito se destaca?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-6 h-6 text-[#D81B7A]" />
                    Sistema de Compatibilidade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Questionário detalhado que analisa personalidade, valores, estilo de vida e expectativas 
                    para sugerir perfis realmente compatíveis com você.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-6 h-6 text-[#D81B7A]" />
                    Foco em Relacionamento Sério
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Diferente de apps de encontros casuais, o ParPerfeito atrai pessoas que realmente buscam 
                    compromisso, namoro sério e até casamento.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-[#D81B7A]" />
                    Perfis Verificados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sistema de verificação de perfis e fotos que aumenta a segurança e autenticidade 
                    dos usuários na plataforma.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-[#D81B7A]" />
                    Experiência e Tradição
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Mais de 20 anos de experiência no mercado brasileiro, com milhares de histórias de 
                    sucesso e casamentos realizados.
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
                      <h3 className="font-semibold mb-2">Quem busca relacionamento sério</h3>
                      <p className="text-sm text-muted-foreground">
                        Se você quer encontrar alguém para namoro sério, noivado ou casamento, o ParPerfeito 
                        é uma das melhores opções
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
                      <h3 className="font-semibold mb-2">Pessoas de 35+ anos</h3>
                      <p className="text-sm text-muted-foreground">
                        O público mais maduro do ParPerfeito oferece melhores chances de encontrar alguém 
                        na mesma fase de vida
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
                        Se você prefere matches baseados em valores, personalidade e objetivos de vida similares
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
                      <h3 className="font-semibold mb-2">Homens que querem mais matches</h3>
                      <p className="text-sm text-muted-foreground">
                        Com maioria feminina na plataforma, homens têm maiores chances de encontrar matches
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#E91E9E] via-[#D81B7A] to-[#1E3A8A] text-white rounded-2xl p-12 text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 fill-white" />
            <h2 className="text-4xl font-bold mb-6">
              Pronto para encontrar seu par perfeito?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Com mais de 20 anos de experiência conectando brasileiros, o ParPerfeito é a escolha certa para 
              quem busca um relacionamento sério e duradouro.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://www.parperfeito.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackAppClick('ParPerfeito', 'bottom_cta')}
              >
                <Button size="lg" className="bg-white text-[#D81B7A] hover:bg-white/90 font-bold">
                  Cadastrar-se no ParPerfeito
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

export default ParPerfeito;
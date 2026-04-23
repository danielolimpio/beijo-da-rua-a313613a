import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import StructuredData from "@/components/StructuredData";
import SEO from "@/components/SEO";
import { getWebSiteSchema } from "@/lib/structuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Heart, TrendingUp, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import bumbleLogo from "@/assets/bumble-logo.webp";
import tinderLogo from "@/assets/tinder-logo.jpeg";
import happnLogo from "@/assets/happn-logo.jpg";
import okcupidLogo from "@/assets/okcupid-logo.jpeg";
import badooLogo from "@/assets/badoo-logo.jpeg";
import hingeLogo from "@/assets/hinge-logo.jpeg";
import pofLogo from "@/assets/pof-logo.jpeg";
import facebookDatingLogo from "@/assets/facebook-dating-logo.jpg";
import skoutLogo from "@/assets/skout-logo.png";
import meetmeLogo from "@/assets/meetme-logo.jpeg";
import eharmonyLogo from "@/assets/eharmony-logo.jpeg";
import datingLogo from "@/assets/dating-logo.jpeg";
import matchLogo from "@/assets/match-logo.jpeg";
import jaumoLogo from "@/assets/jaumo-logo.jpeg";
import umatchLogo from "@/assets/umatch-logo.png";
import ashleyMadisonLogo from "@/assets/ashley-madison-logo.jpeg";
import brazilCupidLogo from "@/assets/brazilcupid-logo.jpeg";
import innerCircleLogo from "@/assets/inner-circle-logo.jpeg";

const DatingApps = () => {
  const apps = [
    {
      name: "Tinder",
      description: "O app que revolucionou o namoro online — rápido, direto e com milhões de matches",
      rating: 4.2,
      users: "10M+",
      logo: tinderLogo,
      pros: ["Grande base de usuários", "Interface intuitiva", "Match rápido", "Inclusivo para LGBTQIA+"],
      cons: ["Muito competitivo", "Requer fotos de qualidade", "Maioria masculina (64%)"],
      category: "Popular",
      slug: "/apps/tinder"
    },
    {
      name: "Bumble",
      description: "Onde as conexões começam com respeito, segurança e intenção",
      rating: 4.5,
      users: "70M+",
      logo: bumbleLogo,
      pros: ["Mulheres fazem o primeiro movimento", "Verificação de identidade obrigatória", "Três modos: Date, BFF e Bizz"],
      cons: ["24h para responder ao match", "Maioria masculina (60%)"],
      category: "Recomendado",
      slug: "/apps/bumble"
    },
    {
      name: "Happn",
      description: "Conecta você com pessoas que cruzaram seu caminho na vida real",
      rating: 4.0,
      users: "155M+",
      logo: happnLogo,
      pros: ["Encontros baseados em cruzamentos reais", "Spots favoritos em comum", "Mais chances em cidades grandes"],
      cons: ["Poucos usuários no interior", "Requer localização ativa"],
      category: "Inovador",
      slug: "/apps/happn"
    },
    {
      name: "Badoo",
      description: "O app que conecta milhões de pessoas reais todos os dias",
      rating: 4.3,
      users: "100M+",
      logo: badooLogo,
      pros: ["Conversa sem precisar de match", "Verificação por selfie", "Modo 'Encounters' por localização", "Centro de Segurança 24/7"],
      cons: ["Mais homens que mulheres (58%)", "Anúncios na versão gratuita"],
      category: "Popular",
      slug: "/apps/badoo"
    },
    {
      name: "Hinge",
      description: "Desenvolvido para ser apagado — porque o objetivo é te tirar do app",
      rating: 4.6,
      users: "16M+",
      logo: hingeLogo,
      pros: ["Foco em relacionamentos sérios", "Prompts criativos e vídeos", "Algoritmo 'Most Compatible'", "Equilíbrio de gênero (53% homens)"],
      cons: ["Menos popular no Brasil", "Requer perfil detalhado"],
      category: "Relacionamento Sério",
      slug: "/apps/hinge"
    },
    {
      name: "OkCupid",
      description: "O app de relacionamento onde a compatibilidade começa com perguntas inteligentes",
      rating: 4.1,
      users: "91M+",
      logo: okcupidLogo,
      pros: ["Algoritmo de compatibilidade porcentual", "22 opções de gênero", "Perfis ricos em texto", "Gratuito com recursos avançados"],
      cons: ["Menos popular no Brasil", "Requer tempo para preencher perfil"],
      category: "Compatibilidade",
      slug: "/apps/okcupid"
    },
    {
      name: "POF (Plenty of Fish)",
      description: "O app de namoro gratuito mais popular do mundo com recursos completos sem pagar",
      rating: 4.0,
      users: "150M+",
      logo: pofLogo,
      pros: ["Mensagens ilimitadas grátis", "Teste de compatibilidade", "Perfis detalhados", "Público mais maduro"],
      cons: ["Interface menos moderna", "Menos popular no Brasil"],
      category: "Gratuito",
      slug: "/apps/pof"
    },
    {
      name: "Facebook Dating",
      description: "Encontros baseados em interesses e conexões reais do seu Facebook",
      rating: 4.1,
      users: "Integrado ao FB",
      logo: facebookDatingLogo,
      pros: ["100% gratuito", "Ótimo para o interior", "Interesses em comum", "Secret Crush"],
      cons: ["Requer conta no Facebook", "Menos usuários jovens"],
      category: "Interior",
      slug: "/apps/facebook-dating"
    },
    {
      name: "Skout",
      description: "Conecte-se com pessoas do mundo inteiro e faça novas amizades",
      rating: 4.1,
      users: "50M+",
      logo: skoutLogo,
      pros: ["Conexões internacionais", "Lives e transmissões", "Shake to Chat", "180+ países"],
      cons: ["Mais focado em amizade", "Maioria masculina (58%)"],
      category: "Global",
      slug: "/apps/skout"
    },
    {
      name: "MeetMe",
      description: "Conheça novas pessoas através de lives, jogos e chat interativo",
      rating: 4.2,
      users: "100M+",
      logo: meetmeLogo,
      pros: ["Lives e entretenimento", "Jogos sociais", "Chat gratuito", "Ambiente descontraído"],
      cons: ["Muitos buscam só amizade", "Anúncios na versão gratuita"],
      category: "Social",
      slug: "/apps/meetme"
    },
    {
      name: "eHarmony",
      description: "O site de relacionamentos sérios #1 do mundo com algoritmo científico",
      rating: 4.4,
      users: "66M+",
      logo: eharmonyLogo,
      pros: ["Algoritmo de compatibilidade", "Equilíbrio de gênero (52/48)", "Foco em casamento", "2M+ casamentos"],
      cons: ["Questionário longo", "Plano premium mais caro"],
      category: "Relacionamento Sério",
      slug: "/apps/eharmony"
    },
    {
      name: "Dating.com",
      description: "Conheça pessoas do mundo inteiro com tradução automática em 32 idiomas",
      rating: 4.3,
      users: "40M+",
      logo: datingLogo,
      pros: ["Tradução em 32 idiomas", "200+ países", "Videochamadas HD", "Presentes reais"],
      cons: ["Sistema de créditos", "Distância pode ser desafio"],
      category: "Internacional",
      slug: "/apps/dating"
    },
    {
      name: "Match",
      description: "Plataforma tradicional para quem busca relacionamento sério, maturidade e objetivos alinhados",
      rating: 4.4,
      users: "Adultos 30+",
      logo: matchLogo,
      pros: ["Foco claro em relacionamento sério", "Filtros por intenção amorosa", "Recurso Core Values", "Experiências como 72 Hours"],
      cons: ["Menor popularidade no Brasil", "Exige perfil mais completo", "Menos casual para matches rápidos"],
      category: "Compromisso",
      slug: "/apps/match"
    },
    {
      name: "Jaumo",
      description: "App de comunidades e afinidades que mistura namoro, amizade e descoberta por interesses em comum",
      rating: 4.6,
      users: "90M+",
      logo: jaumoLogo,
      pros: ["Comunidades por hobby", "Perfis verificados", "Boa presença global", "Ótimo para puxar conversa natural"],
      cons: ["Pode variar por cidade", "Parte do público busca amizade", "Menos focado só em namoro sério"],
      category: "Afinidades",
      slug: "/apps/jaumo"
    },
    {
      name: "Umatch",
      description: "App brasileiro para universitários que querem conhecer pessoas da mesma fase de vida",
      rating: 4.7,
      users: "Universitários",
      logo: umatchLogo,
      pros: ["Exclusivo para estudantes", "Ambiente mais filtrado", "Contexto universitário ajuda na conversa", "Forte proposta nacional"],
      cons: ["Público bem nichado", "Fora da faculdade perde força", "Depende da base ativa na sua região"],
      category: "Universitário",
      slug: "/apps/umatch"
    },
    {
      name: "Ashley Madison",
      description: "Site de namoro discreto para adultos que priorizam privacidade, sigilo e maior controle de exposição",
      rating: 4.1,
      users: "91M+",
      logo: ashleyMadisonLogo,
      pros: ["Foco forte em privacidade", "Recursos de cobrança discreta", "Modo invisível e proteção de mídia", "Marca global muito conhecida"],
      cons: ["Nicho específico", "Não é ideal para todos os perfis", "Pode ter percepção pública polarizada"],
      category: "Discreto",
      slug: "/apps/ashley-madison"
    },
    {
      name: "BrazilCupid",
      description: "Site para conhecer solteiros brasileiros com alcance internacional e perfil mais segmentado",
      rating: 4.3,
      users: "1.5M+",
      logo: brazilCupidLogo,
      pros: ["Foco em solteiros brasileiros", "Alcance internacional", "Ligação com a rede Cupid Media", "Boa opção para namoro com mais contexto"],
      cons: ["Interface menos casual", "Parte dos recursos é premium", "Menos instantâneo que apps de swipe"],
      category: "Brasileiros",
      slug: "/apps/brazilcupid"
    },
    {
      name: "Inner Circle",
      description: "App de namoro seletivo com comunidade curada, eventos e proposta premium para solteiros exigentes",
      rating: 4.5,
      users: "Comunidade curada",
      logo: innerCircleLogo,
      pros: ["Foco em qualidade", "Ambiente mais seletivo", "Eventos e experiências offline", "Proposta premium e refinada"],
      cons: ["Base menor por região", "Entrada pode ser mais seletiva", "Não é para quem quer volume rápido"],
      category: "Premium",
      slug: "/apps/inner-circle"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Grande Comunidade",
      description: "Milhões de usuários ativos em todo Brasil"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Perfis verificados e recursos de proteção"
    },
    {
      icon: Zap,
      title: "Matches Rápidos",
      description: "Algoritmos inteligentes para conexões rápidas"
    },
    {
      icon: Heart,
      title: "Relacionamentos Reais",
      description: "Histórias de sucesso todos os dias"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Melhores Apps de Namoro no Brasil 2025 | Beijo da Rua"
        description="Compare os melhores apps de namoro do Brasil: Tinder, Bumble, Happn, Badoo, Hinge e mais. Análises completas e dicas para encontrar matches."
        canonical="https://beijodarua.com.br/apps-de-namoro"
        keywords="melhores apps namoro brasil, tinder vs bumble, apps relacionamento 2025"
      />
      <StructuredData data={getWebSiteSchema()} />
      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
      <DynamicBreadcrumb />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Melhores Apps de Namoro no Brasil
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 sm:mb-8">
            Descubra qual app de namoro é perfeito para você. Análises detalhadas, comparações e dicas para encontrar matches reais.
          </p>
          <Button size="lg" className="bg-background text-primary hover:bg-background/90 w-full sm:w-auto px-6 sm:px-8">
            Faça o Quiz e Descubra Seu App Ideal
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-3 sm:mb-4">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Apps de Namoro Avaliados</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Análise completa dos principais apps disponíveis no Brasil
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app, index) => (
              <Card key={index} className="hover:shadow-custom-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {app.logo && (
                        <img src={app.logo} alt={`${app.name} logo`} className="w-12 h-12 rounded-lg" />
                      )}
                      <CardTitle className="text-2xl">{app.name}</CardTitle>
                    </div>
                    <Badge variant="secondary">{app.category}</Badge>
                  </div>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-primary text-primary" />
                      <span className="font-bold">{app.rating}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-5 h-5" />
                      <span className="text-sm">{app.users} usuários</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-success">Pontos Positivos:</h4>
                    <ul className="space-y-1">
                      {app.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-success mt-1">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-destructive">Pontos Negativos:</h4>
                    <ul className="space-y-1">
                      {app.cons.map((con, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-destructive mt-1">✗</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {app.slug ? (
                    <Link to={app.slug}>
                      <Button className="w-full" variant="outline">
                        Ver Análise Completa
                      </Button>
                    </Link>
                  ) : (
                    <Button className="w-full" variant="outline">
                      Ver Análise Completa
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Pronto Para Encontrar Seu Match Perfeito?
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8">
            Faça nosso quiz personalizado e descubra qual app é ideal para seu perfil e objetivos.
          </p>
          <Button size="lg" className="bg-background text-primary hover:bg-background/90 w-full sm:w-auto px-6 sm:px-8">
            Começar Quiz Agora
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DatingApps;

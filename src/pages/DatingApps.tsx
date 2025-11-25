import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      name: "Inner Circle",
      description: "App exclusivo para profissionais",
      rating: 4.6,
      users: "500K+",
      pros: ["Perfis verificados", "Eventos exclusivos", "Usuários qualificados"],
      cons: ["Processo de aprovação", "Menos usuários"],
      category: "Premium"
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
      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Melhores Apps de Namoro no Brasil
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Descubra qual app de namoro é perfeito para você. Análises detalhadas, comparações e dicas para encontrar matches reais.
          </p>
          <Button size="lg" className="bg-background text-primary hover:bg-background/90">
            Faça o Quiz e Descubra Seu App Ideal
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Apps de Namoro Avaliados</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            Pronto Para Encontrar Seu Match Perfeito?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Faça nosso quiz personalizado e descubra qual app é ideal para seu perfil e objetivos.
          </p>
          <Button size="lg" className="bg-background text-primary hover:bg-background/90">
            Começar Quiz Agora
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DatingApps;

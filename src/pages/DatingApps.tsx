import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Heart, TrendingUp, Shield, Zap } from "lucide-react";

const DatingApps = () => {
  const apps = [
    {
      name: "Tinder",
      description: "O app mais popular do Brasil com milhões de usuários ativos",
      rating: 4.2,
      users: "10M+",
      pros: ["Grande base de usuários", "Interface intuitiva", "Match rápido"],
      cons: ["Muito competitivo", "Requer fotos de qualidade"],
      category: "Popular"
    },
    {
      name: "Bumble",
      description: "App onde as mulheres dão o primeiro passo",
      rating: 4.5,
      users: "5M+",
      pros: ["Menos spam", "Mulheres mais engajadas", "Opções de amizade e networking"],
      cons: ["24h para responder", "Menos usuários que Tinder"],
      category: "Recomendado"
    },
    {
      name: "Happn",
      description: "Conecta você com pessoas que cruzaram seu caminho",
      rating: 4.0,
      users: "2M+",
      pros: ["Encontros baseados em localização real", "Mais chances em cidades grandes"],
      cons: ["Poucos usuários no interior", "Requer localização ativa"],
      category: "Inovador"
    },
    {
      name: "Par Perfeito",
      description: "Focado em relacionamentos sérios e duradouros",
      rating: 4.3,
      users: "3M+",
      pros: ["Usuários buscam relacionamento sério", "Perfis detalhados", "Brasileiro"],
      cons: ["Versão gratuita limitada", "Menos jovens"],
      category: "Relacionamento Sério"
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
      description: "Match baseado em compatibilidade de valores e interesses",
      rating: 4.1,
      users: "1M+",
      pros: ["Algoritmo de compatibilidade", "Gratuito com bons recursos", "Diverso"],
      cons: ["Interface carregada", "Menos popular no Brasil"],
      category: "Compatibilidade"
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
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-2xl">{app.name}</CardTitle>
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

                  <Button className="w-full" variant="outline">
                    Ver Análise Completa
                  </Button>
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

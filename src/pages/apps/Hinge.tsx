import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, Heart, MessageCircle, Users, Shield, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import hingeLogo from "@/assets/hinge-logo.jpeg";

const Hinge = () => {
  const pros = [
    "Foco em relacionamentos sérios",
    "Prompts criativos e vídeos",
    "Algoritmo 'Most Compatible'",
    "Equilíbrio de gênero (53% homens)",
    "Perfis ricos em texto e personalidade",
    "Estatísticas reais de sucesso"
  ];

  const cons = [
    "Menos popular no Brasil",
    "Requer tempo para preencher perfil detalhado",
    "Foco em mercados anglófonos",
    "Menos usuários comparado aos grandes apps"
  ];

  const features = [
    {
      icon: Heart,
      title: "Most Compatible",
      description: "Algoritmo que sugere um match diário com base em comportamentos e preferências reais"
    },
    {
      icon: MessageCircle,
      title: "Prompts Criativos",
      description: "Responda perguntas como 'Estou à procura de...' ou 'Duas verdades e uma mentira' para mostrar personalidade"
    },
    {
      icon: Users,
      title: "Vídeos e Reações",
      description: "Grave vídeos curtos ou reaja com emojis a respostas específicas — sem depender só de fotos"
    },
    {
      icon: Shield,
      title: "Relacionamentos Reais",
      description: "Desencoraja interações casuais e promove conexões duradouras e autênticas"
    }
  ];

  const stats = [
    { label: "Visitas Mensais", value: "12-16M" },
    { label: "Principais Países", value: "EUA, UK, Brasil" },
    { label: "Faixa Etária", value: "25-34 anos (40%)" },
    { label: "Equilíbrio", value: "53% homens / 47% mulheres" }
  ];

  return (
    <>
      <Helmet>
        <title>Hinge - App Feito Para Ser Deletado | Relacionamentos Sérios</title>
        <meta name="description" content="Conheça o Hinge, o app de namoro desenvolvido para ser apagado. Com prompts criativos, vídeos e algoritmo Most Compatible, encontre relacionamentos reais que vão além do primeiro match." />
        <meta name="keywords" content="hinge, hinge brasil, app namoro sério, relacionamento real, most compatible, prompts criativos, app deletar" />
        <link rel="canonical" href="https://www.parperfeito.love/apps/hinge" />
        
        <meta property="og:title" content="Hinge - App Feito Para Ser Deletado | Relacionamentos Sérios" />
        <meta property="og:description" content="O app que te ajuda a encontrar alguém com quem você queira passar tempo de verdade — não só trocar mensagens infinitas." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.parperfeito.love/apps/hinge" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hinge - App Feito Para Ser Deletado" />
        <meta name="twitter:description" content="Relacionamentos reais começam com conversas autênticas. Descubra o Hinge." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-[140px]">{/* Spacer for fixed header */}</div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 mb-6">
              <img src={hingeLogo} alt="Hinge logo" className="w-20 h-20 rounded-2xl" />
              <h1 className="text-5xl font-bold">Hinge</h1>
            </div>
            <p className="text-2xl text-center max-w-3xl mx-auto mb-8">
              Desenvolvido para ser apagado — porque o objetivo é te tirar do app
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-background text-primary hover:bg-background/90">
                Baixar App
              </Button>
              <Link to="/quiz">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  Fazer Quiz
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">O App que Quer Te Tirar do App</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  O Hinge nasceu com uma missão diferente: criar relacionamentos reais que vão além do primeiro match. Seu slogan, "feito para ser deletado", resume perfeitamente sua filosofia: o app existe para te ajudar a encontrar alguém com quem você queira passar tempo de verdade — não só trocar mensagens infinitas.
                </p>
                <p>
                  Lançado em 2012 e relançado com nova identidade em 2019, o Hinge se afasta dos "swipes" tradicionais e prioriza perfis ricos, interações autênticas e compatibilidade emocional. Em vez de apenas curtir fotos, você interage com respostas específicas, prompts criativos e vídeos curtos, o que estimula conversas mais profundas desde o início.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Dados do Hinge (2024-2025)</h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Por que o Hinge se Destaca?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Pontos Positivos e Negativos</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl mb-4 text-success flex items-center gap-2">
                    <Check className="w-6 h-6" />
                    Pontos Positivos
                  </h3>
                  <ul className="space-y-3">
                    {pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl mb-4 text-destructive flex items-center gap-2">
                    <X className="w-6 h-6" />
                    Pontos Negativos
                  </h3>
                  <ul className="space-y-3">
                    {cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Para Quem é Ideal?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <Star className="w-8 h-8 text-primary mb-3" />
                    <p className="text-muted-foreground">
                      Quem está cansado de apps superficiais e quer conversas com profundidade desde o primeiro "oi"
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Heart className="w-8 h-8 text-primary mb-3" />
                    <p className="text-muted-foreground">
                      Solteiros em busca de relacionamento sério, não apenas encontros passageiros
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Users className="w-8 h-8 text-primary mb-3" />
                    <p className="text-muted-foreground">
                      Profissionais entre 25 e 40 anos que valorizam tempo, intenção e clareza sobre o que querem
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <MessageCircle className="w-8 h-8 text-primary mb-3" />
                    <p className="text-muted-foreground">
                      Pessoas que se expressam melhor por texto ou vídeo do que apenas com fotos
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Pronto Para Encontrar Algo Real?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Com frases como "Isso me fez rir" e "Quero saber mais sobre isso", o Hinge transforma o namoro online em uma experiência mais humana, inteligente e conectada.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://hinge.co/pt-br" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-background text-primary hover:bg-background/90">
                  Baixar Hinge
                </Button>
              </a>
              <Link to="/apps-de-namoro">
                <Button size="lg" className="bg-background/20 text-primary-foreground hover:bg-background/30 border-0">
                  Comparar Apps
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Hinge;

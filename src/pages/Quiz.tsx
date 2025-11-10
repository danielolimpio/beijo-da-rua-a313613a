import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Clock, Target, Heart, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Quiz = () => {
  const quizzes = [
    {
      id: 1,
      title: "Qual Seu Objetivo Ideal para Usar App de Namoro?",
      description: "Descubra se você está buscando um relacionamento sério, casual ou apenas fazer novas amizades",
      url: "/qual-objetivo-ideal-para-usar-app-de-namoro-homem-brasil",
      icon: Target,
      duration: "2 min",
      questions: 5
    },
    {
      id: 2,
      title: "Como Homens Tímidos Podem Usar Apps com Sucesso",
      description: "Estratégias específicas para homens introvertidos conquistarem matches de qualidade",
      url: "/como-homens-timidos-podem-usar-apps-de-namoro-com-sucesso",
      icon: Heart,
      duration: "3 min",
      questions: 6
    },
    {
      id: 3,
      title: "Quantos Encontros por Mês é Ideal para Você?",
      description: "Descubra o ritmo perfeito de encontros baseado no seu estilo de vida e objetivos",
      url: "/quantos-encontros-por-mes-e-ideal-para-homens-em-apps-namoro",
      icon: Clock,
      duration: "2 min",
      questions: 5
    },
    {
      id: 4,
      title: "Melhores Apps para Homens Após os 35 Anos",
      description: "Encontre os apps mais adequados para sua faixa etária e objetivos de relacionamento",
      url: "/melhores-apps-de-namoro-para-homens-apos-os-35-anos-brasil",
      icon: Users,
      duration: "3 min",
      questions: 7
    },
    {
      id: 5,
      title: "Apps de Namoro no Interior do Brasil Vale a Pena?",
      description: "Descubra quais apps funcionam melhor fora das grandes capitais",
      url: "/apps-de-namoro-para-homens-no-interior-do-brasil-vale-a-pena",
      icon: MapPin,
      duration: "2 min",
      questions: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Quiz: Descubra o App Perfeito Para Você
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Responda nossos quizzes personalizados e encontre o app de namoro ideal para seu perfil, objetivos e estilo de vida.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <p className="text-muted-foreground">Quizzes Realizados</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
              <p className="text-muted-foreground">Avaliação Média</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">92%</div>
              <p className="text-muted-foreground">Taxa de Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quizzes Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Escolha Seu Quiz</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada quiz foi desenvolvido para ajudá-lo a tomar decisões mais inteligentes sobre apps de namoro
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {quizzes.map((quiz) => {
              const IconComponent = quiz.icon;
              return (
                <Card key={quiz.id} className="hover:shadow-custom-lg transition-all hover:scale-105">
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{quiz.title}</CardTitle>
                        <CardDescription>{quiz.description}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{quiz.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Target className="w-4 h-4" />
                        <span>{quiz.questions} questões</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Link to={quiz.url}>
                      <Button className="w-full group">
                        Começar Quiz
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por Que Fazer Nossos Quizzes?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Resultados Personalizados</h3>
              <p className="text-muted-foreground text-sm">
                Recomendações específicas baseadas nas suas respostas
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Rápido e Fácil</h3>
              <p className="text-muted-foreground text-sm">
                Cada quiz leva apenas alguns minutos para completar
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Baseado em Dados Reais</h3>
              <p className="text-muted-foreground text-sm">
                Desenvolvido com insights de milhares de usuários brasileiros
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto Para Encontrar Seu App Ideal?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Comece agora e descubra qual app de namoro é perfeito para você em menos de 3 minutos.
          </p>
          <Link to="/qual-objetivo-ideal-para-usar-app-de-namoro-homem-brasil">
            <Button size="lg" className="bg-background text-primary hover:bg-background/90">
              Começar Primeiro Quiz
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quiz;

import QuizLayout from "@/components/QuizLayout";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, TrendingUp, CheckCircle2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import tinderLogo from "@/assets/tinder-logo.jpeg";
import bumbleLogo from "@/assets/bumble-logo.jpeg";
import happnLogo from "@/assets/happn-logo.jpg";
import { 
  UnderPageTitleAd, 
  MidContentAd, 
  InContent5Ad, 
  BottomOfPageAd 
} from "@/components/EzoicAd";

const ResultadoAppIdeal = () => {
  return (
    <>
      <Helmet>
        <title>Seu App de Namoro Ideal - Resultado Personalizado | Beijo da Rua</title>
        <meta name="description" content="Baseado nas suas respostas, descubra qual é o melhor app de namoro para você e receba dicas personalizadas para maximizar seus resultados." />
      </Helmet>
      
      <QuizLayout 
        title="🎉 Seu App Ideal Descoberto!"
        description="Baseado nas suas respostas, aqui está sua recomendação personalizada"
        progress={100}
      >
        {/* Under Page Title Ad */}
        <UnderPageTitleAd />
        
        {/* Congratulations Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Star className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Parabéns por completar o quiz!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Analisamos suas preferências e estilo de vida para recomendar a plataforma 
            que oferece as melhores chances de sucesso para o seu perfil.
          </p>
        </div>

        {/* Main Recommendation Card */}
        <Card className="p-8 mb-8 border-2 border-primary bg-gradient-to-br from-primary/5 to-transparent">
          <div className="flex items-start gap-6 mb-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Recomendação Principal: Tinder
              </h3>
              <p className="text-muted-foreground mb-4">
                O app mais popular do Brasil, perfeito para seu perfil e objetivos
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground/80">
                <strong>Maior base de usuários:</strong> Mais de 10 milhões de brasileiros ativos, 
                maximizando suas chances de encontrar alguém compatível
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground/80">
                <strong>Sistema de swipe eficiente:</strong> Interface simples e rápida, 
                ideal para quem tem rotina ocupada
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground/80">
                <strong>Versatilidade:</strong> Funciona bem tanto para quem busca algo casual 
                quanto para relacionamentos sérios
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground/80">
                <strong>Recursos premium acessíveis:</strong> Tinder Plus e Gold oferecem 
                vantagens significativas por preço justo
              </p>
            </div>
          </div>

          <div className="bg-background border border-border rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Por que o Tinder é ideal para você:
            </h4>
            <p className="text-foreground/80 mb-4">
              Baseado no seu perfil e objetivos, o Tinder oferece o melhor equilíbrio entre 
              quantidade de pessoas, facilidade de uso e chances reais de matches. É o app 
              mais democrático - funciona para todos os tipos de homens, em todas as idades 
              e cidades do Brasil.
            </p>
            <p className="text-foreground/80">
              Com as estratégias certas (que você aprendeu neste quiz), você pode esperar 
              resultados significativos nas primeiras 2-3 semanas de uso consistente.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1 gap-2" asChild>
              <Link to="/apps/tinder">
                Ver Guia Completo do Tinder
                <ExternalLink className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="flex-1" asChild>
              <a href="https://tinder.com" target="_blank" rel="noopener noreferrer">
                Acessar Tinder
              </a>
            </Button>
          </div>
        </Card>

        {/* Mid Content Ad */}
        <MidContentAd />

        {/* Alternative Options */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Opções alternativas para diversificar:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all">
              <h4 className="text-xl font-semibold text-foreground mb-3">Bumble</h4>
              <p className="text-foreground/80 mb-4">
                Ótima segunda opção se você quer mulheres que tomam iniciativa. 
                Perfeito para complementar o Tinder sem sobrecarregar.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/apps/bumble">Saiba Mais</Link>
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all">
              <h4 className="text-xl font-semibold text-foreground mb-3">Happn</h4>
              <p className="text-foreground/80 mb-4">
                Use se você mora em cidade grande e quer matches com pessoas 
                que cruzaram seu caminho fisicamente.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/apps/happn">Saiba Mais</Link>
              </Button>
            </Card>
          </div>
        </div>

        {/* InContent 5 Ad */}
        <InContent5Ad />

        {/* Next Steps Section */}
        <Card className="p-8 bg-accent/30 border-2 border-accent">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            🚀 Próximos passos para maximizar resultados:
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                1
              </span>
              <div>
                <p className="font-semibold text-foreground">Crie ou otimize seu perfil</p>
                <p className="text-sm text-muted-foreground">
                  Use as dicas sobre fotos e bio que você aprendeu neste quiz
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                2
              </span>
              <div>
                <p className="font-semibold text-foreground">Use nos horários certos</p>
                <p className="text-sm text-muted-foreground">
                  20h-22h em dias de semana para máxima visibilidade
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                3
              </span>
              <div>
                <p className="font-semibold text-foreground">Seja consistente</p>
                <p className="text-sm text-muted-foreground">
                  30-40 minutos por dia são mais efetivos que 3 horas no fim de semana
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                4
              </span>
              <div>
                <p className="font-semibold text-foreground">Personalize suas abordagens</p>
                <p className="text-sm text-muted-foreground">
                  Leia perfis e envie mensagens específicas - faz toda diferença
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-foreground/80 text-center">
              <strong>Lembre-se:</strong> Sucesso em apps de namoro não é sorte - é estratégia. 
              Você tem as ferramentas, agora é hora de colocar em prática! 💪
            </p>
          </div>
        </Card>

        {/* Bottom of Page Ad */}
        <div className="mt-8">
          <BottomOfPageAd />
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 space-y-4">
          <h3 className="text-xl font-semibold text-foreground">
            Quer mais dicas para bombar nos apps?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/blog/">
                Ver Artigos do Blog
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/dicas/">
                Conferir Todas as Dicas
              </Link>
            </Button>
          </div>
        </div>
      </QuizLayout>
    </>
  );
};

export default ResultadoAppIdeal;

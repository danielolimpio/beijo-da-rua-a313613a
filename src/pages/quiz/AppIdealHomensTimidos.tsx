import { Helmet } from "react-helmet";
import QuizLayout from "@/components/QuizLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, MessageCircle, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import bumbleLogo from "@/assets/bumble-logo.jpeg";
import hingeLogo from "@/assets/hinge-logo.jpeg";
import okcupidLogo from "@/assets/okcupid-logo.jpeg";

const AppIdealHomensTimidos = () => {
  return (
    <>
      <Helmet>
        <title>App Ideal Para Homens Tímidos - Resultado do Quiz</title>
        <meta name="description" content="Descubra qual aplicativo de namoro é perfeito para o seu perfil de homem tímido. Recomendação personalizada baseada em suas respostas." />
      </Helmet>
      
      <QuizLayout 
        title="Seu Aplicativo Ideal Está Aqui!"
        description="Resultado personalizado baseado nas suas respostas"
        progress={100}
      >
        <div className="space-y-8">
          {/* Success Message */}
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Parabéns! Encontramos o App Perfeito Para Você
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Baseado no seu perfil de homem tímido, analisamos seus hábitos e preferências 
              para recomendar o aplicativo com maior chance de sucesso para você.
            </p>
          </div>

          {/* Main Recommendation */}
          <Card className="p-8 border-2 border-primary shadow-custom-lg">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <img src={bumbleLogo} alt="Logo Bumble" width={96} height={96} className="w-24 h-24 rounded-2xl object-cover shadow-lg border border-border bg-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-3xl font-bold text-foreground">Bumble</h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                    Recomendado
                  </span>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  O Bumble é perfeito para homens tímidos porque remove a pressão da primeira mensagem. 
                  No Bumble, as mulheres dão o primeiro passo, permitindo que você responda sem a 
                  ansiedade de iniciar a conversa.
                </p>
                
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Por que Bumble é ideal para você:
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Mulheres dão o primeiro passo:</strong> Você só precisa responder, eliminando a ansiedade de iniciar conversas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Ambiente respeitoso:</strong> Comunidade focada em conexões genuínas, não apenas físicas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Perfis detalhados:</strong> Você pode mostrar sua personalidade através de prompts interessantes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Menos pressão:</strong> 24 horas para responder dá tempo para pensar na resposta perfeita</span>
                    </li>
                  </ul>
                </div>

                <Link to="/apps/bumble">
                  <Button size="lg" className="w-full sm:w-auto group">
                    Saiba Mais Sobre o Bumble
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Alternative Options */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Alternativas Também Recomendadas
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-custom-lg transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <img src={hingeLogo} alt="Logo Hinge" width={64} height={64} className="w-16 h-16 rounded-xl object-cover border border-border bg-white" />
                  <h4 className="text-xl font-bold text-foreground">Hinge</h4>
                </div>
                <p className="text-muted-foreground mb-4">
                  Focado em relacionamentos sérios, permite comentar em fotos específicas para iniciar 
                  conversas de forma mais natural e menos intimidante.
                </p>
                <Link to="/apps/hinge">
                  <Button variant="outline" className="w-full">
                    Ver Detalhes
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-custom-lg transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <img src={okcupidLogo} alt="Logo OkCupid" width={64} height={64} className="w-16 h-16 rounded-xl object-cover border border-border bg-white" />
                  <h4 className="text-xl font-bold text-foreground">OkCupid</h4>
                </div>
                <p className="text-muted-foreground mb-4">
                  Sistema de compatibilidade baseado em perguntas profundas ajuda a encontrar pessoas 
                  realmente compatíveis, facilitando conversas significativas.
                </p>
                <Link to="/apps/okcupid">
                  <Button variant="outline" className="w-full">
                    Ver Detalhes
                  </Button>
                </Link>
              </Card>
            </div>
          </div>

          {/* Next Steps */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Próximos Passos Para Seu Sucesso
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Crie um Perfil Autêntico</h4>
                  <p>Use fotos naturais e escreva uma bio que mostre sua verdadeira personalidade. Autenticidade atrai pessoas certas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Responda com Calma e Atenção</h4>
                  <p>No Bumble, você tem 24h para responder. Use esse tempo para dar respostas pensadas e interessantes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Seja Consistente Sem Pressão</h4>
                  <p>Use o app 2-3x por semana, nos horários que identificamos no quiz. Qualidade &gt; Quantidade.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Use Seus Pontos Fortes</h4>
                  <p>Como homem tímido, você é observador e genuíno. Mostre isso nas suas respostas e conversas.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </QuizLayout>
    </>
  );
};

export default AppIdealHomensTimidos;

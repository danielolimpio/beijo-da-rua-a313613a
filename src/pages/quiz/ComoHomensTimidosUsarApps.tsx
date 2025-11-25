import { Helmet } from "react-helmet";
import QuizLayout from "@/components/QuizLayout";
import QuizOption from "@/components/QuizOption";
import { MessageCircle, Video, Coffee, Calendar } from "lucide-react";

const ComoHomensTimidosUsarApps = () => {
  return (
    <>
      <Helmet>
        <title>Como Homens Tímidos Podem Usar Apps de Namoro com Sucesso | Guia Completo</title>
        <meta name="description" content="Descubra estratégias comprovadas para homens tímidos terem sucesso em aplicativos de namoro. Supere a timidez e conquiste matches de qualidade." />
      </Helmet>
      
      <QuizLayout 
        title="Como Homens Tímidos Podem Usar Apps de Namoro?"
        description="Descubra a estratégia ideal para o seu perfil"
        progress={20}
      >
        <article className="prose prose-lg max-w-none mb-12">
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              A Timidez Não É Uma Desvantagem nos Apps
            </h2>
            <p className="text-muted-foreground mb-4">
              Ao contrário do que muitos pensam, homens tímidos podem ter grande sucesso em aplicativos 
              de namoro. A chave está em usar estratégias que valorizam suas qualidades naturais: autenticidade, 
              capacidade de ouvir e conexões genuínas.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
              <p className="text-sm font-semibold text-foreground mb-2">📊 Dados Importantes:</p>
              <ul className="text-sm text-muted-foreground space-y-1 mb-0">
                <li>• 68% das mulheres preferem homens que demonstram vulnerabilidade autêntica</li>
                <li>• Perfis "genuínos" têm 3x mais conversas significativas que perfis "elaborados"</li>
                <li>• 74% das conexões duradouras começam com conversas profundas, não superficiais</li>
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Por Que a Timidez Pode Ser Sua Vantagem
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">1. Seleção Natural de Qualidade:</strong> Pessoas tímidas 
                naturalmente filtram conexões superficiais, focando apenas em matches genuínos.
              </p>
              <p>
                <strong className="text-foreground">2. Conversas Mais Profundas:</strong> A tendência de pensar 
                antes de falar resulta em mensagens mais significativas e interessantes.
              </p>
              <p>
                <strong className="text-foreground">3. Autenticidade Atraente:</strong> A vulnerabilidade 
                controlada é extremamente atraente em um mundo de máscaras digitais.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              ⚠️ Erros Que Homens Tímidos Devem Evitar
            </h3>
            <ul className="text-muted-foreground space-y-3">
              <li className="flex items-start">
                <span className="text-destructive mr-2">✗</span>
                <span>Tentar parecer extrovertido - a autenticidade sempre vence</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-2">✗</span>
                <span>Demorar dias para responder por insegurança</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-2">✗</span>
                <span>Usar frases prontas ou copiar abordagens de outros</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-2">✗</span>
                <span>Desistir após poucos matches - consistência é fundamental</span>
              </li>
            </ul>
          </div>
        </article>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Qual sua maior dificuldade nos apps de namoro?
          </h2>
          
          <div className="grid gap-4">
            <QuizOption
              icon={<MessageCircle size={32} />}
              title="Iniciar Conversas"
              description="Não sei como começar a falar ou manter o papo interessante"
              href="/melhor-horario-usar-apps-namoro"
            />
            
            <QuizOption
              icon={<Video size={32} />}
              title="Propor Encontros Presenciais"
              description="Tenho medo de sugerir um encontro e ser rejeitado"
              href="/melhor-horario-usar-apps-namoro"
            />
            
            <QuizOption
              icon={<Coffee size={32} />}
              title="Criar um Perfil Atraente"
              description="Não sei quais fotos usar ou o que escrever sobre mim"
              href="/melhor-horario-usar-apps-namoro"
            />
            
            <QuizOption
              icon={<Calendar size={32} />}
              title="Lidar com Rejeição"
              description="Fico desanimado quando não recebo respostas"
              href="/melhor-horario-usar-apps-namoro"
            />
          </div>
        </div>
      </QuizLayout>
    </>
  );
};

export default ComoHomensTimidosUsarApps;

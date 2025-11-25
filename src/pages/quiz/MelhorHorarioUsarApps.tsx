import { Helmet } from "react-helmet";
import QuizLayout from "@/components/QuizLayout";
import QuizOption from "@/components/QuizOption";
import { Sunrise, Sun, Sunset, Moon } from "lucide-react";

const MelhorHorarioUsarApps = () => {
  return (
    <>
      <Helmet>
        <title>Melhor Horário Para Usar Apps de Namoro | Maximize Seus Matches</title>
        <meta name="description" content="Descubra os horários com maior taxa de resposta nos apps de namoro. Dados reais sobre quando as mulheres estão mais ativas e receptivas." />
      </Helmet>
      
      <QuizLayout 
        title="Quando Você Prefere Usar Apps de Namoro?"
        description="O timing certo aumenta suas chances em até 300%"
        progress={40}
      >
        <article className="prose prose-lg max-w-none mb-12">
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              O Timing É Crucial Para Seu Sucesso
            </h2>
            <p className="text-muted-foreground mb-4">
              Estudos revelam que o horário em que você usa apps de namoro pode ser tão importante quanto 
              o conteúdo do seu perfil. Entender os padrões de comportamento das usuárias permite maximizar 
              suas chances de matches e respostas.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
              <p className="text-sm font-semibold text-foreground mb-2">📊 Estatísticas de Horários:</p>
              <ul className="text-sm text-muted-foreground space-y-1 mb-0">
                <li>• 21h às 23h: Pico de atividade - 85% das usuárias online</li>
                <li>• Domingo à noite: 40% mais matches que outros dias</li>
                <li>• Mensagens enviadas entre 20h-22h têm 3x mais respostas</li>
                <li>• Meio-dia (12h-14h): Segundo melhor horário - pausa do trabalho</li>
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Estratégias Por Período do Dia
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Manhã (6h-9h):</strong> Ideal para dar matches em perfis 
                de pessoas que acordam cedo. Taxa de resposta moderada, mas alta qualidade de conexões.
              </p>
              <p>
                <strong className="text-foreground">Almoço (12h-14h):</strong> Momento de descontração. 
                Mulheres estão mais abertas a conversas leves e descontraídas.
              </p>
              <p>
                <strong className="text-foreground">Noite (20h-23h):</strong> Pico absoluto de atividade. 
                Máxima visibilidade, mas também maior concorrência. Use mensagens criativas.
              </p>
              <p>
                <strong className="text-foreground">Madrugada (23h-2h):</strong> Menor concorrência, 
                mas usuárias podem estar buscando apenas diversão casual.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              💡 Dica de Ouro Para Homens Tímidos
            </h3>
            <p className="text-muted-foreground">
              Use horários de menor movimento (manhã ou tarde) para praticar suas habilidades de conversa 
              sem a pressão da alta concorrência. Quando se sentir mais confiante, migre para os horários 
              de pico para maximizar resultados.
            </p>
          </div>
        </article>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Qual período do dia você mais usa apps?
          </h2>
          
          <div className="grid gap-4">
            <QuizOption
              icon={<Sunrise size={32} />}
              title="Manhã (6h - 12h)"
              description="Acordo cedo e gosto de começar o dia checando os apps"
              href="/frequencia-ideal-usar-apps"
            />
            
            <QuizOption
              icon={<Sun size={32} />}
              title="Tarde (12h - 18h)"
              description="Uso principalmente na hora do almoço ou pausas do trabalho"
              href="/frequencia-ideal-usar-apps"
            />
            
            <QuizOption
              icon={<Sunset size={32} />}
              title="Início da Noite (18h - 21h)"
              description="Prefiro após o trabalho, no momento de relaxar"
              href="/frequencia-ideal-usar-apps"
            />
            
            <QuizOption
              icon={<Moon size={32} />}
              title="Noite (21h - 2h)"
              description="Sou mais noturno, uso antes de dormir"
              href="/frequencia-ideal-usar-apps"
            />
          </div>
        </div>
      </QuizLayout>
    </>
  );
};

export default MelhorHorarioUsarApps;

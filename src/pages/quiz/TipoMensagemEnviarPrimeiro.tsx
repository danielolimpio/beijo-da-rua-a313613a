import { Helmet } from "react-helmet";
import QuizLayout from "@/components/QuizLayout";
import QuizOption from "@/components/QuizOption";
import { Lightbulb, Heart, Smile, Sparkles } from "lucide-react";

const TipoMensagemEnviarPrimeiro = () => {
  return (
    <>
      <Helmet>
        <title>Melhor Tipo de Mensagem Para Enviar Primeiro em Apps de Namoro</title>
        <meta name="description" content="Aprenda qual estilo de primeira mensagem gera mais respostas nos apps de namoro. Estratégias personalizadas para diferentes personalidades." />
      </Helmet>
      
      <QuizLayout 
        title="Que Tipo de Primeira Mensagem Você Prefere?"
        description="Sua autenticidade é seu maior diferencial"
        progress={80}
      >
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Qual estilo combina mais com você?
          </h2>
          
          <div className="grid gap-4">
            <QuizOption
              icon={<Lightbulb size={32} />}
              title="Observador e Atencioso"
              description="Gosto de notar detalhes no perfil e comentar sobre eles"
              href="/app-ideal-homens-timidos"
            />
            
            <QuizOption
              icon={<Heart size={32} />}
              title="Genuíno e Sincero"
              description="Prefiro ser direto sobre meu interesse de forma respeitosa"
              href="/app-ideal-homens-timidos"
            />
            
            <QuizOption
              icon={<Smile size={32} />}
              title="Leve e Bem-Humorado"
              description="Uso humor sutil e autêntico para quebrar o gelo"
              href="/app-ideal-homens-timidos"
            />
            
            <QuizOption
              icon={<Sparkles size={32} />}
              title="Curioso e Interessado"
              description="Faço perguntas interessantes sobre os hobbies dela"
              href="/app-ideal-homens-timidos"
            />
          </div>
        </div>

        <article className="prose prose-lg max-w-none mb-12">
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              A Primeira Mensagem Que Define Tudo
            </h2>
            <p className="text-muted-foreground mb-4">
              A primeira mensagem é sua única chance de se destacar entre dezenas de "oi, tudo bem?". 
              Dados mostram que mensagens personalizadas têm 7x mais chances de receber resposta que 
              mensagens genéricas. O segredo não é ser engraçado ou esperto, mas ser genuíno e observador.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
              <p className="text-sm font-semibold text-foreground mb-2">📊 Taxa de Resposta Por Tipo:</p>
              <ul className="text-sm text-muted-foreground space-y-1 mb-0">
                <li>• Comentário sobre foto/bio específica: 68% de resposta</li>
                <li>• Pergunta aberta interessante: 54% de resposta</li>
                <li>• Elogio genuíno e específico: 47% de resposta</li>
                <li>• "Oi, tudo bem?" ou similar: apenas 12% de resposta</li>
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Estilos de Mensagem Que Funcionam
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">O Observador:</strong> "Vi que você gosta de [hobby]. 
                Eu também! Como você começou nisso?" - Mostra atenção aos detalhes e interesses em comum.
              </p>
              <p>
                <strong className="text-foreground">O Curioso Genuíno:</strong> "Sua foto em [lugar] é 
                incrível! Qual foi a melhor parte dessa viagem?" - Demonstra interesse real na pessoa.
              </p>
              <p>
                <strong className="text-foreground">O Bem-Humorado Autêntico:</strong> "Vi que você [detalhe 
                da bio]. Eu precisava dar match só pra saber mais sobre isso!" - Leve, mas personalizado.
              </p>
              <p>
                <strong className="text-foreground">O Direto Respeitoso:</strong> "Adorei sua [característica]. 
                Parece que temos muito em comum. Como tem sido sua experiência no app?" - Honesto e aberto.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              💡 Regra de Ouro Para Homens Tímidos
            </h3>
            <p className="text-muted-foreground mb-4">
              Se você é tímido, EVITE tentar ser alguém que não é. Mulheres detectam falta de autenticidade 
              imediatamente. Use mensagens que reflitam sua personalidade real:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>• Se você é observador, comente detalhes que poucos notariam</li>
              <li>• Se você é reflexivo, faça perguntas profundas mas relevantes</li>
              <li>• Se você é tímido, seja honesto: "Normalmente sou meio tímido, mas achei seu perfil tão interessante que não pude deixar passar"</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              ⚠️ Mensagens Que Você Deve Evitar
            </h3>
            <ul className="text-muted-foreground space-y-3">
              <li className="flex items-start">
                <span className="text-destructive mr-2">✗</span>
                <span>"Oi", "Tudo bem?", "E aí?" - Genérico demais, será ignorado</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-2">✗</span>
                <span>Elogios físicos diretos na primeira mensagem - pode soar invasivo</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-2">✗</span>
                <span>Copiar e colar a mesma mensagem para todo mundo - falta autenticidade</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-2">✗</span>
                <span>Mensagens muito longas - intimidam e parecem intensas demais</span>
              </li>
            </ul>
          </div>
        </article>
      </QuizLayout>
    </>
  );
};

export default TipoMensagemEnviarPrimeiro;

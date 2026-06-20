import { Helmet } from "react-helmet";
import QuizLayout from "@/components/QuizLayout";
import QuizOption from "@/components/QuizOption";
import { Smile, FileText, Send, Heart } from "lucide-react";

const RESULT = "/seu-app-de-namoro-ideal-resultado";

const EmojisMensagensIniciativaMulher = () => {
  return (
    <>
      <Helmet>
        <title>Emojis, Mensagens Longas e Iniciativa: Sinais de Interesse Real | Beijo da Rua</title>
        <meta name="description" content="O estilo das mensagens dela revela o interesse. Veja o que emojis, tamanho das respostas e iniciativa dizem sobre a vontade real de conversar com você." />
        <link rel="canonical" href="https://beijodarua.com.br/emojis-mensagens-longas-iniciativa-mulher-interessada-apps-namoro/" />
      </Helmet>

      <QuizLayout
        title="Como é o estilo das mensagens dela?"
        description="Pergunta 5 de 5 — A forma de escrever revela o nível de envolvimento"
        progress={100}
      >
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            O que mais combina com as mensagens dela?
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <QuizOption icon={<FileText size={24} />} title="Mensagens longas e detalhadas" description="Conta histórias, dá contexto e responde com cuidado" href={RESULT} />
            <QuizOption icon={<Smile size={24} />} title="Usa emojis com frequência" description="Carinhas, corações e risadas aparecem o tempo todo" href={RESULT} />
            <QuizOption icon={<Send size={24} />} title="Toma iniciativa de puxar assunto" description="Manda mensagem primeiro várias vezes na semana" href={RESULT} />
            <QuizOption icon={<Heart size={24} />} title='Apenas "kk", "uhum" e respostas curtas' description="Quase nunca desenvolve assunto nem usa emojis afetivos" href={RESULT} />
          </div>
        </div>

        <article className="prose prose-lg max-w-none mb-12">
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">O estilo das mensagens não mente</h2>
            <p className="text-muted-foreground mb-4">
              Mensagens longas, emojis afetivos e iniciativa são três indicadores juntos do nível real de
              interesse em apps de namoro. Quando uma mulher se preocupa em escrever direito, completa
              ideias e usa carinhas que demonstram emoção, ela <strong className="text-foreground">está
              investindo energia</strong> na conversa.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
              <p className="text-sm font-semibold text-foreground mb-2">💬 Sinais positivos no estilo:</p>
              <ul className="text-sm text-muted-foreground space-y-1 mb-0">
                <li>• Mensagens com 2+ linhas em vez de monossílabos</li>
                <li>• Emojis afetivos (😊 ❤️ 😅) e não apenas "kk"</li>
                <li>• Iniciativa de mandar mensagem primeiro em pelo menos 30% das vezes</li>
                <li>• Áudios e fotos do dia a dia compartilhados sem você pedir</li>
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Juntando todos os sinais do quiz</h3>
            <p className="text-muted-foreground mb-3">
              Você analisou nas 5 perguntas: sinais gerais, tempo de resposta, perguntas que ela faz,
              disposição em marcar encontro e estilo das mensagens. Se em pelo menos 3 desses pontos a
              resposta foi positiva e consistente, o interesse é real. Se em 3 ou mais foi negativa, é
              hora de redirecionar sua energia para alguém que realmente quer te conhecer.
            </p>
          </div>

          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-foreground mb-2">🎯 Próximo passo</h3>
            <p className="text-muted-foreground">
              Clique em qualquer opção acima para ver as recomendações personalizadas de apps de namoro
              ideais para o seu perfil e estratégias para aumentar suas chances de conversas que viram
              encontros reais.
            </p>
          </div>
        </article>
      </QuizLayout>
    </>
  );
};

export default EmojisMensagensIniciativaMulher;

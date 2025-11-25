import QuizLayout from "@/components/QuizLayout";
import QuizOption from "@/components/QuizOption";
import { Helmet } from "react-helmet";
import { MessageSquare, Sparkles, Coffee, Smile } from "lucide-react";
import AdSenseBlock from "@/components/AdSenseBlock";

const ComoIniciarConversasApps = () => {
  return (
    <>
      <Helmet>
        <title>Como Iniciar Conversas em Apps de Namoro que Geram Respostas | Beijo da Rua</title>
        <meta name="description" content="Descubra estratégias comprovadas para iniciar conversas em apps de namoro que realmente geram respostas e interesse. Técnicas testadas por homens brasileiros." />
      </Helmet>
      
      <QuizLayout 
        title="Como você prefere iniciar conversas?"
        description="Seu estilo de comunicação determina qual abordagem funciona melhor"
        progress={40}
      >
        <AdSenseBlock />
        
        {/* Educational Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            A arte de iniciar conversas que geram respostas
          </h2>
          
          <p className="text-foreground/80 mb-4">
            Estudos mostram que <strong>78% dos matches não geram nenhuma conversa</strong> porque a primeira mensagem 
            é genérica ou desinteressante. O jeito como você inicia uma conversa pode ser a diferença entre 
            ser ignorado e criar uma conexão real.
          </p>

          <p className="text-foreground/80 mb-4">
            Homens brasileiros que personalizam suas mensagens baseadas no perfil da pessoa têm 
            <strong> 5x mais chances de receber respostas</strong>. Não existe "mensagem mágica" que funciona 
            para todos - existe a mensagem certa para cada situação.
          </p>

          <div className="bg-accent/30 border-l-4 border-primary p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-foreground mb-2">💬 O que dizem as estatísticas:</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>• Mensagens com perguntas abertas têm 43% mais respostas que afirmações</li>
              <li>• Mencionar algo específico do perfil dela aumenta engajamento em 67%</li>
              <li>• "Oi, tudo bem?" tem apenas 9% de taxa de resposta - é a pior abertura possível</li>
              <li>• Humor leve e inteligente gera 3x mais interesse que tentativas de ser sexy</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-3">Erros fatais na primeira mensagem:</h3>
          <ul className="space-y-2 text-foreground/80 mb-6">
            <li>✗ Começar com "Oi" ou "Tudo bem?" sem nada mais</li>
            <li>✗ Elogiar apenas aparência física logo de cara</li>
            <li>✗ Mensagens longas demais que parecem interrogatório</li>
            <li>✗ Copiar e colar a mesma mensagem para todas</li>
            <li>✗ Ser sexual ou invasivo antes de criar rapport</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mb-3">Estratégias que funcionam no Brasil:</h3>
          <ul className="space-y-2 text-foreground/80 mb-6">
            <li>✓ <strong>Observação + pergunta:</strong> "Vi que você gosta de [interesse]. Qual foi seu [experiência relacionada]?"</li>
            <li>✓ <strong>Humor situacional:</strong> Fazer piada leve sobre algo na bio ou foto</li>
            <li>✓ <strong>Desafio amigável:</strong> "Você parece alguém que [característica]. Tô certo ou completamente errado?"</li>
            <li>✓ <strong>Conexão genuína:</strong> Compartilhar interesse comum e abrir espaço pra conversa</li>
          </ul>

          <p className="text-foreground/80 mb-6">
            <strong>Dica de ouro:</strong> A primeira mensagem não precisa ser perfeita. Ela só precisa ser 
            interessante o suficiente para a pessoa querer responder. Depois disso, seja você mesmo e 
            deixe a conversa fluir naturalmente.
          </p>
        </article>

        <AdSenseBlock />

        {/* Quiz Options */}
        <div className="space-y-6 mt-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Qual estilo mais combina com você?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <QuizOption
              title="Observador e personalizado"
              description="Leio o perfil e comento algo específico que me chamou atenção"
              href="/qual-tipo-foto-perfil-funciona-melhor-apps-namoro-homem"
              icon={<Sparkles size={24} />}
            />
            
            <QuizOption
              title="Bem-humorado e leve"
              description="Começo com piada ou comentário engraçado sobre algo da bio"
              href="/qual-tipo-foto-perfil-funciona-melhor-apps-namoro-homem"
              icon={<Smile size={24} />}
            />
            
            <QuizOption
              title="Direto e interessado"
              description="Faço pergunta direta sobre interesse em comum que vi no perfil"
              href="/qual-tipo-foto-perfil-funciona-melhor-apps-namoro-homem"
              icon={<MessageSquare size={24} />}
            />
            
            <QuizOption
              title="Casual e descontraído"
              description="Envio algo simples mas amigável, deixo a conversa fluir"
              href="/qual-tipo-foto-perfil-funciona-melhor-apps-namoro-homem"
              icon={<Coffee size={24} />}
            />
          </div>
        </div>

        <AdSenseBlock />
      </QuizLayout>
    </>
  );
};

export default ComoIniciarConversasApps;

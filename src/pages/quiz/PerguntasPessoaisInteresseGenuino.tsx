import { Helmet } from "react-helmet";
import QuizLayout from "@/components/QuizLayout";
import QuizOption from "@/components/QuizOption";
import { HelpCircle, Briefcase, Home, MessageCircleQuestion } from "lucide-react";

const NEXT = "/mulher-aceita-marcar-encontro-rapido-app-namoro-sinal-interesse";

const PerguntasPessoaisInteresseGenuino = () => {
  return (
    <>
      <Helmet>
        <title>Perguntas Pessoais e Interesse Genuíno da Mulher em Apps | Beijo da Rua</title>
        <meta name="description" content="As perguntas que ela faz revelam o interesse real. Veja como identificar curiosidade genuína x conversa de obrigação em apps de namoro." />
        <link rel="canonical" href="https://beijodarua.com.br/perguntas-pessoais-mulher-interesse-genuino-conversa-apps-namoro/" />
      </Helmet>

      <QuizLayout
        title="Que tipo de pergunta ela costuma fazer sobre você?"
        description="Pergunta 3 de 5 — Curiosidade real é o melhor termômetro de interesse"
        progress={60}
      >
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Quando vocês conversam, ela costuma:
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <QuizOption icon={<MessageCircleQuestion size={24} />} title="Faz perguntas abertas sobre sua vida" description="Quer saber rotina, planos, o que te motiva e o que você gosta" href={NEXT} />
            <QuizOption icon={<Briefcase size={24} />} title="Pergunta sobre trabalho e objetivos" description="Demonstra interesse no seu lado profissional e nos seus planos futuros" href={NEXT} />
            <QuizOption icon={<Home size={24} />} title="Quer entender família e valores" description="Pergunta sobre família, amigos próximos e o que você valoriza" href={NEXT} />
            <QuizOption icon={<HelpCircle size={24} />} title="Quase não pergunta nada" description="Só responde o que você manda, sem curiosidade sobre você" href={NEXT} />
          </div>
        </div>

        <article className="prose prose-lg max-w-none mb-12">
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">As perguntas mostram o que ela quer descobrir</h2>
            <p className="text-muted-foreground mb-4">
              Em apps de namoro, mulheres realmente interessadas <strong className="text-foreground">querem
              entender quem você é por trás do perfil</strong>. Elas fazem perguntas pessoais porque estão
              avaliando compatibilidade. Quando alguém só responde e nunca pergunta, geralmente está
              respondendo por educação ou esperando alguém mais interessante aparecer.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
              <p className="text-sm font-semibold text-foreground mb-2">🔍 Sinais de curiosidade real:</p>
              <ul className="text-sm text-muted-foreground space-y-1 mb-0">
                <li>• Faz pelo menos 2 perguntas abertas por conversa</li>
                <li>• Lembra de detalhes que você comentou dias antes</li>
                <li>• Aprofunda em temas que tocam seus valores e história</li>
                <li>• Pergunta sobre família, amigos, sonhos — não só hobbies</li>
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Quando a ausência de perguntas é sinal vermelho</h3>
            <p className="text-muted-foreground">
              Se em 5 conversas seguidas ela não fez nenhuma pergunta sobre você, é provável que esteja
              apenas mantendo o match aberto. Reciprocidade na conversa é uma das características mais
              fortes do interesse genuíno — sem ela, dificilmente a relação avança.
            </p>
          </div>
        </article>
      </QuizLayout>
    </>
  );
};

export default PerguntasPessoaisInteresseGenuino;

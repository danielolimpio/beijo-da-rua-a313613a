import { Helmet } from "react-helmet";
import QuizLayout from "@/components/QuizLayout";
import QuizOption from "@/components/QuizOption";
import { Zap, Clock, Hourglass, Calendar } from "lucide-react";

const NEXT = "/perguntas-pessoais-mulher-interesse-genuino-conversa-apps-namoro";

const TempoRespostaMulherInteressada = () => {
  return (
    <>
      <Helmet>
        <title>Tempo de Resposta da Mulher Interessada em Apps de Namoro | Beijo da Rua</title>
        <meta name="description" content="Quanto tempo uma mulher interessada demora para responder mensagens em apps de namoro? Descubra o que o tempo de resposta revela sobre o interesse real dela." />
        <link rel="canonical" href="https://beijodarua.com.br/tempo-resposta-mensagens-mulher-interessada-apps-namoro-homem/" />
      </Helmet>

      <QuizLayout
        title="Quanto tempo ela demora para responder suas mensagens?"
        description="Pergunta 2 de 5 — O tempo de resposta diz muito sobre o nível de interesse"
        progress={40}
      >
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Qual é o padrão de resposta mais comum dela?
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <QuizOption icon={<Zap size={24} />} title="Responde em minutos" description="Quase sempre retorna em poucos minutos, mesmo em dias corridos" href={NEXT} />
            <QuizOption icon={<Clock size={24} />} title="Algumas horas, mas sempre responde" description="Demora um pouco, mas nunca deixa a conversa cair no esquecimento" href={NEXT} />
            <QuizOption icon={<Hourglass size={24} />} title="Um dia inteiro ou mais" description="Costuma demorar 24h+ e responde com mensagens curtas" href={NEXT} />
            <QuizOption icon={<Calendar size={24} />} title="Some por dias e volta" description="Desaparece por vários dias e retoma como se nada tivesse acontecido" href={NEXT} />
          </div>
        </div>

        <article className="prose prose-lg max-w-none mb-12">
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">O que o tempo de resposta realmente revela</h2>
            <p className="text-muted-foreground mb-4">
              O tempo de resposta é um dos indicadores mais honestos de interesse em apps de namoro. Não se trata
              de resposta imediata — todos têm vida — mas de consistência. Uma mulher interessada cria padrão:
              ela retorna em horários parecidos, mantém a conversa viva e raramente deixa você no vácuo por dias.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
              <p className="text-sm font-semibold text-foreground mb-2">📊 Tempo médio observado:</p>
              <ul className="text-sm text-muted-foreground space-y-1 mb-0">
                <li>• Interesse alto: resposta em até 2 horas em mais de 70% das mensagens</li>
                <li>• Interesse moderado: respostas no mesmo dia, em janelas variáveis</li>
                <li>• Interesse baixo: respostas a cada 1-3 dias, sempre curtas</li>
                <li>• Sem interesse: silêncio prolongado seguido de "oi, sumido"</li>
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Como interpretar sem virar paranoico</h3>
            <p className="text-muted-foreground mb-3">
              Nem toda demora significa desinteresse. Trabalho, família, viagens e até cansaço entram na conta.
              O segredo é observar o <strong className="text-foreground">padrão de uma semana inteira</strong>,
              não uma mensagem isolada. Se ela some sempre nos fins de semana, isso é informação. Se some
              quando vocês começam a falar de encontro, isso é informação ainda mais forte.
            </p>
          </div>
        </article>
      </QuizLayout>
    </>
  );
};

export default TempoRespostaMulherInteressada;

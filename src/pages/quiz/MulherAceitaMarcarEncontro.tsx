import { Helmet } from "react-helmet";
import QuizLayout from "@/components/QuizLayout";
import QuizOption from "@/components/QuizOption";
import { CalendarCheck, CalendarClock, CalendarX, MapPin } from "lucide-react";

const NEXT = "/emojis-mensagens-longas-iniciativa-mulher-interessada-apps-namoro";

const MulherAceitaMarcarEncontro = () => {
  return (
    <>
      <Helmet>
        <title>Mulher Aceita Marcar Encontro: Sinal de Interesse Real em Apps | Beijo da Rua</title>
        <meta name="description" content="Aceitar marcar encontro rápido é um dos maiores sinais de interesse em apps de namoro. Entenda como avaliar a disposição real dela em sair com você." />
        <link rel="canonical" href="https://beijodarua.com.br/mulher-aceita-marcar-encontro-rapido-app-namoro-sinal-interesse/" />
      </Helmet>

      <QuizLayout
        title="Como ela reage quando você sugere marcar um encontro?"
        description="Pergunta 4 de 5 — A disposição em sair é o sinal mais decisivo de todos"
        progress={80}
      >
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Qual foi a reação mais comum dela ao convite?
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <QuizOption icon={<CalendarCheck size={24} />} title="Topa e sugere dia e lugar" description="Aceita rápido e propõe horário ou local por conta própria" href={NEXT} />
            <QuizOption icon={<MapPin size={24} />} title="Aceita mas pede para você definir" description="Diz sim mas deixa toda a logística com você" href={NEXT} />
            <QuizOption icon={<CalendarClock size={24} />} title="Adia sempre para depois" description='Responde "qualquer dia desses" e nunca confirma data' href={NEXT} />
            <QuizOption icon={<CalendarX size={24} />} title="Desconversa ou ignora" description="Muda de assunto sempre que você sugere se conhecerem pessoalmente" href={NEXT} />
          </div>
        </div>

        <article className="prose prose-lg max-w-none mb-12">
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">O encontro é o teste decisivo</h2>
            <p className="text-muted-foreground mb-4">
              Em apps de namoro, todo o resto pode ser interpretado de várias formas — mas a disposição
              em <strong className="text-foreground">marcar um encontro real</strong> é o sinal mais difícil
              de fingir. Mulheres realmente interessadas querem sair do app e te conhecer pessoalmente
              dentro de poucas semanas de conversa.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
              <p className="text-sm font-semibold text-foreground mb-2">📅 O que os dados mostram:</p>
              <ul className="text-sm text-muted-foreground space-y-1 mb-0">
                <li>• 81% das mulheres realmente interessadas marcam encontro em até 2 semanas</li>
                <li>• Quem propõe dia e lugar tem 3x mais chance de comparecer</li>
                <li>• Adiamentos consecutivos por mais de 3 semanas indicam interesse baixo</li>
                <li>• Desconversar sobre encontro é o maior sinal de não-interesse declarado</li>
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Como sugerir o encontro com confiança</h3>
            <p className="text-muted-foreground">
              Não pergunte "você quer sair algum dia?". Proponha algo concreto: "Quinta à noite tem um café
              novo aqui no centro, topa ir comigo?". Convites concretos eliminam o "talvez" e revelam o
              interesse real dela na hora.
            </p>
          </div>
        </article>
      </QuizLayout>
    </>
  );
};

export default MulherAceitaMarcarEncontro;

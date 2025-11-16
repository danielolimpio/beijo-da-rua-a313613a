import QuizLayout from "@/components/QuizLayout";
import { QuizQuestion } from "@/components/QuizAnswerOption";
import QuizFAQ from "@/components/QuizFAQ";
import AdSenseBlock from "@/components/AdSenseBlock";
import { Helmet } from "react-helmet";

const VoceEMaisSerioOuDescontraido = () => {
  const options = [
    { emoji: "❤️", text: "Confiança e lealdade acima de tudo" },
    { emoji: "😂", text: "Rir até doer a barriga — humor é essencial!" },
    { emoji: "🤝", text: "Comunicação clara e sem jogos" },
    { emoji: "🔥", text: "Paixão e química elétrica" },
    { emoji: "🧘", text: "Calmos, tranquilos, sem dramas — paz interior" },
  ];

  const faqItems = [
    {
      question: "Personalidade realmente influencia na química do casal?",
      answer: "Absolutamente. Estudos mostram que casais com valores e estilos emocionais alinhados têm mais chances de longevidade. Não precisa ser igual, mas precisa combinar."
    },
    {
      question: "E se eu for meio dos dois mundos?",
      answer: "Muita gente é! Mas pense no que falta mais quando está solteiro(a). Sentimento de insegurança? Então confiança é prioridade. Falta riso? Humor entra na lista. Escolha o que mais pesa agora."
    },
    {
      question: "Posso combinar com alguém muito diferente de mim?",
      answer: "Sim, mas com esforço mútuo. O nosso sistema prioriza perfis com compatibilidade natural — menos tensão, mais fluidez. Diferenças vêm depois, para complementar."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Você é Mais Sério ou Descontraído? | Quiz de Personalidade - Beijo da Rua</title>
        <meta name="description" content="Descubra o que é mais importante para você num relacionamento e encontre alguém que compartilha dos mesmos valores essenciais." />
      </Helmet>

      <QuizLayout 
        title="Você é Mais 'Sério' ou 'Descontraído'?"
        description="Passo 3 de 5"
        progress={60}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Na sua opinião, o que é mais importante num relacionamento?
          </h2>

          <AdSenseBlock />

          <QuizQuestion options={options} nextPage="/onde-voce-quer-chegar-no-relacionamento" />

          <div className="prose prose-lg max-w-none mt-12">
            <p className="text-foreground/80">
              Amor é sentimento, mas convivência é prática. Algumas pessoas precisam de profundidade emocional e comunicação franca, outras buscam leveza e diversão constante. Nenhuma forma é melhor — mas combinar traços complementares evita atritos. Ao escolher o que mais importa para você (confiança, humor, paixão etc.), ajudamos o algoritmo a encontrar alguém que fale a mesma língua emocional que você. Afinal, nada pior do que um drama quando você só queria rir de um meme bobo. Seja honesto: você procura um companheiro de alma, de risadas ou de equilíbrio?
            </p>
          </div>

          <AdSenseBlock />

          <QuizFAQ items={faqItems} pageUrl="/voce-e-mais-serio-ou-descontraido" />
        </div>
      </QuizLayout>
    </>
  );
};

export default VoceEMaisSerioOuDescontraido;

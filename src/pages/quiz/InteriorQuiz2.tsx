import { Helmet } from "react-helmet";
import QuizLayout from "@/components/QuizLayout";
import { QuizQuestion } from "@/components/QuizAnswerOption";
import QuizFAQ from "@/components/QuizFAQ";
import AdSenseBlock from "@/components/AdSenseBlock";

const InteriorQuiz2 = () => {
  const options = [
    { emoji: "🆕", text: "Nunca usei, mas quero tentar" },
    { emoji: "👀", text: "Já baixei, mas sem sucesso até agora" },
    { emoji: "💬", text: "Consigo matches, mas poucos encontros reais" },
    { emoji: "✅", text: "Já tive alguns encontros, mas busco melhorar" },
    { emoji: "🎯", text: "Experiente, só quero refinar minha estratégia" },
  ];

  const faqItems = [
    {
      question: "Se nunca usei apps, por onde começo no interior?",
      answer: "Comece pelo Facebook Dating (todo mundo tem Facebook) ou Tinder com raio ampliado. Evite apps nichados no início — foque em volume primeiro, refinamento depois."
    },
    {
      question: "Por que não consigo matches no interior?",
      answer: "Três razões principais: (1) raio muito restrito, (2) perfil genérico que não destaca você da concorrência local, (3) app errado para sua região. Vamos resolver isso no resultado final."
    },
    {
      question: "É normal demorar mais para ter sucesso no interior?",
      answer: "Sim e não. Você vai ter menos matches, mas a qualidade é maior. Um match no interior tem 3x mais chance de virar encontro real do que na capital. Paciência aqui é investimento."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Qual Sua Experiência com Apps? | Quiz Apps no Interior</title>
        <meta name="description" content="Entenda seu nível de experiência com apps de namoro para receber recomendações personalizadas para o interior do Brasil." />
      </Helmet>

      <QuizLayout 
        title="Apps de Namoro no Interior: Vale a Pena?"
        description="Pergunta 2 de 5"
        progress={40}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Qual sua experiência com apps de namoro?
          </h2>

          <AdSenseBlock />

          <QuizQuestion options={options} nextPage="/interior-quiz-3" />

          <div className="prose prose-lg max-w-none mt-12">
            <p className="text-foreground/80">
              Saber onde você está hoje é essencial para traçar o melhor caminho. Iniciantes no interior cometem erros diferentes de quem já usa apps há anos. Se você nunca usou, vamos te poupar de baixar 5 apps inúteis e ir direto nos que funcionam na sua região. Se já usa mas não funciona, o problema provavelmente está na estratégia — não em você. E se já tem experiência, vamos te mostrar técnicas avançadas específicas para o contexto do interior brasileiro. Cada nível tem sua rota ideal.
            </p>
          </div>

          <AdSenseBlock />

          <QuizFAQ items={faqItems} pageUrl="/apps-de-namoro-para-homens-no-interior-do-brasil-vale-a-pena" />
        </div>
      </QuizLayout>
    </>
  );
};

export default InteriorQuiz2;

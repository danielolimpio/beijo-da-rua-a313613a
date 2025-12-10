import { Helmet } from "react-helmet";
import QuizLayout from "@/components/QuizLayout";
import { QuizQuestion } from "@/components/QuizAnswerOption";
import QuizFAQ from "@/components/QuizFAQ";
import { UnderFirstParagraphAd, MidContentAd } from "@/components/EzoicAd";

const InteriorQuiz1 = () => {
  const options = [
    { emoji: "🏙️", text: "Capital ou região metropolitana (mais de 1 milhão)" },
    { emoji: "🏘️", text: "Cidade grande (200k a 1 milhão de habitantes)" },
    { emoji: "🏡", text: "Cidade média (50k a 200k habitantes)" },
    { emoji: "🌾", text: "Cidade pequena (10k a 50k habitantes)" },
    { emoji: "🏞️", text: "Interior mesmo (menos de 10k habitantes)" },
  ];

  const faqItems = [
    {
      question: "Por que o tamanho da cidade importa para apps de namoro?",
      answer: "O número de usuários disponíveis, a cultura local e até a mentalidade das pessoas mudam drasticamente entre capitais e cidades pequenas. Apps que funcionam bem em São Paulo podem ser 'desertos' no interior — e vice-versa."
    },
    {
      question: "Apps de namoro funcionam mesmo em cidades pequenas?",
      answer: "Sim! Mas exigem estratégia diferente: raio ampliado, paciência, e foco em apps com penetração no interior (como Facebook Dating e Badoo). A taxa de conversão match→encontro é até maior no interior."
    },
    {
      question: "E se minha cidade não aparecer nos apps?",
      answer: "Isso é comum em cidades muito pequenas. A solução é ampliar o raio de busca para 50-100km e considerar cidades vizinhas. Muitas pessoas fazem isso e funcionam perfeitamente."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Qual o Tamanho da Sua Cidade? | Quiz Apps no Interior</title>
        <meta name="description" content="Descubra como o tamanho da sua cidade influencia sua estratégia em apps de namoro. Primeiro passo para encontrar o app ideal." />
      </Helmet>

      <QuizLayout 
        title="Apps de Namoro no Interior: Vale a Pena?"
        description="Pergunta 1 de 5"
        progress={20}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Qual o tamanho da sua cidade?
          </h2>

          <UnderFirstParagraphAd />

          <QuizQuestion options={options} nextPage="/interior-quiz-2" />

          <div className="prose prose-lg max-w-none mt-12">
            <p className="text-foreground/80">
              Essa é a pergunta mais importante para definir sua estratégia. Em cidades grandes, você tem volume — mas também enfrenta competição brutal. No interior, o jogo muda: menos perfis, mas taxa de conversão muito maior (78% vs 23% nas capitais). O segredo está em saber adaptar sua abordagem ao ambiente. Um perfil mediano em cidade pequena pode ter mais sucesso que um perfil excepcional perdido em meio a 100 mil outros em São Paulo. Localização não é desculpa — é estratégia.
            </p>
          </div>

          <MidContentAd />

          <QuizFAQ items={faqItems} pageUrl="/apps-de-namoro-para-homens-no-interior-do-brasil-vale-a-pena" />
        </div>
      </QuizLayout>
    </>
  );
};

export default InteriorQuiz1;

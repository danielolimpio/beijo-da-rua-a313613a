import { Helmet } from "react-helmet";
import QuizLayout from "@/components/QuizLayout";
import { QuizQuestion } from "@/components/QuizAnswerOption";
import QuizFAQ from "@/components/QuizFAQ";
import AdSenseBlock from "@/components/AdSenseBlock";

const InteriorQuiz5 = () => {
  const options = [
    { emoji: "🎸", text: "Música, festas, vida social agitada" },
    { emoji: "🏞️", text: "Natureza, trilhas, atividades ao ar livre" },
    { emoji: "📚", text: "Leitura, cultura, conversas profundas" },
    { emoji: "💪", text: "Academia, esportes, vida saudável" },
    { emoji: "🎮", text: "Games, tecnologia, hobbies caseiros" },
  ];

  const faqItems = [
    {
      question: "Por que meu estilo de vida importa para apps no interior?",
      answer: "Em cidades pequenas, hobbies e estilo de vida criam conexões mais fortes que aparência. Se você gosta de trilhas e ela também, vocês têm algo real para fazer juntos — e isso aumenta em 400% a chance de match virar relacionamento."
    },
    {
      question: "Como destacar meus interesses no perfil?",
      answer: "Use fotos fazendo o que você ama (não só selfies), mencione hobbies específicos na bio, e seja autêntico. 'Gosto de música' é genérico. 'Toco violão aos domingos' é memorável. Especificidade atrai quem combina com você."
    },
    {
      question: "E se meus interesses não são comuns na minha cidade?",
      answer: "Ainda melhor! Você se destaca. Alguém que também ama algo diferente vai te encontrar como agulha no palheiro — e a conexão será mais forte. Autenticidade vence conformidade, sempre."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Qual Seu Estilo de Vida? | Quiz Apps no Interior</title>
        <meta name="description" content="Última pergunta para descobrir qual app de namoro funciona melhor para você no interior do Brasil." />
      </Helmet>

      <QuizLayout 
        title="Apps de Namoro no Interior: Vale a Pena?"
        description="Pergunta 5 de 5"
        progress={100}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Qual seu estilo de vida predominante?
          </h2>

          <AdSenseBlock />

          <QuizQuestion options={options} nextPage="/interior-quiz-resultado" />

          <div className="prose prose-lg max-w-none mt-12">
            <p className="text-foreground/80">
              Essa última pergunta fecha o quebra-cabeça. No interior, interesses compartilhados valem mais que atração física inicial — porque as opções de lazer são limitadas. Se você gosta de natureza e ela adora balada, o relacionamento vai travar rápido. Mas se ambos curtem a mesma vibe, vocês já têm programas prontos: trilhas, shows locais, leitura no parque, treinos juntos. Apps que filtram por interesses (como Hinge e OkCupid) funcionam melhor no interior justamente por isso. Você não quer só alguém bonito — quer alguém com quem dividir seu estilo de vida. E isso, aqui, vale ouro.
            </p>
          </div>

          <AdSenseBlock />

          <QuizFAQ items={faqItems} pageUrl="/apps-de-namoro-para-homens-no-interior-do-brasil-vale-a-pena" />
        </div>
      </QuizLayout>
    </>
  );
};

export default InteriorQuiz5;

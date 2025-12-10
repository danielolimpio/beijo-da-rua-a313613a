import { Helmet } from "react-helmet";
import QuizLayout from "@/components/QuizLayout";
import { QuizQuestion } from "@/components/QuizAnswerOption";
import QuizFAQ from "@/components/QuizFAQ";
import { UnderFirstParagraphAd, MidContentAd } from "@/components/EzoicAd";

const InteriorQuiz3 = () => {
  const options = [
    { emoji: "🚗", text: "Tenho mobilidade total (carro próprio)" },
    { emoji: "🚌", text: "Posso me deslocar até 30km facilmente" },
    { emoji: "🏠", text: "Prefiro encontros na minha cidade mesmo" },
    { emoji: "⏰", text: "Fins de semana consigo ir mais longe" },
    { emoji: "📍", text: "Só quero conhecer pessoas bem perto de mim" },
  ];

  const faqItems = [
    {
      question: "Preciso ter carro para ter sucesso em apps no interior?",
      answer: "Não é obrigatório, mas facilita MUITO. 82% das mulheres em cidades pequenas citam 'logística' como barreira para encontros. Se você tem mobilidade, mencione isso no perfil — remove a objeção principal."
    },
    {
      question: "Quanto posso ampliar o raio de busca sem parecer desesperado?",
      answer: "No interior, 50-100km é padrão e aceito. Mulheres também fazem isso. Acima de 150km só se você realmente estiver disposto a viajar — e deixe isso claro desde o início."
    },
    {
      question: "Vale a pena sair com alguém de outra cidade?",
      answer: "Depende da distância e da frequência que vocês conseguem se ver. Relacionamentos intermunicipais funcionam, mas exigem planejamento. Se ambos topam, pode ser ainda melhor que opções locais limitadas."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Qual Sua Disponibilidade para Deslocamento? | Quiz Apps no Interior</title>
        <meta name="description" content="Descubra como sua mobilidade influencia suas chances em apps de namoro no interior do Brasil." />
      </Helmet>

      <QuizLayout 
        title="Apps de Namoro no Interior: Vale a Pena?"
        description="Pergunta 3 de 5"
        progress={60}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Qual sua disponibilidade para deslocamento?
          </h2>

          <UnderFirstParagraphAd />

          <QuizQuestion options={options} nextPage="/interior-quiz-4" />

          <div className="prose prose-lg max-w-none mt-12">
            <p className="text-foreground/80">
              No interior, mobilidade é moeda de troca. Ter carro não é só comodidade — é vantagem competitiva. Pesquisas mostram que homens com mobilidade têm 3x mais sucesso em apps fora de capitais. Por quê? Porque resolvem o maior obstáculo das mulheres: "como a gente se encontra?". Se você pode se deslocar, deixe isso claro no perfil. Se não pode, foque em mulheres da sua cidade ou com transporte próprio. Logística bem resolvida transforma match em encontro. Ignorar isso é atirar no escuro.
            </p>
          </div>

          <MidContentAd />

          <QuizFAQ items={faqItems} pageUrl="/apps-de-namoro-para-homens-no-interior-do-brasil-vale-a-pena" />
        </div>
      </QuizLayout>
    </>
  );
};

export default InteriorQuiz3;

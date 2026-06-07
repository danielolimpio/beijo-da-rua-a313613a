import { Helmet } from "react-helmet";
import QuizLayout from "@/components/QuizLayout";
import { QuizQuestion } from "@/components/QuizAnswerOption";
import QuizFAQ from "@/components/QuizFAQ";
import { UnderFirstParagraphAd, MidContentAd } from "@/components/EzoicAd";

const InteriorQuiz4 = () => {
  const options = [
    { emoji: "💑", text: "Relacionamento sério e duradouro" },
    { emoji: "😊", text: "Conhecer pessoas legais, sem pressão" },
    { emoji: "🔥", text: "Encontros casuais e conexões leves" },
    { emoji: "🤝", text: "Amizades que podem virar algo mais" },
    { emoji: "🎯", text: "Testar as águas e ver o que rola" },
  ];

  const faqItems = [
    {
      question: "Apps no interior servem só para namoro sério?",
      answer: "Não! Mas a cultura tende a ser menos casual que nas capitais. Mesmo apps como Tinder têm perfil mais 'encontro que pode virar namoro' no interior. Seja claro sobre sua intenção — funciona para todos os objetivos."
    },
    {
      question: "Como evitar fofoca em cidade pequena?",
      answer: "Impossível evitar 100%, mas você reduz: seja discreto sem ser misterioso, escolha fotos de perfil que não exponham demais, e evite match com conhecidos diretos. Seriedade no perfil também ajuda a evitar má fama."
    },
    {
      question: "Mulheres do interior aceitam casual?",
      answer: "Algumas sim, outras não — como em qualquer lugar. A diferença é que a exposição social é maior, então muitas preferem discrição ou evitam casual por medo de julgamento. Respeite o ritmo dela e seja transparente desde o início."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Qual Seu Objetivo nos Apps? | Quiz Apps no Interior</title>
        <meta name="description" content="Defina seu objetivo em apps de namoro no interior para receber recomendações precisas e estratégias personalizadas." />
      </Helmet>

      <QuizLayout 
        title="Apps de Namoro no Interior: Vale a Pena?"
        description="Pergunta 4 de 5"
        progress={80}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            O que você busca em apps de namoro?
          </h2>

          <UnderFirstParagraphAd />

          <QuizQuestion options={options} nextPage="/estilo-de-vida-apps-de-namoro-interior/" />

          <div className="prose prose-lg max-w-none mt-12">
            <p className="text-foreground/80">
              No interior, clareza de intenção é ainda mais importante que nas capitais. Por quê? Porque a rede social é menor — reputação importa. Se você busca algo casual mas se apresenta como "querendo algo sério", vai gerar frustração (e fofoca). Se quer namoro mas atrai só casual, perde tempo. A boa notícia: quando você é transparente desde o início, atrai quem está alinhado. E em cidade pequena, isso significa menos ghosting, menos enrolação e mais conversas produtivas. Sinceridade aqui não é risco — é eficiência.
            </p>
          </div>

          <MidContentAd />

          <QuizFAQ items={faqItems} pageUrl="/apps-de-namoro-para-homens-no-interior-do-brasil-vale-a-pena" />
        </div>
      </QuizLayout>
    </>
  );
};

export default InteriorQuiz4;

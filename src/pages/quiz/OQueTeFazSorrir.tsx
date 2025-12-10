import QuizLayout from "@/components/QuizLayout";
import { QuizQuestion } from "@/components/QuizAnswerOption";
import QuizFAQ from "@/components/QuizFAQ";
import { Helmet } from "react-helmet";
import { UnderFirstParagraphAd, MidContentAd } from "@/components/EzoicAd";

const OQueTeFazSorrir = () => {
  const options = [
    { emoji: "🍕", text: "Criar comida deliciosa do nada" },
    { emoji: "🌞", text: "Fazer qualquer dia chuvoso virar ensolarado" },
    { emoji: "🎧", text: "Ter a trilha sonora perfeita pra cada momento da sua vida" },
    { emoji: "💬", text: "Ler mentes (só das pessoas que você gosta)" },
    { emoji: "🛏️", text: "Dormir 8h sem acordar, mesmo com barulho" },
  ];

  const faqItems = [
    {
      question: "Por que essa pergunta sobre superpoderes está aqui no quiz?",
      answer: "Porque superpoderes revelam desejos profundos! Escolher um poder fictício mostra o que você valoriza na vida real — seja conforto, alegria, conexão ou aventura. Usamos isso para combinar você com pessoas que pensam parecido."
    },
    {
      question: "Como meu humor influencia meu perfil de relacionamento?",
      answer: "Muito! Pessoas com senso de humor alinhado tendem a resolver conflitos com leveza, se divertir mais juntas e manter a chama viva. Saber se você é mais romântico, sarcástico ou tranquilo ajuda a encontrar alguém com a mesma vibe."
    },
    {
      question: "Posso mudar minha resposta depois?",
      answer: "Claro! Seu perfil evolui com você. Depois de finalizar o cadastro, você pode atualizar suas respostas a qualquer momento na seção 'Meu Perfil'."
    }
  ];

  return (
    <>
      <Helmet>
        <title>O Que Te Faz Sorrir? | Quiz de Personalidade - Beijo da Rua</title>
        <meta name="description" content="Descubra o que te faz verdadeiramente feliz e encontre alguém que compartilha dos mesmos valores. Responda nosso quiz divertido e personalizado." />
      </Helmet>

      <QuizLayout 
        title="O Que Te Faz Sorrir?"
        description="Passo 1 de 5"
        progress={20}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Se você pudesse escolher um superpoder pra usar no dia a dia… qual seria? 😉
          </h2>

          <UnderFirstParagraphAd />

          <QuizQuestion options={options} nextPage="/qual-seu-estilo-de-namoro" />

          <div className="prose prose-lg max-w-none mt-12">
            <p className="text-foreground/80">
              Nem tudo no amor precisa ser sério! Aqui, queremos descobrir o que te faz verdadeiramente feliz — porque quem ri junto, fica junto. Seja um poder mágico ou algo simples do dia a dia, sua resposta nos ajuda a entender seu humor, seus desejos e até suas prioridades emocionais. Você prefere criar momentos deliciosos, espalhar boas energias ou ter aquela noite perfeita de sono? Cada escolha revela um pouco da sua essência. E não se preocupe: ninguém vai julgar se você escolher "dormir sem acordar" — afinal, todo mundo merece um descanso de super-herói de vez em quando. Responda com o coração (e um sorriso), que a gente cuida do resto!
            </p>
          </div>

          <MidContentAd />

          <QuizFAQ items={faqItems} pageUrl="/o-que-te-faz-sorrir" />
        </div>
      </QuizLayout>
    </>
  );
};

export default OQueTeFazSorrir;

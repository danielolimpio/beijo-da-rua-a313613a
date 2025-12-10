import QuizLayout from "@/components/QuizLayout";
import { QuizQuestion } from "@/components/QuizAnswerOption";
import QuizFAQ from "@/components/QuizFAQ";
import { Helmet } from "react-helmet";
import { UnderFirstParagraphAd, InContent5Ad } from "@/components/EzoicAd";

const OQueNuncaFaltaNoSeuDia = () => {
  const options = [
    { emoji: "☕", text: "Um café quentinho pela manhã" },
    { emoji: "📱", text: "Scroll no celular logo ao acordar" },
    { emoji: "🎵", text: "Música tocando o dia inteiro" },
    { emoji: "📖", text: "Ler algo — livro, notícias, memes" },
    { emoji: "🧘", text: "Um momento de silêncio ou meditação" },
  ];

  const faqItems = [
    {
      question: "Hábitos diários influenciam na compatibilidade?",
      answer: "Sim! Compartilhar rotinas (como horários, uso de tecnologia ou necessidade de espaço) reduz atritos. Casais que combinam nisso têm mais fluidez na convivência."
    },
    {
      question: "E se meu hábito for incomum?",
      answer: "Sem problema. O sistema analisa padrões amplos — como necessidade de tranquilidade, conexão digital ou energia matinal — e encontra perfis com comportamentos similares."
    },
    {
      question: "Posso atualizar minhas respostas depois?",
      answer: "Sim! Seu perfil é dinâmico. À medida que sua vida muda, você pode ajustar suas respostas para continuar recebendo matches relevantes."
    }
  ];

  return (
    <>
      <Helmet>
        <title>O Que Nunca Falta no Seu Dia? | Quiz de Personalidade - Beijo da Rua</title>
        <meta name="description" content="Descubra como seus hábitos diários revelam sua personalidade e encontre alguém com rotinas compatíveis com as suas." />
      </Helmet>

      <QuizLayout 
        title="O Que Nunca Falta no Seu Dia?"
        description="Passo 5 de 5"
        progress={100}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Qual dessas coisas NUNCA falta na sua rotina? (Escolha 1!)
          </h2>

          <UnderFirstParagraphAd />

          <QuizQuestion options={options} nextPage="/quiz" />

          <div className="prose prose-lg max-w-none mt-12">
            <p className="text-foreground/80">
              Pequenos hábitos dizem muito sobre quem somos. O primeiro gole de café, o scroll matinal, ou aquele momento de silêncio antes de dormir — esses detalhes formam sua rotina emocional. E quem compartilha de hábitos semelhantes costuma ter mais sintonia no dia a dia. Imagine acordar com alguém que também ama música ao vivo ou valoriza o café em paz — é harmonia desde o despertador. Essa pergunta parece simples, mas é poderosa: ela ajuda a prever como será a convivência real, não só o romance inicial. Então, pense: o que você realmente não abre mão? Sua resposta pode levar você ao match perfeito.
            </p>
          </div>

          <InContent5Ad />

          <QuizFAQ items={faqItems} pageUrl="/o-que-nunca-falta-no-seu-dia" />
        </div>
      </QuizLayout>
    </>
  );
};

export default OQueNuncaFaltaNoSeuDia;

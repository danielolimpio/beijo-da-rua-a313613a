import QuizLayout from "@/components/QuizLayout";
import { QuizQuestion } from "@/components/QuizAnswerOption";
import QuizFAQ from "@/components/QuizFAQ";
import { Helmet } from "react-helmet";
import { UnderFirstParagraphAd, MidContentAd } from "@/components/EzoicAd";

const QualSeuEstiloDeNamoro = () => {
  const options = [
    { emoji: "🍷", text: "Um jantar romântico em um restaurante charmoso" },
    { emoji: "🏕️", text: "Acampar sob as estrelas com fogueira e histórias" },
    { emoji: "🎮", text: "Maratona de jogos ou séries com pipoca e cobertor" },
    { emoji: "🚴‍♂️", text: "Uma aventura radical: escalada, trilhas, rafting" },
    { emoji: "📖", text: "Café na livraria + conversa profunda sobre tudo e nada" },
  ];

  const faqItems = [
    {
      question: "Meu estilo de encontro define meu tipo de parceiro ideal?",
      answer: "Sim! Estilo de encontro reflete estilo de vida. Se você prefere atividades calmas, provavelmente se conectará melhor com alguém que valoriza intimidade e conversa — não com quem só pensa em festas ou adrenalina."
    },
    {
      question: "E se eu gostar de vários estilos?",
      answer: "Isso é ótimo! Mostra que você é versátil. No entanto, escolha a opção que mais representa seu desejo atual — assim, direcionamos recomendações que combinam com seu momento da vida."
    },
    {
      question: "Como o site usa essa informação?",
      answer: "Cruzamos seu estilo com o de outros usuários para sugerir matches compatíveis. Também usamos para personalizar dicas de encontros e conteúdos exclusivos no seu feed."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Qual Seu Estilo de Namoro? | Quiz de Personalidade - Beijo da Rua</title>
        <meta name="description" content="Descubra seu estilo ideal de encontro e conecte-se com pessoas que compartilham dos mesmos interesses e valores." />
      </Helmet>

      <QuizLayout 
        title="Qual Seu Estilo de Namoro?"
        description="Passo 2 de 5"
        progress={40}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Seu encontro ideal é mais…?
          </h2>

          <UnderFirstParagraphAd />

          <QuizQuestion options={options} nextPage="/voce-e-mais-serio-ou-descontraido" />

          <div className="prose prose-lg max-w-none mt-12">
            <p className="text-foreground/80">
              Namorar não é só sobre sentimentos — é sobre como você vive o amor no dia a dia. Alguns curtem um jantar à luz de velas, outros preferem escalar montanhas ou maratonar séries no sofá. Nada é errado, tudo é válido! Mas saber qual é seu estilo de encontro ideal ajuda a evitar combinações frustrantes — imagine sair com alguém que ama aventura extrema enquanto você só quer um café com conversa profunda. Por isso, escolha com sinceridade: onde você se vê num sábado à noite? Seja clássico, aventureiro ou caseiro, tem alguém por aí que combina exatamente com isso. Vamos encontrar?
            </p>
          </div>

          <MidContentAd />

          <QuizFAQ items={faqItems} pageUrl="/qual-seu-estilo-de-namoro" />
        </div>
      </QuizLayout>
    </>
  );
};

export default QualSeuEstiloDeNamoro;

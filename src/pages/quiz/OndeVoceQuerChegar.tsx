import QuizLayout from "@/components/QuizLayout";
import { QuizQuestion } from "@/components/QuizAnswerOption";
import QuizFAQ from "@/components/QuizFAQ";
import AdSenseBlock from "@/components/AdSenseBlock";
import { Helmet } from "react-helmet";

const OndeVoceQuerChegar = () => {
  const options = [
    { emoji: "🏡", text: "Morando junto, talvez com pets e plantas" },
    { emoji: "✈️", text: "Viajando juntos pelo mundo, explorando novos lugares" },
    { emoji: "💼", text: "Crescendo profissionalmente lado a lado" },
    { emoji: "👶", text: "Planejando família — sim, já pensando nisso!" },
    { emoji: "🎭", text: "Ainda descobrindo, sem pressa, só curtindo o momento" },
  ];

  const faqItems = [
    {
      question: "Por que devo pensar no futuro tão cedo?",
      answer: "Porque relacionamentos saudáveis exigem alinhamento de metas. Saber o que cada um busca evita frustrações e poupa tempo. Não é pressa, é intenção."
    },
    {
      question: "E se eu ainda não souber o que quero?",
      answer: "Tudo bem! Escolha a opção que mais parece um 'talvez'. Mesmo indecisos têm preferências — e o sistema ajusta conforme você evolui."
    },
    {
      question: "O site força relacionamentos sérios?",
      answer: "De jeito nenhum! Respeitamos todos os ritmos: casual, livre, sério ou aberto. O importante é que você encontre alguém no mesmo patamar."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Onde Você Quer Chegar? | Quiz de Personalidade - Beijo da Rua</title>
        <meta name="description" content="Descubra suas expectativas para o futuro do relacionamento e conecte-se com pessoas que compartilham da mesma visão de futuro." />
      </Helmet>

      <QuizLayout 
        title="Onde Você Quer Chegar?"
        description="Passo 4 de 5"
        progress={80}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Você imagina seu relacionamento daqui a 2 anos como…?
          </h2>

          <AdSenseBlock />

          <QuizQuestion options={options} nextPage="/o-que-nunca-falta-no-seu-dia" />

          <div className="prose prose-lg max-w-none mt-12">
            <p className="text-foreground/80">
              Sonhos moldam caminhos. Saber onde você quer chegar é essencial para evitar relacionamentos que vão em direções opostas. Alguns sonham com família, casa própria e raízes. Outros querem liberdade, viagens e crescimento individual. Ambos são válidos — mas precisam ser alinhados com o parceiro. Se você deseja morar junto e o outro nem pensa nisso, o conflito é questão de tempo. Por isso, essa pergunta não é pressão — é clareza. Escolha o futuro que faz sentido para você hoje. Assim, conectamos você a quem compartilha da mesma visão — ou pelo menos respeita ela.
            </p>
          </div>

          <AdSenseBlock />

          <QuizFAQ items={faqItems} pageUrl="/onde-voce-quer-chegar-no-relacionamento" />
        </div>
      </QuizLayout>
    </>
  );
};

export default OndeVoceQuerChegar;

import AppReviewPage from "@/components/AppReviewPage";
import innerCircleLogo from "@/assets/inner-circle-logo.jpeg";

const InnerCircle = () => {
  return (
    <AppReviewPage
      title="Inner Circle"
      seoTitle="Inner Circle Vale a Pena? Review Completo"
      description="Análise do Inner Circle, app de namoro com comunidade curada, foco em qualidade e público com estilo de vida ambicioso."
      canonical="https://beijodarua.com.br/apps/inner-circle/"
      keywords="inner circle brasil, inner circle vale a pena, inner circle como funciona, app de namoro seletivo"
      logo={innerCircleLogo}
      rating="4.5"
      audience="Solteiros exigentes e comunidade curada"
      category="Seletivo e premium"
      heroSummary="O Inner Circle se posiciona como um app de namoro para quem prefere qualidade a volume. Em vez de abrir a porta para qualquer dinâmica, ele vende a ideia de comunidade curada, estilo de vida interessante e conexões entre pessoas que circulam em ambientes parecidos."
      officialUrl="https://www.theinnercircle.co/"
      officialLabel="Conhecer o Inner Circle"
      intro={[
        "No material oficial, o Inner Circle se descreve como uma comunidade global e curada para pessoas ambiciosas, interessantes e que desejam se relacionar com gente do mesmo círculo social e cultural. A marca usa fortemente o discurso de curadoria, eventos e qualidade do público para se diferenciar de apps que priorizam quantidade de matches acima de tudo.",
        "Outro ponto importante é o modelo de entrada. O site fala em tornar-se membro ou entrar como convidado, além de destacar convites para eventos e uma comunidade mais selecionada. Para quem procura no Google se Inner Circle vale a pena, a resposta geralmente passa por um fator central: você prefere um ambiente mais filtrado, com menos volume e maior sensação de exclusividade?",
      ]}
      stats={[
        {
          label: "Posicionamento",
          value: "Curado",
          description: "A proposta principal é reunir uma comunidade selecionada, com foco em qualidade e afinidade de estilo de vida.",
        },
        {
          label: "Modelo",
          value: "Membro + convidado",
          description: "O site diferencia entrada como membro ou guest, reforçando a ideia de acesso progressivo à comunidade.",
        },
        {
          label: "Experiência",
          value: "Eventos",
          description: "Além do digital, a marca valoriza encontros e convites para experiências presenciais selecionadas.",
        },
        {
          label: "Âmbito",
          value: "Global",
          description: "O Inner Circle se apresenta como comunidade internacional para pessoas com estilo de vida mais cosmopolita.",
        },
      ]}
      highlights={[
        {
          title: "Comunidade curada",
          description: "O Inner Circle tenta reduzir o ruído comum dos apps tradicionais com uma triagem mais forte e comunicação centrada em qualidade.",
          icon: "shield",
        },
        {
          title: "Público com estilo de vida alinhado",
          description: "A plataforma mira pessoas ambiciosas, socialmente ativas e interessadas em conhecer alguém do mesmo universo de hábitos e interesses.",
          icon: "users",
        },
        {
          title: "Eventos e vida offline",
          description: "A presença de eventos reforça a ideia de que o app não quer prender o usuário só no chat, mas também criar encontros reais.",
          icon: "zap",
        },
        {
          title: "Marca premium e seletiva",
          description: "Para quem busca um app de namoro seletivo, o Inner Circle se diferencia pelo discurso de exclusividade e curadoria.",
          icon: "trending",
        },
      ]}
      strengths={[
        "Boa opção para quem prefere um ambiente mais filtrado e menos caótico do que os apps massificados.",
        "O discurso de qualidade do público atrai usuários que valorizam contexto, estilo de vida e apresentação pessoal.",
        "Eventos e comunidade adicionam profundidade à experiência além do simples match por foto.",
        "Pode funcionar muito bem para quem gosta de proposta premium e seleção mais forte de perfis.",
      ]}
      weaknesses={[
        "A seletividade pode significar base menor e entrada menos imediata dependendo da sua região.",
        "Não é ideal para quem quer velocidade máxima, conversa casual ou grande volume de opções por dia.",
        "Em cidades menores, o valor da curadoria pode ser limitado se a densidade local ainda for baixa.",
      ]}
      bestFor={[
        {
          title: "Quem prefere qualidade a quantidade",
          description: "Se você se frustra com apps cheios de perfis pouco compatíveis, o Inner Circle pode fazer mais sentido.",
        },
        {
          title: "Pessoas com rotina social ativa",
          description: "Usuários que gostam de eventos, networking, restaurantes, viagens e vida urbana tendem a conversar melhor com a proposta da marca.",
        },
        {
          title: "Solteiros que buscam ambiente premium",
          description: "Para quem procura um app de namoro seletivo ou mais exclusivo, o Inner Circle entra naturalmente no radar.",
        },
        {
          title: "Quem quer conexão com mais contexto",
          description: "O foco em estilo de vida e comunidade ajuda quem valoriza afinidade cultural e social além da aparência.",
        },
      ]}
      tips={[
        "Monte um perfil mais refinado, com boas fotos e descrição objetiva do seu estilo de vida, porque esse detalhe pesa bastante aqui.",
        "Seja claro sobre seus interesses, rotina e energia social; isso ajuda a atrair pessoas realmente compatíveis com o seu círculo.",
        "Não trate o app como swipe genérico: no Inner Circle, conversa contextualizada e boa apresentação costumam render mais.",
        "Se houver eventos disponíveis na sua região, use isso como diferencial para transformar match em encontro real mais rápido.",
      ]}
      closingTitle="Inner Circle vale a pena?"
      closingText="Se você busca um app de namoro mais seletivo, com proposta premium, comunidade curada e menor tolerância a matches aleatórios, o Inner Circle vale a pena considerar. Já para quem quer volume, rapidez e zero filtro, outras opções do catálogo provavelmente funcionarão melhor."
    />
  );
};

export default InnerCircle;

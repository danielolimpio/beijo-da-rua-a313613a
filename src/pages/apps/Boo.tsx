import AppReviewPage from "@/components/AppReviewPage";
import booLogo from "@/assets/boo-logo.jpg";

const Boo = () => {
  return (
    <AppReviewPage
      title="Boo"
      seoTitle="Boo Vale a Pena? Review do App de Namoro por Personalidade MBTI"
      description="Análise completa do Boo, app de namoro e amizade que conecta pessoas pela compatibilidade MBTI, signos e interesses, com mais de 50 milhões de downloads."
      canonical="https://beijodarua.com.br/apps/boo/"
      keywords="boo app, boo vale a pena, boo como funciona, app namoro mbti, app namoro personalidade, app namoro signo, boo world, app conhecer pessoas por interesses"
      logo={booLogo}
      rating="4.5"
      audience="Jovens fãs de personalidade e MBTI"
      category="Personalidade"
      heroSummary="O Boo (boo.world) é um app de namoro e amizade que ficou famoso por usar tipos de personalidade MBTI, signos e interesses para conectar pessoas com afinidades reais. Com mais de 50 milhões de downloads, virou queridinho de quem cansou do swipe vazio e quer conhecer gente por compatibilidade de verdade."
      officialUrl="https://boo.world/"
      officialLabel="Conhecer o Boo"
      intro={[
        "O Boo se posiciona como o app de namoro por personalidade. A proposta é simples e poderosa: em vez de fazer match só pela foto, ele cruza seu tipo MBTI (como INFP, ENTJ, ISTP), seu signo, seus interesses e seus 'universos' favoritos para mostrar pessoas que realmente combinam com você. Por isso virou referência quando o assunto é app de namoro por compatibilidade.",
        "Além do namoro, o Boo também funciona como rede social leve, com universos temáticos (música, filmes, anime, gaming, livros, psicologia e dezenas de outros), perguntas do dia, posts da comunidade e um Database de Personalidades enorme. Quem pesquisa se Boo vale a pena geralmente descobre um app mais profundo, divertido e menos superficial que os tradicionais.",
      ]}
      stats={[
        {
          label: "Downloads",
          value: "50M+",
          description: "Comunidade global ativa com forte presença entre jovens fãs de MBTI e personalidade.",
        },
        {
          label: "Match",
          value: "MBTI + signo",
          description: "Compatibilidade calculada a partir de tipos de personalidade, signos e interesses em comum.",
        },
        {
          label: "Universos",
          value: "Centenas",
          description: "Comunidades temáticas como música, anime, livros, gaming e psicologia para conectar pessoas.",
        },
        {
          label: "Uso",
          value: "Namoro + amizade",
          description: "Funciona tanto para encontrar relacionamento quanto para fazer amizades por afinidade.",
        },
      ]}
      highlights={[
        {
          title: "Match por personalidade MBTI",
          description: "Para fãs de testes de personalidade, o Boo é o app de namoro MBTI mais completo, mostrando compatibilidade entre tipos.",
          icon: "heart",
        },
        {
          title: "Universos de interesses",
          description: "Comunidades temáticas com milhões de almas reúnem pessoas que curtem música, anime, gaming, livros e muito mais.",
          icon: "users",
        },
        {
          title: "Database de Personalidades enorme",
          description: "Catálogo gigante de personagens, celebridades e figuras públicas com seus tipos MBTI para você comparar.",
          icon: "trending",
        },
        {
          title: "Perfil rico e divertido",
          description: "Mostra MBTI, signo, eneagrama, interesses, universos e perguntas respondidas, criando contexto antes do match.",
          icon: "zap",
        },
      ]}
      strengths={[
        "Excelente para conhecer pessoas por compatibilidade real, não apenas por foto.",
        "Comunidade jovem, engajada e bem ativa, com milhões de usuários falando português.",
        "Funciona tanto para namoro quanto para amizade, ampliando muito o uso do app.",
        "Universos e perguntas do dia tornam a experiência mais divertida e menos pressionada que apps de swipe puro.",
      ]}
      weaknesses={[
        "Quem não curte MBTI ou signos pode achar a proposta limitada.",
        "Recursos premium são necessários para destravar filtros mais avançados de compatibilidade.",
        "Por ter foco grande em comunidade e amizade, nem todos no app estão buscando relacionamento.",
      ]}
      bestFor={[
        {
          title: "Fãs de MBTI e personalidade",
          description: "Se você adora descobrir tipos, eneagramas e signos, o Boo é praticamente feito para você.",
        },
        {
          title: "Jovens que querem afinidade real",
          description: "Ótimo para a Geração Z e millennials que cansaram do swipe vazio e querem conexões com mais contexto.",
        },
        {
          title: "Quem quer namoro e amizade",
          description: "App híbrido que funciona muito bem para quem está aberto tanto a relacionamento quanto a novas amizades por interesse.",
        },
        {
          title: "Pessoas com hobbies fortes",
          description: "Os universos temáticos brilham para quem se identifica muito com música, anime, gaming, livros, arte e nichos parecidos.",
        },
      ]}
      tips={[
        "Faça o teste de personalidade dentro do app com calma; quanto mais preciso seu MBTI, melhores os matches.",
        "Entre nos universos que mais combinam com você e participe das perguntas do dia: visibilidade aumenta muito.",
        "Capriche no perfil mostrando interesses reais, hobbies e estilo de vida, não só foto bonita.",
        "Use a compatibilidade MBTI como ponto de partida da conversa; quebra o gelo de forma natural e original.",
      ]}
      closingTitle="Boo vale a pena?"
      closingText="Se você quer um app de namoro por personalidade, com match baseado em MBTI, signo e interesses reais, o Boo é uma das opções mais interessantes do mercado. Comunidade grande, divertida e com mais profundidade que apps de swipe tradicional, ele agrada principalmente quem busca conexão com afinidade verdadeira."
    />
  );
};

export default Boo;

import AppReviewPage from "@/components/AppReviewPage";
import feeldLogo from "@/assets/feeld-logo.png";

const Feeld = () => {
  return (
    <AppReviewPage
      title="Feeld"
      seoTitle="Feeld Vale a Pena? Review do App de Namoro Aberto e Inclusivo"
      description="Análise completa do Feeld, app de namoro aberto, inclusivo e sem julgamentos para quem busca conexões autênticas, relacionamentos não convencionais e exploração de desejos."
      canonical="https://beijodarua.com.br/apps/feeld/"
      keywords="feeld, feeld vale a pena, feeld como funciona, app namoro aberto, app relacionamento poliamoroso, app namoro inclusivo, app casais e solteiros"
      logo={feeldLogo}
      rating="4.4"
      audience="Solteiros, casais e pessoas curiosas"
      category="Aberto e Inclusivo"
      heroSummary="O Feeld é um app de namoro aberto e inclusivo, criado para quem quer conexões mais honestas, sem encaixar em modelos engessados. A marca se destaca por dar espaço a solteiros, casais, relacionamentos não convencionais e exploração de desejos com respeito, segurança e zero julgamento."
      officialUrl="https://feeld.co/"
      officialLabel="Conhecer o Feeld"
      intro={[
        "O Feeld se descreve como um app de namoro feito para conexões mais significativas, onde desejos podem ser expressos sem máscaras. Diferente de plataformas tradicionais, ele acolhe solteiros, casais, relacionamentos abertos, poliamor e diferentes orientações de gênero e sexualidade, com uma comunidade global que já passou de milhões de usuários ativos.",
        "Para quem pesquisa se Feeld vale a pena, o ponto central é o ambiente. O app oferece opções amplas de identidade de gênero e orientação, perfis personalizáveis com desejos e interesses, modo casal vinculado e ferramentas de privacidade pensadas para quem quer explorar com discrição. É uma das principais referências quando o assunto é app de relacionamento aberto, poliamoroso e inclusivo.",
      ]}
      stats={[
        {
          label: "Posicionamento",
          value: "Inclusivo",
          description: "App pensado para todas as identidades, orientações e formatos de relacionamento sem julgamento.",
        },
        {
          label: "Perfis",
          value: "Solo + casal",
          description: "Permite vincular contas de casais e exibir o relacionamento de forma transparente para outros usuários.",
        },
        {
          label: "Identidades",
          value: "20+ opções",
          description: "Ampla gama de opções de gênero e orientação para representar quem você realmente é.",
        },
        {
          label: "Privacidade",
          value: "Avançada",
          description: "Recursos como modo discreto, controle de visibilidade e proteção de fotos privadas.",
        },
      ]}
      highlights={[
        {
          title: "Espaço para relacionamentos não convencionais",
          description: "Ideal para quem busca um app de relacionamento aberto, poliamoroso ou para casais explorando juntos com transparência.",
          icon: "heart",
        },
        {
          title: "Comunidade global e diversa",
          description: "Forte presença em grandes capitais ao redor do mundo e uma comunidade ativa que valoriza autenticidade e respeito.",
          icon: "globe",
        },
        {
          title: "Ferramentas de privacidade robustas",
          description: "Controle total sobre quem vê seu perfil, fotos privadas com permissão e modo discreto para mais segurança.",
          icon: "shield",
        },
        {
          title: "Match com base em desejos reais",
          description: "Você define interesses, curiosidades e desejos no perfil, o que ajuda a encontrar pessoas alinhadas de verdade.",
          icon: "zap",
        },
      ]}
      strengths={[
        "Um dos apps mais inclusivos do mercado, com excelente acolhimento para LGBTQIA+, casais e relacionamentos não monogâmicos.",
        "Permite expressar desejos e interesses de forma honesta sem o estigma típico de outros apps.",
        "Ferramentas de privacidade ajudam quem precisa de discrição, sem abrir mão da experiência completa.",
        "Comunidade engajada e madura, com perfis geralmente mais detalhados e conversas mais ricas.",
      ]}
      weaknesses={[
        "Base no Brasil ainda é mais concentrada em capitais, o que pode limitar opções no interior.",
        "Recursos premium (Majestic) são necessários para liberar todo o potencial do app.",
        "Não é o app indicado para quem busca apenas namoro tradicional sem nenhuma abertura.",
      ]}
      bestFor={[
        {
          title: "Casais que querem explorar juntos",
          description: "O modo casal e a transparência sobre relacionamentos abertos fazem do Feeld referência para essa proposta.",
        },
        {
          title: "Solteiros curiosos e abertos",
          description: "Perfeito para quem quer um ambiente onde desejos e interesses podem ser expressos sem medo de julgamento.",
        },
        {
          title: "Comunidade LGBTQIA+",
          description: "Com mais de 20 opções de gênero e orientação, é um dos apps mais acolhedores para todas as identidades.",
        },
        {
          title: "Poliamoristas e não monogâmicos",
          description: "App pensado desde o início para relacionamentos não convencionais, com ferramentas dedicadas a esse público.",
        },
      ]}
      tips={[
        "Seja claro no perfil sobre o que você procura: o Feeld funciona melhor com honestidade total sobre desejos e formato de relacionamento.",
        "Use a seção de desejos e interesses para mostrar curiosidades reais; isso aumenta muito a qualidade dos matches.",
        "Aproveite os recursos de privacidade desde o início, definindo quem pode ver suas fotos privadas e seu perfil.",
        "Respeito é a regra principal da comunidade; conversas educadas e curiosas rendem muito mais que abordagens diretas demais.",
      ]}
      closingTitle="Feeld vale a pena?"
      closingText="Se você busca um app de namoro aberto, inclusivo e sem julgamentos, com espaço para casais, poliamoristas, comunidade LGBTQIA+ e solteiros curiosos, o Feeld é uma das melhores opções do mercado. Para quem quer apenas namoro tradicional, outras plataformas do catálogo do Beijo da Rua se encaixam melhor."
    />
  );
};

export default Feeld;

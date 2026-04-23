import AppReviewPage from "@/components/AppReviewPage";
import umatchLogo from "@/assets/umatch-logo.png";

const Umatch = () => {
  return (
    <AppReviewPage
      title="Umatch"
      seoTitle="Umatch: Vale a Pena para Universitários?"
      description="A plataforma brasileira focada em namoro, amizade e conexões entre universitários verificados."
      canonical="https://beijodarua.com.br/apps/umatch/"
      keywords="umatch brasil, app universitarios namoro, umatch vale a pena, app de relacionamento faculdade"
      logo={umatchLogo}
      rating="4.7"
      audience="Universitários verificados"
      category="Faculdade e afinidade"
      heroSummary="O Umatch é um app brasileiro com proposta muito clara: conectar estudantes universitários que vivem a mesma fase de vida. Isso cria um filtro natural de contexto, rotina e afinidade que poucos concorrentes conseguem oferecer."
      officialUrl="https://www.umatch.com.br/"
      officialLabel="Conhecer o Umatch"
      intro={[
        "O grande diferencial do Umatch é a exclusividade para universitários verificados. Em vez de abrir a plataforma para qualquer público, o serviço usa o ambiente acadêmico como filtro de entrada e como base de compatibilidade. Isso torna a experiência mais contextualizada para quem vive semestre puxado, estágio, festas universitárias, grupos de estudo e mudanças intensas de rotina.",
        "No site oficial, a marca enfatiza exatamente esse ponto: quando as pessoas estão na mesma fase da vida, as conexões tendem a ser mais autênticas. O Umatch também reforça moderação, políticas claras e um ambiente mais seguro para encontros, amizades e conversas que façam sentido dentro do universo universitário.",
      ]}
      stats={[
        {
          label: "Público-alvo",
          value: "Campus",
          description: "Voltado para estudantes universitários, com linguagem e dinâmica adaptadas a essa fase.",
        },
        {
          label: "Verificação",
          value: "Estudantes",
          description: "A plataforma destaca exclusividade para usuários com vínculo universitário confirmado.",
        },
        {
          label: "App Store",
          value: "4.7",
          description: "Nas referências públicas, o app mantém boa percepção entre usuários da categoria estilo de vida.",
        },
        {
          label: "Objetivo",
          value: "Namoro + amigos",
          description: "A proposta mistura crushes, amizades e conexões sociais dentro da universidade.",
        },
      ]}
      highlights={[
        {
          title: "Filtro por fase de vida",
          description: "Estar no mesmo momento universitário reduz ruído e aumenta a chance de papo render de forma natural, com rotina parecida dos dois lados.",
          icon: "users",
        },
        {
          title: "Ambiente exclusivo",
          description: "A verificação de estudantes cria uma sensação de comunidade fechada e torna o ecossistema mais coerente com o público-alvo.",
          icon: "shield",
        },
        {
          title: "Mais afinidade contextual",
          description: "Faculdade, estágio, provas, centros acadêmicos e eventos viram ganchos reais para conversa e encontros.",
          icon: "heart",
        },
        {
          title: "Marca nacional e nichada",
          description: "Por ser brasileira e extremamente focada, a proposta fala diretamente com a vivência local de quem está na universidade.",
          icon: "trending",
        },
      ]}
      strengths={[
        "Excelente proposta para quem quer conhecer pessoas com rotina e contexto muito parecidos.",
        "Ambiente mais seguro e coerente graças à exclusividade para universitários verificados.",
        "Funciona bem tanto para crush quanto para ampliar círculo social dentro da faculdade.",
        "A experiência tende a ser mais leve para quem prefere afinidade natural em vez de exposição massiva.",
      ]}
      weaknesses={[
        "É um app de nicho, então sua utilidade cai bastante para quem já saiu da vida universitária.",
        "A base de usuários depende da força da plataforma na sua universidade, cidade ou região.",
        "Para quem busca relacionamento com pessoas fora do ambiente acadêmico, outras opções podem ser mais amplas.",
      ]}
      bestFor={[
        {
          title: "Universitários que querem conhecer gente da mesma fase",
          description: "Se você acha importante dividir rotina, desafios e interesses parecidos, o Umatch faz muito sentido.",
        },
        {
          title: "Calouros e estudantes em expansão social",
          description: "É útil para quem chegou agora na faculdade e quer construir conexões românticas e sociais ao mesmo tempo.",
        },
        {
          title: "Pessoas que preferem ambientes mais filtrados",
          description: "O recorte universitário reduz ruído e pode passar mais confiança do que apps totalmente abertos.",
        },
        {
          title: "Quem quer namoro sem sair do seu ecossistema",
          description: "A proximidade geográfica e acadêmica costuma facilitar marcar encontros, estudar junto e manter contato frequente.",
        },
      ]}
      tips={[
        "Use fotos que transmitam vida real no campus, eventos, hobbies e rotina social — isso conversa melhor com a proposta do app.",
        "Descreva curso, interesses e estilo de vida com naturalidade; esses detalhes ajudam muito na afinidade inicial.",
        "Puxe assunto a partir de faculdade, área de estudo, festas, estágios ou lugares em comum — o contexto é um dos maiores ativos do Umatch.",
        "Se quiser mais resultados, entre com consistência nos horários em que estudantes costumam estar ativos, como fim de tarde e noite.",
      ]}
      closingTitle="O Umatch compensa para universitários?"
      closingText="Se você está na faculdade e quer conhecer pessoas vivendo o mesmo momento que você, o Umatch é uma das opções mais coerentes do mercado brasileiro. Ele não tenta agradar todo mundo — e esse foco é justamente o que torna a experiência mais relevante para seu nicho."
    />
  );
};

export default Umatch;
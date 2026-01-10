import authorImage from "@/assets/team-daniel.jpg";
import authorImageMarina from "@/assets/team-marina.jpg";
import articleCover from "@/assets/article-abordar-mulher.jpg";
import articlePerfilConquistador from "@/assets/article-perfil-conquistador.jpg";
import articleCantadas from "@/assets/article-cantadas-irresistiveis.jpg";
import articleSiteRelacionamento from "@/assets/article-site-relacionamento.jpg";
import articleConvidarMulher from "@/assets/article-convidar-mulher.jpg";
import articleNervosismoPaquera from "@/assets/article-nervosismo-paquera.jpg";
import articleFrasesEfeito from "@/assets/article-frases-efeito.jpg";
import articleConexoesReais from "@/assets/article-conexoes-reais-apps.jpg";
import articleErrosFataisCharme from "@/assets/article-erros-fatais-charme.jpg";
import articleLinguagemCorporal from "@/assets/article-linguagem-corporal.jpg";
import articlePrimeiroEncontro from "@/assets/article-primeiro-encontro.jpg";
import articleAutenticoAtraente from "@/assets/article-autentico-atraente.jpg";
import articlePoderSilencio from "@/assets/article-poder-silencio.jpg";
import articleDomineEmocoes from "@/assets/article-domine-emocoes.jpg";
import articleVibeConquista from "@/assets/article-vibe-conquista.jpg";
import articleMelhoresApps2026 from "@/assets/article-melhores-apps-2026.jpg";
import articleSinaisInteresseFeminino from "@/assets/article-sinais-interesse-feminino.jpg";
import articleEscutarConquistar from "@/assets/article-escutar-conquistar.jpg";

export interface BlogArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  categoryId: string;
  categoryIds: string[]; // Múltiplas categorias para exibição em várias seções
  image: string;
  author: string;
  authorImage: string;
  date: string;
  link: string;
}

export const recentArticles: BlogArticle[] = [
  {
    id: 18,
    title: "Por Que Escutar é a Nova Forma de Conquistar Mulheres",
    excerpt: "A melhor cantada hoje é fazer ela se sentir ouvida. Descubra como a escuta genuína gera conexão mais forte que qualquer frase.",
    category: "Relacionamento",
    categoryId: "relacionamento",
    categoryIds: ["relacionamento", "conquista", "paquera", "autoestima"],
    image: articleEscutarConquistar,
    author: "Daniel Olimpio",
    authorImage: authorImage,
    date: "10 de janeiro de 2026",
    link: "/blog/posts/escutar-nova-forma-conquistar"
  },
  {
    id: 17,
    title: "Como Entender os Sinais Não Verbais de Interesse Feminino",
    excerpt: "Ela está afim? Aprenda a decifrar olhares, toques e gestos sutis que revelam interesse real — sem cair em ilusões.",
    category: "Paquera",
    categoryId: "paquera",
    categoryIds: ["paquera", "conquista", "relacionamento"],
    image: articleSinaisInteresseFeminino,
    author: "Daniel Olimpio",
    authorImage: authorImage,
    date: "7 de janeiro de 2026",
    link: "/blog/posts/sinais-interesse-feminino"
  },
  {
    id: 16,
    title: "Os Melhores Apps de Relacionamento para Cada Perfil em 2026",
    excerpt: "Do namoro sério ao flerte casual: descubra qual app combina com seus objetivos e personalidade. Guia atualizado e sem enrolação.",
    category: "Aplicativos",
    categoryId: "aplicativos",
    categoryIds: ["aplicativos", "apps-de-namoro", "relacionamento"],
    image: articleMelhoresApps2026,
    author: "Daniel Olimpio",
    authorImage: authorImage,
    date: "7 de janeiro de 2026",
    link: "/blog/posts/melhores-apps-relacionamento-2026"
  },
  {
    id: 15,
    title: "Como Criar uma Vibe de Conquista Sem Dizer uma Palavra",
    excerpt: "Sua energia atrai antes mesmo da conversa. Saiba como sua postura, estilo e atitude transmitem desejo sem esforço.",
    category: "Conquista",
    categoryId: "conquista",
    categoryIds: ["conquista", "paquera", "autoestima"],
    image: articleVibeConquista,
    author: "Daniel Olimpio",
    authorImage: authorImage,
    date: "7 de janeiro de 2026",
    link: "/blog/posts/vibe-conquista-sem-dizer-palavra"
  },
  {
    id: 14,
    title: "Domine Suas Emoções e Atraia o Tipo Certo de Mulher",
    excerpt: "Controle emocional é a base da atração madura. Entenda como equilíbrio interior atrai relacionamentos saudáveis e duradouros.",
    category: "Autoestima",
    categoryId: "autoestima",
    categoryIds: ["autoestima", "relacionamento", "conquista"],
    image: articleDomineEmocoes,
    author: "Daniel Olimpio",
    authorImage: authorImage,
    date: "6 de janeiro de 2026",
    link: "/blog/posts/domine-suas-emocoes-e-atraia"
  },
  {
    id: 13,
    title: "O Poder do Silêncio: Quando Falar Menos Conquista Mais",
    excerpt: "Menos fala, mais presença. Aprenda a usar pausas, escuta ativa e mistério para gerar curiosidade e desejo genuíno.",
    category: "Relacionamento",
    categoryId: "relacionamento",
    categoryIds: ["relacionamento", "conquista", "paquera", "autoestima"],
    image: articlePoderSilencio,
    author: "Daniel Olimpio",
    authorImage: authorImage,
    date: "5 de janeiro de 2026",
    link: "/blog/posts/o-poder-do-silencio"
  },
  {
    id: 12,
    title: "Como Ser Autêntico e Atraente ao Mesmo Tempo",
    excerpt: "Atração verdadeira vem da essência. Descubra como mostrar quem você é sem fingir — e ainda assim encantar de verdade.",
    category: "Autoestima",
    categoryId: "autoestima",
    categoryIds: ["autoestima", "conquista", "relacionamento"],
    image: articleAutenticoAtraente,
    author: "Marina Santos",
    authorImage: authorImageMarina,
    date: "4 de janeiro de 2026",
    link: "/blog/posts/como-ser-autentico-e-atraente-ao-mesmo-tempo"
  },
  {
    id: 11,
    title: "Estratégias para Ser Inesquecível no Primeiro Encontro",
    excerpt: "Deixe uma marca positiva desde o início. Dicas de comportamento, escuta e atitude para garantir um segundo encontro.",
    category: "Conquista",
    categoryId: "conquista",
    categoryIds: ["conquista", "relacionamento", "paquera"],
    image: articlePrimeiroEncontro,
    author: "Daniel Olimpio",
    authorImage: authorImage,
    date: "3 de janeiro de 2026",
    link: "/blog/posts/estrategias-primeiro-encontro"
  },
  {
    id: 10,
    title: "Linguagem Corporal Poderosa na Hora de Conquistar",
    excerpt: "Seus gestos falam mais que palavras. Aprenda postura, olhar e movimentos que transmitem segurança e atração imediata.",
    category: "Conquista",
    categoryId: "conquista",
    categoryIds: ["conquista", "paquera", "autoestima"],
    image: articleLinguagemCorporal,
    author: "Daniel Olimpio",
    authorImage: authorImage,
    date: "1 de janeiro de 2026",
    link: "/blog/posts/linguagem-corporal-poderosa-na-hora-de-conquistar"
  },
  {
    id: 9,
    title: "Erros Fatais Que Destroem Seu Charme na Primeira Impressão",
    excerpt: "Evite armadilhas comuns que afastam mulheres antes mesmo do 'oi'. Ajuste detalhes sutis e mude completamente sua energia.",
    category: "Conquista",
    categoryId: "conquista",
    categoryIds: ["conquista", "paquera", "autoestima"],
    image: articleErrosFataisCharme,
    author: "Daniel Olimpio",
    authorImage: authorImage,
    date: "13 de dezembro de 2025",
    link: "/blog/posts/erros-fatais-que-destroem-seu-charme"
  },
  {
    id: 8,
    title: "Como Criar Conexões Reais em Aplicativos de Relacionamento",
    excerpt: "Vá além do like! Saiba como manter conversas profundas e transformar matches em encontros memoráveis e relacionamentos reais.",
    category: "Apps de Namoro",
    categoryId: "apps-de-namoro",
    categoryIds: ["aplicativos", "apps-de-namoro", "conquista", "relacionamento"],
    image: articleConexoesReais,
    author: "Daniel Olimpio",
    authorImage: authorImage,
    date: "13 de dezembro de 2025",
    link: "/blog/posts/como-criar-conexoes-reais-em-apps"
  },
  {
    id: 7,
    title: "Frases de Efeito que Deixam Qualquer Mulher Interessada",
    excerpt: "Use palavras que encantam sem soar clichê. Coleção de frases inteligentes, divertidas e sedutoras para momentos certos.",
    category: "Conquista",
    categoryId: "conquista",
    categoryIds: ["conquista", "paquera"],
    image: articleFrasesEfeito,
    author: "Daniel Olimpio",
    authorImage: authorImage,
    date: "13 de dezembro de 2025",
    link: "/blog/posts/frases-de-efeito-que-deixam-mulher-interessada"
  },
  {
    id: 6,
    title: "Técnicas para Controlar o Nervosismo na Hora da Paquera",
    excerpt: "Domine a ansiedade, respire fundo e conquiste com calma. Métodos psicológicos simples para manter a serenidade diante dela.",
    category: "Conquista",
    categoryId: "conquista",
    categoryIds: ["conquista", "paquera", "autoestima"],
    image: articleNervosismoPaquera,
    author: "Daniel Olimpio",
    authorImage: authorImage,
    date: "13 de dezembro de 2025",
    link: "/blog/posts/tecnicas-controlar-nervosismo-paquera"
  },
  {
    id: 5,
    title: "Como Convidar uma Mulher para Sair Sem Parecer Desesperado",
    excerpt: "Estratégias sutis e confiantes para transformar uma conversa em encontro real. Aprenda o timing perfeito e as palavras certas.",
    category: "Conquista",
    categoryId: "conquista",
    categoryIds: ["conquista", "paquera", "relacionamento"],
    image: articleConvidarMulher,
    author: "Daniel Olimpio",
    authorImage: authorImage,
    date: "2 de dezembro de 2025",
    link: "/blog/posts/como-convidar-mulher-sair-sem-parecer-desesperado"
  },
  {
    id: 4,
    title: "Descubra Qual Site de Relacionamento Combina com Você",
    excerpt: "Responda nosso questionário exclusivo e encontre o app ou site ideal para seu estilo, objetivo e personalidade amorosa.",
    category: "Apps de Namoro",
    categoryId: "apps-de-namoro",
    categoryIds: ["aplicativos", "apps-de-namoro", "relacionamento"],
    image: articleSiteRelacionamento,
    author: "Daniel Olimpio",
    authorImage: authorImage,
    date: "1 de dezembro de 2025",
    link: "/blog/posts/descubra-qual-site-relacionamento-combina"
  },
  {
    id: 3,
    title: "Cantadas Irresistíveis que Realmente Funcionam em 2025",
    excerpt: "Frases criativas, respeitosas e eficazes para quebrar o gelo e causar boa impressão. Testadas e aprovadas por especialistas em conquista.",
    category: "Conquista",
    categoryId: "conquista",
    categoryIds: ["conquista", "paquera"],
    image: articleCantadas,
    author: "Daniel Olimpio",
    authorImage: authorImage,
    date: "23 de novembro de 2025",
    link: "/blog/posts/cantadas-irresistiveis-que-funcionam"
  },
  {
    id: 2,
    title: "Os Segredos de um Perfil Conquistador nas Redes Sociais",
    excerpt: "Descubra como criar uma presença digital que atrai olhares e desperta interesse real. Fotos, bio e atitude: tudo revelado aqui.",
    category: "Conquista",
    categoryId: "conquista",
    categoryIds: ["conquista", "aplicativos", "autoestima"],
    image: articlePerfilConquistador,
    author: "Daniel Olimpio",
    authorImage: authorImage,
    date: "22 de novembro de 2025",
    link: "/blog/posts/os-segredos-de-um-perfil-conquistador"
  },
  {
    id: 1,
    title: "Como Abordar uma Mulher com Confiança e Naturalidade",
    excerpt: "Aprenda técnicas práticas para iniciar conversas sem medo e conquistar com autenticidade. Dicas que funcionam na rua, em eventos e até online.",
    category: "Conquista",
    categoryId: "conquista",
    categoryIds: ["conquista", "paquera", "autoestima"],
    image: articleCover,
    author: "Daniel Olimpio",
    authorImage: authorImage,
    date: "21 de novembro de 2025",
    link: "/blog/posts/como-abordar-uma-mulher-com-confianca"
  }
];

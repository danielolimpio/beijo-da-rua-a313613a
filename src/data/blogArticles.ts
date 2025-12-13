import authorImage from "@/assets/team-daniel.jpg";
import articleCover from "@/assets/article-abordar-mulher.jpg";
import articlePerfilConquistador from "@/assets/article-perfil-conquistador.jpg";
import articleCantadas from "@/assets/article-cantadas-irresistiveis.jpg";
import articleSiteRelacionamento from "@/assets/article-site-relacionamento.jpg";
import articleConvidarMulher from "@/assets/article-convidar-mulher.jpg";
import articleNervosismoPaquera from "@/assets/article-nervosismo-paquera.jpg";

export interface BlogArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  categoryId: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  link: string;
}

export const recentArticles: BlogArticle[] = [
  {
    id: 6,
    title: "Técnicas para Controlar o Nervosismo na Hora da Paquera",
    excerpt: "Domine a ansiedade, respire fundo e conquiste com calma. Métodos psicológicos simples para manter a serenidade diante dela.",
    category: "Conquista",
    categoryId: "conquista",
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
    image: articleCover,
    author: "Daniel Olimpio",
    authorImage: authorImage,
    date: "21 de novembro de 2025",
    link: "/blog/posts/como-abordar-uma-mulher-com-confianca"
  }
];

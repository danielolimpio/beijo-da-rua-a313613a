import authorImage from "@/assets/team-daniel.jpg";
import articleCover from "@/assets/article-abordar-mulher.jpg";
import articlePerfilConquistador from "@/assets/article-perfil-conquistador.jpg";
import articleCantadas from "@/assets/article-cantadas-irresistiveis.jpg";

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

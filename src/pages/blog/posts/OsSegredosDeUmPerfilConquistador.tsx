import { useState } from "react";
import { Helmet } from "react-helmet";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/BlogSidebar";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Facebook, 
  Twitter, 
  Share2, 
  Globe, 
  Camera,
  MessageCircle,
  Heart,
  CheckCircle,
  XCircle,
  Instagram,
  Linkedin,
  Eye,
  Sparkles,
  Clock
} from "lucide-react";
import articleCover from "@/assets/article-perfil-conquistador.jpg";
import authorImage from "@/assets/team-daniel.jpg";
import StructuredData from "@/components/StructuredData";
import { getArticleSchema } from "@/lib/structuredData";
import { 
  TopOfPageAd, 
  UnderPageTitleAd, 
  UnderFirstParagraphAd,
  UnderSecondParagraphAd,
  MidContentAd, 
  LongContentAd,
  LongerContentAd,
  LongestContentAd,
  InContent5Ad, 
  BottomOfPageAd 
} from "@/components/EzoicAd";

const OsSegredosDeUmPerfilConquistador = () => {
  const [showFullBio, setShowFullBio] = useState(false);
  const shareUrl = "https://beijodarua.com.br/blog/posts/os-segredos-de-um-perfil-conquistador";
  const shareTitle = "Os Segredos de um Perfil Conquistador nas Redes Sociais";

  const articleData = getArticleSchema({
    title: shareTitle,
    description: "Descubra como criar uma presença digital que atrai olhares e desperta interesse real. Fotos, bio e atitude: tudo revelado aqui.",
    author: "Daniel Olimpio",
    datePublished: "2025-11-22",
    dateModified: "2025-11-22",
    image: "https://beijodarua.com.br" + articleCover,
    url: shareUrl,
    category: "Conquista"
  });

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    
    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
      whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <>
      <StructuredData data={articleData} />
      <Helmet>
        <title>Os Segredos de um Perfil Conquistador nas Redes Sociais | Beijo da Rua</title>
        <meta name="description" content="Descubra como criar uma presença digital que atrai olhares e desperta interesse real. Fotos, bio e atitude: tudo revelado aqui." />
        <meta property="og:title" content="Os Segredos de um Perfil Conquistador nas Redes Sociais" />
        <meta property="og:description" content="Descubra como criar uma presença digital que atrai olhares e desperta interesse real. Fotos, bio e atitude: tudo revelado aqui." />
        <meta property="og:image" content={articleCover} />
        <meta property="og:url" content={shareUrl} />
        <link rel="canonical" href={shareUrl} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Os Segredos de um Perfil Conquistador nas Redes Sociais",
            "description": "Descubra como criar uma presença digital que atrai olhares e desperta interesse real. Fotos, bio e atitude: tudo revelado aqui.",
            "image": articleCover,
            "author": {
              "@type": "Person",
              "name": "Daniel Olimpio"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Beijo da Rua",
              "logo": {
                "@type": "ImageObject",
                "url": "https://beijodarua.com.br/logo.png"
              }
            },
            "datePublished": "2025-11-22"
          })}
        </script>
      </Helmet>

      {/* Top of Page Ad */}
      <TopOfPageAd />

      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
        <DynamicBreadcrumb />
        
        <main className="container mx-auto px-4 pb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <article className="flex-1 max-w-4xl">
              {/* Article Header */}
              <header className="mb-8">
                <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">
                  Conquista
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                  Os Segredos de um Perfil Conquistador nas Redes Sociais
                </h1>
                
                <p className="text-xl text-muted-foreground mb-6">
                  Descubra como criar uma presença digital que atrai olhares e desperta interesse real. Fotos, bio e atitude: tudo revelado aqui.
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={authorImage} 
                    alt="Daniel Olimpio" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">Daniel Olimpio</p>
                    <p className="text-sm text-muted-foreground">22 de novembro de 2025 • 12 min de leitura</p>
                  </div>
                </div>
              </header>

              {/* Under Page Title Ad */}
              <UnderPageTitleAd />

              {/* Article Cover Image */}
              <div className="mb-8 rounded-2xl overflow-hidden">
                <img 
                  src={articleCover} 
                  alt="Os Segredos de um Perfil Conquistador nas Redes Sociais" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 text-lg leading-relaxed">
                  Você já parou para pensar que, antes mesmo de dizer "oi", seu perfil nas redes sociais já está falando por você?
                </p>

                {/* Under First Paragraph Ad */}
                <UnderFirstParagraphAd />

                <p className="mb-6 leading-relaxed">
                  Em um mundo onde o primeiro encontro muitas vezes começa com um swipe ou uma olhada rápida no Instagram, sua presença digital é seu cartão de visitas emocional. E, infelizmente, muitos homens — mesmo os mais interessantes, simpáticos e com muito a oferecer — perdem oportunidades antes mesmo de começar, por conta de fotos genéricas, bio vazia ou uma energia que não transmite quem realmente são.
                </p>

                {/* Under Second Paragraph Ad */}
                <UnderSecondParagraphAd />

                <p className="mb-8 leading-relaxed">
                  O problema não é a falta de "sorte". É a falta de intencionalidade na construção da imagem digital.
                </p>

                <Card className="mb-8 border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
                  <CardContent className="p-6">
                    <p className="text-lg font-medium mb-2">
                      💡 Neste artigo, você vai descobrir
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Os segredos de um perfil conquistador nas redes sociais — não no sentido de manipular ou fingir, mas de atrair olhares e despertar interesse real por meio de fotos autênticas, uma bio que convida à conversa e uma atitude alinhada com seus valores.
                    </p>
                  </CardContent>
                </Card>

                <p className="mb-8 leading-relaxed">
                  Seja no Tinder, no Instagram ou até no LinkedIn (sim, relacionamentos também nascem por lá!), o que você compartilha — e como compartilha — faz toda a diferença.
                </p>

                <p className="mb-8 leading-relaxed">
                  Vamos desmontar mitos, revelar estratégias comprovadas e mostrar como transformar seu perfil em um convite irresistível para uma conexão verdadeira.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                  <Eye className="w-8 h-8 text-primary" />
                  Por Que Seu Perfil Digital Pode Estar Afugentando Pessoas
                </h2>

                <p className="mb-6 leading-relaxed">
                  Muitos ainda acreditam que, para atrair, basta postar fotos de academia, viagens exóticas ou drinks em rooftop.
                </p>

                <p className="mb-6 leading-relaxed">
                  Mas a realidade é outra.
                </p>

                <p className="mb-8 leading-relaxed">
                  Um estudo do Instituto Locomotiva (2024) mostrou que <strong>78% das mulheres brasileiras entre 18 e 35 anos</strong> dizem avaliar o perfil de um homem nas redes sociais antes de aceitar um encontro — e o que mais as afasta não é a ausência de beleza, mas a <strong>falta de personalidade, autenticidade ou sinais de imaturidade emocional</strong>.
                </p>

                <Card className="mb-8 bg-destructive/5 border-destructive/20">
                  <CardContent className="p-6">
                    <p className="font-semibold mb-4 text-lg flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-destructive" />
                      O que afasta mulheres:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Fotos com outras mulheres (mesmo amigas)</li>
                      <li>• Textos agressivos ou irônicos demais</li>
                      <li>• Excesso de poses de "durão"</li>
                      <li>• Perfil vazio ou desatualizado</li>
                    </ul>
                  </CardContent>
                </Card>

                <p className="mb-8 leading-relaxed">
                  O cérebro humano, ao analisar um perfil, busca pistas sobre:
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                      <p className="font-semibold">Segurança emocional</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                      <p className="font-semibold">Capacidade de conexão</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
                      <p className="font-semibold">Estilo de vida compatível</p>
                    </CardContent>
                  </Card>
                </div>

                <p className="mb-8 leading-relaxed">
                  Se seu perfil não entrega isso — mesmo que você seja incrível na vida real —, a primeira impressão já está comprometida.
                </p>

                <Card className="mb-8 border-l-4 border-l-green-500 bg-green-50/50 dark:bg-green-950/20">
                  <CardContent className="p-6">
                    <p className="text-lg font-semibold text-green-700 dark:text-green-400">
                      ✅ A boa notícia? Você pode reescrever essa narrativa. Hoje.
                    </p>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-primary" />
                  Os Segredos: Além da Aparência
                </h2>

                <p className="mb-6 leading-relaxed">
                  Muitos confundem "perfil conquistador" com "perfil perfeito". Nada mais equivocado.
                </p>

                <p className="mb-8 leading-relaxed">
                  <strong>Pessoas reais são atraídas por pessoas reais.</strong>
                </p>

                <p className="mb-6 leading-relaxed">
                  O verdadeiro segredo não está em parecer inatingível, mas em parecer acessível, interessante e emocionalmente disponível.
                </p>

                <p className="mb-6 leading-relaxed">
                  Isso se constrói com três pilares:
                </p>

                <div className="space-y-4 mb-8">
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <p className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <Camera className="w-5 h-5 text-primary" />
                        Fotos que contam uma história
                      </p>
                      <p className="text-muted-foreground">(não só exibem um corpo)</p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <p className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <MessageCircle className="w-5 h-5 text-primary" />
                        Bio que convida à curiosidade
                      </p>
                      <p className="text-muted-foreground">(não só lista hobbies)</p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <p className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        Atitude digital coerente
                      </p>
                      <p className="text-muted-foreground">(seus comentários, likes e stories também falam)</p>
                    </CardContent>
                  </Card>
                </div>

                <p className="mb-8 leading-relaxed">
                  Vamos destrinchar cada um — com exemplos práticos, erros a evitar e dicas que funcionam de verdade no cenário brasileiro atual.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                  <Camera className="w-8 h-8 text-primary" />
                  Como Escolher as Fotos Certas
                </h2>

                <Card className="mb-8 bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <p className="flex items-center gap-2 font-semibold mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Sete segundos decidem tudo
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Pesquisas em neurociência mostram que levamos cerca de sete segundos para formar uma primeira impressão — e nas redes sociais, esse tempo é ainda menor.
                    </p>
                  </CardContent>
                </Card>

                <p className="mb-8 leading-relaxed">
                  Mas não se trata de "ter o melhor rosto". Trata-se de <strong>transmitir energia</strong>.
                </p>

                <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
                  ✅ Fotos que funcionam (e por quê)
                </h3>

                <div className="space-y-4 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <p className="font-semibold mb-2">📸 Foto de rosto clara e natural</p>
                      <p className="text-muted-foreground">
                        Sem óculos escuros, sem chapéu, com fundo simples. Sorriso suave — não forçado. Isso transmite abertura e confiança.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <p className="font-semibold mb-2">🎯 Foto em ação</p>
                      <p className="text-muted-foreground">
                        Cozinhar, tocar violão, caminhar com um cachorro, fazer trilha. Mostra personalidade e estilo de vida.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <p className="font-semibold mb-2">👥 Foto social positiva</p>
                      <p className="text-muted-foreground">
                        Com amigos (desde que você esteja destacado e sem competição visual). Demonstra capacidade de convívio.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <p className="font-semibold mb-2">💬 Foto que gera conversa</p>
                      <p className="text-muted-foreground">
                        Segurando um livro incomum, em um lugar curioso, com uma roupa com identidade. Cria um gancho para a primeira mensagem.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
                  ❌ Fotos que sabotam (mesmo sem você perceber)
                </h3>

                <Card className="mb-8 bg-destructive/5 border-destructive/20">
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                        <span><strong>Espelho de academia com cara séria:</strong> passa a ideia de rigidez e narcisismo, não de saúde.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                        <span><strong>Fotos de viagem só com paisagem (sem você):</strong> não ajudam a criar identificação.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                        <span><strong>Prints de conversas ou memes agressivos:</strong> sugerem imaturidade ou julgamento.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                        <span><strong>Muitas fotos em grupo sem você identificável:</strong> gera confusão — "qual é ele?"</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-l-4 border-l-primary bg-primary/5">
                  <CardContent className="p-6">
                    <p className="font-semibold mb-2">💡 Dica prática:</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Peça a um amigo (de preferência mulher) para olhar seu perfil por 10 segundos e descrever, de forma espontânea, "que tipo de pessoa você parece". A resposta vai te surpreender — e orientar.
                    </p>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                  <MessageCircle className="w-8 h-8 text-primary" />
                  A Bio Perfeita: Menos é Mais
                </h2>

                <p className="mb-6 leading-relaxed">
                  Sua bio é a única parte do seu perfil onde você controla exatamente a narrativa. E, no entanto, a maioria escreve:
                </p>

                <Card className="mb-6 bg-muted/50">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground italic">
                      "Gosto de viajar, sair com os amigos e curtir um som."
                    </p>
                  </CardContent>
                </Card>

                <p className="mb-8 leading-relaxed">
                  Genérico. Inócuo. Esquecível.
                </p>

                <p className="mb-6 leading-relaxed">
                  A bio ideal tem três elementos:
                </p>

                <div className="space-y-4 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <p className="font-semibold mb-2">1. Identidade clara</p>
                      <p className="text-muted-foreground">"sou arquiteto, mas vivo de histórias"</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <p className="font-semibold mb-2">2. Toque de humor ou originalidade</p>
                      <p className="text-muted-foreground">"especialista em queimar o feijão, mas ótimo em escolher o vinho"</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <p className="font-semibold mb-2">3. Convite implícito para conversa</p>
                      <p className="text-muted-foreground">"pergunte-me sobre o melhor pôr do sol que já vi"</p>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
                  Exemplos reais (e eficazes)
                </h3>

                <div className="space-y-4 mb-8">
                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <p className="text-muted-foreground">
                        "Pedalando por São Paulo em busca de cafés escondidos e conversas que duram até de madrugada."
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <p className="text-muted-foreground">
                        "Cineasta amador, apaixonado por filmes ruins e debates profundos depois da pipoca."
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <p className="text-muted-foreground">
                        "Divido meu tempo entre plantas, livros de psicologia e tentar entender o que as pessoas realmente querem dizer."
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-8 bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <p className="font-semibold mb-2">📝 Note:</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Nenhuma dessas bio fala em "procurar alguém sério" ou "sem frescura". Elas <strong>mostram</strong>, não contam.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
                  <CardContent className="p-6">
                    <p className="leading-relaxed">
                      <strong>Quer ir além?</strong> Leia nosso guia completo sobre{" "}
                      <a href="/blog/posts/como-abordar-uma-mulher-com-confianca" className="text-primary hover:underline font-semibold">
                        como ser autêntico e atraente ao mesmo tempo
                      </a>, onde exploramos como sua essência se torna seu maior diferencial.
                    </p>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                  <Instagram className="w-8 h-8 text-primary" />
                  A Energia que Você Transmite
                </h2>

                <p className="mb-6 leading-relaxed">
                  Seu perfil não termina nas fotos fixas e na bio.
                </p>

                <p className="mb-8 leading-relaxed">
                  <strong>Tudo que você curte, comenta ou compartilha compõe sua aura digital.</strong>
                </p>

                <p className="mb-6 leading-relaxed">
                  Mulheres atentas notam:
                </p>

                <ul className="space-y-3 mb-8 ml-6">
                  <li className="text-muted-foreground leading-relaxed">• Se você só curte perfis pornôs ou de mulheres em poses sensuais</li>
                  <li className="text-muted-foreground leading-relaxed">• Se seus comentários são irônicos, agressivos ou vazios ("top!" em tudo)</li>
                  <li className="text-muted-foreground leading-relaxed">• Se seus stories são só festas, bebida ou reclamações</li>
                </ul>

                <p className="mb-8 leading-relaxed">
                  Isso não é "fiscalização" — é leitura de compatibilidade emocional.
                </p>

                <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
                  Como ajustar sua energia digital
                </h3>

                <div className="space-y-4 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <p className="font-semibold mb-2">📱 Stories com propósito</p>
                      <p className="text-muted-foreground">
                        Mostre seu dia a dia com leveza — uma refeição caseira, um passeio, uma reflexão curta.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <p className="font-semibold mb-2">💬 Comentários com valor</p>
                      <p className="text-muted-foreground">
                        Em vez de "gata", diga "essa foto em Bonito ficou incrível! Já estive lá e a água é surreal".
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <p className="font-semibold mb-2">❤️ Likes conscientes</p>
                      <p className="text-muted-foreground">
                        Evite perfis que promovem misoginia, competitividade tóxica ou superficialidade extrema.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-8 border-l-4 border-l-primary bg-primary/5">
                  <CardContent className="p-6">
                    <p className="font-semibold text-lg mb-2">
                      💫 Lembre-se:
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Você atrai o que emana. Se sua energia é de conexão, curiosidade e respeito, isso será percebido — mesmo em silêncio.
                    </p>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
                  Erros Comuns em Perfis Brasileiros
                </h2>

                <p className="mb-8 leading-relaxed">
                  O cenário brasileiro tem nuances específicas. Abaixo, os erros mais frequentes — e como corrigi-los:
                </p>

                <div className="space-y-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <p className="font-bold text-lg mb-2 text-destructive">❌ Usar só uma foto</p>
                      <p className="text-muted-foreground mb-2">
                        <strong>Solução:</strong> tenha pelo menos 4 a 6 fotos variadas (rosto, corpo inteiro, atividade, social).
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <p className="font-bold text-lg mb-2 text-destructive">❌ Bio copiada de influenciador</p>
                      <p className="text-muted-foreground mb-2">
                        <strong>Solução:</strong> escreva como você fala. Grave um áudio dizendo "quem sou eu" e transcreva. Soará natural.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <p className="font-bold text-lg mb-2 text-destructive">❌ Fotos só com amigos do mesmo sexo</p>
                      <p className="text-muted-foreground mb-2">
                        <strong>Solução:</strong> inclua ao menos uma foto sozinho, em um momento calmo — mostra introspecção.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <p className="font-bold text-lg mb-2 text-destructive">❌ Perfil desatualizado há anos</p>
                      <p className="text-muted-foreground mb-2">
                        <strong>Solução:</strong> atualize a cada 3–6 meses. Um novo hobby, corte de cabelo ou viagem merece registro.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <p className="font-bold text-lg mb-2 text-destructive">❌ Misturar redes pessoais com conteúdo de paquera</p>
                      <p className="text-muted-foreground mb-2">
                        <strong>Solução:</strong> se usar Instagram para conexões, mantenha o feed leve e positivo. Reserve polêmicas para conversas reais.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-8 bg-muted/30">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong>Fonte:</strong> O Conselho Federal de Psicologia destaca que a coerência entre identidade online e offline é um dos principais fatores de confiança em relacionamentos digitais — algo frequentemente negligenciado.
                    </p>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
                  Do Tinder ao Instagram: Como Adaptar Seu Perfil
                </h2>

                <p className="mb-8 leading-relaxed">
                  Cada rede tem uma cultura e expectativa diferentes. O mesmo conteúdo pode funcionar no Tinder e falhar no Instagram — ou vice-versa.
                </p>

                <div className="space-y-6 mb-8">
                  <Card className="border-l-4 border-l-rose-500">
                    <CardContent className="p-6">
                      <p className="font-bold text-xl mb-4 flex items-center gap-2">
                        <Heart className="w-6 h-6 text-rose-500" />
                        Tinder / Happn / Bumble
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Priorize clareza e objetividade</li>
                        <li>• Use fotos que mostrem rostos e estilo de vida</li>
                        <li>• Bio curta (até 150 caracteres), com um gancho conversacional</li>
                        <li>• Evite ironias complexas — o contexto é rápido</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-pink-500">
                    <CardContent className="p-6">
                      <p className="font-bold text-xl mb-4 flex items-center gap-2">
                        <Instagram className="w-6 h-6 text-pink-500" />
                        Instagram (para paquera indireta)
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Foque em estética e narrativa visual</li>
                        <li>• Stories são mais importantes que o feed</li>
                        <li>• Use legendas para mostrar reflexões, gostos e valores</li>
                        <li>• Interaja com perfis de forma genuína, não estratégica</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <p className="font-bold text-xl mb-4 flex items-center gap-2">
                        <Linkedin className="w-6 h-6 text-blue-500" />
                        LinkedIn (sim, pode rolar!)
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Mantenha o profissionalismo, mas mostre personalidade na descrição</li>
                        <li>• Compartilhe conquistas com humildade</li>
                        <li>• Comente artigos com opiniões construtivas — mostra inteligência emocional</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-8 border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
                  <CardContent className="p-6">
                    <p className="leading-relaxed">
                      <strong>Quer saber qual app combina com seu perfil?</strong> Confira nosso guia sobre{" "}
                      <a href="/apps-de-namoro" className="text-primary hover:underline font-semibold">
                        os melhores apps de relacionamento para cada perfil em 2025
                      </a>.
                    </p>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                  <Eye className="w-8 h-8 text-primary" />
                  O Teste dos Três Segundos
                </h2>

                <p className="mb-6 leading-relaxed">
                  Antes de publicar, faça este teste simples:
                </p>

                <Card className="mb-8 bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <ol className="space-y-4">
                      <li className="leading-relaxed">
                        <strong>1.</strong> Abra seu perfil como se fosse um estranho.
                      </li>
                      <li className="leading-relaxed">
                        <strong>2.</strong> Olhe por apenas 3 segundos.
                      </li>
                      <li className="leading-relaxed">
                        <strong>3.</strong> Pergunte-se:
                        <ul className="mt-2 ml-6 space-y-1 text-muted-foreground">
                          <li>• "O que essa pessoa gosta de fazer?"</li>
                          <li>• "Ela parece acessível ou distante?"</li>
                          <li>• "Sobre o que eu poderia iniciar uma conversa?"</li>
                        </ul>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <p className="mb-8 leading-relaxed">
                  Se as respostas forem vagas ("não sei", "nada específico"), seu perfil ainda não está conquistador.
                </p>

                <Card className="mb-8 border-l-4 border-l-primary bg-primary/5">
                  <CardContent className="p-6">
                    <p className="text-lg font-semibold">
                      💡 Um perfil conquistador não impressiona — convida.
                    </p>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-primary" />
                  A Conexão Vem Antes do Match
                </h2>

                <p className="mb-6 leading-relaxed">
                  Muitos veem o perfil como uma isca. Mas o verdadeiro objetivo não é "ganhar mais matches" — é <strong>atrair as pessoas certas</strong>.
                </p>

                <p className="mb-8 leading-relaxed">
                  Quando seu perfil reflete quem você é, o que valoriza e como vive, ele funciona como um filtro natural.
                </p>

                <p className="mb-8 leading-relaxed">
                  Você atrai quem se identifica com sua energia — e repele quem não combina, sem esforço.
                </p>

                <p className="mb-8 leading-relaxed">
                  Isso poupa tempo, evita frustrações e cria a base para algo real.
                </p>

                <Card className="mb-8 border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
                  <CardContent className="p-6">
                    <p className="text-lg font-semibold">
                      Afinal, ninguém se conecta com um personagem. Só com uma pessoa.
                    </p>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
                  Conclusão: Seu Perfil é um Espelho
                </h2>

                <p className="mb-6 leading-relaxed">
                  Os segredos de um perfil conquistador nas redes sociais não estão em truques ou máscaras. Estão na <strong>coragem de mostrar quem você realmente é</strong> — com clareza, leveza e intenção.
                </p>

                <div className="space-y-3 mb-8 ml-6">
                  <p className="leading-relaxed">✨ Fotos que contam histórias.</p>
                  <p className="leading-relaxed">✨ Uma bio que provoca curiosidade.</p>
                  <p className="leading-relaxed">✨ Uma energia digital alinhada com seus valores.</p>
                </div>

                <p className="mb-8 leading-relaxed">
                  Tudo isso cria uma presença que não grita por atenção, mas que naturalmente atrai olhares — e, mais importante, interesse real.
                </p>

                <Card className="mb-8 border-2 border-primary bg-gradient-to-br from-primary/10 to-transparent">
                  <CardContent className="p-8 text-center">
                    <p className="text-xl font-bold mb-4">
                      💬 Se este artigo fez você repensar seu perfil
                    </p>
                    <p className="text-lg mb-6 text-muted-foreground">
                      Compartilhe com um amigo que também merece ser visto pelo que é.
                    </p>
                    <div className="flex gap-3 justify-center flex-wrap">
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => handleShare('facebook')}
                        className="gap-2"
                      >
                        <Facebook className="w-5 h-5" />
                        Compartilhar
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => handleShare('whatsapp')}
                        className="gap-2"
                      >
                        <Share2 className="w-5 h-5" />
                        WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8 bg-muted/30">
                  <CardContent className="p-6">
                    <p className="leading-relaxed mb-4">
                      <strong>E se quiser dar o próximo passo,</strong> explore nossos guias sobre{" "}
                      <a href="/blog/posts/como-abordar-uma-mulher-com-confianca" className="text-primary hover:underline font-semibold">
                        como abordar uma mulher com confiança e naturalidade
                      </a>{" "}
                      ou navegue pelas{" "}
                      <a href="/dicas" className="text-primary hover:underline font-semibold">
                        dicas de relacionamento
                      </a>.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-12 border-l-4 border-l-primary bg-primary/5">
                  <CardContent className="p-6">
                    <p className="text-lg font-semibold mb-2">
                      No Beijo da Rua, acreditamos que o amor começa com autenticidade.
                    </p>
                    <p className="text-muted-foreground">
                      E tudo começa com um perfil que ousa ser verdadeiro.
                    </p>
                  </CardContent>
                </Card>

                {/* FAQ Section */}
                <section className="mt-12">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Perguntas Frequentes (FAQ)</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left">
                        <h3 className="text-lg font-semibold">Quantas fotos devo ter no meu perfil de namoro?</h3>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground leading-relaxed">
                          O ideal é entre 4 e 6 fotos variadas: uma de rosto nítida, uma de corpo inteiro (natural, não pose de academia), uma em atividade (viagem, hobby), uma social (com amigos, mas você identificável) e, se possível, uma que gere curiosidade (livro, animal de estimação, lugar incomum).
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left">
                        <h3 className="text-lg font-semibold">Posso usar fotos antigas se estou com melhor aparência nelas?</h3>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground leading-relaxed">
                          Evite. Fotos devem representar como você está hoje. Mulheres valorizam honestidade mais do que perfeição. Se mudou o corte de cabelo ou ganhou peso, atualize — isso mostra autoconfiança.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left">
                        <h3 className="text-lg font-semibold">Bio longa ou curta é melhor?</h3>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground leading-relaxed">
                          Depende da plataforma. Em apps de namoro (Tinder, Bumble), prefira bio curta (até 150 caracteres) com um gancho. No Instagram, legendas mais elaboradas funcionam bem, desde que não sejam ensaios.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left">
                        <h3 className="text-lg font-semibold">Devo mencionar que estou procurando algo sério na bio?</h3>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground leading-relaxed">
                          Não é necessário — e pode afastar quem gosta de conhecer devagar. Melhor mostrar sua intenção pela energia do perfil: fotos de momentos reais, valores claros e linguagem madura já transmitem seriedade.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left">
                        <h3 className="text-lg font-semibold">Como saber se meu perfil está funcionando?</h3>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground leading-relaxed">
                          Observe: você recebe mensagens variadas e com perguntas reais? As conversas evoluem para encontros? Se sim, está no caminho certo. Se recebe só "oi" e conversas morrem, revise fotos e bio.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </section>

                {/* Social Share Buttons */}
                <div className="my-12 p-6 bg-muted rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Share2 className="w-5 h-5" />
                    <h3 className="text-lg font-bold">Compartilhe este artigo</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('facebook')}
                      className="flex items-center gap-2"
                    >
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('pinterest')}
                      className="flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.690 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.350-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                      </svg>
                      Pinterest
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('twitter')}
                      className="flex items-center gap-2"
                    >
                      <Twitter className="w-4 h-4" />
                      X (Twitter)
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('whatsapp')}
                      className="flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp
                    </Button>
                  </div>
                </div>

                {/* FAQ moved after social share */}
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Perguntas Frequentes (FAQ)
                </h2>
                
                <Accordion type="single" collapsible className="my-8">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      <h3 className="text-lg font-semibold">Quantas fotos devo ter no meu perfil de namoro?</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        O ideal é entre 4 e 6 fotos variadas: uma de rosto nítida, uma de corpo inteiro (natural, não pose de academia), uma em atividade (viagem, hobby), uma social (com amigos, mas você identificável) e, se possível, uma que gere curiosidade (livro, animal de estimação, lugar incomum).
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      <h3 className="text-lg font-semibold">Posso usar fotos antigas se estou com melhor aparência nelas?</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Evite. Fotos devem representar como você está hoje. Mulheres valorizam honestidade mais do que perfeição. Se mudou o corte de cabelo ou ganhou peso, atualize — isso mostra autoconfiança.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">
                      <h3 className="text-lg font-semibold">Bio longa ou curta é melhor?</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Depende da plataforma. Em apps de namoro (Tinder, Bumble), prefira bio curta (até 150 caracteres) com um gancho. No Instagram, legendas mais elaboradas funcionam bem, desde que não sejam ensaios.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">
                      <h3 className="text-lg font-semibold">Devo mencionar que estou procurando algo sério na bio?</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Não é necessário — e pode afastar quem gosta de conhecer devagar. Melhor mostrar sua intenção pela energia do perfil: fotos de momentos reais, valores claros e linguagem madura já transmitem seriedade.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left">
                      <h3 className="text-lg font-semibold">Como saber se meu perfil está funcionando?</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Observe: você recebe mensagens variadas e com perguntas reais? As conversas evoluem para encontros? Se sim, está no caminho certo. Se recebe só "oi" e conversas morrem, revise fotos e bio.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* References */}
                <div className="my-12 p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Referências:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Instituto Locomotiva – Pesquisa "Comportamento Digital e Relacionamentos no Brasil", 2024.</li>
                    <li>Conselho Federal de Psicologia – Nota Técnica sobre Identidade Digital e Relacionamentos, 2023.</li>
                    <li>Dados do Google Trends Brasil (2024–2025) sobre buscas por "perfil conquistador", "como melhorar perfil Tinder" e "bio para Instagram namoro".</li>
                  </ul>
                </div>
              </div>

              {/* Author Bio */}
              <Card className="my-12 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img 
                      src={authorImage} 
                      alt="Daniel Olimpio" 
                      className="w-32 h-32 rounded-full object-cover border-4 border-background shadow-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">Daniel Olimpio</h3>
                      <p className="text-muted-foreground mb-4">Desenvolvedor Web</p>
                      
                      <h4 className="font-semibold mb-2">Sobre Mim</h4>
                      <p className="text-sm mb-4">
                        Combinando tecnologia e criatividade para criar soluções digitais impactantes
                      </p>

                      {!showFullBio && (
                        <Button
                          variant="link"
                          onClick={() => setShowFullBio(true)}
                          className="p-0 h-auto text-primary"
                        >
                          Ver Mais
                        </Button>
                      )}

                      {showFullBio && (
                        <>
                          <h4 className="font-semibold mb-2">Minha Jornada</h4>
                          <p className="text-sm mb-4">
                            Com mais de 20 anos de atuação no mercado digital, sou especializado em desenvolvimento web e design de interfaces, unindo performance, usabilidade e identidade visual em cada projeto.
                          </p>
                          
                          <p className="text-sm mb-4">
                            Minha expertise está em transformar ideias complexas em soluções digitais funcionais, escaláveis e visualmente marcantes. Trabalho com foco na harmonia entre código limpo, arquitetura eficiente e design responsivo, sempre priorizando a experiência do usuário e os objetivos do negócio.
                          </p>

                          <p className="text-sm mb-4">
                            Do front-end moderno ao back-end robusto, da prototipagem à entrega final, meu compromisso é construir produtos digitais que unem forma, função e tecnologia.
                          </p>
                        </>
                      )}

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">
                          Full Stack Development
                        </span>
                        <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">
                          UI/UX Design
                        </span>
                        <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">
                          Brand Identity
                        </span>
                      </div>

                      <div className="flex gap-4">
                        <a 
                          href="https://danielolimpio.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="Website"
                        >
                          <Globe className="w-5 h-5" />
                        </a>
                        <a 
                          href="https://www.facebook.com/danielolimpio.com.br" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="Facebook"
                        >
                          <Facebook className="w-5 h-5" />
                        </a>
                        <a 
                          href="https://x.com/danielolimpio_" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="Twitter"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a 
                          href="https://www.instagram.com/danielolimpio_com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="Instagram"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                        <a 
                          href="https://www.linkedin.com/in/danielolimpio-com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <RelatedArticles 
                currentArticleLink="/blog/posts/os-segredos-de-um-perfil-conquistador" 
                category="conquista" 
              />
            </article>

            {/* Sidebar */}
            <aside className="lg:w-80">
              <BlogSidebar />
            </aside>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OsSegredosDeUmPerfilConquistador;

import { useState } from "react";
import { Helmet } from "react-helmet";
import { Heart, MessageCircle, Lightbulb, CheckCircle2, XCircle, Sparkles, Users, MapPin, Share2, Facebook, Twitter, Globe, Instagram, Linkedin } from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/BlogSidebar";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import authorImage from "@/assets/team-daniel.jpg";
import articleImage from "@/assets/article-cantadas-irresistiveis.jpg";
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

const CantadasIrresistiveisQueFuncionam = () => {
  const [showFullBio, setShowFullBio] = useState(false);
  const articleUrl = "https://beijodarua.com.br/blog/posts/cantadas-irresistiveis-que-funcionam";
  const articleTitle = "Cantadas Irresistíveis que Realmente Funcionam em 2025";

  const articleData = getArticleSchema({
    title: articleTitle,
    description: "Frases criativas, respeitosas e eficazes para quebrar o gelo e causar boa impressão. Testadas e aprovadas por especialistas em conquista.",
    author: "Daniel Olimpio",
    datePublished: "2025-11-23",
    dateModified: "2025-11-23",
    image: "https://beijodarua.com.br" + articleImage,
    url: articleUrl,
    category: "Conquista"
  });
  
  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(articleTitle)}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(articleUrl)}&description=${encodeURIComponent(articleTitle)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(articleTitle + ' ' + articleUrl)}`
    };
    
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData data={articleData} />
      <Helmet>
        <title>{articleTitle} | Beijo da Rua</title>
        <meta name="description" content="Frases criativas, respeitosas e eficazes para quebrar o gelo e causar boa impressão. Testadas e aprovadas por especialistas em conquista." />
        <meta property="og:title" content={articleTitle} />
        <meta property="og:description" content="Frases criativas, respeitosas e eficazes para quebrar o gelo e causar boa impressão. Testadas e aprovadas por especialistas em conquista." />
        <meta property="og:image" content={articleImage} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={articleTitle} />
        <meta name="twitter:description" content="Frases criativas, respeitosas e eficazes para quebrar o gelo e causar boa impressão." />
        <meta name="twitter:image" content={articleImage} />
        <link rel="canonical" href={articleUrl} />
      </Helmet>

      {/* Top of Page Ad */}
      <TopOfPageAd />

      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
      <DynamicBreadcrumb />
      
      <main className="flex-1 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <article className="flex-1 max-w-4xl">

              {/* Header */}
              <header className="mb-8">
                <div className="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-4">
                  Conquista
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Cantadas Irresistíveis que Realmente Funcionam em 2025
                </h1>

                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={authorImage} 
                    alt="Daniel Olimpio"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">Daniel Olimpio</p>
                    <p className="text-sm text-muted-foreground">23 de novembro de 2025 • 12 min de leitura</p>
                  </div>
                </div>

                <img 
                  src={articleImage} 
                  alt="Casal conversando e sorrindo"
                  className="w-full h-[400px] object-cover rounded-lg mb-8"
                />
              </header>

              {/* Under Page Title Ad */}
              <UnderPageTitleAd />

              {/* Conteúdo do artigo */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Você já ouviu aquela cantada tão forçada que fez a outra pessoa revirar os olhos? Ou, pior, já usou uma frase que parecia boa na sua cabeça — mas, ao sair da sua boca, caiu no vácuo, gerando um silêncio constrangedor?
                </p>

                {/* Under First Paragraph Ad */}
                <UnderFirstParagraphAd />

                <p className="mb-6">
                  Se sim, saiba que não está sozinho.
                </p>

                <p className="mb-6">
                  Muitos homens ainda acreditam que conquistar exige frases prontas, piadas ensaiadas ou elogios exagerados. Mas o que os especialistas em relacionamentos e a própria realidade mostram é outra coisa: as cantadas que funcionam em 2025 não são as mais engenhosas — são as mais humanas.
                </p>

                {/* Under Second Paragraph Ad */}
                <UnderSecondParagraphAd />

                <p className="mb-6">
                  Neste artigo, você vai descobrir as <strong>cantadas irresistíveis que realmente funcionam em 2025</strong>: frases criativas, respeitosas e eficazes para quebrar o gelo e causar boa impressão — testadas e aprovadas por especialistas em conquista, psicólogos comportamentais e, acima de tudo, por mulheres reais em diferentes contextos sociais.
                </p>

                <p className="mb-8">
                  Esqueça fórmulas ultrapassadas. O que você verá aqui é um guia prático, atual e sensível — feito para quem quer atrair com inteligência, não com truques.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <XCircle className="h-8 w-8 text-rose-500" />
                  Por Que a Maioria das Cantadas Falha Antes Mesmo de Começar
                </h2>

                <p className="mb-6">
                  A cantada, em sua essência, não é um feitiço. É uma ponte para uma conversa.
                </p>

                <p className="mb-6">
                  Mas muitos a tratam como um arremesso final — como se, com a frase perfeita, a mulher "caísse aos seus pés". Esse mindset já nasce condenado.
                </p>

                <p className="mb-6">
                  Pesquisas do <strong>Instituto Locomotiva (2024)</strong> revelam que <strong>82% das mulheres brasileiras</strong> entre 18 e 38 anos consideram que a maioria das abordagens verbais que recebem é genérica, sexualizada ou desrespeitosa. O resultado? Ceticismo imediato.
                </p>

                <p className="mb-6">
                  O problema não está na intenção — está na falta de empatia.
                </p>

                <p className="mb-8">
                  Uma cantada eficaz não busca impressionar. Busca conectar. Ela parte da observação, não da fantasia. Do respeito, não da pressão.
                </p>

                <Card className="bg-primary/5 border-primary/20 mb-8">
                  <CardContent className="pt-6">
                    <p className="text-lg font-medium flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      A boa notícia? Você não precisa ser poeta, comediante ou galã. Só precisa ser atento, autêntico e gentil.
                    </p>
                  </CardContent>
                </Card>

                {/* Mid Content Ad */}
                <MidContentAd />

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Sparkles className="h-8 w-8 text-amber-500" />
                  Cantadas Irresistíveis que Realmente Funcionam em 2025: O Que Mudou?
                </h2>

                <p className="mb-6">
                  Em 2025, o flerte evoluiu.
                </p>

                <p className="mb-6">
                  As mulheres estão mais conscientes de seu valor, mais informadas e menos dispostas a tolerar abordagens que soam invasivas, vazias ou que tratam seu corpo como um troféu.
                </p>

                <p className="mb-6">
                  Isso não significa que o elogio morreu. Significa que ele precisa ter alma.
                </p>

                <p className="mb-6">
                  As cantadas que funcionam hoje compartilham três características:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card>
                    <CardContent className="pt-6">
                      <MapPin className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold mb-2">Contextualizadas</h3>
                      <p className="text-sm text-muted-foreground">
                        Surgem do que está realmente acontecendo ao redor.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <Heart className="h-8 w-8 text-rose-500 mb-3" />
                      <h3 className="font-bold mb-2">Leves</h3>
                      <p className="text-sm text-muted-foreground">
                        Não carregam expectativa de resposta ou recompensa.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <Users className="h-8 w-8 text-purple-500 mb-3" />
                      <h3 className="font-bold mb-2">Humanas</h3>
                      <p className="text-sm text-muted-foreground">
                        Mostram curiosidade genuína, não só desejo.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className="mb-8">
                  Vamos aos exemplos — divididos por situação, tom e intenção.
                </p>

                {/* Long Content Ad (800+ words) */}
                <LongContentAd />

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <MessageCircle className="h-8 w-8 text-blue-500" />
                  Cantadas para Quebrar o Gelo: Simples, Elegantes e Sem Pressão
                </h2>

                <p className="mb-6">
                  Essas são ideais para ambientes públicos, festas ou até interações online. O objetivo não é "ganhar", mas abrir uma porta.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                  Frases que funcionam na vida real:
                </h3>

                <Card className="mb-4 border-l-4 border-l-green-500">
                  <CardContent className="pt-6">
                    <p className="font-medium mb-2">"Desculpa interromper, mas adoro o seu cachorro. Ele é seu?"</p>
                    <p className="text-sm text-muted-foreground">
                      → Funciona porque é uma observação real, não um elogio físico. Mostra interesse sem intimidação.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-4 border-l-4 border-l-green-500">
                  <CardContent className="pt-6">
                    <p className="font-medium mb-2">"Vi que você está lendo [nome do livro]. Li esse ano e fiquei com a cabeça girando por dias. O que mais te marcou?"</p>
                    <p className="text-sm text-muted-foreground">
                      → Demonstra atenção e convida para um diálogo sobre algo que importa para ela.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-4 border-l-4 border-l-green-500">
                  <CardContent className="pt-6">
                    <p className="font-medium mb-2">"Esse seu brinco combina perfeitamente com o seu sorriso. Você sempre escolhe acessórios com tanto cuidado?"</p>
                    <p className="text-sm text-muted-foreground">
                      → Elogia uma escolha (não o corpo) e abre espaço para ela falar de seu estilo.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-l-4 border-l-green-500">
                  <CardContent className="pt-6">
                    <p className="font-medium mb-2">"Meu amigo apostou que eu não teria coragem de vir aqui e perguntar: qual é a sobremesa mais ousada desse cardápio?"</p>
                    <p className="text-sm text-muted-foreground">
                      → Usa humor leve e um pretexto lúdico, sem colocar toda a responsabilidade na interação.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200 mb-8">
                  <CardContent className="pt-6">
                    <p className="font-medium">
                      <strong>O segredo?</strong> Nenhuma dessas frases exige que ela "retribua" com um número, um elogio ou até um sorriso. Elas simplesmente existem — e, por isso, são livres.
                    </p>
                  </CardContent>
                </Card>

                <p className="mb-8">
                  Quer dominar a arte da abordagem antes mesmo da cantada? Leia nosso guia completo sobre <a href="/blog/posts/como-abordar-uma-mulher-com-confianca" className="text-primary hover:underline font-medium">como abordar uma mulher com confiança e naturalidade</a>.
                </p>

                {/* Longer Content Ad (1200+ words) */}
                <LongerContentAd />

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Sparkles className="h-8 w-8 text-amber-500" />
                  Cantadas com Humor Inteligente (Sem Ser Cafona)
                </h2>

                <p className="mb-6">
                  O humor é um dos melhores aliados do flerte — desde que não seja às custas dela.
                </p>

                <p className="mb-6">
                  Evite piadas prontas como "você acredita em amor à primeira vista ou preciso passar aqui de novo?" Elas soam datadas e despersonalizadas.
                </p>

                <p className="mb-6">
                  Em vez disso, use o ambiente ou uma pequena ironia suave:
                </p>

                <Card className="mb-4 bg-amber-50 border-amber-200">
                  <CardContent className="pt-6 space-y-4">
                    <p className="font-medium">"Parece que a fila do café está tão lenta que até o tempo resolveu esperar. Posso aproveitar e te perguntar qual é seu maior vício além do espresso?"</p>
                    
                    <p className="font-medium">"Se eu disser que estou aqui só porque vi você entrar, você me denuncia ou me convida pra um café?" <span className="text-sm text-muted-foreground">(com sorriso e tom brincalhão)</span></p>
                    
                    <p className="font-medium">"Estou tentando decidir se compro o croissant de amêndoas ou o de chocolate. Você parece uma especialista em decisões difíceis… me ajuda?"</p>
                  </CardContent>
                </Card>

                <p className="mb-8">
                  Essas frases funcionam porque criam uma situação compartilhada, não um monólogo de sedução.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Heart className="h-8 w-8 text-rose-500" />
                  Cantadas Respeitosas que Elogiam Sem Objetificar
                </h2>

                <p className="mb-6">
                  Elogiar é válido — desde que o foco esteja na pessoa, não no corpo.
                </p>

                <p className="mb-6">
                  Frases como "você é linda" não são ruins, mas são rasas. Em vez disso, tente:
                </p>

                <Card className="mb-4 bg-rose-50 border-rose-200">
                  <CardContent className="pt-6 space-y-4">
                    <p className="font-medium">"Você tem um jeito de ouvir as pessoas que é raro. Dá pra perceber só de ver você conversando daqui."</p>
                    
                    <p className="font-medium">"Adorei como você respondeu aquela pergunta lá atrás. Direto, com graça e sem medo. É seu estilo?"</p>
                    
                    <p className="font-medium">"Seu sorriso tem uma energia que ilumina o ambiente. Você sabe disso ou é natural?"</p>
                  </CardContent>
                </Card>

                <p className="mb-8">
                  Esses elogios destacam traços de caráter, atitude ou energia — algo que ela construiu ou cultiva, não apenas o que "tem".
                </p>

                <Card className="bg-primary/5 border-primary/20 mb-8">
                  <CardContent className="pt-6">
                    <p className="text-sm">
                      O <strong>Conselho Federal de Psicologia</strong> reforça que reconhecimento emocional gera conexão muito mais profunda do que admiração física isolada — especialmente no início do contato.
                    </p>
                  </CardContent>
                </Card>

                {/* Longest Content Ad (1800+ words) */}
                <LongestContentAd />

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <XCircle className="h-8 w-8 text-rose-500" />
                  O Que Evitar: As Cantadas que Afastam em 2025
                </h2>

                <p className="mb-6">
                  Mesmo com boas intenções, algumas frases sabotam sua chance antes do "oi". Veja as mais comuns:
                </p>

                <div className="space-y-4 mb-8">
                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <p className="font-medium text-red-700 mb-2">"Você é tão linda que devia ser proibida."</p>
                      <p className="text-sm text-muted-foreground">→ Soa possessivo e dramático.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <p className="font-medium text-red-700 mb-2">"Você tem namorado?"</p>
                      <p className="text-sm text-muted-foreground">→ Reduz ela a um "status de disponibilidade". Melhor: deixar a conversa fluir.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <p className="font-medium text-red-700 mb-2">"Nunca vi ninguém como você."</p>
                      <p className="text-sm text-muted-foreground">→ Exagerado e forçado. Soa insincero.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <p className="font-medium text-red-700 mb-2">"O que uma mulher como você está fazendo sozinha?"</p>
                      <p className="text-sm text-muted-foreground">→ Supõe que ela "precisa" de companhia. Desconfortável.</p>
                    </CardContent>
                  </Card>
                </div>

                <p className="mb-8">
                  Uma boa métrica: se você não diria essa frase para uma colega de trabalho com quem quer ter uma boa relação, provavelmente não deve dizê-la a uma desconhecida.
                </p>

                {/* InContent 5 Ad */}
                <InContent5Ad />

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Resumo: Como Fazer uma Cantada que Funciona
                </h2>

                <div className="bg-gradient-to-r from-primary/10 to-rose-100 p-6 rounded-lg mb-8">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Observe antes de falar:</strong> O contexto é seu aliado.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Seja leve:</strong> Sem expectativas, sem cobrança.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Valorize escolhas, não corpo:</strong> Elogie o que ela constrói.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Use humor com cuidado:</strong> Nunca às custas dela.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Aceite o "não":</strong> Respeito é o maior atrativo.</span>
                    </li>
                  </ul>
                </div>

                {/* Social Share */}
                <div className="border-t border-b py-6 my-8">
                  <p className="font-medium mb-4 flex items-center gap-2">
                    <Share2 className="h-5 w-5" />
                    Compartilhe este artigo:
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" onClick={() => handleShare('facebook')}>
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare('twitter')}>
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare('whatsapp')}>
                      <Globe className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare('pinterest')}>
                      <Heart className="h-4 w-4 mr-2" />
                      Pinterest
                    </Button>
                  </div>
                </div>

                {/* FAQ Section */}
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Perguntas Frequentes
                </h2>

                <Accordion type="single" collapsible className="mb-8">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Cantadas ainda funcionam em 2025?</AccordionTrigger>
                    <AccordionContent>
                      Sim, mas não do jeito antigo. As cantadas que funcionam hoje são contextualizadas, respeitosas e focadas em iniciar uma conversa real — não em "impressionar" com frases prontas.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Qual a diferença entre cantada e assédio?</AccordionTrigger>
                    <AccordionContent>
                      A cantada respeita o "não" (verbal ou silencioso) e não pressiona. O assédio insiste, invade espaço físico ou usa linguagem que objetifica. A linha está na escuta e no respeito.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Posso usar cantadas em apps de namoro?</AccordionTrigger>
                    <AccordionContent>
                      Sim! As cantadas baseadas em observação do perfil (bio, fotos, interesses) funcionam muito bem. Evite frases genéricas como "oi, tudo bem?". Personalize sempre.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Como saber se a cantada funcionou?</AccordionTrigger>
                    <AccordionContent>
                      Sinais positivos: ela sorri genuinamente, responde com perguntas, mantém contato visual, fica mais tempo na conversa. Sinais negativos: respostas curtas, olhar para longe, corpo virado para outro lado.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>E se eu travar e não souber o que dizer?</AccordionTrigger>
                    <AccordionContent>
                      Respire fundo e observe o ambiente. Comente algo real que está acontecendo. Não precisa ser genial — só precisa ser genuíno. A vulnerabilidade também atrai.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* References */}
                <div className="bg-muted/50 p-6 rounded-lg mb-8">
                  <h3 className="font-bold mb-4">Referências</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Instituto Locomotiva (2024). Pesquisa sobre comportamento e relacionamentos no Brasil.</li>
                    <li>Conselho Federal de Psicologia. Diretrizes sobre comunicação interpessoal.</li>
                    <li>Journal of Social Psychology (2023). Studies on first impression and attraction.</li>
                  </ul>
                </div>

                {/* Author Bio */}
                <div className="bg-muted/30 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <img 
                      src={authorImage} 
                      alt="Daniel Olimpio" 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">Daniel Olimpio</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Especialista em relacionamentos e fundador do Beijo da Rua. Ajuda homens a construírem conexões autênticas há mais de 5 anos.
                      </p>
                      
                      <div className="flex gap-2 mb-3">
                        <Button variant="ghost" size="sm">
                          <Instagram className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Twitter className="h-4 w-4" />
                        </Button>
                      </div>

                      {showFullBio && (
                        <p className="text-sm text-muted-foreground mt-3">
                          Com formação em psicologia social e experiência em coaching de relacionamentos, Daniel criou o Beijo da Rua para oferecer orientação prática e respeitosa para homens que querem melhorar suas habilidades de comunicação e conexão. Seu trabalho é baseado em empatia, respeito mútuo e autenticidade.
                        </p>
                      )}

                      <Button 
                        variant="link" 
                        size="sm" 
                        onClick={() => setShowFullBio(!showFullBio)}
                        className="p-0 h-auto"
                      >
                        {showFullBio ? 'Ver menos' : 'Ver bio completa'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <RelatedArticles 
                currentArticleLink="/blog/posts/cantadas-irresistiveis-que-funcionam" 
                category="conquista" 
              />
            </article>

            {/* Sidebar */}
            <aside className="lg:w-80 shrink-0">
              <BlogSidebar activeCategory="Conquista" />
            </aside>
          </div>
        </div>
      </main>

      {/* Bottom of Page Ad */}
      <div className="container mx-auto px-4 mb-8">
        <BottomOfPageAd />
      </div>

      <Footer />
    </div>
  );
};

export default CantadasIrresistiveisQueFuncionam;

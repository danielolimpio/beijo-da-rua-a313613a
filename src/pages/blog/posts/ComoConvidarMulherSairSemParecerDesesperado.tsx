import { Heart, MessageCircle, Clock, Lightbulb, CheckCircle, AlertTriangle, Target, Shield } from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/BlogSidebar";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";
import authorImage from "@/assets/team-daniel.jpg";
import articleCover from "@/assets/article-convidar-mulher.jpg";
import { useState } from "react";
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
  InContent5Ad, 
  BottomOfPageAd 
} from "@/components/EzoicAd";

const ComoConvidarMulherSairSemParecerDesesperado = () => {
  const [showFullBio, setShowFullBio] = useState(false);
  
  const shareUrl = window.location.href;
  const shareTitle = "Como Convidar uma Mulher para Sair Sem Parecer Desesperado";

  const articleData = getArticleSchema({
    title: "Como Convidar uma Mulher para Sair Sem Parecer Desesperado",
    description: "Estratégias sutis e confiantes para transformar uma conversa em encontro real. Aprenda o timing perfeito e as palavras certas.",
    author: "Daniel Olimpio",
    datePublished: "2025-12-02",
    dateModified: "2025-12-02",
    image: "https://beijodarua.com.br" + articleCover,
    url: "https://beijodarua.com.br/blog/posts/como-convidar-mulher-sair-sem-parecer-desesperado",
    category: "Conquista"
  });
  
  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(shareTitle)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`
    };
    
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData data={articleData} />
      
      {/* Top of Page Ad */}
      <TopOfPageAd />
      
      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
      <DynamicBreadcrumb />
      
      <article className="flex-1 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {/* Article Header */}
              <header className="mb-8">
                <div className="inline-block px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-4">
                  Conquista
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Como Convidar uma Mulher para Sair Sem Parecer Desesperado
                </h1>
                
                <p className="text-xl text-muted-foreground mb-6">
                  Estratégias sutis e confiantes para transformar uma conversa em encontro real. Aprenda o timing perfeito e as palavras certas.
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 py-4 border-y border-border">
                  <img 
                    src={authorImage} 
                    alt="Daniel Olimpio" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Daniel Olimpio</p>
                    <p className="text-sm text-muted-foreground">2 de dezembro de 2025</p>
                  </div>
                </div>
              </header>

              {/* Under Page Title Ad */}
              <UnderPageTitleAd />

              {/* Article Cover Image */}
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={articleCover} 
                  alt="Como Convidar uma Mulher para Sair Sem Parecer Desesperado"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="mb-6">
                  Você já se pegou rolando mensagens antigas, reescrevendo o mesmo convite cinco vezes, ou adiando o "vamos sair?" por medo de soar inseguro?
                </p>

                {/* Under First Paragraph Ad */}
                <UnderFirstParagraphAd />
                
                <p className="mb-6">
                  Não está sozinho. Muitos homens — até os mais bem-sucedidos — travam nesse exato momento: a transição de uma conversa leve para um encontro de verdade. O receio de parecer ansioso, invasivo ou desesperado acaba sabotando a oportunidade antes mesmo que ela exista.
                </p>

                {/* Under Second Paragraph Ad */}
                <UnderSecondParagraphAd />

                <p className="mb-6">
                  Mas e se você soubesse que convidar uma mulher para sair pode ser algo natural, respeitoso e até elegante — desde que feito com intenção clara, timing adequado e uma dose de autoconfiança genuína?
                </p>
                
                <p className="mb-6">
                  Neste guia completo, vamos desmistificar o processo, mostrar como evitar armadilhas comuns e transformar seu interesse em um convite que ela queira aceitar — sem pressão, sem joguinhos, e sem perder a dignidade.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <AlertTriangle className="text-amber-500" />
                  Por Que o Medo de Parecer Desesperado Atrapalha Mais do Que Ajuda?
                </h2>

                <p className="mb-6">
                  O "desespero" que muitos tentam esconder não está necessariamente nas palavras, mas na energia por trás delas. Mensagens como "você tá livre um dia desses?" ou "se não puder, tudo bem…" transmitem insegurança, não humildade.
                </p>

                <p className="mb-6">
                  A mulher percebe — mesmo que inconscientemente — que você está buscando validação, não construindo uma conexão.
                </p>

                <Card className="my-8 border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
                  <CardContent className="pt-6">
                    <p className="font-semibold text-lg">
                      Segundo estudos do Instituto Brasileiro de Opinião Pública e Estatística (IBOPE) sobre relações interpessoais, a clareza emocional é um dos fatores mais valorizados por mulheres ao avaliar potenciais parceiros. Isso não significa ser arrogante, mas sim saber o que quer e comunicar com respeito.
                    </p>
                  </CardContent>
                </Card>

                <p className="mb-6">
                  Leia também: <Link to="/blog" className="text-primary hover:underline font-semibold">Como manter uma conversa interessante com uma mulher — do primeiro 'oi' ao 'não quero mais responder'</Link>
                </p>

                {/* Mid Content Ad */}
                <MidContentAd />

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Clock className="text-blue-500" />
                  O Timing Perfeito: Quando o Convite Faz Sentido
                </h2>

                <p className="mb-6">
                  Convidar alguém para sair não é uma fórmula mágica. É uma resposta natural a sinais de reciprocidade. Observe:
                </p>

                <div className="space-y-4 my-8">
                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="pt-6">
                      <p className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={20} />
                        <span>Ela responde com entusiasmo e pergunta sobre você?</span>
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="pt-6">
                      <p className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={20} />
                        <span>Há trocas de elogios sutis ou brincadeiras leves?</span>
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="pt-6">
                      <p className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={20} />
                        <span>Ela demonstra curiosidade sobre sua rotina ou interesses?</span>
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className="mb-6">
                  Se sim, você já tem o que chamamos de "janela de oportunidade". Aguardar demais — na esperança de "saber mais" — muitas vezes é apenas procrastinação disfarçada de cautela.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  Evite convidar em momentos de baixa energia:
                </h3>

                <div className="space-y-4 my-8">
                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground">
                        ❌ No meio de uma conversa superficial sobre clima ou trânsito
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground">
                        ❌ Logo após um desentendimento ou mal-entendido
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground">
                        ❌ Quando ela mencionou estar sobrecarregada ou indisponível
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Long Content Ad (800+ words) */}
                <LongContentAd />

                <Card className="my-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-2 border-green-500">
                  <CardContent className="pt-6">
                    <p className="font-semibold mb-4">O ideal? Propor o encontro após um intercâmbio positivo e envolvente. Por exemplo:</p>
                    <p className="italic text-lg pl-4 border-l-4 border-primary">
                      "Adoro como você falou sobre aquele livro. Tem um café aqui perto que tem uma seção só de literatura. Que tal a gente ir lá sábado?"
                    </p>
                    <p className="mt-4 font-semibold text-primary">
                      Natural. Específico. Sem pressão.
                    </p>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Target className="text-rose-500" />
                  Como Convidar uma Mulher para Sair Sem Parecer Desesperado: 5 Estratégias Reais
                </h2>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  1. Substitua a Vaguidade por Proposta Concreta
                </h3>

                <p className="mb-6">
                  "Vamos sair um dia?" é uma armadilha. Soa como quem quer apenas testar o interesse — e espera que ela resolva os detalhes. Em vez disso, ofereça um plano real:
                </p>

                <Card className="my-6 bg-gradient-to-r from-primary/10 to-secondary/10">
                  <CardContent className="pt-6">
                    <p className="text-lg italic">
                      "Tem uma exposição de arte urbana abrindo sexta. Parece bem a sua vibe. Quer ir junto?"
                    </p>
                    <p className="mt-4 font-semibold text-primary">
                      Isso mostra iniciativa, criatividade e consideração.
                    </p>
                  </CardContent>
                </Card>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  2. Use o "Ensaio Social" Antes do Convite
                </h3>

                <p className="mb-6">
                  Teste o clima com microconvites:
                </p>

                <div className="space-y-4 my-6">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="italic">"Imagina a gente nesse food truck — você pediria o burger de costela?"</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <p className="italic">"Esse show seria perfeito pra gente ir."</p>
                    </CardContent>
                  </Card>
                </div>

                <p className="mb-6">
                  Se ela responde com entusiasmo ("Seria demais!"), o caminho está aberto. Se responde com frieza ("Ah, talvez"), recue com elegância.
                </p>

                {/* Longer Content Ad (1200+ words) */}
                <LongerContentAd />

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  3. Evite Justificativas Excessivas
                </h3>

                <p className="mb-6">
                  Nada de:
                </p>

                <Card className="my-6 border-l-4 border-l-red-500 bg-red-50 dark:bg-red-950/10">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground italic">
                      ❌ "Sei que você deve estar ocupada, mas… só se tiver tempo, claro…"
                    </p>
                  </CardContent>
                </Card>

                <p className="mb-6">
                  Isso dilui sua intenção. Um convite confiante não pede desculpas por existir. Basta:
                </p>

                <Card className="my-6 border-l-4 border-l-green-500 bg-green-50 dark:bg-green-950/10">
                  <CardContent className="pt-6">
                    <p className="font-semibold text-lg italic">
                      ✅ "Gostaria de tomar um café com você sábado. O que acha?"
                    </p>
                  </CardContent>
                </Card>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  4. Aceite um "Não" com Maturidade
                </h3>

                <p className="mb-6">
                  Se ela recusar, responda com leveza:
                </p>

                <Card className="my-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
                  <CardContent className="pt-6">
                    <p className="text-lg italic mb-4">
                      "Sem problemas! Se surgir outra oportunidade, aviso."
                    </p>
                    <p className="font-semibold text-primary">
                      Isso demonstra segurança — e deixa a porta aberta sem parecer insistente. Desespero é insistir. Confiança é respeitar o não.
                    </p>
                  </CardContent>
                </Card>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  5. Cuide do Contexto Digital
                </h3>

                <p className="mb-6">
                  Se o contato for por app de relacionamento, evite esperar semanas só trocando mensagens. A química se constrói presencialmente. Um bom limite: 5 a 7 dias de conversa. Depois disso, proponha o encontro.
                </p>

                <Card className="my-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
                  <CardContent className="pt-6">
                    <p className="font-semibold flex items-center gap-2 mb-2">
                      <Lightbulb className="text-amber-500" />
                      Dica extra:
                    </p>
                    <p>
                      Use o recurso de áudio do WhatsApp para fazer o convite. A voz transmite calma e intenção de forma que o texto nunca consegue.
                    </p>
                  </CardContent>
                </Card>

                {/* InContent 5 Ad */}
                <InContent5Ad />

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <MessageCircle className="text-green-500" />
                  Frases que Funcionam (e Aquelas que Você Deve Evitar)
                </h2>

                <div className="my-8 grid md:grid-cols-2 gap-6">
                  <Card className="border-2 border-green-500">
                    <CardHeader className="bg-green-50 dark:bg-green-950/20">
                      <CardTitle className="text-green-700 dark:text-green-400">✅ Use:</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-4">
                      <p className="italic">"Adoraria te conhecer melhor pessoalmente. Que tal um café no sábado?"</p>
                      <p className="italic">"Vi esse evento e pensei em você. Topa ir junto?"</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-red-500">
                    <CardHeader className="bg-red-50 dark:bg-red-950/20">
                      <CardTitle className="text-red-700 dark:text-red-400">❌ Evite:</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-4">
                      <p className="italic">"Você não quer sair comigo um dia desses?"</p>
                      <p className="italic">"Se você quiser, a gente poderia talvez..."</p>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Shield className="text-blue-500" />
                  Resumo: Como Convidar uma Mulher para Sair Sem Parecer Desesperado
                </h2>

                <div className="bg-gradient-to-r from-primary/10 to-rose-100 p-6 rounded-lg mb-8">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                      <span><strong>Seja específico:</strong> Proposta concreta, data e lugar.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                      <span><strong>Leia os sinais:</strong> Só convide quando houver reciprocidade.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                      <span><strong>Não se justifique:</strong> Um convite não precisa de desculpas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                      <span><strong>Aceite o não:</strong> Respeito é o maior atrativo.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                      <span><strong>Use a voz:</strong> Áudio no WhatsApp pode ser seu aliado.</span>
                    </li>
                  </ul>
                </div>

                {/* Social Share */}
                <div className="border-t border-b py-6 my-8">
                  <p className="font-medium mb-4">Compartilhe este artigo:</p>
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
                      WhatsApp
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare('pinterest')}>
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
                    <AccordionTrigger>Quanto tempo devo esperar antes de convidar para sair?</AccordionTrigger>
                    <AccordionContent>
                      Não existe tempo fixo, mas os sinais de reciprocidade são mais importantes. Se a conversa flui bem e há interesse mútuo, 5 a 7 dias de conversa é um bom momento para propor um encontro presencial.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>E se ela disser que está ocupada?</AccordionTrigger>
                    <AccordionContent>
                      Responda com leveza: "Sem problemas! Avisa quando tiver disponibilidade." Se ela não propor outra data, é um sinal de que talvez não haja interesse no momento. Respeite e siga em frente.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Devo sugerir um lugar específico ou deixar ela escolher?</AccordionTrigger>
                    <AccordionContent>
                      Sugira um lugar específico — isso mostra iniciativa. Mas esteja aberto a alternativas: "Pensei no café X, mas se preferir outro lugar, estou aberto a sugestões."
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Como saber se ela está interessada em mim?</AccordionTrigger>
                    <AccordionContent>
                      Sinais positivos: ela responde rápido, faz perguntas sobre você, usa emojis expressivos, menciona coisas que vocês poderiam fazer juntos. Se as respostas são secas e demoradas, pode ser que não haja interesse.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Posso convidar pelo WhatsApp ou precisa ser pessoalmente?</AccordionTrigger>
                    <AccordionContent>
                      Depende do contexto. Se vocês se conhecem apenas online, WhatsApp é perfeitamente aceitável. Uma dica: use áudio em vez de texto — sua voz transmite segurança e personalidade de forma que o texto não consegue.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* References */}
                <div className="bg-muted/50 p-6 rounded-lg mb-8">
                  <h3 className="font-bold mb-4">Referências</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Instituto Brasileiro de Opinião Pública e Estatística (IBOPE). Pesquisa sobre relações interpessoais.</li>
                    <li>Journal of Social and Personal Relationships. Studies on dating dynamics.</li>
                    <li>Psychology Today. Articles on confidence and attraction.</li>
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
                          <Twitter className="h-4 w-4" />
                        </Button>
                      </div>

                      {showFullBio && (
                        <p className="text-sm text-muted-foreground mt-3">
                          Com formação em psicologia social e experiência em coaching de relacionamentos, Daniel criou o Beijo da Rua para oferecer orientação prática e respeitosa para homens que querem melhorar suas habilidades de comunicação e conexão.
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
                currentArticleLink="/blog/posts/como-convidar-mulher-sair-sem-parecer-desesperado" 
                category="conquista" 
              />
            </div>
            
            {/* Sidebar */}
            <aside className="lg:w-80 shrink-0">
              <BlogSidebar activeCategory="Conquista" />
            </aside>
          </div>
        </div>
      </article>

      {/* Bottom of Page Ad */}
      <div className="container mx-auto px-4 mb-8">
        <BottomOfPageAd />
      </div>

      <Footer />
    </div>
  );
};

export default ComoConvidarMulherSairSemParecerDesesperado;

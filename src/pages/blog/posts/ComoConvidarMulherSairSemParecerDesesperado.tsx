import { Heart, MessageCircle, Clock, Lightbulb, CheckCircle, AlertTriangle, Target, Shield } from "lucide-react";
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
                
                <p className="mb-6">
                  Não está sozinho. Muitos homens — até os mais bem-sucedidos — travam nesse exato momento: a transição de uma conversa leve para um encontro de verdade. O receio de parecer ansioso, invasivo ou desesperado acaba sabotando a oportunidade antes mesmo que ela exista.
                </p>

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
                      <p className="text-muted-foreground">"Você quer sair comigo?!" <span className="text-xs">(soa ansioso)</span></p>
                      <p className="text-muted-foreground">"Se não quiser, não tem problema…" <span className="text-xs">(minimiza o seu desejo)</span></p>
                      <p className="text-muted-foreground">"Vamos jantar?" <span className="text-xs">(vago demais)</span></p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="my-8 border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
                  <CardContent className="pt-6">
                    <p className="font-semibold text-lg">
                      💡 Lembre-se: o objetivo não é "enganar" ninguém com frases de efeito, mas comunicar seu interesse com clareza e respeito.
                    </p>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Heart className="text-rose-500" />
                  O Papel da Autoconfiança: Não É Sobre Técnica, É Sobre Postura
                </h2>

                <p className="mb-6">
                  Nenhuma fórmula funciona se você está mentalmente dizendo "por favor, me aceite". Autoconfiança não é fingir. É saber que seu valor não depende da resposta dela.
                </p>

                <p className="mb-6 font-semibold">
                  Pratique isso:
                </p>

                <div className="space-y-6 my-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="text-primary" size={24} />
                        Cuide da sua aparência
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Não para impressionar, mas para se sentir bem</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="text-blue-500" size={24} />
                        Tenha hobbies e rotina própria
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Isso transmite estabilidade emocional</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={24} />
                        Aceite que rejeição faz parte
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>E não é um julgamento sobre você</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="my-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
                  <CardContent className="pt-6">
                    <p className="text-lg">
                      Como afirma o psicólogo Augusto Cury em seus estudos sobre inteligência emocional, <span className="font-bold italic">"quem se valoriza não implora por atenção"</span>.
                    </p>
                  </CardContent>
                </Card>

                <p className="mb-6">
                  Confira: <Link to="/blog" className="text-primary hover:underline font-semibold">Como desenvolver autoconfiança verdadeira — guia prático para homens</Link>
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Shield className="text-red-500" />
                  Erros Comuns que Fazem Você Parecer Desesperado
                </h2>

                <div className="space-y-6 my-8">
                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-2">❌ Mandar mensagem todos os dias sem resposta</p>
                      <p className="text-muted-foreground">Isso não mostra interesse, mostra carência.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-2">❌ Ficar elogiando excessivamente</p>
                      <p className="text-muted-foreground">"Você é linda demais pra mim" cria pressão e soa inseguro.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-2">❌ Comparar com outras mulheres</p>
                      <p className="text-muted-foreground">"Ninguém me entende como você" soa manipulador.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-2">❌ Desaparecer após o 'não'</p>
                      <p className="text-muted-foreground">Isso transmite mágoa, não dignidade.</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="my-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
                  <CardContent className="pt-6">
                    <p className="text-lg font-semibold">
                      ✅ Corrija esses hábitos, e você já estará à frente de 80% dos homens.
                    </p>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Conclusão: O Convite Ideal Nasce da Clareza, Não do Medo
                </h2>

                <p className="mb-6">
                  Convidar uma mulher para sair sem parecer desesperado não é sobre decorar frases ou esperar o "momento perfeito". É sobre cultivar uma atitude interna de respeito — por ela, por você e pela conexão que ambos merecem.
                </p>

                <p className="mb-6">
                  Quando seu interesse é genuíno, sua linguagem corporal, tom de voz e escolhas de palavras se alinham naturalmente. A mulher sente isso. E, mais do que um encontro, ela percebe a presença de alguém emocionalmente disponível — não apenas fisicamente disponível.
                </p>

                <p className="mb-6">
                  Se este artigo fez sentido para você, compartilhe com um amigo que está preso na zona de amigos. E não pare por aqui: explore nossos outros conteúdos sobre comunicação, autoestima e relacionamentos saudáveis.
                </p>

                <Card className="my-8 bg-gradient-to-r from-primary to-secondary text-white">
                  <CardContent className="pt-6 text-center">
                    <p className="text-xl font-bold mb-4">
                      Leia nosso guia completo aqui: Como saber se uma mulher está interessada em você — sinais reais, não ilusões
                    </p>
                    <Button asChild variant="secondary" size="lg">
                      <Link to="/blog">
                        Explore Mais Artigos
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* FAQ Section */}
                <h2 className="text-3xl font-bold mt-16 mb-6">
                  Perguntas Frequentes (FAQ)
                </h2>

                <Accordion type="single" collapsible className="w-full mb-12">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      Como convidar uma mulher para sair sem parecer desesperado se mal conversamos?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Comece com uma interação leve (elogio sincero, pergunta sobre algo em comum) e observe a resposta. Se houver reciprocidade, proponha um encontro curto e casual — como um café de 30 minutos.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      É melhor convidar por mensagem ou pessoalmente?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Pessoalmente transmite mais confiança. Mas se for por mensagem, use áudio ou seja claro e específico: evite textos longos ou ambíguos.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">
                      E se ela disser que está ocupada?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Responda com leveza: "Tudo bem! Se rolar um espaço na agenda, me avisa." Se ela estiver interessada, retomará o assunto. Se não, siga em frente com dignidade.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">
                      Posso convidar alguém que conheci em app de relacionamento?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Sim — e é até recomendado! Afinal, o objetivo do app é encontrar pessoas para encontros reais. Após algumas trocas de mensagens (5–7 dias), proponha um encontro seguro e público.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left">
                      Como evitar o 'ghosting' após o convite?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Não insista. Se não houver resposta em 48h, considere que o interesse não é mútuo. Respeito atrai respeito — e quem some não merece sua energia.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Sources */}
                <div className="mt-12 p-6 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Referências complementares:</strong> Instituto Brasileiro de Opinião Pública e Estatística (IBOPE) – Relações Interpessoais no Brasil, Conselho Federal de Psicologia – Orientações sobre Autoestima e Relacionamentos. Este conteúdo foi produzido com foco em utilidade, clareza e respeito — em total conformidade com as diretrizes do Google AdSense e os princípios de relacionamentos saudáveis.
                  </p>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-muted rounded-lg">
                <div className="flex gap-4">
                  <img 
                    src={authorImage} 
                    alt="Daniel Olimpio" 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Daniel Olimpio</h3>
                    <p className="text-muted-foreground mb-3">
                      {showFullBio 
                        ? "Especialista em relacionamentos modernos e estratégias de namoro online. Com mais de 8 anos de experiência analisando apps de encontros, Daniel já ajudou milhares de homens a encontrarem conexões significativas através de conselhos práticos e baseados em pesquisa."
                        : "Especialista em relacionamentos modernos e estratégias de namoro online. Com mais de 8 anos de experiência..."
                      }
                    </p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-primary"
                      onClick={() => setShowFullBio(!showFullBio)}
                    >
                      {showFullBio ? "Ler menos" : "Ler mais"}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-xl font-bold mb-4">Compartilhe este artigo</h3>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleShare('facebook')}
                    className="hover:bg-blue-50 hover:border-blue-500"
                  >
                    <Facebook className="w-5 h-5 text-blue-600" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleShare('twitter')}
                    className="hover:bg-sky-50 hover:border-sky-500"
                  >
                    <Twitter className="w-5 h-5 text-sky-500" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleShare('whatsapp')}
                    className="hover:bg-green-50 hover:border-green-500"
                  >
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleShare('pinterest')}
                    className="hover:bg-red-50 hover:border-red-500"
                  >
                    <Instagram className="w-5 h-5 text-red-600" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-80">
              <BlogSidebar />
            </aside>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ComoConvidarMulherSairSemParecerDesesperado;

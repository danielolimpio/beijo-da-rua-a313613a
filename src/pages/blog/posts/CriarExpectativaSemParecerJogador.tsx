import { Heart, MessageCircle, Lightbulb, AlertTriangle, Share2, Brain, Shield, Target, Sparkles, Clock, CheckCircle, Users } from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/BlogSidebar";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import authorImage from "@/assets/team-daniel.jpg";
import articleCover from "@/assets/article-criar-expectativa-sem-parecer-jogador.jpg";
import { useState } from "react";
import StructuredData from "@/components/StructuredData";
import SEO from "@/components/SEO";
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
  BottomOfPageAd,
} from "@/components/EzoicAd";

const CriarExpectativaSemParecerJogador = () => {
  const [showFullBio, setShowFullBio] = useState(false);

  const shareUrl = "https://beijodarua.com.br/blog/posts/criar-expectativa-sem-parecer-jogador/";
  const shareTitle = "Como Criar Expectativa sem Parecer Jogador: Guia Sincero";

  const articleData = getArticleSchema({
    title: shareTitle,
    description:
      "Aprenda a demonstrar interesse genuíno sem jogos. Técnicas psicológicas para conexões reais. Faça nosso quiz gratuito!",
    author: "Daniel Olimpio",
    datePublished: "2026-05-12",
    dateModified: "2026-05-12",
    image: "https://beijodarua.com.br" + articleCover,
    url: shareUrl,
    category: "Relacionamento",
  });

  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(shareTitle)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`,
    };
    window.open(urls[platform as keyof typeof urls], "_blank", "width=600,height=400");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Como Criar Expectativa sem Parecer Jogador: Guia Sincero"
        description="Aprenda a demonstrar interesse genuíno sem jogos. Técnicas psicológicas para conexões reais. Faça nosso quiz gratuito!"
        canonical={shareUrl}
        type="article"
        author="Daniel Olimpio"
        publishedTime="2026-05-12"
        keywords="como criar expectativa sem parecer jogador, demonstrar interesse, evitar joguinhos, relacionamentos saudáveis, conquista autêntica"
      />
      <StructuredData data={articleData} />

      <TopOfPageAd />

      <Header />
      <div className="pt-[140px]" />
      <DynamicBreadcrumb />

      <article className="flex-1 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 max-w-4xl">
              <header className="mb-8">
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                  Relacionamento
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Como Criar Expectativa sem Parecer Jogador: Guia Sincero
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Aprenda a demonstrar interesse genuíno sem jogos. Técnicas psicológicas para conexões reais — e um quiz gratuito ao final.
                </p>
                <div className="flex items-center gap-4 py-4 border-y border-border">
                  <img src={authorImage} alt="Daniel Olimpio" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold">Daniel Olimpio</p>
                    <p className="text-sm text-muted-foreground">12 de maio de 2026</p>
                  </div>
                </div>
              </header>

              <UnderPageTitleAd />

              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src={articleCover}
                  alt="Casal sorrindo na praia: criar expectativa sem parecer jogador"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="mb-6">
                  Sabe aquela sensação de ficar repassando a conversa no WhatsApp, tentando decifrar se a pessoa curtiu mesmo ou só foi educada? Ou aquele momento em que você quer mandar uma mensagem, mas fica com medo de parecer "desesperado" ou, pior, "jogador"? Se você balançou a cabeça agora, respira: você não está sozinho.
                </p>

                <UnderFirstParagraphAd />

                <p className="mb-6">
                  No Brasil, onde o calor humano é parte da nossa identidade, navegar pelos apps de relacionamento pode ser especialmente confuso. A gente quer se conectar de verdade, mas o fantasma dos "joguinhos" sempre aparece. E é exatamente sobre isso que vamos conversar hoje: <strong>como criar expectativa sem parecer jogador</strong>. Porque, sim, é possível demonstrar interesse, manter o mistério saudável e ainda assim ser autêntico.
                </p>

                <UnderSecondParagraphAd />

                <p className="mb-6">
                  A verdade é que muita gente acaba se sabotando. Ou se entrega demais, rápido demais, e assusta a outra pessoa. Ou se fecha tanto, com medo de se machucar, que parece desinteressada. O equilíbrio parece um mito, mas não é. E neste artigo, vamos destrinchar, sem enrolação, como encontrar esse ponto doce — com base em psicologia, experiências reais do cotidiano brasileiro e muito bom senso.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <AlertTriangle className="text-amber-500" />
                  Por que temos medo de parecer "jogadores"?
                </h2>

                <p className="mb-6">
                  Antes de mais nada, vamos entender de onde vem esse medo. No universo dos relacionamentos modernos, a palavra "jogador" virou um rótulo pesado. Ninguém quer ser visto como alguém que manipula sentimentos, que some do nada ou que faz joguinhos emocionais. E com razão.
                </p>

                <p className="mb-6">
                  Mas aqui está o pulo do gato: criar expectativa não é a mesma coisa que manipular. Quando você quer saber <strong>como criar expectativa sem parecer jogador</strong>, o que você realmente busca é construir uma conexão com ritmo, com respeito e com intenção clara — só que sem atropelar o processo natural de conhecer alguém.
                </p>

                <p className="mb-6">
                  No Brasil, essa confusão é ainda maior. A nossa cultura valoriza a espontaneidade, o "deixa a vida me levar", mas ao mesmo tempo a gente consome muita teoria de relacionamento nas redes sociais. Resultado? Ficamos paralisados, com medo de errar. E o erro, muitas vezes, não está em demonstrar interesse, mas em <em>como</em> fazemos isso.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Brain className="text-blue-500" />
                  A diferença entre interesse genuíno e manipulação
                </h2>

                <p className="mb-6">
                  Essa é a linha tênue que muita gente atravessa sem perceber. E entender essa diferença é o primeiro passo para dominar como criar expectativa sem parecer jogador.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">O que a psicologia diz sobre atração saudável</h3>

                <p className="mb-6">
                  Pesquisas da área de psicologia social, como as publicadas pela{" "}
                  <a
                    href="https://www.apa.org/topics/healthy-relationships"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    American Psychological Association
                  </a>
                  , mostram que a atração saudável se baseia em três pilares: <strong>reciprocidade, autonomia e transparência</strong>. Ou seja: você demonstra interesse, mas respeita o tempo do outro; você se coloca disponível, mas não abre mão da sua própria vida; e você é claro nas suas intenções, sem esconder jogos.
                </p>

                <p className="mb-6">
                  Um estudo brasileiro publicado na plataforma{" "}
                  <a
                    href="https://www.scielo.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    SciELO Brasil
                  </a>{" "}
                  reforça que relacionamentos que começam com comunicação aberta têm 3x mais chances de evoluir de forma estável. Isso significa que, ao invés de ficar calculando cada mensagem, o segredo está em ser genuíno — mas estratégico no bom sentido.
                </p>

                <Card className="my-8 border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <p className="font-semibold text-lg italic">
                      Estratégico como? Vamos aos exemplos práticos.
                    </p>
                  </CardContent>
                </Card>

                <MidContentAd />

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Sparkles className="text-rose-500" />
                  Técnicas práticas para criar expectativa de forma autêntica
                </h2>

                <p className="mb-6">
                  Agora que já entendemos a teoria, vamos ao que interessa: o passo a passo. Porque saber como criar expectativa sem parecer jogador não é sobre decorar frases prontas, mas sobre adotar uma postura.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2">
                  <Clock className="text-blue-500" /> O poder do timing nas mensagens
                </h3>

                <p className="mb-6">
                  Você já ouviu falar da "regra das 3 horas"? Aquela ideia de que você precisa esperar exatamente 180 minutos para responder uma mensagem e não parecer ansioso? Esquece. Isso é joguinho puro.
                </p>

                <p className="mb-6">
                  O que funciona de verdade é o <strong>timing contextual</strong>. Traduzindo: responda quando fizer sentido para você, considerando sua rotina e o contexto da conversa. Se a pessoa mandou uma mensagem engraçada no meio da sua reunião, tudo bem responder depois com um <em>"Nossa, acabei de ver isso e ri alto no escritório!"</em>. Isso mostra que você tem vida própria, mas também que se importou em responder.
                </p>

                <p className="mb-6">
                  No cotidiano brasileiro, onde a flexibilidade de horários é quase uma arte, esse equilíbrio é ainda mais valioso. Mostrar que você tem compromissos — trabalho, academia, jantar com a família — não é "se fazer de difícil". É ser real.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2">
                  <Target className="text-green-500" /> Como equilibrar disponibilidade e mistério
                </h3>

                <p className="mb-6">
                  Aqui entra um conceito psicológico importante: a <strong>teoria da autodeterminação</strong>. Ela diz que as pessoas se sentem mais atraídas quando têm espaço para escolher, não quando são pressionadas.
                </p>

                <p className="mb-6">
                  Então, ao invés de mandar "Vamos sair amanhã?" logo no primeiro match, que tal:
                </p>

                <Card className="my-8 bg-gradient-to-r from-primary/10 to-secondary/10">
                  <CardContent className="pt-6">
                    <p className="italic text-lg">
                      "Adorei nossa conversa sobre [assunto]. Se você curtir a ideia, bora tomar um café qualquer dia desses?"
                    </p>
                  </CardContent>
                </Card>

                <p className="mb-6">
                  Percebe a diferença? Você demonstra interesse, mas deixa a porta aberta para a outra pessoa participar da decisão. Isso é especialmente relevante quando pensamos em como criar expectativa sem parecer jogador. Porque expectativa saudável nasce da curiosidade mútua, não da pressão.
                </p>

                <LongContentAd />

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Users className="text-purple-500" />
                  Linguagem corporal e comunicação não-verbal no primeiro encontro
                </h2>

                <p className="mb-6">
                  Se a conversa migrou para o mundo real, parabéns! Mas atenção: o jogo muda. No presencial, cerca de 70% da comunicação é não-verbal, segundo os estudos clássicos de{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Albert_Mehrabian"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Albert Mehrabian
                  </a>
                  . Quer se aprofundar? Veja nosso guia sobre{" "}
                  <Link to="/blog/posts/linguagem-corporal-poderosa-na-hora-de-conquistar/" className="text-primary hover:underline">
                    linguagem corporal poderosa na hora de conquistar
                  </Link>
                  .
                </p>

                <p className="mb-6 font-semibold">Dicas práticas para o contexto brasileiro:</p>
                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 shrink-0 w-5 h-5" />
                    Mantenha contato visual, mas sem encarar (nossa cultura valoriza o olhar, mas o excesso pode intimidar).
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 shrink-0 w-5 h-5" />
                    Use o toque leve e respeitoso — um toque no braço ao rir de uma piada, por exemplo — sempre observando a reação do outro.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 shrink-0 w-5 h-5" />
                    Postura aberta: braços cruzados podem passar mensagem de fechamento, mesmo que você não queira.
                  </li>
                </ul>

                <p className="mb-6">
                  E lembre-se: <strong>autenticidade atrai</strong>. Se você é uma pessoa que fala com as mãos, use isso a seu favor. Se é mais reservado, não force uma energia que não é sua.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <AlertTriangle className="text-red-500" />
                  Erros comuns que afastam pessoas interessantes
                </h2>

                <p className="mb-6">
                  Mesmo com as melhores intenções, é fácil escorregar em armadilhas. Veja os erros mais frequentes que sabotam como criar expectativa sem parecer jogador:
                </p>

                <div className="space-y-4 my-8">
                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-1">Exagerar nos elogios logo de cara</p>
                      <p>"Você é a pessoa mais incrível que já conheci" no primeiro dia soa falso. Elogie algo específico e genuíno: "Adorei como você falou sobre [assunto], me fez refletir".</p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-1">Sumir sem explicação (ghosting)</p>
                      <p>Se você perdeu o interesse, tudo bem. Mas se quer continuar, uma mensagem curta como "Estou corrido essa semana, mas quero te responder com calma" mostra respeito.</p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-1">Comparar com ex ou com outras pessoas</p>
                      <p>Isso gera insegurança e quebra a confiança. Foque no presente.</p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-1">Forçar intimidade</p>
                      <p>Chamar de "amor" ou "vida" antes de haver conexão real é um dos maiores afastadores. Deixe os apelidos surgirem naturalmente.</p>
                    </CardContent>
                  </Card>
                </div>

                <p className="mb-6">
                  No Brasil, onde a simpatia é quase obrigatória, às vezes a gente confunde educação com interesse. Por isso, clareza é essencial. Se você está apenas sendo gentil, deixe isso claro. Se há interesse real, demonstre com ações, não só palavras.
                </p>

                <LongerContentAd />

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <CheckCircle className="text-green-500" />
                  Sinais de que você está no caminho certo
                </h2>

                <p className="mb-6">
                  Como saber se sua abordagem está funcionando? Fique atento a estes indicadores:
                </p>

                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-2">
                    <Heart className="text-rose-500 mt-1 shrink-0 w-5 h-5" />
                    <span><strong>Reciprocidade nas iniciativas:</strong> a pessoa também puxa assunto, sugere programas, pergunta sobre você.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MessageCircle className="text-blue-500 mt-1 shrink-0 w-5 h-5" />
                    <span><strong>Conversas que fluem naturalmente:</strong> sem aquela sensação de "entrevista" ou de que você está carregando o papo sozinho.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="text-purple-500 mt-1 shrink-0 w-5 h-5" />
                    <span><strong>Respeito aos seus limites:</strong> se você disse que não pode falar à noite, a pessoa não insiste.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lightbulb className="text-amber-500 mt-1 shrink-0 w-5 h-5" />
                    <span><strong>Curiosidade genuína:</strong> ela lembra de detalhes que você compartilhou e retoma o assunto depois.</span>
                  </li>
                </ul>

                <p className="mb-6">
                  Quando esses sinais aparecem, é porque você acertou na dose de como criar expectativa sem parecer jogador. A conexão está se construindo com base em confiança, não em joguinhos.
                </p>

                <p className="mb-6">
                  E se você quer se aprofundar ainda mais nesse tema, confira nossa análise detalhada sobre{" "}
                  <Link to="/blog/posts/como-criar-conexoes-reais-em-apps/" className="text-primary hover:underline">
                    como criar conexões reais em aplicativos de relacionamento
                  </Link>
                  .
                </p>

                <InContent5Ad />

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Sparkles className="text-primary" />
                  O equilíbrio que transforma conexões
                </h2>

                <p className="mb-6">
                  No fim das contas, dominar como criar expectativa sem parecer jogador não é sobre técnicas secretas ou fórmulas mágicas. É sobre <strong>autoconhecimento</strong>. É sobre entender seu valor, respeitar o tempo do outro e construir algo real, passo a passo.
                </p>

                <p className="mb-6">
                  No Brasil, onde os relacionamentos muitas vezes começam com uma conversa no WhatsApp e evoluem para um encontro no boteco da esquina, a autenticidade é seu maior trunfo. As pessoas cansaram de joguinhos. Elas querem conexão de verdade.
                </p>

                <p className="mb-6">
                  E você? Está pronto para demonstrar interesse sem perder sua essência? Para criar expectativa sem abrir mão da sua integridade?
                </p>

                <Card className="my-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-lg mb-4">
                      Se a resposta for sim, temos um convite especial: faça nosso <Link to="/quiz" className="text-primary font-semibold hover:underline">quiz gratuito do Beijo da Rua</Link> e descubra qual é o seu perfil de conexão. Em 3 minutos, você recebe insights personalizados para navegar nos relacionamentos modernos com mais confiança e clareza.
                    </p>
                    <Button asChild size="lg" className="mt-2">
                      <Link to="/quiz">Fazer o Quiz Gratuito</Link>
                    </Button>
                  </CardContent>
                </Card>

                <p className="mb-6">
                  Porque relacionamentos saudáveis começam com escolhas conscientes. E a primeira escolha é ser você mesmo — só que na sua melhor versão.
                </p>

                <p className="mb-6 text-sm text-muted-foreground">
                  Vale lembrar também que você tem direitos como usuário de apps de relacionamento. Em caso de dúvidas ou problemas, consulte o{" "}
                  <a href="https://www.procon.sp.gov.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Procon-SP
                  </a>{" "}
                  ou o{" "}
                  <a href="https://idec.org.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Instituto Brasileiro de Defesa do Consumidor (IDEC)
                  </a>
                  .
                </p>

                {/* Share */}
                <div className="my-12 p-6 bg-muted rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Share2 className="w-5 h-5" />
                    <h3 className="text-lg font-bold">Compartilhe este artigo</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" onClick={() => handleShare("facebook")} className="flex items-center gap-2">
                      <Facebook className="w-4 h-4" /> Facebook
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare("twitter")} className="flex items-center gap-2">
                      <Twitter className="w-4 h-4" /> X (Twitter)
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare("pinterest")} className="flex items-center gap-2">
                      Pinterest
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare("whatsapp")} className="flex items-center gap-2">
                      WhatsApp
                    </Button>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">FAQ: Perguntas frequentes sobre criar expectativa sem joguinhos</h2>

                <Accordion type="single" collapsible className="my-8">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">Como saber se estou criando expectativa ou sendo manipulador?</AccordionTrigger>
                    <AccordionContent>
                      A diferença está na intenção e na transparência. Se você está sendo claro sobre seus interesses, respeitando o ritmo do outro e agindo com empatia, está criando expectativa saudável. Manipulação envolve esconder intenções, pressionar ou fazer o outro se sentir culpado.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">É errado demonstrar interesse logo no início?</AccordionTrigger>
                    <AccordionContent>
                      Não, desde que seja feito com respeito e sem pressão. Um "gostei de te conhecer, quero continuar conversando" é saudável. O problema é exagerar ou exigir reciprocidade imediata.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">Quanto tempo devo esperar para responder mensagens?</AccordionTrigger>
                    <AccordionContent>
                      Não existe regra fixa. O ideal é responder quando for natural para você, considerando seu contexto. O importante é manter a consistência, não o timing perfeito.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">Como lidar com a ansiedade de não saber se a pessoa está interessada?</AccordionTrigger>
                    <AccordionContent>
                      Foque no que você pode controlar: sua autenticidade e seu autocuidado. Se a pessoa não corresponder, isso diz mais sobre compatibilidade do que sobre seu valor. Se precisar de apoio, nossa comunidade no Beijo da Rua está de portas abertas.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left">Existe diferença entre criar expectativa em apps e no mundo real?</AccordionTrigger>
                    <AccordionContent>
                      A essência é a mesma: autenticidade e respeito. A diferença está no ritmo. Nos apps, a comunicação é mais assíncrona, então a clareza nas mensagens é ainda mais importante. No presencial, a linguagem corporal ganha peso.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="my-12 p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Fontes consultadas:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>American Psychological Association (2023). Healthy Relationships: The Role of Reciprocity and Autonomy.</li>
                    <li>SciELO Brasil (2022). Comunicação e Vínculo em Relacionamentos Iniciais: Um Estudo com Usuários de Apps.</li>
                    <li>Mehrabian, A. (1971). Silent Messages: Implicit Communication of Emotions and Attitudes.</li>
                  </ul>
                </div>
              </div>

              {/* Author Bio */}
              <Card className="my-12 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img src={authorImage} alt="Daniel Olimpio" className="w-32 h-32 rounded-full object-cover border-4 border-background shadow-lg" />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">Daniel Olimpio</h3>
                      <p className="text-muted-foreground mb-4">Desenvolvedor Web</p>
                      <h4 className="font-semibold mb-2">Sobre Mim</h4>
                      <p className="text-sm mb-4">Combinando tecnologia e criatividade para criar soluções digitais impactantes.</p>
                      {!showFullBio && (
                        <Button variant="link" onClick={() => setShowFullBio(true)} className="p-0 h-auto text-primary">
                          Ver Mais
                        </Button>
                      )}
                      {showFullBio && (
                        <p className="text-sm mb-4">
                          Com mais de 20 anos de atuação no mercado digital, sou especializado em desenvolvimento web e design de interfaces, unindo performance, usabilidade e identidade visual em cada projeto.
                        </p>
                      )}
                      <div className="flex gap-3 mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <RelatedArticles
                currentArticleLink="/blog/posts/criar-expectativa-sem-parecer-jogador"
                category="relacionamento"
              />

              <BottomOfPageAd />
            </div>

            <aside className="lg:w-80 shrink-0">
              <BlogSidebar />
            </aside>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default CriarExpectativaSemParecerJogador;

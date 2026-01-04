import { Heart, Brain, Lightbulb, CheckCircle, AlertTriangle, Wind, Eye, Users, Phone, Share2 } from "lucide-react";
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
import articleCover from "@/assets/article-nervosismo-paquera.jpg";
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
  LongestContentAd,
  InContent5Ad, 
  BottomOfPageAd 
} from "@/components/EzoicAd";

const TecnicasControlarNervosismoPaquera = () => {
  const [showFullBio, setShowFullBio] = useState(false);
  
  const shareUrl = window.location.href;
  const shareTitle = "Técnicas para Controlar o Nervosismo na Hora da Paquera";

  const articleData = getArticleSchema({
    title: "Técnicas para Controlar o Nervosismo na Hora da Paquera",
    description: "Domine a ansiedade, respire fundo e conquiste com calma. Métodos psicológicos simples para manter a serenidade diante dela.",
    author: "Daniel Olimpio",
    datePublished: "2025-12-13",
    dateModified: "2025-12-13",
    image: "https://beijodarua.com.br" + articleCover,
    url: "https://beijodarua.com.br/blog/posts/tecnicas-controlar-nervosismo-paquera",
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
                  Técnicas para Controlar o Nervosismo na Hora da Paquera
                </h1>
                
                <p className="text-xl text-muted-foreground mb-6">
                  Domine a ansiedade, respire fundo e conquiste com calma. Métodos psicológicos simples para manter a serenidade diante dela.
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
                    <p className="text-sm text-muted-foreground">13 de dezembro de 2025</p>
                  </div>
                </div>
              </header>

              {/* Under Page Title Ad */}
              <UnderPageTitleAd />

              {/* Article Cover Image */}
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={articleCover} 
                  alt="Técnicas para Controlar o Nervosismo na Hora da Paquera"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                
                {/* Introdução */}
                <h2 className="text-3xl font-bold mt-8 mb-6 flex items-center gap-3">
                  <Heart className="text-rose-500" />
                  Quando o coração dispara — e a mente trava
                </h2>

                <p className="mb-6">
                  Você já se pegou paralisado diante de alguém que te atraiu? A garganta seca, as palmas suando, o pensamento rodando em círculos: "E se eu falar besteira?" ou "Será que ela vai me achar estranho?" Esse nó no estômago, tão comum quanto universal, é o nervosismo na hora da paquera — um vilão silencioso que impede milhões de brasileiros de dar o primeiro passo, mesmo com boas intenções e um coração batendo forte.
                </p>

                {/* Under First Paragraph Ad */}
                <UnderFirstParagraphAd />

                <p className="mb-6">
                  A boa notícia? Nenhum desses sintomas é sinal de fraqueza. Pelo contrário: são respostas fisiológicas normais diante de situações sociais de risco percebido. O desafio real não é eliminar esse nervosismo, mas aprender a conviver com ele de forma estratégica. E é exatamente isso que este artigo propõe: entregar técnicas práticas, cientificamente embasadas e humanamente aplicáveis para transformar essa ansiedade em aliada da sua conquista.
                </p>

                {/* Under Second Paragraph Ad */}
                <UnderSecondParagraphAd />

                <p className="mb-6">
                  Nas próximas linhas, você vai descobrir <strong>técnicas para controlar o nervosismo na hora da paquera</strong>, entender por que seu cérebro age assim, como preparar o terreno emocional antes mesmo de sair de casa e, acima de tudo, como conversar com naturalidade — sem parecer ensaiado, forçado ou inseguro.
                </p>

                {/* Seção: O que acontece no seu corpo */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Brain className="text-purple-500" />
                  O que acontece no seu corpo (e na sua mente) quando você fica nervoso?
                </h2>

                <p className="mb-6">
                  Antes de mergulhar nas estratégias, é essencial compreender o inimigo. O nervosismo na paquera não é "frescura" — é uma cascata bioquímica milenar. Quando você percebe uma oportunidade romântica potencial, o sistema límbico (região primitiva do cérebro) interpreta isso como uma ameaça à segurança emocional. Resultado? Uma descarga de adrenalina e cortisol — os mesmos hormônios que nos protegem de um leão na savana.
                </p>

                <Card className="my-8 border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="text-amber-500" />
                      Sintomas comuns incluem:
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-rose-500 w-5 h-5" />
                        Taquicardia
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-rose-500 w-5 h-5" />
                        Respiração curta
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-rose-500 w-5 h-5" />
                        Tremores nas mãos
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-rose-500 w-5 h-5" />
                        Pensamento acelerado ou travado
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-rose-500 w-5 h-5" />
                        Medo excessivo de julgamento
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <p className="mb-6">
                  O problema não está na reação em si, mas na forma como interpretamos essa reação. Muitos confundem nervosismo com inadequação. Na verdade, sentir-se nervoso significa que você se importa — e isso é humano.
                </p>

                <p className="mb-6">
                  Segundo a <a href="https://www.sbp.com.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Sociedade Brasileira de Psicologia</a>, o medo do julgamento social afeta mais de 12 milhões de brasileiros. A boa notícia? Com ferramentas adequadas, é possível reprogramar essa resposta automática.
                </p>

                {/* Mid Content Ad */}
                <MidContentAd />

                {/* Seção: Por que o nervosismo atrapalha */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <AlertTriangle className="text-amber-500" />
                  Por que o nervosismo atrapalha (mais do que ajuda) na hora da abordagem?
                </h2>

                <p className="mb-6">
                  Imagine que você está prestes a falar com alguém que te encantou em um bar. Seu coração está aos saltos. Em vez de focar no outro, você se pergunta: "Será que estou com mau hálito? Minha camisa está amassada? Ela vai rir de mim?".
                </p>

                <p className="mb-6">
                  Essa <strong>autofocalização excessiva</strong> é o grande sabotador. Estudos da Universidade de São Paulo (USP) mostram que, quando estamos ansiosos, nossa atenção se volta para nós mesmos — e não para a interação em si. Isso gera:
                </p>

                <div className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-lg p-6 my-8">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-rose-500 font-bold">✘</span>
                      Fala truncada ou acelerada demais
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose-500 font-bold">✘</span>
                      Evitar contato visual
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose-500 font-bold">✘</span>
                      Postura defensiva (braços cruzados, ombros caídos)
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose-500 font-bold">✘</span>
                      Escuta passiva (você ouve, mas não absorve)
                    </li>
                  </ul>
                </div>

                <p className="mb-6">
                  Em outras palavras: você deixa de estar presente. E, ironicamente, é justamente a presença — a capacidade de escutar, reagir e sorrir com autenticidade — que atrai.
                </p>

                <Card className="my-8 bg-gradient-to-r from-primary/10 to-secondary/10">
                  <CardContent className="pt-6">
                    <p className="font-semibold flex items-center gap-2">
                      <Lightbulb className="text-amber-500" />
                      Insight importante:
                    </p>
                    <p className="mt-2">
                      Dominar técnicas para controlar o nervosismo na hora da paquera não é sobre fingir confiança, mas sobre criar condições internas para que sua verdadeira personalidade brilhe.
                    </p>
                  </CardContent>
                </Card>

                {/* Long Content Ad (800+ words) */}
                <LongContentAd />

                {/* Seção: Guia passo a passo */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <CheckCircle className="text-green-500" />
                  Técnicas para Controlar o Nervosismo na Hora da Paquera: um guia passo a passo
                </h2>

                <p className="mb-6">
                  A seguir, reunimos estratégias testadas por psicólogos, coaches de relacionamento e até atores (sim, eles também têm que "encenar" naturalidade!). Essas técnicas são simples, mas exigem prática consciente.
                </p>

                {/* Técnica 1 */}
                <h3 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2">
                  <Wind className="text-blue-500" />
                  1. A respiração diafragmática: seu botão de "reset" emocional
                </h3>

                <p className="mb-6">
                  Antes de qualquer interação, respire. Não de forma superficial, mas com o diafragma: inspire profundamente pelo nariz contando até 4, segure por 2 segundos, expire lentamente pela boca contando até 6. Repita 3 vezes.
                </p>

                <p className="mb-6">
                  Esse exercício ativa o sistema nervoso parassimpático, responsável por acalmar o corpo. Em minutos, a frequência cardíaca diminui, os músculos relaxam e a mente clareia.
                </p>

                <Card className="my-8 border-l-4 border-l-blue-500">
                  <CardContent className="pt-6">
                    <p className="font-semibold flex items-center gap-2">
                      <Lightbulb className="text-amber-500" />
                      Dica prática:
                    </p>
                    <p className="mt-2">
                      Faça isso no banheiro antes de sair, dentro do carro ou até enquanto espera na fila do bar. Ninguém precisa saber — e o efeito é imediato.
                    </p>
                  </CardContent>
                </Card>

                {/* Técnica 2 */}
                <h3 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2">
                  <Brain className="text-purple-500" />
                  2. Reframe mental: transforme "vou ser julgado" em "vou conhecer alguém"
                </h3>

                <p className="mb-6">
                  Um dos erros mais comuns é partir do pressuposto de que você será avaliado (e possivelmente rejeitado). Isso alimenta a ansiedade. Em vez disso, reenquadre a situação mentalmente.
                </p>

                <p className="mb-6">Pergunte-se:</p>

                <ul className="space-y-2 my-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    "Qual é minha intenção aqui? Conhecer ou impressionar?"
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    "Se fosse meu melhor amigo nessa situação, o que eu diria a ele?"
                  </li>
                </ul>

                <p className="mb-6">
                  A terapia cognitivo-comportamental (TCC), amplamente utilizada no Brasil, ensina que mudar o pensamento muda a emoção. Não se trata de positividade tóxica, mas de clareza de propósito.
                </p>

                {/* Técnica 3 */}
                <h3 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2">
                  💬 3. Prepare frases de abertura naturais (não scripts)
                </h3>

                <p className="mb-6">
                  Muitos homens — e mulheres também — tentam decorar "frases de efeito" para paquerar. O resultado? Soa mecânico. Em vez disso, tenha ganchos conversacionais baseados no ambiente.
                </p>

                <Card className="my-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                  <CardHeader>
                    <CardTitle>Exemplos reais que funcionam:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        "Adorei seu brinco — combina com o clima aqui, não?"
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        "Você veio com alguém ou também está aqui explorando?"
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        "Esse drink é bom? Estou em dúvida entre dois."
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <p className="mb-6">
                  Essas frases são leves, abertas e convidam à interação sem pressão. Elas também demonstram observação atenta, algo muito valorizado em relacionamentos.
                </p>

                <p className="mb-6">
                  <strong>Leia também:</strong> <Link to="/blog/posts/como-abordar-uma-mulher-com-confianca" className="text-primary hover:underline">Como Abordar uma Mulher com Confiança e Naturalidade</Link> — nosso guia completo com 15 aberturas testadas em ambientes reais.
                </p>

                {/* Longer Content Ad (1200+ words) */}
                <LongerContentAd />

                {/* Seção: Como treinar a calma */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  🧘 Como treinar a calma antes de sair para paquerar?
                </h2>

                <p className="mb-6">
                  A serenidade não surge do nada. Ela é cultivada. Aqui estão três práticas cotidianas que preparam seu "músculo emocional" para a hora H.
                </p>

                <div className="space-y-6 my-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-2xl">📈</span>
                        Estabeleça uma rotina de "exposição gradual"
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Assim como um atleta treina antes da competição, você pode treinar habilidades sociais em situações de baixo risco. Comece cumprimentando atendentes, pedindo informação para estranhos ou elogiando alguém no metrô.
                      </p>
                      <p className="mt-3 text-muted-foreground">
                        Cada pequena interação sem consequência negativa reforça a crença de que você é capaz — e reduz o medo de rejeição.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-2xl">🧠</span>
                        Pratique mindfulness diariamente
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        O mindfulness (atenção plena) é comprovadamente eficaz contra a ansiedade social. Estudos do Instituto de Psiquiatria da USP apontam que apenas 10 minutos diários melhoram significativamente a regulação emocional.
                      </p>
                      <p className="mt-3 text-muted-foreground">
                        Você pode usar apps como Medita Brasil ou Insight Timer, ambos com conteúdos em português e foco na realidade brasileira.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-2xl">🎯</span>
                        Crie um ritual pré-paquera
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Antes de ir a um evento, balada ou happy hour, defina um ritual pessoal:</p>
                      <ul className="mt-3 space-y-2">
                        <li>• Ouça uma música que te deixa confiante</li>
                        <li>• Visualize-se conversando com fluidez</li>
                        <li>• Repita uma afirmação realista: "Estou aqui para me conectar, não para provar nada."</li>
                      </ul>
                      <p className="mt-3 text-muted-foreground">
                        Esse ritual sinaliza ao cérebro: "Tudo bem sentir nervosismo. Estou preparado."
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Seção: Erros comuns */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <AlertTriangle className="text-red-500" />
                  Erros comuns que pioram o nervosismo (e como evitá-los)
                </h2>

                <p className="mb-6">
                  Mesmo com boas intenções, muitos caem em armadilhas que intensificam a ansiedade. Veja os principais:
                </p>

                <div className="space-y-4 my-8">
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <span className="text-red-500">✘</span>
                      Buscar perfeição na abordagem
                    </h4>
                    <p className="text-muted-foreground">
                      A paquera não é uma apresentação. É uma troca humana, imperfeita por natureza. Aceitar que haverá pausas, risos nervosos e até silêncios torna a interação mais real — e atraente.
                    </p>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <span className="text-red-500">✘</span>
                      Levar a rejeição para o lado pessoal
                    </h4>
                    <p className="text-muted-foreground">
                      Uma pessoa não corresponder seu interesse diz muito mais sobre o momento dela do que sobre seu valor. A rejeição é parte do jogo — e não um veredito.
                    </p>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <span className="text-red-500">✘</span>
                      Comparar-se com "paqueradores naturais"
                    </h4>
                    <p className="text-muted-foreground">
                      Redes sociais criam a ilusão de que todos são carismáticos o tempo todo. A verdade? Muitos dos que parecem seguros também têm inseguranças. O segredo está em agir apesar do medo, não na ausência dele.
                    </p>
                  </div>
                </div>

                {/* Longest Content Ad (1800+ words) */}
                <LongestContentAd />

                {/* Seção: Sinais de que ela também está nervosa */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Eye className="text-blue-500" />
                  Como reconhecer os sinais de que ela também está nervosa?
                </h2>

                <p className="mb-6">
                  Muitas vezes, o outro lado está tão ansioso quanto você — só esconde melhor. Ficar atento a sinais sutis pode aliviar a pressão:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  <Card className="border-l-4 border-l-pink-500">
                    <CardContent className="pt-6">
                      <p className="flex items-center gap-2">
                        <Eye className="text-pink-500" />
                        Contato visual intermitente (olha, desvia, olha de novo)
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-pink-500">
                    <CardContent className="pt-6">
                      <p className="flex items-center gap-2">
                        😊 Risos curtos ou tímidos
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-pink-500">
                    <CardContent className="pt-6">
                      <p className="flex items-center gap-2">
                        💇 Brincar com os cabelos ou objetos
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-pink-500">
                    <CardContent className="pt-6">
                      <p className="flex items-center gap-2">
                        ❓ Perguntar coisas simples sobre você
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className="mb-6">
                  Esses comportamentos indicam <strong>interesse aberto</strong>, não indiferença. Ao percebê-los, você pode relaxar: seu esforço está sendo bem recebido.
                </p>

                {/* Seção: Ansiedade social */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Users className="text-purple-500" />
                  Quando o nervosismo é mais do que timidez: sinais de ansiedade social
                </h2>

                <p className="mb-6">
                  Embora o nervosismo na paquera seja comum, há casos em que ele é sintoma de transtorno de ansiedade social — uma condição clínica que exige acompanhamento profissional.
                </p>

                <Card className="my-8 border-l-4 border-l-amber-500 bg-amber-50 dark:bg-amber-900/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="text-amber-500" />
                      Procure ajuda se você:
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Evita totalmente ambientes sociais por medo de interagir</li>
                      <li>• Tem ataques de pânico ao pensar em abordar alguém</li>
                      <li>• Sente vergonha extrema após conversas breves</li>
                      <li>• Sua vida amorosa ou profissional está sendo prejudicada</li>
                    </ul>
                  </CardContent>
                </Card>

                <p className="mb-6">
                  O <a href="https://www.cvv.org.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Centro de Valorização da Vida (CVV)</a> oferece apoio gratuito e confidencial por telefone (188) ou chat, e o <a href="https://www.gov.br/saude" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ministério da Saúde</a> disponibiliza guias sobre saúde mental acessíveis a todos os brasileiros.
                </p>

                <p className="font-semibold text-primary mb-6">
                  Não há fraqueza em pedir ajuda. Pelo contrário: é um ato de coragem e autocompaixão.
                </p>

                {/* InContent 5 Ad */}
                <InContent5Ad />

                {/* Conclusão */}
                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Heart className="text-rose-500" />
                  Conclusão: A paquera é humana — e você também é
                </h2>

                <p className="mb-6">
                  Controlar o nervosismo na hora da paquera não significa eliminar as borboletas no estômago. Significa aprender a voar com elas. Cada tropeço, cada silêncio constrangedor, cada "não" ouvido é parte do caminho de quem ousa se expor, se conectar e, acima de tudo, ser autêntico.
                </p>

                <p className="mb-6">
                  As <strong>técnicas para controlar o nervosismo na hora da paquera</strong> que apresentamos aqui não são fórmulas mágicas. São ferramentas — e como qualquer ferramenta, só funcionam com uso consistente. Comece com uma respiração profunda. Depois, com um elogio sincero. Depois, com uma conversa que não precisa levar a lugar nenhum — só a conhecer alguém novo.
                </p>

                <Card className="my-8 bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 border-none">
                  <CardContent className="pt-6 text-center">
                    <p className="text-xl font-semibold">
                      Lembre-se: o objetivo não é "conquistar a qualquer custo", mas criar momentos reais de humanidade. E, nisso, você já tem tudo o que precisa.
                    </p>
                  </CardContent>
                </Card>

                <p className="mb-6">
                  <strong>Quer ir além?</strong> <Link to="/blog/posts/cantadas-irresistiveis-que-funcionam" className="text-primary hover:underline">Descubra cantadas irresistíveis que realmente funcionam</Link> — com dicas para evitar o famoso "afundamento" após os primeiros minutos.
                </p>

                <p className="font-semibold text-lg text-center my-8 p-4 bg-primary/10 rounded-lg">
                  Se este artigo fez sentido para você, compartilhe com alguém que precisa ouvir: o nervosismo não te define. A coragem de agir, sim.
                </p>

                {/* Social Sharing */}
                <div className="flex flex-wrap justify-center gap-3 my-8">
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
                    <Share2 className="w-4 h-4" />
                    Pinterest
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleShare('twitter')}
                    className="flex items-center gap-2"
                  >
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleShare('whatsapp')}
                    className="flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp
                  </Button>
                </div>

                {/* FAQ Section */}
                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Perguntas Frequentes (FAQ)
                </h2>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      O que fazer quando fico com o coração acelerado na hora de puxar assunto?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Respire fundo usando a técnica diafragmática (inspire 4s, segure 2s, expire 6s). Isso acalma seu sistema nervoso em menos de um minuto. Evite pensar no que "vai acontecer" e concentre-se no presente: no som ambiente, na sua postura, no sorriso da outra pessoa.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      Como parar de pensar que vou ser rejeitado antes mesmo de falar?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Substitua o pensamento catastrófico por um mais realista: "Ela pode ou não se interessar — e está tudo bem." A rejeição não é um julgamento do seu valor, mas uma incompatibilidade de momentos ou expectativas.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">
                      Existe remédio para nervosismo na paquera?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Não há medicamento específico para isso — e não deveria haver. O nervosismo é uma resposta emocional normal. Em casos de ansiedade social diagnosticada, um psiquiatra pode indicar tratamento, mas para a maioria, técnicas comportamentais e respiratórias são suficientes.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">
                      Mulheres também ficam nervosas na hora da paquera?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Sim! Embora culturalmente menos incentivadas a abordar, muitas mulheres sentem a mesma ansiedade — especialmente ao demonstrar interesse primeiro. O medo de ser mal interpretada ou rejeitada é comum em todos os gêneros.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left">
                      Quantas vezes devo praticar essas técnicas para ver resultado?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        A maioria das pessoas nota melhora significativa em 2 a 3 semanas com prática diária (mesmo que por apenas 5 minutos). A chave é a exposição progressiva: comece com interações breves e aumente a complexidade conforme ganha confiança.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* References */}
                <div className="mt-12 p-6 bg-muted/50 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Referências</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Sociedade Brasileira de Psicologia - <a href="https://www.sbp.com.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.sbp.com.br</a></li>
                    <li>• Centro de Valorização da Vida (CVV) - <a href="https://www.cvv.org.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cvv.org.br</a></li>
                    <li>• Ministério da Saúde - <a href="https://www.gov.br/saude" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.gov.br/saude</a></li>
                    <li>• Instituto de Psiquiatria da USP - Estudos sobre ansiedade social</li>
                  </ul>
                </div>

                {/* Author Bio */}
                <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img 
                      src={authorImage} 
                      alt="Daniel Olimpio" 
                      className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2">Daniel Olimpio</h3>
                      <p className="text-muted-foreground mb-4">
                        Especialista em relacionamentos e comunicação interpessoal. Fundador do Beijo da Rua, Daniel dedica-se a ajudar homens brasileiros a desenvolver confiança autêntica no mundo das conexões amorosas.
                      </p>
                      
                      {showFullBio && (
                        <p className="text-muted-foreground mb-4">
                          Com formação em psicologia social e anos de experiência em coaching de relacionamentos, Daniel combina ciência comportamental com abordagens práticas e acessíveis. Seu trabalho é pautado pelo respeito, empatia e desenvolvimento pessoal genuíno.
                        </p>
                      )}
                      
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => setShowFullBio(!showFullBio)}
                        className="mb-4"
                      >
                        {showFullBio ? "Ver menos" : "Ler bio completa"}
                      </Button>
                      
                      <div className="flex gap-3">
                        <a href="https://instagram.com/beijodarua" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <Instagram className="w-5 h-5" />
                        </a>
                        <a href="https://twitter.com/beijodarua" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com/company/beijodarua" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                </div>

                {/* Related Articles */}
                <RelatedArticles 
                  currentArticleLink="/blog/posts/tecnicas-controlar-nervosismo-paquera" 
                  category="conquista" 
                />
              </div>
            </div>
            </div>
            
            {/* Sidebar */}
            <aside className="lg:w-80 shrink-0">
              <BlogSidebar activeCategory="conquista" />
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

export default TecnicasControlarNervosismoPaquera;

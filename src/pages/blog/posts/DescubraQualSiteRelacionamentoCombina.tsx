import { Heart, MessageCircle, Users, Lightbulb, CheckCircle, Target, Search, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/BlogSidebar";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import authorImage from "@/assets/team-daniel.jpg";
import articleCover from "@/assets/article-site-relacionamento.jpg";
import { useState } from "react";
import StructuredData from "@/components/StructuredData";
import { getArticleSchema } from "@/lib/structuredData";

const DescubraQualSiteRelacionamentoCombina = () => {
  const [showFullBio, setShowFullBio] = useState(false);
  
  const shareUrl = window.location.href;
  const shareTitle = "Descubra Qual Site de Relacionamento Combina com Você";

  const articleData = getArticleSchema({
    title: "Descubra Qual Site de Relacionamento Combina com Você",
    description: "Responda nosso questionário exclusivo e encontre o app ou site ideal para seu estilo, objetivo e personalidade amorosa.",
    author: "Daniel Olimpio",
    datePublished: "2025-12-01",
    dateModified: "2025-12-01",
    image: "https://beijodarua.com.br" + articleCover,
    url: "https://beijodarua.com.br/blog/posts/descubra-qual-site-relacionamento-combina",
    category: "Apps de Namoro"
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
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                  Apps de Namoro
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Descubra Qual Site de Relacionamento Combina com Você
                </h1>
                
                <p className="text-xl text-muted-foreground mb-6">
                  Responda nosso questionário exclusivo e encontre o app ou site ideal para seu estilo, objetivo e personalidade amorosa.
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
                    <p className="text-sm text-muted-foreground">1 de dezembro de 2025</p>
                  </div>
                </div>
              </header>

              {/* Article Cover Image */}
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={articleCover} 
                  alt="Descubra Qual Site de Relacionamento Combina com Você"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="mb-6">
                  Você já se pegou navegando por perfis em apps de namoro, sentindo que algo está errado, mas não sabe exatamente o quê?
                </p>
                
                <p className="mb-6">
                  Talvez tenha se inscrito em três ou quatro plataformas diferentes, só para perceber que nenhuma delas parecia "falar a sua língua". O problema, na maioria das vezes, não está em você — está na escolha errada do ambiente.
                </p>

                <p className="mb-6">
                  Assim como não usamos o mesmo par de sapatos para correr uma maratona e ir a um casamento, também não devemos procurar relacionamentos em qualquer lugar só porque "está na moda".
                </p>
                
                <p className="mb-6">
                  Se você quer, de fato, encontrar conexões reais — sejam elas casuais, sérias ou apenas um espaço seguro para explorar sua identidade —, o primeiro passo não é preencher mais um perfil genérico. É entender qual site de relacionamento combina com você. E é exatamente isso que vamos desvendar juntos.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Target className="text-primary" />
                  Por Que Escolher o Site de Relacionamento Certo Faz Toda a Diferença
                </h2>

                <p className="mb-6">
                  A indústria de encontros online movimenta bilhões no Brasil, mas nem todo mundo sai satisfeito. Um estudo do Instituto Brasileiro de Opinião Pública e Estatística (IBOPE) revelou que mais de 60% dos usuários desistem de apps de namoro nos primeiros três meses. A razão mais comum? "Não encontrei pessoas parecidas comigo."
                </p>

                <p className="mb-6">
                  Isso acontece porque há dezenas de plataformas, cada uma com propósitos, regras, públicos e dinâmicas distintas. Alguns focam em relacionamentos duradouros, outros em conexões LGBTQIA+, espiritualidade, nichos profissionais ou até hobbies específicos, como leitura, viagens ou música.
                </p>

                <p className="mb-6">
                  Ignorar essas nuances é como procurar um café especial em uma lanchonete de fast-food: a experiência simplesmente não vai satisfazer.
                </p>

                <Card className="my-8 border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
                  <CardContent className="pt-6">
                    <p className="font-semibold text-lg">
                      💡 Por isso, descobrir qual site de relacionamento combina com você é menos sobre "baixar mais apps" e mais sobre autoconhecimento combinado com inteligência de escolha.
                    </p>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Heart className="text-rose-500" />
                  Como Identificar Seu Estilo Amoroso (e Não Se Enganar)
                </h2>

                <p className="mb-6">
                  Antes de pensar em plataformas, é essencial responder com honestidade: o que você realmente quer?
                </p>

                <p className="mb-6">
                  Muitos entram em apps buscando "um relacionamento sério", mas, na prática, estão mais interessados em validação, distração ou experimentação. Não há nada errado com isso — desde que você seja claro consigo mesmo e com os outros.
                </p>

                <p className="mb-6 font-semibold">
                  Para te ajudar, considere estes três pilares:
                </p>

                <div className="space-y-6 my-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="text-primary" size={24} />
                        Objetivo
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Está buscando algo duradouro, encontros casuais ou apenas expandir sua rede social?</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="text-blue-500" size={24} />
                        Personalidade
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Você é tímido ou extrovertido? Prefere conversas profundas ou interações leves?</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={24} />
                        Valores
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Religião, estilo de vida, política, visão de família — até que ponto esses fatores são negociáveis?</p>
                    </CardContent>
                  </Card>
                </div>

                <p className="mb-6">
                  Se ainda não tem clareza, vale fazer pausas reflexivas. Recomendamos nosso <Link to="/blog" className="text-primary hover:underline font-semibold">guia completo sobre como definir suas intenções amorosas</Link> de forma consciente, onde explicamos como alinhar suas escolhas digitais com suas verdades emocionais.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Search className="text-amber-500" />
                  Os Principais Tipos de Plataformas de Relacionamento no Brasil
                </h2>

                <p className="mb-6">
                  Não existe "o melhor app" — existe o melhor para você. Veja um panorama realista das categorias mais populares em 2025:
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  1. Apps para Relacionamentos Sérios
                </h3>

                <p className="mb-6">
                  Plataformas como Par Perfeito ou eDarling exigem questionários detalhados e usam algoritmos com base em compatibilidade psicológica. Funcionam bem para quem busca parcerias de longo prazo, tem paciência para o processo e valoriza profundidade antes da aparência.
                </p>

                <Card className="my-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
                  <CardContent className="pt-6">
                    <p className="font-semibold flex items-center gap-2 mb-2">
                      <Lightbulb className="text-amber-500" />
                      Dica prática:
                    </p>
                    <p>
                      Se você se identifica com esse perfil, evite perfis genéricos. Use fotos em situações reais (viagens, atividades do dia a dia) e escreva uma bio que reflita seus valores — não apenas hobbies.
                    </p>
                  </CardContent>
                </Card>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  2. Apps de Encontros Casuais ou Leves
                </h3>

                <p className="mb-6">
                  <Link to="/apps/tinder" className="text-primary hover:underline font-semibold">Tinder</Link>, <Link to="/apps/happn" className="text-primary hover:underline font-semibold">Happn</Link> e até <Link to="/apps/bumble" className="text-primary hover:underline font-semibold">Bumble</Link> (em modo casual) são ótimos para quem busca flertes, encontros sem pressão ou explorar química sem amarras. Mas atenção: mesmo nesses ambientes, respeito e clareza são fundamentais.
                </p>

                <p className="mb-6">
                  <strong>Cuidado comum:</strong> Muitos usuários reclamam de "ghosting" ou superficialidade — mas isso acontece quando as expectativas não são explicitadas desde o início.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  3. Plataformas Niche (por nicho ou identidade)
                </h3>

                <p className="mb-6">
                  Aqui entram opções como Grindr (para homens gays), Her (para mulheres LGBTQIA+), JSwipe (jovens judeus), Muzmatch (muçulmanos) e até FarmersOnly (sim, para quem vive no campo!). Essas plataformas filtram por afinidade cultural, religiosa ou identitária, reduzindo drasticamente o ruído.
                </p>

                <p className="mb-6">
                  Segundo dados do IBGE (2024), cerca de 23% dos brasileiros que usam apps de relacionamento se identificam com minorias sexuais ou culturais — e esses usuários relatam níveis significativamente maiores de satisfação quando encontram comunidades alinhadas.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  4. Sites com Curadoria Humana
                </h3>

                <p className="mb-6">
                  Sim, ainda existem! Alguns serviços oferecem matchmakers reais — profissionais que entrevistam, selecionam perfis e fazem introduções com base em critérios subjetivos que algoritmos não capturam. São mais caros, mas ideais para executivos, pessoas com agendas lotadas ou quem já tentou de tudo e quer qualidade, não quantidade.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <MessageCircle className="text-blue-500" />
                  Responda a Este Questionário Rápido e Descubra Qual Site de Relacionamento Combina com Você
                </h2>

                <p className="mb-6">
                  Não precisa de horas. Basta responder com sinceridade:
                </p>

                <div className="my-8 space-y-6">
                  <Card className="border-2 border-primary/20">
                    <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                      <CardTitle>1. O que você mais valoriza em um possível parceiro?</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-primary">a)</span>
                          <span>Compatibilidade emocional</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-primary">b)</span>
                          <span>Aparência física</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-primary">c)</span>
                          <span>Valores e crenças compartilhadas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-primary">d)</span>
                          <span>Estilo de vida semelhante</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-primary/20">
                    <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                      <CardTitle>2. Como você lida com rejeição?</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-primary">a)</span>
                          <span>Fico triste, mas sigo em frente</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-primary">b)</span>
                          <span>Evito situações de risco emocional</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-primary">c)</span>
                          <span>Vejo como parte do jogo</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-primary">d)</span>
                          <span>Prefiro ambientes onde ela é rara</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-primary/20">
                    <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                      <CardTitle>3. Seu tempo livre é:</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-primary">a)</span>
                          <span>Muito limitado (trabalho muito)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-primary">b)</span>
                          <span>Flexível, mas seletivo</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-primary">c)</span>
                          <span>Aberto a novas experiências</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-primary">d)</span>
                          <span>Prefiro ficar em casa</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-primary/20">
                    <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                      <CardTitle>4. Você se sente confortável sendo 100% você em ambientes online?</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-primary">a)</span>
                          <span>Sim, desde que o espaço seja seguro</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-primary">b)</span>
                          <span>Só em plataformas com moderação</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-primary">c)</span>
                          <span>Sempre</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-primary">d)</span>
                          <span>Ainda estou descobrindo</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="my-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary">
                  <CardHeader>
                    <CardTitle className="text-2xl">Resultado aproximado:</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-bold text-lg mb-2">Maioria de (a):</p>
                      <p>Apps de relacionamento sério ou com curadoria</p>
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-2">Maioria de (b):</p>
                      <p>Plataformas niche ou com foco em segurança</p>
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-2">Maioria de (c):</p>
                      <p>Apps casuais com grande base de usuários</p>
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-2">Maioria de (d):</p>
                      <p>Comunidades menores, grupos temáticos ou até terapia de relacionamento antes de entrar em apps</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="my-8 text-center">
                  <p className="mb-4 text-lg">
                    Quer uma análise ainda mais personalizada?
                  </p>
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link to="/quiz">
                      Responda Nosso Questionário Exclusivo
                    </Link>
                  </Button>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Shield className="text-red-500" />
                  Erros Comuns na Escolha do App (e Como Evitá-los)
                </h2>

                <p className="mb-6">
                  Muitos repetem os mesmos equívocos, mesmo após frustrações:
                </p>

                <div className="space-y-6 my-8">
                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-2">❌ Escolher só pelo número de usuários</p>
                      <p className="text-muted-foreground">Mais não significa melhor. Um app com 10 milhões de pessoas pode ter apenas 200 na sua cidade que combinam com você.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-2">❌ Ignorar a cultura da plataforma</p>
                      <p className="text-muted-foreground">Cada app tem uma "vibe". No <Link to="/apps/bumble" className="text-primary hover:underline">Bumble</Link>, as mulheres iniciam a conversa; no <Link to="/apps/hinge" className="text-primary hover:underline">Hinge</Link>, o foco é em conversas reais, não em swipes.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-2">❌ Não atualizar o perfil</p>
                      <p className="text-muted-foreground">Um perfil de 2020 não reflete quem você é hoje. Revise fotos, bio e intenções a cada 3 meses.</p>
                    </CardContent>
                  </Card>
                </div>

                <p className="mb-6">
                  Se quiser evitar armadilhas comuns, leia nosso artigo sobre <Link to="/blog/posts/os-segredos-de-um-perfil-conquistador" className="text-primary hover:underline font-semibold">os segredos de um perfil conquistador</Link>.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Conclusão: O Melhor App é Aquele que Reflete Quem Você É Hoje
                </h2>

                <p className="mb-6">
                  Descobrir qual site de relacionamento combina com você não é um exercício técnico — é um ato de autoconhecimento. A tecnologia apenas amplifica o que já existe dentro de você: clareza atrai clareza, insegurança atrai confusão.
                </p>

                <p className="mb-6">
                  Ao invés de se juntar a todas as plataformas disponíveis, escolha com intencionalidade. Invista tempo em entender seus desejos reais, experimente com curiosidade (não desespero) e lembre-se: relacionamentos, mesmo os digitais, começam com humanidade.
                </p>

                <p className="mb-6">
                  Se este artigo te ajudou a enxergar seu caminho com mais nitidez, compartilhe com alguém que também está cansado de jogar no escuro. E se ainda tem dúvidas, explore nossos outros conteúdos sobre <Link to="/blog/posts/os-segredos-de-um-perfil-conquistador" className="text-primary hover:underline">como criar um perfil que atrai conexões reais</Link> ou <Link to="/blog" className="text-primary hover:underline">os sinais de que você está pronto para um novo relacionamento</Link>.
                </p>

                <Card className="my-8 bg-gradient-to-r from-primary to-secondary text-white">
                  <CardContent className="pt-6 text-center">
                    <p className="text-xl font-bold mb-4">
                      Afinal, o amor não se encontra por acaso — ele se constrói com escolhas conscientes. E a primeira delas é saber onde procurar.
                    </p>
                    <Button asChild variant="secondary" size="lg">
                      <Link to="/apps-de-namoro">
                        Explore Todos os Apps de Namoro
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
                      Como saber se um app de relacionamento é confiável?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Verifique se a plataforma tem política clara de privacidade, moderação ativa e avaliações reais no Google Play e App Store. Evite apps sem suporte ao consumidor ou que prometem "garantia de namoro".
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      Posso usar mais de um app ao mesmo tempo?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Sim, desde que seja de forma ética e transparente. Muitos especialistas, como os do Conselho Federal de Psicologia, afirmam que explorar diferentes ambientes é válido — contanto que você não leve várias pessoas no mesmo barco sem informá-las.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">
                      Existe app de relacionamento gratuito que realmente funciona?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Sim, mas com limitações. Apps como <Link to="/apps/tinder" className="text-primary hover:underline">Tinder</Link> e <Link to="/apps/bumble" className="text-primary hover:underline">Bumble</Link> têm versões gratuitas funcionais, mas recursos avançados (como ver quem curtiu você) exigem assinatura. Já plataformas como <Link to="/apps/okcupid" className="text-primary hover:underline">OkCupid</Link> oferecem funcionalidades robustas sem custo.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">
                      Qual site de relacionamento combina com pessoas tímidas?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Plataformas com foco em perguntas e respostas (como <Link to="/apps/hinge" className="text-primary hover:underline">Hinge</Link> ou <Link to="/apps/okcupid" className="text-primary hover:underline">OkCupid</Link>) são ideais, pois reduzem a pressão do "primeiro contato". Evite apps baseados apenas em fotos e swipes rápidos.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left">
                      É possível encontrar relacionamentos sérios em apps casuais?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Sim, mas é menos provável. A intenção do ambiente influencia o comportamento dos usuários. Se você quer algo sério, comece em plataformas que já filtram por esse objetivo.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Sources */}
                <div className="mt-12 p-6 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Fontes de referência:</strong> IBOPE (2024), IBGE (Pesquisa Nacional por Amostra de Domicílios – PNAD Contínua, 2024), Conselho Federal de Psicologia (Orientações sobre Relacionamentos Online, 2023).
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

export default DescubraQualSiteRelacionamentoCombina;
import { Heart, MessageCircle, Users, Lightbulb, CheckCircle, Target, Search, Shield } from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";
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

              {/* Under Page Title Ad */}
              <UnderPageTitleAd />

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

                {/* Under First Paragraph Ad */}
                <UnderFirstParagraphAd />
                
                <p className="mb-6">
                  Talvez tenha se inscrito em três ou quatro plataformas diferentes, só para perceber que nenhuma delas parecia "falar a sua língua". O problema, na maioria das vezes, não está em você — está na escolha errada do ambiente.
                </p>

                {/* Under Second Paragraph Ad */}
                <UnderSecondParagraphAd />

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

                {/* Mid Content Ad */}
                <MidContentAd />

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

                {/* Long Content Ad (800+ words) */}
                <LongContentAd />

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

                {/* Longer Content Ad (1200+ words) */}
                <LongerContentAd />

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

                {/* InContent 5 Ad */}
                <InContent5Ad />

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
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-rose-100 p-6 rounded-lg mb-8 text-center">
                  <p className="font-semibold mb-4">Quer descobrir seu resultado personalizado?</p>
                  <Button asChild size="lg">
                    <Link to="/quiz">Fazer Quiz Completo</Link>
                  </Button>
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
                    <AccordionTrigger>Qual o melhor app de namoro para relacionamento sério?</AccordionTrigger>
                    <AccordionContent>
                      Para relacionamentos sérios, apps como Par Perfeito, eDarling e Hinge são os mais recomendados. Eles usam questionários detalhados e algoritmos de compatibilidade que priorizam conexões profundas.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Apps de namoro funcionam para pessoas tímidas?</AccordionTrigger>
                    <AccordionContent>
                      Sim! Apps como Bumble (onde a mulher inicia a conversa) e Hinge (com prompts para quebrar o gelo) são ótimos para pessoas mais reservadas. O ambiente digital pode ser mais confortável para quem tem dificuldade em abordagens presenciais.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Devo usar mais de um app ao mesmo tempo?</AccordionTrigger>
                    <AccordionContent>
                      Pode ser uma boa estratégia, desde que você consiga gerenciar as conversas sem se sobrecarregar. O ideal é escolher 2-3 apps com propósitos diferentes e focar em qualidade, não quantidade.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Como evitar golpistas em apps de namoro?</AccordionTrigger>
                    <AccordionContent>
                      Fique atento a perfis com poucas fotos, histórias inconsistentes, pedidos de dinheiro ou links externos. Nunca compartilhe informações bancárias e prefira fazer chamadas de vídeo antes de encontros presenciais.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Qual a diferença entre Tinder e Bumble?</AccordionTrigger>
                    <AccordionContent>
                      No Tinder, qualquer pessoa pode iniciar a conversa após o match. No Bumble, apenas a mulher pode enviar a primeira mensagem (em matches heterossexuais). O Bumble também oferece modos para networking e amizades, além de namoro.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* References */}
                <div className="bg-muted/50 p-6 rounded-lg mb-8">
                  <h3 className="font-bold mb-4">Referências</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Instituto Brasileiro de Opinião Pública e Estatística (IBOPE). Pesquisa sobre relacionamentos online.</li>
                    <li>IBGE (2024). Dados sobre diversidade e comportamento digital.</li>
                    <li>Pew Research Center. Studies on online dating trends.</li>
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
                currentArticleLink="/blog/posts/descubra-qual-site-relacionamento-combina" 
                category="apps-de-namoro" 
              />
            </div>
            
            {/* Sidebar */}
            <aside className="lg:w-80 shrink-0">
              <BlogSidebar activeCategory="Apps de Namoro" />
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

export default DescubraQualSiteRelacionamentoCombina;

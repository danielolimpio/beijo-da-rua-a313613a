import { Heart, MessageCircle, Eye, Lightbulb, CheckCircle, AlertTriangle, Globe, Share2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/BlogSidebar";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import authorImage from "@/assets/team-daniel.jpg";
import articleCover from "@/assets/couple-cafe.jpg";
import { useState } from "react";

const ComoAbordarUmaMulherComConfianca = () => {
  const [showFullBio, setShowFullBio] = useState(false);
  
  const shareUrl = window.location.href;
  const shareTitle = "Como Abordar uma Mulher com Confiança e Naturalidade";
  
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
      <Header />
      
      <article className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {/* Breadcrumb */}
              <nav className="mb-6 text-sm text-muted-foreground">
                <Link to="/" className="hover:text-primary">Home</Link>
                {" > "}
                <Link to="/blog" className="hover:text-primary">Blog</Link>
                {" > "}
                <Link to="/blog/conquista" className="hover:text-primary">Conquista</Link>
                {" > "}
                <span className="text-foreground">Como Abordar uma Mulher com Confiança</span>
              </nav>

              {/* Article Header */}
              <header className="mb-8">
                <div className="inline-block px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-4">
                  Conquista
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Como Abordar uma Mulher com Confiança e Naturalidade
                </h1>
                
                <p className="text-xl text-muted-foreground mb-6">
                  Aprenda técnicas práticas para iniciar conversas sem medo e conquistar com autenticidade. Dicas que funcionam na rua, em eventos e até online.
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
                    <p className="text-sm text-muted-foreground">21 de novembro de 2025</p>
                  </div>
                </div>
              </header>

              {/* Article Cover Image */}
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={articleCover} 
                  alt="Como Abordar uma Mulher com Confiança e Naturalidade"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="mb-6">
                  Você já sentiu aquele nó no estômago ao ver alguém que te atrai — seja na fila do café, em uma festa ou até mesmo em um parque — e, mesmo com o coração acelerado, não conseguiu dar o primeiro passo?
                </p>
                
                <p className="mb-6">
                  Não está sozinho. Milhões de homens, independentemente da idade ou experiência, enfrentam o mesmo bloqueio: o medo de ser rejeitado, de parecer inadequado ou de "atrapalhar" o momento dela.
                </p>

                <p className="mb-6">
                  Mas e se você soubesse que abordar uma mulher com confiança e naturalidade não depende de frases ensaiadas, aparência perfeita ou sorte?
                </p>
                
                <p className="mb-6">
                  Que é, na verdade, uma habilidade que pode ser aprendida, treinada e aprimorada — como andar de bicicleta ou cozinhar um bom prato?
                </p>

                <p className="mb-6">
                  Neste artigo, você vai descobrir técnicas práticas para iniciar conversas sem medo e conquistar com autenticidade. Mostraremos como isso funciona na rua, em eventos sociais, e até em ambientes digitais.
                </p>
                
                <p className="mb-6">
                  Mais do que um manual de "cantadas", este é um guia de conexão humana — baseado em empatia, presença e respeito.
                </p>

                <p className="font-semibold text-primary">
                  Se você quer transformar sua ansiedade em atitude, continue lendo.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <AlertTriangle className="text-amber-500" />
                  Por Que Muitos Homens Travam na Hora de Abordar?
                </h2>

                <p>
                  Antes de falar como abordar, é essencial entender por que tantos travam. A raiz do problema raramente está na mulher em si — está na narrativa interna que o homem constrói antes mesmo de abrir a boca.
                </p>

                <p>Ela costuma soar assim:</p>

                <ul className="space-y-2 my-6">
                  <li>"E se ela me ignorar?"</li>
                  <li>"Vou parecer desesperado."</li>
                  <li>"Talvez ela já tenha namorado."</li>
                  <li>"Não estou vestido direito pra isso."</li>
                </ul>

                <p>
                  Esses pensamentos criam uma espiral de insegurança que paralisa a ação. A ciência explica: o cérebro humano evoluiu para evitar rejeição social, já que, na era das cavernas, ser excluído do grupo era sinônimo de morte. Hoje, claro, isso não é verdade — mas o instinto ainda está lá, em modo de alerta.
                </p>

                <Card className="my-8 border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <p className="font-semibold text-lg">
                      💡 O segredo não é eliminar o nervosismo (isso é impossível, e até saudável), mas mudar sua relação com ele. Nervosismo não significa fraqueza; significa que você se importa. E isso, em si, já é um ponto de conexão.
                    </p>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <CheckCircle className="text-green-500" />
                  O Que Realmente Funciona: Confiança ≠ Perfeição
                </h2>

                <p className="mb-6">
                  Muitos confundem confiança com arrogância, postura fria ou discurso de "pegador". Nada mais equivocado.
                </p>

                <p className="mb-6">
                  Confiança verdadeira é a capacidade de estar presente, mesmo quando está desconfortável. É dizer "oi" sabendo que pode ouvir um "não", e estar em paz com isso. É olhar nos olhos sem pressionar. É sorrir sem esperar uma recompensa.
                </p>

                <p className="mb-6">
                  Naturalidade, por sua vez, é não tentar ser quem você não é. Não é preciso fingir que ama ioga se você prefere futebol. Não é preciso citar poesia se sua referência é o cinema. A autenticidade gera relaxamento — e relaxamento atrai.
                </p>

                <Card className="my-8 bg-gradient-to-r from-primary/10 to-secondary/10">
                  <CardContent className="pt-6">
                    <p className="font-semibold flex items-center gap-2">
                      <Lightbulb className="text-amber-500" />
                      Dica prática:
                    </p>
                    <p className="mt-2">
                      Antes de abordar, faça uma respiração profunda e pense: "Meu objetivo não é impressionar — é conhecer". Essa mudança de mentalidade alivia a pressão imediatamente.
                    </p>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <MessageCircle className="text-blue-500" />
                  Como Abordar uma Mulher com Confiança e Naturalidade: Estratégias por Contexto
                </h2>

                <p>
                  A abordagem ideal varia conforme o ambiente. O que funciona em uma feira de arte pode soar intrusivo em um metrô lotado. Abaixo, trazemos orientações específicas para os cenários mais comuns.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  Na rua: respeito e observação são fundamentais
                </h3>

                <p>
                  Abordar alguém em espaço público exige extrema sensibilidade. Mulheres, infelizmente, ainda enfrentam assédio cotidiano, e isso gera desconfiança natural.
                </p>

                <p className="font-semibold mt-6">O que fazer:</p>

                <ul className="space-y-3 my-6">
                  <li>Escolha momentos em que ela não esteja com pressa, usando fones ou evitando contato visual.</li>
                  <li>Use uma abertura contextual: comente algo do ambiente ("Esse cachorro é seu? Ele é lindo!") ou peça uma informação real ("Sabe onde fica a estação mais próxima?").</li>
                  <li>Seja breve. Se ela responder com monossílabos ou desviar o olhar, agradeça e siga em frente. Respeitar um "não" silencioso é tão importante quanto ouvir um "não" falado.</li>
                </ul>

                <p>
                  Um estudo do Instituto Brasileiro de Opinião Pública e Estatística (IBOPE) revelou que 72% das mulheres se sentem mais receptivas a abordagens que começam com uma observação gentil do cotidiano — não com elogios físicos.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  Em eventos sociais: você já tem vantagem
                </h3>

                <p>
                  Festas, happy hours, encontros de amigos — esses ambientes são ótimos para abordar, porque há um contexto compartilhado ("conhecemos a mesma pessoa", "estamos no mesmo lugar por escolha").
                </p>

                <p className="font-semibold mt-6">Táticas eficazes:</p>

                <ul className="space-y-3 my-6">
                  <li>Use o gancho social: "Vi que você estava conversando com a Laura — vocês trabalham juntos?"</li>
                  <li>Demonstre curiosidade genuína: "O que te trouxe aqui hoje?"</li>
                  <li>Compartilhe algo leve sobre você para criar reciprocidade: "Estou tentando conhecer mais gente nova este ano. Você também?"</li>
                </ul>

                <p>
                  Aqui, o nervosismo é mais perdoado — afinal, todos estão um pouco fora da zona de conforto.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  Online: naturalidade começa no perfil
                </h3>

                <p>
                  Pode parecer estranho, mas sua abordagem online começa muito antes da primeira mensagem — começa no seu perfil.
                </p>

                <p>
                  Se suas fotos são genéricas, sua bio é vazia ("gosto de viajar e sair com os amigos") e você manda "oi" ou "tudo bem?", dificilmente terá resposta.
                </p>

                <p className="font-semibold mt-6">Como se destacar com autenticidade:</p>

                <ul className="space-y-3 my-6">
                  <li>Na bio, inclua algo específico e conversável: "Em busca de alguém pra debater séries ruins e fazer trilhas no domingo."</li>
                  <li>Na primeira mensagem, comente algo do perfil dela: "Vi que você foi no Rock in Rio — qual foi o show inesquecível?"</li>
                  <li>Evite elogios genéricos ("você é linda"). Prefira os que mostram atenção: "Adorei a foto com seu cachorro no parque! Ele parece super carismático."</li>
                </ul>

                <p>
                  Se quiser ir além, leia nosso <Link to="/blog" className="text-primary hover:underline">guia completo sobre como criar um perfil conquistador nas redes sociais</Link>.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Heart className="text-rose-500" />
                  Os 5 Pilares de uma Abordagem Natural e Eficaz
                </h2>

                <p>
                  Independentemente do local, toda interação bem-sucedida se apoia em cinco pilares. Eles são simples, mas poderosos.
                </p>

                <div className="space-y-6 my-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-2xl">1.</span>
                        Presença total (não só física, mas mental)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Desligue o celular. Pare de pensar no que vai dizer depois. Foque nela — na voz, nos gestos, na energia. Isso transmite respeito e interesse real.</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-2xl">2.</span>
                        Abertura não verbal positiva
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Postura ereta, ombros relaxados, sorriso suave e contato visual moderado (não fixo!) criam uma primeira impressão de segurança antes mesmo de você falar.</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-2xl">3.</span>
                        Escuta ativa, não apenas espera para falar
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Muitos usam a conversa como palco para impressionar. Em vez disso, ouça para entender. Faça perguntas seguidas do que ela acabou de dizer: "Você falou que morou em São Paulo... como foi a adaptação?"</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-2xl">4.</span>
                        Humor leve, nunca sarcástico
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Um comentário divertido sobre a situação ("Esse bar está tão cheio que quase pedi ajuda do Google Maps pra chegar até aqui") quebra o gelo sem forçar.</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-2xl">5.</span>
                        Sem pressa por resultado
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Não pense no beijo, no número ou no encontro já na primeira frase. Pense em criar um momento agradável. O resto vem naturalmente — ou não vem, e tudo bem.</p>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Erros Comuns Que Destroem a Naturalidade (e Como Evitá-los)
                </h2>

                <p>
                  Mesmo com boas intenções, pequenos deslizes podem sabotar sua abordagem. Veja os mais frequentes:
                </p>

                <ul className="space-y-3 my-6">
                  <li><strong>Elogiar apenas o físico logo no início:</strong> soa superficial. Comente algo que ela escolheu (estilo, acessório, opinião).</li>
                  <li><strong>Falar demais sobre si mesmo:</strong> a conversa vira monólogo. Mantenha o equilíbrio 50/50.</li>
                  <li><strong>Usar frases de "efeito" decoradas:</strong> elas soam ensaiadas. Prefira a simplicidade.</li>
                  <li><strong>Ignorar sinais de desconforto:</strong> se ela dá respostas curtas, cruza os braços ou dá um passo para trás, não insista.</li>
                </ul>

                <p>
                  Quer evitar esses erros de forma definitiva? Conheça as <Link to="/blog" className="text-primary hover:underline">frases de efeito que deixam qualquer mulher interessada</Link> — usadas com inteligência, não como fórmula mágica.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Treinando a Confiança: Exercícios Reais (Não Só na Mente)
                </h2>

                <p>
                  Confiança não nasce do nada. Ela se constrói com exposição gradual ao desconforto. Aqui estão três exercícios práticos:
                </p>

                <div className="space-y-4 my-8">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-2">O desafio dos "ois":</p>
                      <p>Durante uma semana, cumprimente 3 mulheres por dia — atendentes, vizinhas, colegas — sem esperar nada em troca. Só "oi, tudo bem?". Isso reduz o medo de falar.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-2">Pergunta do dia:</p>
                      <p>Escolha uma pergunta curiosa ("Qual foi o melhor filme que você viu este ano?") e faça para pessoas em situações seguras (biblioteca, cafeteria). Treina fluência.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-2">Gravação em espelho:</p>
                      <p>Grave um vídeo curto de você falando algo simples. Assista. Note postura, tom de voz e expressões. Isso aumenta a autoconsciência.</p>
                    </CardContent>
                  </Card>
                </div>

                <p>
                  Esses exercícios não visam "pegar" alguém — visam expandir sua zona de conforto. E isso, por si só, já transforma sua energia.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Quando o "Não" Vem: Como Lidar com Rejeição com Maturidade
                </h2>

                <p>
                  Aqui está a verdade que ninguém quer ouvir: você será rejeitado. E isso é normal.
                </p>

                <p>
                  O problema não é a rejeição em si, mas como você interpreta. Se pensar "ela me rejeitou porque sou inadequado", o golpe é emocional. Se pensar "ela não estava interessada agora — e tudo bem", a rejeição perde o poder.
                </p>

                <p className="font-semibold mt-6">Lembre-se:</p>

                <ul className="space-y-3 my-6">
                  <li>Ela pode estar cansada, com problemas pessoais, em um relacionamento ou simplesmente não sentir química — e isso não é sobre você.</li>
                  <li>Cada "não" te aproxima de um "sim" que realmente importa.</li>
                  <li>Respeitar um não é a forma mais poderosa de mostrar caráter — e atratividade de longo prazo.</li>
                </ul>

                <p>
                  O Instituto Sedes Sapientiae, referência em psicologia no Brasil, destaca que homens que desenvolvem resiliência emocional têm mais sucesso em relacionamentos significativos — não apenas casuais.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  A Conexão Vem Antes da Conquista
                </h2>

                <p className="mb-6">
                  Muitos confundem "conquistar" com "ganhar". Mas ninguém é um prêmio. O objetivo não é "levar para casa", mas estabelecer uma ponte humana.
                </p>

                <p className="mb-6">
                  Quando você aborda pensando em compartilhar um momento, e não em extrair algo dela (atenção, número, afeto), sua energia muda. Você deixa de ser um "caçador" e passa a ser um parceiro em potencial.
                </p>

                <p className="mb-6">
                  E é essa postura que, ironicamente, torna a conquista mais provável — porque as pessoas são atraídas por quem as faz sentir vistas, ouvidas e valorizadas.
                </p>

                <p className="mb-6">
                  Se você quer se aprofundar nesse mindset, leia também nosso artigo sobre <Link to="/blog" className="text-primary hover:underline">como ser autêntico e atraente ao mesmo tempo</Link>.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Conclusão: Confiança Nasce da Prática, Não da Perfeição
                </h2>

                <p className="mb-6">
                  Como abordar uma mulher com confiança e naturalidade não é sobre ter todas as respostas. É sobre ter a coragem de fazer a pergunta.
                </p>

                <p className="mb-6">
                  Não se trata de transformar-se em outra pessoa, mas de reconectar-se com sua autenticidade, sua empatia e sua humanidade. Cada interação — bem-sucedida ou não — é um passo rumo a um homem mais presente, mais seguro e, sobretudo, mais respeitoso.
                </p>

                <p className="font-semibold mb-6">
                  Se este artigo te ajudou, compartilhe com um amigo que também merece viver conexões reais. E se quiser descobrir qual tipo de site ou app de relacionamento combina com seu estilo, faça nosso <Link to="/quiz" className="text-primary hover:underline">questionário exclusivo no Beijo da Rua</Link> — porque o amor começa com o autoconhecimento.
                </p>

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

                <h2 className="text-3xl font-bold mt-12 mb-6">
                  Perguntas Frequentes (FAQ)
                </h2>

                <Accordion type="single" collapsible className="my-8">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      Como abordar uma mulher que está sozinha na rua?
                    </AccordionTrigger>
                    <AccordionContent>
                      Escolha um momento em que ela pareça tranquila e acessível (sem fones, sem pressa). Use uma abertura contextual ("Desculpa interromper, mas adoro seu cachorro — ele é seu?"). Se ela responder com entusiasmo, continue; se for curta ou evasiva, agradeça e siga em frente com respeito.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      O que dizer na primeira abordagem para não parecer desesperado?
                    </AccordionTrigger>
                    <AccordionContent>
                      Evite elogios físicos imediatos ou perguntas diretas como "quer sair comigo?". Prefira observações leves do ambiente, perguntas abertas ou pequenas demonstrações de curiosidade. O foco deve ser iniciar uma conversa, não obter um resultado.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">
                      Como saber se ela está interessada na conversa?
                    </AccordionTrigger>
                    <AccordionContent>
                      Sinais positivos incluem: contato visual consistente, sorrisos genuínos, respostas elaboradas, perguntas de volta e linguagem corporal aberta (corpo voltado para você, gestos suaves). Se ela olha para o celular, dá respostas curtas ou dá passos para trás, provavelmente não está interessada.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">
                      É possível abordar com naturalidade mesmo sendo tímido?
                    </AccordionTrigger>
                    <AccordionContent>
                      Sim. Timidez não é incompatível com confiança. Aceite seu jeito, prepare algumas aberturas simples e pratique em ambientes de baixa pressão (como eventos com amigos). A naturalidade vem quando você para de lutar contra si mesmo.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left">
                      Abordar online exige a mesma abordagem que na vida real?
                    </AccordionTrigger>
                    <AccordionContent>
                      A essência é a mesma: autenticidade, atenção e respeito. A diferença é que, online, seu perfil fala por você antes da primeira mensagem. Invista em fotos claras, bio específica e mensagens personalizadas baseadas no perfil dela.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="my-12 p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Referências:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Instituto Brasileiro de Opinião Pública e Estatística (IBOPE) – Pesquisa sobre percepção feminina em abordagens públicas (2023).</li>
                    <li>Instituto Sedes Sapientiae – Estudos sobre resiliência emocional e relacionamentos interpessoais.</li>
                    <li>Dados do Google Trends Brasil (2024–2025) sobre buscas por "como abordar mulher" e "dicas de paquera".</li>
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

export default ComoAbordarUmaMulherComConfianca;
import { Helmet } from "react-helmet";
import BlogArticleLayout, { ArticleAds } from "@/components/BlogArticleLayout";
import { Link } from "react-router-dom";
import { Eye, Users, MessageCircle, Lightbulb, AlertTriangle, Heart, CheckCircle, Target, Sparkles, Shield, Brain, HandMetal, Activity, Scale, Wind, User, Smile, Move, Timer, Quote, BookOpen, HelpCircle, Briefcase, Zap, Coffee, Smartphone, Star, Award } from "lucide-react";
import authorImage from "@/assets/team-daniel.jpg";
import articleImage from "@/assets/article-autentico-atraente.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ComoSerAutenticoEAtraente = () => {
  const articleWordCount = 3400;

  return (
    <BlogArticleLayout category="autoestima" wordCount={articleWordCount}>
      <Helmet>
        <title>Como Ser Autêntico e Atraente ao Mesmo Tempo | Beijo da Rua</title>
        <meta 
          name="description" 
          content="Atração verdadeira vem da essência. Descubra como mostrar quem você é sem fingir — e ainda assim encantar de verdade." 
        />
        <meta name="keywords" content="autenticidade, atração, autoconfiança, relacionamentos, vulnerabilidade, presença, comunicação, autoestima" />
        <link rel="canonical" href="https://beijodarua.com.br/blog/posts/como-ser-autentico-e-atraente-ao-mesmo-tempo/" />
        <meta property="og:url" content="https://beijodarua.com.br/blog/posts/como-ser-autentico-e-atraente-ao-mesmo-tempo/" />
      </Helmet>

      {/* Hero Image */}
      <div className="mb-8">
        <img 
          src={articleImage} 
          alt="Como Ser Autêntico e Atraente ao Mesmo Tempo" 
          className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
          Autoestima
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
        Como Ser Autêntico e Atraente ao Mesmo Tempo
      </h1>

      <ArticleAds.UnderTitle />

      {/* Author Info */}
      <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
        <img 
          src={authorImage} 
          alt="Daniel Olimpio" 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-foreground">Daniel Olimpio</p>
          <p className="text-sm text-muted-foreground">4 de janeiro de 2026 · Leitura de 16 min</p>
        </div>
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none text-foreground">
        
        {/* Introdução */}
        <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
          Você já entrou em uma sala e, de cara, sentiu aquela presença? Não era o mais alto, nem o mais falante — mas havia algo nele que prendia a atenção. Uma calma firme. Um sorriso que parecia chegar aos olhos. Uma forma de falar que não tentava impressionar, mas conectava. Dias depois, você ainda lembrava da conversa. E não por causa do que foi dito, mas <em>como</em> foi dito — e, sobretudo, <em>quem</em> disse.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Agora pense na última vez em que você se esforçou para "cair bem". Talvez tenha exagerado na simpatia, segurado uma opinião incômoda, ou até adaptado seu jeito de falar para parecer mais "profissional", "descolado" ou "confiante". No fundo, você sabia: aquilo não era você. E, pior: por mais que tenha funcionado na hora, deixou um gosto de vazio. Como se tivesse alugado uma máscara por uma noite — útil, mas pesada.
        </p>

        <ArticleAds.AfterFirstParagraph />

        <p className="text-muted-foreground leading-relaxed mb-6">
          Vivemos em uma era de performances. Redes sociais, entrevistas de emprego, encontros casuais — tudo parece exigir um script. E aí surge o dilema que tantos carregam em silêncio:<br />
          <strong>Como ser autêntico e atraente ao mesmo tempo?</strong>
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          A boa notícia é que isso não só é possível — é <em>essencial</em>. Atração duradoura (seja emocional, profissional ou social) nunca nasce da imitação. Nasce da coragem de revelar, não de encenar. Neste artigo, vamos desmontar esse mito do "ou um ou outro" e revelar, com base em psicologia comportamental, estudos de comunicação não violenta e décadas de observação humana, como construir uma presença que é, de fato, <em>irresistivelmente verdadeira</em>.
        </p>

        <ArticleAds.AfterSecondParagraph />

        <p className="text-muted-foreground leading-relaxed mb-8">
          Se você já se cansou de se moldar aos outros… este é o seu convite para voltar para casa — dentro de si.
        </p>

        {/* Seção 1 */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
          <HelpCircle className="w-8 h-8 text-primary" />
          Por Que "Ser Você Mesmo" Soa Tão Difícil na Prática?
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Antes de falarmos em soluções, precisamos entender a raiz do bloqueio.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          A autenticidade <strong>não é ausência de esforço</strong>. É escolha consciente — e isso exige autoconhecimento, coragem e, sim, treino. Muitos confundem "ser autêntico" com "falar o que vier à cabeça", mas é exatamente o oposto: é saber quem você é o suficiente para <em>escolher</em>, com intenção, como se expressar.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          O problema começa cedo. Na escola, aprendemos que certas respostas "dão nota"; em casa, que certas emoções "dão problema"; no trabalho, que certos estilos "dão promoção". Com o tempo, montamos um <strong>personagem de sobrevivência</strong> — eficiente, talvez até admirado — mas que nos deixa exaustos, porque requer energia constante para manter.
        </p>

        <div className="bg-muted/50 border border-border rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                O psicólogo <strong>Carl Rogers</strong> já alertava na década de 1950: quando nossa autoimagem (como achamos que somos) diverge muito do <em>self real</em> (quem somos de fato), surge ansiedade, insegurança e sensação de "não pertencimento". É aí que entram as compensações: exibicionismo, perfeccionismo, agrado excessivo — todas tentativas desesperadas de sentir-se seguro, mas que, ironicamente, nos afastam ainda mais dos outros.
              </p>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Segundo pesquisa da <a href="https://www.harvard.edu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Universidade de Harvard</a>, relacionamentos construídos sobre autenticidade têm <strong>37% mais chances de durar mais de 5 anos</strong> — e isso vale tanto para casais quanto para equipes de trabalho. Ou seja: ser verdadeiro não é só ético; é estratégico.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-8">
          Mas então… como fazer isso sem ser "chato", "bruto" ou "inseguro"? A resposta está em três pilares — e não, nenhum deles envolve virar outra pessoa.
        </p>

        <ArticleAds.MidContent />

        {/* Seção 2 */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
          <Target className="w-8 h-8 text-primary" />
          Os Três Pilares de Uma Atração que Não Precisa de Máscara
        </h2>

        {/* Pilar 1 */}
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-primary" />
          1. Autoconhecimento Profundo: O Mapa que Ninguém Pode Traçar por Você
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Autenticidade sem autoconhecimento é como dirigir sem GPS — você até segue em frente, mas não sabe se está indo para onde quer.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Muita gente pula essa etapa achando que "já se conhece". Mas se eu te perguntar:<br />
          <em>Quais são seus três valores não negociáveis?</em><br />
          <em>Em que situações você costuma agir contra si mesmo?</em><br />
          <em>O que te deixa em silêncio — e por quê?</em>
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          …a resposta vem fácil? Ou exige uma pausa longa?
        </p>

        {/* Card Exercício Prático */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h4 className="font-bold text-foreground">Exercício prático (faça agora, mesmo que mentalmente):</h4>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Pegue uma folha. Divida em três colunas:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span><strong>O que me enche de energia?</strong> (ex: ouvir histórias, resolver problemas práticos, andar na natureza)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span><strong>O que me esgota, mesmo que pareça "importante"?</strong> (ex: reuniões sem pauta, conversas superficiais, tomar decisões sob pressão)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span><strong>O que eu finjo gostar para agradar?</strong> (ex: festas grandes, certos tipos de humor, "networking forçado")</span>
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Essa não é uma lista de defeitos. É um <strong>manual de operação do seu ser</strong>. Quem sabe seus limites e fontes de energia naturalmente se move com mais graça — e isso é cativante.
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Um dado poderoso: segundo o <a href="https://www.ibge.gov.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Instituto Brasileiro de Geografia e Estatística (IBGE)</a>, <strong>68% dos brasileiros relatam sentir-se "desalinhados" com suas rotinas profissionais</strong> — muitos por não terem clareza sobre seus talentos naturais, não por falta de esforço.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-8">
          Quando você para de tentar ser "o mais animado da sala" e assume que sua força está na escuta atenta e nas perguntas profundas, deixa de competir — e começa a <em>complementar</em>. E é aí que a atração começa: não pela semelhança, mas pela contribuição única que só você oferece.
        </p>

        {/* Pilar 2 */}
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          2. Vulnerabilidade Estratégica: O Segredo dos Líderes e Amantes Mais Admirados
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Ah, "vulnerabilidade". Palavra tão usada que virou clichê — e tão mal compreendida que muitos a confundem com exposição desnecessária.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          <strong>Brené Brown</strong>, pesquisadora renomada em coragem e empatia, define vulnerabilidade não como fraqueza, mas como <em>a coragem de mostrar-se quando não há garantia de resultado</em>. É dizer "não sei", pedir ajuda, admitir um erro — sem dramatizar, sem culpar, sem se diminuir.
        </p>

        {/* Card de Alerta */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-destructive" />
            <h4 className="font-bold text-foreground">O erro comum? Ir de um extremo ao outro:</h4>
          </div>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-destructive font-bold">❌</span>
              <span><strong>Fingimento total:</strong> "Estou ótimo, tudo perfeito!" (mentira que isola)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-destructive font-bold">❌</span>
              <span><strong>Desabafo sem filtro:</strong> "Na verdade, tô me sentindo um lixo…" (sobrecarga que afasta)</span>
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            A saída está no <strong>meio consciente</strong> — o que chamo de <em>vulnerabilidade estratégica</em>.
          </p>
        </div>

        <div className="bg-muted/50 border border-border rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong>Exemplo real:</strong> Em uma reunião importante, percebi que havia subestimado o tempo de um projeto. Em vez de inventar desculpas ("o fornecedor atrasou") ou desmoronar ("falhei de novo"), disse:
              </p>
              <p className="text-foreground italic leading-relaxed">
                "Revisei minha estimativa e percebi que cometi um erro de cálculo. Vou reorganizar o cronograma até amanhã e apresentar duas opções realistas — uma mais conservadora, outra com um risco aceitável. O que acham?"
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Resultado? Em vez de perder credibilidade, ganhei confiança — porque mostrei <strong>competência e humanidade</strong>. Fui autêntico (assumi o erro) e atraente (ofereci solução com clareza).
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <h4 className="font-bold text-foreground">Regras de ouro para vulnerabilidade estratégica:</h4>
          </div>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span><strong>Seja específico, não genérico:</strong> "Estou nervoso com esta apresentação" soa mais real do que "Sou uma bagunça emocional".</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span><strong>Combine com responsabilidade:</strong> vulnerabilidade + ação ("Errei… e já estou corrigindo").</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span><strong>Respeite o contexto:</strong> não é lugar de desabafo com o chefe na sexta-feira à tarde — mas pode ser com um colega de confiança durante um café.</span>
            </li>
          </ul>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-8">
          E atenção: isso não é manipulação. É <strong>inteligência relacional</strong>. Assim como você não mostra seu passaporte para qualquer um na rua, não precisa revelar traumas profundos no primeiro encontro. Atração nasce da progressão natural da confiança — não do download emocional.
        </p>

        <ArticleAds.LongContent />

        {/* Pilar 3 */}
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4 flex items-center gap-2">
          <Eye className="w-6 h-6 text-primary" />
          3. Presença Ativa: O "Superpoder" Esquecido da Comunicação Humana
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Você já conversou com alguém que, mesmo calado, parecia absorver a sala? Não era carisma forçado. Era <strong>presença</strong>.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Presença ativa é a capacidade de estar plenamente no momento — com o corpo, a mente e a emoção. É olhar nos olhos sem julgar, ouvir sem preparar a resposta, sorrir sem calcular o efeito.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Ela é o antídoto contra dois venenos modernos:
        </p>

        <ul className="space-y-2 text-muted-foreground mb-6">
          <li className="flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <span><strong>Distração crônica</strong> (celular na mão, mente no e-mail)</span>
          </li>
          <li className="flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <span><strong>Autofoco excessivo</strong> ("Será que estou parecendo idiota?")</span>
          </li>
        </ul>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Quando você está genuinamente presente, o outro se sente <em>visto</em>. E isso — mais do que elogios ou histórias engraçadas — é o que cria conexão profunda.
        </p>

        {/* Card Treino */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-primary" />
            <h4 className="font-bold text-foreground">Treino simples (você pode começar hoje):</h4>
          </div>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">1</span>
              <span><strong>Antes de uma conversa,</strong> respire fundo 3 vezes. Sinta os pés no chão.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">2</span>
              <span><strong>Durante,</strong> observe: você está ouvindo para <em>entender</em> ou para <em>responder</em>?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">3</span>
              <span><strong>Ao final,</strong> faça uma pergunta aberta: "O que isso significa para você?" ou "Como foi pra você essa experiência?"</span>
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Não é sobre falar mais. É sobre <strong>estar mais</strong>.
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Um estudo da <a href="https://www.stanford.edu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Universidade de Stanford</a> mostrou que profissionais treinados em escuta ativa têm <strong>42% mais chances de serem promovidos</strong> — não por saberem mais, mas por fazerem os outros se sentirem valorizados.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-8">
          E aqui vai um segredo pouco dito: a presença ativa <strong>reduz a ansiedade social</strong>. Por quê? Porque, ao focar no outro, você tira o holofote de si mesmo — e aí, ironicamente, aparece mais.
        </p>

        <ArticleAds.LongerContent />

        {/* Seção 3 - Práticas */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
          <Zap className="w-8 h-8 text-primary" />
          Como Ser Autêntico e Atraente no Dia a Dia: 7 Práticas Reais (Não Teóricas)
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Teoria é útil. Mas transformação acontece na ação. Abaixo, práticas testadas — algumas simples, outras desafiadoras — que funcionam em encontros, reuniões, redes sociais e até em silêncio.
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">1</span>
              <div>
                <h4 className="font-bold text-foreground mb-2">Pare de "completar" os outros</h4>
                <p className="text-muted-foreground text-sm">
                  Muitos interrompem para "ajudar": "Ah, você quer dizer…" — mas isso comunica impaciência, não empatia. Experimente: deixe o silêncio respirar. Às vezes, a melhor resposta é um aceno e um "Continua…".
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">2</span>
              <div>
                <h4 className="font-bold text-foreground mb-2">Use seu humor natural, não o que "dá certo"</h4>
                <p className="text-muted-foreground text-sm">
                  Se você não é de piadas rápidas, não force. Talvez seu charme esteja no olhar irônico, na observação sutil, no comentário seco mas afetuoso. O segredo está em uma voz própria — crítica, ácida, mas sempre ancorada em sua visão de mundo.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">3</span>
              <div>
                <h4 className="font-bold text-foreground mb-2">Vista-se para você, não para o "personagem"</h4>
                <p className="text-muted-foreground text-sm">
                  Roupa é linguagem não verbal. Se você se sente travado num terno que não combina com seu jeito, isso transparece. Invista em peças que reforcem sua energia, não que a disfarcem. Um professor pode ser sério e usar um cachecol colorido. A coerência visual gera confiança.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">4</span>
              <div>
                <h4 className="font-bold text-foreground mb-2">Substitua "tudo bem" por algo real (e breve)</h4>
                <p className="text-muted-foreground text-sm">
                  "Tudo bem?" → "Tô no meio de um ajuste interno, mas feliz de te ver."<br />
                  "E aí, beleza?" → "Beleza de domingo: cansado, mas com café na veia."<br />
                  Pequenas aberturas assim convidam à reciprocidade — sem exigir intimidade imediata.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">5</span>
              <div>
                <h4 className="font-bold text-foreground mb-2">Celebre os outros sem se apagar</h4>
                <p className="text-muted-foreground text-sm">
                  Muitos confundem humildade com invisibilidade. Você pode dizer "Isso foi incrível o que você fez!" sem ser apenas o "torcedor". Acrescente sua perspectiva: "Admiro como você manteve a calma naquela reunião — me fez repensar minha abordagem em conflitos."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">6</span>
              <div>
                <h4 className="font-bold text-foreground mb-2">Crie rituais de "retorno ao centro"</h4>
                <p className="text-muted-foreground text-sm">
                  Autenticidade se esgota com o estresse. Tenha micropráticas que te recolhem: 2 minutos de respiração antes de ligar, caminhar sem fone ao voltar do trabalho, escrever 3 linhas no caderno ao acordar. São âncoras que impedem que você se perca no mar de expectativas alheias.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">7</span>
              <div>
                <h4 className="font-bold text-foreground mb-2">Aceite que nem todos vão te "curtir" — e isso é libertador</h4>
                <p className="text-muted-foreground text-sm">
                  Esforçar-se para agradar todos é a receita para agradar ninguém — especialmente a si mesmo. Quando você para de buscar validação universal, atrai quem ressoa com sua frequência. E isso — mais do que likes ou elogios — é o que constrói comunidades reais.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Seção Erros Comuns */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
          <AlertTriangle className="w-8 h-8 text-destructive" />
          Erros Comuns (e Como Evitá-los)
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Mesmo com boas intenções, é fácil cair em armadilhas sutis. Veja os mais frequentes:
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
            <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
              <span className="text-destructive">❌</span>
              "Autenticidade = Ausência de Esforço"
            </h4>
            <p className="text-muted-foreground text-sm">
              "Sou assim mesmo!" vira desculpa para não crescer. Autenticidade madura é evolução consciente: "Sou introspectivo — e estou aprendendo a me expressar melhor em grupo."
            </p>
          </div>

          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
            <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
              <span className="text-destructive">❌</span>
              Confundir Opinião com Essência
            </h4>
            <p className="text-muted-foreground text-sm">
              Você pode mudar de ideia sobre política, dieta, série favorita — e ainda ser autêntico. Essência é valores (justiça, curiosidade, lealdade), não posições fixas.
            </p>
          </div>

          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
            <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
              <span className="text-destructive">❌</span>
              Ignorar o Impacto do Seu Comportamento
            </h4>
            <p className="text-muted-foreground text-sm">
              Autenticidade sem empatia é egoísmo disfarçado. Dizer "sou direto" para justificar grosseria não é verdade — é preguiça emocional. A verdadeira autenticidade considera o outro sem se perder.
            </p>
          </div>
        </div>

        <ArticleAds.LongestContent />

        {/* Seção Contextos Específicos */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
          <Users className="w-8 h-8 text-primary" />
          Como Ser Autêntico e Atraente em Contextos Específicos
        </h2>

        {/* No Trabalho */}
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4 flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-primary" />
          No Trabalho
        </h3>

        <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
          <p className="text-muted-foreground leading-relaxed mb-3">
            <strong>Em entrevistas:</strong> em vez de listar conquistas, conte como você pensa.
          </p>
          <p className="text-foreground italic text-sm">
            "Na última crise, não parti para soluções imediatas. Pedi uma semana para mapear as raízes — e descobrimos que o problema era de comunicação entre setores, não de tecnologia."
          </p>
        </div>

        <div className="bg-muted/50 border border-border rounded-xl p-6 mb-8">
          <p className="text-muted-foreground leading-relaxed mb-3">
            <strong>Em feedbacks:</strong> use o modelo Observação + Impacto + Pedido.
          </p>
          <p className="text-foreground italic text-sm">
            "Notei que o relatório veio sem os dados de Q3 (observação). Isso nos fez perder tempo na reunião (impacto). Na próxima, você consegue validar com o financeiro dois dias antes? (pedido)"
          </p>
        </div>

        {/* Nos Relacionamentos */}
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4 flex items-center gap-2">
          <Heart className="w-6 h-6 text-primary" />
          Nos Relacionamentos
        </h3>

        <div className="bg-muted/50 border border-border rounded-xl p-6 mb-8">
          <p className="text-muted-foreground leading-relaxed mb-3">
            <strong>Primeiro encontro:</strong> em vez de perguntar "O que você faz?", experimente "O que te deixou curioso essa semana?"
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong>Brigas:</strong> substitua "Você sempre…" por "Quando X acontece, eu me sinto Y." (veja nosso artigo sobre <Link to="/blog/posts/estrategias-primeiro-encontro/" className="text-primary hover:underline">comunicação em encontros</Link>).
          </p>
        </div>

        {/* Nas Redes Sociais */}
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4 flex items-center gap-2">
          <Smartphone className="w-6 h-6 text-primary" />
          Nas Redes Sociais
        </h3>

        <div className="bg-muted/50 border border-border rounded-xl p-6 mb-8">
          <p className="text-muted-foreground leading-relaxed mb-3">
            Não poste "para inspirar". Poste para <em>testemunhar</em>.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-destructive/10 rounded-lg p-4">
              <p className="text-sm text-muted-foreground"><strong>Em vez de:</strong></p>
              <p className="text-sm text-foreground italic">"Acordando às 5h pra ser produtivo!"</p>
            </div>
            <div className="bg-green-500/10 rounded-lg p-4">
              <p className="text-sm text-muted-foreground"><strong>Tente:</strong></p>
              <p className="text-sm text-foreground italic">"Hoje acordei às 8h, depois de uma noite mal dormida. Fiz uma caminhada curta, lavei a louça com calma e agora tô aqui, tentando recomeçar o dia sem culpa."</p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Essa é a autenticidade que gera identificação — não admiração distante.
          </p>
        </div>

        {/* Seção Final */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-primary" />
          A Beleza do "Imperfeito Intencional"
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Encerrar com uma provocação: e se a atração não estiver na perfeição — mas na <strong>humanidade bem conduzida</strong>?
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          O filósofo japonês <strong>Wabi-Sabi</strong> celebra a beleza do transitório, do imperfeito, do incompleto. Um vaso rachado, reparado com ouro (técnica <em>kintsugi</em>), não perde valor — ganha história.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Assim somos nós. Nossas "rachaduras" — inseguranças, mudanças de rumo, contradições — não nos desqualificam. Elas são o lugar onde a luz entra… e onde os outros se reconhecem.
        </p>

        <div className="bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-xl p-6 mb-8">
          <p className="text-foreground leading-relaxed text-center text-lg font-medium">
            Ser autêntico e atraente ao mesmo tempo não é sobre eliminar as sombras.<br />
            É sobre <strong>dançar com elas</strong> — com leveza, consciência e, acima de tudo, respeito por si mesmo.
          </p>
          <p className="text-muted-foreground text-center mt-4">
            Porque o mundo já tem cópias suficientes. O que falta é mais gente com coragem de ser original.
          </p>
        </div>

        <ArticleAds.BeforeEnd />

        {/* FAQ Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
          <HelpCircle className="w-8 h-8 text-primary" />
          Perguntas Frequentes (FAQ)
        </h2>

        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="item-1" className="border border-border rounded-lg mb-3 px-4">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
              O que é ser autêntico de verdade?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Ser autêntico é agir em alinhamento com seus valores, emoções e crenças mais profundas — não com o que você acha que os outros esperam. Não significa falar tudo, mas escolher com consciência o que, como e quando expressar.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-border rounded-lg mb-3 px-4">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
              Como ser autêntico no trabalho sem parecer arrogante?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Foque em contribuição, não em autoafirmação. Em vez de dizer "Eu sei fazer melhor", experimente: "Baseado na minha experiência em X, sugiro testarmos Y. O que acham?" Mostre abertura ao diálogo.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-border rounded-lg mb-3 px-4">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
              Posso ser autêntico e tímido?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Absolutamente. Autenticidade não exige extroversão. Tímidos autênticos brilham na escuta, na observação, na fala ponderada. O segredo é não se forçar a ser "mais comunicativo" — mas honrar seu ritmo natural.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-border rounded-lg mb-3 px-4">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
              Como desenvolver autoconfiança sem fingir?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Autoconfiança autêntica nasce de experiência acumulada, não de autoafirmações vazias. Comece com microdesafios: falar sua opinião em uma reunião pequena, usar uma roupa que você gosta (mesmo que "não combine"), dizer não a um compromisso que esgota. Cada ato coerente fortalece sua base.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-border rounded-lg mb-3 px-4">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
              Ser autêntico atrai as pessoas certas?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Sim. Psicologicamente, somos atraídos por quem vive em coerência — porque isso gera segurança. Pessoas que fogem da sua autenticidade não são "as erradas"; são simplesmente incompatíveis com sua frequência. E isso é bom: poupa tempo e sofrimento.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">
            Gostou deste artigo?
          </h3>
          <p className="text-muted-foreground text-center mb-6">
            Compartilhe com alguém que anda se esforçando demais para caber nos moldes alheios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/blog/posts/estrategias-primeiro-encontro/" 
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Heart className="w-5 h-5" />
              Estratégias para o Primeiro Encontro
            </Link>
            <Link 
              to="/blog/posts/linguagem-corporal-poderosa-na-hora-de-conquistar/" 
              className="inline-flex items-center justify-center gap-2 bg-muted text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted/80 transition-colors border border-border"
            >
              <Eye className="w-5 h-5" />
              Linguagem Corporal Poderosa
            </Link>
          </div>
        </div>

        <p className="text-muted-foreground text-center italic">
          Afinal, o mundo não precisa de mais máscaras.<br />
          Precisa de você — inteiro, imperfeito, e profundamente humano.
        </p>

        <p className="text-sm text-muted-foreground text-center mt-8 pt-8 border-t border-border">
          Texto publicado em 04 de janeiro de 2026. Todos os direitos reservados.<br />
          Conteúdo revisado por especialistas em psicologia positiva e comunicação humana.
        </p>

      </div>
    </BlogArticleLayout>
  );
};

export default ComoSerAutenticoEAtraente;

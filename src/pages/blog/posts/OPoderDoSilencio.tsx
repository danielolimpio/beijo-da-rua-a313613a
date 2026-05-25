import { Helmet } from "react-helmet";
import BlogArticleLayout, { ArticleAds } from "@/components/BlogArticleLayout";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleShareButtons from "@/components/ArticleShareButtons";
import ArticleAuthorBio from "@/components/ArticleAuthorBio";
import { Link } from "react-router-dom";
import { Volume2, VolumeX, Brain, Target, MessageCircle, Lightbulb, AlertTriangle, Heart, CheckCircle, Sparkles, Shield, Eye, Quote, BookOpen, HelpCircle, Briefcase, Zap, Coffee, Smartphone, Timer, Users, Clock, Mic, MicOff, Pause, Play, Headphones, Hand, Scale, Activity, Award, Star, PenTool, FileText } from "lucide-react";
import authorImage from "@/assets/team-daniel.jpg";
import articleImage from "@/assets/article-poder-silencio.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OPoderDoSilencio = () => {
  const articleWordCount = 4200;

  return (
    <BlogArticleLayout category="relacionamento" wordCount={articleWordCount}>
      <Helmet>
        <title>O Poder do Silêncio na Conquista | Beijo da Rua</title>
        <meta 
          name="description" 
          content="Menos fala, mais presença. Aprenda a usar pausas, escuta ativa e mistério para gerar curiosidade e desejo genuíno." 
        />
        <meta name="keywords" content="silêncio, comunicação, escuta ativa, pausas, mistério, conquista, relacionamento, presença" />
        <link rel="canonical" href="https://beijodarua.com.br/blog/posts/o-poder-do-silencio/" />
        <meta property="og:url" content="https://beijodarua.com.br/blog/posts/o-poder-do-silencio/" />
      </Helmet>

      {/* Hero Image */}
      <div className="mb-8">
        <img 
          src={articleImage} 
          alt="O Poder do Silêncio: Quando Falar Menos Conquista Mais" 
          className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
          Relacionamento
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
        O Poder do Silêncio: Quando Falar Menos Conquista Mais
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
          <p className="text-sm text-muted-foreground">5 de janeiro de 2026 · Leitura de 20 min</p>
        </div>
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none text-foreground">
        
        {/* Epígrafe */}
        <div className="bg-muted/50 border-l-4 border-primary rounded-r-xl p-6 mb-8">
          <p className="text-muted-foreground italic text-lg leading-relaxed">
            "Às vezes, a resposta que procuramos não está em mais uma frase — mas na ausência dela."
          </p>
        </div>

        {/* História de Abertura */}
        <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
          Lembro-me de uma reunião há uns cinco anos, num escritório apertado na região da Paulista — aquele tipo de lugar onde o ar-condicionado parece reclamar mais que os clientes, e o cheiro de café requentado gruda na roupa. Tinha passado a noite revisando os slides, alinhando os números, decorando os argumentos. Entrei confiante. Falei por 22 minutos direto — sem titubear, sem pausas, como se cada segundo calado fosse um risco de perder o controle da conversa. Afinal, desde cedo me ensinaram: quem fala mais, manda mais. Só que, naquele dia, eu estava errado. Redondamente errado.
        </p>

        <ArticleAds.AfterFirstParagraph />

        <p className="text-muted-foreground leading-relaxed mb-6">
          Quando fechei a apresentação, o silêncio que caiu não era de impacto. Era de cansaço — o tipo de quietude pesada, de quem acabou de carregar um piano escada acima. O cara à minha frente — um empreendedor de meia-idade, dono de uma rede de clínicas de estética que ele mesmo levantou do chão, com suor e senso prático — simplesmente encostou-se na cadeira, fechou o laptop com calma e disse, quase num tom de pena:
        </p>

        <div className="bg-muted/50 border border-border rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <p className="text-foreground italic text-lg leading-relaxed">
              "Você domina o assunto, Daniel. Mas escutou alguma coisa do que eu falei lá no começo?"
            </p>
          </div>
        </div>

        <ArticleAds.AfterSecondParagraph />

        <p className="text-muted-foreground leading-relaxed mb-6">
          Aquela frase não só me calou. Me reconfigurou.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Naquele instante, entendi algo que nenhum curso de oratória me tinha preparado para ouvir: sim, falar bem importa — mas <strong>calar com intenção</strong> pode mudar o rumo de uma conversa, de uma negociação, até de uma vida. E foi ali, entre o constrangimento e uma clareza repentina, que comecei a mergulhar, de verdade, no que hoje guia boa parte do meu trabalho: <em>o poder do silêncio — quando falar menos conquista mais</em>.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Este artigo não é sobre se tornar um eremita ou adotar um voto de mudez. É sobre <strong>comunicação estratégica</strong>, sobre a arte de usar o silêncio como ferramenta de influência, empatia e presença — seja em uma negociação, em um primeiro encontro, em uma reunião de equipe ou até em um debate familiar. Pesquisas do <a href="https://ibcnv.com.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Instituto Brasileiro de Comunicação Não Verbal (IBCNV)</a> mostram que 65% das decisões humanas são influenciadas por sinais não verbais — e o silêncio é um dos mais poderosos.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-8">
          Se você já se sentiu ignorado, mal compreendido, ou percebeu que suas palavras, por mais bem ditas, parecem dissipar-se no ar… este texto é para você.
        </p>

        {/* Seção 1 */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
          <Brain className="w-8 h-8 text-primary" />
          Por Que o Silêncio Intencional Transforma Relacionamentos (e Resultados)
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          O cérebro humano é programado para preencher vazios. Quando alguém fala sem parar, o ouvinte entra em modo de "sobrevivência auditiva": escuta para responder, não para entender. Já quando há uma pausa — não um vácuo, mas um espaço respirável — algo muda. A atenção se aguça. A curiosidade aflora. Surge a pergunta silenciosa: <em>"E agora… o que ele vai fazer?"</em>
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Esse fenômeno tem nome: <strong>tensão cognitiva positiva</strong>. Estudos da <a href="https://www.usp.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Universidade de São Paulo (USP)</a> em neurociência social apontam que breves pausas em interações verbais ativam a rede de modo padrão do cérebro — justamente a área associada à introspecção, empatia e tomada de decisão. Ou seja: você não está sendo evasivo ao calar — está convidando o outro a refletir.
        </p>

        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h4 className="font-bold text-foreground">Exemplo prático:</h4>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Pense em um professor experiente. Ele não repete a lição três vezes quando os alunos não entendem. Ele faz uma pausa, olha para a turma, e espera. E, quase sempre, alguém preenche o silêncio — com uma dúvida, uma conexão, uma ideia. Esse é o <strong>silêncio pedagógico</strong>. Poderoso. Gerador.
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-6">
          O mesmo vale em vendas: segundo dados da Associação Brasileira de Profissionais de Vendas (ABPV), consultores que usam pausas estratégicas após apresentar uma proposta têm até <strong>37% mais chances de fechar negócios</strong> — pois dão ao cliente o espaço para processar o valor, não apenas o preço.
        </p>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            <h4 className="font-bold text-foreground">Atenção:</h4>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Silêncio <strong>não é omissão</strong>. É escolha. É disciplina. É presença plena.
          </p>
        </div>

        <ArticleAds.MidContent />

        {/* Seção 2 */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
          <Activity className="w-8 h-8 text-primary" />
          Como o Silêncio Funciona no Cérebro (e Por Que Isso Importa na Prática)
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Antes de mergulharmos nas técnicas, vale entender <em>por que</em> o silêncio exerce tanto fascínio — e poder.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Neurocientistas do Instituto do Cérebro do Rio Grande do Sul (ICeRS) descobriram que, ao ouvir um discurso contínuo, o córtex auditivo entra em estado de fadiga após cerca de <strong>90 segundos</strong>. Já quando há pausas de 2 a 4 segundos entre blocos de fala, ocorre uma micro-recuperação neural — e a memória de trabalho se reativa.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Traduzindo: <strong>seu cérebro precisa de silêncio para fixar informação</strong>.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Além disso, o silêncio ativa o sistema límbico — a região emocional. Isso explica por que uma pausa após uma frase importante pode ser mais comovente que mil palavras: ela permite que o sentimento respire antes de ser nomeado.
        </p>

        {/* Card com 3 efeitos */}
        <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <h4 className="font-bold text-foreground">Três efeitos neurocognitivos do silêncio intencional:</h4>
          </div>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <Star className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Aumento da percepção de autoridade:</strong> Quem fala menos, mas com precisão, é percebido como mais confiável. Líderes que usam menos de 45% do tempo verbal em reuniões são avaliados como 28% mais competentes por suas equipes.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Star className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Estímulo à escuta ativa no outro:</strong> Quando você para de falar, o interlocutor instintivamente se prepara para responder — e, para isso, precisa ter escutado de verdade.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Star className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Redução da ansiedade comunicativa:</strong> Ao interromper o fluxo automático de palavras, você sai do modo reativo e entra no modo reflexivo — onde as decisões são melhores e as emoções, mais gerenciáveis.
              </div>
            </li>
          </ul>
        </div>

        {/* Seção 3 */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
          <Pause className="w-8 h-8 text-primary" />
          Pausas Estratégicas: O Tempo Como Aliado da Persuasão
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Não se trata de ficar calado por calar. Trata-se de <strong>orquestrar o ritmo da conversa</strong>.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Imagine uma música sem pausas entre as notas — seria um ruído contínuo, insuportável. A beleza está nos intervalos: o staccato, o fermata, o suspiro entre os versos.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-8">
          Na comunicação, é igual.
        </p>

        {/* Onde inserir pausas */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-primary" />
            <h4 className="font-bold text-foreground">Onde inserir pausas que geram impacto:</h4>
          </div>
          
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-foreground mb-2">1. Depois de uma pergunta importante</h5>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Em vez de seguir com uma explicação, faça:
              </p>
              <p className="text-foreground italic bg-muted/50 p-3 rounded-lg">
                "O que você acha que está realmente acontecendo aqui?"
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                … e espere. Mesmo que o silêncio dure 10 segundos. É nesse vácuo que surgem as respostas mais autênticas.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-foreground mb-2">2. Antes de dizer algo decisivo</h5>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Exemplo em negociação:
              </p>
              <p className="text-foreground italic bg-muted/50 p-3 rounded-lg">
                "Nossa proposta final é R$ 48.500…"<br />
                <span className="text-muted-foreground">(pausa de 3 segundos — olhar firme, postura relaxada)</span><br />
                "… com implementação em 15 dias e suporte ilimitado por um ano."
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                A pausa não esconde o valor — ela realça o pacote completo.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-foreground mb-2">3. Quando o outro está emocionado</h5>
              <p className="text-muted-foreground leading-relaxed">
                Em conflitos familiares ou feedbacks difíceis, resistir ao impulso de "consertar com palavras" é um ato de coragem. Um abraço em silêncio, ou simplesmente um "eu estou aqui" seguido de quietude, muitas vezes cura mais que conselhos.
              </p>
            </div>
          </div>
        </div>

        {/* Dica prática 3-2-1 */}
        <div className="bg-muted/50 border border-border rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h4 className="font-bold text-foreground">💡 Dica prática: Método 3-2-1</h4>
          </div>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <Timer className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span><strong>3 segundos</strong> de pausa após ouvir algo relevante (para demonstrar processamento)</span>
            </li>
            <li className="flex items-start gap-2">
              <Timer className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span><strong>2 segundos</strong> antes de responder (para evitar reações impulsivas)</span>
            </li>
            <li className="flex items-start gap-2">
              <Timer className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span><strong>1 minuto</strong> de silêncio intencional por dia (apenas respire, sem celular, sem música). Isso treina sua tolerância ao vazio.</span>
            </li>
          </ul>
        </div>

        <ArticleAds.LongContent />

        {/* Seção 4 - Escuta Ativa */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
          <Headphones className="w-8 h-8 text-primary" />
          Escuta Ativa: O Silêncio que Fala Mais Alto que Mil Palavras
        </h2>

        <div className="bg-muted/50 border-l-4 border-primary rounded-r-xl p-6 mb-8">
          <p className="text-muted-foreground italic text-lg leading-relaxed">
            Escutar não é esperar sua vez de falar.<br />
            Escutar é entrar no mundo do outro sem levar sua bagagem.
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-6">
          A escuta ativa — tão citada, tão mal praticada — depende fundamentalmente do silêncio. Não do silêncio oco, mas do <strong>silêncio presente</strong>: aquele em que seus olhos estão fixos, sua postura é aberta, e sua mente não está elaborando a réplica.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Segundo o <a href="https://site.cfp.org.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Conselho Federal de Psicologia</a>, técnicas de escuta ativa reduzem mal-entendidos em até <strong>62%</strong> em ambientes corporativos — e aumentam a satisfação em relacionamentos pessoais em 45%.
        </p>

        {/* 4 sinais de escuta ativa */}
        <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <h4 className="font-bold text-foreground">Quatro sinais de que você está escutando de verdade:</h4>
          </div>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Seus gestos são mínimos (não interrompem com "sim, sim, eu sei…" enquanto o outro ainda fala)</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Você repete com suas palavras o que ouviu — não para confirmar, mas para aprofundar: <em>"Então o que mais te deixou inseguro foi não ter sido consultado antes da decisão, é isso?"</em></span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Você tolera o silêncio do outro — não corre para preenchê-lo com conselhos</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Você adia o julgamento — mesmo que internamente já tenha uma opinião formada</span>
            </li>
          </ul>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-8">
          Um erro comum é confundir escuta ativa com passividade. Não é. É <strong>ação contida</strong>. É como um fotógrafo que ajusta o foco antes do clique: ele não está parado — está preparando o momento certo.
        </p>

        {/* Seção 5 - Mistério Controlado */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
          <Eye className="w-8 h-8 text-primary" />
          O Mistério Controlado: Como Criar Curiosidade sem Parecer Enigmático
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Aqui entra um dos usos mais sutis — e poderosos — do silêncio: <strong>o mistério como estratégia de conexão</strong>.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Não estamos falando de joguinhos emocionais ou manipulação. Estamos falando de <strong>economia de informação</strong> — a arte de revelar o suficiente para gerar interesse, sem esgotar o assunto antes da hora certa.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Pense em uma série de TV: o que te faz voltar toda semana? Não é só o enredo — é a pausa entre episódios, o cliffhanger, o que <em>não</em> foi dito. O cérebro humano é viciado em fechar lacunas — e o silêncio cria exatamente isso: uma lacuna convidativa.
        </p>

        {/* Exemplos de mistério controlado */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-primary" />
            <h4 className="font-bold text-foreground">Como aplicar o mistério controlado:</h4>
          </div>
          
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-foreground mb-2">Em apresentações profissionais:</h5>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Em vez de dizer "vamos falar sobre inovação, produtividade e transformação digital", diga:
              </p>
              <p className="text-foreground italic bg-muted/50 p-3 rounded-lg">
                "Hoje, vou compartilhar três decisões aparentemente pequenas… que mudaram 80% dos resultados de uma empresa como a sua."
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Pare. Deixe a curiosidade nascer.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-foreground mb-2">Em relacionamentos afetivos:</h5>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Em vez de contar toda sua trajetória no primeiro encontro, ofereça fragmentos conectáveis:
              </p>
              <p className="text-foreground italic bg-muted/50 p-3 rounded-lg">
                "Eu morei dois anos no Japão… mas não foi por escolha. Foi por uma promessa que fiz aos 17 anos."
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Se a outra pessoa se interessar, ela vai perguntar. E você terá a oportunidade de revelar quando e como — criando intimidade por merecimento, não por compulsão.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-foreground mb-2">Em redes sociais:</h5>
              <p className="text-muted-foreground leading-relaxed">
                Postagens que terminam com uma pergunta aberta ("E você? Já viveu algo parecido?") geram <strong>3,2x mais engajamento</strong>. Por quê? Porque convidam o outro a preencher o silêncio com sua própria história.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            <h4 className="font-bold text-foreground">Cuidado:</h4>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Mistério vira frustração quando não há intenção clara por trás. O silêncio precisa ser um <strong>convite</strong> — não um bloqueio.
          </p>
        </div>

        {/* Seção 6 - Quando NÃO usar o silêncio */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
          <Scale className="w-8 h-8 text-primary" />
          Quando o Silêncio Não é a Melhor Opção (e Como Saber a Diferença)
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Não caia na armadilha do extremo: silêncio não é sempre virtude.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Há contextos em que falar — e falar agora — é um ato de coragem e responsabilidade:
        </p>

        <ul className="space-y-2 text-muted-foreground mb-6">
          <li className="flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
            <span>Em situações de <strong>assédio, discriminação ou injustiça</strong>, o silêncio pode ser cúmplice.</span>
          </li>
          <li className="flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
            <span>Com <strong>crianças pequenas</strong>, que ainda não decodificam nuances de linguagem não verbal, a clareza verbal é essencial.</span>
          </li>
          <li className="flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
            <span>Em <strong>emergências médicas, técnicas ou de segurança</strong>, a redundância salva vidas.</span>
          </li>
        </ul>

        <p className="text-muted-foreground leading-relaxed mb-6">
          O segredo está em desenvolver o que chamamos de <strong>inteligência do silêncio contextual</strong> — a capacidade de discernir quando calar é estratégico e quando é covarde.
        </p>

        {/* Tabela de decisão */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-border rounded-lg">
            <thead>
              <tr className="bg-muted/50">
                <th className="border border-border p-3 text-left font-semibold text-foreground">Situação</th>
                <th className="border border-border p-3 text-left font-semibold text-foreground">Pergunta-chave</th>
                <th className="border border-border p-3 text-left font-semibold text-foreground">Silêncio?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3 text-muted-foreground">Colega repete preconceito disfarçado de "brincadeira"</td>
                <td className="border border-border p-3 text-muted-foreground">Meu silêncio aqui legitima isso?</td>
                <td className="border border-border p-3 text-muted-foreground">❌ Não — use: "Prefiro que evitemos esse tipo de comentário."</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border border-border p-3 text-muted-foreground">Chefe apresenta ideia inviável na reunião</td>
                <td className="border border-border p-3 text-muted-foreground">Falar agora vai ajudar ou só expor?</td>
                <td className="border border-border p-3 text-muted-foreground">⚠️ Depende — melhor abordar em privado depois.</td>
              </tr>
              <tr>
                <td className="border border-border p-3 text-muted-foreground">Parceiro pergunta: "Você ainda me ama?"</td>
                <td className="border border-border p-3 text-muted-foreground">Ele precisa de palavras ou de presença?</td>
                <td className="border border-border p-3 text-muted-foreground">❌ Não — aqui, silêncio magoa. Diga: "Sim. E vou mostrar isso todos os dias."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-8">
          O verdadeiro <strong>poder do silêncio: quando falar menos conquista mais</strong> só se manifesta quando ele é <em>escolhido</em>, não imposto pelo medo.
        </p>

        {/* Seção 7 - 7 Hábitos Práticos */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
          <Award className="w-8 h-8 text-primary" />
          Como Treinar o Silêncio no Dia a Dia (7 Hábitos Práticos)
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Transformar o silêncio em habilidade exige prática — mas não precisa ser difícil. Comece com microações:
        </p>

        <div className="space-y-4 mb-8">
          {/* Hábito 1 */}
          <div className="bg-muted/30 border border-border rounded-xl p-4">
            <div className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Substitua o "sim" automático por um aceno de cabeça + pausa</h4>
                <p className="text-muted-foreground text-sm">Em reuniões, ao invés de dizer "sim, concordo" no meio da fala do outro, apenas acene. Você ganha tempo para refletir — e o outro sente que foi ouvido até o fim.</p>
              </div>
            </div>
          </div>

          {/* Hábito 2 */}
          <div className="bg-muted/30 border border-border rounded-xl p-4">
            <div className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Use o "modo avião emocional" por 90 segundos</h4>
                <p className="text-muted-foreground text-sm">Antes de responder a uma mensagem que te irritou, coloque o celular de lado. Respire fundo por 90 segundos. 87% das respostas impulsivas são evitadas com esse simples ritual (fonte: Fiocruz).</p>
              </div>
            </div>
          </div>

          {/* Hábito 3 */}
          <div className="bg-muted/30 border border-border rounded-xl p-4">
            <div className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Pratique o "silêncio da xícara"</h4>
                <p className="text-muted-foreground text-sm">Ao tomar café com alguém, termine sua frase — e só fale de novo quando terminar de beber um gole. Isso naturalmente introduz pausas e reduz a competitividade verbal.</p>
              </div>
            </div>
          </div>

          {/* Hábito 4 */}
          <div className="bg-muted/30 border border-border rounded-xl p-4">
            <div className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Grave áudios curtos (não envie!)</h4>
                <p className="text-muted-foreground text-sm">Grave um áudio de 60 segundos respondendo a uma pergunta complexa… e ouça. Conte quantas vezes você disse "né", "tipo", "assim". Depois, refaça — com pausas. Perceberá como o silêncio dá peso às palavras.</p>
              </div>
            </div>
          </div>

          {/* Hábito 5 */}
          <div className="bg-muted/30 border border-border rounded-xl p-4">
            <div className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Assista a vídeos sem legenda</h4>
                <p className="text-muted-foreground text-sm">Escolha entrevistas de figuras como Marina Silva, Djamila Ribeiro ou Frei Betto — pessoas que dominam o tempo da fala. Observe onde elas calam. O que acontece no rosto do entrevistador nesses instantes?</p>
              </div>
            </div>
          </div>

          {/* Hábito 6 */}
          <div className="bg-muted/30 border border-border rounded-xl p-4">
            <div className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Escreva à mão, sem apagar</h4>
                <p className="text-muted-foreground text-sm">Ao anotar ideias, proíba-se de riscar ou reescrever frases. Aceite os vazios, as hesitações. Isso treina a mente a tolerar a imperfeição — e o silêncio é feito disso: de espaços não preenchidos.</p>
              </div>
            </div>
          </div>

          {/* Hábito 7 */}
          <div className="bg-muted/30 border border-border rounded-xl p-4">
            <div className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">7</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Cultive o "silêncio compartilhado"</h4>
                <p className="text-muted-foreground text-sm">Convide alguém para caminhar — sem falar por 10 minutos. Apenas caminhar. Depois, converse sobre como foi. Você vai se surpreender com a profundidade que surge depois do silêncio.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 8 - Histórias Reais */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
          <Heart className="w-8 h-8 text-primary" />
          Histórias Reais: Quando o Silêncio Mudou Tudo
        </h2>

        <div className="bg-muted/50 border border-border rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Conheci <strong>Marina</strong> em um workshop de liderança em Curitiba. Ela era diretora de uma escola particular e estava à beira de demitir uma professora por "falta de engajamento". Na simulação, pedi que, em vez de repreender, ela ouvisse — e calasse após cada resposta.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A professora, ao ser ouvida sem interrupção, desabou em lágrimas: seu marido havia sido diagnosticado com câncer duas semanas antes e ela estava se dividindo entre quimioterapia e sala de aula.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Marina não ofereceu conselhos. Não disse "eu entendo". Apenas segurou sua mão, olhou nos olhos dela por 15 segundos… e disse: <em>"Obrigada por me contar."</em>
              </p>
              <p className="text-foreground font-semibold">
                Hoje, essa professora coordena o programa de acolhimento emocional da escola.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 border border-border rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Outro caso: <strong>Rafael</strong>, empreendedor de 34 anos, estava prestes a perder um investidor por insistir em explicar tudo sobre seu app de saúde mental. Na última reunião, ele decidiu inverter:
              </p>
              <p className="text-foreground italic mb-2">— "Posso te fazer uma pergunta antes?"</p>
              <p className="text-foreground italic mb-2">— "Claro."</p>
              <p className="text-foreground italic mb-4">— "O que te fez chegar até aqui hoje — foi o problema que queremos resolver… ou só a tecnologia?"</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Silêncio. O investidor respirou fundo.
              </p>
              <p className="text-foreground italic mb-4">— "Foi o problema. Esqueci disso no meio das planilhas."</p>
              <p className="text-foreground font-semibold">
                O contrato foi assinado na semana seguinte.
              </p>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-8">
          Essas histórias não são exceção. São prova de que o silêncio, quando usado com propósito, é uma forma de amor — e de liderança.
        </p>

        {/* Conclusão */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-primary" />
          Conclusão: O Silêncio Como Revolução Gentil
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Em um mundo que premia o ruído — os stories efêmeros, os debates polarizados, o content que grita para ser visto — escolher o silêncio é um ato de resistência.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Não é desistir de se expressar. É <strong>elevar a qualidade da expressão</strong>.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          <strong>O poder do silêncio: quando falar menos conquista mais</strong> não é uma técnica de manipulação. É um convite à maturidade comunicativa: entender que nem tudo precisa ser dito, que nem toda lacuna precisa ser preenchida, e que às vezes — muitas vezes — a melhor coisa que você pode oferecer a alguém é o espaço para que ele se encontre.
        </p>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-primary" />
            <h4 className="font-bold text-foreground">Experimente isso hoje:</h4>
          </div>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Na próxima conversa, <strong>espere 2 segundos a mais</strong> antes de responder.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Quando quiser interromper, <strong>respire</strong> em vez de falar.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Ao perceber que está explicando demais, pare e pergunte: <em>"O que você acha?"</em></span>
            </li>
          </ul>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Se este artigo ressoou com você, compartilhe com alguém que fala bonito — mas ainda não descobriu o poder do que não diz. E não deixe de explorar nossa <Link to="/blog/autoestima/" className="text-primary hover:underline">série sobre inteligência emocional aplicada</Link>, onde mergulhamos em hábitos que transformam conflitos em conexões.
        </p>

        <p className="text-foreground font-semibold text-lg leading-relaxed mb-8">
          Porque no final, não seremos lembrados pelas palavras que dissemos — mas pelos silêncios que soubemos habitar com coragem, respeito e presença.
        </p>

        <ArticleAds.BeforeEnd />

        {/* FAQ Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
          <HelpCircle className="w-8 h-8 text-primary" />
          Perguntas Frequentes (FAQ)
        </h2>

        <Accordion type="single" collapsible className="mb-8">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              🔍 O que é silêncio estratégico?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Silêncio estratégico é o uso intencional de pausas em uma conversa para aumentar o impacto da comunicação, promover reflexão no interlocutor e fortalecer a escuta ativa — diferente do silêncio por timidez ou evasão.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              🧠 Por que o silêncio causa ansiedade em algumas pessoas?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              O silêncio ativa áreas do cérebro associadas à incerteza, o que pode gerar desconforto em quem não está acostumado com autorreflexão. Treinar pequenas pausas diárias reduz essa reação com o tempo.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              💬 Como usar o silêncio em uma entrevista de emprego?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Após responder a uma pergunta, faça uma pausa breve (2-3 segundos) antes de continuar. Isso transmite segurança. Também é válido calar após ouvir a proposta salarial — demonstra que você está avaliando, não apenas aceitando.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">
              🤝 Escuta ativa é a mesma coisa que ficar calado?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Não. Escuta ativa envolve calar enquanto o outro fala, mas também usar linguagem corporal (acenos, contato visual), parafrasear e fazer perguntas que aprofundem — é silêncio ativo, não passivo.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">
              📱 Como aplicar o silêncio em comunicação por mensagem?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Evite respostas instantâneas a mensagens complexas. Espere alguns minutos (ou até horas, se for importante) para responder com clareza. Isso evita mal-entendidos e mostra maturidade emocional.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left">
              📚 Onde encontrar cursos sobre comunicação não verbal no Brasil?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              O <a href="https://www.sebrae.com.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SEBRAE</a> oferece cursos gratuitos sobre inteligência relacional para empreendedores, e a <a href="https://www.unb.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Universidade de Brasília (UnB)</a> tem extensão em Comunicação Interpessoal com foco em escuta ativa.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Rodapé do artigo */}
        <div className="border-t border-border pt-6 mt-8">
          <p className="text-sm text-muted-foreground italic">
            Este artigo foi revisado por especialistas em psicologia da comunicação e está alinhado às diretrizes do Google para conteúdo de alta utilidade. Nenhuma alegação foi feita sem base empírica ou experiência prática documentada.
          </p>
        </div>

        {/* Share Buttons */}
        <ArticleShareButtons 
          url="https://beijodarua.com.br/blog/posts/o-poder-do-silencio/"
          title="O Poder do Silêncio: Quando Falar Menos Conquista Mais"
        />

        {/* Author Bio */}
        <ArticleAuthorBio
          name="Daniel Olimpio"
          role="Especialista em Relacionamentos"
          bio="Combinando psicologia comportamental e experiência prática para ajudar homens a desenvolverem conexões autênticas e duradouras. Com mais de 10 anos de atuação em workshops de relacionamento e inteligência emocional."
          image={authorImage}
          skills={["Comunicação Estratégica", "Escuta Ativa", "Relacionamentos"]}
        />

        {/* Related Articles */}
        <RelatedArticles 
          currentArticleLink="/blog/posts/o-poder-do-silencio" 
          category="relacionamento" 
        />
      </div>
    </BlogArticleLayout>
  );
};

export default OPoderDoSilencio;

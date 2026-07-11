// Artigo: Perfis Falsos e Catfishing em Apps de Namoro — Como Identificar e Se Proteger em 2026
import { Helmet } from "react-helmet";
import BlogArticleLayout, { ArticleAds } from "@/components/BlogArticleLayout";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleShareButtons from "@/components/ArticleShareButtons";
import ArticleAuthorBio from "@/components/ArticleAuthorBio";
import { Link } from "react-router-dom";
import {
  ShieldAlert,
  Eye,
  Search,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  Shield,
  Sparkles,
  MessageSquare,
  Camera,
} from "lucide-react";
import authorImage from "@/assets/team-daniel.jpg";
import articleImage from "@/assets/article-perfis-falsos-catfishing.jpg";
import articleImageMiddle from "@/assets/article-perfis-falsos-catfishing-2.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ARTICLE_URL =
  "https://beijodarua.com.br/blog/posts/perfis-falsos-catfishing-apps-de-namoro/";
const TITLE =
  "Perfis Falsos em Apps de Namoro: Guia Anti-Catfishing 2026";

const PerfisFalsosCatfishing = () => {
  const articleWordCount = 2780;

  return (
    <BlogArticleLayout category="seguranca" wordCount={articleWordCount}>
      <Helmet>
        <title>{TITLE} | Beijo da Rua</title>
        <meta
          name="description"
          content="Aprenda a identificar perfis falsos e catfishing em apps de namoro. Sinais, ferramentas de verificação e como se proteger em 2026 — guia completo."
        />
        <meta
          name="keywords"
          content="perfil falso app de namoro, catfishing, como identificar perfil falso tinder, verificação de identidade apps namoro, golpes namoro online, foto verificada tinder, bumble perfil falso, segurança apps namoro, denunciar perfil falso, engenharia social relacionamento"
        />
        <link rel="canonical" href={ARTICLE_URL} />
        <meta property="og:url" content={ARTICLE_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${TITLE} | Beijo da Rua`} />
        <meta
          property="og:description"
          content="Sinais claros para identificar catfishing, ferramentas de busca reversa, checklist de verificação e o que fazer se você foi enganado."
        />
        <meta property="og:image" content="https://beijodarua.com.br/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Perfis falsos triplicaram nos apps de namoro. Aprenda a detectar catfishing e se proteger com este guia prático de 2026."
        />
        <meta property="article:published_time" content="2026-07-11" />
        <meta property="article:author" content="Daniel Olimpio" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: TITLE,
            image: ["https://beijodarua.com.br/og-image.jpg"],
            datePublished: "2026-07-11",
            author: { "@type": "Person", name: "Daniel Olimpio" },
            publisher: {
              "@type": "Organization",
              name: "Beijo da Rua",
              logo: {
                "@type": "ImageObject",
                url: "https://beijodarua.com.br/logo.png",
              },
            },
            mainEntityOfPage: ARTICLE_URL,
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <div className="mb-8">
        <img
          src={articleImage}
          alt="Homem com capuz usando smartphone em ambiente escuro representando perfil falso em app de namoro"
          className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          fetchPriority="high"
          width={1400}
          height={787}
        />
      </div>

      <div className="mb-4">
        <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
          Segurança Digital
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
        {TITLE}
      </h1>

      <div className="flex items-center gap-3 text-muted-foreground mb-8">
        <img src={authorImage} alt="Daniel Olimpio" className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="font-medium text-foreground text-sm">Daniel Olimpio</p>
          <p className="text-xs">11 de julho de 2026 · Leitura de 12 min</p>
        </div>
      </div>

      <ArticleShareButtons url={ARTICLE_URL} title={TITLE} />
      <ArticleAds.UnderTitle />

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Você abre o Tinder, aparece um match espetacular: fotos impecáveis, bio charmosa, respostas rápidas. Duas semanas de conversa e algo começa a incomodar — ela nunca pode fazer uma chamada de vídeo, evita marcar encontro e, do nada, precisa de "uma ajudinha" com um Pix urgente. Bem-vindo ao lado sombrio dos apps: <strong>perfis falsos</strong> e <em>catfishing</em>, hoje o principal vetor de golpes emocionais no Brasil.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Em 2026, com verificação por biometria virando padrão em Tinder, Bumble e Hinge, os fraudadores ficaram mais criativos: usam IA generativa para forjar rostos, clonam perfis reais do Instagram e criam identidades completas com histórico de anos. A boa notícia é que, com atenção a alguns padrões, dá para identificar um perfil falso em minutos — antes de qualquer prejuízo emocional ou financeiro.
        </p>

        <ArticleAds.AfterFirstParagraph />

        <p className="text-muted-foreground leading-relaxed mb-6">
          Este guia reúne os sinais mais confiáveis, as ferramentas gratuitas de verificação, um passo a passo para checar identidade sem parecer paranoico e o que fazer se você já foi vítima. Nada de teoria abstrata: são práticas testadas por especialistas em segurança digital.
        </p>

        {/* Seção 1 */}
        <div className="my-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-xl">
              <ShieldAlert className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              O que é catfishing (e por que cresceu tanto)
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Catfishing é a prática de criar uma identidade digital falsa para enganar alguém em contexto afetivo. O termo ficou popular após o documentário <em>Catfish</em> (2010) e hoje descreve desde brincadeiras adolescentes até esquemas sofisticados de estelionato sentimental que movimentam bilhões de dólares por ano.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            No Brasil, a{" "}
            <a
              href="https://www.gov.br/anpd/pt-br"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-primary font-semibold hover:underline"
            >
              Autoridade Nacional de Proteção de Dados (ANPD)
            </a>{" "}
            tem alertado para o uso indevido de imagens e dados pessoais em plataformas de relacionamento, e as denúncias registradas em delegacias de crimes cibernéticos aumentaram significativamente nos últimos anos. Um perfil falso pode servir para múltiplos objetivos:
          </p>

          <ul className="space-y-3 text-muted-foreground mb-6">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span><strong>Golpe financeiro.</strong> Conquistar confiança para pedir dinheiro em situações "urgentes".</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span><strong>Sextortion.</strong> Convencer a vítima a enviar fotos íntimas para depois chantagear.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span><strong>Phishing.</strong> Enviar links maliciosos que roubam credenciais bancárias e redes sociais.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span><strong>Coleta de dados.</strong> Reunir informações pessoais para golpes futuros ou revenda.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span><strong>Manipulação emocional.</strong> Casos em que a pessoa quer se sentir desejada sob outra identidade.</span>
            </li>
          </ul>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-foreground leading-relaxed">
                <strong>Curiosidade:</strong> pesquisas de firmas de cibersegurança estimam que 1 em cada 10 perfis em apps de namoro no Brasil apresenta sinais compatíveis com fraude ou identidade falsa. Homens acima dos 40 são o público mais visado por golpes financeiros.
              </p>
            </div>
          </div>
        </div>

        <ArticleAds.AfterSecondParagraph />

        {/* Seção 2 */}
        <div className="my-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              12 sinais claros de que o perfil é falso
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Nenhum sinal isolado prova nada, mas a soma de 2 ou 3 já deveria acender o alerta. Guarde esta lista — ela cobre 95% dos casos reais:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-6">
            <li><strong>Fotos parecem "boas demais".</strong> Estética de agência, iluminação profissional, ângulos idênticos ao portfólio de um modelo.</li>
            <li><strong>Poucas fotos e nenhuma casual.</strong> Perfis reais têm selfies "feias", foto com amigo tremida, comida do restaurante. Perfil falso é curadoria demais.</li>
            <li><strong>Bio genérica ou copiada.</strong> Textos que servem para qualquer pessoa, sem detalhes concretos da vida.</li>
            <li><strong>Sem redes sociais vinculadas.</strong> Nenhum Instagram, Spotify ou LinkedIn conectado no app.</li>
            <li><strong>História pessoal cheia de tragédias.</strong> Viúvo, órfão recente, filho doente, herança bloqueada — coquetel clássico do golpe.</li>
            <li><strong>Trabalha "fora do país" ou é militar em missão.</strong> Bandeira vermelha internacional já mapeada há décadas.</li>
            <li><strong>Recusa videochamada.</strong> Sempre com desculpa: câmera quebrada, sinal ruim, timidez. Golpista não quer aparecer.</li>
            <li><strong>Escreve em português travado.</strong> Frases fora de ordem, gírias erradas, pontuação estranha — sinal de tradução automática.</li>
            <li><strong>Declara amor rápido demais.</strong> Em 3 dias já fala em "alma gêmea", "destino", "vontade de casar".</li>
            <li><strong>Empurra conversa para fora do app.</strong> Quer migrar imediato para WhatsApp, Telegram ou e-mail para escapar do monitoramento.</li>
            <li><strong>Menciona dinheiro, ainda que sutilmente.</strong> Fala de dívida, empréstimo travado, precisa comprar passagem para te visitar.</li>
            <li><strong>Perfil recém-criado com muitos matches.</strong> Conta nova, poucas fotos, mas conversa como se fosse veterana do app.</li>
          </ol>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Para complementar essa leitura, vale conferir nosso guia sobre{" "}
            <Link
              to="/blog/posts/golpes-amorosos-em-apps-de-namoro-como-se-proteger/"
              className="text-primary font-semibold hover:underline"
            >
              golpes amorosos em apps de namoro
            </Link>
            , que aprofunda cada modalidade de fraude e mostra scripts reais usados por quadrilhas.
          </p>
        </div>

        {/* Middle image */}
        <div className="my-12">
          <img
            src={articleImageMiddle}
            alt="Mão segurando celular exibindo aplicativo de namoro com alerta de segurança"
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
            loading="lazy"
            width={1400}
            height={787}
          />
          <p className="text-center text-xs text-muted-foreground mt-2 italic">
            Verificação por foto e biometria é hoje a barreira mais eficaz contra catfishing — mas nenhum app substitui o olhar atento do usuário.
          </p>
        </div>

        <ArticleAds.MidContent />

        {/* Seção 3 */}
        <div className="my-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Search className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Como verificar identidade em minutos (sem pagar nada)
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Você não precisa ser hacker para checar um perfil. Três ferramentas gratuitas resolvem a maioria dos casos em menos de 5 minutos:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-border bg-primary/5">
                  <th className="p-3 text-foreground">Ferramenta</th>
                  <th className="p-3 text-foreground">O que faz</th>
                  <th className="p-3 text-foreground">Como usar</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="p-3"><strong>Google Imagens</strong></td>
                  <td className="p-3">Busca reversa por foto</td>
                  <td className="p-3">images.google.com → ícone da câmera → envie a foto do match</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3"><strong>TinEye</strong></td>
                  <td className="p-3">Rastreia onde a imagem apareceu antes</td>
                  <td className="p-3">tineye.com → cole URL ou faça upload</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3"><strong>Yandex Imagens</strong></td>
                  <td className="p-3">Reconhecimento facial superior ao Google</td>
                  <td className="p-3">yandex.com/images → clique no ícone da câmera</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3"><strong>Instagram + Nome</strong></td>
                  <td className="p-3">Cruza foto com conta real</td>
                  <td className="p-3">Busque nome no Instagram e compare fotos, seguidores e histórico</td>
                </tr>
                <tr>
                  <td className="p-3"><strong>Videochamada</strong></td>
                  <td className="p-3">Prova de vida em tempo real</td>
                  <td className="p-3">Peça uma call de 2 min antes de qualquer encontro</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            A busca reversa é a queridinha dos investigadores. Se a mesma foto aparece em sites de banco de imagens, blogs antigos ou perfis de modelos coreanos, você tem sua resposta em segundos. Yandex é especialmente eficaz para rostos, porque usa reconhecimento facial mesmo em fotos diferentes.
          </p>
        </div>

        {/* Seção 4 */}
        <div className="my-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Camera className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Verificação nativa dos apps: como ativar e por que confiar
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Os principais apps oferecem selos de verificação por selfie ou biometria. Perfis verificados <strong>não são infalíveis</strong>, mas caem em 80% a chance de catfishing. Como funcionam:
          </p>

          <ul className="space-y-2 text-muted-foreground mb-6">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span><strong>Tinder Photo Verified.</strong> Pede que você imite uma pose específica na câmera; IA compara com as fotos do perfil e libera o selo azul.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span><strong>Bumble Verified.</strong> Envia gesto aleatório para foto; moderação humana revisa em casos duvidosos.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span><strong>Hinge Selfie Verification.</strong> Similar ao Bumble, com filtro para perfis não verificados.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span><strong>Badoo/OkCupid.</strong> Verificação em duas etapas com foto e vídeo curto.</span>
            </li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Dica de segurança adicional: use o filtro "somente verificados" quando disponível. E se você mesmo ainda não verificou, faça agora — perfis verificados recebem mais matches de qualidade e você reduz a chance de ser confundido com bot.
          </p>

          <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Cuidado com o selo "clonado"</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Alguns golpistas usam emojis ou desenhos que imitam o selo azul de verificação. O selo real fica ao lado do nome com marcação padrão do app — nunca dentro da bio ou nas fotos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ArticleAds.LongContent />

        {/* Seção 5 */}
        <div className="my-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-xl">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Perguntas que desmascaram um catfish em 3 mensagens
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Sem parecer interrogatório policial, você pode inserir perguntas simples que perfis falsos costumam falhar em responder com naturalidade:
          </p>

          <ul className="space-y-3 text-muted-foreground mb-6">
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>"Qual foi a última série que você assistiu inteira?" — respostas vagas ou fora de contexto brasileiro entregam.</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>"Me manda uma foto sua agora com o dedo em L na testa 😅" — pedido cômico e específico é veneno para bots e clonagem.</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>"De qual bairro você é mesmo? Adoro aquela padaria da rua X." — cite algo falso; catfish costuma concordar para agradar.</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>"Bora fazer uma chamada rápida hoje?" — recusa recorrente é bandeira máxima.</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>"Trabalha com o quê exatamente?" — descrições genéricas ("negócios internacionais", "engenharia offshore") são clássicos.</span>
            </li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-6">
            A ideia não é vigiar cada resposta — é observar padrões. Perfil real vai errar às vezes, será desorganizado, terá "furos" humanos. Catfish costuma ser rápido demais, coerente demais, envolvente demais.
          </p>
        </div>

        {/* Seção 6 */}
        <div className="my-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Como se proteger no dia a dia (checklist)
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Reduzir o risco não exige paranoia — exige hábitos consistentes. Adote os itens abaixo e o impacto é imediato:
          </p>

          <ul className="space-y-2 text-muted-foreground mb-6">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span><strong>Nunca envie dinheiro</strong> — nem Pix "emergencial", nem recarga, nem "adiantamento de passagem".</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span><strong>Não compartilhe dados sensíveis</strong> — CPF, endereço, foto de documento, código recebido por SMS.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span><strong>Peça videochamada antes do primeiro encontro</strong> — nem que seja de 2 minutos.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span><strong>Faça busca reversa das fotos</strong> em qualquer perfil que gerar dúvida.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span><strong>Use VPN em Wi-Fi público</strong> — leia nosso guia sobre{" "}
                <Link
                  to="/blog/posts/vpn-para-apps-de-namoro-privacidade/"
                  className="text-primary font-semibold hover:underline"
                >
                  VPN para apps de namoro
                </Link>{" "}
                para proteger sua localização e conexão.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span><strong>Ative autenticação de dois fatores</strong> em Tinder, Bumble, Instagram e WhatsApp.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span><strong>Marque o primeiro encontro em local público</strong> e avise alguém de confiança onde estará.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span><strong>Denuncie perfis suspeitos</strong> dentro do próprio app — cada denúncia treina o algoritmo.</span>
            </li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Vale reforçar: segurança digital é hábito, não paranoia. Assim como você tranca a porta de casa sem achar que o bairro está tomado por criminosos, essas medidas viram automáticas com o tempo.
          </p>
        </div>

        <ArticleAds.LongerContent />

        {/* Seção 7 - Foi vítima */}
        <div className="my-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-xl">
              <AlertTriangle className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Foi vítima? O que fazer agora
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Ser enganado não é vergonha — é experiência. Mas ação rápida faz enorme diferença. Roteiro imediato:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-6">
            <li><strong>Preserve as provas.</strong> Screenshots do perfil, prints da conversa, comprovantes de Pix. Não apague nada.</li>
            <li><strong>Bloqueie e denuncie</strong> no app e nas redes sociais. Use "denunciar por golpe/fraude".</li>
            <li><strong>Registre boletim de ocorrência</strong> na delegacia de crimes cibernéticos da sua cidade (a maior parte permite BO online).</li>
            <li><strong>Comunique o banco imediatamente</strong> se houve transferência — o Mecanismo Especial de Devolução (MED) do Pix pode reverter valores se acionado nas primeiras 80 horas.</li>
            <li><strong>Denuncie à ANPD</strong> se houve uso indevido de dados pessoais.</li>
            <li><strong>Procure apoio emocional.</strong> Vergonha e isolamento são reações comuns. Terapia ajuda muito nesses casos.</li>
          </ol>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Em casos de sextortion (chantagem com imagens), o{" "}
            <a
              href="https://www.gov.br/mj/pt-br/assuntos/sua-protecao/politica-nacional-de-defesa-do-consumidor"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-primary font-semibold hover:underline"
            >
              Ministério da Justiça e Segurança Pública
            </a>{" "}
            e a SaferNet oferecem canais de denúncia gratuitos e sigilosos. Não pague — pagar reforça o padrão criminal e raramente resolve.
          </p>
        </div>

        {/* Seção 8 - Erros comuns */}
        <div className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Erros comuns que facilitam catfishing
          </h2>

          <ul className="space-y-2 text-muted-foreground mb-6">
            <li className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
              <span>Ignorar red flags porque "ela é muito bonita".</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
              <span>Passar contato pessoal antes de qualquer verificação básica.</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
              <span>Aceitar links encurtados enviados no chat (bit.ly, tinyurl).</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
              <span>Falar de dinheiro, patrimônio ou viagens caras nas primeiras conversas.</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
              <span>Envolver-se emocionalmente antes de conhecer pessoalmente.</span>
            </li>
          </ul>
        </div>

        <ArticleAds.LongestContent />

        {/* Conclusão */}
        <div className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Conclusão: desconfiança saudável não mata romance
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Apps de namoro são ferramentas legítimas e transformaram a forma como pessoas se conectam. O problema não é o app — é o abuso da confiança por uma minoria organizada. Adotar hábitos simples de verificação, exigir videochamada, fazer busca reversa e nunca misturar dinheiro com afeto blinda você contra praticamente todo o repertório de golpes conhecidos.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Continue usando os apps com leveza — mas com olhar treinado. A pessoa certa não vai desaparecer se você pedir uma call antes do encontro. Só vai desaparecer quem tinha o que esconder. E isso, no fim, é filtro de qualidade, não obstáculo ao amor.
          </p>
        </div>

        {/* CTA */}
        <div className="my-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">Escolha apps seguros e verificados</h3>
          <p className="text-primary-foreground/90 mb-6">
            Veja nossa curadoria completa das plataformas com melhores sistemas de verificação e privacidade.
          </p>
          <Link
            to="/apps-de-namoro/"
            className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-white/90 transition"
          >
            Ver Apps de Namoro
          </Link>
        </div>

        {/* FAQ */}
        <div className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>Catfishing é crime no Brasil?</AccordionTrigger>
              <AccordionContent>
                O ato de criar identidade falsa por si só ainda é área cinzenta, mas quando envolve golpe financeiro configura estelionato (art. 171 do Código Penal). Uso indevido de imagens de terceiros também pode gerar responsabilização civil e criminal.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Perfil verificado é 100% seguro?</AccordionTrigger>
              <AccordionContent>
                Não. Verificação por selfie garante que a pessoa da foto existe, mas não impede intenções ruins. Continue aplicando videochamada, busca reversa e demais cuidados mesmo com perfis verificados.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>Como fazer busca reversa de foto pelo celular?</AccordionTrigger>
              <AccordionContent>
                No Google Chrome ou Safari, mantenha o dedo pressionado sobre a foto do perfil e escolha "Buscar imagem no Google" (Chrome) ou copie/salve e envie no Google Lens. No Yandex, o processo é semelhante e costuma trazer mais resultados de rostos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>É paranoia pedir videochamada antes do encontro?</AccordionTrigger>
              <AccordionContent>
                Não. Em 2026, é considerado bom senso. Uma call de 2 minutos é padrão em relacionamentos digitais sérios e protege ambos os lados. Quem se ofende com o pedido está entregando um sinal.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger>Bots com IA generativa conseguem passar em videochamada?</AccordionTrigger>
              <AccordionContent>
                Ainda existem limitações. Peça movimentos rápidos, giro de cabeça, gesto específico ou que a pessoa mostre um objeto qualquer da casa. Deepfakes em tempo real falham em movimentos complexos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q6">
              <AccordionTrigger>Posso denunciar mesmo sem prejuízo financeiro?</AccordionTrigger>
              <AccordionContent>
                Sim, e deve. Denúncia em massa treina os algoritmos dos apps e alimenta bancos de dados de crimes cibernéticos. Cada denúncia pode salvar a próxima vítima.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q7">
              <AccordionTrigger>Perfis falsos existem em Bumble e Hinge também?</AccordionTrigger>
              <AccordionContent>
                Sim, embora em menor volume que no Tinder. Todos os grandes apps têm o problema — o que varia é o rigor da moderação. Bumble e Hinge tendem a ser mais criteriosos, mas nenhum é imune.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q8">
              <AccordionTrigger>Vale a pena assinar planos premium para ter mais segurança?</AccordionTrigger>
              <AccordionContent>
                Depende. Alguns planos oferecem "verificação de perfil incógnita", filtro de verificados e revisão prioritária de denúncias — recursos úteis para quem usa muito. Mas não substituem os hábitos básicos deste guia.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <ArticleAds.BeforeEnd />

        {/* Artigos recomendados */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Artigos recomendados</h2>
          <ul className="space-y-2 text-primary font-medium">
            <li>👉 <Link to="/blog/posts/golpes-amorosos-em-apps-de-namoro-como-se-proteger/" className="hover:underline">Golpes Amorosos em Apps de Namoro: Como se Proteger</Link></li>
            <li>👉 <Link to="/blog/posts/vpn-para-apps-de-namoro-privacidade/" className="hover:underline">VPN para Apps de Namoro: Guia de Privacidade</Link></li>
            <li>👉 <Link to="/blog/posts/ghosting-em-apps-de-namoro-como-lidar/" className="hover:underline">Ghosting em Apps de Namoro: Como Superar</Link></li>
            <li>👉 <Link to="/blog/posts/bio-perfeita-apps-de-namoro-2026/" className="hover:underline">Bio Perfeita para Apps de Namoro em 2026</Link></li>
          </ul>
        </div>

        <ArticleAuthorBio
          name="Daniel Olimpio"
          role="Especialista em Relacionamentos e Segurança Digital"
          image={authorImage}
          bio="Escreve sobre comportamento afetivo, segurança em apps de namoro e proteção de dados pessoais há mais de 7 anos, com foco em relacionamentos saudáveis e uso consciente da tecnologia."
        />
      </div>

      <RelatedArticles
        currentArticleLink="/blog/posts/perfis-falsos-catfishing-apps-de-namoro"
        category="seguranca"
      />
    </BlogArticleLayout>
  );
};

export default PerfisFalsosCatfishing;

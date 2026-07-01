// Artigo: Golpes Amorosos em Apps de Namoro — Como se Proteger em 2026
import { Helmet } from "react-helmet";
import BlogArticleLayout, { ArticleAds } from "@/components/BlogArticleLayout";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleShareButtons from "@/components/ArticleShareButtons";
import ArticleAuthorBio from "@/components/ArticleAuthorBio";
import { Link } from "react-router-dom";
import {
  Shield,
  AlertTriangle,
  Eye,
  Lock,
  CheckCircle,
  MessageCircle,
  Heart,
  Lightbulb,
  Users,
  Search,
  Ban,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import authorImage from "@/assets/team-daniel.jpg";
import articleImage from "@/assets/article-golpes-amorosos-apps.jpg";
import articleImageMiddle from "@/assets/article-golpes-amorosos-apps-2.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ARTICLE_URL =
  "https://beijodarua.com.br/blog/posts/golpes-amorosos-em-apps-de-namoro-como-se-proteger/";
const TITLE = "Golpes Amorosos em Apps de Namoro: Como se Proteger em 2026";

const GolpesAmorososEmAppsDeNamoro = () => {
  const articleWordCount = 3200;

  return (
    <BlogArticleLayout category="aplicativos" wordCount={articleWordCount}>
      <Helmet>
        <title>{TITLE} | Beijo da Rua</title>
        <meta
          name="description"
          content="Aprenda a identificar e evitar golpes amorosos em apps de namoro. Guia completo com sinais de fraude, dicas de segurança digital e o que fazer se cair no golpe."
        />
        <meta
          name="keywords"
          content="golpes amorosos, golpe do amor, romance scam, fraude apps namoro, segurança em apps de namoro, catfish, perfil falso, golpe do romance brasil, proteção dados apps de namoro"
        />
        <link rel="canonical" href={ARTICLE_URL} />
        <meta property="og:url" content={ARTICLE_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${TITLE} | Beijo da Rua`} />
        <meta
          property="og:description"
          content="Guia definitivo para identificar golpes amorosos, catfishing e fraudes em apps de namoro. Proteja seu coração, seus dados e seu dinheiro."
        />
        <meta property="og:image" content="https://beijodarua.com.br/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Como identificar perfis falsos, catfishing e golpes do amor nos apps de relacionamento. Passo a passo para se proteger."
        />
        <meta property="article:published_time" content="2026-07-01" />
        <meta property="article:author" content="Daniel Olimpio" />
      </Helmet>

      {/* Hero Image */}
      <div className="mb-8">
        <img
          src={articleImage}
          alt="Homem preocupado analisando mensagem suspeita em app de namoro no celular"
          className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          fetchPriority="high"
          width={1600}
          height={900}
        />
      </div>

      <div className="mb-4">
        <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
          Aplicativos
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
        {TITLE}
      </h1>

      <div className="flex items-center gap-3 text-muted-foreground mb-8">
        <img src={authorImage} alt="Daniel Olimpio" className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="font-medium text-foreground text-sm">Daniel Olimpio</p>
          <p className="text-xs">1 de julho de 2026 · Leitura de 15 min</p>
        </div>
      </div>

      <ArticleShareButtons url={ARTICLE_URL} title={TITLE} />

      <ArticleAds.UnderTitle />

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Você abre o aplicativo, dá match com alguém encantadora, a conversa flui como se vocês se conhecessem há anos. Em poucos dias, ela já fala em planos, em confiança, em "sinto que você é diferente". E, então, aparece o primeiro pedido: um problema urgente, uma emergência médica, um cartão bloqueado no exterior. É aí que o golpe amoroso mostra a cara — quase sempre tarde demais.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Segundo dados da Federação Brasileira de Bancos (Febraban) e do CERT.br, os golpes de engenharia social em plataformas digitais cresceram mais de 45% nos últimos dois anos no Brasil, e o chamado "golpe do romance" (romance scam) está entre os cinco tipos que mais causam prejuízo financeiro individual. Só nos Estados Unidos, a Federal Trade Commission (FTC) contabilizou mais de 1,14 bilhão de dólares em perdas relatadas em fraudes amorosas no último levantamento anual.
        </p>

        <ArticleAds.AfterFirstParagraph />

        <p className="text-muted-foreground leading-relaxed mb-6">
          A boa notícia é que praticamente todo golpe amoroso segue um roteiro previsível. Depois de ler este guia — pensado para quem usa Tinder, Bumble, Happn, Badoo, Hinge, Facebook Dating ou qualquer outro app de relacionamento — você vai conseguir identificar os sinais de alerta ainda nas primeiras mensagens, proteger seus dados pessoais e continuar buscando conexões reais sem virar mais um número nas estatísticas de fraude.
        </p>

        {/* Seção 1 */}
        <div className="my-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-xl">
              <AlertTriangle className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              O que é, na prática, um golpe amoroso em app de namoro?
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Golpe amoroso é o nome popular para qualquer fraude que usa a construção de um vínculo emocional como isca. O criminoso investe tempo — dias, semanas, às vezes meses — cultivando confiança, para depois solicitar dinheiro, dados bancários, fotos íntimas, cópias de documentos ou até que a vítima se torne "laranja" em outras fraudes.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            O que muita gente não percebe é que existe uma indústria estruturada por trás disso. Não são pessoas isoladas na maioria dos casos: são quadrilhas organizadas, com scripts prontos, tradutores automáticos, bancos de fotos roubadas e centenas de perfis operando ao mesmo tempo em plataformas diferentes. Por isso, o discurso costuma parecer tão convincente — foi refinado em milhares de vítimas anteriores.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-foreground font-medium leading-relaxed">
                <strong>Regra de ouro:</strong> se em algum momento a conversa levar a uma solicitação de dinheiro, transferência via PIX, código de verificação ou dado bancário — pare tudo. Não existe emergência real que justifique enviar dinheiro para alguém que você nunca viu pessoalmente.
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
              Os 8 tipos de golpe amoroso mais comuns em apps de namoro
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Nenhum golpe é exatamente igual ao outro, mas eles se organizam em padrões bem definidos. Reconhecer esses padrões é o primeiro escudo de qualquer usuário de app de relacionamento.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Golpe da militar americana / engenheiro no exterior
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                O perfil se apresenta como militar em missão, engenheiro em plataforma de petróleo, médico em ONG internacional ou executivo viajando. Sempre alguém que "não pode fazer videochamada" por causa do trabalho. Depois de semanas de conversa doce, surge uma "encomenda presa na alfândega" ou "taxa para retornar ao Brasil".
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Catfishing (identidade totalmente falsa)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A pessoa usa fotos roubadas de modelos, influenciadores ou perfis reais de terceiros. O objetivo pode ser financeiro, mas também emocional ou de coleta de dados. Uma busca reversa de imagem no Google Imagens ou no TinEye derruba a maioria em segundos.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">3</span>
                Sextortion (chantagem com nudes)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                O golpista cria clima, pede fotos íntimas e, no dia seguinte, ameaça enviar as imagens para todos os seus contatos caso você não pague. Já é considerado crime pela Lei 13.718/2018 no Brasil e pode ser denunciado à Polícia Civil.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">4</span>
                Golpe do investimento em criptomoedas ("pig butchering")
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Um dos que mais crescem. A "match" ideal, culta e bem-sucedida, comenta casualmente sobre lucros que teve numa "corretora exclusiva de cripto". Convida você a investir junto. A plataforma é falsa; o dinheiro vai direto para o golpista.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">5</span>
                Golpe do link malicioso / phishing
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                No meio do papo, ela manda um link "para conhecer melhor meu Instagram", "meu perfil verificado" ou "uma foto engraçada". O link instala malware, rouba credenciais ou clona seu WhatsApp.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">6</span>
                Golpe do encontro / boa noite Cinderela
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Diferente dos anteriores, esse é presencial. A pessoa marca em um bar, sumidamente sugere um lugar específico, e ali acontece o roubo — muitas vezes com uso de "goma", benzodiazepínico ou pressão de comparsas. Sempre marque encontros em locais públicos que <em>você</em> escolheu.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">7</span>
                Golpe do "premium falso" / assinatura fraudulenta
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                E-mail ou mensagem dentro do app oferecendo desconto especial em conta premium, "só hoje". O link leva a uma página clonada do Tinder, Bumble ou Hinge para roubar cartão de crédito. Assinaturas legítimas só existem dentro do app ou nas lojas oficiais (App Store, Google Play).
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">8</span>
                Golpe do "quero conhecer sua família" / conta laranja
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A pessoa constrói um relacionamento sério à distância e pede para receber uma "transferência internacional" na sua conta, prometendo dividir. Você acaba servindo de laranja para lavagem de dinheiro e responde criminalmente por isso.
              </p>
            </div>
          </div>
        </div>

        <ArticleAds.MidContent />

        {/* Middle image */}
        <div className="my-12">
          <img
            src={articleImageMiddle}
            alt="Mão protegendo smartphone com cadeado simbolizando segurança em apps de namoro"
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
            loading="lazy"
            width={1600}
            height={900}
          />
          <p className="text-center text-xs text-muted-foreground mt-2 italic">
            A segurança digital começa antes do primeiro match: proteger dados pessoais é proteger o coração.
          </p>
        </div>

        {/* Seção 3 - Red flags */}
        <div className="my-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Search className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              12 sinais de alerta (red flags) para identificar um golpe amoroso
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Nenhum sinal isolado prova que é golpe. Mas quando três ou mais aparecem juntos, a chance de estar diante de uma fraude passa de 90%. Anote mentalmente cada um deles antes de investir sentimento em qualquer match:
          </p>

          <div className="bg-card border border-border rounded-2xl p-6 mb-6">
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span><strong className="text-foreground">Perfil recém-criado</strong> com poucas fotos, todas muito profissionais ou parecendo catálogo de moda.</span></li>
              <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span><strong className="text-foreground">Bio genérica</strong> ou copiada de outros perfis (frases motivacionais, "amo viajar e comer bem").</span></li>
              <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span><strong className="text-foreground">Português com pequenos erros estranhos</strong> — mistura de tradução automática, uso de "você" seguido de conjugações erradas.</span></li>
              <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span><strong className="text-foreground">Pressa para sair do app</strong>: pede WhatsApp, Telegram ou e-mail nas primeiras mensagens.</span></li>
              <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span><strong className="text-foreground">Recusa videochamada</strong> com desculpas repetidas ("câmera quebrada", "internet ruim", "estou no trabalho").</span></li>
              <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span><strong className="text-foreground">Amor declarado rápido demais</strong> — em menos de duas semanas, ela já fala em "alma gêmea".</span></li>
              <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span><strong className="text-foreground">Está sempre fora do Brasil</strong> ou vive uma vida glamourosa incompatível com a idade/profissão.</span></li>
              <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span><strong className="text-foreground">Histórias trágicas</strong> nas primeiras conversas: viuvez recente, filho doente, herança bloqueada.</span></li>
              <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span><strong className="text-foreground">Perguntas sobre dinheiro</strong> disfarçadas de curiosidade ("você tem estabilidade financeira?", "trabalha com investimentos?").</span></li>
              <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span><strong className="text-foreground">Ausência de rastro digital</strong>: sem Instagram real, sem LinkedIn, sem menções antigas em redes sociais.</span></li>
              <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span><strong className="text-foreground">Envia links suspeitos</strong> ou pede código enviado por SMS.</span></li>
              <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span><strong className="text-foreground">Pressiona emocionalmente</strong> ("se você me amasse, ajudaria", "só você pode me salvar").</span></li>
            </ul>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Se você já se identificou com dois ou três desses pontos no seu match atual, é hora de esfriar a cabeça e aplicar o passo a passo de verificação da próxima seção antes de qualquer coisa. Vale também revisar o nosso guia sobre{" "}
            <Link to="/blog/posts/como-criar-conexoes-reais-em-apps/" className="text-primary font-semibold hover:underline">
              como criar conexões reais em aplicativos
            </Link>
            , que ajuda a diferenciar interesse verdadeiro de manipulação.
          </p>
        </div>

        {/* Seção 4 - Verificação */}
        <div className="my-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-xl">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Como verificar se um perfil é real: passo a passo prático
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Antes de compartilhar qualquer informação pessoal — endereço, local de trabalho, rotina, WhatsApp — aplique este checklist. Leva menos de 10 minutos e evita meses de dor de cabeça.
          </p>

          <div className="bg-card border border-border rounded-2xl p-6 mb-6">
            <ul className="space-y-3">
              {[
                'Faça busca reversa de imagem: salve as fotos do perfil e envie para o Google Imagens (images.google.com) ou TinEye. Se aparecerem em outros nomes, é fraude.',
                "Peça uma videochamada curta pelo próprio app antes de sair para o WhatsApp. Um pedido normal em 2026, ninguém deveria se ofender.",
                "Procure o nome dela nas redes: Instagram público, LinkedIn, Facebook. Verifique se o histórico de posts é antigo e coerente.",
                "Faça perguntas específicas que exijam contexto real ('qual estação de metrô mais perto do seu trabalho?'). Golpistas travam nesses detalhes.",
                'Peça uma foto "com o dedo no queixo agora" ou segurando um papel com a data. É desconfortável, mas resolve.',
                "Se algo cheirar mal, pesquise no Google 'nome + golpe' ou 'nome + fake'. Muitas vítimas anteriores relatam.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ArticleAds.LongContent />

        {/* Seção 5 - Proteção */}
        <div className="my-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Como proteger seus dados pessoais nos apps de namoro
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Boa parte da prevenção acontece antes de qualquer conversa, na forma como você configura o perfil e usa a plataforma. As orientações abaixo seguem as boas práticas recomendadas pelo{" "}
            <a href="https://cartilha.cert.br/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary font-semibold hover:underline">
              CERT.br
            </a>{" "}
            e pelas centrais de segurança do{" "}
            <a href="https://policies.tinder.com/safety/intl/pt-br/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary font-semibold hover:underline">
              Tinder
            </a>{" "}
            e do{" "}
            <a href="https://bumble.com/safety" target="_blank" rel="noopener noreferrer nofollow" className="text-primary font-semibold hover:underline">
              Bumble
            </a>.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Nunca reutilize senhas</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Use um gerenciador de senhas confiável (Bitwarden, 1Password, iCloud Keychain). Se a base do app vazar, sua conta bancária não vai junto.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Ative a autenticação em dois fatores (2FA)</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            No próprio app e, principalmente, no e-mail vinculado. Um app autenticador (Google Authenticator, Authy) é mais seguro do que SMS.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Use fotos exclusivas para o app</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Fotos que também estão no seu Instagram público permitem que golpistas descubram sua identidade, familiares e endereço rapidamente. Reserve algumas imagens só para os apps de namoro.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Não mostre nada geográfico sensível</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Evite fotos com placa de rua visível, fachada do prédio, uniforme da empresa ou etiqueta com endereço. Parece paranoia, mas é o que mais entrega vítimas.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5. Considere uma VPN em redes públicas</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Se você usa o app em Wi-Fi de café, aeroporto ou coworking, uma VPN de reputação séria criptografa o tráfego e evita interceptação. Não é obrigatório, mas é uma camada extra bem-vinda.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6. Mantenha o app e o sistema atualizados</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Atualizações corrigem vulnerabilidades. Aparelhos com Android/iOS desatualizados são alvos fáceis de malware distribuído via links de conversa.
          </p>
        </div>

        <ArticleAds.LongContent />

        {/* Seção 6 - O que fazer se cair */}
        <div className="my-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Ban className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              O que fazer se você caiu num golpe amoroso
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Se você já enviou dinheiro, compartilhou dados bancários ou fotos íntimas — respira. Vergonha é a arma que os golpistas contam pra você não denunciar. Quanto mais rápido você agir, maiores as chances de bloquear prejuízo e responsabilizar o criminoso.
          </p>

          <div className="bg-card border border-border rounded-2xl p-6 mb-6">
            <ol className="space-y-3">
              {[
                "Interrompa qualquer contato imediatamente — não avise que descobriu, não peça o dinheiro de volta, só bloqueie.",
                "Se transferiu via PIX, entre em contato com o banco em até 80 dias para acionar o Mecanismo Especial de Devolução (MED).",
                "Registre boletim de ocorrência online no site da Polícia Civil do seu estado — categoria: 'estelionato' ou 'fraude eletrônica'.",
                "Denuncie o perfil dentro do próprio app (todos têm essa opção no menu do usuário).",
                "Faça captura de tela de toda a conversa, do perfil e das transações antes de bloquear.",
                'Denuncie ao SaferNet (safernet.org.br), à Polícia Federal (gov.br/pf) e, em caso de nudes vazados, ao "Nudes Fora do Ar" da Meta.',
                "Se dados bancários vazaram, cancele cartões, troque senhas e monitore o CPF via Serasa e SPC pelos próximos 90 dias.",
                "Considere procurar apoio psicológico. O trauma emocional de um golpe amoroso é real e reconhecido pela OMS.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-6">
            <p className="text-foreground leading-relaxed">
              Você pode reportar fraudes diretamente ao{" "}
              <a href="https://www.gov.br/mj/pt-br" target="_blank" rel="noopener noreferrer nofollow" className="text-primary font-semibold hover:underline">
                Ministério da Justiça e Segurança Pública
              </a>{" "}
              e consultar a{" "}
              <a href="https://cartilha.cert.br/golpes/" target="_blank" rel="noopener noreferrer nofollow" className="text-primary font-semibold hover:underline">
                cartilha oficial do CERT.br sobre golpes
              </a>{" "}
              para orientações atualizadas.
            </p>
          </div>
        </div>

        {/* Seção 7 - Comparativo tabela */}
        <div className="my-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Quais apps oferecem mais recursos de segurança?
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Nenhum app é imune, mas alguns investiram bem mais em verificação e moderação nos últimos anos. Confira o comparativo:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-border rounded-lg">
              <thead className="bg-primary/5">
                <tr>
                  <th className="border border-border px-4 py-3 text-left text-foreground">App</th>
                  <th className="border border-border px-4 py-3 text-left text-foreground">Verificação por selfie</th>
                  <th className="border border-border px-4 py-3 text-left text-foreground">Moderação por IA</th>
                  <th className="border border-border px-4 py-3 text-left text-foreground">Botão de pânico</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr><td className="border border-border px-4 py-3">Tinder</td><td className="border border-border px-4 py-3">Sim</td><td className="border border-border px-4 py-3">Sim</td><td className="border border-border px-4 py-3">Sim (via Noonlight)</td></tr>
                <tr className="bg-muted/30"><td className="border border-border px-4 py-3">Bumble</td><td className="border border-border px-4 py-3">Sim</td><td className="border border-border px-4 py-3">Sim (Deception Detector)</td><td className="border border-border px-4 py-3">Não</td></tr>
                <tr><td className="border border-border px-4 py-3">Hinge</td><td className="border border-border px-4 py-3">Sim</td><td className="border border-border px-4 py-3">Parcial</td><td className="border border-border px-4 py-3">Não</td></tr>
                <tr className="bg-muted/30"><td className="border border-border px-4 py-3">Happn</td><td className="border border-border px-4 py-3">Parcial</td><td className="border border-border px-4 py-3">Parcial</td><td className="border border-border px-4 py-3">Não</td></tr>
                <tr><td className="border border-border px-4 py-3">Badoo</td><td className="border border-border px-4 py-3">Sim</td><td className="border border-border px-4 py-3">Sim</td><td className="border border-border px-4 py-3">Não</td></tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Ative a verificação por selfie sempre que disponível — o selo azul ao lado do nome espanta 80% dos golpistas, porque eles simplesmente não conseguem replicar. Se quiser um panorama completo dos apps, dá uma olhada no nosso{" "}
            <Link to="/apps-de-namoro/" className="text-primary font-semibold hover:underline">
              catálogo de apps de namoro
            </Link>{" "}
            com reviews detalhados.
          </p>
        </div>

        {/* Seção 8 - Checklist */}
        <div className="my-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Checklist rápido: 10 hábitos que blindam você contra golpes
            </h2>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 mb-6">
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />Nunca envie dinheiro para alguém que você não viu ao vivo.</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />Faça videochamada antes de sair do app.</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />Use fotos exclusivas nos apps de namoro.</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />Ative 2FA em e-mail, banco e no próprio app.</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />Nunca clique em links enviados durante conversa.</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />Marque o primeiro encontro em local público, escolhido por você.</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />Avise um amigo com localização em tempo real.</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />Desconfie de declarações de amor rápidas demais.</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />Não compartilhe endereço, CPF, RG ou selfie com documento.</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />Confie no seu instinto. Se algo parece bom demais, provavelmente é.</li>
            </ul>
          </div>
        </div>

        <ArticleAds.LongerContent />

        {/* Seção 9 - Erros comuns */}
        <div className="my-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-xl">
              <AlertTriangle className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Erros comuns que expõem quem quer se proteger
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Muita gente acha que segue todas as regras e, mesmo assim, cai. Quase sempre é por um destes cinco erros silenciosos:
          </p>

          <ul className="space-y-3 text-muted-foreground mb-6">
            <li><strong className="text-foreground">1. Confundir "quero acreditar" com "acredito por evidência".</strong> Solidão é combustível de golpe amoroso.</li>
            <li><strong className="text-foreground">2. Ignorar red flags porque a conversa é gostosa.</strong> Química não anula critério.</li>
            <li><strong className="text-foreground">3. Contar a vida toda antes de a pessoa contar a dela.</strong> Golpistas coletam dados; você não precisa entregar.</li>
            <li><strong className="text-foreground">4. Achar que "só acontece com bobos".</strong> As vítimas mais frequentes são pessoas cultas, com renda média-alta e alta empatia.</li>
            <li><strong className="text-foreground">5. Ter vergonha de perguntar.</strong> Se ficou em dúvida, mostre para alguém de confiança antes de agir.</li>
          </ul>
        </div>

        {/* Conclusão */}
        <div className="my-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Conclusão: continue buscando o amor, mas com o olhar aberto
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Ler sobre golpes amorosos não deveria te fazer desistir dos apps de namoro. Milhões de brasileiros encontram parceiros reais todos os anos por essas plataformas. O ponto é entrar de olho aberto: reconhecer padrões, verificar antes de confiar, proteger dados e proteger o próprio coração.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Fraude amorosa não é falha do usuário — é crime cometido por gente treinada. Mas informação transforma alvo em pessoa preparada. Compartilhe este guia com amigos e familiares que usam apps: cada pessoa a mais que aprende a identificar um golpe é uma vítima a menos.
          </p>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 mb-6">
            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-foreground leading-relaxed">
                Quer conhecer os apps mais seguros e com melhor moderação em 2026?{" "}
                <Link to="/apps-de-namoro/" className="text-primary font-semibold hover:underline">
                  Ver Apps de Namoro
                </Link>
                {" "}— comparamos verificação, moderação, política de privacidade e experiência de usuário em cada um deles.
              </p>
            </div>
          </div>
        </div>

        <ArticleAds.BeforeEnd />

        {/* FAQ */}
        <div className="my-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-xl">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Perguntas frequentes sobre golpes em apps de namoro
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1" className="border border-border rounded-xl mb-3 px-4">
              <AccordionTrigger className="text-foreground font-semibold text-left">
                É seguro usar apps de namoro como Tinder e Bumble em 2026?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Sim, desde que você siga boas práticas: ativar verificação por selfie, não compartilhar dados sensíveis, marcar encontros em locais públicos e desconfiar de pedidos financeiros. Os apps investem cada vez mais em IA de moderação, mas nenhuma plataforma substitui a atenção do usuário.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border border-border rounded-xl mb-3 px-4">
              <AccordionTrigger className="text-foreground font-semibold text-left">
                Como saber se o perfil está usando fotos falsas?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Salve as fotos e envie para o Google Imagens (images.google.com) ou TinEye. Se aparecerem em outros perfis, sites de modelo ou notícias, é catfishing. Perfis com selo de verificação por selfie são muito mais confiáveis.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border border-border rounded-xl mb-3 px-4">
              <AccordionTrigger className="text-foreground font-semibold text-left">
                Enviei dinheiro por PIX para alguém que era golpe. Posso recuperar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Em muitos casos sim. O Banco Central criou o Mecanismo Especial de Devolução (MED) do PIX, que pode ser acionado via seu banco em até 80 dias após a transação, caso seja comprovada fraude. Registre boletim de ocorrência e apresente comprovantes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="border border-border rounded-xl mb-3 px-4">
              <AccordionTrigger className="text-foreground font-semibold text-left">
                Enviei fotos íntimas e agora estão me chantageando (sextortion). O que fazer?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Nunca pague. Pagamento não resolve — só aumenta a pressão. Interrompa o contato, faça capturas de tela, denuncie no SaferNet (safernet.org.br) e na Polícia Civil. O crime é enquadrado como extorsão (art. 158 do Código Penal) e divulgação sem consentimento (Lei 13.718/2018).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="border border-border rounded-xl mb-3 px-4">
              <AccordionTrigger className="text-foreground font-semibold text-left">
                Vale a pena assinar o plano premium por causa da segurança?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                As versões premium do Tinder, Bumble e Hinge oferecem recursos extras de filtragem e verificação, mas os principais recursos de segurança (denúncia, bloqueio, verificação por selfie) estão disponíveis também na versão gratuita. O premium ajuda mais em performance de matches do que em segurança direta.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6" className="border border-border rounded-xl mb-3 px-4">
              <AccordionTrigger className="text-foreground font-semibold text-left">
                Golpistas em apps de namoro usam inteligência artificial?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Cada vez mais. Existem quadrilhas usando IA generativa para produzir fotos falsas realistas (deepfake) e chatbots para automatizar conversas em vários idiomas. Por isso, a videochamada ao vivo continua sendo a melhor prova de identidade — deepfakes em tempo real ainda apresentam falhas visíveis.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-7" className="border border-border rounded-xl mb-3 px-4">
              <AccordionTrigger className="text-foreground font-semibold text-left">
                Devo usar VPN em apps de namoro?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Recomendado em redes Wi-Fi públicas (aeroporto, café, hotel). Escolha uma VPN de reputação sólida, com política real de não-log. Em rede doméstica com senha forte, o benefício é menor.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-8" className="border border-border rounded-xl mb-3 px-4">
              <AccordionTrigger className="text-foreground font-semibold text-left">
                Onde posso denunciar oficialmente um golpe amoroso no Brasil?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Boletim de ocorrência online na Polícia Civil do seu estado, Polícia Federal (gov.br/pf) para crimes com atuação internacional, SaferNet Brasil (safernet.org.br) para crimes digitais em geral, e o próprio canal de denúncia dentro do app envolvido.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Artigos recomendados */}
        <div className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Artigos recomendados</h2>
          <ul className="space-y-2">
            <li><Link to="/blog/posts/como-criar-conexoes-reais-em-apps/" className="text-primary hover:underline">Como Criar Conexões Reais em Aplicativos de Relacionamento</Link></li>
            <li><Link to="/blog/posts/melhores-apps-relacionamento-2026/" className="text-primary hover:underline">Os Melhores Apps de Relacionamento para Cada Perfil em 2026</Link></li>
            <li><Link to="/blog/posts/os-segredos-de-um-perfil-conquistador/" className="text-primary hover:underline">Os Segredos de um Perfil Conquistador nas Redes Sociais</Link></li>
            <li><Link to="/blog/posts/sinais-interesse-feminino/" className="text-primary hover:underline">Como Entender os Sinais Não Verbais de Interesse Feminino</Link></li>
          </ul>
        </div>
      </div>

      <ArticleShareButtons url={ARTICLE_URL} title={TITLE} />

      <ArticleAuthorBio
        name="Daniel Olimpio"
        role="Especialista em Relacionamentos e Segurança Digital"
        image={authorImage}
        bio="Especialista em comunicação interpessoal e segurança em plataformas de relacionamento. Com mais de 8 anos ajudando homens brasileiros a navegarem apps de namoro com autenticidade e segurança."
      />

      <RelatedArticles
        currentArticleLink="/blog/posts/golpes-amorosos-em-apps-de-namoro-como-se-proteger"
        category="aplicativos"
      />
    </BlogArticleLayout>
  );
};

export default GolpesAmorososEmAppsDeNamoro;

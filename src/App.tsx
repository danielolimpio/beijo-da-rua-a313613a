import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import CookieConsent from "@/components/CookieConsent";

// Eagerly load Index for fastest first paint
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load all other pages for better INP and smaller initial bundle
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const FAQ = lazy(() => import("./pages/FAQ"));
const DatingApps = lazy(() => import("./pages/DatingApps"));
const Bumble = lazy(() => import("./pages/apps/Bumble"));
const Tinder = lazy(() => import("./pages/apps/Tinder"));
const Happn = lazy(() => import("./pages/apps/Happn"));
const OkCupid = lazy(() => import("./pages/apps/OkCupid"));
const Badoo = lazy(() => import("./pages/apps/Badoo"));
const Hinge = lazy(() => import("./pages/apps/Hinge"));
const POF = lazy(() => import("./pages/apps/POF"));
const FacebookDating = lazy(() => import("./pages/apps/FacebookDating"));
const Skout = lazy(() => import("./pages/apps/Skout"));
const MeetMe = lazy(() => import("./pages/apps/MeetMe"));
const Eharmony = lazy(() => import("./pages/apps/Eharmony"));
const Dating = lazy(() => import("./pages/apps/Dating"));
const Match = lazy(() => import("./pages/apps/Match"));
const Jaumo = lazy(() => import("./pages/apps/Jaumo"));
const Umatch = lazy(() => import("./pages/apps/Umatch"));
const AshleyMadison = lazy(() => import("./pages/apps/AshleyMadison"));
const BrazilCupid = lazy(() => import("./pages/apps/BrazilCupid"));
const InnerCircle = lazy(() => import("./pages/apps/InnerCircle"));
const Lauradate = lazy(() => import("./pages/apps/Lauradate"));
const Feeld = lazy(() => import("./pages/apps/Feeld"));
const Boo = lazy(() => import("./pages/apps/Boo"));
const DateMyAge = lazy(() => import("./pages/apps/DateMyAge"));
const Once = lazy(() => import("./pages/apps/Once"));
const EliteSingles = lazy(() => import("./pages/apps/EliteSingles"));
const Nomadtable = lazy(() => import("./pages/apps/Nomadtable"));
const BatePapoGratis = lazy(() => import("./pages/apps/BatePapoGratis"));
const Dicas = lazy(() => import("./pages/Dicas"));
const Blog = lazy(() => import("./pages/Blog"));
const AutoestimaCategory = lazy(() => import("./pages/blog/categories/Autoestima"));
const RelacionamentoCategory = lazy(() => import("./pages/blog/categories/Relacionamento"));
const PaqueraCategory = lazy(() => import("./pages/blog/categories/Paquera"));
const AplicativosCategory = lazy(() => import("./pages/blog/categories/Aplicativos"));
const ConquistaCategory = lazy(() => import("./pages/blog/categories/Conquista"));
const ComoAbordarUmaMulherComConfianca = lazy(() => import("./pages/blog/posts/ComoAbordarUmaMulherComConfianca"));
const OsSegredosDeUmPerfilConquistador = lazy(() => import("./pages/blog/posts/OsSegredosDeUmPerfilConquistador"));
const CantadasIrresistiveisQueFuncionam = lazy(() => import("./pages/blog/posts/CantadasIrresistiveisQueFuncionam"));
const DescubraQualSiteRelacionamentoCombina = lazy(() => import("./pages/blog/posts/DescubraQualSiteRelacionamentoCombina"));
const ComoConvidarMulherSairSemParecerDesesperado = lazy(() => import("./pages/blog/posts/ComoConvidarMulherSairSemParecerDesesperado"));
const TecnicasControlarNervosismoPaquera = lazy(() => import("./pages/blog/posts/TecnicasControlarNervosismoPaquera"));
const FrasesDeEfeitoQueDeixamMulherInteressada = lazy(() => import("./pages/blog/posts/FrasesDeEfeitoQueDeixamMulherInteressada"));
const ComoCriarConexoesReaisEmApps = lazy(() => import("./pages/blog/posts/ComoCriarConexoesReaisEmApps"));
const ErrosFataisQueDestroemSeuCharme = lazy(() => import("./pages/blog/posts/ErrosFataisQueDestroemSeuCharme"));
const LinguagemCorporalPoderosa = lazy(() => import("./pages/blog/posts/LinguagemCorporalPoderosa"));
const EstrategiasPrimeiroEncontro = lazy(() => import("./pages/blog/posts/EstrategiasPrimeiroEncontro"));
const ComoSerAutenticoEAtraente = lazy(() => import("./pages/blog/posts/ComoSerAutenticoEAtraente"));
const OPoderDoSilencio = lazy(() => import("./pages/blog/posts/OPoderDoSilencio"));
const DomineEmocoesAtraia = lazy(() => import("./pages/blog/posts/DomineEmocoesAtraia"));
const VibeConquistaSemPalavra = lazy(() => import("./pages/blog/posts/VibeConquistaSemPalavra"));
const MelhoresApps2026 = lazy(() => import("./pages/blog/posts/MelhoresApps2026"));
const SinaisInteresseFeminino = lazy(() => import("./pages/blog/posts/SinaisInteresseFeminino"));
const EscutarNovaFormaConquistar = lazy(() => import("./pages/blog/posts/EscutarNovaFormaConquistar"));
const MedoCoragemConquistar = lazy(() => import("./pages/blog/posts/MedoCoragemConquistar"));
const DespertarInteresseSemDizerNada = lazy(() => import("./pages/blog/posts/DespertarInteresseSemDizerNada"));
const ArteManterConversaLeve = lazy(() => import("./pages/blog/posts/ArteManterConversaLeve"));
const HumorInteligente = lazy(() => import("./pages/blog/posts/HumorInteligente"));
const ReconhecerDisponibilidadeEmocional = lazy(() => import("./pages/blog/posts/ReconhecerDisponibilidadeEmocional"));
const CriarExpectativaSemParecerJogador = lazy(() => import("./pages/blog/posts/CriarExpectativaSemParecerJogador"));
const ComoTransformarAmizadeEmRomance = lazy(() => import("./pages/blog/posts/ComoTransformarAmizadeEmRomance"));
const GolpesAmorososEmAppsDeNamoro = lazy(() => import("./pages/blog/posts/GolpesAmorososEmAppsDeNamoro"));
const InteligenciaArtificialNoNamoro = lazy(() => import("./pages/blog/posts/InteligenciaArtificialNoNamoro"));
const Quiz = lazy(() => import("./pages/Quiz"));
const QuizPage1 = lazy(() => import("./pages/quiz/QuizPage1"));
const QuizPage2 = lazy(() => import("./pages/quiz/QuizPage2"));
const QuizPage3 = lazy(() => import("./pages/quiz/QuizPage3"));
const QuizPage4 = lazy(() => import("./pages/quiz/QuizPage4"));
const QuizPage5 = lazy(() => import("./pages/quiz/QuizPage5"));
const InteriorQuiz1 = lazy(() => import("./pages/quiz/InteriorQuiz1"));
const InteriorQuiz2 = lazy(() => import("./pages/quiz/InteriorQuiz2"));
const InteriorQuiz3 = lazy(() => import("./pages/quiz/InteriorQuiz3"));
const InteriorQuiz4 = lazy(() => import("./pages/quiz/InteriorQuiz4"));
const InteriorQuiz5 = lazy(() => import("./pages/quiz/InteriorQuiz5"));
const InteriorQuizResultado = lazy(() => import("./pages/quiz/InteriorQuizResultado"));
const OQueTeFazSorrir = lazy(() => import("./pages/quiz/OQueTeFazSorrir"));
const QualSeuEstiloDeNamoro = lazy(() => import("./pages/quiz/QualSeuEstiloDeNamoro"));
const VoceEMaisSerioOuDescontraido = lazy(() => import("./pages/quiz/VoceEMaisSerioOuDescontraido"));
const OndeVoceQuerChegar = lazy(() => import("./pages/quiz/OndeVoceQuerChegar"));
const OQueNuncaFaltaNoSeuDia = lazy(() => import("./pages/quiz/OQueNuncaFaltaNoSeuDia"));
const ComoIniciarConversasApps = lazy(() => import("./pages/quiz/ComoIniciarConversasApps"));
const QualTipoFotoPerfilFunciona = lazy(() => import("./pages/quiz/QualTipoFotoPerfilFunciona"));
const QuantoTempoDedicarApps = lazy(() => import("./pages/quiz/QuantoTempoDedicarApps"));
const ResultadoAppIdeal = lazy(() => import("./pages/quiz/ResultadoAppIdeal"));
const ComoHomensTimidosUsarApps = lazy(() => import("./pages/quiz/ComoHomensTimidosUsarApps"));
const MelhorHorarioUsarApps = lazy(() => import("./pages/quiz/MelhorHorarioUsarApps"));
const FrequenciaIdealUsarApps = lazy(() => import("./pages/quiz/FrequenciaIdealUsarApps"));
const TipoMensagemEnviarPrimeiro = lazy(() => import("./pages/quiz/TipoMensagemEnviarPrimeiro"));
const AppIdealHomensTimidos = lazy(() => import("./pages/quiz/AppIdealHomensTimidos"));
const ComoSaberSeElaTemInteresse = lazy(() => import("./pages/quiz/ComoSaberSeElaTemInteresse"));
const TempoRespostaMulherInteressada = lazy(() => import("./pages/quiz/TempoRespostaMulherInteressada"));
const PerguntasPessoaisInteresseGenuino = lazy(() => import("./pages/quiz/PerguntasPessoaisInteresseGenuino"));
const MulherAceitaMarcarEncontro = lazy(() => import("./pages/quiz/MulherAceitaMarcarEncontro"));
const EmojisMensagensIniciativaMulher = lazy(() => import("./pages/quiz/EmojisMensagensIniciativaMulher"));
const PoliticaPrivacidade = lazy(() => import("./pages/PoliticaPrivacidade"));
const TermosUso = lazy(() => import("./pages/TermosUso"));
const PoliticaCookies = lazy(() => import("./pages/PoliticaCookies"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const ComoFunciona = lazy(() => import("./pages/ComoFunciona"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToTopButton />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/sobre-nos" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/apps-de-namoro" element={<DatingApps />} />
            <Route path="/apps/bumble" element={<Bumble />} />
            <Route path="/apps/tinder" element={<Tinder />} />
            <Route path="/apps/happn" element={<Happn />} />
            <Route path="/apps/okcupid" element={<OkCupid />} />
            <Route path="/apps/badoo" element={<Badoo />} />
            <Route path="/apps/hinge" element={<Hinge />} />
            <Route path="/apps/pof" element={<POF />} />
            <Route path="/apps/facebook-dating" element={<FacebookDating />} />
            <Route path="/apps/skout" element={<Skout />} />
            <Route path="/apps/meetme" element={<MeetMe />} />
            <Route path="/apps/eharmony" element={<Eharmony />} />
            <Route path="/apps/dating" element={<Dating />} />
            <Route path="/apps/match" element={<Match />} />
            <Route path="/apps/jaumo" element={<Jaumo />} />
            <Route path="/apps/umatch" element={<Umatch />} />
            <Route path="/apps/ashley-madison" element={<AshleyMadison />} />
            <Route path="/apps/brazilcupid" element={<BrazilCupid />} />
            <Route path="/apps/inner-circle" element={<InnerCircle />} />
            <Route path="/apps/lauradate" element={<Lauradate />} />
            <Route path="/apps/feeld" element={<Feeld />} />
            <Route path="/apps/boo" element={<Boo />} />
            <Route path="/apps/datemyage" element={<DateMyAge />} />
            <Route path="/apps/once" element={<Once />} />
            <Route path="/apps/elitesingles" element={<EliteSingles />} />
            <Route path="/apps/nomadtable" element={<Nomadtable />} />
            <Route path="/apps/batepapogratis" element={<BatePapoGratis />} />
            <Route path="/apps/bate-papo-gratis" element={<BatePapoGratis />} />
            <Route path="/dicas" element={<Dicas />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/conquista" element={<ConquistaCategory />} />
            <Route path="/blog/relacionamento" element={<RelacionamentoCategory />} />
            <Route path="/blog/paquera" element={<PaqueraCategory />} />
            <Route path="/blog/aplicativos" element={<AplicativosCategory />} />
            <Route path="/blog/autoestima" element={<AutoestimaCategory />} />
            {/* Blog posts - rotas com /posts/ */}
            <Route path="/blog/posts/como-abordar-uma-mulher-com-confianca" element={<ComoAbordarUmaMulherComConfianca />} />
            <Route path="/blog/posts/os-segredos-de-um-perfil-conquistador" element={<OsSegredosDeUmPerfilConquistador />} />
            <Route path="/blog/posts/cantadas-irresistiveis-que-funcionam" element={<CantadasIrresistiveisQueFuncionam />} />
            <Route path="/blog/posts/descubra-qual-site-relacionamento-combina" element={<DescubraQualSiteRelacionamentoCombina />} />
            <Route path="/blog/posts/como-convidar-mulher-sair-sem-parecer-desesperado" element={<ComoConvidarMulherSairSemParecerDesesperado />} />
            <Route path="/blog/posts/tecnicas-controlar-nervosismo-paquera" element={<TecnicasControlarNervosismoPaquera />} />
            <Route path="/blog/posts/frases-de-efeito-que-deixam-mulher-interessada" element={<FrasesDeEfeitoQueDeixamMulherInteressada />} />
            <Route path="/blog/posts/como-criar-conexoes-reais-em-apps" element={<ComoCriarConexoesReaisEmApps />} />
            <Route path="/blog/posts/erros-fatais-que-destroem-seu-charme" element={<ErrosFataisQueDestroemSeuCharme />} />
            <Route path="/blog/posts/linguagem-corporal-poderosa-na-hora-de-conquistar" element={<LinguagemCorporalPoderosa />} />
            <Route path="/blog/posts/estrategias-primeiro-encontro" element={<EstrategiasPrimeiroEncontro />} />
            <Route path="/blog/posts/como-ser-autentico-e-atraente-ao-mesmo-tempo" element={<ComoSerAutenticoEAtraente />} />
            <Route path="/blog/posts/o-poder-do-silencio" element={<OPoderDoSilencio />} />
            <Route path="/blog/posts/domine-suas-emocoes-e-atraia" element={<DomineEmocoesAtraia />} />
            <Route path="/blog/posts/vibe-conquista-sem-dizer-palavra" element={<VibeConquistaSemPalavra />} />
            <Route path="/blog/posts/melhores-apps-relacionamento-2026" element={<MelhoresApps2026 />} />
            <Route path="/blog/posts/sinais-interesse-feminino" element={<SinaisInteresseFeminino />} />
            <Route path="/blog/posts/escutar-nova-forma-conquistar" element={<EscutarNovaFormaConquistar />} />
            <Route path="/blog/posts/medo-coragem-conquistar-respeito" element={<MedoCoragemConquistar />} />
            <Route path="/blog/posts/despertar-interesse-sem-dizer-nada" element={<DespertarInteresseSemDizerNada />} />
            <Route path="/blog/posts/arte-manter-conversa-leve-envolver" element={<ArteManterConversaLeve />} />
            <Route path="/blog/posts/humor-inteligente-conquista-mais-que-beleza" element={<HumorInteligente />} />
            <Route path="/blog/posts/como-reconhecer-se-ela-esta-disponivel-emocionalmente" element={<ReconhecerDisponibilidadeEmocional />} />
            <Route path="/blog/posts/criar-expectativa-sem-parecer-jogador" element={<CriarExpectativaSemParecerJogador />} />
            <Route path="/blog/posts/como-transformar-amizade-em-romance-com-respeito" element={<ComoTransformarAmizadeEmRomance />} />
            <Route path="/blog/como-transformar-amizade-em-romance-com-respeito" element={<ComoTransformarAmizadeEmRomance />} />
            <Route path="/como-transformar-amizade-em-romance" element={<ComoTransformarAmizadeEmRomance />} />
            <Route path="/blog/posts/golpes-amorosos-em-apps-de-namoro-como-se-proteger" element={<GolpesAmorososEmAppsDeNamoro />} />
            <Route path="/blog/golpes-amorosos-em-apps-de-namoro-como-se-proteger" element={<GolpesAmorososEmAppsDeNamoro />} />
            <Route path="/blog/posts/inteligencia-artificial-no-namoro-apps" element={<InteligenciaArtificialNoNamoro />} />
            <Route path="/blog/inteligencia-artificial-no-namoro-apps" element={<InteligenciaArtificialNoNamoro />} />
            {/* Blog posts - rotas alternativas SEM /posts/ para compatibilidade com URLs externas */}
            <Route path="/blog/cantadas-irresistiveis-que-funcionam" element={<CantadasIrresistiveisQueFuncionam />} />
            <Route path="/blog/como-abordar-uma-mulher-com-confianca" element={<ComoAbordarUmaMulherComConfianca />} />
            <Route path="/blog/os-segredos-de-um-perfil-conquistador" element={<OsSegredosDeUmPerfilConquistador />} />
            <Route path="/blog/como-convidar-mulher-sair-sem-parecer-desesperado" element={<ComoConvidarMulherSairSemParecerDesesperado />} />
            <Route path="/blog/tecnicas-controlar-nervosismo-paquera" element={<TecnicasControlarNervosismoPaquera />} />
            <Route path="/blog/frases-de-efeito-que-deixam-mulher-interessada" element={<FrasesDeEfeitoQueDeixamMulherInteressada />} />
            <Route path="/blog/como-criar-conexoes-reais-em-apps" element={<ComoCriarConexoesReaisEmApps />} />
            <Route path="/blog/erros-fatais-que-destroem-seu-charme" element={<ErrosFataisQueDestroemSeuCharme />} />
            <Route path="/blog/descubra-qual-site-relacionamento-combina" element={<DescubraQualSiteRelacionamentoCombina />} />
            <Route path="/blog/linguagem-corporal-poderosa-na-hora-de-conquistar" element={<LinguagemCorporalPoderosa />} />
            <Route path="/blog/estrategias-primeiro-encontro" element={<EstrategiasPrimeiroEncontro />} />
            <Route path="/blog/como-ser-autentico-e-atraente-ao-mesmo-tempo" element={<ComoSerAutenticoEAtraente />} />
            <Route path="/blog/o-poder-do-silencio" element={<OPoderDoSilencio />} />
            <Route path="/blog/domine-suas-emocoes-e-atraia" element={<DomineEmocoesAtraia />} />
            <Route path="/blog/vibe-conquista-sem-dizer-palavra" element={<VibeConquistaSemPalavra />} />
            <Route path="/blog/melhores-apps-relacionamento-2026" element={<MelhoresApps2026 />} />
            <Route path="/blog/sinais-interesse-feminino" element={<SinaisInteresseFeminino />} />
            <Route path="/blog/escutar-nova-forma-conquistar" element={<EscutarNovaFormaConquistar />} />
            <Route path="/blog/medo-coragem-conquistar-respeito" element={<MedoCoragemConquistar />} />
            <Route path="/blog/despertar-interesse-sem-dizer-nada" element={<DespertarInteresseSemDizerNada />} />
            <Route path="/blog/arte-manter-conversa-leve-envolver" element={<ArteManterConversaLeve />} />
            <Route path="/blog/humor-inteligente-conquista-mais-que-beleza" element={<HumorInteligente />} />
            <Route path="/blog/como-reconhecer-se-ela-esta-disponivel-emocionalmente" element={<ReconhecerDisponibilidadeEmocional />} />
            <Route path="/blog/criar-expectativa-sem-parecer-jogador" element={<CriarExpectativaSemParecerJogador />} />
            <Route path="/criar-expectativa-sem-parecer-jogador" element={<CriarExpectativaSemParecerJogador />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/qual-objetivo-ideal-para-usar-app-de-namoro-homem-brasil" element={<QuizPage1 />} />
            <Route path="/como-homens-timidos-podem-usar-apps-de-namoro-com-sucesso" element={<ComoHomensTimidosUsarApps />} />
            <Route path="/melhor-horario-usar-apps-namoro" element={<MelhorHorarioUsarApps />} />
            <Route path="/frequencia-ideal-usar-apps" element={<FrequenciaIdealUsarApps />} />
            <Route path="/tipo-mensagem-enviar-primeiro" element={<TipoMensagemEnviarPrimeiro />} />
            <Route path="/app-ideal-homens-timidos" element={<AppIdealHomensTimidos />} />
            <Route path="/quantos-encontros-por-mes-e-ideal-para-homens-em-apps-namoro" element={<QuizPage3 />} />
            <Route path="/melhores-apps-de-namoro-para-homens-apos-os-35-anos-brasil" element={<QuizPage4 />} />
            <Route path="/apps-de-namoro-para-homens-no-interior-do-brasil-vale-a-pena" element={<InteriorQuiz1 />} />
            <Route path="/como-saber-se-mulher-tem-interesse-real-em-voce-apps-namoro-homem-brasil" element={<ComoSaberSeElaTemInteresse />} />
            <Route path="/tempo-resposta-mensagens-mulher-interessada-apps-namoro-homem" element={<TempoRespostaMulherInteressada />} />
            <Route path="/perguntas-pessoais-mulher-interesse-genuino-conversa-apps-namoro" element={<PerguntasPessoaisInteresseGenuino />} />
            <Route path="/mulher-aceita-marcar-encontro-rapido-app-namoro-sinal-interesse" element={<MulherAceitaMarcarEncontro />} />
            <Route path="/emojis-mensagens-longas-iniciativa-mulher-interessada-apps-namoro" element={<EmojisMensagensIniciativaMulher />} />
            <Route path="/experiencia-com-apps-de-namoro-cidades-interior" element={<InteriorQuiz2 />} />
            <Route path="/mobilidade-para-encontros-apps-namoro-interior" element={<InteriorQuiz3 />} />
            <Route path="/objetivo-relacionamento-apps-namoro-interior" element={<InteriorQuiz4 />} />
            <Route path="/estilo-de-vida-apps-de-namoro-interior" element={<InteriorQuiz5 />} />
            {/* Rotas legadas para compatibilidade */}
            <Route path="/interior-quiz-2" element={<InteriorQuiz2 />} />
            <Route path="/interior-quiz-3" element={<InteriorQuiz3 />} />
            <Route path="/interior-quiz-4" element={<InteriorQuiz4 />} />
            <Route path="/interior-quiz-5" element={<InteriorQuiz5 />} />
            <Route path="/interior-quiz-resultado" element={<InteriorQuizResultado />} />
            <Route path="/o-que-te-faz-sorrir" element={<OQueTeFazSorrir />} />
            <Route path="/qual-seu-estilo-de-namoro" element={<QualSeuEstiloDeNamoro />} />
            <Route path="/voce-e-mais-serio-ou-descontraido" element={<VoceEMaisSerioOuDescontraido />} />
            <Route path="/onde-voce-quer-chegar-no-relacionamento" element={<OndeVoceQuerChegar />} />
            <Route path="/o-que-nunca-falta-no-seu-dia" element={<OQueNuncaFaltaNoSeuDia />} />
            <Route path="/como-iniciar-conversas-apps-namoro-que-geram-respostas" element={<ComoIniciarConversasApps />} />
            <Route path="/qual-tipo-foto-perfil-funciona-melhor-apps-namoro-homem" element={<QualTipoFotoPerfilFunciona />} />
            <Route path="/quanto-tempo-dedicar-apps-namoro-por-dia-homem" element={<QuantoTempoDedicarApps />} />
            <Route path="/seu-app-de-namoro-ideal-resultado" element={<ResultadoAppIdeal />} />
            <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/termos-de-uso" element={<TermosUso />} />
            <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
            <Route path="/sitemap" element={<Sitemap />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

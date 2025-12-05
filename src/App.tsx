import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import DatingApps from "./pages/DatingApps";
import Bumble from "./pages/apps/Bumble";
import Tinder from "./pages/apps/Tinder";
import Happn from "./pages/apps/Happn";
import OkCupid from "./pages/apps/OkCupid";
import Badoo from "./pages/apps/Badoo";
import Hinge from "./pages/apps/Hinge";
import POF from "./pages/apps/POF";
import FacebookDating from "./pages/apps/FacebookDating";
import ParPerfeito from "./pages/apps/ParPerfeito";
import Dicas from "./pages/Dicas";
import Blog from "./pages/Blog";
import Category from "./pages/blog/Category";
import ComoAbordarUmaMulherComConfianca from "./pages/blog/posts/ComoAbordarUmaMulherComConfianca";
import OsSegredosDeUmPerfilConquistador from "./pages/blog/posts/OsSegredosDeUmPerfilConquistador";
import CantadasIrresistiveisQueFuncionam from "./pages/blog/posts/CantadasIrresistiveisQueFuncionam";
import DescubraQualSiteRelacionamentoCombina from "./pages/blog/posts/DescubraQualSiteRelacionamentoCombina";
import ComoConvidarMulherSairSemParecerDesesperado from "./pages/blog/posts/ComoConvidarMulherSairSemParecerDesesperado";
import Quiz from "./pages/Quiz";
import QuizPage1 from "./pages/quiz/QuizPage1";
import QuizPage2 from "./pages/quiz/QuizPage2";
import QuizPage3 from "./pages/quiz/QuizPage3";
import QuizPage4 from "./pages/quiz/QuizPage4";
import QuizPage5 from "./pages/quiz/QuizPage5";
import InteriorQuiz1 from "./pages/quiz/InteriorQuiz1";
import InteriorQuiz2 from "./pages/quiz/InteriorQuiz2";
import InteriorQuiz3 from "./pages/quiz/InteriorQuiz3";
import InteriorQuiz4 from "./pages/quiz/InteriorQuiz4";
import InteriorQuiz5 from "./pages/quiz/InteriorQuiz5";
import InteriorQuizResultado from "./pages/quiz/InteriorQuizResultado";
import OQueTeFazSorrir from "./pages/quiz/OQueTeFazSorrir";
import QualSeuEstiloDeNamoro from "./pages/quiz/QualSeuEstiloDeNamoro";
import VoceEMaisSerioOuDescontraido from "./pages/quiz/VoceEMaisSerioOuDescontraido";
import OndeVoceQuerChegar from "./pages/quiz/OndeVoceQuerChegar";
import OQueNuncaFaltaNoSeuDia from "./pages/quiz/OQueNuncaFaltaNoSeuDia";
import ComoIniciarConversasApps from "./pages/quiz/ComoIniciarConversasApps";
import QualTipoFotoPerfilFunciona from "./pages/quiz/QualTipoFotoPerfilFunciona";
import QuantoTempoDedicarApps from "./pages/quiz/QuantoTempoDedicarApps";
import ResultadoAppIdeal from "./pages/quiz/ResultadoAppIdeal";
import ComoHomensTimidosUsarApps from "./pages/quiz/ComoHomensTimidosUsarApps";
import MelhorHorarioUsarApps from "./pages/quiz/MelhorHorarioUsarApps";
import FrequenciaIdealUsarApps from "./pages/quiz/FrequenciaIdealUsarApps";
import TipoMensagemEnviarPrimeiro from "./pages/quiz/TipoMensagemEnviarPrimeiro";
import AppIdealHomensTimidos from "./pages/quiz/AppIdealHomensTimidos";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import Sitemap from "./pages/Sitemap";
import ComoFunciona from "./pages/ComoFunciona";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToTopButton />
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
          <Route path="/apps/parperfeito" element={<ParPerfeito />} />
          <Route path="/dicas" element={<Dicas />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:category" element={<Category />} />
          <Route path="/blog/posts/como-abordar-uma-mulher-com-confianca" element={<ComoAbordarUmaMulherComConfianca />} />
          <Route path="/blog/posts/os-segredos-de-um-perfil-conquistador" element={<OsSegredosDeUmPerfilConquistador />} />
          <Route path="/blog/posts/cantadas-irresistiveis-que-funcionam" element={<CantadasIrresistiveisQueFuncionam />} />
          <Route path="/blog/posts/descubra-qual-site-relacionamento-combina" element={<DescubraQualSiteRelacionamentoCombina />} />
          <Route path="/blog/posts/como-convidar-mulher-sair-sem-parecer-desesperado" element={<ComoConvidarMulherSairSemParecerDesesperado />} />
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
          <Route path="/sitemap" element={<Sitemap />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

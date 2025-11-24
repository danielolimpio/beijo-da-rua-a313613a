import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import DatingApps from "./pages/DatingApps";
import Bumble from "./pages/apps/Bumble";
import Tinder from "./pages/apps/Tinder";
import Dicas from "./pages/Dicas";
import Quiz from "./pages/Quiz";
import QuizPage1 from "./pages/quiz/QuizPage1";
import QuizPage2 from "./pages/quiz/QuizPage2";
import QuizPage3 from "./pages/quiz/QuizPage3";
import QuizPage4 from "./pages/quiz/QuizPage4";
import QuizPage5 from "./pages/quiz/QuizPage5";
import OQueTeFazSorrir from "./pages/quiz/OQueTeFazSorrir";
import QualSeuEstiloDeNamoro from "./pages/quiz/QualSeuEstiloDeNamoro";
import VoceEMaisSerioOuDescontraido from "./pages/quiz/VoceEMaisSerioOuDescontraido";
import OndeVoceQuerChegar from "./pages/quiz/OndeVoceQuerChegar";
import OQueNuncaFaltaNoSeuDia from "./pages/quiz/OQueNuncaFaltaNoSeuDia";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/sobre-nos" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/apps-de-namoro" element={<DatingApps />} />
          <Route path="/apps/bumble" element={<Bumble />} />
          <Route path="/apps/tinder" element={<Tinder />} />
          <Route path="/dicas" element={<Dicas />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/qual-objetivo-ideal-para-usar-app-de-namoro-homem-brasil" element={<QuizPage1 />} />
          <Route path="/como-homens-timidos-podem-usar-apps-de-namoro-com-sucesso" element={<QuizPage2 />} />
          <Route path="/quantos-encontros-por-mes-e-ideal-para-homens-em-apps-namoro" element={<QuizPage3 />} />
          <Route path="/melhores-apps-de-namoro-para-homens-apos-os-35-anos-brasil" element={<QuizPage4 />} />
          <Route path="/apps-de-namoro-para-homens-no-interior-do-brasil-vale-a-pena" element={<QuizPage5 />} />
          <Route path="/o-que-te-faz-sorrir" element={<OQueTeFazSorrir />} />
          <Route path="/qual-seu-estilo-de-namoro" element={<QualSeuEstiloDeNamoro />} />
          <Route path="/voce-e-mais-serio-ou-descontraido" element={<VoceEMaisSerioOuDescontraido />} />
          <Route path="/onde-voce-quer-chegar-no-relacionamento" element={<OndeVoceQuerChegar />} />
          <Route path="/o-que-nunca-falta-no-seu-dia" element={<OQueNuncaFaltaNoSeuDia />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

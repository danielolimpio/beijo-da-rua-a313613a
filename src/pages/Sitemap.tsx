import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { Home, Users, MessageSquare, Lightbulb, BookOpen, HelpCircle, FileText, Shield } from "lucide-react";

const Sitemap = () => {
  return (
    <>
      <Helmet>
        <title>Mapa do Site - Beijo da Rua | Navegação Completa</title>
        <meta name="description" content="Mapa completo do site Beijo da Rua. Encontre facilmente todas as páginas, apps de namoro, dicas, quiz, blog e muito mais." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://beijodarua.com.br/sitemap/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
        <DynamicBreadcrumb />
        
        <main className="container mx-auto px-4 pb-16 max-w-6xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Mapa do Site</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Navegue facilmente por todas as seções do Beijo da Rua. Encontre apps de namoro, dicas de relacionamento, quiz personalizado e muito mais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Páginas Principais */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Home className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">Páginas Principais</h2>
              </div>
              <ul className="space-y-2">
                <li><Link to="/" className="text-primary hover:underline">Página Inicial</Link></li>
                <li><Link to="/sobre-nos/" className="text-primary hover:underline">Sobre Nós</Link></li>
                <li><Link to="/como-funciona/" className="text-primary hover:underline">Como Funciona</Link></li>
                <li><Link to="/contato/" className="text-primary hover:underline">Contato</Link></li>
                <li><Link to="/faq/" className="text-primary hover:underline">Perguntas Frequentes</Link></li>
              </ul>
            </section>

            {/* Apps de Namoro */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">Apps de Namoro</h2>
              </div>
              <ul className="space-y-2">
                <li><Link to="/apps-de-namoro/" className="text-primary hover:underline">Todos os Apps</Link></li>
                <li><Link to="/apps/bumble/" className="text-primary hover:underline">Bumble</Link></li>
                <li><Link to="/apps/tinder/" className="text-primary hover:underline">Tinder</Link></li>
                <li><Link to="/apps/happn/" className="text-primary hover:underline">Happn</Link></li>
                <li><Link to="/apps/okcupid/" className="text-primary hover:underline">OkCupid</Link></li>
                <li><Link to="/apps/badoo/" className="text-primary hover:underline">Badoo</Link></li>
                <li><Link to="/apps/hinge/" className="text-primary hover:underline">Hinge</Link></li>
                <li><Link to="/apps/pof/" className="text-primary hover:underline">POF (Plenty of Fish)</Link></li>
                <li><Link to="/apps/facebook-dating/" className="text-primary hover:underline">Facebook Dating</Link></li>
                <li><Link to="/apps/skout/" className="text-primary hover:underline">Skout</Link></li>
                <li><Link to="/apps/meetme/" className="text-primary hover:underline">MeetMe</Link></li>
                <li><Link to="/apps/eharmony/" className="text-primary hover:underline">eHarmony</Link></li>
                <li><Link to="/apps/dating/" className="text-primary hover:underline">Dating.com</Link></li>
                <li><Link to="/apps/match/" className="text-primary hover:underline">Match</Link></li>
                <li><Link to="/apps/jaumo/" className="text-primary hover:underline">Jaumo</Link></li>
                <li><Link to="/apps/umatch/" className="text-primary hover:underline">Umatch</Link></li>
                <li><Link to="/apps/ashley-madison/" className="text-primary hover:underline">Ashley Madison</Link></li>
                <li><Link to="/apps/brazilcupid/" className="text-primary hover:underline">BrazilCupid</Link></li>
                <li><Link to="/apps/inner-circle/" className="text-primary hover:underline">Inner Circle</Link></li>
                <li><Link to="/apps/lauradate/" className="text-primary hover:underline">Lauradate</Link></li>
                <li><Link to="/apps/feeld/" className="text-primary hover:underline">Feeld</Link></li>
                <li><Link to="/apps/boo/" className="text-primary hover:underline">Boo</Link></li>
                <li><Link to="/apps/datemyage/" className="text-primary hover:underline">DateMyAge</Link></li>
                <li><Link to="/apps/once/" className="text-primary hover:underline">Once</Link></li>
                <li><Link to="/apps/elitesingles/" className="text-primary hover:underline">EliteSingles</Link></li>
                <li><Link to="/apps/nomadtable/" className="text-primary hover:underline">Nomadtable</Link></li>
                <li><Link to="/apps/batepapogratis/" className="text-primary hover:underline">Bate Papo Grátis</Link></li>
              </ul>
            </section>

            {/* Quiz */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">Quiz Personalizado</h2>
              </div>
              <ul className="space-y-2">
                <li><Link to="/quiz/" className="text-primary hover:underline">Iniciar Quiz</Link></li>
                <li><Link to="/qual-objetivo-ideal-para-usar-app-de-namoro-homem-brasil" className="text-primary hover:underline">Qual seu objetivo ideal?</Link></li>
                <li><Link to="/como-homens-timidos-podem-usar-apps-de-namoro-com-sucesso" className="text-primary hover:underline">Apps para homens tímidos</Link></li>
                <li><Link to="/quantos-encontros-por-mes-e-ideal-para-homens-em-apps-namoro" className="text-primary hover:underline">Quantos encontros por mês?</Link></li>
                <li><Link to="/melhores-apps-de-namoro-para-homens-apos-os-35-anos-brasil" className="text-primary hover:underline">Apps após os 35 anos</Link></li>
                <li><Link to="/apps-de-namoro-para-homens-no-interior-do-brasil-vale-a-pena" className="text-primary hover:underline">Apps no interior</Link></li>
                <li><Link to="/o-que-te-faz-sorrir" className="text-primary hover:underline">O que te faz sorrir?</Link></li>
                <li><Link to="/qual-seu-estilo-de-namoro" className="text-primary hover:underline">Seu estilo de namoro</Link></li>
                <li><Link to="/voce-e-mais-serio-ou-descontraido" className="text-primary hover:underline">Sério ou descontraído?</Link></li>
                <li><Link to="/onde-voce-quer-chegar-no-relacionamento" className="text-primary hover:underline">Onde você quer chegar?</Link></li>
                <li><Link to="/o-que-nunca-falta-no-seu-dia" className="text-primary hover:underline">O que nunca falta no seu dia?</Link></li>
                <li><Link to="/como-iniciar-conversas-apps-namoro-que-geram-respostas" className="text-primary hover:underline">Como iniciar conversas</Link></li>
                <li><Link to="/qual-tipo-foto-perfil-funciona-melhor-apps-namoro-homem" className="text-primary hover:underline">Melhor foto de perfil</Link></li>
                <li><Link to="/quanto-tempo-dedicar-apps-namoro-por-dia-homem" className="text-primary hover:underline">Tempo ideal por dia</Link></li>
                <li><Link to="/melhor-horario-usar-apps-namoro" className="text-primary hover:underline">Melhor horário</Link></li>
                <li><Link to="/frequencia-ideal-usar-apps" className="text-primary hover:underline">Frequência ideal</Link></li>
                <li><Link to="/tipo-mensagem-enviar-primeiro" className="text-primary hover:underline">Tipo de mensagem</Link></li>
                <li><Link to="/app-ideal-homens-timidos" className="text-primary hover:underline">App ideal para tímidos</Link></li>
                <li><Link to="/seu-app-de-namoro-ideal-resultado" className="text-primary hover:underline">Seu resultado</Link></li>
                <li className="text-sm text-muted-foreground mt-2">Quiz: Interesse Feminino Real</li>
                <li><Link to="/como-saber-se-mulher-tem-interesse-real-em-voce-apps-namoro-homem-brasil" className="text-primary hover:underline">Ela tem interesse real?</Link></li>
                <li><Link to="/tempo-resposta-mensagens-mulher-interessada-apps-namoro-homem" className="text-primary hover:underline">Tempo de resposta nas mensagens</Link></li>
                <li><Link to="/perguntas-pessoais-mulher-interesse-genuino-conversa-apps-namoro" className="text-primary hover:underline">Perguntas pessoais e interesse genuíno</Link></li>
                <li><Link to="/mulher-aceita-marcar-encontro-rapido-app-namoro-sinal-interesse" className="text-primary hover:underline">Mulher aceita marcar encontro</Link></li>
                <li><Link to="/emojis-mensagens-longas-iniciativa-mulher-interessada-apps-namoro" className="text-primary hover:underline">Emojis, mensagens longas e iniciativa</Link></li>
                <li className="text-sm text-muted-foreground mt-2">Quiz Interior (Cidades do Interior)</li>
                <li><Link to="/experiencia-com-apps-de-namoro-cidades-interior" className="text-primary hover:underline">Experiência em cidades do interior</Link></li>
                <li><Link to="/mobilidade-para-encontros-apps-namoro-interior" className="text-primary hover:underline">Mobilidade para encontros</Link></li>
                <li><Link to="/objetivo-relacionamento-apps-namoro-interior" className="text-primary hover:underline">Objetivo do relacionamento</Link></li>
                <li><Link to="/estilo-de-vida-apps-de-namoro-interior" className="text-primary hover:underline">Estilo de vida</Link></li>
                <li><Link to="/interior-quiz-resultado" className="text-primary hover:underline">Resultado quiz interior</Link></li>
              </ul>
            </section>

            {/* Dicas */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">Dicas</h2>
              </div>
              <ul className="space-y-2">
                <li><Link to="/dicas/" className="text-primary hover:underline">Todas as Dicas</Link></li>
              </ul>
            </section>

            {/* Blog */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">Blog</h2>
              </div>
              <ul className="space-y-2">
                <li><Link to="/blog/" className="text-primary hover:underline">Todos os Artigos</Link></li>
                <li className="ml-4 text-sm text-muted-foreground">Categorias:</li>
                <li className="ml-4"><Link to="/blog/conquista" className="text-primary hover:underline">Conquista</Link></li>
                <li className="ml-4"><Link to="/blog/relacionamento" className="text-primary hover:underline">Relacionamento</Link></li>
                <li className="ml-4"><Link to="/blog/paquera" className="text-primary hover:underline">Paquera</Link></li>
                <li className="ml-4"><Link to="/blog/aplicativos" className="text-primary hover:underline">Aplicativos</Link></li>
                <li className="ml-4"><Link to="/blog/autoestima" className="text-primary hover:underline">Autoestima</Link></li>
                <li className="ml-4 text-sm text-muted-foreground mt-2">Artigos em Destaque:</li>
                <li className="ml-4"><Link to="/blog/posts/cantadas-irresistiveis-que-funcionam/" className="text-primary hover:underline">Cantadas Irresistíveis</Link></li>
                <li className="ml-4"><Link to="/blog/posts/os-segredos-de-um-perfil-conquistador/" className="text-primary hover:underline">Perfil Conquistador</Link></li>
                <li className="ml-4"><Link to="/blog/posts/como-abordar-uma-mulher-com-confianca/" className="text-primary hover:underline">Abordar com Confiança</Link></li>
                <li className="ml-4"><Link to="/blog/posts/medo-coragem-conquistar-respeito/" className="text-primary hover:underline">Do Medo à Coragem</Link></li>
                <li className="ml-4"><Link to="/blog/posts/despertar-interesse-sem-dizer-nada/" className="text-primary hover:underline">Despertar Interesse Silencioso</Link></li>
                <li className="ml-4"><Link to="/blog/posts/arte-manter-conversa-leve-envolver/" className="text-primary hover:underline">A Arte de Manter uma Conversa Leve</Link></li>
                <li className="ml-4"><Link to="/blog/posts/humor-inteligente-conquista-mais-que-beleza/" className="text-primary hover:underline">Humor Inteligente Conquista Mais que Beleza</Link></li>
                <li className="ml-4"><Link to="/blog/posts/como-reconhecer-se-ela-esta-disponivel-emocionalmente/" className="text-primary hover:underline">Reconhecer Disponibilidade Emocional</Link></li>
                <li className="ml-4"><Link to="/blog/posts/criar-expectativa-sem-parecer-jogador/" className="text-primary hover:underline">Criar Expectativa sem Parecer Jogador</Link></li>
                <li className="ml-4"><Link to="/blog/posts/como-transformar-amizade-em-romance-com-respeito/" className="text-primary hover:underline">Como Transformar Amizade em Romance</Link></li>
                <li className="ml-4"><Link to="/blog/posts/golpes-amorosos-em-apps-de-namoro-como-se-proteger/" className="text-primary hover:underline">Golpes Amorosos em Apps de Namoro</Link></li>
                <li className="ml-4"><Link to="/blog/posts/inteligencia-artificial-no-namoro-apps/" className="text-primary hover:underline">Inteligência Artificial no Namoro</Link></li>
                <li className="ml-4"><Link to="/blog/posts/bio-perfeita-apps-de-namoro-2026/" className="text-primary hover:underline">Bio Perfeita para Apps de Namoro em 2026</Link></li>
                <li className="ml-4"><Link to="/blog/posts/tinder-vs-bumble-comparativo-2026/" className="text-primary hover:underline">Tinder vs Bumble: Comparativo 2026</Link></li>
                <li className="ml-4"><Link to="/blog/posts/vpn-para-apps-de-namoro-privacidade/" className="text-primary hover:underline">VPN para Apps de Namoro: Privacidade em 2026</Link></li>
                <li className="ml-4"><Link to="/blog/posts/fotos-perfil-apps-namoro-guia-homens/" className="text-primary hover:underline">Fotos de Perfil para Apps de Namoro (Homens)</Link></li>
                <li className="ml-4"><Link to="/blog/posts/primeira-mensagem-tinder-que-recebe-resposta/" className="text-primary hover:underline">Primeira Mensagem no Tinder que Recebe Resposta</Link></li>
                <li className="ml-4"><Link to="/blog/posts/ghosting-em-apps-de-namoro-como-lidar/" className="text-primary hover:underline">Ghosting em Apps de Namoro: Como Lidar</Link></li>
                <li className="ml-4"><Link to="/blog/posts/perfis-falsos-catfishing-apps-de-namoro/" className="text-primary hover:underline">Perfis Falsos e Catfishing em Apps de Namoro</Link></li>
              </ul>
            </section>

            {/* Políticas */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">Políticas e Termos</h2>
              </div>
              <ul className="space-y-2">
                <li><Link to="/politica-de-privacidade/" className="text-primary hover:underline">Política de Privacidade</Link></li>
                <li><Link to="/termos-de-uso/" className="text-primary hover:underline">Termos de Uso</Link></li>
                <li><Link to="/politica-de-cookies/" className="text-primary hover:underline">Política de Cookies</Link></li>
              </ul>
            </section>
          </div>

          {/* Informação Adicional */}
          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Sobre o Mapa do Site</h3>
            <p className="text-muted-foreground">
              Este mapa do site foi criado para ajudar você a navegar facilmente por todas as seções do Beijo da Rua. 
              Se você está procurando informações sobre apps de namoro, dicas de relacionamento, ou quer fazer nosso quiz personalizado, 
              todas as páginas estão organizadas aqui para sua conveniência.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Sitemap;

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
                <li><Link to="/sobre-nos" className="text-primary hover:underline">Sobre Nós</Link></li>
                <li><Link to="/contato" className="text-primary hover:underline">Contato</Link></li>
                <li><Link to="/faq" className="text-primary hover:underline">Perguntas Frequentes</Link></li>
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
              </ul>
            </section>

            {/* Quiz */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">Quiz Personalizado</h2>
              </div>
              <ul className="space-y-2">
                <li><Link to="/quiz" className="text-primary hover:underline">Iniciar Quiz</Link></li>
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
              </ul>
            </section>

            {/* Dicas */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">Dicas</h2>
              </div>
              <ul className="space-y-2">
                <li><Link to="/dicas" className="text-primary hover:underline">Todas as Dicas</Link></li>
              </ul>
            </section>

            {/* Blog */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">Blog</h2>
              </div>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-primary hover:underline">Todos os Artigos</Link></li>
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
              </ul>
            </section>

            {/* Políticas */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">Políticas e Termos</h2>
              </div>
              <ul className="space-y-2">
                <li><Link to="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</Link></li>
                <li><Link to="/termos-de-uso" className="text-primary hover:underline">Termos de Uso</Link></li>
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

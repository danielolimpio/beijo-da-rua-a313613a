import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import vitePrerender from 'vite-plugin-prerender';

// All routes to prerender for SSG
const routesToPrerender = [
  '/',
  '/como-funciona',
  '/contato',
  '/sobre-nos',
  '/faq',
  '/apps-de-namoro',
  '/apps/bumble',
  '/apps/tinder',
  '/apps/happn',
  '/apps/okcupid',
  '/apps/badoo',
  '/apps/hinge',
  '/apps/pof',
  '/apps/facebook-dating',
  '/apps/parperfeito',
  '/dicas',
  '/blog',
  '/blog/relacionamento',
  '/blog/apps',
  '/blog/conversa',
  '/blog/perfil',
  '/blog/posts/como-abordar-uma-mulher-com-confianca',
  '/blog/posts/os-segredos-de-um-perfil-conquistador',
  '/blog/posts/cantadas-irresistiveis-que-funcionam',
  '/blog/posts/descubra-qual-site-relacionamento-combina',
  '/blog/posts/como-convidar-mulher-sair-sem-parecer-desesperado',
  '/blog/posts/tecnicas-controlar-nervosismo-paquera',
  '/blog/posts/frases-de-efeito-que-deixam-mulher-interessada',
  '/blog/posts/como-criar-conexoes-reais-em-apps',
  '/blog/posts/erros-fatais-que-destroem-seu-charme',
  '/quiz',
  '/qual-objetivo-ideal-para-usar-app-de-namoro-homem-brasil',
  '/como-homens-timidos-podem-usar-apps-de-namoro-com-sucesso',
  '/melhor-horario-usar-apps-namoro',
  '/frequencia-ideal-usar-apps',
  '/tipo-mensagem-enviar-primeiro',
  '/app-ideal-homens-timidos',
  '/quantos-encontros-por-mes-e-ideal-para-homens-em-apps-namoro',
  '/melhores-apps-de-namoro-para-homens-apos-os-35-anos-brasil',
  '/apps-de-namoro-para-homens-no-interior-do-brasil-vale-a-pena',
  '/interior-quiz-2',
  '/interior-quiz-3',
  '/interior-quiz-4',
  '/interior-quiz-5',
  '/interior-quiz-resultado',
  '/o-que-te-faz-sorrir',
  '/qual-seu-estilo-de-namoro',
  '/voce-e-mais-serio-ou-descontraido',
  '/onde-voce-quer-chegar-no-relacionamento',
  '/o-que-nunca-falta-no-seu-dia',
  '/como-iniciar-conversas-apps-namoro-que-geram-respostas',
  '/qual-tipo-foto-perfil-funciona-melhor-apps-namoro-homem',
  '/quanto-tempo-dedicar-apps-namoro-por-dia-homem',
  '/seu-app-de-namoro-ideal-resultado',
  '/politica-de-privacidade',
  '/termos-de-uso',
  '/politica-de-cookies',
  '/sitemap',
];

// Get Puppeteer Renderer from the plugin
const PuppeteerRenderer = vitePrerender.PuppeteerRenderer;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    mode === "production" && vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: routesToPrerender,
      renderer: new PuppeteerRenderer({
        maxConcurrentRoutes: 4,
        renderAfterTime: 500,
        headless: true,
      }),
      postProcess(renderedRoute) {
        // Keep the original route to maintain folder structure
        renderedRoute.route = renderedRoute.originalRoute;
        return renderedRoute;
      }
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));

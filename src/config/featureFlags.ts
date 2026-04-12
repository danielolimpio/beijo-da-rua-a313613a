/**
 * Feature flags para controlar visibilidade de seções do site
 * Altere para true/false para mostrar/ocultar seções
 * 
 * NOTA: Estas flags foram criadas para aprovação do Google AdSense
 * Depois de aprovado, volte todas para true
 */

export const FEATURE_FLAGS = {
  // Seção "Últimos membros cadastrados" no WelcomeSection
  SHOW_LATEST_MEMBERS: true,
  
  // Formulário "Encontre Seu Par Perfeito" no WelcomeSection
  SHOW_FIND_MATCH_FORM: true,
  
  // Cards de WhatsApp e Telegram no WelcomeSection e BlogSidebar
  SHOW_SOCIAL_GROUPS: true,
  
  // Seção "Membros Mais Populares" (PopularMembers)
  SHOW_POPULAR_MEMBERS: true,
  
  // "Membros Destacados" no rodapé (Footer)
  SHOW_FEATURED_MEMBERS_FOOTER: true,
  
  // Popup "Acabou de se cadastrar" (NewRegistrationPopup)
  SHOW_REGISTRATION_POPUP: true,
  
  // Números/estatísticas na seção "Tudo Começa Com Um Encontro" (StatsSection)
  SHOW_STATS_NUMBERS: true,
};

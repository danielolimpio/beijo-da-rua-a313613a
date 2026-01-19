import { 
  Heart, 
  Smartphone, 
  TrendingUp, 
  Shield, 
  MessageCircle, 
  Sparkles, 
  Target, 
  Clock, 
  Users, 
  CheckCircle2, 
  Star,
  Zap,
  Crown,
  BadgeCheck,
  Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";

const PremiumGuideSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-warning/5 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-warning/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-warning bg-clip-text text-transparent">
              Guia Completo 2026
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Namoro Online em 2026: Guia Completo para{" "}
            <span className="bg-gradient-to-r from-primary to-warning bg-clip-text text-transparent">
              Homens Brasileiros
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Os aplicativos de relacionamento evoluíram radicalmente. Hoje, oferecem ferramentas sofisticadas baseadas em psicologia, 
            comportamento e inteligência artificial para ajudar você a encontrar alguém com quem realmente possa construir algo duradouro.
          </p>
        </div>

        {/* Why Online Dating Works - Premium Card */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-warning to-primary rounded-2xl p-[1px]">
            <div className="absolute inset-[1px] bg-card rounded-2xl" />
          </div>
          <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-warning flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Por Que o Namoro Online Funciona?
              </h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Estudos conduzidos por universidades nos Estados Unidos, Europa e Brasil indicam que casais que se conhecem online 
              tendem a avançar mais rapidamente para relacionamentos sérios, muitas vezes chegando ao casamento em menos da metade 
              do tempo comparado aos que se conheceram de forma tradicional.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Stat Card 1 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-warning/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <div className="relative bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold text-foreground mb-2">Eficiência</h4>
                  <p className="text-sm text-muted-foreground">
                    Filtre intenções desde o início e encontre pessoas que pensam da mesma forma.
                  </p>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-warning/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <div className="relative bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <Clock className="w-8 h-8 text-warning mb-4" />
                  <h4 className="text-xl font-bold text-foreground mb-2">Economia de Tempo</h4>
                  <p className="text-sm text-muted-foreground">
                    Reduza drasticamente o tempo gasto em encontros sem futuro.
                  </p>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-warning/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <div className="relative bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <Zap className="w-8 h-8 text-success mb-4" />
                  <h4 className="text-xl font-bold text-foreground mb-2">Investimento Inteligente</h4>
                  <p className="text-sm text-muted-foreground">
                    R$ 30-80/mês vs R$ 15.000/ano em encontros tradicionais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Card - Proven Results */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-warning rounded-2xl p-[1px] opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-[1px] bg-card rounded-2xl" />
            </div>
            <div className="relative bg-card rounded-2xl p-8 h-full shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-success" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Resultados Comprovados</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Segundo pesquisas publicadas no <strong>Journal of Marriage and Family</strong>, casais que se conhecem online têm 
                taxas de divórcio significativamente menores nos primeiros cinco anos de casamento.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Níveis mais altos de satisfação emocional</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Comunicação mais aberta entre os casais</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Maior alinhamento de valores e objetivos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Future of Dating */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-warning to-primary rounded-2xl p-[1px] opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-[1px] bg-card rounded-2xl" />
            </div>
            <div className="relative bg-card rounded-2xl p-8 h-full shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-warning/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">O Futuro do Namoro no Brasil</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Em 2026, o namoro digital já incorpora <strong>inteligência artificial generativa</strong>, análise de tom de voz 
                em mensagens de áudio e eventos híbridos organizados por apps.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Algoritmos de compatibilidade refinados por IA</span>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Eventos online + presenciais organizados por apps</span>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Coaching de namoro integrado às plataformas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Choose Section */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-warning to-primary rounded-2xl p-[1px]">
            <div className="absolute inset-[1px] bg-gradient-to-br from-card to-muted/20 rounded-2xl" />
          </div>
          <div className="relative rounded-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <Crown className="w-6 h-6 text-warning" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Como Escolher o Melhor App em 2026?
                </h3>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Com tantas opções disponíveis, o maior desafio não é encontrar um app, mas sim escolher aquele que combina com seu momento de vida.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Criteria 1 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-warning flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Intenção Clara</h4>
                  <p className="text-sm text-muted-foreground">
                    Escolha plataformas alinhadas com seus objetivos: relacionamento sério, casual ou networking.
                  </p>
                </div>
              </div>

              {/* Criteria 2 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-warning/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-warning/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-warning to-primary flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Qualidade dos Perfis</h4>
                  <p className="text-sm text-muted-foreground">
                    Priorize apps com verificação por selfie e vínculo com redes sociais contra perfis falsos.
                  </p>
                </div>
              </div>

              {/* Criteria 3 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-success/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-success/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-success to-success/70 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Algoritmos Inteligentes</h4>
                  <p className="text-sm text-muted-foreground">
                    Sites com questionários de personalidade oferecem sugestões mais precisas e compatíveis.
                  </p>
                </div>
              </div>

              {/* Criteria 4 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-warning flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Recursos de Conversa</h4>
                  <p className="text-sm text-muted-foreground">
                    Apps modernos oferecem sugestões de mensagens, prompts criativos e videochamadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Tips Section */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Left - Profile Tips */}
          <div className="lg:col-span-3">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-warning rounded-2xl p-[1px]">
                <div className="absolute inset-[1px] bg-card rounded-2xl" />
              </div>
              <div className="relative bg-card rounded-2xl p-8 h-full shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-warning flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Dicas para um Perfil que Atrai</h3>
                </div>

                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-warning/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold bg-gradient-to-r from-primary to-warning bg-clip-text text-transparent">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Use 3 a 5 fotos de qualidade</h4>
                      <p className="text-sm text-muted-foreground">Uma de rosto nítida, uma mostrando seu estilo de vida e uma em grupo.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-warning/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold bg-gradient-to-r from-primary to-warning bg-clip-text text-transparent">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Seja específico na bio</h4>
                      <p className="text-sm text-muted-foreground">Em vez de "gosto de viajar", diga "busco alguém que curta café da manhã tardio aos domingos".</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-warning/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold bg-gradient-to-r from-primary to-warning bg-clip-text text-transparent">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Mostre intenção e vulnerabilidade</h4>
                      <p className="text-sm text-muted-foreground">Mulheres valorizam homens que sabem o que querem e demonstram interesse genuíno.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Premium Benefits */}
          <div className="lg:col-span-2">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-warning to-primary rounded-2xl p-[1px]">
                <div className="absolute inset-[1px] bg-gradient-to-br from-primary/5 via-card to-warning/5 rounded-2xl" />
              </div>
              <div className="relative rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Crown className="w-6 h-6 text-warning" />
                  <h3 className="text-xl font-bold text-foreground">Vale a Pena o Premium?</h3>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  Sim — especialmente se você está falando sério. Versões premium oferecem:
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-card/50 rounded-lg p-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm text-foreground">Mensagens ilimitadas</span>
                  </div>
                  <div className="flex items-center gap-3 bg-card/50 rounded-lg p-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm text-foreground">Ver quem curtiu seu perfil</span>
                  </div>
                  <div className="flex items-center gap-3 bg-card/50 rounded-lg p-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm text-foreground">Filtros avançados</span>
                  </div>
                  <div className="flex items-center gap-3 bg-card/50 rounded-lg p-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm text-foreground">Maior visibilidade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps CTA */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-warning to-primary rounded-2xl p-[2px]">
            <div className="absolute inset-[2px] bg-gradient-to-br from-card via-muted/30 to-card rounded-2xl" />
          </div>
          <div className="relative rounded-2xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-warning/10 px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 text-warning" />
              <span className="text-sm font-medium text-foreground">Comece Agora</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Próximos Passos para Encontrar{" "}
              <span className="bg-gradient-to-r from-primary to-warning bg-clip-text text-transparent">
                Seu Amor
              </span>
            </h3>
            
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              O amor não acontece por acaso — ele é construído. E em 2026, a tecnologia está do seu lado. 
              No Beijo da Rua, guiamos cada passo com informação de qualidade e análises imparciais.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/quiz/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-warning text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                <Target className="w-5 h-5" />
                Descobrir Meu App Ideal
              </Link>
              <Link 
                to="/apps/"
                className="inline-flex items-center gap-2 bg-card border-2 border-primary/30 text-foreground px-6 py-3 rounded-full font-semibold hover:border-primary/60 transition-all"
              >
                <Smartphone className="w-5 h-5" />
                Ver Apps Avaliados
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumGuideSection;

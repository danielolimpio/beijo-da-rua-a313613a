import { Helmet } from "react-helmet";
import QuizLayout from "@/components/QuizLayout";
import { Building2, Home, MapPin, AlertTriangle, CheckCircle2, XCircle, Lightbulb, PartyPopper, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import facebookDatingLogo from "@/assets/facebook-dating-logo.jpg";
import badooLogo from "@/assets/badoo-logo.jpeg";
import tinderLogo from "@/assets/tinder-logo.jpeg";
import pofLogo from "@/assets/pof-logo.jpeg";

const InteriorQuizResultado = () => {
  return (
    <>
      <Helmet>
        <title>Seu Resultado: Apps de Namoro no Interior | Beijo da Rua</title>
        <meta name="description" content="Veja suas recomendações personalizadas de apps de namoro para o interior do Brasil, baseadas no seu perfil e localização." />
      </Helmet>

      <QuizLayout 
        title="Seu Resultado Personalizado" 
        description="Apps ideais para você no interior"
        progress={100}
      >
        {/* Congratulations Box */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg text-center mb-12 border-2 border-primary/20">
          <PartyPopper className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-3 text-foreground">🎉 Parabéns! Quiz Concluído</h2>
          <p className="text-muted-foreground mb-2 max-w-2xl mx-auto text-lg">
            Baseado nas suas respostas, preparamos recomendações personalizadas de apps de namoro que funcionam no interior do Brasil.
          </p>
        </div>

        {/* Educational Content */}
        <article className="prose max-w-none mb-12 space-y-8">
          {/* Section 1 */}
          <section className="bg-muted/30 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-foreground">A realidade dos apps no interior do Brasil</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vamos com a verdade nua e crua: apps de namoro no interior brasileiro funcionam MUITO diferente das capitais. 
              Em São Paulo, você pode ter 50+ matches por semana. No interior de Minas? Talvez 5 por mês. 
              Mas isso não significa que não funciona.
            </p>
          </section>

          {/* Highlight Box */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg dark:bg-green-950/20">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Segredo que homens do interior ignoram:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Em cidades pequenas, você tem vantagem GIGANTE se souber jogar. Por quê? Menos competição. 
                  Enquanto homens em SP brigam por atenção com 10.000 outros, você compete com 50. 
                  Taxa de conversão de match → encontro é 3x maior no interior (78% vs 23%).
                </p>
              </div>
            </div>
          </div>

          {/* Apps Recommendations */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <Smartphone className="text-primary" />
              Apps Recomendados Para Você
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-2 border-primary">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-3">
                    <img src={facebookDatingLogo} alt="Logo Facebook Dating" width={48} height={48} className="w-12 h-12 rounded-lg object-cover border border-border bg-white" />
                    <span className="flex items-center gap-2"><CheckCircle2 className="text-primary" /> Facebook Dating</span>
                  </CardTitle>
                  <CardDescription>Melhor escolha para interior</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground mb-4">
                    Todo mundo tem Facebook, mesmo sem baixar app de namoro. Usa conexões sociais reais (amigos de amigos), reduzindo fakes e aumentando segurança.
                  </p>
                  <p className="font-semibold text-foreground">
                    ✅ Por que funciona: Maior penetração em cidades pequenas, integrado com Instagram, grátis e completo.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-500">
                <CardHeader className="bg-blue-50 dark:bg-blue-950/20">
                  <CardTitle className="flex items-center gap-3">
                    <img src={badooLogo} alt="Logo Badoo" width={48} height={48} className="w-12 h-12 rounded-lg object-cover border border-border bg-white" />
                    <span className="flex items-center gap-2"><CheckCircle2 className="text-blue-600" /> Badoo</span>
                  </CardTitle>
                  <CardDescription>Forte presença no interior</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground mb-4">
                    App internacional com grande base no Brasil, especialmente fora das capitais. Sistema de verificação robusto.
                  </p>
                  <p className="font-semibold text-foreground">
                    ✅ Por que funciona: Muito usado em cidades pequenas/médias, recursos de filtro avançados, grátis com opções premium.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-rose-500">
                <CardHeader className="bg-rose-50 dark:bg-rose-950/20">
                  <CardTitle className="flex items-center gap-3">
                    <img src={tinderLogo} alt="Logo Tinder" width={48} height={48} className="w-12 h-12 rounded-lg object-cover border border-border bg-white" />
                    <span className="flex items-center gap-2"><CheckCircle2 className="text-rose-600" /> Tinder</span>
                  </CardTitle>
                  <CardDescription>Com raio ampliado</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground mb-4">
                    O mais popular globalmente. No interior, funciona SE você ampliar o raio para 50-100km. Ótimo para começar.
                  </p>
                  <p className="font-semibold text-foreground">
                    ✅ Por que funciona: Maior base de usuários, interface simples, funciona em toda cidade com internet.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-500">
                <CardHeader className="bg-purple-50 dark:bg-purple-950/20">
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="text-purple-600" />
                    POF (Plenty of Fish)
                  </CardTitle>
                  <CardDescription>Subestimado, mas eficaz</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground mb-4">
                    Menos conhecido nas capitais, mas surpreendentemente popular no interior brasileiro. Totalmente gratuito e funcional.
                  </p>
                  <p className="font-semibold text-foreground">
                    ✅ Por que funciona: Gratuito 100%, bom para conversas longas, menos superficial que Tinder.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Strategies by Location */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-foreground">Estratégias por tipo de localização</h2>
            
            {/* Capitais */}
            <div className="bg-blue-50 p-6 rounded-lg mb-6 dark:bg-blue-950/20">
              <div className="flex items-start gap-3 mb-3">
                <Building2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-foreground">Capitais e regiões metropolitanas</h3>
              </div>
              <div className="space-y-2 text-muted-foreground ml-9">
                <p><strong className="text-foreground">Apps TOP:</strong> Todos funcionam (Tinder, Bumble, Happn, Hinge, etc.)</p>
                <p><strong className="text-foreground">Vantagens:</strong> Volume absurdo de opções, diversidade, apps nichados também funcionam</p>
                <p><strong className="text-foreground">Desvantagens:</strong> Competição feroz, "paradoxo da escolha" (tanta opção que ninguém decide)</p>
                <p><strong className="text-foreground">Estratégia vencedora:</strong> Seja específico em bio. Com 100.000 perfis, destaque é tudo. Mulheres em capitais filtram rápido — dê motivo para pausarem em você.</p>
              </div>
            </div>

            {/* Cidades Médias */}
            <div className="bg-purple-50 p-6 rounded-lg mb-6 dark:bg-purple-950/20">
              <div className="flex items-start gap-3 mb-3">
                <Home className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-foreground">Cidades médias (100k–500k habitantes)</h3>
              </div>
              <div className="space-y-2 text-muted-foreground ml-9">
                <p><strong className="text-foreground">Apps TOP:</strong> Tinder, Bumble, ParPerfeito, Facebook Dating</p>
                <p><strong className="text-foreground">Sweet spot:</strong> Opções suficientes, mas não avassaladoras. Facebook Dating funciona MUITO BEM aqui — usa conexões sociais reais (amigos de amigos).</p>
                <p><strong className="text-foreground">Estratégia vencedora:</strong> Expanda raio para 50–80km. Cidades vizinhas aumentam matches em 200%. Mulheres de cidades médias aceitam deslocamento curto.</p>
              </div>
            </div>

            {/* Interior */}
            <div className="bg-amber-50 p-6 rounded-lg dark:bg-amber-950/20">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-foreground">Interior e cidades pequenas (&lt;100k)</h3>
              </div>
              <div className="space-y-2 text-muted-foreground ml-9">
                <p><strong className="text-foreground">Apps TOP:</strong> Facebook Dating, Badoo, POF, Tinder (raio ampliado)</p>
                <p>Aqui a estratégia muda completamente: Apps internacionais (Badoo, POF) têm mais penetração em cidades pequenas brasileiras. Facebook Dating é OURO — todo mundo está no Face, mesmo sem baixar app de namoro.</p>
                <p className="font-semibold text-foreground mt-3">Estratégias avançadas:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Aumente raio para 100–150km (sim, é muito, mas necessário)</li>
                  <li>Use apps em finais de semana (pessoal viaja para cidade maior)</li>
                  <li>Mencione que tem carro/mobilidade (remove barreira logística)</li>
                  <li>Instagram como complemento — em cidade pequena, redes sociais &gt; apps</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Alert Box */}
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg dark:bg-orange-950/20">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Alerta para interior:</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Em cidades pequenas, privacidade é quase zero. Todo mundo conhece todo mundo. 
                  Seu perfil será visto por conhecidos, ex, parentes de amigos. Aceite isso ou não use apps.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Solução:</strong> Seja discreto mas honesto. Esconder não funciona (vão te achar). 
                  Perfil respeitoso evita fofoca. 68% das mulheres do interior checam "o que falam dele na cidade" antes de aceitar encontro.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 - Myths */}
          <section className="bg-muted/30 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Mitos sobre apps no interior</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground"><strong className="text-foreground">"Não tem ninguém no app"</strong> → Tem, mas precisa ampliar raio e paciência</p>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground"><strong className="text-foreground">"Só funciona em capital"</strong> → Taxa de conversão match→encontro é maior no interior</p>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground"><strong className="text-foreground">"Vou encontrar só fake"</strong> → Cidade pequena = menos fake (todo mundo se conhece)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground"><strong className="text-foreground">"Preciso complementar com redes sociais"</strong> → VERDADE. Instagram é essencial</p>
              </div>
            </div>
          </section>

          {/* Final Verdict */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border-2 border-primary/20">
            <h3 className="text-xl font-bold mb-3 text-foreground">Veredito final:</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Apps no interior exigem mais paciência, mas menos competição. Qualidade do perfil conta 10x mais. 
              Um homem bem apresentado em cidade de 30mil tem mais sucesso que homem mediano em SP com 12 milhões.
            </p>
            <p className="text-foreground font-semibold text-lg">
              ✅ VALE A PENA? Sim, desde que você adapte sua estratégia ao contexto do interior.
            </p>
          </div>

          {/* Next Steps */}
          <section className="bg-gradient-to-br from-primary to-secondary p-8 rounded-lg text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Próximos Passos</h2>
            <p className="mb-6 text-lg max-w-2xl mx-auto">
              Agora que você sabe quais apps funcionam no interior, descubra qual deles é o IDEAL para seu perfil específico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/quiz/">Fazer Quiz Completo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
                <Link to="/apps-de-namoro/">Ver Todos os Apps</Link>
              </Button>
            </div>
          </section>
        </article>
      </QuizLayout>
    </>
  );
};

export default InteriorQuizResultado;

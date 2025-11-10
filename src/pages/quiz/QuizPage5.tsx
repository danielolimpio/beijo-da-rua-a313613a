import { Helmet } from "react-helmet";
import QuizLayout from "@/components/QuizLayout";
import QuizOption from "@/components/QuizOption";
import { Building2, Home, MapPin, AlertTriangle, CheckCircle2, XCircle, Lightbulb, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuizPage5 = () => {
  return (
    <>
      <Helmet>
        <title>Você Mora em Cidade Grande ou Interior? | Quiz Apps de Namoro</title>
        <meta name="description" content="Descubra como sua localização influencia sua estratégia em apps de namoro. Estratégias específicas para capitais, cidades médias e interior." />
      </Helmet>

      <QuizLayout 
        title="Você mora em cidade grande ou interior?" 
        description="Localização muda completamente a estratégia"
        progress={100}
      >
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
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
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

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-foreground">Estratégias por tipo de localização</h2>
            
            {/* Capitais */}
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
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
            <div className="bg-purple-50 p-6 rounded-lg mb-6">
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
            <div className="bg-amber-50 p-6 rounded-lg">
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
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
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
            <p className="text-muted-foreground leading-relaxed">
              Apps no interior exigem mais paciência, mas menos competição. Qualidade do perfil conta 10x mais. 
              Um homem bem apresentado em cidade de 30mil tem mais sucesso que homem mediano em SP com 12 milhões.
            </p>
          </div>

          {/* Congratulations Box */}
          <div className="bg-pink-50 border-2 border-primary p-8 rounded-lg text-center">
            <PartyPopper className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-foreground">🎉 Parabéns! Você completou o quiz</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Agora você sabe exatamente qual app de namoro funciona melhor para seu perfil, idade, localização e objetivos.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Ver Resultado Personalizado
            </Button>
          </div>
        </article>

        {/* Quiz Question */}
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 text-foreground">Onde você mora?</h2>
            <p className="text-muted-foreground">Escolha a opção que melhor descreve sua localização</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <QuizOption
              title="Capital"
              description="São Paulo, Rio, capitais e regiões metropolitanas"
              icon={<Building2 className="w-6 h-6" />}
              href="/apps-de-namoro"
            />
            <QuizOption
              title="Cidade média"
              description="100k–500k habitantes, cidades do interior desenvolvidas"
              icon={<Home className="w-6 h-6" />}
              href="/apps-de-namoro"
            />
            <QuizOption
              title="Interior"
              description="Cidades pequenas, menos de 100k habitantes"
              icon={<MapPin className="w-6 h-6" />}
              href="/apps-de-namoro"
            />
          </div>
        </div>
      </QuizLayout>
    </>
  );
};

export default QuizPage5;

import QuizLayout from "@/components/QuizLayout";
import QuizOption from "@/components/QuizOption";
import { Helmet } from "react-helmet";
import { Building2, Home as HomeIcon, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const QuizPage5 = () => {
  return (
    <>
      <Helmet>
        <title>Apps de namoro para homens no interior do Brasil vale a pena? | Beijo da Rua</title>
        <meta name="description" content="Descubra como apps de namoro funcionam fora das capitais, estratégias para ampliar alcance e alternativas locais no Brasil." />
      </Helmet>
      
      <QuizLayout 
        title="Você mora em cidade grande ou interior?"
        description="Localização muda completamente a estratégia"
        progress={100}
      >
        {/* Educational Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            A realidade dos apps no interior do Brasil
          </h2>
          
          <p className="text-foreground/80 mb-4">
            Vamos com a verdade nua e crua: <strong>apps de namoro no interior brasileiro funcionam 
            MUITO diferente das capitais</strong>. Em São Paulo, você pode ter 50+ matches por semana. 
            No interior de Minas? Talvez 5 por mês. Mas isso não significa que não funciona.
          </p>

          <div className="bg-success/10 border-l-4 border-success p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-foreground mb-2">💡 Segredo que homens do interior ignoram:</h3>
            <p className="text-foreground/80 mb-0">
              Em cidades pequenas, você tem vantagem GIGANTE se souber jogar. Por quê? Menos 
              competição. Enquanto homens em SP brigam por atenção com 10.000 outros, você compete 
              com 50. Taxa de conversão de match → encontro é 3x maior no interior (78% vs 23%).
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-3">Estratégias por tipo de localização:</h3>
          
          <div className="space-y-4 mb-6">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">🏙️ Capitais e regiões metropolitanas</h4>
              <p className="text-foreground/80 text-sm mb-2">
                <strong>Apps TOP:</strong> Todos funcionam (Tinder, Bumble, Happn, Hinge, etc.)
              </p>
              <p className="text-foreground/80 text-sm mb-2">
                Vantagens: Volume absurdo de opções, diversidade, apps nichados também funcionam.<br />
                Desvantagens: Competição feroz, "paradoxo da escolha" (tanta opção que ninguém decide).
              </p>
              <p className="text-foreground/80 text-sm">
                <strong>Estratégia vencedora:</strong> Seja específico em bio. Com 100.000 perfis, 
                destaque é tudo. Mulheres em capitais filtram rápido — dê motivo para pausarem em você.
              </p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">🏘️ Cidades médias (100k-500k habitantes)</h4>
              <p className="text-foreground/80 text-sm mb-2">
                <strong>Apps TOP:</strong> Tinder, Bumble, ParPerfeito, Facebook Dating
              </p>
              <p className="text-foreground/80 text-sm mb-2">
                Sweet spot. Opções suficientes, mas não avassaladoras. Facebook Dating funciona 
                MUITO BEM aqui — usa conexões sociais reais (amigos de amigos).
              </p>
              <p className="text-foreground/80 text-sm">
                <strong>Estratégia vencedora:</strong> Expanda raio para 50-80km. Cidades vizinhas 
                aumentam matches em 200%. Mulheres de cidades médias aceitam deslocamento curto.
              </p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">🌳 Interior e cidades pequenas (-100k)</h4>
              <p className="text-foreground/80 text-sm mb-2">
                <strong>Apps TOP:</strong> Facebook Dating, Badoo, POF, Tinder (raio ampliado)
              </p>
              <p className="text-foreground/80 text-sm mb-2">
                Aqui a estratégia muda completamente. Apps internacionais (Badoo, POF) têm mais 
                penetração em cidades pequenas brasileiras. Facebook Dating é OURO — todo mundo 
                está no Face, mesmo sem baixar app de namoro.
              </p>
              <p className="text-foreground/80 text-sm mb-3">
                <strong>Estratégias avançadas:</strong>
              </p>
              <ul className="text-foreground/80 text-sm space-y-1 list-disc list-inside">
                <li>Aumente raio para 100-150km (sim, é muito, mas necessário)</li>
                <li>Use apps em finais de semana (pessoal viaja para cidade maior)</li>
                <li>Mencione que tem carro/mobilidade (remove barreira logística)</li>
                <li>Instagram como complemento — em cidade pequena, redes sociais {'>'}apps</li>
              </ul>
            </div>
          </div>

          <div className="bg-warning/10 border-l-4 border-warning p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-foreground mb-2">⚠️ Alerta para interior:</h3>
            <p className="text-foreground/80 mb-2">
              Em cidades pequenas, <strong>privacidade é quase zero</strong>. Todo mundo conhece todo mundo. 
              Seu perfil será visto por conhecidos, ex, parentes de amigos. Aceite isso ou não use apps.
            </p>
            <p className="text-foreground/80 mb-0">
              <strong>Solução:</strong> Seja discreto mas honesto. Esconder não funciona (vão te achar). 
              Perfil respeitoso evita fofoca. 68% das mulheres do interior checam "o que falam dele na cidade" 
              antes de aceitar encontro.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-3">Mitos sobre apps no interior:</h3>
          <ul className="space-y-2 text-foreground/80 mb-6">
            <li>✗ "Não tem ninguém no app" — Tem, mas precisa ampliar raio e paciência</li>
            <li>✗ "Só funciona em capital" — Taxa de conversão match→encontro é maior no interior</li>
            <li>✗ "Vou encontrar só fake" — Cidade pequena = menos fake (todo mundo se conhece)</li>
            <li>✓ "Preciso complementar com redes sociais" — VERDADE. Instagram é essencial</li>
          </ul>

          <p className="text-foreground/80 mb-6">
            <strong>Verdade final:</strong> Apps no interior exigem mais paciência, mas menos competição. 
            Qualidade do perfil conta 10x mais. Um homem bem apresentado em cidade de 30mil tem mais 
            sucesso que homem mediano em SP com 12 milhões.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">
              🎉 Parabéns! Você completou o quiz
            </h3>
            <p className="text-foreground/80 mb-4">
              Agora você sabe exatamente qual app de namoro funciona melhor para seu perfil, 
              idade, localização e objetivos.
            </p>
            <Button size="lg" className="group">
              Ver Resultado Personalizado
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>
        </article>

        {/* Quiz Options */}
        <div className="space-y-6 mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Onde você mora?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <QuizOption
              title="Capital"
              description="São Paulo, Rio, capitais e regiões metropolitanas"
              href="/melhores-apps-para-homens-em-sao-paulo-capital"
              icon={<Building2 size={24} />}
            />
            
            <QuizOption
              title="Cidade média"
              description="100k-500k habitantes, cidades do interior desenvolvidas"
              href="/apps-para-homens-em-cidades-medias-brasil"
              icon={<HomeIcon size={24} />}
            />
            
            <QuizOption
              title="Interior"
              description="Cidades pequenas, menos de 100k habitantes"
              href="/como-conhecer-mulheres-no-interior-usando-apps"
              icon={<TreePine size={24} />}
            />
          </div>
        </div>
      </QuizLayout>
    </>
  );
};

export default QuizPage5;

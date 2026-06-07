import QuizLayout from "@/components/QuizLayout";
import QuizOption from "@/components/QuizOption";
import { Helmet } from "react-helmet";
import { Calendar, CalendarCheck, CalendarDays, CalendarX2 } from "lucide-react";
import { UnderFirstParagraphAd, MidContentAd, InContent5Ad } from "@/components/EzoicAd";

const QuizPage3 = () => {
  return (
    <>
      <Helmet>
        <title>Quantos encontros por mês é ideal para homens em apps de namoro? | Beijo da Rua</title>
        <meta name="description" content="Descubra o equilíbrio ideal entre vida real e apps de namoro, e escolha plataformas conforme sua disponibilidade de tempo." />
      </Helmet>
      
      <QuizLayout 
        title="Com que frequência você sai em encontros?"
        description="Seu ritmo de vida define qual app usar"
        progress={60}
      >
        {/* Quiz Options - movidas para o topo */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Qual sua frequência ideal de encontros?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <QuizOption
              title="Quase nunca"
              description="0-2 encontros por mês, preciso de apps seletivos"
              href="/melhores-apps-de-namoro-para-homens-apos-os-35-anos-brasil/"
              icon={<CalendarX2 size={24} />}
            />
            
            <QuizOption
              title="De vez em quando"
              description="3-5 encontros por mês, equilíbrio é importante"
              href="/melhores-apps-de-namoro-para-homens-apos-os-35-anos-brasil/"
              icon={<Calendar size={24} />}
            />
            
            <QuizOption
              title="Frequentemente"
              description="6-10 encontros por mês, tenho bastante tempo"
              href="/melhores-apps-de-namoro-para-homens-apos-os-35-anos-brasil/"
              icon={<CalendarDays size={24} />}
            />
            
            <QuizOption
              title="Sempre"
              description="10+ encontros por mês, preciso otimizar"
              href="/melhores-apps-de-namoro-para-homens-apos-os-35-anos-brasil/"
              icon={<CalendarCheck size={24} />}
            />
          </div>
        </div>

        {/* Educational Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            O equilíbrio perfeito entre apps e vida real
          </h2>
          
          <p className="text-foreground/80 mb-4">
            A indústria de apps de namoro quer que você acredite que precisa estar online 24/7. 
            <strong>Mentira.</strong> Estudos mostram que homens que saem demais em encontros têm 
            as mesmas taxas de sucesso (ou pior) que aqueles seletivos e estratégicos.
          </p>

          {/* Under First Paragraph Ad */}
          <UnderFirstParagraphAd />

          <div className="bg-warning/10 border-l-4 border-warning p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-foreground mb-2">⚠️ Alerta de burnout:</h3>
            <p className="text-foreground/80 mb-2">
              Ir em mais de 8 encontros diferentes por mês aumenta fadiga emocional em 73% e 
              reduz capacidade de identificar conexões reais em 61%. Qualidade {'>'} Quantidade sempre.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-3">Apps ideais por ritmo de vida:</h3>
          
          <div className="space-y-4 mb-6">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">📅 Quase nunca (0-2 por mês)</h4>
              <p className="text-foreground/80 text-sm mb-2">
                <strong>Apps ideais:</strong> Coffee Meets Bagel, Once, Hinge
              </p>
              <p className="text-foreground/80 text-sm">
                Esses apps limitam matches por dia, forçando seletividade. Perfeito para quem 
                tem rotina corrida ou prefere focar em poucos prospects de qualidade. Homens 
                com 0-2 encontros/mês têm 89% mais sucesso em apps "lentos".
              </p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">🗓️ De vez em quando (3-5 por mês)</h4>
              <p className="text-foreground/80 text-sm mb-2">
                <strong>Apps ideais:</strong> Bumble, OkCupid, Happn
              </p>
              <p className="text-foreground/80 text-sm">
                Equilíbrio perfeito. Apps com opções, mas não avassaladores. Permite testar 
                compatibilidade com várias pessoas sem virar full-time job. Taxa ideal segundo 
                pesquisas: 4 encontros/mês = 67% mais chances de relacionamento duradouro.
              </p>
            </div>

            {/* Mid Content Ad */}
            <MidContentAd />

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">📆 Frequentemente (6-10 por mês)</h4>
              <p className="text-foreground/80 text-sm mb-2">
                <strong>Apps ideais:</strong> Tinder, Badoo, POF
              </p>
              <p className="text-foreground/80 text-sm">
                Para quem tem tempo e energia. Apps com volume alto de matches. Atenção: 
                mais de 10 encontros/mês reduz satisfação em 54%. Mantenha limite consciente.
              </p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">🔄 Sempre (10+ por mês)</h4>
              <p className="text-foreground/80 text-sm mb-2">
                <strong>Atenção:</strong> Risco alto de burnout
              </p>
              <p className="text-foreground/80 text-sm">
                Se você está aqui, provavelmente precisa reduzir. Apps rápidos (Tinder, Happn) 
                funcionam, mas considere pausas regulares. 82% dos "serial daters" relatam 
                cansaço emocional e dificuldade em conectar genuinamente.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-3">Sinais de que você precisa desacelerar:</h3>
          <ul className="space-y-2 text-foreground/80 mb-6">
            <li>✗ Confunde nome das mulheres nos encontros</li>
            <li>✗ Sente que todo mundo parece "igual"</li>
            <li>✗ Encontros viraram obrigação, não empolgação</li>
            <li>✗ Está sempre cansado demais para fazer primeira impressão boa</li>
          </ul>

          {/* InContent 5 Ad */}
          <InContent5Ad />

          <p className="text-foreground/80">
            <strong>Conselho de ouro:</strong> O app certo não é o que te dá mais matches, 
            é o que respeita seu tempo e estilo de vida. Namoro online é maratona, não sprint.
          </p>
        </article>
      </QuizLayout>
    </>
  );
};

export default QuizPage3;

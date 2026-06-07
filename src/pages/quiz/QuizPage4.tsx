import QuizLayout from "@/components/QuizLayout";
import QuizOption from "@/components/QuizOption";
import { Helmet } from "react-helmet";
import { Baby, Users2, Briefcase, GraduationCap } from "lucide-react";
import { UnderFirstParagraphAd, MidContentAd, InContent5Ad } from "@/components/EzoicAd";

const QuizPage4 = () => {
  return (
    <>
      <Helmet>
        <title>Melhores apps de namoro para homens após os 35 anos no Brasil | Beijo da Rua</title>
        <meta name="description" content="Descubra por que Tinder não funciona depois dos 35 e quais apps são ideais para cada faixa etária masculina no Brasil." />
      </Helmet>
      
      <QuizLayout 
        title="Qual sua faixa etária?"
        description="Cada idade tem apps que funcionam melhor"
        progress={80}
      >
        {/* Quiz Options - movidas para o topo */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Selecione sua faixa etária:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <QuizOption
              title="18-24 anos"
              description="Apps populares funcionam muito bem nessa idade"
              href="/apps-de-namoro-para-homens-no-interior-do-brasil-vale-a-pena/"
              icon={<Baby size={24} />}
            />
            
            <QuizOption
              title="25-34 anos"
              description="Equilíbrio entre casual e sério"
              href="/apps-de-namoro-para-homens-no-interior-do-brasil-vale-a-pena/"
              icon={<GraduationCap size={24} />}
            />
            
            <QuizOption
              title="35-44 anos"
              description="Foco em apps que valorizam maturidade"
              href="/apps-de-namoro-para-homens-no-interior-do-brasil-vale-a-pena/"
              icon={<Briefcase size={24} />}
            />
            
            <QuizOption
              title="45+ anos"
              description="Apps especializados em relacionamentos maduros"
              href="/apps-de-namoro-para-homens-no-interior-do-brasil-vale-a-pena/"
              icon={<Users2 size={24} />}
            />
          </div>
        </div>

        {/* Educational Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            A verdade sobre idade e apps de namoro no Brasil
          </h2>
          
          <p className="text-foreground/80 mb-4">
            Vamos direto ao ponto: <strong>Tinder após os 35 é como usar tênis de corrida para 
            jogar futebol</strong> — até funciona, mas você está em desvantagem. Dados brasileiros 
            mostram que homens 35+ têm 72% menos matches no Tinder comparado a apps segmentados por idade.
          </p>

          {/* Under First Paragraph Ad */}
          <UnderFirstParagraphAd />

          <div className="bg-destructive/10 border-l-4 border-destructive p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-foreground mb-2">🚨 Erro crítico que homens cometem:</h3>
            <p className="text-foreground/80 mb-0">
              Ficar no mesmo app dos 25 aos 45 anos. Algoritmos de apps como Tinder priorizam 
              usuários mais jovens (18-28). Resultado: homens maduros pagam assinatura premium 
              para competir em algoritmo viciado contra eles. Desperdício total de dinheiro.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-3">Apps ideais por faixa etária:</h3>
          
          <div className="space-y-4 mb-6">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">🎓 18-24 anos</h4>
              <p className="text-foreground/80 text-sm mb-2">
                <strong>Apps TOP:</strong> Tinder, Bumble, Happn, Inner Circle
              </p>
              <p className="text-foreground/80 text-sm mb-2">
                Nessa idade, apps populares funcionam MUITO BEM. 89% das mulheres 18-24 estão 
                nesses apps. Aproveite algoritmo favorável e alta atividade.
              </p>
              <p className="text-foreground/80 text-sm">
                <strong>Dica:</strong> Fotos de qualidade batem bio elaborada. Essa faixa decide 
                em 3 segundos. Invista em fotos profissionais.
              </p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">💼 25-34 anos</h4>
              <p className="text-foreground/80 text-sm mb-2">
                <strong>Apps TOP:</strong> Bumble, Hinge, Coffee Meets Bagel, OkCupid, ParPerfeito
              </p>
              <p className="text-foreground/80 text-sm mb-2">
                Zona de transição. Metade ainda busca casual, metade quer sério. Apps com perfil 
                detalhado funcionam melhor — permite filtrar o que você quer.
              </p>
              <p className="text-foreground/80 text-sm">
                <strong>Dica:</strong> Seja MUITO claro sobre intenções. Ambiguidade mata matches 
                nessa faixa. 76% das mulheres 25-34 checam bio antes de dar match.
              </p>
            </div>

            {/* Mid Content Ad */}
            <MidContentAd />

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">👔 35-44 anos</h4>
              <p className="text-foreground/80 text-sm mb-2">
                <strong>Apps TOP:</strong> ParPerfeito, eHarmony, EliteSingles, Bumble (filtro 35+)
              </p>
              <p className="text-foreground/80 text-sm mb-2">
                FUJA DO TINDER. Sério. 67% dos homens 35+ relatam experiência frustrante. 
                Apps focados em relacionamento sério têm 4x mais mulheres da sua idade buscando o mesmo.
              </p>
              <p className="text-foreground/80 text-sm">
                <strong>Dica:</strong> Mostre estabilidade (sem parecer chato). Mulheres dessa faixa 
                valorizam carreira estável, hobbies interessantes, planos de vida claros.
              </p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">🎯 45+ anos</h4>
              <p className="text-foreground/80 text-sm mb-2">
                <strong>Apps TOP:</strong> ParPerfeito, OurTime, SilverSingles, eHarmony
              </p>
              <p className="text-foreground/80 text-sm mb-2">
                Apps especializados em 45+ têm 5x mais sucesso que apps generalistas. Por quê? 
                Mulheres dessa faixa também estão lá, buscando homens da mesma idade.
              </p>
              <p className="text-foreground/80 text-sm">
                <strong>Dica:</strong> Evite fotos de 10 anos atrás. Transparência sobre idade 
                aumenta confiança em 91%. Mulheres maduras valorizam honestidade acima de tudo.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-3">Por que Tinder falha após os 35?</h3>
          <ul className="space-y-2 text-foreground/80 mb-6">
            <li>✗ Algoritmo prioriza usuários novos (18-28) automaticamente</li>
            <li>✗ Base de usuárias 35+ é apenas 12% vs 64% nos apps especializados</li>
            <li>✗ Cultura do app favorece decisões rápidas = idade é filtro negativo</li>
            <li>✗ Assinatura premium não muda algoritmo, só te mostra mais (perda de $)</li>
          </ul>

          {/* InContent 5 Ad */}
          <InContent5Ad />

          <p className="text-foreground/80">
            <strong>Regra de ouro:</strong> Use apps onde mulheres da sua faixa etária estão ativas. 
            Idade é vantagem em apps certos (maturidade, estabilidade) e desvantagem em apps errados.
          </p>
        </article>
      </QuizLayout>
    </>
  );
};

export default QuizPage4;

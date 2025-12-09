import QuizLayout from "@/components/QuizLayout";
import QuizOption from "@/components/QuizOption";
import { Helmet } from "react-helmet";
import { MessageSquare, UserCheck, ShieldAlert, Pause } from "lucide-react";
import { UnderFirstParagraphAd, MidContentAd, InContent5Ad } from "@/components/EzoicAd";

const QuizPage2 = () => {
  return (
    <>
      <Helmet>
        <title>Como homens tímidos podem ter sucesso em apps de namoro | Beijo da Rua</title>
        <meta name="description" content="Guia completo sobre como iniciar conversas em apps de namoro conforme seu estilo: extrovertido, tímido ou preferindo que ela dê o primeiro passo." />
      </Helmet>
      
      <QuizLayout 
        title="Como você se sente ao iniciar conversas?"
        description="Sua personalidade define a melhor estratégia"
        progress={40}
      >
        {/* Educational Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            O guia definitivo para diferentes perfis masculinos
          </h2>
          
          <p className="text-foreground/80 mb-4">
            A maioria dos guias de namoro online ignora um fato: <strong>não existe uma fórmula única</strong>. 
            O que funciona para um homem extrovertido pode paralisar um introvertido — e vice-versa.
          </p>

          {/* Under First Paragraph Ad */}
          <UnderFirstParagraphAd />

          <div className="bg-success/10 border-l-4 border-success p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-foreground mb-2">💡 Verdade que ninguém conta:</h3>
            <p className="text-foreground/80 mb-0">
              Aplicativos como Bumble e Coffee Meets Bagel foram criados ESPECIFICAMENTE para homens 
              que não gostam de ficar "caçando" conversa. No Bumble, a mulher SEMPRE dá o primeiro oi. 
              No Coffee Meets Bagel, você recebe apenas alguns matches por dia, sem pressão.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-3">Estratégias por perfil:</h3>
          
          <div className="space-y-4 mb-6">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">🔥 Extrovertidos</h4>
              <p className="text-foreground/80 text-sm">
                Apps ideais: Tinder, Happn, Badoo. Use abertura criativa, GIFs, perguntas inusitadas. 
                Estatísticas: 78% de taxa de resposta com mensagens personalizadas vs 12% com "oi, tudo bem?".
              </p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">🤝 Preferem que ela inicie</h4>
              <p className="text-foreground/80 text-sm">
                Apps ideais: Bumble (mulher sempre começa), Hinge (interações em fotos/respostas). 
                Vantagem: 3x mais chances de conversa fluir quando ela toma iniciativa.
              </p>
            </div>

            {/* Mid Content Ad */}
            <MidContentAd />

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">😰 Tímidos/Inseguros</h4>
              <p className="text-foreground/80 text-sm">
                Apps ideais: Coffee Meets Bagel, Once, OkCupid (perfis detalhados = assunto pronto). 
                Dica: Começar com pergunta sobre algo do perfil dela reduz ansiedade em 67%.
              </p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">⏸️ Evitam conversa</h4>
              <p className="text-foreground/80 text-sm">
                Apps ideais: Thursday (encontros rápidos), Happn (baseado em cruzar na rua). 
                Foco em ação, não em chat infinito.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-3">Frases de abertura com maior taxa de resposta:</h3>
          <ul className="space-y-2 text-foreground/80 mb-6">
            <li>✓ "Vi que você gosta de [interesse do perfil]. Você já [pergunta relacionada]?" (68% resposta)</li>
            <li>✓ "Sua bio me fez rir. [Comentário específico sobre a bio]" (61% resposta)</li>
            <li>✓ "Questão importante: [pergunta engraçada sobre foto]" (57% resposta)</li>
            <li>✗ "Oi" / "Tudo bem?" / "Linda" (8-12% resposta)</li>
          </ul>

          {/* InContent 5 Ad */}
          <InContent5Ad />

          <p className="text-foreground/80">
            <strong>Lembre-se:</strong> Não existe certo ou errado. O app certo é aquele que respeita 
            sua personalidade e não te força a ser quem você não é.
          </p>
        </article>

        {/* Quiz Options */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Como você prefere interagir?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <QuizOption
              title="Adoro puxar assunto"
              description="Sou comunicativo e gosto de tomar iniciativa"
              href="/frases-para-iniciar-conversa-app-namoro-homem"
              icon={<MessageSquare size={24} />}
            />
            
            <QuizOption
              title="Prefiro que ela comece"
              description="Funciono melhor quando a mulher dá o primeiro passo"
              href="/apps-para-homens-que-odeiam-dar-primeiro-oi"
              icon={<UserCheck size={24} />}
            />
            
            <QuizOption
              title="Me sinto inseguro"
              description="Preciso de ajuda para saber o que falar"
              href="/como-superar-a-timidez-em-apps-de-namoro"
              icon={<ShieldAlert size={24} />}
            />
            
            <QuizOption
              title="Evito conversa longa"
              description="Prefiro marcar encontro rápido do que ficar conversando"
              href="/apps-que-nao-exigem-conversa-para-match"
              icon={<Pause size={24} />}
            />
          </div>
        </div>
      </QuizLayout>
    </>
  );
};

export default QuizPage2;

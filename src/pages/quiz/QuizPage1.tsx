import QuizLayout from "@/components/QuizLayout";
import QuizOption from "@/components/QuizOption";
import { Helmet } from "react-helmet";
import { Heart, Users, Home, MessageCircle } from "lucide-react";

const QuizPage1 = () => {
  return (
    <>
      <Helmet>
        <title>Qual seu objetivo ao usar apps de namoro? | Beijo da Rua</title>
        <meta name="description" content="Descubra qual app de namoro é ideal para você baseado no seu objetivo: encontros casuais, namoro sério, casamento ou apenas conhecer pessoas." />
      </Helmet>
      
      <QuizLayout 
        title="Qual seu objetivo ao usar apps de namoro?"
        description="Seu objetivo define qual app funciona melhor para você"
        progress={20}
      >
        {/* Quiz Options - movidas para o topo */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Escolha seu objetivo principal:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <QuizOption
              title="Encontros casuais"
              description="Quero me divertir, sem pressão de compromisso"
              href="/como-iniciar-conversas-apps-namoro-que-geram-respostas/"
              icon={<Heart size={24} />}
            />
            
            <QuizOption
              title="Namoro sério"
              description="Busco uma parceira para relacionamento estável"
              href="/como-iniciar-conversas-apps-namoro-que-geram-respostas/"
              icon={<Users size={24} />}
            />
            
            <QuizOption
              title="Casamento"
              description="Quero encontrar alguém para construir uma vida junto"
              href="/como-iniciar-conversas-apps-namoro-que-geram-respostas/"
              icon={<Home size={24} />}
            />
            
            <QuizOption
              title="Só conhecer gente"
              description="Expandir círculo social, amizades e depois vejo"
              href="/como-iniciar-conversas-apps-namoro-que-geram-respostas/"
              icon={<MessageCircle size={24} />}
            />
          </div>
        </div>

        {/* Educational Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Como o objetivo define o app certo para você
          </h2>
          
          <p className="text-foreground/80 mb-4">
            A maioria dos homens comete um erro crucial: usar o mesmo app para objetivos diferentes. 
            Cada plataforma foi criada com um público e propósito específicos em mente.
          </p>

          <p className="text-foreground/80 mb-4">
            <strong>Encontros casuais</strong> funcionam melhor em apps com decisões rápidas e visual forte. 
            <strong>Namoro sério</strong> exige plataformas com perfis detalhados e compatibilidade. 
            <strong>Casamento</strong> precisa de apps que filtram por valores e objetivos de vida. 
            <strong>Conhecer pessoas</strong> vale para quem não quer pressão de romance imediato.
          </p>

          <div className="bg-accent/30 border-l-4 border-primary p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-foreground mb-2">📊 Dados importantes:</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>• 67% dos homens que falham em apps estão usando a plataforma errada para seu objetivo</li>
              <li>• Homens focados em namoro sério têm 3x mais sucesso em apps específicos para isso</li>
              <li>• Usar app casual para relacionamento sério reduz chances de match em 54%</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-3">Erros comuns que homens cometem:</h3>
          <ul className="space-y-2 text-foreground/80 mb-6">
            <li>✗ Usar Tinder esperando casamento</li>
            <li>✗ Ficar em apps casuais quando quer algo sério</li>
            <li>✗ Não deixar claro o objetivo no perfil</li>
            <li>✗ Mudar de objetivo conforme o match (desperdício de tempo de todos)</li>
          </ul>

          <p className="text-foreground/80 mb-6">
            <strong>Dica profissional:</strong> Seja honesto com você mesmo sobre o que busca AGORA. 
            Seu objetivo pode mudar com o tempo, e tudo bem — mas usar o app certo para cada fase 
            economiza meses de frustração.
          </p>
        </article>
      </QuizLayout>
    </>
  );
};

export default QuizPage1;

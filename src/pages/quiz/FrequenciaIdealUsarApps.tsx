import { Helmet } from "react-helmet";
import QuizLayout from "@/components/QuizLayout";
import QuizOption from "@/components/QuizOption";
import { Zap, BarChart, TrendingUp, Target } from "lucide-react";

const FrequenciaIdealUsarApps = () => {
  return (
    <>
      <Helmet>
        <title>Frequência Ideal Para Usar Apps de Namoro | Guia Baseado em Dados</title>
        <meta name="description" content="Descubra quantas vezes por semana você deve usar apps de namoro para maximizar resultados sem burnout. Estratégias baseadas em pesquisas reais." />
      </Helmet>
      
      <QuizLayout 
        title="Com Que Frequência Você Usa Apps?"
        description="O equilíbrio certo entre quantidade e qualidade"
        progress={60}
      >
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Como você prefere usar os apps?
          </h2>
          
          <div className="grid gap-4">
            <QuizOption
              icon={<Zap size={32} />}
              title="Uso Intensivo"
              description="Várias vezes ao dia, sempre que tenho um tempo livre"
              href="/tipo-mensagem-enviar-primeiro"
            />
            
            <QuizOption
              icon={<BarChart size={32} />}
              title="Uso Regular"
              description="1-2 vezes por dia, em horários específicos"
              href="/tipo-mensagem-enviar-primeiro"
            />
            
            <QuizOption
              icon={<TrendingUp size={32} />}
              title="Uso Moderado"
              description="Algumas vezes por semana, quando tenho tempo de qualidade"
              href="/tipo-mensagem-enviar-primeiro"
            />
            
            <QuizOption
              icon={<Target size={32} />}
              title="Uso Esporádico"
              description="Só quando estou realmente interessado, sem pressão"
              href="/tipo-mensagem-enviar-primeiro"
            />
          </div>
        </div>

        <article className="prose prose-lg max-w-none mb-12">
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Frequência vs. Qualidade: O Equilíbrio Perfeito
            </h2>
            <p className="text-muted-foreground mb-4">
              Um dos maiores mitos sobre apps de namoro é que você precisa estar online o tempo todo. 
              Pesquisas mostram que a frequência ideal varia conforme seu objetivo e personalidade. 
              Mais importante que quantidade é a consistência e qualidade das interações.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
              <p className="text-sm font-semibold text-foreground mb-2">📊 Dados Sobre Frequência:</p>
              <ul className="text-sm text-muted-foreground space-y-1 mb-0">
                <li>• Usuários que checam 2-3x por dia têm 50% mais matches que usuários esporádicos</li>
                <li>• Excesso de uso (5+ horas/dia) diminui qualidade dos matches em 35%</li>
                <li>• 15-30 minutos de uso focado &gt; 2 horas de uso disperso</li>
                <li>• Algoritmos favorecem usuários com atividade regular e moderada</li>
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Estratégias de Frequência Por Perfil
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Iniciante (Primeira Semana):</strong> Use diariamente 
                por 30-45 minutos para dar boost inicial no algoritmo e entender o funcionamento do app.
              </p>
              <p>
                <strong className="text-foreground">Tímido/Introvertido:</strong> 2-3 sessões por semana 
                de 20-30 minutos cada. Foco total em qualidade de conversas, não quantidade.
              </p>
              <p>
                <strong className="text-foreground">Ocupado/Profissional:</strong> Sessões curtas (10-15 min) 
                2x ao dia - manhã e noite. Responda mensagens rapidamente para manter interesse.
              </p>
              <p>
                <strong className="text-foreground">Buscando Relacionamento Sério:</strong> Uso moderado 
                (3-4x/semana) com foco em conversas profundas e seleção criteriosa de matches.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              ⚠️ Sinais de Que Você Está Usando Demais
            </h3>
            <ul className="text-muted-foreground space-y-3">
              <li className="flex items-start">
                <span className="text-destructive mr-2">✗</span>
                <span>Sente ansiedade ao não receber notificações por algumas horas</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-2">✗</span>
                <span>Dá like em todo mundo sem realmente analisar os perfis</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-2">✗</span>
                <span>Mantém múltiplas conversas superficiais sem levar nenhuma adiante</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-2">✗</span>
                <span>Sente cansaço ou frustração ao abrir o app</span>
              </li>
            </ul>
          </div>
        </article>
      </QuizLayout>
    </>
  );
};

export default FrequenciaIdealUsarApps;

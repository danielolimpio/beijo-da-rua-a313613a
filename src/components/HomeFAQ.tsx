import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqItems = [
  {
    question: "Por que os relacionamentos que começam online duram mais?",
    answer: "Segundo pesquisas publicadas no Journal of Marriage and Family, casais que se conhecem online têm taxas de divórcio significativamente menores nos primeiros cinco anos. Isso acontece porque as plataformas permitem filtrar intenções desde o início, encontrando pessoas com valores e objetivos alinhados."
  },
  {
    question: "Quanto custa investir em namoro online comparado ao tradicional?",
    answer: "Um encontro típico no Brasil (jantar, bebidas, passeio) ultrapassa R$ 150. Saindo duas vezes por semana durante um ano, você investiria mais de R$ 15.000. Já com um bom site de namoro, R$ 30 a R$ 80 por mês dá acesso a centenas de perfis compatíveis e ferramentas que aumentam suas chances."
  },
  {
    question: "Vale a pena pagar por assinaturas premium em apps de namoro?",
    answer: "Sim, especialmente se você busca relacionamento sério. Versões premium oferecem mensagens ilimitadas, visualização de quem curtiu seu perfil, filtros avançados (escolaridade, religião, desejo de filhos) e maior visibilidade no feed. É um investimento em seu bem-estar emocional e futuro afetivo."
  },
  {
    question: "Como criar um perfil que atraia mulheres sérias?",
    answer: "Use 3 a 5 fotos de boa qualidade: uma de rosto nítida, uma mostrando seu estilo de vida, e uma em grupo. Na bio, seja específico e humano — em vez de 'procuro alguém legal', diga algo como 'busco uma parceira que curta café da manhã tardio aos domingos'. Mostre intenção e vulnerabilidade."
  },
  {
    question: "Quais critérios usar para escolher o melhor app de namoro?",
    answer: "Considere: 1) Intenção clara da plataforma (sério vs casual); 2) Qualidade dos perfis (verificação, menos perfis falsos); 3) Algoritmos de compatibilidade baseados em questionários; 4) Recursos de conversa como sugestões de mensagens e videochamadas integradas."
  },
  {
    question: "O que há de novo no namoro online em 2026?",
    answer: "O namoro digital incorpora inteligência artificial generativa, análise de tom de voz em mensagens de áudio e eventos híbridos (online + presenciais) organizados por apps. Apps modernos oferecem coaching de namoro integrado e prompts criativos para gerar conexões mais profundas."
  }
];

const HomeFAQ = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section className="py-16 bg-gradient-to-br from-muted/30 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-warning/10 px-4 py-2 rounded-full mb-4">
                <HelpCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-warning bg-clip-text text-transparent">
                  Tire Suas Dúvidas
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Perguntas Frequentes sobre{" "}
                <span className="bg-gradient-to-r from-primary to-warning bg-clip-text text-transparent">
                  Namoro Online
                </span>
              </h2>
            </div>

            {/* FAQ Accordion */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-warning/50 to-primary/50 rounded-2xl p-[1px]">
                <div className="absolute inset-[1px] bg-card rounded-2xl" />
              </div>
              <div className="relative bg-card rounded-2xl p-6 md:p-8 shadow-lg">
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border-b border-border/50 last:border-0"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-5 group">
                        <span className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                          {item.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-5">
                        <p className="text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeFAQ;

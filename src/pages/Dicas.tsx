import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import StructuredData from "@/components/StructuredData";
import { getWebSiteSchema } from "@/lib/structuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MessageCircle, Camera, Shield, Star, TrendingUp } from "lucide-react";

const Dicas = () => {
  const dicas = [
    {
      icon: Camera,
      title: "Fotos que Funcionam de Verdade",
      description: "Aprenda a escolher e editar fotos que aumentam seus matches em até 300%. Descubra os erros fatais que 87% dos homens cometem.",
      topics: [
        "Primeira foto: regras de ouro",
        "Quantas fotos usar (e em qual ordem)",
        "Selfie funciona? A verdade brutal",
        "Fotos com amigos: quando usar e quando evitar",
        "Edição: até onde você pode ir sem parecer fake"
      ]
    },
    {
      icon: MessageCircle,
      title: "Como Iniciar Conversas Que Geram Encontros",
      description: "Estratégias comprovadas para sair do 'oi, tudo bem?' e criar conexão real. Taxa de resposta aumenta 5x com essas técnicas.",
      topics: [
        "Por que 'oi, tudo bem?' mata 90% das conversas",
        "Fórmula das primeiras mensagens que funcionam",
        "Como ler o perfil dela e criar conexão instantânea",
        "Quando usar humor (e quando NÃO usar)",
        "Transitando do app para WhatsApp sem parecer apressado"
      ]
    },
    {
      icon: Heart,
      title: "Bio Perfeita: O Que Escrever (e O Que Nunca Escrever)",
      description: "Sua bio é lida em 3 segundos. Aprenda a usar cada palavra a seu favor. Exemplos reais de bios que convertem.",
      topics: [
        "Tamanho ideal da bio (muito texto = rejeição)",
        "Clichês que você deve evitar a todo custo",
        "Como mostrar valor sem parecer arrogante",
        "Humor na bio: acerta ou afasta?",
        "Call-to-action: como terminar a bio"
      ]
    },
    {
      icon: Shield,
      title: "Segurança e Red Flags",
      description: "Como identificar perfis falsos, golpes e situações de risco. Proteja-se e suas informações pessoais.",
      topics: [
        "Sinais de perfil fake (checklist completo)",
        "Golpes mais comuns em apps de namoro",
        "O que NUNCA compartilhar antes do primeiro encontro",
        "Como fazer verificação básica de perfis",
        "Quando desconfiar e bloquear"
      ]
    },
    {
      icon: Star,
      title: "Estratégia de Matches: Qualidade vs Quantidade",
      description: "Dar like em todo mundo NÃO funciona. Aprenda a estratégia correta para maximizar matches de qualidade.",
      topics: [
        "Algoritmo dos apps: como ele realmente funciona",
        "Por que dar like em todo mundo te prejudica",
        "Horários nobres: quando usar o app",
        "Super likes: quando valem a pena",
        "Como o boost realmente funciona (vale o investimento?)"
      ]
    },
    {
      icon: TrendingUp,
      title: "Do Match ao Primeiro Encontro",
      description: "Matched? Agora vem a parte crítica. Como conduzir a conversa até marcar o encontro sem parecer desesperado.",
      topics: [
        "Quanto tempo esperar antes de chamar para sair",
        "Como propor o encontro (frases que funcionam)",
        "Escolhendo o lugar ideal para o primeiro date",
        "Lidando com ghosting e falta de resposta",
        "Sinais de que ela quer te conhecer pessoalmente"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Dicas de Apps de Namoro - Estratégias Que Funcionam | Beijo da Rua</title>
        <meta 
          name="description" 
          content="Dicas práticas e comprovadas para ter sucesso em apps de namoro. Aprenda sobre fotos, bio perfeita, como iniciar conversas e muito mais." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <StructuredData data={getWebSiteSchema()} />
        <Header />
        <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
        <DynamicBreadcrumb />

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-secondary/30 via-accent/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Dicas de Apps de Namoro
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Estratégias práticas e comprovadas para aumentar seus matches, 
                iniciar conversas que geram encontros e ter sucesso real nos apps de namoro.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <span>Baseado em dados reais</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>Técnicas comprovadas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dicas Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dicas.map((dica, index) => {
                const Icon = dica.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl mb-2">{dica.title}</CardTitle>
                      <CardDescription className="text-base">
                        {dica.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-sm text-foreground mb-3">
                        Você vai aprender:
                      </h4>
                      <ul className="space-y-2">
                        {dica.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Pronto Para Melhorar Seus Resultados?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Comece descobrindo qual app de namoro é perfeito para o seu perfil
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.location.href = '/quiz'}
              >
                Fazer Quiz Gratuito
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Dicas;
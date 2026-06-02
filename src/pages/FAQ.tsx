import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import StructuredData from "@/components/StructuredData";
import SEO from "@/components/SEO";
import { getWebSiteSchema, getFAQSchema } from "@/lib/structuredData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      category: "Sobre a Plataforma",
      questions: [
        {
          q: "O que é o Beijo da Rua?",
          a: "Beijo da Rua é um guia informativo dedicado a ajudar homens brasileiros a terem sucesso em apps de namoro. Oferecemos dicas, análises de apps e estratégias comprovadas para encontrar relacionamentos significativos."
        },
        {
          q: "O Beijo da Rua é gratuito?",
          a: "Sim! O acesso ao nosso conteúdo principal, incluindo artigos, dicas e o quiz de perfil, é totalmente gratuito. Oferecemos também recursos premium para quem busca orientação mais aprofundada."
        },
        {
          q: "Como funciona o quiz de perfil?",
          a: "Nosso quiz analisa suas preferências, objetivos e estilo de vida para recomendar os apps de namoro mais adequados para você. Leva apenas 5 minutos e o resultado é personalizado."
        }
      ]
    },
    {
      category: "Apps de Namoro",
      questions: [
        {
          q: "Quais apps de namoro vocês recomendam?",
          a: "Recomendamos diferentes apps baseados no seu perfil e objetivos. Entre os mais populares estão Tinder, Bumble, Happn, Par Perfeito e OkCupid. Cada um tem suas particularidades e público-alvo específico."
        },
        {
          q: "Apps de namoro funcionam no interior do Brasil?",
          a: "Sim! Embora a quantidade de usuários seja menor que nas capitais, apps como Tinder, Badoo e Par Perfeito têm boa presença em cidades do interior. Recomendamos usar múltiplos apps para ampliar suas chances."
        },
        {
          q: "Preciso pagar para ter sucesso em apps de namoro?",
          a: "Não necessariamente. É possível ter sucesso com versões gratuitas, mas as versões premium oferecem vantagens como ver quem deu match, super likes ilimitados e maior visibilidade do perfil."
        }
      ]
    },
    {
      category: "Perfil e Fotos",
      questions: [
        {
          q: "Como fazer um perfil atraente?",
          a: "Use fotos de qualidade que mostrem seu rosto claramente, inclua imagens fazendo atividades que você gosta, escreva uma bio autêntica e específica, e seja honesto sobre quem você é e o que procura."
        },
        {
          q: "Quantas fotos devo ter no perfil?",
          a: "Recomendamos ter entre 4 e 6 fotos variadas: uma foto de rosto sorrindo, uma de corpo inteiro, uma fazendo algo que você gosta, e pelo menos uma com amigos ou em situação social."
        },
        {
          q: "Selfies são ruins para o perfil?",
          a: "Selfies não são proibidas, mas fotos tiradas por outras pessoas geralmente têm melhor qualidade e parecem mais naturais. Se usar selfie, evite ângulos ruins e ambientes desleixados."
        }
      ]
    },
    {
      category: "Conversas e Matches",
      questions: [
        {
          q: "Como começar uma conversa interessante?",
          a: "Leia o perfil da pessoa e faça uma pergunta ou comentário relacionado aos interesses dela. Evite 'oi, tudo bem?' genérico. Seja criativo, mostre que você se importou em conhecê-la."
        },
        {
          q: "Quanto tempo esperar para marcar um encontro?",
          a: "Não existe regra fixa, mas geralmente após 2-3 dias de conversas boas, quando há química, é um bom momento para sugerir um encontro casual como um café."
        },
        {
          q: "O que fazer se não recebo matches?",
          a: "Revise suas fotos (peça feedback de amigas), melhore sua bio, seja mais ativo no app (dê likes e envie mensagens), considere expandir seus critérios de busca e seja paciente."
        }
      ]
    },
    {
      category: "Segurança e Privacidade",
      questions: [
        {
          q: "Os apps de namoro são seguros?",
          a: "Apps respeitáveis têm medidas de segurança, mas você deve tomar precauções: não compartilhe informações pessoais muito cedo, marque primeiro encontro em local público, conte para amigos onde vai e confie nos seus instintos."
        },
        {
          q: "Como identificar perfis falsos?",
          a: "Desconfie de fotos perfeitas demais (podem ser de modelo), perfis com pouca informação, pessoas que rapidamente querem conversar fora do app ou pedem dinheiro/favores."
        },
        {
          q: "Posso usar o Beijo da Rua anonimamente?",
          a: "Sim, você pode navegar nosso site e usar nossos recursos sem criar conta. Caso queira acessar recursos personalizados, precisará criar um perfil, mas suas informações são protegidas."
        }
      ]
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      item =>
        item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Perguntas Frequentes (FAQ) | Beijo da Rua"
        description="Respostas para as dúvidas mais comuns sobre apps de namoro, perfis, conversas, segurança e muito mais."
        canonical="https://beijodarua.com.br/faq"
        keywords="faq apps namoro, dúvidas tinder, perguntas namoro online"
      />
      <StructuredData data={getWebSiteSchema()} />
      <StructuredData data={getFAQSchema(faqs.flatMap(c => c.questions))} />
      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
      <DynamicBreadcrumb />
      
      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Encontre respostas rápidas para as dúvidas mais comuns sobre apps de namoro
            </p>
            
            {/* Search Box */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar por palavra-chave..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">
                  Nenhuma pergunta encontrada. Tente buscar por outro termo.
                </p>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredFaqs.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h2 className="text-3xl font-bold text-foreground mb-6">
                      {category.category}
                    </h2>
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((item, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${categoryIndex}-${index}`}
                          className="bg-card rounded-xl shadow-custom-md px-6 border-none"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-6">
                            <span className="font-semibold text-foreground pr-4">
                              {item.q}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pb-6">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Não Encontrou Sua Resposta?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Entre em contato conosco e teremos prazer em ajudar você.
            </p>
            <a href="/contato/">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-bold">
                Falar Conosco
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;

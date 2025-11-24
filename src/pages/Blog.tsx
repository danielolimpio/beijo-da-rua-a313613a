import { Heart, Users, MessageCircle, Smartphone, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlogSidebar from "@/components/BlogSidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  {
    id: "conquista",
    title: "Conquista",
    description: "Aprenda a se aproximar, encantar e criar atração com respeito e autenticidade. Aqui você encontra dicas práticas de abordagem, linguagem corporal, cantadas que funcionam, como lidar com o nervosismo e se tornar um conquistador consciente — do primeiro \"oi\" ao primeiro encontro.",
    icon: Heart,
    color: "text-rose-500"
  },
  {
    id: "relacionamento",
    title: "Relacionamento",
    description: "Do namoro casual ao amor duradouro: entenda os segredos da convivência saudável, comunicação eficaz, sinais de compatibilidade e como transformar conexões em histórias reais. Artigos com insights psicológicos, dicas práticas e reflexões para quem quer ir além do flerte.",
    icon: Users,
    color: "text-purple-500"
  },
  {
    id: "paquera",
    title: "Paquera",
    description: "Domine a arte de quebrar o gelo com naturalidade. Descubra como identificar sinais de interesse, flertar sem forçar, iniciar conversas em qualquer lugar — na rua, em festas ou online — e transformar olhares em diálogos reais, sem medo de parecer invasivo ou desesperado.",
    icon: MessageCircle,
    color: "text-blue-500"
  },
  {
    id: "aplicativos",
    title: "Aplicativos",
    description: "Encontre o app ideal para seu estilo e objetivo amoroso. Reviews completos, dicas de perfil, estratégias para aumentar matches e evitar armadilhas dos principais apps de namoro — do Tinder ao Hinge — tudo atualizado para 2025 e adaptado ao público brasileiro.",
    icon: Smartphone,
    color: "text-green-500"
  },
  {
    id: "autoestima",
    title: "Autoestima",
    description: "Porque atração começa dentro de você. Aqui você trabalha sua confiança, supera inseguranças, aprende a se valorizar sem depender da validação alheia e constrói uma presença que atrai — não por fingimento, mas por autenticidade e equilíbrio emocional.",
    icon: Sparkles,
    color: "text-amber-500"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Blog Beijo da Rua
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conquista, relacionamentos e autoconfiança: tudo que você precisa para se destacar no mundo dos apps de namoro
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="grid md:grid-cols-2 gap-6">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <Card key={category.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <IconComponent className={`h-8 w-8 ${category.color}`} />
                          <CardTitle className="text-2xl">{category.title}</CardTitle>
                        </div>
                        <CardDescription className="text-base">
                          {category.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button asChild className="w-full">
                          <a href={`/blog/${category.id}`}>
                            Ver Artigos
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <aside className="lg:w-80">
              <BlogSidebar />
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;

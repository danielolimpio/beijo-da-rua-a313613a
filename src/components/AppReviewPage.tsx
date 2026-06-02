import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Globe, Heart, Shield, Star, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { trackAppClick } from "@/lib/analytics";

type IconName = "users" | "shield" | "heart" | "zap" | "globe" | "trending";

interface AppReviewPageProps {
  title: string;
  seoTitle: string;
  description: string;
  canonical: string;
  keywords: string;
  logo: string;
  rating: string;
  audience: string;
  category: string;
  heroSummary: string;
  officialUrl: string;
  officialLabel: string;
  intro: string[];
  stats: Array<{
    label: string;
    value: string;
    description: string;
  }>;
  highlights: Array<{
    title: string;
    description: string;
    icon: IconName;
  }>;
  strengths: string[];
  weaknesses: string[];
  bestFor: Array<{
    title: string;
    description: string;
  }>;
  tips: string[];
  closingTitle: string;
  closingText: string;
}

const iconMap = {
  users: Users,
  shield: Shield,
  heart: Heart,
  zap: Zap,
  globe: Globe,
  trending: TrendingUp,
};

const AppReviewPage = ({
  title,
  seoTitle,
  description,
  canonical,
  keywords,
  logo,
  rating,
  audience,
  category,
  heroSummary,
  officialUrl,
  officialLabel,
  intro,
  stats,
  highlights,
  strengths,
  weaknesses,
  bestFor,
  tips,
  closingTitle,
  closingText,
}: AppReviewPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={seoTitle}
        description={description}
        canonical={canonical}
        keywords={keywords}
      />
      <Header />
      <div className="pt-[140px]" />
      <DynamicBreadcrumb />

      <section className="bg-gradient-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <img
              src={logo}
              alt={`Logo ${title}`}
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg bg-background p-4"
              loading="eager"
            />
            <div className="text-center md:text-left max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
              <p className="text-xl md:text-2xl font-semibold mb-4">{description}</p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Badge className="bg-background text-foreground hover:bg-background/90">
                  <Star className="w-4 h-4 mr-1 fill-primary text-primary" />
                  {rating}
                </Badge>
                <Badge className="bg-background/15 text-primary-foreground hover:bg-background/20 border border-primary-foreground/20">
                  <Users className="w-4 h-4 mr-1" />
                  {audience}
                </Badge>
                <Badge className="bg-background/15 text-primary-foreground hover:bg-background/20 border border-primary-foreground/20">
                  {category}
                </Badge>
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl text-center max-w-4xl mx-auto mb-8">{heroSummary}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAppClick(title, "hero_cta")}
            >
              <Button size="lg" className="bg-background text-primary hover:bg-background/90 font-bold w-full sm:w-auto">
                {officialLabel}
              </Button>
            </a>
            <Link to="/quiz/">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Fazer Quiz
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">O que é o {title}?</h2>
            <div className="space-y-4">
              {intro.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Dados e destaques da plataforma</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <Card key={stat.label} className="border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{stat.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Por que o {title} chama atenção?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((item) => {
                const Icon = iconMap[item.icon];

                return (
                  <Card key={item.title}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Icon className="w-5 h-5 text-primary" />
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Pontos fortes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {strengths.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Pontos de atenção</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {weaknesses.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Para quem o {title} funciona melhor?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {bestFor.map((item) => (
                <Card key={item.title} className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Como ter melhores resultados no {title}</h2>
            <Card>
              <CardContent className="pt-6 space-y-4">
                {tips.map((tip, index) => (
                  <div key={tip} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground pt-1">{tip}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <Heart className="w-14 h-14 mx-auto mb-5 fill-current" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{closingTitle}</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">{closingText}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAppClick(title, "bottom_cta")}
              >
                <Button size="lg" className="bg-background text-primary hover:bg-background/90 font-bold w-full sm:w-auto">
                  Acessar site oficial
                </Button>
              </a>
              <Link to="/apps-de-namoro/">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Ver outros apps
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppReviewPage;
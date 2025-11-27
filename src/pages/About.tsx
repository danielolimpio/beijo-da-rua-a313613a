import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import StructuredData from "@/components/StructuredData";
import { getWebSiteSchema } from "@/lib/structuredData";
import { Users, Heart, Target, Award, Facebook, Twitter, Instagram, Linkedin, Globe } from "lucide-react";
import teamDaniel from "@/assets/team-daniel.jpg";
import teamMarina from "@/assets/team-marina.jpg";
import teamRicardo from "@/assets/team-ricardo.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Conexões Autênticas",
      description: "Acreditamos em relacionamentos genuínos baseados em compatibilidade real."
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Milhares de membros brasileiros buscando relacionamentos sérios."
    },
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Orientamos nossos membros com estratégias que realmente funcionam."
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Perfis verificados e ambiente seguro para todos os usuários."
    }
  ];

  const team = [
    { 
      name: "Daniel Olimpio", 
      role: "CEO & Fundador", 
      experience: "20 anos em tecnologia de relacionamentos",
      image: teamDaniel,
      socials: {
        facebook: "https://www.facebook.com/danielolimpio.com.br",
        twitter: "https://x.com/danielolimpio_",
        instagram: "https://www.instagram.com/danielolimpio_com/",
        linkedin: "https://www.linkedin.com/in/danielolimpio-com/",
        website: "https://danielolimpio.com/"
      }
    },
    { 
      name: "Marina Santos", 
      role: "Diretora de Conteúdo", 
      experience: "8 anos como coach de relacionamentos",
      image: teamMarina,
      socials: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "",
        website: ""
      }
    },
    { 
      name: "Ricardo Costa", 
      role: "CTO", 
      experience: "12 anos desenvolvendo plataformas sociais",
      image: teamRicardo,
      socials: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "",
        website: ""
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData data={getWebSiteSchema()} />
      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
      <DynamicBreadcrumb />
      
      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Sobre o Beijo da Rua
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Somos uma plataforma dedicada a ajudar homens brasileiros a encontrarem relacionamentos significativos através dos melhores apps de namoro.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card p-8 md:p-12 rounded-2xl shadow-custom-lg mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                  Nossa Missão
                </h2>
                <p className="text-lg text-muted-foreground text-center mb-6">
                  Fundado em 2020, o Beijo da Rua nasceu da necessidade de criar um espaço onde homens brasileiros pudessem encontrar orientação genuína sobre apps de namoro e relacionamentos.
                </p>
                <p className="text-lg text-muted-foreground text-center">
                  Nossa missão é democratizar o acesso a relacionamentos de qualidade, fornecendo ferramentas, dicas e uma comunidade ativa que apoia cada membro em sua jornada para encontrar o amor verdadeiro.
                </p>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="bg-card p-6 rounded-2xl shadow-custom-md text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">150K+</h3>
                  <p className="text-muted-foreground">Membros Ativos</p>
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-custom-md text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">25K+</h3>
                  <p className="text-muted-foreground">Matches Bem-Sucedidos</p>
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-custom-md text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">4.8/5</h3>
                  <p className="text-muted-foreground">Avaliação Média</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Nossos Valores
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl shadow-custom-md text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Nossa Equipe
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl shadow-custom-md text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.experience}</p>
                  
                  {/* Social Media Icons */}
                  <div className="flex justify-center gap-3">
                    {member.socials.facebook && (
                      <a 
                        href={member.socials.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Facebook className="w-4 h-4 text-primary" />
                      </a>
                    )}
                    {!member.socials.facebook && (
                      <div className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center">
                        <Facebook className="w-4 h-4 text-muted-foreground/50" />
                      </div>
                    )}
                    
                    {member.socials.twitter && (
                      <a 
                        href={member.socials.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Twitter className="w-4 h-4 text-primary" />
                      </a>
                    )}
                    {!member.socials.twitter && (
                      <div className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center">
                        <Twitter className="w-4 h-4 text-muted-foreground/50" />
                      </div>
                    )}
                    
                    {member.socials.instagram && (
                      <a 
                        href={member.socials.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Instagram className="w-4 h-4 text-primary" />
                      </a>
                    )}
                    {!member.socials.instagram && (
                      <div className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center">
                        <Instagram className="w-4 h-4 text-muted-foreground/50" />
                      </div>
                    )}
                    
                    {member.socials.linkedin && (
                      <a 
                        href={member.socials.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-primary" />
                      </a>
                    )}
                    {!member.socials.linkedin && (
                      <div className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center">
                        <Linkedin className="w-4 h-4 text-muted-foreground/50" />
                      </div>
                    )}
                    
                    {member.socials.website && (
                      <a 
                        href={member.socials.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Globe className="w-4 h-4 text-primary" />
                      </a>
                    )}
                    {!member.socials.website && (
                      <div className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center">
                        <Globe className="w-4 h-4 text-muted-foreground/50" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Pronto Para Encontrar Seu Match Perfeito?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de homens que já transformaram sua vida amorosa com nossa ajuda.
            </p>
            <a href="/qual-objetivo-ideal-para-usar-app-de-namoro-homem-brasil">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-bold text-lg">
                Fazer Quiz Gratuito
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

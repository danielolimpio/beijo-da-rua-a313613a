import { MapPin, Phone, Globe } from "lucide-react";
import footerMember1 from "@/assets/footer-member1.jpg";
import footerMember2 from "@/assets/footer-member2.jpg";
import footerMember3 from "@/assets/footer-member3.jpg";
import logo from "@/assets/logo.png";
import { recentArticles } from "@/data/blogArticles";

const Footer = () => {
  const featuredMembers = [
    { name: "Samantha Moreno", status: "Ativo", image: footerMember1 },
    { name: "Amanda Dantas", status: "Ativo", image: footerMember2 },
    { name: "Fabiana Duarte", status: "Ativo", image: footerMember3 },
  ];

  return (
    <footer className="bg-gradient-footer pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <img src={logo} alt="Beijo da Rua" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground mb-4">
              Beijo da Rua é um guia informativo sobre apps de namoro, criado para homens brasileiros.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Av. Julia Freire, 1200 – João Pessoa, PB</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+55 12 98251-9116</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 flex-shrink-0" />
                <span>www.beijodarua.com.br</span>
              </div>
            </div>
          </div>

          {/* Featured Members */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Membros Destacados</h3>
            <div className="space-y-3">
              {featuredMembers.map((member, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-sm">{member.name}</p>
                    <p className="text-xs text-success">{member.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Contatos & Suporte</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/quiz" className="hover:text-primary transition-colors">Quiz</a></li>
              <li><a href="/dicas" className="hover:text-primary transition-colors">Dicas</a></li>
              <li><a href="/sobre-nos" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/contato" className="hover:text-primary transition-colors">Entre em Contato</a></li>
              <li><a href="/faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Recent Activity */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Atividades Recentes</h3>
            <div className="space-y-3">
              {recentArticles.slice(0, 3).map((article) => (
                <a 
                  key={article.id} 
                  href={article.link}
                  className="flex gap-3 group"
                >
                  <div className="w-16 h-16 rounded-lg flex-shrink-0 overflow-hidden bg-muted/50">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-125 group-hover:rotate-2"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{article.date}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>Todos os direitos reservados © Beijo da Rua | Design por: <a href="https://danielolimpio.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">DanielOlimpio</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

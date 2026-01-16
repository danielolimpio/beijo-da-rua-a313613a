import { FileText, Scale, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-background shadow-sm overflow-x-hidden">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 overflow-x-hidden">
        <div className="container mx-auto px-2 sm:px-4 flex justify-between items-center text-xs sm:text-sm max-w-7xl">
          <div className="flex items-center gap-3 sm:gap-6">
            <a href="/politica-de-privacidade" className="flex items-center gap-1 sm:gap-2 hover:opacity-80 transition-opacity">
              <FileText size={14} className="hidden sm:block" />
              <span className="text-xs sm:text-sm">Privacidade</span>
            </a>
            <a href="/termos-de-uso" className="flex items-center gap-1 sm:gap-2 hover:opacity-80 transition-opacity">
              <Scale size={14} className="hidden sm:block" />
              <span className="text-xs sm:text-sm">Termos</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background border-b border-border py-2 overflow-x-hidden">
        <div className="container mx-auto px-2 sm:px-4 flex justify-between items-center max-w-7xl">
          <a href="/" className="flex items-center flex-shrink-0">
            <img src={logo} alt="Beijo da Rua" className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto" />
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">Home</a>
            <a href="/como-funciona" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">Como Funciona</a>
            <a href="/sobre-nos" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">Sobre Nós</a>
            <a href="/apps-de-namoro" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">Apps de Namoro</a>
            <a href="/quiz" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">Quiz</a>
            <a href="/blog" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">Blog</a>
            <a href="/dicas" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">Dicas</a>
            <a href="/contato" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">Contato</a>
          </div>

          {/* Mobile & Tablet Actions */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <a href="/quiz">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 whitespace-nowrap">
                QUIZ
              </Button>
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background overflow-x-hidden">
            <div className="container mx-auto px-2 sm:px-4 py-4 space-y-2 max-w-7xl">
              <a href="/" className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors font-medium">Home</a>
              <a href="/como-funciona" className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors font-medium">Como Funciona</a>
              <a href="/sobre-nos" className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors font-medium">Sobre Nós</a>
              <a href="/apps-de-namoro" className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors font-medium">Apps de Namoro</a>
              <a href="/quiz" className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors font-medium">Quiz</a>
              <a href="/blog" className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors font-medium">Blog</a>
              <a href="/dicas" className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors font-medium">Dicas</a>
              <a href="/contato" className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors font-medium">Contato</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

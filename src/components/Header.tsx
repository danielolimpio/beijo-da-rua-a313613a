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
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
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
            <a href="/sobre-nos" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">Sobre Nós</a>
            <a href="/apps-de-namoro" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">Apps de Namoro</a>
            <a href="/quiz" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">Quiz</a>
            <a href="/blog" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">Blog</a>
            <a href="/dicas" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">Dicas</a>
            <a href="/contato" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">Contato</a>
          </div>

          {/* Mobile & Tablet Actions */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 whitespace-nowrap">
              Minha Conta
            </Button>
            
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

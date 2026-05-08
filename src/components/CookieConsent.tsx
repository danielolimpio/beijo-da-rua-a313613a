import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "bdr_cookie_consent_v1";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        // Pequeno delay para não bloquear o LCP
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const persist = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* noop */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[9999] bg-card border border-border shadow-2xl rounded-xl p-5 animate-in fade-in slide-in-from-bottom-4"
    >
      <button
        onClick={() => persist("rejected")}
        aria-label="Fechar aviso"
        className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
      <div className="flex items-start gap-3">
        <div className="shrink-0 bg-primary/10 p-2 rounded-lg">
          <Cookie className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <h2 className="font-semibold text-foreground mb-1">Nós usamos cookies</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Usamos cookies e tecnologias semelhantes para personalizar conteúdo,
            mensurar o tráfego e exibir anúncios relevantes (incluindo Google AdSense).
            Saiba mais na nossa{" "}
            <a href="/politica-de-cookies/" className="text-primary underline hover:no-underline">
              Política de Cookies
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Button size="sm" onClick={() => persist("accepted")} className="bg-primary hover:bg-primary/90">
              Aceitar todos
            </Button>
            <Button size="sm" variant="outline" onClick={() => persist("rejected")}>
              Rejeitar
            </Button>
            <Button asChild size="sm" variant="ghost">
              <a href="/politica-de-privacidade/">Saiba mais</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

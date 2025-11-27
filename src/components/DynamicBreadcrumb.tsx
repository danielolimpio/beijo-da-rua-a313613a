import { useLocation, Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import StructuredData from "@/components/StructuredData";
import { getBreadcrumbSchema } from "@/lib/structuredData";
import { Home } from "lucide-react";

// Mapping of route segments to readable names
const routeNameMap: Record<string, string> = {
  // Main pages
  "sobre": "Sobre Nós",
  "blog": "Blog",
  "contato": "Contato",
  "apps": "Apps de Namoro",
  "dicas": "Dicas",
  "faq": "Perguntas Frequentes",
  "quiz": "Quiz",
  "politica-privacidade": "Política de Privacidade",
  "termos-uso": "Termos de Uso",
  "sitemap": "Mapa do Site",
  
  // Dating apps
  "tinder": "Tinder",
  "bumble": "Bumble",
  "happn": "Happn",
  "hinge": "Hinge",
  "badoo": "Badoo",
  "okcupid": "OkCupid",
  
  // Blog posts
  "cantadas-irresistiveis-que-funcionam": "Cantadas Irresistíveis que Funcionam",
  "como-abordar-uma-mulher-com-confianca": "Como Abordar uma Mulher com Confiança",
  "os-segredos-de-um-perfil-conquistador": "Os Segredos de um Perfil Conquistador",
  
  // Quiz pages
  "app-ideal-homens-timidos": "App Ideal para Homens Tímidos",
  "como-iniciar-conversas-apps": "Como Iniciar Conversas em Apps",
  "frequencia-ideal-usar-apps": "Frequência Ideal para Usar Apps",
  "qual-tipo-foto-perfil-funciona": "Qual Tipo de Foto de Perfil Funciona",
  "quanto-tempo-dedicar-apps": "Quanto Tempo Dedicar aos Apps",
  "tipo-mensagem-enviar-primeiro": "Tipo de Mensagem para Enviar Primeiro",
  "resultado-app-ideal": "Resultado do Quiz",
  "o-que-nunca-falta-no-seu-dia": "O Que Nunca Falta no Seu Dia",
  "onde-voce-quer-chegar": "Onde Você Quer Chegar",
  "voce-e-mais-serio-ou-descontraido": "Você é Mais Sério ou Descontraído",
  "qual-seu-estilo-de-namoro": "Qual Seu Estilo de Namoro",
  "o-que-te-faz-sorrir": "O Que Te Faz Sorrir",
  "melhor-horario-usar-apps": "Melhor Horário para Usar Apps",
  "como-homens-timidos-usar-apps": "Como Homens Tímidos Podem Usar Apps",
};

const DynamicBreadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // Don't show breadcrumb on homepage
  if (pathSegments.length === 0) {
    return null;
  }

  // Build breadcrumb items
  const breadcrumbItems = [
    { name: "Home", url: "https://beijodarua.com.br/" }
  ];

  let currentPath = "";
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const name = routeNameMap[segment] || segment.split("-").map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ");
    
    breadcrumbItems.push({
      name,
      url: `https://beijodarua.com.br${currentPath}`
    });
  });

  return (
    <>
      <StructuredData data={getBreadcrumbSchema(breadcrumbItems)} />
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="flex items-center gap-1.5">
                  <Home className="h-4 w-4" />
                  <span className="sr-only">Home</span>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
            {pathSegments.map((segment, index) => {
              const isLast = index === pathSegments.length - 1;
              const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
              const name = routeNameMap[segment] || segment.split("-").map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(" ");

              return (
                <div key={path} className="flex items-center gap-1.5">
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{name}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link to={path}>{name}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </nav>
    </>
  );
};

export default DynamicBreadcrumb;

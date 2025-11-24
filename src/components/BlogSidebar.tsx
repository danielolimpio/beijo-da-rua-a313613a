import { Heart, Users, MessageCircle, Smartphone, Sparkles, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import tinderLogo from "@/assets/tinder-logo.jpeg";
import bumbleLogo from "@/assets/bumble-logo.webp";
import happnLogo from "@/assets/happn-logo.jpg";
import okcupidLogo from "@/assets/okcupid-logo.jpeg";

interface BlogSidebarProps {
  activeCategory?: string;
}

const categories = [
  {
    id: "conquista",
    title: "Conquista",
    icon: Heart,
    color: "text-rose-500"
  },
  {
    id: "relacionamento",
    title: "Relacionamento",
    icon: Users,
    color: "text-purple-500"
  },
  {
    id: "paquera",
    title: "Paquera",
    icon: MessageCircle,
    color: "text-blue-500"
  },
  {
    id: "aplicativos",
    title: "Aplicativos",
    icon: Smartphone,
    color: "text-green-500"
  },
  {
    id: "autoestima",
    title: "Autoestima",
    icon: Sparkles,
    color: "text-amber-500"
  }
];

const datingApps = [
  {
    name: "Tinder",
    url: "/apps/tinder",
    logo: tinderLogo
  },
  {
    name: "Bumble",
    url: "/apps/bumble",
    logo: bumbleLogo
  },
  {
    name: "Happn",
    url: "/apps/happn",
    logo: happnLogo
  },
  {
    name: "OkCupid",
    url: "/apps/okcupid",
    logo: okcupidLogo
  }
];

const BlogSidebar = ({ activeCategory }: BlogSidebarProps) => {
  return (
    <div className="space-y-6">
      {/* Categorias */}
      <Card>
        <CardHeader>
          <CardTitle>Categorias</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <li key={category.id}>
                  <a
                    href={`/blog/${category.id}`}
                    className={cn(
                      "flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors",
                      isActive && "bg-muted font-medium"
                    )}
                  >
                    <IconComponent className={`h-5 w-5 ${category.color}`} />
                    <span>{category.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>

      {/* Apps de Namoro */}
      <Card>
        <CardHeader>
          <CardTitle>Apps de Namoro</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {datingApps.map((app) => (
              <li key={app.name}>
                <a
                  href={app.url}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors group"
                >
                  <img 
                    src={app.logo} 
                    alt={app.name}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <span className="flex-1">{app.name}</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* WhatsApp Card */}
      <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>Grupos WhatsApp</span>
          </CardTitle>
          <CardDescription>
            Grupos de Namoro, Amizade, Encontros e Casais Liberais.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            asChild
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            <a href="https://chat.whatsapp.com" target="_blank" rel="noopener noreferrer">
              Entrar no WhatsApp
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Telegram Card */}
      <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <span>Grupos Telegram</span>
          </CardTitle>
          <CardDescription>
            Grupos de Relacionamentos, Conversas, Romance e Amor Livre.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            asChild
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              Entrar no Telegram
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;

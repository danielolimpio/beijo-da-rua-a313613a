import { Share2, Facebook, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ArticleShareButtonsProps {
  url: string;
  title: string;
}

const ArticleShareButtons = ({ url, title }: ArticleShareButtonsProps) => {
  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`
    };
    
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  return (
    <div className="bg-muted/30 rounded-xl p-6 my-10">
      <div className="flex items-center gap-2 mb-4">
        <Share2 className="w-5 h-5 text-foreground" />
        <span className="font-semibold text-foreground">Compartilhe este artigo</span>
      </div>
      
      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare('facebook')}
          className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-200"
        >
          <Facebook className="w-4 h-4 text-blue-600" />
          <span>Facebook</span>
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare('pinterest')}
          className="flex items-center gap-2 hover:bg-red-50 hover:border-red-200"
        >
          <svg className="w-4 h-4 text-red-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
          </svg>
          <span>Pinterest</span>
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare('twitter')}
          className="flex items-center gap-2 hover:bg-sky-50 hover:border-sky-200"
        >
          <Twitter className="w-4 h-4 text-sky-500" />
          <span>X (Twitter)</span>
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare('whatsapp')}
          className="flex items-center gap-2 hover:bg-green-50 hover:border-green-200"
        >
          <MessageCircle className="w-4 h-4 text-green-600" />
          <span>WhatsApp</span>
        </Button>
      </div>
    </div>
  );
};

export default ArticleShareButtons;

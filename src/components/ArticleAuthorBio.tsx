import { useState } from "react";
import { Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

interface ArticleAuthorBioProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  skills?: string[];
}

const ArticleAuthorBio = ({ name, role, bio, image, skills = [] }: ArticleAuthorBioProps) => {
  const [showFullBio, setShowFullBio] = useState(false);

  return (
    <div className="bg-card border border-border rounded-xl p-6 my-10">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img 
            src={image} 
            alt={name}
            className="w-24 h-24 rounded-full object-cover border-4 border-background shadow-lg"
          />
        </div>
        
        {/* Info */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
          <p className="text-muted-foreground text-sm mb-3">{role}</p>
          
          <p className="font-semibold text-foreground text-sm mb-2">Sobre Mim</p>
          <p className={`text-muted-foreground text-sm leading-relaxed mb-3 ${!showFullBio ? 'line-clamp-2' : ''}`}>
            {bio}
          </p>
          
          <button 
            onClick={() => setShowFullBio(!showFullBio)}
            className="text-primary text-sm font-medium hover:underline mb-4"
          >
            {showFullBio ? 'Ver Menos' : 'Ver Mais'}
          </button>
          
          {/* Skills */}
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://beijodarua.com.br/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/beijodarua" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/beijodarua" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/beijodarua" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/beijodarua" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleAuthorBio;

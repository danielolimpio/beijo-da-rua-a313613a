import { Link } from "react-router-dom";
import { recentArticles } from "@/data/blogArticles";
import { useMemo } from "react";
import { ArrowRight } from "lucide-react";

interface RelatedArticlesProps {
  currentArticleLink: string;
  category?: string;
  maxArticles?: number;
}

const RelatedArticles = ({ currentArticleLink, category, maxArticles = 3 }: RelatedArticlesProps) => {
  const relatedArticles = useMemo(() => {
    // Filter out current article
    const otherArticles = recentArticles.filter(
      article => article.link !== currentArticleLink
    );

    // Prioritize same category articles
    const sameCategoryArticles = category 
      ? otherArticles.filter(article => article.categoryId === category)
      : [];
    
    const differentCategoryArticles = category
      ? otherArticles.filter(article => article.categoryId !== category)
      : otherArticles;

    // Shuffle same category articles
    const shuffledSameCategory = [...sameCategoryArticles].sort(() => Math.random() - 0.5);
    const shuffledDifferentCategory = [...differentCategoryArticles].sort(() => Math.random() - 0.5);

    // Combine: prioritize same category, then fill with others
    const combined = [...shuffledSameCategory, ...shuffledDifferentCategory];
    
    return combined.slice(0, maxArticles);
  }, [currentArticleLink, category, maxArticles]);

  if (relatedArticles.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-border">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
        <ArrowRight className="w-7 h-7 text-primary" />
        Artigos Relacionados
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <Link 
            key={article.id} 
            to={`${article.link}/`}
            className="group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/30"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mb-2">
                {article.category}
              </span>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {article.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link 
          to="/blog/" 
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
        >
          Ver todos os artigos
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default RelatedArticles;

import { Link } from "react-router-dom";
import { recentArticles } from "@/data/blogArticles";

const RecentArticlesThumbnails = () => {
  // Pega os 9 artigos mais recentes
  const articles = recentArticles.slice(0, 9);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-section-alt">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Artigos em Destaque
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira nossos guias mais recentes para conquistar com confiança
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`${article.link}/`}
              className="group block overflow-hidden rounded-lg sm:rounded-xl shadow-custom-sm hover:shadow-custom-lg transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 lg:p-4">
                  <span className="inline-block px-2 py-0.5 sm:px-2 sm:py-1 text-[10px] sm:text-xs font-medium bg-primary text-primary-foreground rounded-full mb-1 sm:mb-2">
                    {article.category}
                  </span>
                  <h3 className="text-white font-semibold text-xs sm:text-sm lg:text-base line-clamp-2 leading-tight">
                    {article.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/blog/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-full font-medium hover:shadow-custom-primary transition-all duration-300"
          >
            Ver todos os artigos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentArticlesThumbnails;

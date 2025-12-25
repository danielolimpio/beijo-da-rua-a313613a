import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  type?: "website" | "article";
  author?: string;
  publishedTime?: string;
  keywords?: string;
}

const SEO = ({
  title,
  description,
  canonical,
  image = "https://beijodarua.com.br/og-image.jpg",
  type = "website",
  author,
  publishedTime,
  keywords,
}: SEOProps) => {
  const fullTitle = title.includes("Beijo da Rua") ? title : `${title} | Beijo da Rua`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Beijo da Rua" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@BeijoDaRua" />
      
      {/* Article-specific */}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
    </Helmet>
  );
};

export default SEO;

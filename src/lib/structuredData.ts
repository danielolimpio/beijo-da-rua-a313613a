// Schema.org structured data generators

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Beijo da Rua",
  "url": "https://beijodarua.com.br",
  "logo": "https://beijodarua.com.br/og-image.jpg",
  "description": "Guia completo sobre aplicativos de namoro no Brasil. Encontre o app ideal para você com nossos testes personalizados.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Julia Freire, 1200",
    "addressLocality": "João Pessoa",
    "addressRegion": "PB",
    "addressCountry": "BR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-12-98251-9116",
    "contactType": "customer service",
    "email": "contato@beijodarua.com.br",
    "availableLanguage": "Portuguese"
  },
  "sameAs": [
    "https://www.facebook.com/beijodarua",
    "https://www.instagram.com/beijodarua",
    "https://www.youtube.com/@beijodarua"
  ]
});

export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Beijo da Rua",
  "url": "https://beijodarua.com.br",
  "description": "Guia completo sobre aplicativos de namoro no Brasil",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://beijodarua.com.br/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Beijo da Rua",
    "logo": {
      "@type": "ImageObject",
      "url": "https://beijodarua.com.br/og-image.jpg"
    }
  }
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const getArticleSchema = (article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  url: string;
  category: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Beijo da Rua",
    "logo": {
      "@type": "ImageObject",
      "url": "https://beijodarua.com.br/og-image.jpg"
    }
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  },
  "articleSection": article.category,
  "inLanguage": "pt-BR"
});

export const getQuizSchema = (quiz: {
  name: string;
  description: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Quiz",
  "name": quiz.name,
  "description": quiz.description,
  "url": quiz.url,
  "inLanguage": "pt-BR",
  "educationalLevel": "Beginner",
  "assesses": "Dating app compatibility"
});

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
  "url": "https://beijodarua.com.br/",
  "description": "Guia completo sobre aplicativos de namoro no Brasil",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://beijodarua.com.br/faq?q={search_term_string}"
    },
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

export const getSiteNavigationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Páginas principais do Beijo da Rua",
  "itemListElement": [
    { "@type": "SiteNavigationElement", "position": 1, "name": "Como Funciona", "url": "https://beijodarua.com.br/como-funciona/" },
    { "@type": "SiteNavigationElement", "position": 2, "name": "Sobre Nós", "url": "https://beijodarua.com.br/sobre-nos/" },
    { "@type": "SiteNavigationElement", "position": 3, "name": "Apps de Namoro", "url": "https://beijodarua.com.br/apps-de-namoro/" },
    { "@type": "SiteNavigationElement", "position": 4, "name": "Quiz", "url": "https://beijodarua.com.br/quiz/" },
    { "@type": "SiteNavigationElement", "position": 5, "name": "Blog", "url": "https://beijodarua.com.br/blog/" },
    { "@type": "SiteNavigationElement", "position": 6, "name": "Dicas", "url": "https://beijodarua.com.br/dicas/" }
  ]
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

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Beijo da Rua",
  "image": "https://beijodarua.com.br/og-image.jpg",
  "url": "https://beijodarua.com.br",
  "telephone": "+55-12-98251-9116",
  "email": "contato@beijodarua.com.br",
  "priceRange": "Free",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Julia Freire, 1200",
    "addressLocality": "João Pessoa",
    "addressRegion": "PB",
    "addressCountry": "BR"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Brazil"
  }
});

export const getFAQSchema = (faqs: Array<{ q: string; a: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(item => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.a
    }
  }))
});

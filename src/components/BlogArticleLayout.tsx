import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import BlogSidebar from "@/components/BlogSidebar";
import { 
  TopOfPageAd, 
  UnderPageTitleAd, 
  UnderFirstParagraphAd,
  UnderSecondParagraphAd,
  MidContentAd, 
  LongContentAd,
  LongerContentAd,
  LongestContentAd,
  InContent5Ad, 
  BottomOfPageAd 
} from "@/components/EzoicAd";

interface BlogArticleLayoutProps {
  children: ReactNode;
  category?: string;
  /** Approximate word count to determine which content ads to show */
  wordCount?: number;
}

/**
 * Blog Article Layout with strategic Ezoic ad placements
 * 
 * Ads shown based on content length:
 * - Always: top_of_page, under_page_title, under_first_paragraph, under_second_paragraph, mid_content, incontent_5, bottom_of_page
 * - 800+ words: long_content (112)
 * - 1200+ words: longer_content (113)
 * - 1800+ words: longest_content (114)
 */
const BlogArticleLayout = ({ children, category, wordCount = 500 }: BlogArticleLayoutProps) => {
  const showLongContentAd = wordCount >= 800;
  const showLongerContentAd = wordCount >= 1200;
  const showLongestContentAd = wordCount >= 1800;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top of Page Ad */}
      <TopOfPageAd />
      
      <Header />
      <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
      <DynamicBreadcrumb />
      
      <article className="flex-1 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {children}
            </div>
            
            {/* Sidebar */}
            <aside className="lg:w-80 shrink-0">
              <BlogSidebar activeCategory={category} />
            </aside>
          </div>
        </div>
      </article>

      {/* Bottom of Page Ad */}
      <div className="container mx-auto px-4 mb-8">
        <BottomOfPageAd />
      </div>

      <Footer />
    </div>
  );
};

export default BlogArticleLayout;

// Export individual ad insertion components for use within article content
export const ArticleAds = {
  UnderTitle: UnderPageTitleAd,
  AfterFirstParagraph: UnderFirstParagraphAd,
  AfterSecondParagraph: UnderSecondParagraphAd,
  MidContent: MidContentAd,
  LongContent: LongContentAd,
  LongerContent: LongerContentAd,
  LongestContent: LongestContentAd,
  BeforeEnd: InContent5Ad,
};

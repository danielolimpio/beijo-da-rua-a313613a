import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { ReactNode } from "react";
import { TopOfPageAd, UnderPageTitleAd, BottomOfPageAd } from "@/components/EzoicAd";

interface QuizLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  progress?: number;
}

const QuizLayout = ({ children, title, description, progress }: QuizLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top of Page Ad */}
      <TopOfPageAd />
      
      <Header />
      <DynamicBreadcrumb />
      
      {/* Progress Bar */}
      {progress !== undefined && (
        <div className="w-full bg-muted h-1">
          <div 
            className="bg-primary h-full transition-all duration-500" 
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-hero pt-[156px] sm:pt-[164px] pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-lg text-muted-foreground">
                {description}
              </p>
            )}
          </div>
          
          {/* Under Page Title Ad */}
          <div className="max-w-3xl mx-auto mt-6">
            <UnderPageTitleAd />
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </div>
      </main>

      {/* Bottom of Page Ad */}
      <div className="container mx-auto px-4 mb-8">
        <BottomOfPageAd />
      </div>

      <Footer />
    </div>
  );
};

export default QuizLayout;

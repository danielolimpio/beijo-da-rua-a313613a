import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import IntroTextSection from "@/components/IntroTextSection";
import StatsSection from "@/components/StatsSection";
import SuccessStories from "@/components/SuccessStories";
import PopularMembers from "@/components/PopularMembers";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutPlatform from "@/components/AboutPlatform";
import Footer from "@/components/Footer";
import NewRegistrationPopup from "@/components/NewRegistrationPopup";
import StructuredData from "@/components/StructuredData";
import SEO from "@/components/SEO";
import RecentArticlesThumbnails from "@/components/RecentArticlesThumbnails";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/structuredData";
import { TopOfPageAd, UnderFirstParagraphAd, MidContentAd, LongContentAd, InContent5Ad, BottomOfPageAd } from "@/components/EzoicAd";
import { FEATURE_FLAGS } from "@/config/featureFlags";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Beijo da Rua - Guia de Apps de Namoro para Homens Brasileiros"
        description="Descubra os melhores apps de namoro para homens brasileiros. Dicas, reviews e guias completos para encontrar relacionamentos reais."
        canonical="https://beijodarua.com.br/"
        keywords="apps de namoro, namoro online, tinder brasil, bumble brasil, relacionamento"
      />
      <StructuredData data={getOrganizationSchema()} />
      <StructuredData data={getWebSiteSchema()} />
      
      {/* Top of Page Ad */}
      <TopOfPageAd />
      
      <Header />
      <HeroSection />
      
      {/* Ad after Hero (under first section) */}
      <div className="container mx-auto px-4">
        <UnderFirstParagraphAd />
      </div>
      
      <WelcomeSection />
      <IntroTextSection />
      
      {/* Mid Content Ad */}
      <div className="container mx-auto px-4">
        <MidContentAd />
      </div>
      
      <SuccessStories />
      <StatsSection />
      
      {/* Recent Articles Thumbnails - 9 capas de artigos */}
      <RecentArticlesThumbnails />
      
      {/* Long Content Ad */}
      <div className="container mx-auto px-4">
        <LongContentAd />
      </div>
      
      {/* Popular Members - conditionally rendered */}
      {FEATURE_FLAGS.SHOW_POPULAR_MEMBERS && <PopularMembers />}
      
      {/* Incontent 5 Ad */}
      <div className="container mx-auto px-4">
        <InContent5Ad />
      </div>
      
      <WhyChooseUs />
      <AboutPlatform />
      
      {/* Bottom of Page Ad */}
      <div className="container mx-auto px-4 mb-8">
        <BottomOfPageAd />
      </div>
      
      <Footer />
      <NewRegistrationPopup />
    </div>
  );
};

export default Index;

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
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/structuredData";
import { TopOfPageAd, UnderFirstParagraphAd, MidContentAd, LongContentAd, InContent5Ad, BottomOfPageAd } from "@/components/EzoicAd";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
      
      {/* Long Content Ad */}
      <div className="container mx-auto px-4">
        <LongContentAd />
      </div>
      
      <PopularMembers />
      
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

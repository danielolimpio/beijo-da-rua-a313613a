import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import StatsSection from "@/components/StatsSection";
import SuccessStories from "@/components/SuccessStories";
import PopularMembers from "@/components/PopularMembers";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import NewRegistrationPopup from "@/components/NewRegistrationPopup";
import StructuredData from "@/components/StructuredData";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/structuredData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={getOrganizationSchema()} />
      <StructuredData data={getWebSiteSchema()} />
      <Header />
      <HeroSection />
      <WelcomeSection />
      <StatsSection />
      <SuccessStories />
      <PopularMembers />
      <WhyChooseUs />
      <Footer />
      <NewRegistrationPopup />
    </div>
  );
};

export default Index;

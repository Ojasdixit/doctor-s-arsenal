import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SpecialitiesSection from "@/components/SpecialitiesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import StatsSection from "@/components/StatsSection";
import DoctorsSection from "@/components/DoctorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AppDownloadSection from "@/components/AppDownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <SpecialitiesSection />
      <HowItWorksSection />
      <StatsSection />
      <DoctorsSection />
      <TestimonialsSection />
      <AppDownloadSection />
      <Footer />
    </div>
  );
};

export default Index;

import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import StepsSection from "@/components/landing/StepsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import SmartReviewSection from "@/components/landing/SmartReviewSection";
import DashboardPreview from "@/components/landing/DashboardPreview";
import IndustriesSection from "@/components/landing/IndustriesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import CTASection from "@/components/landing/CTASection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <StepsSection />
    <FeaturesSection />
    <SmartReviewSection />
    <DashboardPreview />
    <IndustriesSection />
    <TestimonialsSection />
    <PricingSection />
    <CTASection />
    <FAQSection />
    <Footer />
  </div>
);

export default Index;

import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-card">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <FeaturesSection />
    <TestimonialsSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;

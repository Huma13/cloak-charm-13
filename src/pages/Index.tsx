
import Hero from "@/components/Hero";
import CompanyIntro from "@/components/CompanyIntro";
import FeaturedProducts from "@/components/FeaturedProducts";
import PremiumFeatures from "@/components/PremiumFeatures";
import FeatureSection from "@/components/FeatureSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CompanyIntro />
      <FeaturedProducts />
      <PremiumFeatures />
      <FeatureSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Index;

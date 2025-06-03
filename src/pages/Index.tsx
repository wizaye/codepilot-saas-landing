
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ContentSection } from "@/components/sections/content-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSectionComponent } from "@/components/sections/pricing-section";
import { CTASection } from "@/components/sections/cta-section";
import { CommunitySection } from "@/components/sections/community-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <ContentSection />
      <TestimonialsSection />
      <PricingSectionComponent />
      <CTASection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;

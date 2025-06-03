
import { HeroSection } from "@/sections/hero-section";
import { Features } from "@/sections/features-section";
import { ContentSection } from "@/sections/content-section";
import { Testimonials } from "@/sections/testimonials-section";
import { PricingSection } from "@/sections/pricing-section";
import { CTASection } from "@/sections/cta-section";
import { CommunitySection } from "@/sections/community-section";
import { Footer } from "@/sections/footer-section";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <ContentSection />
      <Testimonials />
      <PricingSection />
      <CTASection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;

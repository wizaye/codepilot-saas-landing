
import { HeroSection } from "@/sections/hero-section";
import { Features } from "@/sections/features-section";
import { ContentSection } from "@/sections/content-section";
import { MetricsSection } from "@/sections/metrics-section";
import { Stats } from "@/sections/stats-section";
import { Testimonials } from "@/sections/testimonials-section";
import { PricingSection } from "@/sections/pricing-section";
import { CTASection } from "@/sections/cta-section";
import { CommunitySection } from "@/sections/community-section";
import { Footer } from "@/sections/footer-section";
import { EnhancedNavigation } from "@/components/ui/enhanced-navigation";
import { FloatingActions } from "@/components/ui/floating-actions";

const Index = () => {
  return (
    <div className="font-funnel overflow-x-hidden w-full">
      <EnhancedNavigation />
      <HeroSection />
      <section id="features" className="section-spacing">
        <Features />
      </section>
      <section className="section-spacing">
        <ContentSection />
      </section>
      <section className="section-spacing">
        <MetricsSection />
      </section>
      <section className="section-spacing">
        <Stats />
      </section>
      <section className="section-spacing">
        <Testimonials />
      </section>
      <section id="pricing" className="section-spacing">
        <PricingSection />
      </section>
      <section className="section-spacing cta-section">
        <CTASection />
      </section>
      <section className="section-spacing">
        <CommunitySection />
      </section>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;

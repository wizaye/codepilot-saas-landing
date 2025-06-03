import { HeroSection } from "components/ui/hero-section-1"; // Assuming HeroSection is exported from hero-section-1.tsx
import { Features } from "components/ui/features-8"; // Assuming Features is exported from features-8.tsx
import ContentSection from "components/ui/content-section"; // Default import in original
import Stats from "components/ui/stats-section"; // Default import in original, assuming same for new
import { Testimonials } from "components/ui/testimonials-columns-1"; // Assuming Testimonials is exported
import PricingSection from "components/ui/pricing-table"; // Default import in original, confirmed as PricingSection before
import CTASection from "components/ui/cta-section"; // Default import in original
import CommunitySection from "components/ui/community-section"; // Default import in original
import Footer from "components/ui/footer"; // Default import in original

// It's good practice to ensure these components are actually client components if they use hooks like useState, useEffect,
// or interactive event handlers. If so, they might need a "use client"; directive at the top.
// For now, we are just mapping the structure.

export default function HomePage() {
  return (
    <div className="font-funnel">
      <HeroSection />
      <Features />
      <ContentSection />
      <Stats />
      <Testimonials />
      <PricingSection />
      <CTASection />
      <CommunitySection />
      <Footer />
    </div>
  );
}

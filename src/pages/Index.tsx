
import { HeroSection } from "@/components/ui/hero-section-1";
import { Features } from "@/components/ui/features-8";
import ContentSection from "@/components/ui/content-section";
import { CTASection } from "@/components/ui/cta-section";
import { CommunitySection } from "@/components/ui/community-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <ContentSection />
      <CTASection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { IdentityBanner } from "@/components/shared/IdentityBanner";

export function BannerSection() {
  return (
    <section className="bg-white pt-16">
      <div className="container">
        <AnimatedSection>
          <IdentityBanner />
        </AnimatedSection>
      </div>
    </section>
  );
}

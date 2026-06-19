import {
  LandingHeader,
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  CtaBandSection,
  LandingFooter,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CtaBandSection />
      </main>
      <LandingFooter />
    </>
  );
}

import { BrandButton } from "@/components/ui/brand-button";
import { StackedCard } from "@/components/ui/stacked-card";
import { ArrowDoodle, HeroChatMockup, StarDoodle } from "@/components/landing/doodles";

export function HeroSection() {
  return (
    <section className="ds-section-pattern py-12 md:py-[96px]">
      <div className="ds-section-content ds-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <h1 className="font-heading text-[44px] leading-none text-ds-heading md:text-[56px] lg:text-[72px]">
              Chat with your PDFs
            </h1>
            <p className="mt-4 max-w-lg font-sans text-lg leading-snug text-ds-heading md:text-xl">
              Upload any document, ask questions in plain English, and get answers
              grounded in your source material — with page citations you can trust.
            </p>
            <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-ds-body md:text-base">
              AskPDF uses retrieval-augmented generation to search your documents
              and respond with context-aware answers. No more scrolling through
              hundreds of pages.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <BrandButton href="/sign-up">Start for free</BrandButton>
              <BrandButton variant="tertiary" href="#how-it-works">
                See how it works
              </BrandButton>
            </div>
            <ArrowDoodle className="pointer-events-none mt-6 hidden w-24 text-ds-heading opacity-40 lg:block" />
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
            <StarDoodle className="pointer-events-none absolute -right-2 top-8 size-12 text-ds-fg-brand opacity-60" />
            <StackedCard
              interactive
              title="Live document chat"
              description="Ask anything about your uploaded PDF and get instant, cited responses."
              media={<HeroChatMockup />}
              className="mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

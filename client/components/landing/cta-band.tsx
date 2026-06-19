import { BrandButton } from "@/components/ui/brand-button";
import { StickerPanel } from "@/components/ui/sticker-panel";

export function CtaBandSection() {
  return (
    <section id="get-started" className="ds-accent-band py-12 md:py-[88px]">
      <div className="ds-container">
        <StickerPanel className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl text-ds-heading md:text-5xl">
            Ready to talk to your documents?
          </h2>
          <p className="mx-auto mt-4 max-w-md font-sans text-base leading-relaxed text-ds-body">
            Join AskPDF and turn static PDFs into interactive knowledge bases.
            Upload your first file and start chatting in seconds.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <BrandButton href="/sign-up">Create free account</BrandButton>
            <BrandButton variant="tertiary" href="/sign-in">
              Sign in
            </BrandButton>
          </div>
        </StickerPanel>
      </div>
    </section>
  );
}

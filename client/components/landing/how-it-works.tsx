import { SectionPattern } from "@/components/ui/section-pattern";
import { StickerPanel } from "@/components/ui/sticker-panel";
import { Upload, MessageSquareQuote, BookOpenCheck } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Upload your PDF",
    description:
      "Drag and drop a file or pick one from your device. AskPDF chunks and embeds the content automatically.",
  },
  {
    step: "02",
    icon: MessageSquareQuote,
    title: "Ask a question",
    description:
      "Type anything about the document — summaries, comparisons, definitions, or specific data points.",
  },
  {
    step: "03",
    icon: BookOpenCheck,
    title: "Review cited answers",
    description:
      "Get a clear response with references to the exact pages. Click through to verify every claim.",
  },
];

export function HowItWorksSection() {
  return (
    <SectionPattern id="how-it-works" pattern={false}>
      <div className="mb-12 md:mb-14">
        <h2 className="font-heading text-4xl text-ds-heading md:text-[56px]">
          How it works
        </h2>
        <p className="mt-4 max-w-lg font-sans text-base leading-relaxed text-ds-body">
          Three steps from document to answer. No setup, no prompt engineering —
          just upload and chat.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map(({ step, icon: Icon, title, description }) => (
          <StickerPanel key={step} className="relative">
            <span className="font-heading text-5xl text-ds-brand/30">{step}</span>
            <div className="mt-4 flex size-11 items-center justify-center rounded-lg border-2 border-ds-border bg-ds-brand-softer">
              <Icon className="size-5 text-ds-brand-strong" aria-hidden />
            </div>
            <h3 className="mt-4 font-sans text-lg font-semibold text-ds-heading">
              {title}
            </h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-ds-body md:text-base">
              {description}
            </p>
          </StickerPanel>
        ))}
      </div>
    </SectionPattern>
  );
}

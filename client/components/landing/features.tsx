import { SectionPattern } from "@/components/ui/section-pattern";
import { StackedCard } from "@/components/ui/stacked-card";
import { ChatDoodle, PdfDoodle, SearchDoodle } from "@/components/landing/doodles";

const features = [
  {
    title: "Upload any PDF",
    description:
      "Drop in research papers, contracts, manuals, or reports. AskPDF indexes every page so nothing gets lost.",
    media: <PdfDoodle className="size-20 text-ds-heading md:size-24" />,
  },
  {
    title: "Ask natural questions",
    description:
      "Type questions like you would to a colleague. The AI retrieves the most relevant passages from your document.",
    media: <ChatDoodle className="size-20 text-ds-heading md:size-24" />,
  },
  {
    title: "Get cited answers",
    description:
      "Every response links back to the exact page and section in your PDF, so you can verify sources instantly.",
    media: <SearchDoodle className="size-20 text-ds-heading md:size-24" />,
  },
];

export function FeaturesSection() {
  return (
    <SectionPattern id="features">
      <div className="mb-12 text-center md:mb-14">
        <h2 className="font-heading text-4xl text-ds-heading md:text-[56px]">
          Everything you need
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-sans text-base leading-relaxed text-ds-body">
          A simple workflow from upload to insight — built for students, researchers,
          and professionals who live in PDFs.
        </p>
      </div>

      <div className="grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <StackedCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            media={feature.media}
            interactive
          />
        ))}
      </div>
    </SectionPattern>
  );
}

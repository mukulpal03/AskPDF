import { Upload } from "lucide-react";
import { StickerPanel } from "@/components/ui/sticker-panel";
import { BrandButton } from "@/components/ui/brand-button";
import { cn } from "@/lib/utils";

type UploadZoneProps = {
  className?: string;
};

export function UploadZone({ className }: UploadZoneProps) {
  return (
    <StickerPanel className={cn("relative", className)}>
      <div
        className={cn(
          "flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-ds-border-brand px-6 py-12 text-center",
          "bg-ds-brand-softer/40 transition-colors",
        )}
        role="region"
        aria-label="Upload PDF"
      >
        <span className="flex size-14 items-center justify-center rounded-2xl border-2 border-ds-border bg-ds-panel shadow-(--ds-sticker-shadow)">
          <Upload className="size-7 text-ds-brand" aria-hidden />
        </span>

        <h2 className="mt-5 font-heading text-2xl text-ds-heading md:text-3xl">
          Upload a PDF
        </h2>
        <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-ds-body md:text-base">
          Drag and drop your file here, or browse from your computer. We&apos;ll
          index every page so you can chat with it.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <BrandButton type="button" aria-disabled="true">
            Browse files
          </BrandButton>
          <span className="font-sans text-xs text-ds-body-subtle">
            PDF only · Max 10 MB
          </span>
        </div>
      </div>
    </StickerPanel>
  );
}

"use client";

import { Upload } from "lucide-react";
import { StickerPanel } from "@/components/ui/sticker-panel";
import { BrandButton } from "@/components/ui/brand-button";
import { useDocumentUpload } from "@/hooks/use-document-upload";
import { cn } from "@/lib/utils";
import { useRef } from "react";

type UploadZoneProps = {
  className?: string;
};

export function UploadZone({ className }: UploadZoneProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { upload, isUploading, error, successMessage } = useDocumentUpload();

  const handleBrowseFiles = () => {
    if (isUploading) return;
    fileInputRef.current?.click();
  };

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) return;

    await upload(file);
  };

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
          Choose a PDF from your computer. Files are saved to the server for now.
        </p>

        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <BrandButton
              type="button"
              onClick={handleBrowseFiles}
              disabled={isUploading}
              aria-busy={isUploading}
            >
              {isUploading ? "Uploading…" : "Browse files"}
            </BrandButton>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf,.pdf"
              hidden
              onChange={handleFileSelect}
            />
            <span className="font-sans text-xs text-ds-body-subtle">
              PDF only · Max 10 MB
            </span>
          </div>

          {successMessage && (
            <p
              role="status"
              className="max-w-md font-sans text-sm text-ds-heading"
            >
              {successMessage}
            </p>
          )}

          {error && (
            <p
              role="alert"
              className="max-w-md font-sans text-sm text-red-700 dark:text-red-300"
            >
              {error}
            </p>
          )}
        </div>
      </div>
    </StickerPanel>
  );
}

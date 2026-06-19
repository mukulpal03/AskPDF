import { FileText, MessageSquare, Trash2 } from "lucide-react";
import { StickerPanel } from "@/components/ui/sticker-panel";
import { BrandButton } from "@/components/ui/brand-button";
import { DocumentStatusBadge } from "@/components/dashboard/document-status-badge";
import type { DocumentItem } from "@/lib/dashboard/types";
import { cn } from "@/lib/utils";

type DocumentCardProps = {
  document: DocumentItem;
  className?: string;
};

export function DocumentCard({ document, className }: DocumentCardProps) {
  const isReady = document.status === "ready";
  const isProcessing = document.status === "processing";
  const isFailed = document.status === "failed";

  return (
    <StickerPanel className={cn("p-5 md:p-6", className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border-2 border-ds-border bg-ds-brand-softer">
            <FileText className="size-6 text-ds-brand" aria-hidden />
          </span>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="truncate font-sans text-base font-semibold text-ds-heading md:text-lg">
                {document.title}
              </h3>
              <DocumentStatusBadge status={document.status} />
            </div>

            <p className="mt-1 truncate font-sans text-sm text-ds-body-subtle">
              {document.fileName}
            </p>

            <dl className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-sans text-xs text-ds-body-subtle md:text-sm">
              <div>
                <dt className="sr-only">File size</dt>
                <dd>{document.fileSizeLabel}</dd>
              </div>
              <div>
                <dt className="sr-only">Pages</dt>
                <dd>{document.pageCount} pages</dd>
              </div>
              <div>
                <dt className="sr-only">Uploaded</dt>
                <dd>{document.uploadedAtLabel}</dd>
              </div>
            </dl>

            {isProcessing && document.progressPercent != null && (
              <div className="mt-4">
                <div className="mb-1 flex items-center justify-between font-sans text-xs text-ds-body-subtle">
                  <span>Indexing document…</span>
                  <span>{document.progressPercent}%</span>
                </div>
                <div
                  className="h-2 overflow-hidden rounded-full border border-ds-border-light bg-ds-neutral-secondary-soft"
                  role="progressbar"
                  aria-valuenow={document.progressPercent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Indexing progress"
                >
                  <div
                    className="h-full rounded-full bg-ds-brand transition-all"
                    style={{ width: `${document.progressPercent}%` }}
                  />
                </div>
              </div>
            )}

            {isFailed && document.errorMessage && (
              <p className="mt-3 font-sans text-sm text-red-700 dark:text-red-300">
                {document.errorMessage}
              </p>
            )}
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2 sm:flex-col sm:items-stretch">
          {isReady && (
            <BrandButton
              href={`/documents/${document.id}`}
              className="!px-5 !py-2 !text-sm"
            >
              <MessageSquare className="size-4" aria-hidden />
              Chat
            </BrandButton>
          )}

          {isFailed && (
            <BrandButton
              type="button"
              variant="tertiary"
              className="!px-5 !py-2 !text-sm"
              aria-disabled="true"
            >
              Retry upload
            </BrandButton>
          )}

          {!isProcessing && (
            <button
              type="button"
              className="ds-btn-ghost !text-sm text-ds-body-subtle"
              aria-disabled="true"
              aria-label={`Delete ${document.title}`}
            >
              <Trash2 className="size-4" aria-hidden />
              <span className="sm:sr-only">Delete</span>
            </button>
          )}
        </div>
      </div>
    </StickerPanel>
  );
}

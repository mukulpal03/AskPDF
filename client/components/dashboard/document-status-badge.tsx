import { cn } from "@/lib/utils";
import type { DocumentStatus } from "@/lib/dashboard/types";

const statusConfig: Record<
  DocumentStatus,
  { label: string; className: string }
> = {
  ready: {
    label: "Ready",
    className:
      "border-ds-border-brand bg-ds-brand-softer text-ds-heading",
  },
  processing: {
    label: "Indexing",
    className:
      "border-ds-fg-brand/30 bg-ds-neutral-primary-medium text-ds-heading",
  },
  failed: {
    label: "Failed",
    className: "border-red-300 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950/40 dark:text-red-200",
  },
};

type DocumentStatusBadgeProps = {
  status: DocumentStatus;
  className?: string;
};

export function DocumentStatusBadge({
  status,
  className,
}: DocumentStatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 font-sans text-xs font-medium",
        config.className,
        className,
      )}
    >
      {config.label}
    </span>
  );
}

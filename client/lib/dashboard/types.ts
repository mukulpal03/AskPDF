export type DocumentStatus = "ready" | "processing" | "failed";

export type DocumentItem = {
  id: string;
  title: string;
  fileName: string;
  fileSizeLabel: string;
  pageCount: number;
  uploadedAtLabel: string;
  status: DocumentStatus;
  /** Shown when status is `processing` (0–100). */
  progressPercent?: number;
  /** Shown when status is `failed`. */
  errorMessage?: string;
};

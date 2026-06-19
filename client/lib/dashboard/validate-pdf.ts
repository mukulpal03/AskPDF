import { MAX_PDF_BYTES } from "@/lib/api/config";

const PDF_MIME_TYPES = new Set(["application/pdf"]);

export function validatePdfFile(file: File): string | null {
  const isPdfMime = PDF_MIME_TYPES.has(file.type);
  const isPdfExtension = file.name.toLowerCase().endsWith(".pdf");

  if (!isPdfMime && !isPdfExtension) {
    return "Only PDF files are allowed.";
  }

  if (file.size > MAX_PDF_BYTES) {
    return "File exceeds the 10 MB limit. Try a smaller PDF.";
  }

  return null;
}

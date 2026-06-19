import type { DocumentItem } from "./types";

/** Static placeholder data for dashboard UI development. */
export const MOCK_DOCUMENTS: DocumentItem[] = [
  {
    id: "doc_research-paper",
    title: "Attention Is All You Need",
    fileName: "attention-is-all-you-need.pdf",
    fileSizeLabel: "2.4 MB",
    pageCount: 15,
    uploadedAtLabel: "2 hours ago",
    status: "ready",
  },
  {
    id: "doc_contract",
    title: "Q1 Vendor Agreement",
    fileName: "vendor-agreement-q1.pdf",
    fileSizeLabel: "890 KB",
    pageCount: 8,
    uploadedAtLabel: "Yesterday",
    status: "ready",
  },
  {
    id: "doc_manual",
    title: "Product Manual v3",
    fileName: "product-manual-v3.pdf",
    fileSizeLabel: "5.1 MB",
    pageCount: 124,
    uploadedAtLabel: "Just now",
    status: "processing",
    progressPercent: 62,
  },
  {
    id: "doc_report",
    title: "Annual Report 2025",
    fileName: "annual-report-2025.pdf",
    fileSizeLabel: "12.8 MB",
    pageCount: 48,
    uploadedAtLabel: "3 days ago",
    status: "failed",
    errorMessage: "File exceeded the 10 MB limit. Try a smaller PDF.",
  },
];

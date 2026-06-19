import { DocumentCard } from "@/components/dashboard/document-card";
import type { DocumentItem } from "@/lib/dashboard/types";

type DocumentLibraryProps = {
  documents: DocumentItem[];
};

export function DocumentLibrary({ documents }: DocumentLibraryProps) {
  if (documents.length === 0) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-ds-border-light bg-ds-panel/60 px-6 py-16 text-center">
        <p className="font-heading text-2xl text-ds-heading">No documents yet</p>
        <p className="mx-auto mt-2 max-w-sm font-sans text-sm text-ds-body-subtle">
          Upload your first PDF above to start chatting with your documents.
        </p>
      </div>
    );
  }

  return (
    <ul className="grid gap-4" aria-label="Your documents">
      {documents.map((document) => (
        <li key={document.id}>
          <DocumentCard document={document} />
        </li>
      ))}
    </ul>
  );
}

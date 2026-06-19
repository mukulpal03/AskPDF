import { DashboardIntro } from "@/components/dashboard/dashboard-intro";
import { DocumentLibrary } from "@/components/dashboard/document-library";
import { UploadZone } from "@/components/dashboard/upload-zone";
import type { DocumentItem } from "@/lib/dashboard/types";

type DashboardViewProps = {
  documents: DocumentItem[];
};

export function DashboardView({ documents }: DashboardViewProps) {
  return (
    <main className="ds-container flex-1 py-10 md:py-14">
      <DashboardIntro documentCount={documents.length} />

      <section aria-labelledby="upload-heading" className="mb-12 md:mb-16">
        <h2 id="upload-heading" className="sr-only">
          Upload PDF
        </h2>
        <UploadZone />
      </section>

      <section aria-labelledby="library-heading">
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2
            id="library-heading"
            className="font-heading text-2xl text-ds-heading md:text-3xl"
          >
            Recent documents
          </h2>
        </div>
        <DocumentLibrary documents={documents} />
      </section>
    </main>
  );
}

type DashboardIntroProps = {
  documentCount: number;
};

export function DashboardIntro({ documentCount }: DashboardIntroProps) {
  return (
    <header className="mb-8 md:mb-10">
      <p className="font-sans text-sm font-medium uppercase tracking-wide text-ds-brand">
        Library
      </p>
      <h1 className="mt-1 font-heading text-4xl text-ds-heading md:text-5xl">
        Your documents
      </h1>
      <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-ds-body md:text-lg">
        Upload PDFs, track indexing status, and open any ready document to start
        chatting.
      </p>
      {documentCount > 0 && (
        <p className="mt-2 font-sans text-sm text-ds-body-subtle">
          {documentCount} document{documentCount === 1 ? "" : "s"} in your library
        </p>
      )}
    </header>
  );
}

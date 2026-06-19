export function DashboardIntro() {
  return (
    <header className="mb-8 md:mb-10">
      <p className="font-sans text-sm font-medium uppercase tracking-wide text-ds-brand">
        Upload
      </p>
      <h1 className="mt-1 font-heading text-4xl text-ds-heading md:text-5xl">
        Add a PDF
      </h1>
      <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-ds-body md:text-lg">
        Upload a PDF to the server. Document listing and chat will come once we
        add a database.
      </p>
    </header>
  );
}

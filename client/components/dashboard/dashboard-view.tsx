"use client";

import { DashboardIntro } from "@/components/dashboard/dashboard-intro";
import { UploadZone } from "@/components/dashboard/upload-zone";

export function DashboardView() {
  return (
    <main className="ds-container flex-1 py-10 md:py-14">
      <DashboardIntro />

      <section aria-labelledby="upload-heading">
        <h2 id="upload-heading" className="sr-only">
          Upload PDF
        </h2>
        <UploadZone />
      </section>
    </main>
  );
}

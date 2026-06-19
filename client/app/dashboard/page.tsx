import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { FileText } from "lucide-react";

export default async function DashboardPage() {
  await auth();

  return (
    <div className="ds-section-pattern flex min-h-full flex-1 flex-col">
      <header
        className="border-b-2 border-ds-border"
        style={{ background: "var(--ds-menu-bar)" }}
      >
        <div className="ds-container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-lg border-2 border-ds-border bg-ds-panel shadow-(--ds-sticker-shadow)">
              <FileText className="size-5 text-ds-brand" aria-hidden />
            </span>
            <span className="font-heading text-xl text-ds-heading md:text-2xl">
              AskPDF
            </span>
          </Link>
          <UserButton />
        </div>
      </header>

      <main className="ds-container flex flex-1 flex-col justify-center py-16">
        <h1 className="font-heading text-4xl text-ds-heading md:text-5xl">
          Welcome to AskPDF
        </h1>
        <p className="mt-4 max-w-lg font-sans text-base leading-relaxed text-ds-body md:text-lg">
          Your dashboard is coming soon. Upload and chat with your PDFs from
          here once the app area is ready.
        </p>
      </main>
    </div>
  );
}

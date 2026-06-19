import Link from "next/link";
import { FileText } from "lucide-react";

type AuthShellProps = {
  children: React.ReactNode;
};

export function AuthShell({ children }: AuthShellProps) {
  return (
    <div className="ds-section-pattern flex min-h-full flex-1 flex-col">
      <div className="ds-container flex flex-1 flex-col items-center justify-center py-12">
        <Link
          href="/"
          className="mb-8 flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <span className="flex size-9 items-center justify-center rounded-lg border-2 border-ds-border bg-ds-panel shadow-(--ds-sticker-shadow)">
            <FileText className="size-5 text-ds-brand" aria-hidden />
          </span>
          <span className="font-heading text-xl text-ds-heading md:text-2xl">
            AskPDF
          </span>
        </Link>
        {children}
      </div>
    </div>
  );
}

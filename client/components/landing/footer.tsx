import Link from "next/link";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Sign in", href: "/sign-in" },
];

export function LandingFooter() {
  return (
    <footer className="border-t-2 border-ds-border bg-ds-mint py-10">
      <div className="ds-container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-heading text-xl text-ds-heading">AskPDF</p>
          <p className="mt-1 font-sans text-sm text-ds-body-subtle">
            Chat with your documents, powered by RAG.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="ds-link text-sm">
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="font-sans text-xs text-ds-body-subtle">
          © {new Date().getFullYear()} AskPDF
        </p>
      </div>
    </footer>
  );
}

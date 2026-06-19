import Link from "next/link";
import { BrandButton } from "@/components/ui/brand-button";
import { FileText } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
];

export function LandingHeader() {
  return (
    <header
      className="sticky top-0 z-50 border-b-2 border-ds-border"
      style={{ background: "var(--ds-menu-bar)" }}
    >
      <div className="ds-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg border-2 border-ds-border bg-ds-panel shadow-[var(--ds-sticker-shadow)]">
            <FileText className="size-5 text-ds-brand" aria-hidden />
          </span>
          <span className="font-heading text-xl text-ds-heading md:text-2xl">
            AskPDF
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <BrandButton key={link.href} variant="ghost" href={link.href}>
              {link.label}
            </BrandButton>
          ))}
        </nav>

        <BrandButton href="#get-started">Get started</BrandButton>
      </div>
    </header>
  );
}

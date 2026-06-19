"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";

type AppNavItem = {
  label: string;
  href: string;
  match?: (pathname: string) => boolean;
};

const navItems: AppNavItem[] = [
  {
    label: "Library",
    href: "/dashboard",
    match: (pathname) => pathname === "/dashboard",
  },
];

export function AppHeader() {
  const pathname = usePathname();

  return (
    <header
      className="relative z-10 border-b-2 border-ds-border"
      style={{ background: "var(--ds-menu-bar)" }}
    >
      <div className="ds-container flex h-16 items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-6">
          <Link href="/dashboard" className="flex shrink-0 items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-lg border-2 border-ds-border bg-ds-panel shadow-(--ds-sticker-shadow)">
              <FileText className="size-5 text-ds-brand" aria-hidden />
            </span>
            <span className="font-heading text-xl text-ds-heading md:text-2xl">
              AskPDF
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 sm:flex"
            aria-label="App"
          >
            {navItems.map((item) => {
              const isActive = item.match
                ? item.match(pathname)
                : pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-2 font-sans text-sm font-medium transition-colors",
                    isActive
                      ? "bg-ds-brand-softer text-ds-heading"
                      : "text-ds-body-subtle hover:bg-ds-neutral-secondary-soft hover:text-ds-heading",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <UserButton />
      </div>
    </header>
  );
}

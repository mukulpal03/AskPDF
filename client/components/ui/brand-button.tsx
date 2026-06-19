import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandButtonVariant = "brand" | "tertiary" | "ghost";

type BrandButtonProps = {
  variant?: BrandButtonVariant;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & (
  | Omit<React.ComponentProps<"button">, "href">
  | Omit<React.ComponentProps<typeof Link>, "href">
);

const variantClass: Record<BrandButtonVariant, string> = {
  brand: "ds-btn-brand",
  tertiary: "ds-btn-tertiary",
  ghost: "ds-btn-ghost",
};

export function BrandButton({
  variant = "brand",
  href,
  className,
  children,
  ...props
}: BrandButtonProps) {
  const classes = cn(variantClass[variant], className);
  const linkHref = href ?? (props as { href?: string }).href;

  if (linkHref) {
    const { href: _href, ...linkProps } = props as React.ComponentProps<typeof Link>;
    return (
      <Link href={linkHref} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(props as React.ComponentProps<"button">)}>
      {children}
    </button>
  );
}

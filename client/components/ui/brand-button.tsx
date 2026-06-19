import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandButtonVariant = "brand" | "tertiary" | "ghost";

type BrandButtonProps = {
  variant?: BrandButtonVariant;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & (
  | React.ComponentProps<"button">
  | React.ComponentProps<typeof Link>
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

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as React.ComponentProps<typeof Link>)}>
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

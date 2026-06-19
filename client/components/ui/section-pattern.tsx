import { cn } from "@/lib/utils";

type SectionPatternProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  pattern?: boolean;
};

export function SectionPattern({
  children,
  className,
  id,
  pattern = true,
}: SectionPatternProps) {
  return (
    <section
      id={id}
      className={cn(
        pattern ? "ds-section-pattern" : "bg-ds-mint",
        "py-12 md:py-[88px]",
        className
      )}
    >
      <div className="ds-section-content ds-container">{children}</div>
    </section>
  );
}

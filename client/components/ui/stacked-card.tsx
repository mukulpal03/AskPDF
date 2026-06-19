import { cn } from "@/lib/utils";

type StackedCardProps = {
  title: string;
  description: string;
  media: React.ReactNode;
  interactive?: boolean;
  className?: string;
};

export function StackedCard({
  title,
  description,
  media,
  interactive = false,
  className,
}: StackedCardProps) {
  return (
    <div
      className={cn(
        "ds-card-stack",
        interactive && "ds-card-stack--interactive",
        className
      )}
    >
      <div className="ds-card">
        <div className="ds-card-media">{media}</div>
        <h3 className="mt-3 font-sans text-base font-semibold text-ds-heading md:text-xl">
          {title}
        </h3>
        <p className="mt-2 font-sans text-sm leading-relaxed text-ds-body md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

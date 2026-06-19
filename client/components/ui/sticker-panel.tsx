import { cn } from "@/lib/utils";

type StickerPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export function StickerPanel({ children, className }: StickerPanelProps) {
  return <div className={cn("ds-sticker-panel p-6 md:p-8", className)}>{children}</div>;
}

import { AppHeader } from "@/components/app/app-header";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="ds-section-pattern flex min-h-full flex-1 flex-col">
      <AppHeader />
      <div className="ds-section-content flex flex-1 flex-col">{children}</div>
    </div>
  );
}

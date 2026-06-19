import { auth } from "@clerk/nextjs/server";
import { DashboardView } from "@/components/dashboard";

export default async function DashboardPage() {
  await auth();

  return <DashboardView />;
}

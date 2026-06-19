import { auth } from "@clerk/nextjs/server";
import { DashboardView } from "@/components/dashboard";
import { MOCK_DOCUMENTS } from "@/lib/dashboard/mock-documents";

export default async function DashboardPage() {
  await auth();

  return <DashboardView documents={MOCK_DOCUMENTS} />;
}

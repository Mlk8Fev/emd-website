import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { AdminNav } from "@/components/layout/AdminNav";

export default async function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session) redirect("/admin/login");

  return (
    <div className="flex min-h-screen flex-col bg-emd-gris-leger lg:flex-row">
      <AdminNav username={session.user?.name || "Admin"} />
      <main className="flex-1 p-6 sm:p-10">{children}</main>
    </div>
  );
}

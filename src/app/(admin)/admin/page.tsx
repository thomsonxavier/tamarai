import { AdminHeader } from "@/components/admin/AdminHeader";

export default function AdminDashboardPage() {
  return (
    <>
      <AdminHeader title="Dashboard" />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-base font-semibold">Welcome</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Admin workspace for products, orders, and customers. This shell is
            ready for authenticated routes.
          </p>
        </div>
      </main>
    </>
  );
}

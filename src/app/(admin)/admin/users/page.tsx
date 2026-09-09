import { AdminHeader } from "@/components/admin/AdminHeader";

export default function AdminUsersPage() {
  return (
    <>
      <AdminHeader title="Users" />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="rounded-xl border border-zinc-200 bg-white p-6">
          <p className="text-sm text-zinc-600">
            User management will live here.
          </p>
        </div>
      </main>
    </>
  );
}

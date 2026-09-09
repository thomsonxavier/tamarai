# Agent guide — Next.js + shadcn (storefront + admin)

Use **this repo as the reference implementation**. New UI (including any storefront/admin e-commerce work) follows these conventions. Do not copy legacy Next.js 12/13/14 APIs from training data.

Before writing Next.js code, read the installed docs under `node_modules/next/dist/docs/` (from this package, not a parent monorepo `next`).

---

## Stack (do not invent alternatives)

| Layer | This project |
| --- | --- |
| Framework | Next.js **App Router** (`src/app`), React 19, TypeScript |
| Request intercept | `src/proxy.ts` (**not** `middleware.ts`) |
| Styling | Tailwind CSS **v4** (`src/styles/globals.css`, `@import "tailwindcss"`) |
| UI | **shadcn** (`components.json`, `@/components/ui`, `cn()` from `@/lib/utils`) |
| Icons | `lucide-react` |
| Data | TanStack Query v5 — hooks in `src/services/queries/**` |
| HTTP | `fetcher` in `src/services/fetcher/fetcher.ts` + axios instance |
| Forms | react-hook-form + zod |
| Aliases | `@/` → `src/` (`@/components`, `@/lib`, `@/hooks`, `@/services`) |

New screens: **shadcn + Tailwind utilities**. Do not add new Ant Design surfaces unless extending an existing antd page.

Add shadcn pieces with the CLI (`npx shadcn@latest add …`) so they land in `src/components/ui` and match `components.json` (`style: radix-nova`, `rsc: true`, CSS variables).

---

## App Router layout (role shells)

Mirror existing route groups:

```
src/app/
  layout.tsx                 # root: fonts, Query provider, global CSS
  (storefront)/              # public shop — like (landing)
  admin/
    layout.tsx               # thin shell
    (auth)/                  # sign-in / forgot-password (no sidebar)
    (routes)/
      layout.tsx             # 'use client' — sidebar + header + scroll main
      dashboard/page.tsx
      products/page.tsx
      orders/page.tsx
      …
```

- **Admin authenticated chrome**: copy `src/app/admin/(routes)/layout.tsx` — `flex h-screen overflow-hidden`, sidebar, sticky header, scrollable `main`.
- **Auth vs app**: `(auth)` vs `(routes)` like `src/app/doctor/(auth)` and `src/app/doctor/(routes)`.
- **RBAC**: enforce in `src/proxy.ts` by role + path prefix (same pattern as doctor/admin/hospital). Do not rely on layout-only checks.
- Pages stay thin: route file composes View components from `src/components/View/...`.
- Default Server Components. `'use client'` only for hooks, events, or browser APIs.
- Colocate `loading.tsx` / `error.tsx` / `not-found.tsx` on route segments that fetch.

---

## Data layer

```
src/services/queries/<domain>/
  Queries.tsx   # useQuery / useMutation hooks
  types.ts      # request/response types
```

```tsx
// ✅ GOOD — named hook, queryKey array, fetcher
export function useAdminProductList(params: { search: string; page: number }) {
  return useQuery({
    queryKey: ["adminProducts", params.search, params.page],
    queryFn: () => fetcher({ url: `/admin/products`, method: "get", params }),
  });
}

// ❌ BAD — fetch inside a page component, untyped any, string-only queryKey
```

- Handle `isLoading` / `isError` in the View, not inside the query hook.
- Mutations: `useQueryClient()` + invalidate the list key after success.
- URLs live in `src/enum/api_urls` (or equivalent), not hardcoded in JSX.
- Query client is created once in `src/lib/ReactQueryProvider.tsx` (do not recreate per render).

---

## UI / components

- Primitives: `src/components/ui/*` (Button, Dialog, …). Compose; do not fork copies.
- Feature UI: `src/components/View/<Role>/...` (e.g. `View/Admin/...`, storefront under `View/Shop/...`).
- Shared chrome: `src/components/common/` (Header, SideBar).
- Class merging: always `cn(...)`.
- Forms: shadcn form primitives + RHF + zod; types in the feature `types.ts`.

```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

<Button variant="outline" size="sm" className={cn(open && "bg-muted")}>
  Save
</Button>
```

---

## Next.js 16 notes (breaking vs older docs)

- Use **`src/proxy.ts`**, not `middleware.ts`.
- Prefer `next.config.ts`; Turbopack `root` is set to this package directory.
- `images.remotePatterns` for remote assets (S3 hostname from env).
- Security headers + CSP nonce: follow `src/proxy.ts` and root `layout.tsx` (`headers()`, `x-nonce`).
- Env: `@t3-oss/env-nextjs` / `NEXT_PUBLIC_*` for client; never leak server secrets into client bundles.

---

## E-commerce feature map (when building shop + admin)

**Storefront (public / customer):** catalog, product detail, cart, checkout, order status. Server Components for catalog where possible; client for cart/checkout.

**Admin (authenticated):** dashboard, products CRUD, orders, customers, inventory — same admin `(routes)` shell as above.

Keep storefront and admin **route trees and View folders separate**. Share types, query hooks, and `components/ui` only.

---

## Do / don’t

- **Do** match existing file names (`Queries.tsx`, `types.ts`) and `@/` imports.
- **Do** keep changes scoped; no drive-by refactors or new markdown unless asked.
- **Don’t** introduce Redux for new features (Query + local/zustand is the pattern).
- **Don’t** use Pages Router (`pages/`).
- **Don’t** call `fetch` ad hoc in components when `fetcher` + a query hook exists.

"use client";

import {
  Bell,
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { type ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { landingImages } from "@/lib/landing-assets";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/stores/cart";

const headerLinks = [
  { href: "/products", label: "Shop by" },
  { href: "/contact", label: "Wholesale" },
  { href: "/about", label: "About us" },
  { href: "/stores", label: "Our Stores" },
  { href: "/contact", label: "Contact us" },
  { href: "/#arrivals", label: "My orders" },
] as const;

function IconBadge({ count }: { count: number }) {
  return (
    <span className="absolute -top-0.5 -right-0.5 flex size-[18px] items-center justify-center rounded-full bg-[#F5C518] font-sans text-[10px] font-bold text-black">
      {count}
    </span>
  );
}

function HeaderIconButton({
  label,
  badge,
  children,
  onClick,
  id,
}: {
  label: string;
  badge?: number;
  children: ReactNode;
  onClick?: () => void;
  id?: string;
}) {
  return (
    <Button
      id={id}
      variant="ghost"
      size="icon"
      aria-label={label}
      onClick={onClick}
      className="relative size-10 text-ink hover:bg-zinc-100 hover:text-ink [&_svg]:size-5"
    >
      {children}
      {badge != null ? <IconBadge count={badge} /> : null}
    </Button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const openCart = useCartStore((state) => state.openCart);
  const pulse = useCartStore((state) => state.pulse);
  const cartCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  return (
    <div className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[1440px] items-center gap-4 px-4 md:h-[4.75rem] md:gap-6 md:px-6 lg:px-8">
        <Link
          href="/"
          className="relative z-10 block h-9 w-[9.5rem] shrink-0 md:h-10 md:w-[10.5rem]"
          aria-label="Thamarai home"
        >
          <Image
            src={landingImages.logoLight}
            alt="Thamarai Brand"
            fill
            sizes="168px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-5 lg:flex lg:gap-6"
          aria-label="Primary"
        >
          {headerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans text-[15px] font-medium whitespace-nowrap text-ink transition-colors hover:text-zinc-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <form
          role="search"
          className="ml-auto hidden min-w-0 flex-1 sm:block sm:max-w-[280px] lg:max-w-[340px] xl:max-w-[380px]"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="relative block">
            <span className="sr-only">Search products</span>
            <Search
              className="pointer-events-none absolute top-1/2 left-3.5 size-[18px] -translate-y-1/2 text-zinc-400"
              aria-hidden
            />
            <input
              type="search"
              name="q"
              placeholder="What are you looking for?"
              className="h-11 w-full rounded-full border border-zinc-300 bg-white pr-4 pl-11 text-sm text-ink outline-none placeholder:text-zinc-400 focus-visible:border-zinc-400 focus-visible:ring-2 focus-visible:ring-zinc-200"
            />
          </label>
        </form>

        <div className="flex shrink-0 items-center gap-0.5 sm:ml-0">
          <HeaderIconButton label="Notifications" badge={3}>
            <Bell />
          </HeaderIconButton>
          <HeaderIconButton label="Wishlist">
            <Heart />
          </HeaderIconButton>
          <HeaderIconButton
            id="header-cart"
            label="Cart"
            badge={cartCount || undefined}
            onClick={openCart}
          >
            <motion.span
              key={pulse}
              className="inline-flex"
              initial={false}
              animate={pulse > 0 ? { scale: [1, 1.28, 1] } : { scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ShoppingCart />
            </motion.span>
          </HeaderIconButton>

          <button
            type="button"
            className="ml-1 hidden items-center gap-1 rounded-full p-0.5 pr-1 text-ink transition-colors hover:bg-zinc-100 sm:inline-flex"
            aria-label="Account menu"
          >
            <span className="flex size-9 items-center justify-center overflow-hidden rounded-full bg-zinc-200 text-zinc-600">
              <User className="size-5" />
            </span>
            <ChevronDown className="size-4 text-zinc-500" />
          </button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-ink hover:bg-zinc-100 hover:text-ink lg:hidden [&_svg]:size-[22px]"
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Image
                    src={landingImages.logoLight}
                    alt="Thamarai Brand"
                    width={160}
                    height={39}
                    className="h-8 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>
              <form
                role="search"
                className="mt-6 sm:hidden"
                onSubmit={(event) => event.preventDefault()}
              >
                <label className="relative block">
                  <span className="sr-only">Search products</span>
                  <Search
                    className="pointer-events-none absolute top-1/2 left-3.5 size-[18px] -translate-y-1/2 text-white/40"
                    aria-hidden
                  />
                  <input
                    type="search"
                    name="q"
                    placeholder="What are you looking for?"
                    className="h-11 w-full rounded-full border border-white/15 bg-white/5 pr-4 pl-11 text-sm text-cream outline-none placeholder:text-white/40"
                  />
                </label>
              </form>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {headerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-xl px-3 py-3 font-sans text-sm text-cream/80 transition-colors hover:bg-white/5 hover:text-gold",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { formatRupees, useCartStore } from "@/stores/cart";

export function CartDrawer() {
  const items = useCartStore((state) => state.items);
  const isOpen = useCartStore((state) => state.isOpen);
  const setOpen = useCartStore((state) => state.setOpen);
  const closeCart = useCartStore((state) => state.closeCart);
  const increment = useCartStore((state) => state.increment);
  const decrement = useCartStore((state) => state.decrement);
  const removeItem = useCartStore((state) => state.removeItem);
  const subtotal = items.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0,
  );

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent tone="light" className="gap-0">
        <SheetHeader className="border-b border-zinc-100 px-5 py-4 pr-12">
          <SheetTitle className="font-sans text-lg font-semibold text-[#1A1A1A]">
            My cart
          </SheetTitle>
        </SheetHeader>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="py-10 text-center font-sans text-sm text-[#8A8A8A]">
              Your cart is empty.
            </p>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map((item, index) => (
                <li key={item.id} className="grid grid-cols-[1.25rem_4.25rem_minmax(0,1fr)] gap-3">
                  <span className="pt-1 font-sans text-sm text-[#1A1A1A]">
                    {index + 1}.
                  </span>
                  <div className="relative size-[68px] overflow-hidden rounded-[10px] bg-[#F4EEE4]">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="68px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="border-b border-zinc-200 pb-2 font-sans text-sm leading-snug font-semibold text-[#1A1A1A]">
                          {item.name}
                        </p>
                        <p className="mt-2 font-sans text-sm text-[#8A8A8A]">
                          Wt: {item.weight}
                        </p>
                      </div>
                      <p className="shrink-0 font-sans text-sm font-medium text-[#1A1A1A]">
                        {formatRupees(item.unitPrice)}.00
                      </p>
                    </div>
                    <div className="mt-3 flex flex-col items-end gap-2">
                      <div className="inline-flex overflow-hidden rounded-md border border-zinc-300">
                        <button
                          type="button"
                          aria-label={`Decrease ${item.name}`}
                          className="grid size-8 place-items-center text-[#1A1A1A] hover:bg-zinc-50"
                          onClick={() => decrement(item.id)}
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="grid min-w-8 place-items-center border-x border-zinc-300 font-sans text-sm">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label={`Increase ${item.name}`}
                          className="grid size-8 place-items-center text-[#1A1A1A] hover:bg-zinc-50"
                          onClick={() => increment(item.id)}
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        className="font-sans text-sm font-medium text-[#C4A35A] hover:underline"
                        onClick={() => removeItem(item.id)}
                      >
                        X Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-zinc-100 bg-white px-5 py-4 shadow-[0_-8px_24px_rgba(0,0,0,0.04)]">
          <div>
            <p className="font-sans text-sm text-[#8A8A8A]">Cart sub total</p>
            <p className="font-sans text-xl font-bold text-[#1A1A1A]">
              {formatRupees(subtotal)}
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-[10px] border-zinc-300 bg-white px-4 text-sm font-semibold text-[#1A1A1A] hover:bg-zinc-50 hover:text-[#1A1A1A]"
            >
              <Link href="/cart" onClick={closeCart}>
                Go to my cart
              </Link>
            </Button>
            <Button
              asChild
              className="h-11 rounded-[10px] bg-[#C4A35A] px-4 text-sm font-semibold text-white hover:bg-[#b3934d] hover:text-white"
            >
              <Link href="/cart" onClick={closeCart}>
                Checkout
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

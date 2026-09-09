"use client";

import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { formatRupees, useCartStore } from "@/stores/cart";
import { cn } from "@/lib/utils";

const COUPON_CODE = "FEST200";
const COUPON_RATE = 0.1;

function formatMoney(value: number) {
  return `Rs ${value.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function CartView() {
  const items = useCartStore((state) => state.items);
  const increment = useCartStore((state) => state.increment);
  const decrement = useCartStore((state) => state.decrement);
  const removeItem = useCartStore((state) => state.removeItem);
  const [code, setCode] = useState(COUPON_CODE);
  const [applied, setApplied] = useState(true);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0,
  );
  const discount = applied && code.trim().toUpperCase() === COUPON_CODE
    ? Math.round(subtotal * COUPON_RATE)
    : 0;
  const total = Math.max(0, subtotal - discount);

  const couponHint = useMemo(() => {
    if (!applied) {
      return null;
    }
    if (code.trim().toUpperCase() !== COUPON_CODE) {
      return "Enter FEST200 for 10% off.";
    }
    return null;
  }, [applied, code]);

  return (
    <div className="bg-[#F5F5F5] text-ink">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-8 md:px-8 md:py-12">
        <nav className="font-sans text-sm text-[#9A9A9A]" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/" className="hover:text-[#333]">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>My cart</li>
          </ol>
        </nav>
        <h1 className="mt-3 font-sans text-[32px] font-bold text-[#333] md:text-[40px]">
          My cart
        </h1>

        {items.length === 0 ? (
          <div className="mt-8 rounded-[16px] bg-white p-8">
            <p className="font-sans text-sm text-[#8A8A8A]">
              Your cart is empty.{" "}
              <Link href="/products" className="text-[#2F80ED] underline">
                Continue shopping
              </Link>
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
            <section className="rounded-[16px] bg-white px-5 py-2 md:px-8">
              <ul>
                {items.map((item, index) => (
                  <li
                    key={item.id}
                    className={cn(
                      "grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 py-6 sm:grid-cols-[6.5rem_minmax(0,1fr)_auto]",
                      index > 0 && "border-t border-dotted border-zinc-300",
                    )}
                  >
                    <div className="relative size-[88px] overflow-hidden rounded-[12px] bg-[#F4EEE4] sm:size-[104px]">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="104px"
                        className="object-cover"
                      />
                      <span className="absolute top-1.5 right-1.5 flex size-6 items-center justify-center rounded-full bg-[#1A1A1A] font-sans text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <p className="font-sans text-[15px] leading-snug font-semibold text-[#333] md:text-base">
                        {item.name}
                      </p>
                      <p className="mt-1 font-sans text-sm text-[#8A8A8A]">
                        {item.weight}
                      </p>
                      <div className="mt-3 flex gap-4">
                        <button
                          type="button"
                          className="font-sans text-sm text-[#2F80ED] underline"
                          onClick={() => {
                            const url =
                              typeof window === "undefined"
                                ? ""
                                : window.location.origin + "/products";
                            if (navigator.share) {
                              void navigator.share({ title: item.name, url });
                            }
                          }}
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          className="font-sans text-sm text-[#2F80ED] underline"
                        >
                          Save for later
                        </button>
                      </div>
                    </div>

                    <div className="col-span-2 flex items-start justify-between gap-4 sm:col-span-1 sm:flex-col sm:items-end">
                      <p className="font-sans text-base font-bold text-[#333]">
                        {formatRupees(item.unitPrice * item.quantity)}
                      </p>
                      <div className="flex flex-col items-end gap-2">
                        <div className="inline-flex overflow-hidden rounded-md border border-zinc-300 bg-white">
                          <button
                            type="button"
                            aria-label={`Decrease ${item.name}`}
                            className="grid size-9 place-items-center text-[#333] hover:bg-zinc-50"
                            onClick={() => decrement(item.id)}
                          >
                            <Minus className="size-3.5" />
                          </button>
                          <span className="grid min-w-9 place-items-center border-x border-zinc-300 font-sans text-sm">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label={`Increase ${item.name}`}
                            className="grid size-9 place-items-center text-[#333] hover:bg-zinc-50"
                            onClick={() => increment(item.id)}
                          >
                            <Plus className="size-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          className="font-sans text-sm font-medium text-[#E07A2F]"
                          onClick={() => removeItem(item.id)}
                        >
                          X Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <aside className="rounded-[16px] bg-white p-5 md:p-6">
              <p className="font-sans text-sm text-[#8A8A8A]">
                Discount and promo code
              </p>
              <form
                className="mt-3 flex gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  setApplied(true);
                }}
              >
                <label className="relative min-w-0 flex-1">
                  <span className="sr-only">Promo code</span>
                  <input
                    value={code}
                    onChange={(event) => {
                      setCode(event.target.value);
                      setApplied(false);
                    }}
                    className="h-11 w-full rounded-[10px] border border-zinc-300 bg-white pr-9 pl-3 font-sans text-sm text-[#333] outline-none focus-visible:border-zinc-400"
                  />
                  {code ? (
                    <button
                      type="button"
                      aria-label="Clear promo code"
                      className="absolute top-1/2 right-2 -translate-y-1/2 text-zinc-400 hover:text-[#333]"
                      onClick={() => {
                        setCode("");
                        setApplied(false);
                      }}
                    >
                      <X className="size-4" />
                    </button>
                  ) : null}
                </label>
                <Button
                  type="submit"
                  variant="dark"
                  className="h-11 rounded-[10px] px-5 text-sm font-semibold text-white"
                >
                  Apply
                </Button>
              </form>
              {couponHint ? (
                <p className="mt-2 font-sans text-xs text-[#E07A2F]">{couponHint}</p>
              ) : null}
              <button
                type="button"
                className="mt-3 font-sans text-sm text-[#2F80ED] underline"
                onClick={() => {
                  setCode(COUPON_CODE);
                  setApplied(true);
                }}
              >
                See Available Coupons
              </button>

              <p className="mt-8 font-sans text-sm text-[#8A8A8A]">Summary</p>
              <dl className="mt-4 space-y-3 font-sans text-sm text-[#333]">
                <div className="flex justify-between gap-4">
                  <dt>Sub Total - {itemCount} Items</dt>
                  <dd>{formatMoney(subtotal)}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Shipping</dt>
                  <dd>Free</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Discount</dt>
                  <dd>
                    {discount > 0
                      ? `10% (-${discount.toLocaleString("en-IN")} Rs)`
                      : "-"}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Tax</dt>
                  <dd>-</dd>
                </div>
              </dl>
              <div className="mt-4 flex justify-between border-t border-zinc-200 pt-4 font-sans text-lg font-bold text-[#333]">
                <span>Total</span>
                <span>{formatMoney(total)}</span>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}

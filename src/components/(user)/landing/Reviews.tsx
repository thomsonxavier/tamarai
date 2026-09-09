"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    initials: "JH",
    name: "Jaquon Hart",
    role: "Digital Marketing Executive, Hypebeast",
    quote:
      "With Thamarai, we finally have dates and nuts we’d actually gift. Freshness is obvious from the first handful.",
  },
  {
    initials: "HB",
    name: "Harinder Bharwal",
    role: "Product Manager, Salestation Asia",
    quote:
      "Ordering for the office is simple, packing is clean, and the flavour holds up. It’s become our default snack order.",
  },
  {
    initials: "AS",
    name: "Ananya Sharma",
    role: "Founder, Grove Studio",
    quote:
      "Premium without being fussy. The cashews and dates disappear faster than anything else we keep in the pantry.",
  },
] as const;

export function Reviews() {
  const scroller = useRef<HTMLDivElement>(null);

  function scrollByPage(direction: -1 | 1) {
    const node = scroller.current;
    if (!node) {
      return;
    }
    node.scrollBy({ left: direction * (node.clientWidth * 0.8), behavior: "smooth" });
  }

  return (
    <section className="relative overflow-hidden bg-[#2C241C] py-14 md:py-20">
      {/* Swap this block for the walnut photo when you have it */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(90,70,48,0.55),transparent_55%),linear-gradient(180deg,#3a3128_0%,#1a1510_48%,#4a3a2c_100%)]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <div className="mb-10 flex items-center justify-between gap-4">
          <h2 className="font-sans text-[22px] font-bold tracking-wide text-white uppercase md:text-[28px]">
            The reviews are in
          </h2>
          <div className="flex shrink-0 gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Previous reviews"
              onClick={() => scrollByPage(-1)}
              className="size-10 rounded-full border border-white text-white hover:bg-white/10 hover:text-white"
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Next reviews"
              onClick={() => scrollByPage(1)}
              className="size-10 rounded-full border border-white text-white hover:bg-white/10 hover:text-white"
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>

        <div
          ref={scroller}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 scrollbar-none"
        >
          {reviews.map((review) => (
            <article
              key={review.name}
              className="w-[min(85vw,340px)] shrink-0 snap-start rounded-[18px] bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.18)] lg:w-[calc((100%-2.5rem)/3)]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-zinc-200 font-sans text-sm font-bold text-zinc-700">
                  {review.initials}
                </span>
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="size-4 fill-[#F5C518] text-[#F5C518]"
                    />
                  ))}
                </div>
              </div>
              <p className="mt-5 text-[14px] leading-relaxed text-zinc-600">
                {review.quote}
              </p>
              <p className="mt-6 font-sans text-[15px] font-bold text-[#1B2A4A]">
                {review.name}
              </p>
              <p className="mt-0.5 text-[13px] text-zinc-500">{review.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

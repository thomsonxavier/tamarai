"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { ProductCard } from "@/components/(user)/product/ProductCard";
import { Button } from "@/components/ui/button";
import { landingImages } from "@/lib/landing-assets";

const favorites = [
  {
    name: "Premium Cashews 1 KG (Whole Cashews/Kaju) FREE Container",
    image: landingImages.cashews,
    alt: "Bowl overflowing with walnuts and cashews",
    price: "8,999",
    compareAt: "13,999",
  },
  {
    name: "Premium Red Kidney Beans 1 KG FREE Container",
    image: landingImages.beans,
    alt: "Dark red kidney beans spilled from a bowl",
    price: "8,999",
    compareAt: "13,999",
  },
  {
    name: "Premium California Almonds 1 KG (Badaam/Badam) FREE Container",
    image: landingImages.almonds,
    alt: "Whole nuts in a rustic wooden barrel",
    price: "8,999",
    compareAt: "13,999",
  },
  {
    name: "Assorted Dry Fruits Mix 1 KG FREE Container",
    image: landingImages.floatingNuts,
    alt: "Colorful assortment of dried fruits and nuts",
    price: "8,999",
    compareAt: "13,999",
  },
  {
    name: "Roasted & Salted Pistachios 750 Grams (Pista) | FREE Container",
    image: landingImages.mace,
    alt: "Red spices in a white bowl",
    price: "8,999",
    compareAt: "13,999",
  },
] as const;

export function Favorites() {
  const scroller = useRef<HTMLDivElement>(null);

  function scrollByPage(direction: -1 | 1) {
    const node = scroller.current;
    if (!node) {
      return;
    }
    const amount = Math.min(node.clientWidth * 0.9, 320);
    node.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <section className="relative overflow-hidden text-ink">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[46%] bg-[#F3E4B8]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[54%] bg-[#FAF6EE]" />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 py-12 md:px-8 md:py-16">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="font-sans text-[22px] font-bold text-black md:text-[28px]">
            Explore your favorites
          </h2>
          <div className="flex shrink-0 items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Previous products"
              onClick={() => scrollByPage(-1)}
              className="size-10 rounded-full border border-black text-black hover:bg-black/5 hover:text-black"
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Next products"
              onClick={() => scrollByPage(1)}
              className="size-10 rounded-full border border-black text-black hover:bg-black/5 hover:text-black"
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>

        <div
          ref={scroller}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {favorites.map((item) => (
            <div
              key={item.name}
              className="w-[min(78vw,260px)] shrink-0 snap-start lg:w-[calc((100%-3.75rem)/4)]"
            >
              <ProductCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

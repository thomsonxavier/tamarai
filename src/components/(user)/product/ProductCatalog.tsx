"use client";

import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "@/components/(user)/landing/Motion";
import { ProductCard, type ProductCardData } from "@/components/(user)/product/ProductCard";
import { ProductFilters } from "@/components/(user)/product/ProductFilters";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { catalogProducts } from "@/lib/products";

const catalog: ProductCardData[] = catalogProducts.map((item) => ({
  name: item.name,
  image: item.image,
  alt: item.alt,
  price: item.price,
  compareAt: item.compareAt,
  href: `/products/${item.slug}`,
  id: item.slug,
}));

const products = Array.from({ length: 12 }, (_, index) => ({
  ...catalog[index % catalog.length],
  key: `${catalog[index % catalog.length].name}-${index}`,
}));

const sortOptions = ["Popularity", "Price: Low to High", "Price: High to Low"] as const;

function CatalogToolbar({
  sort,
  sortOpen,
  onToggleSort,
  onSelectSort,
}: {
  sort: (typeof sortOptions)[number];
  sortOpen: boolean;
  onToggleSort: () => void;
  onSelectSort: (option: (typeof sortOptions)[number]) => void;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="font-sans text-sm text-[#8A8A8A] md:text-[15px]">
        Showing <span className="font-semibold text-[#333]">&apos;Millets&apos;</span>{" "}
        with <span className="font-semibold text-[#333]">823</span> Results
      </p>

      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="h-10 rounded-[8px] border-[#D9D9D9] bg-white text-[#333] hover:bg-zinc-50 hover:text-[#333] lg:hidden"
            >
              <SlidersHorizontal className="size-4" />
              Filter
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[min(100%,22.5rem)] overflow-y-auto bg-[#FEFCF0] p-0 pt-12 text-[#333] [&_button]:text-[#333]"
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <ProductFilters className="rounded-none border-0" />
          </SheetContent>
        </Sheet>

        <div className="relative">
          <Button
            type="button"
            variant="outline"
            className="h-10 rounded-[8px] border-[#D9D9D9] bg-white px-4 font-sans text-sm font-normal text-[#8A8A8A] hover:bg-zinc-50 hover:text-[#333]"
            aria-expanded={sortOpen}
            onClick={onToggleSort}
          >
            Sort by : <span className="ml-1 font-semibold text-[#333]">{sort}</span>
            <ChevronDown className="size-4 text-[#333]" />
          </Button>
          {sortOpen ? (
            <ul className="absolute right-0 z-20 mt-1 min-w-full overflow-hidden rounded-[8px] border border-[#D9D9D9] bg-white py-1 shadow-md">
              {sortOptions.map((option) => (
                <li key={option}>
                  <button
                    type="button"
                    className="w-full px-4 py-2 text-left font-sans text-sm text-[#333] hover:bg-[#FEFCF0]"
                    onClick={() => onSelectSort(option)}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function ProductCatalog() {
  const [sort, setSort] = useState<(typeof sortOptions)[number]>("Popularity");
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <section className="relative z-10 -mt-16 px-3 pb-16 sm:-mt-20 md:-mt-24 md:px-8 lg:-mt-28 lg:px-10">
      <div className="mx-auto grid w-full container items-start gap-5 lg:grid-cols-[minmax(260px,345px)_minmax(0,1fr)] lg:gap-6">
        <aside className="relative z-20 hidden lg:block lg:-mt-4">
          <div className="rounded-[22px] bg-linear-to-br from-[#E8B45A] to-[#C9893A] p-[3px] shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
            <ProductFilters className="border-0 bg-[#FEFCF0]" />
          </div>
        </aside>

        <div className="min-w-0 rounded-[22px] bg-white p-4 shadow-[0_14px_40px_rgba(0,0,0,0.08)] sm:p-6 md:rounded-[26px] lg:p-7 lg:-mt-4">
          <CatalogToolbar
            sort={sort}
            sortOpen={sortOpen}
            onToggleSort={() => setSortOpen((open) => !open)}
            onSelectSort={(option) => {
              setSort(option);
              setSortOpen(false);
            }}
          />

          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((item, index) => (
              <FadeIn key={item.key} delay={(index % 3) * 0.05}>
                <ProductCard {...item} />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

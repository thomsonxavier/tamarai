"use client";

import { FadeIn } from "@/components/(user)/landing/Motion";
import { ProductCard } from "@/components/(user)/product/ProductCard";
import { catalogProducts } from "@/lib/products";

export function NewArrivals() {
  return (
    <section
      id="arrivals"
      className="scroll-mt-24 bg-[#FCF8F1] py-14 text-ink md:py-20"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <FadeIn className="mb-10 text-center md:mb-12">
          <h2 className="font-sans text-[26px] font-bold text-black md:text-[32px]">
            New Arrivals
          </h2>
          <p className="mx-auto mt-2 max-w-xl font-sans text-sm text-neutral-700 md:text-[15px]">
            Get a taste of something new! Here we introduce our latest additions.
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {catalogProducts.map((item, index) => (
            <FadeIn key={item.slug} delay={index * 0.06}>
              <ProductCard
                name={item.name}
                image={item.image}
                alt={item.alt}
                price={item.price}
                compareAt={item.compareAt}
                href={`/products/${item.slug}`}
                id={item.slug}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  ChevronDown,
  ChevronUp,
  Heart,
  Share2,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { landingImages } from "@/lib/landing-assets";
import { almondDetail, type CatalogProduct } from "@/lib/products";
import { cn } from "@/lib/utils";
import { parsePrice, useCartStore } from "@/stores/cart";

export function ProductDetailHero({ product }: { product: CatalogProduct }) {
  const thumbs = [
    { src: landingImages.productDetail, alt: product.alt },
    { src: product.image, alt: product.alt },
    { src: landingImages.productDetailDesc, alt: "Product pack detail" },
  ];
  const [active, setActive] = useState(0);
  const [weight, setWeight] = useState<(typeof almondDetail.weights)[number]>(
    almondDetail.defaultWeight,
  );
  const [saved, setSaved] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const imageRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white text-ink">
      <div className="mx-auto w-full max-w-[1200px] px-5 pt-6 pb-10 md:px-8 md:pt-8 md:pb-14">
        <nav className="mb-6 font-sans text-sm text-[#9A9A9A]" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/" className="hover:text-[#333]">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/products" className="hover:text-[#333]">
                {product.category}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="font-medium text-[#C4A35A]">{product.name.split("(")[0].trim()}</li>
          </ol>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-12">
          <div className="relative">
            <div
              ref={imageRef}
              className="relative aspect-square overflow-hidden rounded-[18px] bg-[#F4EEE4] md:aspect-4/3 lg:aspect-square"
            >
              <Image
                src={thumbs[active].src}
                alt={thumbs[active].alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <Button
                type="button"
                size="icon"
                variant="ghost"
                aria-label="Share product"
                className="size-10 rounded-full border border-zinc-200 bg-white text-[#333] hover:bg-zinc-50 hover:text-[#333]"
              >
                <Share2 className="size-4" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                aria-label="Save to wishlist"
                className={cn(
                  "size-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50",
                  saved ? "text-red-500" : "text-[#333] hover:text-[#333]",
                )}
                onClick={() => setSaved((value) => !value)}
              >
                <Heart className={cn("size-4", saved && "fill-current")} />
              </Button>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex flex-1 gap-3 overflow-x-auto">
                {thumbs.map((thumb, index) => (
                  <button
                    key={thumb.src}
                    type="button"
                    aria-label={`View image ${index + 1}`}
                    aria-pressed={active === index}
                    onClick={() => setActive(index)}
                    className={cn(
                      "relative size-[72px] shrink-0 overflow-hidden rounded-[10px] border-2",
                      active === index ? "border-[#333]" : "border-transparent",
                    )}
                  >
                    <Image src={thumb.src} alt="" fill className="object-cover" sizes="72px" />
                  </button>
                ))}
              </div>
              <div className="hidden flex-col gap-2 sm:flex">
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  aria-label="Previous image"
                  className="size-8 rounded-md border border-zinc-200 bg-white text-[#333] hover:bg-zinc-50 hover:text-[#333]"
                  onClick={() => setActive((index) => (index === 0 ? thumbs.length - 1 : index - 1))}
                >
                  <ChevronUp className="size-4" />
                </Button>
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  aria-label="Next image"
                  className="size-8 rounded-md border border-zinc-200 bg-white text-[#333] hover:bg-zinc-50 hover:text-[#333]"
                  onClick={() => setActive((index) => (index === thumbs.length - 1 ? 0 : index + 1))}
                >
                  <ChevronDown className="size-4" />
                </Button>
              </div>
            </div>
          </div>

          <div>
            <p className="font-sans text-sm text-[#9A9A9A]">{almondDetail.brand}</p>
            <h1 className="mt-1 font-sans text-[28px] leading-tight font-bold text-[#1A1A1A] md:text-[34px]">
              {product.slug === "premium-california-almonds"
                ? almondDetail.title
                : product.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className="font-sans">
                <span className="text-sm text-[#9A9A9A] line-through">
                  Rs. {almondDetail.compareAt}
                </span>{" "}
                <span className="text-[28px] font-bold text-[#1A1A1A]">
                  Rs. {almondDetail.price}
                </span>
              </p>
              <span className="text-sm text-[#9A9A9A]">{almondDetail.sold}</span>
              <span className="flex items-center gap-1 text-sm font-medium text-[#1A1A1A]">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    className={cn(
                      "size-4",
                      index < 4
                        ? "fill-[#F5A623] text-[#F5A623]"
                        : "fill-[#F5A623]/40 text-[#F5A623]/40",
                    )}
                  />
                ))}
                {almondDetail.rating}
              </span>
            </div>

            <div className="mt-6">
              <p className="font-sans text-sm font-bold text-[#1A1A1A]">Short Description:</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-[#8A8A8A]">
                {almondDetail.shortDescription}
              </p>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <p className="font-sans text-sm text-[#8A8A8A]">Weight:</p>
                <button
                  type="button"
                  className="font-sans text-sm text-[#8A8A8A] underline"
                >
                  View Nutrition Info
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {almondDetail.weights.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setWeight(option)}
                    className={cn(
                      "rounded-md border px-4 py-2 font-sans text-sm",
                      weight === option
                        ? "border-[#1A1A1A] text-[#1A1A1A]"
                        : "border-zinc-200 text-[#555]",
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                type="button"
                className="h-12 flex-1 rounded-[10px] bg-[#C4A35A] text-base font-semibold text-white hover:bg-[#b3934d] hover:text-white"
                onClick={() =>
                  addItem({
                    id: `${product.slug}-${weight}`,
                    name:
                      product.slug === "premium-california-almonds"
                        ? almondDetail.title
                        : product.name,
                    image: thumbs[active].src,
                    weight,
                    unitPrice: parsePrice(almondDetail.price),
                    from: imageRef.current?.getBoundingClientRect(),
                  })
                }
              >
                Add To Cart
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-12 flex-1 rounded-[10px] border-zinc-300 bg-white text-base font-semibold text-[#1A1A1A] hover:bg-zinc-50 hover:text-[#1A1A1A]"
              >
                Checkout Now
              </Button>
            </div>
            <button type="button" className="mt-3 font-sans text-sm text-[#8A8A8A] underline">
              Delivery T&amp;C
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

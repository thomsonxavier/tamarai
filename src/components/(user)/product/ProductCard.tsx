"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { parsePrice, useCartStore } from "@/stores/cart";

export type ProductCardData = {
  name: string;
  image: string;
  alt: string;
  price: string;
  compareAt: string;
  href?: string;
  id?: string;
  weight?: string;
};

export function ProductCard({
  name,
  image,
  alt,
  price,
  compareAt,
  href,
  id,
  weight = "1 KG",
}: ProductCardData) {
  const addItem = useCartStore((state) => state.addItem);
  const cardRef = useRef<HTMLElement>(null);

  const media = (
    <div className="relative aspect-5/4 overflow-hidden rounded-[14px] bg-[#eee8dc]">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
        className="object-cover"
      />
    </div>
  );

  return (
    <article ref={cardRef} className="flex h-full min-w-0 flex-col">
      {href ? (
        <Link href={href} className="min-w-0">
          {media}
          <h3 className="mt-3 min-h-13 font-sans text-[15px] leading-snug font-semibold text-black hover:underline">
            {name}
          </h3>
        </Link>
      ) : (
        <>
          {media}
          <h3 className="mt-3 min-h-13 font-sans text-[15px] leading-snug font-semibold text-black">
            {name}
          </h3>
        </>
      )}
      <p className="mt-2 font-sans text-[15px] text-black">
        <span className="font-bold">Rs. {price}</span>{" "}
        <span className="ml-1 text-[13px] font-normal text-[#A89070] line-through">
          {compareAt}
        </span>
      </p>
      <Button
        type="button"
        variant="dark"
        className="mt-4 h-11 w-full rounded-[10px] text-[15px] font-medium text-white"
        onClick={() =>
          addItem({
            id: id ?? href ?? name,
            name,
            image,
            weight,
            unitPrice: parsePrice(price),
            from: cardRef.current?.querySelector("img")?.getBoundingClientRect(),
          })
        }
      >
        + Add to Cart
      </Button>
    </article>
  );
}

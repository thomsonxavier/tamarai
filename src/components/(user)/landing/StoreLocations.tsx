"use client";

import Image from "next/image";
import { useState } from "react";
import { FadeIn } from "@/components/(user)/landing/Motion";
import { Button } from "@/components/ui/button";
import { landingImages } from "@/lib/landing-assets";
import { cn } from "@/lib/utils";

const locations = [
  {
    id: "neelambur",
    label: "Neelambur",
    title: "Thamarai Dry Fruits — Neelambur",
    address:
      "764/3B, Avinashi Rd, Cexus Nagar, Neelambur, Coimbatore, Tamil Nadu – 641062",
    blurb:
      "A convenient destination for quality dry fruits, nuts, seeds and natural products.",
    maps: "https://www.google.com/maps/search/?api=1&query=764%2F3B+Avinashi+Rd+Cexus+Nagar+Neelambur+Coimbatore+641062",
  },
  {
    id: "selvapuram",
    label: "Selvapuram",
    title: "Thamarai Dry Fruits — Selvapuram",
    address: "Selvapuram, Coimbatore, Tamil Nadu",
    blurb:
      "A convenient destination for quality dry fruits, nuts, seeds and natural products.",
    maps: "https://www.google.com/maps/search/?api=1&query=Thamarai+Dry+Fruits+Selvapuram+Coimbatore",
  },
] as const;

export function StoreLocations() {
  const [index, setIndex] = useState(0);
  const location = locations[index];

  function go(direction: -1 | 1) {
    setIndex((current) => (current + direction + locations.length) % locations.length);
  }

  return (
    <section className="bg-[#FDFAF4] pt-16 pb-16 text-black md:pt-24 md:pb-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
        <FadeIn>
          <h2 className="mx-auto max-w-[857px] text-center font-sans text-[28px] leading-tight font-semibold tracking-[-0.04em] md:text-[40px] md:leading-[63px] lg:text-[48px]">
            <span className="text-[#AA5C00]">Success stories</span>{" "}
            <span className="text-black">Why worth your time</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.08} className="relative mt-12 md:mt-16 lg:mt-[76px]">
          <div className="relative flex flex-col lg:block lg:min-h-[650px]">
            <div className="relative mx-auto aspect-[724/650] w-full max-w-[724px] overflow-hidden rounded-[41px] bg-[#FFEECC] lg:absolute lg:top-0 lg:left-0 lg:mx-0 lg:h-[650px] lg:w-[min(46%,724px)] lg:aspect-auto">
              <div className="absolute top-4 right-0 bottom-0 left-4 overflow-hidden rounded-tl-[27px] rounded-tr-[27px] rounded-bl-[27px]">
                <Image
                  src={landingImages.successStory}
                  alt={`${location.title} storefront`}
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div
              className="relative z-10 mx-auto mt-6 w-full max-w-[952px] px-6 py-10 sm:px-10 lg:absolute lg:top-[99px] lg:right-0 lg:mt-0 lg:min-h-[511px] lg:w-[min(62%,952px)] lg:px-16 lg:pt-12 lg:pb-14"
              style={{
                borderRadius: "41.79px",
                border: "0.944px solid rgba(49, 58, 59, 0.18)",
                background:
                  "linear-gradient(270deg, rgba(243, 241, 228, 0.95) 11.54%, rgba(255, 255, 255, 0.95) 94.77%)",
              }}
            >
              <div className="flex gap-8 border-b border-[#A8B2B4]/70">
                {locations.map((item, itemIndex) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setIndex(itemIndex)}
                    className={cn(
                      "relative pb-3 font-sans text-[16px] tracking-[-0.05em] md:text-[18px]",
                      itemIndex === index
                        ? "font-semibold text-[#B86300]"
                        : "font-normal text-[#787878]",
                    )}
                  >
                    {item.label}
                    {itemIndex === index ? (
                      <span className="absolute inset-x-0 -bottom-px h-[3px] bg-[#B86300]" />
                    ) : null}
                  </button>
                ))}
              </div>

              <h3 className="mt-8 max-w-[643px] font-sans text-[24px] leading-tight font-medium tracking-[-0.03em] text-[#272727] md:text-[32px] md:leading-[50px]">
                {location.title}
              </h3>
              <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <p className="max-w-[508px] text-[18px] leading-8 text-[#272727] md:text-[26px] md:leading-[40px]">
                  📍 {location.address}
                </p>
                <p className="max-w-[336px] text-[15px] leading-relaxed tracking-[-0.04em] text-[#272727] md:text-[16px] md:leading-[29px] lg:pt-16">
                  {location.blurb}
                </p>
              </div>

              <Button
                asChild
                variant="dark"
                className="mt-8 h-auto w-[285px] max-w-full rounded-[6.5px] px-8 py-3.5 font-semibold"
              >
                <a href={location.maps} target="_blank" rel="noreferrer">
                  Get Direction
                </a>
              </Button>

              <button
                type="button"
                aria-label="Previous location"
                onClick={() => go(-1)}
                className="absolute top-1/2 left-0 z-20 hidden size-[59px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#EBE6D4] lg:flex"
              >
                <Image
                  src={landingImages.storeChevron}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 rotate-180"
                />
              </button>
              <button
                type="button"
                aria-label="Next location"
                onClick={() => go(1)}
                className="absolute top-1/2 right-0 z-20 hidden size-[59px] translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#EBE6D4] lg:flex"
              >
                <Image
                  src={landingImages.storeChevron}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6"
                />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

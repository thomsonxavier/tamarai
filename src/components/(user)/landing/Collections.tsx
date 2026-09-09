"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/(user)/landing/Motion";
import { Button } from "@/components/ui/button";
import { landingImages } from "@/lib/landing-assets";
import { cn } from "@/lib/utils";

function ShopNowLink({ className }: { className?: string }) {
  return (
    <Link
      href="/products"
      className={cn(
        "mt-1 inline-block font-sans text-[13px] font-medium text-[#2F80ED] hover:underline",
        className,
      )}
    >
      Shop now
    </Link>
  );
}

export function Collections() {
  return (
    <section id="collections" className="scroll-mt-24 bg-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <div className="mb-6 flex items-center gap-5 md:mb-8 md:gap-6">
          <h2 className="shrink-0 font-sans text-[22px] leading-none font-bold text-black md:text-[26px]">
            Categories
          </h2>
          <div
            className="h-px min-w-0 max-w-36 flex-1 bg-linear-to-r from-neutral-800 via-neutral-400 to-transparent"
            aria-hidden
          />
        </div>

        <div className="grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2 lg:h-[460px] lg:grid-cols-[1.3fr_1fr_1fr_1.15fr] lg:grid-rows-2">
          <FadeIn className="h-full min-h-[340px] sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:min-h-0">
            <article className="relative flex h-full flex-col overflow-hidden rounded-[22px] bg-[#F4D48A] p-6">
              <p className="font-sans text-sm font-semibold text-black">
                Top Quality
              </p>
              <h3 className="mt-1 max-w-[10ch] font-sans text-[28px] leading-[1.15] font-extrabold text-black md:text-[32px]">
                Nuts &amp; Dry Fruits
              </h3>
              <Button
                asChild
                size="sm"
                className="mt-4 w-fit bg-white text-[#2F80ED] hover:bg-white hover:shadow-none"
              >
                <Link href="/products">Shop now</Link>
              </Button>
              <div className="relative mt-4 min-h-[180px] flex-1">
                <Image
                  src={landingImages.categoryNuts}
                  alt="Assortment of cashews, pistachios, almonds, and walnuts"
                  fill
                  sizes="(max-width: 1024px) 100vw, 32vw"
                  className="object-contain object-bottom"
                />
              </div>
            </article>
          </FadeIn>

          <FadeIn
            delay={0.06}
            className="h-full min-h-[200px] sm:col-span-2 lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:min-h-0"
          >
            <article className="relative h-full overflow-hidden rounded-[22px]">
              <Image
                src={landingImages.categoryDates}
                alt="Premium dates on a light wooden surface"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[center_70%]"
              />
              <div className="relative z-10 p-5">
                <h3 className="font-sans text-lg font-extrabold text-black">
                  Premium Dates
                </h3>
                <ShopNowLink />
              </div>
            </article>
          </FadeIn>

          <FadeIn
            delay={0.1}
            className="h-full min-h-[220px] lg:col-start-2 lg:row-start-2 lg:min-h-0"
          >
            <article className="relative h-full overflow-hidden rounded-[22px]">
              <Image
                src={landingImages.categorySpices}
                alt="Spices, garlic, and herbs arranged on pale wood"
                fill
                sizes="(max-width: 1024px) 50vw, 22vw"
                className="object-cover object-bottom"
              />
              <div className="relative z-10 p-5">
                <h3 className="font-sans text-lg font-extrabold text-black">
                  Spices
                </h3>
                <ShopNowLink />
              </div>
            </article>
          </FadeIn>

          <FadeIn
            delay={0.14}
            className="h-full min-h-[220px] lg:col-start-3 lg:row-start-2 lg:min-h-0"
          >
            <article className="relative h-full overflow-hidden rounded-[22px] bg-white">
              <Image
                src={landingImages.categorySnacks}
                alt="Bowl of roasted cashews on a black plate"
                fill
                sizes="(max-width: 1024px) 50vw, 22vw"
                className="object-cover object-[center_80%]"
              />
              <div className="relative z-10 p-5">
                <h3 className="font-sans text-lg font-extrabold text-black">
                  Snacks
                </h3>
                <ShopNowLink />
              </div>
            </article>
          </FadeIn>

          <FadeIn
            delay={0.08}
            className="h-full min-h-[280px] sm:col-span-2 lg:col-span-1 lg:col-start-4 lg:row-span-2 lg:row-start-1 lg:min-h-0"
          >
            <article className="relative h-full overflow-hidden rounded-[22px]">
              <Image
                src={landingImages.categoryMillets}
                alt="Ceramic bowls filled with millet grains"
                fill
                sizes="(max-width: 1024px) 100vw, 26vw"
                className="object-cover object-[80%_center]"
              />
              <div className="relative z-10 p-5">
                <h3 className="font-sans text-lg font-extrabold text-black">
                  Millets
                </h3>
                <ShopNowLink />
              </div>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

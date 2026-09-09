"use client";

import Image from "next/image";
import { FadeIn } from "@/components/(user)/landing/Motion";
import { landingImages } from "@/lib/landing-assets";
import { cn } from "@/lib/utils";

const callouts = [
  {
    label: "Gluten free product",
    side: "left" as const,
    labelClass: "top-[4%] left-0 text-left md:left-[1%]",
    arrowClass: "top-[11%] left-[2%] md:left-[8%]",
    rotate: "-rotate-[18deg] scale-x-[-1]",
  },
  {
    label: "High Protein",
    side: "right" as const,
    labelClass: "top-[4%] right-0 text-right md:right-[1%]",
    arrowClass: "top-[8%] right-[1%] md:right-[6%]",
    rotate: "-rotate-[42deg]",
  },
  {
    label: "Zero calories sugar",
    side: "left" as const,
    labelClass: "bottom-[7%] left-0 text-left md:left-[1%]",
    arrowClass: "bottom-[14%] left-[2%] md:left-[8%]",
    rotate: "rotate-[18deg] scale-x-[-1]",
  },
  {
    label: "No artificial sweetness",
    side: "right" as const,
    labelClass: "bottom-[7%] right-0 text-right md:right-[1%]",
    arrowClass: "bottom-[12%] right-[1%] md:right-[6%]",
    rotate: "rotate-[42deg]",
  },
] as const;

export function LotusFeature() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8E7] py-14 text-black md:py-20">
      <div className="relative mx-auto w-full max-w-[1100px] px-5 md:px-8">
        <FadeIn>
          <h2 className="mx-auto max-w-3xl text-center font-sans text-[22px] leading-snug font-bold md:text-[28px]">
            Bites, Smile, Repeat, your daily dose of freshness in every can!
          </h2>
        </FadeIn>

        <div className="relative mx-auto mt-8 aspect-5/4 w-full max-w-[820px] md:mt-10 md:aspect-4/3">
          <p
            className="pointer-events-none absolute top-1/2 left-1/2 z-0 w-[140%] -translate-x-1/2 -translate-y-1/2 text-center font-sans text-[18vw] leading-none font-extrabold tracking-[0.18em] text-[#E8D9B0] uppercase select-none md:text-[7.5rem]"
            aria-hidden
          >
            Thamarai
          </p>

          {callouts.map((callout) => (
            <div key={callout.label}>
              <p
                className={cn(
                  "absolute z-30 max-w-[9.5rem] font-sans text-[13px] font-bold md:max-w-none md:text-[15px]",
                  callout.labelClass,
                )}
              >
                {callout.label}
              </p>
              <div
                className={cn(
                  "pointer-events-none absolute z-20 size-[min(38vw,200px)]",
                  callout.arrowClass,
                )}
                aria-hidden
              >
                <Image
                  src={landingImages.arrowLoop}
                  alt=""
                  fill
                  sizes="200px"
                  className={cn("object-contain", callout.rotate)}
                />
              </div>
            </div>
          ))}

          <FadeIn
            delay={0.08}
            className="absolute inset-[12%] z-10 md:inset-[10%]"
          >
            <Image
              src={landingImages.lotusLight}
              alt="Lotus mosaic of nuts, spices, dried fruits, and seeds"
              fill
              sizes="(max-width: 1024px) 90vw, 720px"
              className="object-contain"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

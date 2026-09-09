"use client";

import { useReducedMotion, motion } from "framer-motion";
import Image from "next/image";
import { HeroReveal } from "@/components/(user)/landing/Motion";
import { landingImages } from "@/lib/landing-assets";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-[#F6EFE6]"
        aria-hidden
      />

      <div className="relative mx-auto flex w-full container flex-col items-center px-5 pt-10 pb-14 text-center md:px-8 md:pt-14 md:pb-20">
        <HeroReveal>
          <h1 className="max-w-4xl font-sans text-[1.65rem] leading-[1.15] font-extrabold tracking-[-0.02em] text-black uppercase sm:text-4xl md:text-[2.75rem] lg:text-[3.15rem]">
            Nature&apos;s finest. Delivered fresh.
          </h1>
        </HeroReveal>

        <HeroReveal delay={0.08} className="w-full">
          <p className="mt-4 px-2 text-[13px] leading-relaxed font-medium text-zinc-500 sm:text-[15px] md:mt-5 lg:px-0 lg:text-[14px] lg:whitespace-nowrap xl:text-[15px]">
            Premium Dates, Dry Fruits, Nuts &amp; Natural Foods Sourced With
            Care And Packed For Maximum Freshness. Healthy Snacking Made
            Delicious For Every Family.
          </p>
        </HeroReveal>

        <div className="relative mt-6 flex w-full items-center justify-center overflow-x-clip md:mt-8">
          <p
            className="pointer-events-none absolute top-1/4 left-1/2 z-0 w-max -translate-x-1/2 -translate-y-1/2 text-center font-sans text-[clamp(1.5rem,10vw,8.5rem)] leading-none font-extrabold tracking-[0.04em] text-[#EEDFCC] uppercase whitespace-nowrap select-none"
            aria-hidden
          >
            Premium millets
          </p>

          <HeroReveal delay={0.12} className="relative z-10">
            <motion.div
              className="relative aspect-square w-[min(72vw,28rem)] overflow-hidden rounded-full md:w-[min(52vw,32rem)]"
              initial={reduce ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={landingImages.hero}
                alt="Black ceramic bowl filled with golden millet grains"
                fill
                priority
                sizes="(max-width: 768px) 72vw, 512px"
                className="object-cover"
              />
            </motion.div>
          </HeroReveal>
        </div>
      </div>
    </section>
  );
}

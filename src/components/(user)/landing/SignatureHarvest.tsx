"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/(user)/landing/Motion";
import { Button } from "@/components/ui/button";
import { landingImages } from "@/lib/landing-assets";

export function SignatureHarvest() {
  return (
    <section className="overflow-hidden bg-[#FFF9E5] py-14 text-black md:py-20">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-8 px-5 md:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-6">
        <FadeIn>
          <h2 className="max-w-md font-sans text-[28px] leading-tight font-bold md:text-[36px]">
            Where the freshness meets convenience in every Bites!
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-black/80">
            At Thamarai, we believe nature offers everything you need for a
            healthier, happier life. From premium dates and dry fruits to
            wholesome nuts and seeds, every product is thoughtfully selected for
            its quality, freshness, and authentic taste. Whether it&apos;s your
            everyday snack, morning ritual, or a thoughtful gift, Thamarai
            brings you the pure goodness of nature in every bite.
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-8 h-11 border-black bg-transparent px-7 text-black hover:bg-black hover:text-white"
          >
            <Link href="/#arrivals">Explore products</Link>
          </Button>
        </FadeIn>

        <FadeIn delay={0.1} className="relative -mx-5 min-h-[340px] md:-mx-8 lg:mx-0 lg:-mr-[max(0px,calc((100vw-1200px)/2+2rem))] lg:min-h-[520px]">
          <Image
            src={landingImages.floatingNutsLight}
            alt="Wooden bowls of pistachios, almonds, and raisins with nuts in motion"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-contain object-center lg:scale-125 lg:object-right"
          />
        </FadeIn>
      </div>
    </section>
  );
}

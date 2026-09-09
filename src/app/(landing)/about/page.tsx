import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/(user)/landing/Motion";
import { landingImages } from "@/lib/landing-assets";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="bg-ink">
      <section className="mx-auto w-full max-w-[1280px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <FadeIn className="max-w-2xl">
          <p className="mb-3 text-[11px] tracking-[0.32em] text-gold uppercase">
            About Thamarai
          </p>
          <h1 className="font-display text-5xl text-cream md:text-6xl">
            A lotus of flavour, grown with patience.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-cream/70">
            Thamarai is a house of dates, nuts, and spices. We source with care,
            present with honesty, and keep the ritual of sharing food at the
            centre of everything we do.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <Image
                src={landingImages.storeInterior}
                alt="Thamarai retail shelves of nuts and snack pouches"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <Image
                src={landingImages.storefront}
                alt="Thamarai storefront at night"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

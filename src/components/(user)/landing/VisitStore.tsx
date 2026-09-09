import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/(user)/landing/Motion";
import { Button } from "@/components/ui/button";
import { landingImages } from "@/lib/landing-assets";

const features = [
  {
    icon: landingImages.iconPremium,
    title: "Premium Products",
    body: "Carefully selected products chosen for exceptional taste, freshness, and quality.",
    alt: "Serving cloche with quality badge",
  },
  {
    icon: landingImages.iconPacked,
    title: "Freshly Packed",
    body: "Hygienically packed to preserve freshness, texture, and authentic flavour.",
    alt: "Chef holding a package",
  },
] as const;

export function VisitStore() {
  return (
    <section id="stores" className="scroll-mt-24 bg-white py-14 text-black md:py-20">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <FadeIn className="relative mx-auto h-[420px] w-full max-w-md lg:h-[520px] lg:max-w-none">
          <div className="absolute top-0 left-0 h-[78%] w-[62%] overflow-hidden rounded-[18px]">
            <Image
              src={landingImages.storeInterior}
              alt="Wooden retail shelves stocked with Thamarai pouches"
              fill
              sizes="(max-width: 1024px) 60vw, 28vw"
              className="object-cover"
            />
          </div>
          <div className="absolute right-0 bottom-0 h-[78%] w-[62%] overflow-hidden rounded-[18px] shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
            <Image
              src={landingImages.storefront}
              alt="Thamarai storefront at night with a glowing lotus sign"
              fill
              sizes="(max-width: 1024px) 60vw, 28vw"
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="font-sans text-[11px] font-semibold tracking-[0.18em] text-black uppercase">
            Thamarai Brand
          </p>
          <h2 className="mt-2 font-sans text-[32px] leading-none font-bold text-black md:text-[40px]">
            our Story
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-neutral-600">
            Today, we bring together carefully selected dates, dry fruits, nuts,
            seeds, and wholesome foods, sourced with care and packed to preserve
            their natural taste, freshness, and goodness. Every product reflects
            our commitment to quality, authenticity, and healthier everyday
            living.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[14px] border border-zinc-200 bg-white p-5"
              >
                <Image
                  src={feature.icon}
                  alt={feature.alt}
                  width={48}
                  height={48}
                  className="size-12 object-contain mix-blend-multiply"
                />
                <h3 className="mt-4 font-sans text-[15px] font-bold text-black">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>

          <Button asChild variant="dark" className="mt-8 h-11 px-8">
            <Link href="/stores">Our Store</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}

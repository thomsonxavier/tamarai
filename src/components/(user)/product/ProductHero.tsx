import Image from "next/image";
import { landingImages } from "@/lib/landing-assets";

export function ProductHero() {
  return (
    <section className="relative isolate h-[240px] overflow-hidden sm:h-[320px] md:h-[380px] lg:h-[440px]">
      <Image
        src={landingImages.productHero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_28%]"
      />
      {/* <div
        className="absolute inset-0 bg-linear-to-r from-black/55 via-black/25 to-transparent"
        aria-hidden
      /> */}
      {/* <div className="relative mx-auto flex h-full w-full max-w-[1440px] items-center px-5 md:px-10 lg:px-16">
        <div className="max-w-[18rem] sm:max-w-xl lg:max-w-3xl">
          <p className="font-sans text-[13px] tracking-[-0.04em] text-white sm:text-lg md:text-[22px] lg:text-[28px]">
            Always Organic
          </p>
          <h1 className="mt-2 bg-linear-to-r from-white from-15% to-[#FFC31E] bg-clip-text font-sans text-[1.35rem] leading-[1.15] font-extrabold tracking-[-0.04em] text-transparent capitalize sm:text-3xl md:text-5xl md:leading-[1.12] lg:text-[4.4rem] lg:leading-[1.08]">
            Fuel Your Body, Feed Your Soul with Organic Goodness
          </h1>
        </div>
      </div> */}
    </section>
  );
}

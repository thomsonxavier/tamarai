import Image from "next/image";
import { FadeIn } from "@/components/(user)/landing/Motion";
import { landingImages } from "@/lib/landing-assets";

export function StoreHero() {
  return (
    <section
      id="stores"
      className="relative scroll-mt-24 overflow-hidden bg-[#F4EAD7] text-black lg:min-h-[900px]"
    >
      <div
        className="pointer-events-none absolute top-[-32%] right-[-28%] hidden h-[160%] w-[70%] lg:block"
        aria-hidden
      >
        <div className="size-full rotate-[-25deg] rounded-full bg-[#F3E2C3]" />
      </div>

      <div className="pointer-events-none absolute top-[-18%] right-[-14%] bottom-[-26%] hidden w-[58%] lg:block">
        <div className="relative size-full overflow-hidden rounded-[50%]">
          <Image
            src={landingImages.successStory}
            alt="Thamarai storefront with lotus signage and glass entrance"
            fill
            sizes="58vw"
            className="object-cover object-[center_35%]"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-14 md:px-10 md:py-20 lg:py-18">
        <FadeIn className="relative max-w-[810px] lg:pr-8">
          <p className="font-sans text-[18px] font-medium text-[#B38B3B] md:text-[22px] lg:text-[29px]">
            Our Stores
          </p>
          <h2 className="mt-3 font-display text-[42px] leading-[1.08] font-bold md:text-[64px] lg:text-[93px] lg:leading-[100px]">
            Come Visit
            <br />
            <span className="text-[#AA5C00]">Thamarai</span>
          </h2>
          <p className="mt-6 max-w-[592px] font-sans text-[16px] leading-snug tracking-[0.08em] text-[#8F540E] md:text-[20px] lg:text-[24px] lg:leading-10 lg:tracking-[0.125em]">
            From Our Source to Your Store. From Our Store to Your Home.
          </p>
          <Image
            src={landingImages.storeHeadingLine}
            alt=""
            width={558}
            height={1}
            className="mt-4 h-px w-full max-w-[558px]"
          />
          <div className="mt-8 max-w-[809px] space-y-4 font-sans text-[16px] leading-8 text-black md:text-[18px] md:leading-9 lg:text-[20px] lg:leading-10">
            <p>
              For over 25 years, Thamarai has built its name around quality,
              sourcing knowledge and trusted customer relationships.
            </p>
            <p>
              Today, you can experience Thamarai in person at our stores across
              Coimbatore.
            </p>
            <p>
              Explore our range of carefully selected dry fruits, nuts, seeds
              and natural products, speak with our team and find the right
              products for your needs.
            </p>
          </div>
        </FadeIn>

        <FadeIn
          delay={0.08}
          className="relative mx-auto mt-8 aspect-square w-full max-w-[520px] lg:hidden"
        >
          <Image
            src={landingImages.storeEllipse}
            alt=""
            fill
            sizes="90vw"
            className="object-contain"
          />
        </FadeIn>
      </div>
    </section>
  );
}

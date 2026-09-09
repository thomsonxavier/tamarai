import Image from "next/image";
import { FadeIn } from "@/components/(user)/landing/Motion";
import { landingImages } from "@/lib/landing-assets";

const features = [
  {
    title: "Carefully Selected Products",
    body: "Products sourced with our focus on quality, freshness and value.",
    icon: landingImages.iconBadge,
  },
  {
    title: "Personal Assistance",
    body: "Our team can help you choose products based on your requirements.",
    icon: landingImages.iconHeadset,
  },
  {
    title: "Gifting & Celebrations",
    body: "Find the right products for festivals, occasions and thoughtful gifting.",
    icon: landingImages.iconGift,
  },
  {
    title: "Bulk Requirements",
    body: "Looking for larger quantities? Speak with our team about your requirement.",
    icon: landingImages.iconPackage,
  },
] as const;

export function MoreThanStore() {
  return (
    <section className="relative overflow-hidden bg-[#FDF6D6] py-14 text-black md:py-20">
      <div className="pointer-events-none absolute top-[-12%] right-[-8%] hidden h-[120%] w-[min(38vw,560px)] lg:block">
        <Image
          src={landingImages.storeNuts}
          alt=""
          fill
          sizes="38vw"
          className="object-contain object-right "
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 md:px-10">
        <FadeIn className="max-w-[820px]">
          <h2 className="font-sans text-[32px] leading-tight font-semibold tracking-[-0.04em] md:text-[48px] md:leading-[63px]">
            More Than Just a <span className="text-[#AA5C00]">Store</span>
          </h2>
          <div className="mt-6 max-w-[900px] space-y-3 text-[16px] leading-[30px] text-[#444] md:text-[17px]">
            <p>Quality You Can See. Products You Can Choose.</p>
            <p>
              At Thamarai, we believe buying quality products starts with having
              the right choices. Our stores give you the opportunity to explore
              our products in person and get assistance from our team based on
              what you are looking for.
            </p>
            <p>
              Whether you&apos;re shopping for your family, preparing for a
              celebration, looking for a gift or buying in bulk, we&apos;re here
              to help.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:mr-[18%] xl:grid-cols-4 xl:gap-3.75">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={0.04 * index}>
              <article className="relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-[5px] bg-linear-to-b from-[#F4EBC4] to-[#F8F0CA] p-6 md:min-h-[333px]">
                <span
                  className="absolute top-[87px] left-0 h-[56px] w-[6px] bg-[#FF8D28]"
                  aria-hidden
                />
                <div>
                  <div className="flex size-12 items-center justify-center overflow-clip rounded-[3px] border border-[#DBD5B5]">
                    <Image
                      src={feature.icon}
                      alt=""
                      width={20}
                      height={16}
                      className="size-5 object-contain"
                    />
                  </div>
                  <h3 className="mt-3 max-w-[210px] font-sans text-[20px] leading-8 font-medium tracking-[-0.03em] md:text-[22px]">
                    {feature.title}
                  </h3>
                </div>
                <p className="max-w-[277px] text-[13px] leading-5 font-medium tracking-[-0.02em] text-black/80 capitalize">
                  {feature.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="relative mx-auto mt-10 h-[280px] w-full max-w-sm lg:hidden">
          <Image
            src={landingImages.storeNuts}
            alt="Wooden bowl of pistachios with nuts falling around it"
            fill
            sizes="90vw"
            className="object-contain mix-blend-screen contrast-125"
          />
        </div>
      </div>
    </section>
  );
}

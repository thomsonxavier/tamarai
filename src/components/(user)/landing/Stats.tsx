import Image from "next/image";
import { FadeIn } from "@/components/(user)/landing/Motion";
import { landingImages } from "@/lib/landing-assets";

const stats = [
  {
    value: "3+",
    label: "Number of stores",
    icon: landingImages.iconStore,
    alt: "Storefront",
  },
  {
    value: "Top Quality",
    label: "Product",
    icon: landingImages.iconCountries,
    alt: "Globe with location pin",
  },
  {
    value: "5000+",
    label: "Products",
    icon: landingImages.iconProducts,
    alt: "Bowl of dates",
  },
  {
    value: "50+",
    label: "Varieties Of Exotic Nuts and Dry Fruits",
    icon: landingImages.iconVarieties,
    alt: "Date fruit varieties",
  },
] as const;

export function Stats() {
  return (
    <section
      className="relative overflow-hidden border-y border-[#E8DCC8]/35 bg-[#161208]"
      aria-label="Thamarai highlights"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-repeat opacity-70"
        style={{ backgroundImage: `url("${landingImages.statsPattern}")` }}
        aria-hidden
      />
      <div className="relative mx-auto grid w-full max-w-[1200px] gap-10 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
        <FadeIn>
          <h2 className="font-sans text-[28px] font-bold tracking-[0.08em] text-[#E8D4A8] uppercase md:text-[32px]">
            Thamarai
          </h2>
          <div className="mt-2 h-px w-16 bg-[#C8A058]" />
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#F4EDE0]/90">
            Premium dates, dry fruits, nuts and natural foods sourced with care
            and packed for freshness. Rooted in tradition, offered with the
            taste of nature and the touch of quality.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex items-center gap-4 px-0 py-6 sm:px-6 sm:py-8 ${
                  index % 2 === 1 ? "sm:border-l sm:border-white/15" : ""
                } ${index >= 2 ? "border-t border-white/15" : ""}`}
              >
                <Image
                  src={stat.icon}
                  alt={stat.alt}
                  width={48}
                  height={48}
                  className="size-11 shrink-0 object-contain sm:size-12"
                />
                <div>
                  <p className="font-sans text-xl font-bold text-[#E8D4A8] md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[13px] leading-snug text-white/85">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

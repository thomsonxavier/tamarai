import { CalendarDays, Folder } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { landingImages } from "@/lib/landing-assets";

const articles = [
  {
    image: landingImages.cashews,
    alt: "Bowl overflowing with cashews",
    title: "Right way to preserve cashews and keep them crisp",
  },
  {
    image: landingImages.beans,
    alt: "Red kidney beans spilled from a bowl",
    title: "How to store dry beans for everyday cooking",
  },
  {
    image: landingImages.almonds,
    alt: "Almonds in a wooden barrel",
    title: "Choosing California almonds for snacking and gifting",
  },
  {
    image: landingImages.mace,
    alt: "Mace spice in a white bowl",
    title: "A simple guide to spices, freshness, and flavour",
  },
] as const;

export function Articles() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="font-sans text-[22px] font-bold text-black md:text-[28px]">
            Our Latest Articles
          </h2>
          <Button
            asChild
            className="h-10 rounded-md px-5 text-[12px] font-semibold tracking-wide text-white uppercase"
          >
            <Link href="/about">View all</Link>
          </Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <article
              key={article.title}
              className="overflow-hidden rounded-[16px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-zinc-400">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="size-3.5" />
                    12th Jan 2024
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Folder className="size-3.5" />
                    Health
                  </span>
                </p>
                <h3 className="mt-3 font-sans text-[15px] leading-snug font-bold text-black">
                  {article.title}
                </h3>
                <Link
                  href="/about"
                  className="mt-4 inline-block text-[13px] font-medium text-black underline underline-offset-2"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

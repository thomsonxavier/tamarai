"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { landingImages } from "@/lib/landing-assets";
import { almondDetail } from "@/lib/products";
import { cn } from "@/lib/utils";

const tabs = [
  "Description",
  "Health Benefits",
  "Nutrition Info",
  "How to use",
] as const;

export function ProductDescription() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Description");

  return (
    <section className="bg-white text-ink">
      <div className="mx-auto w-full max-w-[1200px] px-5 pb-12 md:px-8 md:pb-16">
        <div className="overflow-hidden rounded-[20px] bg-[#FBF6EC]">
          <div className="flex gap-6 overflow-x-auto border-b border-[#E8DFCC] px-5 md:px-8">
            {tabs.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setTab(item)}
                className={cn(
                  "shrink-0 py-4 font-sans text-sm md:text-[15px]",
                  tab === item
                    ? "border-b-2 border-[#1A1A1A] font-bold text-[#1A1A1A]"
                    : "text-[#6B6B6B]",
                )}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid gap-6 px-5 py-6 md:grid-cols-[minmax(0,1fr)_220px] md:px-8 md:py-8">
            <div>
              {tab === "Description" ? (
                <>
                  <p className="font-sans text-sm leading-relaxed text-[#4A4A4A] md:text-[15px]">
                    {almondDetail.description}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {almondDetail.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-start gap-2 font-sans text-sm text-[#333]"
                      >
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#2F9E44] text-white">
                          <Check className="size-3" />
                        </span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
              {tab === "Health Benefits" ? (
                <p className="font-sans text-sm leading-relaxed text-[#4A4A4A] md:text-[15px]">
                  California almonds are a natural source of protein, fibre, and
                  healthy fats. A handful a day supports satiety, everyday energy,
                  and a wholesome snack habit without added sugar.
                </p>
              ) : null}
              {tab === "Nutrition Info" ? (
                <p className="font-sans text-sm leading-relaxed text-[#4A4A4A] md:text-[15px]">
                  Typical values per 30g serving: Energy 180 kcal, Protein 6g, Fat
                  15g, Carbohydrates 6g, Fibre 3g. See pack for the full table.
                </p>
              ) : null}
              {tab === "How to use" ? (
                <p className="font-sans text-sm leading-relaxed text-[#4A4A4A] md:text-[15px]">
                  Snack them as they are, soak overnight, blend into milk, chop
                  over porridge, or roast lightly with a pinch of salt. Keep the
                  pack sealed between uses.
                </p>
              ) : null}
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-[220px]">
              <Image
                src={landingImages.productDetailDesc}
                alt="Bowl of California almonds"
                fill
                sizes="220px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-sans text-xl font-bold text-[#1A1A1A]">
              Why You&apos;ll Love Our Premium California Almonds
            </h2>
            <p className="mt-3 font-sans text-sm leading-relaxed text-[#4A4A4A] md:text-[15px]">
              {almondDetail.description}
            </p>
          </div>
          <div>
            <h2 className="font-sans text-xl font-bold text-[#1A1A1A]">
              Storage Instructions
            </h2>
            <p className="mt-3 font-sans text-sm text-[#4A4A4A]">
              To keep your almonds fresh and crunchy, please follow these
              instructions:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 font-sans text-sm text-[#4A4A4A]">
              {almondDetail.storage.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

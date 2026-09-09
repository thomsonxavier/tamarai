"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

const productTypes = [
  "Dates",
  "Dry Fruit",
  "Gifting",
  "Gourmet Products",
  "Nuts",
  "Seeds",
  "Snacks",
  "Spices",
  "Stuffed Dates",
  "Supplement",
] as const;

const PRICE_MAX = 7500;

export function ProductFilters({ className }: { className?: string }) {
  const priceId = useId();
  const [availability, setAvailability] = useState<"in" | "out" | null>(null);
  const [types, setTypes] = useState<string[]>([]);
  const [price, setPrice] = useState(PRICE_MAX);

  function toggleType(name: string) {
    setTypes((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );
  }

  return (
    <form
      className={cn(
        "w-full rounded-[20px] border border-[#ccc] bg-[#FEFCF0] text-[#333]",
        className,
      )}
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="border-b border-[#ccc] px-[18px] py-[23px]">
        <h2 className="font-sans text-xl font-medium tracking-[0.4px] uppercase">
          Filter
        </h2>
      </div>

      <fieldset className="border-b border-[#ccc] px-[17px] pt-[25px] pb-[30px]">
        <legend className="mb-4 font-sans text-[15px] tracking-[0.4px] uppercase">
          Availability
        </legend>
        <label className="flex w-full items-center gap-[11px]">
          <input
            type="radio"
            name="availability"
            checked={availability === "in"}
            onChange={() => setAvailability("in")}
            className="size-3.5 shrink-0 accent-[#333]"
          />
          <span className="flex flex-1 items-center justify-between font-sans text-base tracking-[0.6px]">
            In stock
            <span className="rounded-[3px] bg-[#F2EFE4] px-1 py-px">144</span>
          </span>
        </label>
        <label className="mt-5 flex w-full items-center gap-[11px]">
          <input
            type="radio"
            name="availability"
            checked={availability === "out"}
            onChange={() => setAvailability("out")}
            className="size-3.5 shrink-0 accent-[#333]"
          />
          <span className="flex flex-1 items-center justify-between font-sans text-base tracking-[0.6px]">
            Out of stock
            <span className="rounded-[3px] bg-[#F2EFE4] px-1 py-px">72</span>
          </span>
        </label>
      </fieldset>

      <fieldset className="border-b border-[#ccc] px-[17px] pt-[25px] pb-[30px]">
        <legend className="mb-5 font-sans text-[15px] tracking-[0.4px] uppercase">
          Price
        </legend>
        <label className="block">
          <span className="sr-only">Maximum price</span>
          <input
            id={priceId}
            type="range"
            min={0}
            max={PRICE_MAX}
            step={50}
            value={price}
            onChange={(event) => setPrice(Number(event.target.value))}
            className="h-1 w-full cursor-pointer appearance-none rounded-[14px] bg-[#DFB760] accent-[#DFB760]"
          />
        </label>
        <p className="mt-4 font-sans text-sm tracking-[0.6px]">
          Price: Rs 0 - Rs {price}
        </p>
      </fieldset>

      <fieldset className="px-[17px] pt-[25px] pb-[30px]">
        <legend className="mb-5 font-sans text-[15px] tracking-[0.4px] uppercase">
          Product type
        </legend>
        <ul className="flex flex-col gap-5">
          {productTypes.map((type) => {
            const checked = types.includes(type);
            return (
              <li key={type}>
                <label className="flex cursor-pointer items-center gap-[11px]">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleType(type)}
                    className="size-[18px] shrink-0 rounded-[3px] border border-[#aaa] accent-[#333]"
                  />
                  <span className="font-sans text-base tracking-[0.6px]">
                    {type}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </fieldset>
    </form>
  );
}

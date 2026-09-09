"use client";

import { ChevronRight, ChevronUp, Star, ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const bars = [
  { score: "5.0", count: 2823, width: "92%" },
  { score: "4.0", count: 38, width: "18%" },
  { score: "3.0", count: 4, width: "8%" },
  { score: "2.0", count: 0, width: "0%" },
  { score: "1.0", count: 0, width: "0%" },
] as const;

const topics = [
  "Product Quality",
  "Seller Services",
  "Product Price",
  "Shipment",
  "Match with Description",
] as const;

const reviews = [
  {
    name: "Darrell Steward",
    date: "July 2, 2020 03:29 PM",
    title: "This is amazing product I have.",
    helpful: 128,
  },
  {
    name: "Darlene Robertson",
    date: "July 2, 2020 01:48 PM",
    title: "This is amazing product I have.",
    helpful: 82,
  },
  {
    name: "Kathryn Murphy",
    date: "June 28, 2020 11:12 AM",
    title: "This is amazing product I have.",
    helpful: 41,
  },
] as const;

const listFilters = ["All Reviews", "With Photo & Video", "With Description"] as const;

function RatingDonut({ value }: { value: number }) {
  const percent = (value / 5) * 100;

  return (
    <div
      className="relative grid size-[88px] place-items-center rounded-full"
      style={{
        background: `conic-gradient(#F5A623 0 ${percent}%, #E5E7EB ${percent}% 100%)`,
      }}
      aria-label={`${value} out of 5`}
    >
      <div className="absolute inset-[9px] grid place-items-center rounded-full bg-white font-sans text-[28px] font-bold text-[#1A1A1A]">
        {value.toFixed(1)}
      </div>
    </div>
  );
}

export function ProductReviewsPanel() {
  const [listFilter, setListFilter] = useState<(typeof listFilters)[number]>("All Reviews");
  const [page, setPage] = useState(1);
  const [ratingOpen, setRatingOpen] = useState(true);
  const [topicsOpen, setTopicsOpen] = useState(true);

  return (
    <section className="bg-white pb-12 text-ink md:pb-16">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <div className="rounded-2xl border border-zinc-200 p-5 md:p-6">
          <h2 className="font-sans text-lg font-bold text-[#1A1A1A]">Product Reviews</h2>
          <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <RatingDonut value={4.5} />
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      className="size-4 fill-[#F5A623] text-[#F5A623]"
                    />
                  ))}
                </div>
                <p className="mt-1 font-sans text-sm text-[#6B6B6B]">
                  from 1,25k reviews
                </p>
              </div>
            </div>
            <div className="w-full max-w-md space-y-2">
              {bars.map((row) => (
                <div key={row.score} className="flex items-center gap-2 font-sans text-sm">
                  <span className="w-8 text-[#333]">{row.score}</span>
                  <Star className="size-3.5 fill-[#F5A623] text-[#F5A623]" />
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-zinc-100">
                    <div
                      className="h-full rounded-full bg-[#1A1A1A]"
                      style={{ width: row.width }}
                    />
                  </div>
                  <span className="w-10 text-right text-[#6B6B6B]">{row.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="h-fit rounded-[14px] border border-dashed border-[#C9CED6] bg-[#FCFCFC] p-4">
            <p className="pb-3 font-sans text-[15px] font-medium text-[#1A1A1A]">
              Reviews Filter
            </p>
            <div className="border-t border-dashed border-[#C9CED6] pt-3">
              <button
                type="button"
                className="flex w-full items-center justify-between font-sans text-sm font-bold text-[#1A1A1A]"
                onClick={() => setRatingOpen((open) => !open)}
              >
                Rating
                <ChevronUp
                  className={cn("size-4 transition-transform", !ratingOpen && "rotate-180")}
                />
              </button>
              {ratingOpen ? (
                <ul className="mt-3 space-y-2.5">
                  {[5, 4, 3, 2, 1].map((value) => (
                    <li key={value}>
                      <label className="flex items-center gap-2.5 font-sans text-sm text-[#8492A6]">
                        <input
                          type="checkbox"
                          className="size-4 rounded-[3px] border border-[#C9CED6] accent-[#1A1A1A]"
                        />
                        <Star className="size-3.5 fill-[#F5A623] text-[#F5A623]" />
                        {value}
                      </label>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <div className="mt-4 border-t border-dashed border-[#C9CED6] pt-3">
              <button
                type="button"
                className="flex w-full items-center justify-between font-sans text-sm font-bold text-[#1A1A1A]"
                onClick={() => setTopicsOpen((open) => !open)}
              >
                Review Topics
                <ChevronUp
                  className={cn("size-4 transition-transform", !topicsOpen && "rotate-180")}
                />
              </button>
              {topicsOpen ? (
                <ul className="mt-3 space-y-2.5">
                  {topics.map((topic) => (
                    <li key={topic}>
                      <label className="flex items-center gap-2.5 font-sans text-sm font-medium text-[#8492A6]">
                        <input
                          type="checkbox"
                          className="size-4 rounded-[3px] border border-[#C9CED6] accent-[#1A1A1A]"
                        />
                        {topic}
                      </label>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </aside>

          <div>
            <h3 className="font-sans text-lg font-bold text-[#1A1A1A]">Review Lists</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {listFilters.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setListFilter(item)}
                  className={cn(
                    "rounded-full px-4 py-2 font-sans text-sm",
                    listFilter === item
                      ? "bg-[#1A1A1A] text-white"
                      : "border border-zinc-200 text-[#333]",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
            <ul className="mt-4 space-y-3">
              {reviews.map((review) => (
                <li
                  key={review.name}
                  className="flex flex-col gap-3 rounded-[12px] border border-dotted border-[#C9CED6] p-4 sm:flex-row sm:items-start sm:justify-between"
                >
                  <div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star
                          key={index}
                          className="size-3.5 fill-[#F5A623] text-[#F5A623]"
                        />
                      ))}
                    </div>
                    <p className="mt-2 font-sans text-sm font-bold text-[#1A1A1A]">
                      {review.title}
                    </p>
                    <p className="mt-1 font-sans text-xs text-[#9A9A9A]">{review.date}</p>
                    <p className="mt-3 font-sans text-sm text-[#333]">{review.name}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1 rounded-md border border-dotted border-[#C9CED6] px-2 py-1 text-xs text-[#6B6B6B]">
                      <ThumbsUp className="size-3.5" />
                      {review.helpful}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md border border-dotted border-[#C9CED6] px-2 py-1 text-xs text-[#6B6B6B]">
                      <ThumbsDown className="size-3.5" />
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center justify-center gap-2">
              {[1, 2, 19].map((item, index) => (
                <span key={item} className="contents">
                  {index === 2 ? (
                    <span className="px-1 text-sm text-[#6B6B6B]">...</span>
                  ) : null}
                  <Button
                    type="button"
                    variant="ghost"
                    className={cn(
                      "size-9 rounded-md border text-sm hover:text-[#1A1A1A]",
                      page === item
                        ? "border-[#1A1A1A] bg-white text-[#1A1A1A]"
                        : "border-zinc-200 bg-white text-[#333] hover:bg-zinc-50",
                    )}
                    onClick={() => setPage(item)}
                  >
                    {item}
                  </Button>
                </span>
              ))}
              <Button
                type="button"
                size="icon"
                variant="ghost"
                aria-label="Next page"
                className="size-9 rounded-md border border-zinc-200 bg-white text-[#333] hover:bg-zinc-50 hover:text-[#1A1A1A]"
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

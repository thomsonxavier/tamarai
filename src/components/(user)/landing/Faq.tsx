"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do you offer free shipping?",
    answer:
      "Yes. Orders above ₹499 ship free across India. You’ll see the shipping total at checkout before you pay.",
  },
  {
    question: "How are the nuts and dates packed?",
    answer:
      "Everything is packed in food-grade pouches or tins to lock in freshness, texture, and flavour until you open them.",
  },
  {
    question: "Can I order for wholesale?",
    answer:
      "Yes. Reach us from the Wholesale or Contact page and we’ll share bulk packs, pricing, and delivery timelines.",
  },
  {
    question: "How long do products stay fresh?",
    answer:
      "Each pack carries a best-before date. Store in a cool, dry place and finish opened packs within a few weeks for the best taste.",
  },
  {
    question: "Do you use added sugar or preservatives?",
    answer:
      "Our dry fruits and nuts are selected for natural taste. Flavoured or roasted items are labelled clearly on the product page.",
  },
  {
    question: "What if my order arrives damaged?",
    answer:
      "Write to us with your order number and a photo. We’ll replace the item or refund that line according to what you prefer.",
  },
] as const;

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto w-full max-w-[920px] px-5 md:px-8">
        <h2 className="mb-8 text-center font-sans text-[26px] font-bold text-black md:text-[32px]">
          Frequently Asked Questions
        </h2>
        <div className="rounded-[20px] bg-white p-2 shadow-[0_16px_50px_rgba(0,0,0,0.08)] md:p-4">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={item.question}
                className={cn(
                  index > 0 && "border-t border-zinc-200",
                )}
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 px-4 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span className="min-w-0">
                    <span
                      className={cn(
                        "block font-sans text-[15px] font-semibold md:text-base",
                        isOpen ? "text-[#B08A3E]" : "text-zinc-800",
                      )}
                    >
                      {item.question}
                    </span>
                    {isOpen ? (
                      <span className="mt-2 block text-[14px] leading-relaxed text-zinc-500">
                        {item.answer}
                      </span>
                    ) : null}
                  </span>
                  {isOpen ? (
                    <Minus className="mt-1 size-5 shrink-0 text-zinc-500" />
                  ) : (
                    <Plus className="mt-1 size-5 shrink-0 text-zinc-500" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

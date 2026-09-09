"use client";

const promos = [
  { emoji: "🚚", text: "Free Shipping on Orders Above ₹499" },
  {
    emoji: "🎉",
    text: "Extra 10% OFF on Orders Above ₹999 | Use Code:",
    code: "EXTRA10",
  },
  {
    emoji: "🔥",
    text: "Extra 15% OFF on Orders Above ₹2499 | Use Code:",
    code: "EXTRA15",
  },
] as const;

function PromoItem({
  emoji,
  text,
  code,
}: {
  emoji: string;
  text: string;
  code?: string;
}) {
  return (
    <p className="flex items-center gap-2 whitespace-nowrap font-sans text-[13px] font-medium text-white">
      <span aria-hidden>{emoji}</span>
      <span>{text}</span>
      {code ? (
        <span className="inline-flex h-[22px] items-center rounded-full border border-[#F5C518] px-2.5 text-[11px] font-bold tracking-wide text-[#F5C518]">
          {code}
        </span>
      ) : null}
    </p>
  );
}

function TickerTrack() {
  return (
    <div className="flex shrink-0 items-center pr-8" aria-hidden>
      {promos.map((promo) => (
        <div key={`${promo.emoji}-${promo.text}`} className="flex items-center">
          <PromoItem {...promo} />
          <span className="mx-6 h-4 w-px bg-white/35" aria-hidden />
        </div>
      ))}
    </div>
  );
}

export function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden bg-black py-2.5">
      <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
        <TickerTrack />
        <TickerTrack />
      </div>
      <span className="sr-only">
        Free Shipping on Orders Above ₹499. Extra 10% OFF on Orders Above ₹999,
        use code EXTRA10. Extra 15% OFF on Orders Above ₹2499, use code EXTRA15.
      </span>
    </div>
  );
}

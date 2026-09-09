import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-full border border-white/15 bg-white/5 px-4 text-sm text-cream placeholder:text-white/40 outline-none transition-colors focus-visible:border-gold/70 focus-visible:ring-2 focus-visible:ring-gold/40",
        className,
      )}
      {...props}
    />
  );
}

export { Input };

"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { CloseCircle } from "iconsax-react";
import type { ComponentProps, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;
const SheetPortal = DialogPrimitive.Portal;

function SheetOverlay({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn("sheet-overlay fixed inset-0 z-50 bg-black/50", className)}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  tone = "ink",
  ...props
}: ComponentProps<typeof DialogPrimitive.Content> & {
  side?: "left" | "right";
  tone?: "ink" | "light";
}) {
  const light = tone === "light";

  return (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content
        className={cn(
          "fixed inset-y-0 z-50 flex h-full flex-col shadow-xl will-change-transform",
          side === "right" ? "sheet-content-right" : "sheet-content-left",
          light
            ? "w-[min(100%,26.5rem)] bg-white p-0 text-ink"
            : "w-[min(100%,22rem)] bg-ink p-6 text-cream",
          side === "right"
            ? light
              ? "right-0 border-l border-zinc-200"
              : "right-0 border-l border-white/10"
            : light
              ? "left-0 border-r border-zinc-200"
              : "left-0 border-r border-white/10",
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          className={cn(
            "absolute top-4 right-4 z-10 rounded-full p-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
            light
              ? "text-[#1A1A1A] hover:bg-zinc-100"
              : "text-white/70 hover:bg-white/10 hover:text-white",
          )}
        >
          <CloseCircle
            size={22}
            variant="Linear"
            color="currentColor"
            className="size-[22px]"
          />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-1.5", className)} {...props} />;
}

function SheetTitle({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn("font-display text-xl text-cream", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
};

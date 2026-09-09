"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { type CartFly, useCartStore } from "@/stores/cart";

const CART_TARGET_ID = "header-cart";

function FlyThumb({ fly }: { fly: CartFly }) {
  const reduce = useReducedMotion();
  const clearFly = useCartStore((state) => state.clearFly);
  const pulseCart = useCartStore((state) => state.pulseCart);
  const [target, setTarget] = useState<{ x: number; y: number } | null>(null);

  const finish = useCallback(() => {
    clearFly(fly.id);
    pulseCart();
  }, [clearFly, fly.id, pulseCart]);
  const finished = useRef(false);

  const finishOnce = useCallback(() => {
    if (finished.current) {
      return;
    }
    finished.current = true;
    finish();
  }, [finish]);

  useLayoutEffect(() => {
    if (reduce) {
      finishOnce();
      return;
    }
    const node = document.getElementById(CART_TARGET_ID);
    if (!node) {
      finishOnce();
      return;
    }
    const rect = node.getBoundingClientRect();
    setTarget({
      x: rect.left + rect.width / 2 - 14,
      y: rect.top + rect.height / 2 - 14,
    });
  }, [finishOnce, reduce]);

  if (reduce || !target) {
    return null;
  }

  return (
    <motion.img
      src={fly.image}
      alt=""
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[80] object-cover shadow-[0_12px_30px_rgba(0,0,0,0.22)]"
      initial={{
        x: fly.from.x,
        y: fly.from.y,
        width: fly.from.width,
        height: fly.from.height,
        borderRadius: 14,
        opacity: 1,
      }}
      animate={{
        x: target.x,
        y: target.y,
        width: 28,
        height: 28,
        borderRadius: 999,
        opacity: 0.15,
      }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={finishOnce}
    />
  );
}

export function CartFlyOverlay() {
  const flies = useCartStore((state) => state.flies);

  return (
    <AnimatePresence>
      {flies.map((fly) => (
        <FlyThumb key={fly.id} fly={fly} />
      ))}
    </AnimatePresence>
  );
}

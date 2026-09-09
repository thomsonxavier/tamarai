import type { ReactNode } from "react";
import { AnnouncementBar } from "@/components/(user)/landing/AnnouncementBar";
import { CartDrawer } from "@/components/(user)/product/CartDrawer";
import { CartFlyOverlay } from "@/components/(user)/product/CartFlyOverlay";
import { Footer } from "@/components/(user)/landing/Footer";
import { Navbar } from "@/components/(user)/landing/Navbar";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40">
        <AnnouncementBar />
        <Navbar />
      </header>
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <CartDrawer />
      <CartFlyOverlay />
    </>
  );
}

import type { Metadata } from "next";
import { MoreThanStore } from "@/components/(user)/landing/MoreThanStore";
import { StoreHero } from "@/components/(user)/landing/StoreHero";
import { StoreLocations } from "@/components/(user)/landing/StoreLocations";

export const metadata: Metadata = {
  title: "Our Stores",
};

export default function StoresPage() {
  return (
    <>
      <StoreHero />
      <StoreLocations />
      <MoreThanStore />
    </>
  );
}

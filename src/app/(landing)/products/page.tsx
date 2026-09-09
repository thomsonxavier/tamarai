import type { Metadata } from "next";
import { ProductCatalog } from "@/components/(user)/product/ProductCatalog";
import { ProductHero } from "@/components/(user)/product/ProductHero";
import { ShopBelowSections } from "@/components/(user)/product/ShopBelowSections";

export const metadata: Metadata = {
  title: "Shop",
};

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <div className="relative">
        <ProductHero />
        <ProductCatalog />
      </div>
      <ShopBelowSections variant="listing" />
    </div>
  );
}

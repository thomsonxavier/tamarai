import type { Metadata } from "next";
import { ProductDescription } from "@/components/(user)/product/ProductDescription";
import { ProductDetailHero } from "@/components/(user)/product/ProductDetailHero";
import { ProductReviewsPanel } from "@/components/(user)/product/ProductReviewsPanel";
import { RelatedProducts } from "@/components/(user)/product/RelatedProducts";
import { ShopBelowSections } from "@/components/(user)/product/ShopBelowSections";
import { catalogProducts, getProductBySlug } from "@/lib/products";

export function generateStaticParams() {
  return catalogProducts.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return { title: product.name };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  return (
    <div className="bg-white">
      <ProductDetailHero product={product} />
      <ProductDescription />
      <ProductReviewsPanel />
      <RelatedProducts />
      <ShopBelowSections variant="detail" />
    </div>
  );
}

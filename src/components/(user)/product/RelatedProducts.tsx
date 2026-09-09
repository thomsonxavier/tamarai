import { ProductCard } from "@/components/(user)/product/ProductCard";
import { catalogProducts } from "@/lib/products";

export function RelatedProducts() {
  return (
    <section className="bg-white pb-14 text-ink">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <h2 className="mb-8 font-sans text-xl font-bold text-[#1A1A1A] md:text-2xl">
          Related Products
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {catalogProducts.map((item) => (
            <ProductCard
              key={item.slug}
              name={item.name}
              image={item.image}
              alt={item.alt}
              price={item.price}
              compareAt={item.compareAt}
              href={`/products/${item.slug}`}
              id={item.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

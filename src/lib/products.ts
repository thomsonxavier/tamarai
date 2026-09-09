import { landingImages } from "@/lib/landing-assets";

export const catalogProducts = [
  {
    slug: "premium-cashews-1kg",
    name: "Premium Cashews 1 KG (Whole Cashews/Kaju) FREE Container",
    image: landingImages.cashews,
    alt: "Light blue bowl overflowing with whole cashews",
    price: "8,999",
    compareAt: "13,999",
    category: "Dry Fruits",
  },
  {
    slug: "premium-california-almonds",
    name: "Premium California Almonds 1 KG (Badaam/Badam) FREE Container",
    image: landingImages.almonds,
    alt: "Almonds spilling from a small wooden barrel",
    price: "8,999",
    compareAt: "13,999",
    category: "Dry Fruits",
  },
  {
    slug: "roasted-salted-pistachios",
    name: "Roasted & Salted Pistachios 750 Grams (Pista) | FREE Container",
    image: landingImages.mace,
    alt: "Red mace spice in a white bowl on a wooden board",
    price: "8,999",
    compareAt: "13,999",
    category: "Dry Fruits",
  },
  {
    slug: "premium-red-kidney-beans",
    name: "Premium Red Kidney Beans 1 KG FREE Container",
    image: landingImages.beans,
    alt: "Dark red kidney beans spilling from a bowl",
    price: "8,999",
    compareAt: "13,999",
    category: "Gourmet Products",
  },
] as const;

export type CatalogProduct = (typeof catalogProducts)[number];

export function getProductBySlug(slug: string) {
  return catalogProducts.find((item) => item.slug === slug) ?? catalogProducts[1];
}

export const almondDetail = {
  brand: "Thamarai Dry Fruits",
  title: "Premium California Almonds – Raw, Naturally Sweet & Crunchy",
  compareAt: "1,499.00",
  price: "999.00",
  sold: "3,456 Sold",
  rating: "4.5",
  shortDescription:
    "Hand-selected California almonds with a naturally sweet taste and a clean crunch. Enjoy them as a daily snack, in breakfast bowls, or as a wholesome gift.",
  description:
    "Sourced from trusted California orchards and packed to lock in freshness, these raw almonds are naturally sweet, protein-rich, and ready for snacking, cooking, or gifting.",
  specs: [
    "Product Type: Almonds",
    "Variety: California Almonds",
    "Form: Raw",
    "Origin: California, USA",
    "Shelf Life: 12 Months",
    "Packaging: Hygienically Sealed",
  ],
  storage: [
    "Store in a cool, dry place",
    "Keep away from direct sunlight",
    "Seal the pack tightly after each use",
    "Best consumed within 12 months of packing",
  ],
  weights: ["250g", "500g", "1kg", "100g", "2kg", "5kg"] as const,
  defaultWeight: "500g",
} as const;

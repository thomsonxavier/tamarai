import { Articles } from "@/components/(user)/landing/Articles";
import { Faq } from "@/components/(user)/landing/Faq";
import { NewArrivals } from "@/components/(user)/landing/NewArrivals";
import { Reviews } from "@/components/(user)/landing/Reviews";

export function ShopBelowSections({
  variant,
}: {
  variant: "listing" | "detail";
}) {
  return (
    <>
      <Reviews />
      <Faq />
      {variant === "detail" ? <NewArrivals /> : <Articles />}
    </>
  );
}

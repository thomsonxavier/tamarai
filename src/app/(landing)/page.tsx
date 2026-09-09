import { Articles } from "@/components/(user)/landing/Articles";
import { Collections } from "@/components/(user)/landing/Collections";
import { Faq } from "@/components/(user)/landing/Faq";
import { Favorites } from "@/components/(user)/landing/Favorites";
import { Hero } from "@/components/(user)/landing/Hero";
import { LotusFeature } from "@/components/(user)/landing/LotusFeature";
import { NewArrivals } from "@/components/(user)/landing/NewArrivals";
import { Reviews } from "@/components/(user)/landing/Reviews";
import { SignatureHarvest } from "@/components/(user)/landing/SignatureHarvest";
import { Stats } from "@/components/(user)/landing/Stats";
import { VisitStore } from "@/components/(user)/landing/VisitStore";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Collections />
      <NewArrivals />
      <Stats />
      <Favorites />
      <LotusFeature />
      <VisitStore />
      <SignatureHarvest />
      <Reviews />
      <Faq />
      <Articles />
    </>
  );
}

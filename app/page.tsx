import { FilterBar } from "@/components/refrigerator/FilterBar";
import { FoodCard } from "@/components/refrigerator/FoodCard";
import { HeroSection } from "@/components/refrigerator/HeroSection";
import { StorageTabs } from "@/components/refrigerator/StorageTabs";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6f6f6]">
      <HeroSection />
      <StorageTabs />
      <FilterBar />
      <section className="px-4">
        <FoodCard
          imageUrl="images/product/carrot.png"
          category="야채칸"
          name="당근"
          dday="D-3"
          purchaseDate="2026.01.03"
          quantity={1}
        />
        <FoodCard
          imageUrl="images/product/egg.png"
          category="수납칸"
          name="계란"
          dday="D-20"
          purchaseDate="2026.01.01"
          quantity={1}
        />
      </section>

      <div className="p-4">
        <button className="w-full rounded-xl border-2 border-orange-400 py-3 text-xl font-bold text-orange-400">
          MY 식품 추가
        </button>
      </div>
    </main>
  );
}

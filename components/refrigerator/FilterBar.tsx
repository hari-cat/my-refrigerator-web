import { cn } from "@/lib/utils";

export function FilterBar() {
  const filterItems = ["전체", "신선식품", "소비기한", "보관위치"];
  // font-semibold
  return (
    <div className="flex gap-3 overflow-x-auto px-4 py-4">
      {filterItems.map((item, idx) => {
        return (
          <button
            key={`filter-items-${idx}`}
            className={cn(
              "flex items-center gap-1 whitespace-nowrap rounded-full border px-3 py-2 text-xs font-bold",
              idx === 0 && "bg-gray-200",
            )}
          >
            {item}
            <img src="/images/down_arrow.png" alt="" width={8} height={8} />
          </button>
        );
      })}
    </div>
  );
}

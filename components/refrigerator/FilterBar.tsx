"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function FilterBar() {
  const filterItems = ["전체"];
  const [selectedItem, setSelectedItem] = useState("전체");
  // font-semibold

  /**
   * 필터 선택 함수
   */
  const handleSelectedItem = (value: string) => {
    setSelectedItem(value);
  };

  return (
    <div className="flex gap-3 overflow-x-auto px-4 py-4">
      {filterItems.map((item, idx) => {
        return (
          <button
            key={`filter-items-${idx}`}
            className={cn(
              "flex items-center gap-1 whitespace-nowrap rounded-full border px-3 py-2 text-xs font-bold",
              item === selectedItem && "bg-gray-200",
            )}
            onClick={() => handleSelectedItem(item)}
          >
            {item}
            <img src="/images/down_arrow.png" alt="" width={8} height={8} />
          </button>
        );
      })}
    </div>
  );
}

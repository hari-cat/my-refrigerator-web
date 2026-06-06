"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function StorageTabs() {
  const [tab, setTab] = useState("refrigeration-tab");

  /**
   * 탭 전환 함수
   */
  const handleTab = (id: string) => {
    setTab(id);
  };

  return (
    <div className="grid grid-cols-2">
      <button
        id="refrigeration-tab"
        className={cn(
          "py-2 text-lg font-bold",
          tab === "refrigeration-tab" ? "bg-[#f4a845] text-white" : "bg-white",
        )}
        onClick={() => handleTab("refrigeration-tab")}
      >
        냉장실
      </button>
      <button
        id="freezer-tab"
        className={cn(
          "py-2 text-lg font-bold",
          tab === "freezer-tab" ? "bg-[#f4a845] text-white" : "bg-white",
        )}
        onClick={() => handleTab("freezer-tab")}
      >
        냉동실
      </button>
    </div>
  );
}

"use client";
import Link from "next/link";
import { Logo } from "@/components/refrigerator/logo";
import { FreshnessHeader } from "@/components/refrigerator/freshness-header";
import { IngredientList } from "@/components/refrigerator/ingredient-list";
import { useGetRefrigeratorProducts } from "@/services/query/useRefrigeratorProduct";
import { RefreigeratorRequest } from "@/services/api/refrigeratorProductApi";
import FullScreenModal from "@/components/common/fullScreenModal";
import { useState } from "react";
import Dropdown from "@/components/common/dropdown";

export default function DashboardPage() {
  const [open, setOpen] = useState(false);
  const getRefrigeratorRequest: RefreigeratorRequest = {
    page: 1,
    size: 20,
  };
  const { data } = useGetRefrigeratorProducts(getRefrigeratorRequest);

  const products = data?.content ?? [];

  return (
    <main className="min-h-screen bg-background">
      <header className="flex items-center justify-between bg-card px-6 py-5">
        <Logo markSize={36} />
        <Link
          href="/refrigerator"
          aria-label="홈으로"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <HomeIcon className="size-7" />
        </Link>
      </header>
      <FreshnessHeader />
      <button
        key={"add-refrigerator-product"}
        type="button"
        onClick={() => setOpen(true)}
        className={
          "rounded-full px-6 py-2.5 text-base font-bold shadow-sm transition-colors bg-brand text-brand-foreground"
        }
        style={{ marginLeft: "250px" }}
      >
        {"냉장고 추가"}
      </button>
      <IngredientList products={products} />
      <FullScreenModal
        open={open}
        title="냉장고 물풀 추가"
        onClose={() => setOpen(false)}
      >
        <ul>
          <li>
            <span></span>
            <span>
              <Dropdown
                value={""}
                onChange={() => {}}
                options={[
                  {
                    value: "MEAT",
                    label: "육류",
                  },
                  {
                    value: "VEGETABLE",
                    label: "채소",
                  },
                  {
                    value: "DRINK",
                    label: "음료",
                  },
                  {
                    value: "DAIRY",
                    label: "음료",
                  },
                  {
                    value: "FROZEN",
                    label: "냉동",
                  },
                ]}
              />
            </span>
          </li>
          <li>
            <span></span>
            <span></span>
          </li>
          <li>
            <span></span>
            <span></span>
          </li>
          <li>
            <span></span>
            <span></span>
          </li>
          <li>
            <span></span>
            <span></span>
          </li>
        </ul>
      </FullScreenModal>
    </main>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11.47 3.84a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 0 1-1.06 1.06l-.22-.22V20a1.5 1.5 0 0 1-1.5 1.5h-3a.75.75 0 0 1-.75-.75V15a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75v5.75a.75.75 0 0 1-.75.75H7.5A1.5 1.5 0 0 1 6 20v-6.63l-.22.22a.75.75 0 0 1-1.06-1.06l6.75-6.69Z" />
    </svg>
  );
}

"use client";

import { useState } from "react";
import { CATEGORIES, INGREDIENTS, type Category } from "@/lib/ingredients";
import { IngredientCard } from "@/components/refrigerator/ingredient-card";
import { cn } from "@/lib/utils";
import { RefrigeratorProduct } from "@/services/api/refrigeratorProductApi";

export function IngredientList({
  products,
}: {
  products: RefrigeratorProduct[];
}) {
  const [active, setActive] = useState<Category>("전체");

  const filtered =
    active === "전체"
      ? INGREDIENTS
      : INGREDIENTS.filter((item) => item.category === active);

  console.log(products);

  return (
    <div className="mx-auto w-full max-w-md px-5 pb-16">
      <div className="flex flex-wrap gap-3 py-8">
        {CATEGORIES.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={isActive}
              className={cn(
                "rounded-full px-6 py-2.5 text-base font-bold shadow-sm transition-colors",
                isActive
                  ? "bg-brand text-brand-foreground"
                  : "bg-card text-foreground ring-1 ring-border hover:bg-secondary",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-5">
        {products.length > 0 ? (
          products.map((product) => (
            <IngredientCard key={product.id} product={product} />
          ))
        ) : (
          <p className="py-16 text-center text-muted-foreground">
            해당 카테고리에 식재료가 없어요.
          </p>
        )}
      </div>
    </div>
  );
}

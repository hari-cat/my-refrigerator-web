"use client";
import { RefrigeratorProduct } from "@/services/api/refrigeratorProductApi";
import Image from "next/image";

function Row({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex w-20 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-accent px-2 py-1 text-sm font-bold text-accent-foreground">
        {label}
      </span>
      <span className="text-base font-medium text-foreground">{value}</span>
    </div>
  );
}

export function IngredientCard({ product }: { product: RefrigeratorProduct }) {
  return (
    <article className="flex gap-4 rounded-3xl bg-card p-4 shadow-sm ring-1 ring-border">
      <div className="relative size-28 shrink-0 overflow-hidden rounded-2xl">
        <Image
          src={""}
          alt={product.name}
          fill
          sizes="112px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="text-xl font-extrabold text-foreground">
          {product.name}
        </h3>
        <div className="my-2 border-b border-border" />
        <div className="flex flex-col gap-2">
          <Row label="수량" value={product.quantity} />
          <Row label="원산지" value={product.origin} />
          <Row label="소비기한" value={product.expiredAt} />
        </div>
      </div>
    </article>
  );
}

export type Category = "전체" | "육류" | "채소" | "유제품" | "음료" | "냉동";

export type Ingredient = {
  id: string;
  name: string;
  category: Exclude<Category, "전체">;
  image: string;
  /** label for the amount field, e.g. 수량 / 중량 */
  amountLabel: string;
  amount: string;
  origin: string;
  expiry: string; // YYYY.MM.DD
};

export const CATEGORIES: { id: string; name: Category }[] = [
  { id: "ALL", name: "전체" },
  { id: "MEAT", name: "육류" },
  { id: "VEGETABLE", name: "채소" },
  { id: "DAIRY", name: "유제품" },
  { id: "DRINK", name: "음료" },
  { id: "FROZEN", name: "냉동" },
];

export const FRESHNESS = {
  score: 88,
  expiringSoon: 2,
  discardThisWeek: 1,
  daysSinceUpdate: 0,
};

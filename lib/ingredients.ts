export type Category = "전체" | "육류" | "채소" | "유제품" | "음료";

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

export const CATEGORIES: Category[] = [
  "전체",
  "육류",
  "채소",
  "유제품",
  "음료",
];

export const INGREDIENTS: Ingredient[] = [
  {
    id: "daepa",
    name: "대파",
    category: "채소",
    image: "/ingredients/green-onion.png",
    amountLabel: "수량",
    amount: "1개",
    origin: "국내산",
    expiry: "2026.06.20",
  },
  {
    id: "samgyeopsal",
    name: "삼겹살",
    category: "육류",
    image: "/ingredients/pork-belly.png",
    amountLabel: "중량",
    amount: "600g",
    origin: "국내산",
    expiry: "2026.06.25",
  },
  {
    id: "milk",
    name: "우유",
    category: "유제품",
    image: "/ingredients/milk.png",
    amountLabel: "수량",
    amount: "1팩",
    origin: "국내산",
    expiry: "2026.06.18",
  },
  {
    id: "orange-juice",
    name: "오렌지주스",
    category: "음료",
    image: "/ingredients/orange-juice.png",
    amountLabel: "용량",
    amount: "1.5L",
    origin: "미국산",
    expiry: "2026.07.10",
  },
];

export const FRESHNESS = {
  score: 88,
  expiringSoon: 2,
  discardThisWeek: 1,
  daysSinceUpdate: 0,
};

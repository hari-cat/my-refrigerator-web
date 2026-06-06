"use client";
interface FoodCardProps {
  imageUrl: string;
  category: string;
  name: string;
  dday: string;
  purchaseDate: string;
  quantity: number;
}

export function FoodCard({
  imageUrl,
  category,
  name,
  dday,
  purchaseDate,
  quantity,
}: FoodCardProps) {
  return (
    <div className="flex gap-4 border-b border-gray-200 py-6">
      <img
        src={imageUrl}
        alt={name}
        className="h-28 w-50 rounded-xl object-cover"
      />

      <div className="flex flex-1 flex-col">
        <span className="w-fit rounded bg-orange-400 px-2 py-1 text-xs text-white">
          {category}
        </span>

        <div className="mt-2 flex items-center gap-2">
          <h3 className="text-xl font-bold">{name}</h3>

          <span className="rounded-full bg-orange-100 px-2 py-0.5 text-sm font-semibold text-orange-800">
            {dday}
          </span>
        </div>

        <p className="mt-1 text-sm text-gray-700">{purchaseDate} 구매</p>

        <div className="mt-3 flex items-center gap-3">
          <button className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-400 text-white">
            -
          </button>

          <span className="text-s font-medium">{quantity}</span>

          <button className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-400 text-white">
            +
          </button>

          <button className="text-gray-300">
            <img
              src="/images/waste_basket.png"
              width={14}
              height={14}
              alt="waste_basket"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

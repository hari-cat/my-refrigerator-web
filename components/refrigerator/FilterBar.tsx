export function FilterBar() {
  return (
    <div className="flex gap-3 overflow-x-auto px-4 py-4">
      <button className="whitespace-nowrap rounded-full bg-gray-200 px-5 py-2 font-semibold">
        전체
      </button>

      <button className="whitespace-nowrap rounded-full border px-5 py-2">
        신선식품 ▼
      </button>

      <button className="whitespace-nowrap rounded-full border px-5 py-2">
        소비기한 ▼
      </button>

      <button className="whitespace-nowrap rounded-full border px-5 py-2">
        보관위치 ▼
      </button>
    </div>
  );
}

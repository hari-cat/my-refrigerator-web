export function StorageTabs() {
  return (
    <div className="grid grid-cols-2">
      <button
        className="py-2 text-lg font-bold text-white"
        style={{ backgroundColor: "#f4a845" }}
      >
        냉장실
      </button>

      <button className="bg-white py-2 text-lg font-bold">냉동실</button>
    </div>
  );
}

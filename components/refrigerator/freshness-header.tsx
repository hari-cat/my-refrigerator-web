import { FRESHNESS } from "@/lib/ingredients";

const STATS = [
  { value: FRESHNESS.expiringSoon, unit: "개", label: "유통기한 임박" },
  { value: FRESHNESS.discardThisWeek, unit: "개", label: "이번 주 폐기 예상" },
  { value: FRESHNESS.daysSinceUpdate, unit: "일", label: "최근 업데이트" },
];

export function FreshnessHeader() {
  return (
    <section className="bg-gradient-to-b from-fridge-from to-fridge-to px-6 pb-10 pt-10 text-card">
      <div className="mx-auto max-w-md text-center">
        <div className="flex items-center justify-center gap-3">
          <SnowIcon className="size-7 opacity-90" />
          <h1 className="text-2xl font-extrabold text-balance">
            우리집 냉장고 신선 지수
          </h1>
        </div>
        <p className="mt-3 text-sm text-card/85">
          냉장고 속 식재료의 신선함을 점수로 확인해 보세요!
        </p>

        <div className="mt-10 flex items-end justify-center">
          <span className="text-8xl font-black leading-none tracking-tighter">
            {FRESHNESS.score}
          </span>
          <span className="mb-3 ml-2 text-2xl font-bold">점</span>
        </div>

        <div className="mt-10 grid grid-cols-3 rounded-2xl bg-card/15 py-5 backdrop-blur-sm">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={
                i < STATS.length - 1 ? "border-r border-card/25 px-2" : "px-2"
              }
            >
              <p className="text-3xl font-extrabold">
                {stat.value}
                <span className="text-base font-medium align-baseline">
                  {stat.unit}
                </span>
              </p>
              <p className="mt-2 text-xs font-medium text-card/85">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SnowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9.5 6.5a2 2 0 1 1 2 2H4a2 2 0 0 0 0 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11a2 2 0 1 1 2 2H6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 17.5a2 2 0 1 0 2-2H7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

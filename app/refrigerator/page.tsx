import Link from "next/link";
import { Logo } from "@/components/refrigerator/logo";
import { FreshnessHeader } from "@/components/refrigerator/freshness-header";
import { IngredientList } from "@/components/refrigerator/ingredient-list";

export default async function DashboardPage() {
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
      <IngredientList />
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

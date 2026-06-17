import { cn } from "@/lib/utils";

type LogoProps = {
  /** size of the square mark in pixels */
  markSize?: number;
  className?: string;
  /** "dark" uses dark text for 우리집 (default), "light" uses white text */
  variant?: "dark" | "light";
};

export function Logo({
  markSize = 40,
  className,
  variant = "dark",
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span
        aria-hidden="true"
        className="flex flex-col items-center justify-center rounded-md bg-brand font-black leading-none text-brand-foreground"
        style={{
          width: markSize,
          height: markSize * 1.15,
          fontSize: markSize * 0.42,
        }}
      >
        <span>ㅇ</span>
        <span>ㄴ</span>
      </span>
      <span
        className="font-black tracking-tight"
        style={{ fontSize: markSize * 0.78 }}
      >
        <span className={variant === "light" ? "text-card" : "text-foreground"}>
          우리집
        </span>
        <span className="text-brand">냉장고</span>
      </span>
    </div>
  );
}

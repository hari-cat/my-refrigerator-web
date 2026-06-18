"use client";

import { Logo } from "@/components/refrigerator/logo";
import { GoogleButton } from "@/components/refrigerator/google-button";

export default function LoginPage() {
  const fetchData = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <main className="flex min-h-screen flex-col bg-background px-6">
      <div className="flex flex-1 flex-col items-center justify-center gap-8">
        <Logo markSize={56} />

        <p className="text-lg font-medium text-muted-foreground">
          더 신선하게, 더 알뜰하게
        </p>
        <GoogleButton onClick={fetchData} />
      </div>

      <footer className="pb-10 text-center text-sm text-muted-foreground">
        © 2026 우리집냉장고. All Rights Reserved.
      </footer>
    </main>
  );
}

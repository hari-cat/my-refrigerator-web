export function HeroSection() {
  return (
    <section className="relative h-[350px]">
      <img
        src="/images/hero_banner.png"
        alt=""
        width={50}
        height={50}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative px-10 pt-32 text-white">
        <h1 className="text-3xl font-bold leading-tight">
          신선함은 그대로
          <br />
          관리는 단순하게
        </h1>

        <p className="mt-6 text-xl">우리집냉장고로 신선함을 유지하세요</p>
      </div>
    </section>
  );
}

export default function BrandMark({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[14px] border border-white/15 bg-white text-black shadow-[0_18px_60px_rgba(255,255,255,0.08)] ${
        compact
          ? "h-9 w-9"
          : "h-11 w-11"
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 48 48"
        className="h-full w-full"
        fill="none"
      >
        <path
          d="M11 35.5V12.5h12.2c7 0 11.3 3.4 11.3 9.1 0 3.9-2.1 6.8-5.8 8.2l7.1 5.7h-8.6l-6.1-5.1h-3.8v5.1H11Zm6.3-10.4h5.5c3.5 0 5.3-1.2 5.3-3.6 0-2.5-1.8-3.7-5.3-3.7h-5.5v7.3Z"
          fill="currentColor"
        />

        <path
          d="M38 8 10 40"
          stroke="#6D28D9"
          strokeWidth="3.25"
          strokeLinecap="round"
        />

        <circle
          cx="36.5"
          cy="10"
          r="2.25"
          fill="#6D28D9"
        />
      </svg>
    </span>
  );
}
export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#070707] px-6 text-white">
      <div
        className="flex flex-col items-center text-center"
        role="status"
        aria-live="polite"
      >
        <div
          className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-[16px] border border-white/15 bg-white text-black shadow-[0_18px_60px_rgba(255,255,255,0.08)]"
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
        </div>

        <p className="mt-5 text-lg font-black tracking-[-0.05em]">
          Remu<span className="text-violet-300">AI</span>
        </p>

        <p className="mt-1 text-xs font-medium text-white/35">
          Technology, with judgment
        </p>

        <p className="sr-only">
          Loading RemuAI
        </p>

        <div
          className="mt-6 h-px w-40 overflow-hidden bg-white/10"
          aria-hidden="true"
        >
          <div className="h-full w-2/3 animate-pulse bg-white" />
        </div>
      </div>
    </div>
  );
}
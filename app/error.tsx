"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070707] px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-violet-300">
          Something went wrong
        </p>

        <h1 className="mt-5 text-5xl font-black tracking-[-0.055em] sm:text-6xl">
          We could not load this page correctly.
        </h1>

        <p className="mt-6 text-lg leading-8 text-stone-400">
          Try the request again. If the issue continues, contact RemuAI at
          contact@remuai.space.
        </p>

        <button
          type="button"
          onClick={reset}
          className="mt-9 rounded-xl bg-white px-6 py-3.5 font-black text-black transition hover:bg-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
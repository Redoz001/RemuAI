import type { ReactNode } from "react";

export default function SectionLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`text-xs font-black uppercase tracking-[0.22em] ${
        light
          ? "text-violet-700"
          : "text-violet-300"
      }`}
    >
      {children}
    </span>
  );
}
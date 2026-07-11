"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import Link from "next/link";

import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import {
  COMPANY,
  navLinks,
} from "../lib/site-content";

import {
  ProjectInquiryTrigger,
} from "./ProjectInquirySystem";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const menuId = useId();

  const buttonRef =
    useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener(
      "keydown",
      onKeyDown,
    );

    return () =>
      window.removeEventListener(
        "keydown",
        onKeyDown,
      );
  }, [open]);

  return (
    <div className="relative lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() =>
          setOpen((value) => !value)
        }
        aria-expanded={open}
        aria-controls={menuId}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
      >
        {open ? (
          <X
            className="h-5 w-5"
            aria-hidden="true"
          />
        ) : (
          <Menu
            className="h-5 w-5"
            aria-hidden="true"
          />
        )}

        <span className="sr-only">
          {open ? "Close" : "Open"} navigation menu
        </span>
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            className="fixed inset-0 top-[73px] z-0 cursor-default bg-black/35 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div
            id={menuId}
            className="absolute right-0 top-14 z-10 w-[min(90vw,340px)] rounded-2xl border border-white/10 bg-[#0b0b0b] p-4 shadow-2xl"
          >
            <nav
              className="grid gap-1"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() =>
                    setOpen(false)
                  }
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-stone-300 transition hover:bg-white/[0.05] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-3 grid gap-2 border-t border-white/10 pt-3">
              <ProjectInquiryTrigger
                label="Discuss a Challenge"
                icon="message"
                onTrigger={() =>
                  setOpen(false)
                }
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-bold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              />

              <a
                href={COMPANY.reunexusUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  setOpen(false)
                }
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-black text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              >
                Open ReuNexus

                <ArrowUpRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />

                <span className="sr-only">
                  {" "}
                  (opens in a new tab)
                </span>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
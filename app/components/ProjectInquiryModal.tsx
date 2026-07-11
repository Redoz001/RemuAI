"use client";

import {
  type FormEvent,
  useEffect,
  useRef,
} from "react";

import {
  ArrowRight,
  Mail,
  X,
} from "lucide-react";

import {
  COMPANY,
} from "../lib/site-content";

type ProjectInquiryModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ProjectInquiryModal({
  open,
  onClose,
}: ProjectInquiryModalProps) {
  const dialogRef =
    useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog =
      dialogRef.current;

    if (!dialog) {
      return;
    }

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const submitInquiry = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const data =
      new FormData(event.currentTarget);

    const name =
      String(data.get("name") ?? "").trim();

    const email =
      String(data.get("email") ?? "").trim();

    const organisation =
      String(
        data.get("organisation") ?? "",
      ).trim();

    const challenge =
      String(
        data.get("challenge") ?? "",
      ).trim();

    const subject =
      encodeURIComponent(
        `Project enquiry from ${
          name ||
          "a RemuAI website visitor"
        }`,
      );

    const body =
      encodeURIComponent(
        [
          `Name: ${name}`,
          `Email: ${email}`,
          `Organisation: ${
            organisation ||
            "Not provided"
          }`,
          "",
          "Challenge or opportunity:",
          challenge,
        ].join("\n"),
      );

    window.location.href =
      `mailto:${COMPANY.email}` +
      `?subject=${subject}` +
      `&body=${body}`;

    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClose={onClose}
      className="m-auto w-[min(92vw,680px)] rounded-[30px] border border-white/10 bg-[#0c0c0c] p-0 text-white shadow-[0_40px_160px_rgba(0,0,0,0.7)] backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      aria-labelledby="project-inquiry-title"
    >
      <div className="border-b border-white/10 px-6 py-5 sm:px-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-300">
              Project enquiry
            </p>

            <h2
              id="project-inquiry-title"
              className="mt-2 text-2xl font-black tracking-[-0.03em] sm:text-3xl"
            >
              Bring us the pressure point.
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-stone-300 transition hover:bg-white/[0.08] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
          >
            <X
              className="h-5 w-5"
              aria-hidden="true"
            />

            <span className="sr-only">
              Close project enquiry
            </span>
          </button>
        </div>

        <p className="mt-4 max-w-xl leading-7 text-stone-400">
          A short description is enough.
          Submitting opens your email
          application with the details
          prepared for review before you
          send them.
        </p>
      </div>

      <form
        onSubmit={submitInquiry}
        className="grid gap-5 px-6 py-6 sm:grid-cols-2 sm:px-8 sm:py-8"
      >
        <label className="grid gap-2 text-sm font-semibold text-stone-200">
          Name

          <input
            name="name"
            required
            autoComplete="name"
            className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-stone-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/20"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-stone-200">
          Email

          <input
            name="email"
            required
            type="email"
            autoComplete="email"
            className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-stone-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/20"
            placeholder="you@company.com"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-stone-200 sm:col-span-2">
          Organisation{" "}
          <span className="font-normal text-stone-500">
            (optional)
          </span>

          <input
            name="organisation"
            autoComplete="organization"
            className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-stone-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/20"
            placeholder="Company or organisation"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-stone-200 sm:col-span-2">
          What is creating pressure?

          <textarea
            name="challenge"
            required
            rows={6}
            className="resize-y rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-stone-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/20"
            placeholder="Describe the workflow, product idea, customer problem, system, or decision you want to improve."
          />
        </label>

        <div className="flex flex-col-reverse gap-3 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={`mailto:${COMPANY.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-stone-400 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
          >
            <Mail
              className="h-4 w-4"
              aria-hidden="true"
            />

            Email directly
          </a>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-black text-black transition hover:bg-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
          >
            Prepare Email

            <ArrowRight
              className="h-4 w-4"
              aria-hidden="true"
            />
          </button>
        </div>
      </form>
    </dialog>
  );
}
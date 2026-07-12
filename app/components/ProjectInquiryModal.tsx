"use client";

import {
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  X,
} from "lucide-react";

import {
  createClient,
} from "@supabase/supabase-js";

type ProjectInquiryModalProps = {
  open: boolean;
  onClose: () => void;
};

type FeedbackState = {
  type: "success" | "error";
  message: string;
} | null;

export default function ProjectInquiryModal({
  open,
  onClose,
}: ProjectInquiryModalProps) {
  const dialogRef =
    useRef<HTMLDialogElement>(null);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [feedback, setFeedback] =
    useState<FeedbackState>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const submitInquiry = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

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

    setFeedback(null);
    setIsSubmitting(true);

    try {
      const supabaseUrl =
        process.env.NEXT_PUBLIC_SUPABASE_URL;

      const supabaseKey =
        process.env
          .NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseKey) {
        throw new Error(
          "Supabase environment variables are missing.",
        );
      }

      const supabase = createClient(
        supabaseUrl,
        supabaseKey,
      );

      const { error } = await supabase
  .from("project_inquiries")
  .insert({
    full_name: name,
    company: organisation || "Not provided",
    email,
    phone: "Not provided",
    service: "General enquiry",
    budget: "Not specified",
    description: challenge,
    status: "new",
  });

      if (error) {
        console.error(
          "Supabase inquiry error:",
          error,
        );

        throw new Error(error.message);
      }

      form.reset();

      setFeedback({
        type: "success",
        message:
          "Your enquiry has been submitted successfully. RemuAI will review it shortly.",
      });
    } catch (error) {
      console.error(
        "Project enquiry submission failed:",
        error,
      );

      setFeedback({
        type: "error",
        message:
          "We could not submit your enquiry. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    if (isSubmitting) {
      return;
    }

    setFeedback(null);
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={(event) => {
        event.preventDefault();
        closeModal();
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
            onClick={closeModal}
            disabled={isSubmitting}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-stone-300 transition hover:bg-white/[0.08] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 disabled:cursor-not-allowed disabled:opacity-50"
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
          Describe the business challenge,
          workflow, product idea, or system you
          want to improve. Your enquiry will be
          securely submitted to RemuAI.
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
            minLength={2}
            maxLength={100}
            autoComplete="name"
            disabled={isSubmitting}
            className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-stone-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/20 disabled:cursor-not-allowed disabled:opacity-60"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-stone-200">
          Email

          <input
            name="email"
            required
            type="email"
            maxLength={254}
            autoComplete="email"
            disabled={isSubmitting}
            className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-stone-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/20 disabled:cursor-not-allowed disabled:opacity-60"
            placeholder="you@company.com"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-stone-200 sm:col-span-2">
          <span>
            Organisation{" "}
            <span className="font-normal text-stone-500">
              (optional)
            </span>
          </span>

          <input
            name="organisation"
            maxLength={150}
            autoComplete="organization"
            disabled={isSubmitting}
            className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-stone-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/20 disabled:cursor-not-allowed disabled:opacity-60"
            placeholder="Company or organisation"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-stone-200 sm:col-span-2">
          What is creating pressure?

          <textarea
            name="challenge"
            required
            minLength={10}
            maxLength={5000}
            rows={6}
            disabled={isSubmitting}
            className="resize-y rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-stone-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/20 disabled:cursor-not-allowed disabled:opacity-60"
            placeholder="Describe the workflow, product idea, customer problem, system, or decision you want to improve."
          />
        </label>

        {feedback && (
          <div
            aria-live="polite"
            className={`sm:col-span-2 flex items-start gap-3 rounded-xl border px-4 py-3 text-sm leading-6 ${
              feedback.type === "success"
                ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
                : "border-red-400/20 bg-red-400/10 text-red-200"
            }`}
          >
            {feedback.type === "success" && (
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0"
                aria-hidden="true"
              />
            )}

            <span>{feedback.message}</span>
          </div>
        )}

        <div className="flex justify-end pt-2 sm:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-w-44 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-black text-black transition hover:bg-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <LoaderCircle
                  className="h-4 w-4 animate-spin"
                  aria-hidden="true"
                />

                Submitting...
              </>
            ) : (
              <>
                Submit Enquiry

                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </>
            )}
          </button>
        </div>
      </form>
    </dialog>
  );
}
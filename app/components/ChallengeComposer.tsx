"use client";

import { useMemo, useState } from "react";

import {
  ArrowRight,
  BarChart3,
  Boxes,
  MessagesSquare,
  Route,
} from "lucide-react";

import {
  ProjectInquiryTrigger,
} from "./ProjectInquirySystem";

const challenges = [
  {
    id: "experience",
    label: "Customer experience",
    icon: MessagesSquare,

    prompt:
      "Customers are waiting, dropping off, or struggling to complete important journeys.",

    direction:
      "We map the journey, remove friction, and design a clearer digital service around the moments that matter.",

    outcome:
      "A faster, calmer experience for customers and the teams supporting them.",

    firstMoves: [
      "Map the current journey and failure points",
      "Prioritise the highest-value improvements",
      "Prototype the service before committing to a full build",
    ],
  },
  {
    id: "operations",
    label: "Operations",
    icon: Route,

    prompt:
      "Work is moving through spreadsheets, messages, repeated entry, and manual follow-up.",

    direction:
      "We redesign the workflow, connect the right systems, and automate only the steps that benefit from it.",

    outcome:
      "Less avoidable work, better visibility, and fewer operational gaps.",

    firstMoves: [
      "Document the real workflow, not the assumed one",
      "Identify handoffs, bottlenecks, and control points",
      "Define a practical automation and integration path",
    ],
  },
  {
    id: "product",
    label: "Digital product",
    icon: Boxes,

    prompt:
      "There is a strong product idea, but the scope, architecture, and route to launch are unclear.",

    direction:
      "We turn the idea into a decision-ready product plan, then design and engineer the smallest complete release.",

    outcome:
      "A focused product that can launch, learn, and grow without unnecessary complexity.",

    firstMoves: [
      "Define the user, job, and commercial objective",
      "Shape the release around one complete value loop",
      "Choose an architecture that supports the next stage",
    ],
  },
  {
    id: "knowledge",
    label: "Knowledge and decisions",
    icon: BarChart3,

    prompt:
      "Important knowledge is scattered across documents, inboxes, people, and disconnected tools.",

    direction:
      "We create a dependable knowledge layer that makes information easier to find, understand, and use.",

    outcome:
      "Faster access to trusted knowledge and more consistent day-to-day decisions.",

    firstMoves: [
      "Identify the trusted information sources",
      "Define access, governance, and answer boundaries",
      "Prototype retrieval, assistance, and review workflows",
    ],
  },
] as const;

type ChallengeId =
  (typeof challenges)[number]["id"];

export default function ChallengeComposer() {
  const [activeId, setActiveId] =
    useState<ChallengeId>("operations");

  const active = useMemo(
    () =>
      challenges.find(
        (challenge) =>
          challenge.id === activeId,
      ) ?? challenges[0],

    [activeId],
  );

  return (
    <div className="grid overflow-hidden rounded-[34px] border border-black/10 bg-white shadow-[0_30px_100px_rgba(15,15,15,0.10)] lg:grid-cols-[0.82fr_1.18fr]">
      <div className="border-b border-black/10 bg-[#111111] p-4 text-white lg:border-b-0 lg:border-r lg:p-5">
        <p className="px-3 pb-3 pt-2 text-xs font-black uppercase tracking-[0.2em] text-white/[0.45]">
          Choose a pressure point
        </p>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {challenges.map((challenge) => {
            const Icon = challenge.icon;
            const activeItem =
              activeId === challenge.id;

            return (
              <button
                key={challenge.id}
                type="button"
                onClick={() =>
                  setActiveId(challenge.id)
                }
                aria-pressed={activeItem}
                className={`group flex min-h-16 items-center justify-between rounded-2xl px-4 py-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 ${
                  activeItem
                    ? "bg-white text-black"
                    : "text-white/[0.65] hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                      activeItem
                        ? "border-black/10 bg-black/[0.04]"
                        : "border-white/10 bg-white/[0.04]"
                    }`}
                  >
                    <Icon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </span>

                  <span className="font-bold">
                    {challenge.label}
                  </span>
                </span>

                <ArrowRight
                  className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 ${
                    activeItem
                      ? "opacity-100"
                      : "opacity-35"
                  }`}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>
      </div>

      <div
        className="p-7 text-[#111111] md:p-10 lg:p-12"
        aria-live="polite"
        aria-atomic="true"
      >
        <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-700">
          {active.label}
        </p>

        <h3 className="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-[-0.04em] md:text-4xl">
          {active.prompt}
        </h3>

        <div className="mt-9 grid gap-7 md:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-black/[0.40]">
              RemuAI direction
            </p>

            <p className="mt-3 leading-7 text-black/70">
              {active.direction}
            </p>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-black/[0.40]">
              Intended outcome
            </p>

            <p className="mt-3 leading-7 text-black/70">
              {active.outcome}
            </p>
          </div>
        </div>

        <div className="mt-9 border-t border-black/10 pt-7">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-black/[0.40]">
            A sensible first move
          </p>

          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {active.firstMoves.map(
              (move, index) => (
                <li
                  key={move}
                  className="rounded-2xl border border-black/10 bg-[#f6f3eb] p-4 text-sm leading-6 text-black/70"
                >
                  <span className="mb-3 block text-xs font-black text-violet-700">
                    0{index + 1}
                  </span>

                  {move}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="mt-8">
          <ProjectInquiryTrigger
            label="Discuss This Challenge"
            icon="message"
            className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 font-black text-white transition hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700"
          />
        </div>
      </div>
    </div>
  );
}
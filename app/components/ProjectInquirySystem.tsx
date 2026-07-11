"use client";

import {
  ArrowRight,
  MessageSquareText,
  Phone,
} from "lucide-react";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import ProjectInquiryModal from "./ProjectInquiryModal";

type ProjectInquiryContextValue = {
  openProjectInquiry: () => void;
};

const ProjectInquiryContext =
  createContext<ProjectInquiryContextValue | null>(
    null,
  );

export function ProjectInquiryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openProjectInquiry =
    useCallback(() => setOpen(true), []);

  const closeProjectInquiry =
    useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({
      openProjectInquiry,
    }),
    [openProjectInquiry],
  );

  return (
    <ProjectInquiryContext.Provider
      value={value}
    >
      {children}

      <ProjectInquiryModal
        open={open}
        onClose={closeProjectInquiry}
      />
    </ProjectInquiryContext.Provider>
  );
}

type ProjectInquiryTriggerProps = {
  label: string;
  className?: string;
  icon?: "arrow" | "message" | "phone";
  onTrigger?: () => void;
};

export function ProjectInquiryTrigger({
  label,
  className = "",
  icon = "arrow",
  onTrigger,
}: ProjectInquiryTriggerProps) {
  const context =
    useContext(ProjectInquiryContext);

  if (!context) {
    throw new Error(
      "ProjectInquiryTrigger must be used inside ProjectInquiryProvider.",
    );
  }

  const Icon =
    icon === "message"
      ? MessageSquareText
      : icon === "phone"
        ? Phone
        : ArrowRight;

  return (
    <button
      type="button"
      onClick={() => {
        onTrigger?.();
        context.openProjectInquiry();
      }}
      className={className}
    >
      <span>
        {label}
      </span>

      <Icon
        className="h-4 w-4"
        aria-hidden="true"
      />
    </button>
  );
}
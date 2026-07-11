import BrandMark from "./BrandMark";
import styles from "../page.module.css";

function SystemNode({
  className,
  eyebrow,
  title,
}: {
  className: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div
      className={`absolute z-10 w-[112px] rounded-2xl border border-white/10 bg-[#0d0d0d]/90 p-3.5 shadow-2xl backdrop-blur sm:w-[132px] ${className}`}
    >
      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/[0.35]">
        {eyebrow}
      </p>

      <p className="mt-1 text-sm font-black text-white">
        {title}
      </p>
    </div>
  );
}

export default function SystemMap() {
  return (
    <div
      className={`${styles.systemField} relative aspect-[6/5] min-h-[430px] overflow-hidden rounded-[34px] border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.48)]`}
      role="img"
      aria-label="A system map showing people, customers, workflows, data, products, and decisions connected through a central RemuAI system."
    >
      <div className="absolute inset-x-6 top-5 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-white/[0.35]">
        <span>
          Business system map
        </span>

        <span>
          FIG 01
        </span>
      </div>

      <svg
        viewBox="0 0 600 500"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M164 124C220 146 232 191 284 222"
          stroke="rgba(255,255,255,.16)"
          strokeWidth="1.2"
          className={styles.signalLine}
        />

        <path
          d="M436 124C380 146 368 191 316 222"
          stroke="rgba(255,255,255,.16)"
          strokeWidth="1.2"
          className={styles.signalLineReverse}
        />

        <path
          d="M132 253C210 253 226 251 274 251"
          stroke="rgba(124,58,237,.48)"
          strokeWidth="1.4"
          className={styles.signalLine}
        />

        <path
          d="M468 253C390 253 374 251 326 251"
          stroke="rgba(124,58,237,.48)"
          strokeWidth="1.4"
          className={styles.signalLineReverse}
        />

        <path
          d="M164 382C220 360 232 315 284 284"
          stroke="rgba(255,255,255,.16)"
          strokeWidth="1.2"
          className={styles.signalLineReverse}
        />

        <path
          d="M436 382C380 360 368 315 316 284"
          stroke="rgba(255,255,255,.16)"
          strokeWidth="1.2"
          className={styles.signalLine}
        />

        <circle
          cx="300"
          cy="252"
          r="82"
          stroke="rgba(255,255,255,.08)"
        />

        <circle
          cx="300"
          cy="252"
          r="112"
          stroke="rgba(255,255,255,.035)"
        />

        <circle
          cx="164"
          cy="124"
          r="4"
          fill="#8B5CF6"
          className={styles.pulseNode}
        />

        <circle
          cx="436"
          cy="124"
          r="4"
          fill="#F4F0E2"
          className={styles.pulseNodeDelayed}
        />

        <circle
          cx="132"
          cy="253"
          r="4"
          fill="#8B5CF6"
          className={styles.pulseNodeDelayed}
        />

        <circle
          cx="468"
          cy="253"
          r="4"
          fill="#F4F0E2"
          className={styles.pulseNode}
        />

        <circle
          cx="164"
          cy="382"
          r="4"
          fill="#F4F0E2"
          className={styles.pulseNode}
        />

        <circle
          cx="436"
          cy="382"
          r="4"
          fill="#8B5CF6"
          className={styles.pulseNodeDelayed}
        />
      </svg>

      <SystemNode
        className="left-[6%] top-[14%]"
        eyebrow="01"
        title="People"
      />

      <SystemNode
        className="right-[6%] top-[14%]"
        eyebrow="02"
        title="Customers"
      />

      <SystemNode
        className="left-[1.5%] top-[43%]"
        eyebrow="03"
        title="Workflows"
      />

      <SystemNode
        className="right-[1.5%] top-[43%]"
        eyebrow="04"
        title="Data"
      />

      <SystemNode
        className="bottom-[9%] left-[6%]"
        eyebrow="05"
        title="Products"
      />

      <SystemNode
        className="bottom-[9%] right-[6%]"
        eyebrow="06"
        title="Decisions"
      />

      <div className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-violet-400/30 bg-[#090909] shadow-[0_0_80px_rgba(124,58,237,0.24)] sm:h-32 sm:w-32">
        <BrandMark compact />

        <p className="mt-3 text-[10px] font-black uppercase tracking-[0.18em] text-white/[0.40]">
          One system
        </p>

        <p className="mt-1 text-sm font-black text-white">
          Working together
        </p>
      </div>
    </div>
  );
}
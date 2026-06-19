type DoodleProps = {
  className?: string;
};

export function PdfDoodle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect
        x="20"
        y="10"
        width="70"
        height="90"
        rx="2"
        stroke="currentColor"
        strokeWidth="3"
        fill="var(--ds-bg-panel)"
      />
      <path
        d="M90 10 L90 35 L65 35 L65 10"
        stroke="currentColor"
        strokeWidth="3"
        fill="var(--ds-neutral-secondary-soft)"
      />
      <line x1="32" y1="50" x2="78" y2="50" stroke="currentColor" strokeWidth="2.5" />
      <line x1="32" y1="62" x2="70" y2="62" stroke="currentColor" strokeWidth="2.5" />
      <line x1="32" y1="74" x2="60" y2="74" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="95" cy="85" r="18" stroke="var(--ds-fg-brand)" strokeWidth="3" fill="none" />
      <path
        d="M88 85 L93 90 L103 78"
        stroke="var(--ds-fg-brand)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChatDoodle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M15 25 Q15 15 25 15 L75 15 Q85 15 85 25 L85 55 Q85 65 75 65 L45 65 L25 80 L30 65 L25 65 Q15 65 15 55 Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="var(--ds-bg-panel)"
      />
      <path
        d="M45 75 Q45 65 55 65 L95 65 Q105 65 105 75 L105 95 Q105 105 95 105 L70 105 L55 115 L58 105 L55 105 Q45 105 45 95 Z"
        stroke="var(--ds-fg-brand)"
        strokeWidth="3"
        fill="var(--ds-brand-softer)"
      />
      <circle cx="40" cy="40" r="4" fill="currentColor" />
      <circle cx="55" cy="40" r="4" fill="currentColor" />
      <circle cx="70" cy="40" r="4" fill="currentColor" />
    </svg>
  );
}

export function SearchDoodle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="3" />
      <line
        x1="70"
        y1="70"
        x2="95"
        y2="95"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M35 50 Q50 35 65 50"
        stroke="var(--ds-fg-brand)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function StarDoodle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M40 5 L48 28 L72 28 L53 42 L61 65 L40 50 L19 65 L27 42 L8 28 L32 28 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="var(--ds-brand-softer)"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowDoodle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M5 30 L75 30 M60 15 L75 30 L60 45"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroChatMockup() {
  return (
    <div className="flex h-full w-full flex-col gap-2 p-3">
      <div className="flex items-center gap-2 border-b-2 border-ds-border pb-2">
        <div className="size-3 rounded-full bg-ds-brand" />
        <span className="font-sans text-xs font-medium text-ds-heading">
          quarterly-report.pdf
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 overflow-hidden">
        <div className="ml-auto max-w-[85%] rounded-lg bg-ds-brand-softer px-2.5 py-1.5 font-sans text-[10px] leading-snug text-ds-body">
          What were the key revenue drivers in Q3?
        </div>
        <div className="max-w-[90%] rounded-lg border-2 border-ds-border bg-ds-panel px-2.5 py-1.5 font-sans text-[10px] leading-snug text-ds-body">
          Based on page 12, revenue grew 24% driven by enterprise subscriptions and
          expanded APAC markets.
          <span className="mt-1 block text-[9px] text-ds-fg-brand underline">
            p.12 · Revenue Analysis
          </span>
        </div>
        <div className="ml-auto max-w-[85%] rounded-lg bg-ds-brand-softer px-2.5 py-1.5 font-sans text-[10px] leading-snug text-ds-body">
          Summarize the risk factors
        </div>
      </div>
    </div>
  );
}

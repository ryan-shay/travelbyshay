"use client";

// Opens the browser print dialog, which also offers "Save as PDF".
export default function PrintButton() {
  return (
    <button type="button" className="doc-print" onClick={() => window.print()}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 9V3h12v6M6 18H4a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1h-2" />
        <path d="M6 14h12v7H6z" />
      </svg>
      <span>Print or Save as PDF</span>
    </button>
  );
}

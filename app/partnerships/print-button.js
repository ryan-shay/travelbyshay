"use client";

import { useState } from "react";

// Opens the browser print dialog, which also offers "Save as PDF".
// The dialog blocks rendering, so open it just after the press animation plays.
export default function PrintButton() {
  const [pressed, setPressed] = useState(false);

  function handleClick() {
    if (pressed) return;
    setPressed(true);
    setTimeout(() => window.print(), 260);
    setTimeout(() => setPressed(false), 700);
  }

  return (
    <button
      type="button"
      className={`doc-print${pressed ? " is-pressed" : ""}`}
      onClick={handleClick}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 9V3h12v6M6 18H4a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1h-2" />
        <path className="doc-print-sheet" d="M6 14h12v7H6z" />
      </svg>
      <span>Print or Save as PDF</span>
    </button>
  );
}

"use client";

export default function ThemeToggleIconButton({
  isDark,
  onToggle,
  darkUi = false,
  className = "",
}) {
  const stroke = darkUi ? "rgba(255,255,255,0.95)" : "#1a1c5c";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={onToggle}
      className={`theme-toggle-icon-button ${
        darkUi ? "theme-toggle-icon-button-dark" : "theme-toggle-icon-button-light"
      } ${className}`.trim()}
    >
      <span className="sr-only">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </span>

      <span
        className={`theme-toggle-icon-layer ${
          isDark ? "theme-toggle-icon-visible" : "theme-toggle-icon-hidden-sun"
        }`}
        aria-hidden="true"
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      </span>

      <span
        className={`theme-toggle-icon-layer ${
          !isDark ? "theme-toggle-icon-visible" : "theme-toggle-icon-hidden-moon"
        }`}
        aria-hidden="true"
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>
    </button>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggleIconButton from "./theme-toggle-icon-button";

function getTimeBasedTheme() {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 19 ? "light" : "dark";
}

export default function ThemeNav() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const initialTheme = getTimeBasedTheme();
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }

  return (
    <nav className="site-nav">
      <Link href="/" className="about-link">
        Home
      </Link>
      <Link href="/about" className="about-link">
        About
      </Link>
      <ThemeToggleIconButton isDark={theme === "dark"} onToggle={toggleTheme} darkUi={theme === "dark"} />
    </nav>
  );
}

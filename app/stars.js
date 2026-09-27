"use client";

import { useEffect, useRef } from "react";

// Faint, slowly drifting and twinkling starfield behind the whole page.
export default function Stars() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stars = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let last = performance.now();

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round((w * h) / 7000);
      stars = Array.from({ length: count }, () => {
        const depth = Math.random(); // 0 = far, 1 = near
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.35 + depth * 0.75,
          base: 0.12 + depth * 0.38,
          speed: 1.5 + depth * 5, // px per second
          phase: Math.random() * Math.PI * 2,
          twinkle: 0.4 + Math.random() * 1.2,
        };
      });
    }

    function draw(t) {
      const dt = Math.min((t - last) / 1000, 0.1);
      last = t;
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        if (!still) {
          s.x -= s.speed * dt * 0.6;
          s.y -= s.speed * dt * 0.25;
          if (s.x < -2) s.x = w + 2;
          if (s.y < -2) s.y = h + 2;
        }
        const a = still ? s.base : s.base * (0.65 + 0.35 * Math.sin(t / 1000 * s.twinkle + s.phase));
        ctx.globalAlpha = a;
        ctx.fillStyle = "#f3efe8";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!still) raf = requestAnimationFrame(draw);
    }

    resize();
    raf = requestAnimationFrame(draw);

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // mobile URL bar show/hide only changes height slightly; don't reshuffle for that
        if (Math.abs(window.innerWidth - w) < 1 && Math.abs(window.innerHeight - h) < 120) return;
        cancelAnimationFrame(raf);
        resize();
        raf = requestAnimationFrame(draw);
      }, 150);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="stars" aria-hidden="true" />;
}

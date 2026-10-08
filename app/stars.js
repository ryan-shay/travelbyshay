"use client";

import { useEffect, useRef } from "react";

// Faint, slowly drifting and twinkling starfield behind the whole page.
// A few stars occasionally flare with a soft four-point glint, and every
// so often a shooting star crosses the sky.
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
    let meteor = null;
    let nextMeteor = performance.now() + 6000 + Math.random() * 8000;

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
          r: 0.35 + depth * 0.8,
          base: 0.16 + depth * 0.46,
          speed: 3 + depth * 10, // px per second
          phase: Math.random() * Math.PI * 2,
          twinkle: 0.6 + Math.random() * 1.8,
          // About 1 in 12 stars sparkles: a brief flare every 10 to 20 seconds.
          sparkle: Math.random() < 0.08,
          sparkleRate: 0.3 + Math.random() * 0.3,
          sparklePhase: Math.random() * Math.PI * 2,
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
        const tw = 0.5 + 0.5 * Math.sin((t / 1000) * s.twinkle + s.phase);
        let a = still ? s.base : s.base * (0.35 + 0.9 * tw);
        let r = s.r;
        // Sharp, occasional peak: near zero most of the time, briefly 1.
        const flare =
          s.sparkle && !still
            ? Math.pow(Math.max(0, Math.sin((t / 1000) * s.sparkleRate + s.sparklePhase)), 40)
            : 0;
        if (flare > 0.01) {
          a = Math.min(1, a + flare);
          r = s.r * (1 + flare * 0.8);
        }
        ctx.globalAlpha = Math.min(1, a);
        ctx.fillStyle = "#f3efe8";
        ctx.beginPath();
        ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
        ctx.fill();
        if (flare > 0.01) {
          const len = 3 + flare * 9;
          ctx.globalAlpha = flare * 0.55;
          ctx.strokeStyle = "#f3efe8";
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(s.x - len, s.y);
          ctx.lineTo(s.x + len, s.y);
          ctx.moveTo(s.x, s.y - len);
          ctx.lineTo(s.x, s.y + len);
          ctx.stroke();
        }
      }
      if (!still) {
        drawMeteor(t, dt);
        raf = requestAnimationFrame(draw);
      }
    }

    // A faint streak that crosses part of the sky, then fades out.
    function drawMeteor(t, dt) {
      if (!meteor && t > nextMeteor) {
        const angle = (20 + Math.random() * 20) * (Math.PI / 180);
        meteor = {
          x: Math.random() * w * 0.7 + w * 0.15,
          y: Math.random() * h * 0.35,
          vx: -Math.cos(angle) * 520,
          vy: Math.sin(angle) * 520,
          life: 0,
          span: 0.9 + Math.random() * 0.5, // seconds
        };
      }
      if (!meteor) return;
      meteor.life += dt;
      meteor.x += meteor.vx * dt;
      meteor.y += meteor.vy * dt;
      const p = meteor.life / meteor.span;
      if (p >= 1) {
        meteor = null;
        nextMeteor = t + 15000 + Math.random() * 15000;
        return;
      }
      const fade = Math.sin(Math.PI * p); // in, then out
      const tail = 0.16; // seconds of trail
      const grad = ctx.createLinearGradient(
        meteor.x, meteor.y,
        meteor.x - meteor.vx * tail, meteor.y - meteor.vy * tail
      );
      grad.addColorStop(0, `rgba(243, 239, 232, ${0.85 * fade})`);
      grad.addColorStop(1, "rgba(243, 239, 232, 0)");
      ctx.globalAlpha = 1;
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.1;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(meteor.x, meteor.y);
      ctx.lineTo(meteor.x - meteor.vx * tail, meteor.y - meteor.vy * tail);
      ctx.stroke();
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

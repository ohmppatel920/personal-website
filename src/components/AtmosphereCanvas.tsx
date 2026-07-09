"use client";

import { useEffect, useRef } from "react";

type Blob = {
  hue: string;
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  phase: number;
};

export default function AtmosphereCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const blobs: Blob[] = [
      { hue: "95, 227, 198", x: 0.22, y: 0.28, r: 0.42, dx: 0.6, dy: 0.4, phase: 0 },
      { hue: "138, 147, 255", x: 0.78, y: 0.62, r: 0.5, dx: -0.5, dy: -0.35, phase: 2 },
      { hue: "195, 146, 116", x: 0.6, y: 0.12, r: 0.3, dx: 0.3, dy: 0.5, phase: 4 },
    ];

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      const time = t * 0.00006;
      for (const b of blobs) {
        const cx =
          (b.x + Math.sin(time * b.dx + b.phase) * 0.06) * w;
        const cy =
          (b.y + Math.cos(time * b.dy + b.phase) * 0.06) * h;
        const radius = b.r * Math.max(w, h);
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        g.addColorStop(0, `rgba(${b.hue}, 0.16)`);
        g.addColorStop(0.5, `rgba(${b.hue}, 0.05)`);
        g.addColorStop(1, `rgba(${b.hue}, 0)`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }
      ctx.globalCompositeOperation = "source-over";
    };

    let raf = 0;
    if (reduce) {
      draw(0);
    } else {
      const loop = (t: number) => {
        draw(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} className="atmosphere" aria-hidden />;
}

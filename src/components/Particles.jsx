import { useEffect, useRef } from "react";

// A rotating 3D point sphere drawn on a 2D canvas; points near the cursor get pushed away.
export default function Particles() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const N = window.innerWidth < 700 ? 260 : 520;
    const pts = [];
    // Fibonacci sphere for an even distribution
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = Math.PI * (3 - Math.sqrt(5)) * i;
      pts.push({ x: Math.cos(th) * r, y, z: Math.sin(th) * r });
    }
    let w, h, dpr, raf, rotY = 0, rotX = 0.35;
    const mouse = { x: -9999, y: -9999, tx: 0, ty: 0 };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.tx = (mouse.x / w - 0.5) * 0.6;
      mouse.ty = (mouse.y / h - 0.5) * 0.4;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const R = Math.min(w, h) * 0.46;
      const cx = w / 2, cy = h / 2;
      rotY += reduced ? 0 : 0.0018;
      const ay = rotY + mouse.tx, ax = rotX + mouse.ty;
      const cosY = Math.cos(ay), sinY = Math.sin(ay), cosX = Math.cos(ax), sinX = Math.sin(ax);
      for (const p of pts) {
        let x = p.x * cosY - p.z * sinY;
        let z = p.x * sinY + p.z * cosY;
        let y = p.y * cosX - z * sinX;
        z = p.y * sinX + z * cosX;
        const s = 1 / (1.9 - z * 0.6);
        let px = cx + x * R * s * 1.3, py = cy + y * R * s * 1.3;
        const dx = px - mouse.x, dy = py - mouse.y, d = Math.hypot(dx, dy);
        if (d < 90) {
          const f = (90 - d) / 90;
          px += (dx / (d || 1)) * f * 26;
          py += (dy / (d || 1)) * f * 26;
        }
        const a = 0.12 + (z + 1) * 0.38;
        ctx.fillStyle = z > 0.2 ? `rgba(210,180,255,${a})` : `rgba(140,110,220,${a * 0.7})`;
        ctx.beginPath();
        ctx.arc(px, py, 0.6 + (z + 1) * 0.9, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="particles" aria-hidden="true" />;
}

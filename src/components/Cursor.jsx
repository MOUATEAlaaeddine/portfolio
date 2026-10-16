import { useEffect, useRef } from "react";

// Soft follower cursor; only on devices with a fine pointer
export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    const pos = { x: -100, y: -100 };
    const target = { x: -100, y: -100 };
    let raf;
    const move = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      const hover = e.target.closest("a, button, [data-cursor]");
      el.classList.toggle("cursor-hover", !!hover);
    };
    const loop = () => {
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    document.addEventListener("mousemove", move);
    loop();
    document.documentElement.classList.add("has-cursor");
    return () => {
      document.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor" aria-hidden="true" />;
}

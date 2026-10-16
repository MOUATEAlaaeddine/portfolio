import { useEffect, useRef, useState } from "react";
import { useLang } from "../App.jsx";

export default function Loader({ onEnter }) {
  const { t } = useLang();
  const [pct, setPct] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [gone, setGone] = useState(false);
  const btnRef = useRef(null);
  const ready = pct >= 100;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let v = 0;
    const id = setInterval(() => {
      v = Math.min(100, v + Math.ceil(Math.random() * 9));
      setPct(v);
      if (v >= 100) clearInterval(id);
    }, 70);
    return () => clearInterval(id);
  }, []);

  const enter = () => {
    if (!ready || clicked) return;
    setClicked(true);
    document.body.style.overflow = "";
    onEnter();
    setTimeout(() => setGone(true), 1100);
  };

  const track = (e) => {
    const r = btnRef.current.getBoundingClientRect();
    btnRef.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    btnRef.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  if (gone) return null;

  return (
    <div className={`loader ${clicked ? "loader-out" : ""}`}>
      <div className="loader-marquee" aria-hidden="true">
        <span>Software Engineer · AI Engineer · Full Stack · Software Engineer · AI Engineer · Full Stack ·</span>
      </div>
      <button
        ref={btnRef}
        className={`loader-btn ${ready ? "ready" : ""}`}
        onClick={enter}
        onMouseMove={track}
        disabled={!ready}
      >
        <span className="loader-glow" />
        <span className="loader-label">
          {ready ? t.loader.welcome : `${t.loader.loading} ${pct}%`}
        </span>
        {ready && <span className="loader-arrow">→</span>}
      </button>
    </div>
  );
}

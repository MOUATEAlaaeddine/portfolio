import { useEffect, useRef, useState } from "react";
import { useLang } from "../App.jsx";
import { PROFILE, PROJECTS } from "../content.js";
import { useReveal } from "./reveal.jsx";
import { ArrowIcon, GitHubIcon, ImagesIcon } from "./icons.jsx";

function Cover({ p, onOpen }) {
  if (p.cover) {
    return (
      <button className="work-cover has-img" onClick={onOpen} aria-label={`${p.name} screenshots`}>
        <img src={p.cover} alt={`${p.name} screenshot`} loading="lazy" />
        <span className="work-cover-hint">
          <ImagesIcon /> {p.gallery.length}
        </span>
      </button>
    );
  }
  return (
    <div className="work-cover glyph" style={{ "--accent": p.accent }}>
      <span className="glyph-bg">{p.glyph}</span>
      <span className="glyph-cat">{p.tags.slice(0, 3).join("  ·  ")}</span>
    </div>
  );
}

function Gallery({ p, onClose, t }) {
  const [i, setI] = useState(0);
  const n = p.gallery.length;
  const prev = () => setI((v) => (v - 1 + n) % n);
  const next = () => setI((v) => (v + 1) % n);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  });

  return (
    <div className="gallery" role="dialog" aria-modal="true" aria-label={p.name} onClick={onClose} data-lenis-prevent>
      <div className="gallery-inner" onClick={(e) => e.stopPropagation()}>
        <div className="gallery-head">
          <span>{p.name} · {i + 1} / {n}</span>
          <button onClick={onClose}>{t.work.close} ✕</button>
        </div>
        <div className="gallery-stage">
          <button className="gallery-nav prev" onClick={prev} aria-label="Previous">‹</button>
          <img src={p.gallery[i]} alt={`${p.name} ${i + 1}`} key={i} />
          <button className="gallery-nav next" onClick={next} aria-label="Next">›</button>
        </div>
        <div className="gallery-thumbs">
          {p.gallery.map((src, k) => (
            <button key={src} className={k === i ? "active" : ""} onClick={() => setI(k)}>
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// A lone card left over at the end of the two-column grid spans the full row
const regular = PROJECTS.filter((p) => !p.cover).length;
const isWide = (idx) => !PROJECTS[idx].cover && idx === PROJECTS.length - 1 && regular % 2 === 1;

export default function Work() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(null);
  const ref = useRef(null);
  useReveal(ref, [lang]);

  return (
    <section className="section work" id="work" ref={ref}>
      <div className="container">
        <h2 className="section-title rv">
          {t.work.title1} <span className="grad">{t.work.title2}</span>
        </h2>
        <div className="work-list">
          {PROJECTS.map((p, idx) => (
            <article key={p.id} className={`work-item rv ${p.cover ? "featured" : ""} ${isWide(idx) ? "wide" : ""}`} style={{ "--accent": p.accent }}>
              <Cover p={p} onOpen={() => setOpen(p)} />
              <div className="work-info">
                <div className="work-meta">
                  <span className="work-idx">{String(idx + 1).padStart(2, "0")}</span>
                  <span>{p.year}</span>
                  {p.team && <span className="work-team">{t.work.team} · {p.team}</span>}
                </div>
                <h3>{p.name}</h3>
                <p className="work-cat">{p.category[lang]}</p>
                {p.context && <p className="work-context">{p.context[lang]}</p>}
                <ul>
                  {p.points[lang].map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="tags">
                  {p.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="work-links">
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" className="link-btn">
                    <GitHubIcon size={16} /> {t.work.code} <ArrowIcon size={14} />
                  </a>
                  {p.gallery && (
                    <button className="link-btn" onClick={() => setOpen(p)}>
                      <ImagesIcon size={16} /> {t.work.gallery}
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="work-more rv">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            {t.work.more} <ArrowIcon size={16} />
          </a>
        </div>
      </div>
      {open && <Gallery p={open} t={t} onClose={() => setOpen(null)} />}
    </section>
  );
}

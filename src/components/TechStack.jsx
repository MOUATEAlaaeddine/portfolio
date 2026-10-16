import { useRef } from "react";
import { useLang } from "../App.jsx";
import { CERTS, SPOKEN, STACK } from "../content.js";
import { useReveal } from "./reveal.jsx";

function Row({ items, reverse }) {
  // Duplicated so the CSS marquee loops seamlessly
  const list = [...items, ...items];
  return (
    <div className={`marquee ${reverse ? "reverse" : ""}`} dir="ltr">
      <div className="marquee-track">
        {list.map((s, i) => (
          <div className="stack-item" key={i} aria-hidden={i >= items.length}>
            <span className="stack-icon"><img src={s.icon} alt="" loading="lazy" /></span>
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const { t, lang } = useLang();
  const ref = useRef(null);
  useReveal(ref, [lang]);
  const half = Math.ceil(STACK.length / 2);

  return (
    <section className="section stack" ref={ref}>
      <div className="container">
        <h2 className="section-title center rv">{t.stack.title}</h2>
      </div>
      <div className="rv">
        <Row items={STACK.slice(0, half)} />
        <Row items={STACK.slice(half)} reverse />
      </div>

      <div className="container extras">
        <div className="extra-card rv">
          <h3>{t.certs.title}</h3>
          <ul>
            {CERTS.map((c) => (
              <li key={c.name}>
                <b>{c.name}</b>
                <span>{c.org} · {c.year}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="extra-card rv">
          <h3>{t.certs.langs}</h3>
          <ul>
            {SPOKEN[lang].map(([l, lvl]) => (
              <li key={l}>
                <b>{l}</b>
                <span>{lvl}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

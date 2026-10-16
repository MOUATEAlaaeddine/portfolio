import { useRef, useState } from "react";
import { useLang } from "../App.jsx";
import { SKILL_TAGS } from "../content.js";
import { useReveal } from "./reveal.jsx";

const TAGS = [
  ["React", "Angular", "Spring Boot", "Flask", "FastAPI", "JEE", "Socket.IO", "PostgreSQL", "MongoDB", "Docker"],
  ["GPT-4o", "Hugging Face", "OpenAI API", "NLP", "Scikit-learn", "Pandas", "Random Forest", "Recommender systems", "R"],
];

export default function WhatIDo() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  useReveal(ref, [lang]);

  return (
    <section className="section what" ref={ref}>
      <div className="container what-grid">
        <h2 className="what-title rv">
          {t.what.title1}
          <br />
          <span className="grad">{t.what.title2}</span>
        </h2>
        <div className="what-boxes">
          {t.what.items.map((item, i) => (
            <div
              key={i}
              className={`what-box rv ${active === i ? "active" : ""} ${active !== null && active !== i ? "dim" : ""}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(active === i ? null : i)}
              data-cursor
            >
              <span className="what-num">0{i + 1}</span>
              <h3>{item.title}</h3>
              <h4>{item.sub}</h4>
              <p>{item.text}</p>
              <h5>{t.what.skills}</h5>
              <div className="tags">
                {TAGS[i].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container skill-strip rv">
        {SKILL_TAGS.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </section>
  );
}

import { useRef } from "react";
import { useLang } from "../App.jsx";
import { Words, useWordReveal } from "./reveal.jsx";

export default function About() {
  const { t, lang } = useLang();
  const ref = useRef(null);
  useWordReveal(ref, [lang]);

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container about-inner">
        <h3 className="eyebrow">{t.about.title}</h3>
        <p className="about-text words-reveal">
          <Words text={t.about.text} key={lang} />
        </p>
      </div>
    </section>
  );
}

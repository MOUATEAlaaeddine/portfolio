import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useLang } from "../App.jsx";
import { JOURNEY } from "../content.js";
import { useReveal } from "./reveal.jsx";

export default function Journey() {
  const { t, lang } = useLang();
  const ref = useRef(null);
  useReveal(ref, [lang]);

  // The glowing line grows with scroll progress through the timeline
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: ".timeline", start: "top 70%", end: "bottom 60%", scrub: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section journey" id="journey" ref={ref}>
      <div className="container">
        <h2 className="section-title rv">
          {t.journey.title1} <span className="grad">{t.journey.title2}</span>
        </h2>
        <div className="timeline">
          <div className="timeline-line">
            <div className="timeline-fill" />
          </div>
          {JOURNEY.map((item, i) => (
            <div className={`tl-item rv ${item.award ? "award" : ""}`} key={i}>
              <div className="tl-dot" />
              <div className="tl-date">{typeof item.date === "string" ? item.date : item.date[lang]}</div>
              <div className="tl-body">
                <h3>{item.award && <span className="tl-trophy">🏆</span>}{item.title[lang]}</h3>
                <p>{item.org[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

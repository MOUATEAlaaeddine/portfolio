import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useLang } from "../App.jsx";
import { PROFILE } from "../content.js";
import Particles from "./Particles.jsx";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons.jsx";

export default function Hero({ entered }) {
  const { t, lang, scrollTo } = useLang();
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!entered || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hero-photo", { scale: 0.85, opacity: 0, duration: 1.4 }, 0.2)
        .from(".hero-line-in", { yPercent: 110, duration: 1.1, stagger: 0.08 }, 0.35)
        .from(".hero-fade", { y: 20, opacity: 0, duration: 0.9, stagger: 0.08 }, 0.8);
    }, ref);
    return () => ctx.revert();
  }, [entered, lang]);

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero-bg-circle c1" />
      <div className="hero-bg-circle c2" />

      <div className="hero-grid">
        <div className="hero-left">
          <p className="hero-hello hero-fade">{t.hero.hello}</p>
          <h1 className="hero-name">
            <span className="hero-line"><span className="hero-line-in">{t.hero.name[0]}</span></span>
            <span className="hero-line"><span className="hero-line-in grad">{t.hero.name[1]}</span></span>
          </h1>
        </div>

        <div className="hero-center">
          <Particles />
          <div className="hero-photo">
            <img src={PROFILE.photo} alt={PROFILE.name} width="1000" height="1333" fetchpriority="high" />
          </div>
        </div>

        <div className="hero-right">
          <h2 className="hero-role">
            <span className="hero-line"><span className="hero-line-in">{t.hero.role1}</span></span>
            <span className="hero-line"><span className="hero-line-in outline">{t.hero.role2}</span></span>
          </h2>
        </div>
      </div>

      <div className="hero-bottom">
        <p className="hero-status hero-fade">
          <span className="dot" /> {t.hero.status}
        </p>
        <div className="hero-actions hero-fade">
          <a href="#work" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollTo("work"); }}>
            {t.hero.cta}
          </a>
          <a href={PROFILE.cv} className="btn btn-ghost" download>
            {t.hero.cv}
          </a>
        </div>
        <div className="hero-social hero-fade">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email"><MailIcon /></a>
        </div>
      </div>
    </section>
  );
}

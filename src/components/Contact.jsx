import { useRef, useState } from "react";
import { useLang } from "../App.jsx";
import { PROFILE } from "../content.js";
import { useReveal } from "./reveal.jsx";
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./icons.jsx";

export default function Contact() {
  const { t, lang, scrollTo } = useLang();
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  useReveal(ref, [lang]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {}
  };

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <h2 className="contact-title rv">
          {t.contact.title1} <span className="grad">{t.contact.title2}</span>
        </h2>
        <p className="contact-text rv">{t.contact.text}</p>

        <div className="contact-grid">
          <div className="contact-card rv">
            <h4>{t.contact.email}</h4>
            <a href={`mailto:${PROFILE.email}`} className="contact-big" dir="ltr">
              <MailIcon /> {PROFILE.email}
            </a>
            <button className="copy-btn" onClick={copy}>
              {copied ? t.contact.copied : t.contact.copy}
            </button>
          </div>
          <div className="contact-card rv">
            <h4>{t.contact.phone}</h4>
            <a href={PROFILE.phoneHref} className="contact-big" dir="ltr">
              <PhoneIcon /> {PROFILE.phone}
            </a>
          </div>
          <div className="contact-card rv">
            <h4>{t.contact.social}</h4>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              <GitHubIcon /> GitHub <ArrowIcon size={14} />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              <LinkedInIcon /> LinkedIn <ArrowIcon size={14} />
            </a>
          </div>
        </div>

        <div className="contact-cta rv">
          <a href={`mailto:${PROFILE.email}`} className="btn btn-primary btn-big">
            {t.contact.title1} {t.contact.title2} <ArrowIcon />
          </a>
          <a href={PROFILE.cv} className="btn btn-ghost btn-big" download>
            {t.hero.cv}
          </a>
        </div>
      </div>

      <footer className="footer container">
        <span>
          {t.contact.footer} <b>{PROFILE.name}</b> · © {new Date().getFullYear()}
        </span>
        <a href="#top" onClick={(e) => { e.preventDefault(); scrollTo("top"); }}>↑ Top</a>
      </footer>
    </section>
  );
}

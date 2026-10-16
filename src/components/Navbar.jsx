import { useEffect, useState } from "react";
import { useLang } from "../App.jsx";
import { LANGS, PROFILE } from "../content.js";

export default function Navbar() {
  const { lang, setLang, t, scrollTo } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollTo(id);
  };

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <a href="#top" className="nav-logo" dir="ltr" onClick={go("top")}>
        AM<span>.</span>
      </a>
      <a href={`mailto:${PROFILE.email}`} className="nav-mail">
        {PROFILE.email}
      </a>
      <nav className={`nav-links ${open ? "open" : ""}`}>
        {["about", "work", "journey", "contact"].map((id) => (
          <a key={id} href={`#${id}`} onClick={go(id)}>
            {t.nav[id]}
          </a>
        ))}
      </nav>
      <div className="nav-right">
        <div className="lang-switch" role="group" aria-label="Language">
          {LANGS.map((l) => (
            <button
              key={l.code}
              className={l.code === lang ? "active" : ""}
              onClick={() => setLang(l.code)}
              aria-pressed={l.code === lang}
            >
              {l.label}
            </button>
          ))}
        </div>
        <button className="nav-burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

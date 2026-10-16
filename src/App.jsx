import { createContext, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { LANGS, UI } from "./content.js";
import Loader from "./components/Loader.jsx";
import Cursor from "./components/Cursor.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import WhatIDo from "./components/WhatIDo.jsx";
import Journey from "./components/Journey.jsx";
import Work from "./components/Work.jsx";
import TechStack from "./components/TechStack.jsx";
import Contact from "./components/Contact.jsx";

gsap.registerPlugin(ScrollTrigger);

const LangContext = createContext(null);
export const useLang = () => useContext(LangContext);

function initialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved && UI[saved]) return saved;
  } catch (e) {}
  const nav = (navigator.language || "en").slice(0, 2);
  return UI[nav] ? nav : "en";
}

export default function App() {
  const [lang, setLang] = useState(initialLang);
  const [entered, setEntered] = useState(false);
  const lenisRef = useRef(null);
  const t = UI[lang];

  useLayoutEffect(() => {
    const dir = LANGS.find((l) => l.code === lang).dir;
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {}
    // Text length changes between languages, so trigger positions must be recomputed
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [lang]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    entered ? lenis.start() : lenis.stop();
  }, [entered]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenisRef.current) lenisRef.current.scrollTo(el, { offset: -70 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t, scrollTo }}>
      <Loader onEnter={() => setEntered(true)} />
      <Cursor />
      <Navbar />
      <main className={entered ? "entered" : ""}>
        <Hero entered={entered} />
        <About />
        <WhatIDo />
        <Journey />
        <Work />
        <TechStack />
        <Contact />
      </main>
    </LangContext.Provider>
  );
}

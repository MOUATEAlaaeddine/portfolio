import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Fades and lifts every `.rv` element inside `scope` as it scrolls into view.
// Re-runs when `deps` change (e.g. language switch re-renders text).
export function useReveal(scope, deps = []) {
  useLayoutEffect(() => {
    if (reduced() || !scope.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".rv").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    }, scope);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

// Splits text into word spans so they can be animated in sequence.
export function Words({ text, className = "" }) {
  return (
    <span className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i}>
          <span className="word"><span className="word-in">{w}</span></span>{" "}
        </span>
      ))}
    </span>
  );
}

export function useWordReveal(scope, deps = []) {
  useLayoutEffect(() => {
    if (reduced() || !scope.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".words-reveal").forEach((block) => {
        gsap.from(block.querySelectorAll(".word-in"), {
          yPercent: 110,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.025,
          scrollTrigger: { trigger: block, start: "top 85%", once: true },
        });
      });
    }, scope);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export { ScrollTrigger };

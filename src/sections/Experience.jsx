import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { experience as data } from "../data/lateSections";
import "./Experience.css";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const rootRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  useScrollReveal(rootRef, { selector: "[data-reveal]", from: { autoAlpha: 0, y: 20 } });

  // Chronological roadmap reveal: the line draws to each point, the point
  // activates, then that column's information appears — then the line
  // continues to the next point. Not pinned/scrubbed — plays out once as a
  // short cinematic sequence when the section enters view, so it never makes
  // the page taller or blocks normal scrolling.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const line = root.querySelector(".experience-line");
    const dots = root.querySelectorAll(".experience-dot");
    const columns = root.querySelectorAll(".experience-column");
    const arrow = root.querySelector(".experience-arrow");

    if (reducedMotion) {
      gsap.set(line, { scaleX: 1 });
      gsap.set(dots, { scale: 1 });
      gsap.set(columns, { autoAlpha: 1, y: 0 });
      gsap.set(arrow, { autoAlpha: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 65%", once: true },
        defaults: { ease: "power1.out" },
      });

      gsap.set(line, { scaleX: 0, transformOrigin: "left" });
      gsap.set(dots, { scale: 0, transformOrigin: "center" });
      gsap.set(columns, { autoAlpha: 0, y: 16 });
      gsap.set(arrow, { autoAlpha: 0 });

      dots.forEach((dot, i) => {
        const fraction = (i + 1) / dots.length;
        tl.to(line, { scaleX: fraction, duration: 0.6 })
          .to(dot, { scale: 1, duration: 0.3, ease: "power2.out" }, "<")
          .to(columns[i], { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.1");
      });

      tl.to(arrow, { autoAlpha: 1, duration: 0.3 }, "-=0.2");
    }, root);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section id="experience" ref={rootRef} className="experience" aria-label="Experience">
      <h2 className="experience-heading" data-reveal>
        {data.heading}
      </h2>

      <div className="experience-timeline">
        <span className="experience-line" aria-hidden="true" />
        <span className="experience-arrow" aria-hidden="true" />
        {data.items.map((item) => (
          <span key={item.year} className="experience-dot" aria-hidden="true" />
        ))}
      </div>

      <div className="experience-columns">
        {data.items.map((item) => (
          <div key={item.year} className="experience-column">
            <p className="experience-year">{item.year}</p>
            <h3 className="experience-company">{item.company}</h3>
            <p className="experience-role">{item.role}</p>
            <p className="experience-body">{item.body}</p>
            <ul className="experience-bullets">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

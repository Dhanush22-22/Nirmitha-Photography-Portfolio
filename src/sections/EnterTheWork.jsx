import { useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./EnterTheWork.css";

export default function EnterTheWork() {
  const rootRef = useRef(null);
  useScrollReveal(rootRef, { from: { autoAlpha: 0, y: 20 }, stagger: 0.18, start: "top 75%" });

  return (
    <section id="enter-the-work" ref={rootRef} className="enter-work" aria-label="Enter the Work">
      <p className="enter-work-script" data-reveal>
        Enter <span className="enter-work-word-2">the</span>{" "}
        <span className="enter-work-word-3">Visual</span>{" "}
        <span className="enter-work-word-4">World</span>
      </p>
      <h2 className="enter-work-heading" data-reveal>
        VIEW MY WORK
      </h2>
    </section>
  );
}

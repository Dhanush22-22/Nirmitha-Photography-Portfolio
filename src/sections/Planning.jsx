import { useRef } from "react";
import ResponsiveImage from "../components/ResponsiveImage";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { planning as data } from "../data/lateSections";
import "./Planning.css";

export default function Planning() {
  const rootRef = useRef(null);
  useScrollReveal(rootRef, { selector: "[data-reveal]", from: { autoAlpha: 0, y: 24 }, stagger: 0.1 });
  useScrollReveal(rootRef, {
    selector: "[data-reveal-media]",
    from: { autoAlpha: 0, scale: 1.05 },
    duration: 1.3,
    start: "top 90%",
  });

  return (
    <section id="planning" ref={rootRef} className="planning" aria-label="Planning the Perfect Shot">
      <div className="planning-media" data-reveal-media>
        <ResponsiveImage {...data.image} sizes="(max-width: 900px) 100vw, 40vw" />
      </div>

      <div className="planning-copy">
        <h2 className="planning-heading">
          {data.heading.map((line) => (
            <span key={line} data-reveal>
              {line}
            </span>
          ))}
        </h2>
        <p className="planning-body" data-reveal>
          {data.body}
        </p>
        <p className="planning-quote" data-reveal>
          &ldquo;{data.quote}&rdquo;
        </p>
      </div>
    </section>
  );
}

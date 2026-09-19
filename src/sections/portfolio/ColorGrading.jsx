import { useRef } from "react";
import ResponsiveImage from "../../components/ResponsiveImage";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { colorGrading as items } from "../../data/portfolio";
import "./ColorGrading.css";

function ColorGradePanel({ item }) {
  const rootRef = useRef(null);
  useScrollReveal(rootRef, { selector: "[data-reveal]", from: { autoAlpha: 0, y: 20 }, stagger: 0.08 });
  useScrollReveal(rootRef, {
    selector: "[data-reveal-media]",
    from: { autoAlpha: 0, y: 28 },
    stagger: 0.1,
    start: "top 88%",
  });

  return (
    <div ref={rootRef} className="color-grade" data-grade={item.id}>
      <div className="color-grade-label">
        <span className="color-grade-label-main" data-reveal>
          COLOR GRADING
        </span>
        <span className="color-grade-label-sub" data-reveal>
          {item.label}
        </span>
      </div>

      <div className="color-grade-pair">
        <figure className="color-grade-item" data-reveal-media>
          <figcaption className="color-grade-caption">BEFORE</figcaption>
          <ResponsiveImage {...item.before} sizes="(max-width: 767px) 44vw, 27vw" />
        </figure>
        <figure className="color-grade-item" data-reveal-media>
          <figcaption className="color-grade-caption">AFTER</figcaption>
          <ResponsiveImage {...item.after} sizes="(max-width: 767px) 44vw, 27vw" />
        </figure>
      </div>
    </div>
  );
}

export default function ColorGrading() {
  return (
    <>
      {items.map((item) => (
        <ColorGradePanel key={item.id} item={item} />
      ))}
    </>
  );
}

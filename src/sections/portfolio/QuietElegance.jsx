import { useRef } from "react";
import ResponsiveImage from "../../components/ResponsiveImage";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { quietElegance as data } from "../../data/portfolio";
import "./QuietElegance.css";

export default function QuietElegance() {
  const rootRef = useRef(null);
  useScrollReveal(rootRef, { selector: "[data-reveal]", from: { autoAlpha: 0, y: 22 }, stagger: 0.1 });
  useScrollReveal(rootRef, {
    selector: "[data-reveal-media]",
    from: { autoAlpha: 0, scale: 1.05 },
    duration: 1.3,
    start: "top 90%",
  });

  return (
    <div ref={rootRef} className="quiet-elegance">
      <div className="quiet-elegance-media quiet-elegance-media-left" data-reveal-media>
        <ResponsiveImage {...data.imageLeft} sizes="(max-width: 900px) 100vw, 39vw" />
      </div>

      <div className="quiet-elegance-copy">
        <p className="quiet-elegance-script" data-reveal>
          {data.script}
        </p>
        <h2 className="quiet-elegance-heading" data-reveal>
          {data.heading}
        </h2>
        <p className="quiet-elegance-body" data-reveal>
          {data.body}
        </p>
      </div>

      <div className="quiet-elegance-media quiet-elegance-media-right" data-reveal-media>
        <ResponsiveImage {...data.imageRight} sizes="(max-width: 900px) 100vw, 31vw" />
      </div>
    </div>
  );
}

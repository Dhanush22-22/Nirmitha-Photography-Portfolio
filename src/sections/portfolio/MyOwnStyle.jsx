import { useRef } from "react";
import ResponsiveImage from "../../components/ResponsiveImage";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { myOwnStyle as data } from "../../data/portfolio";
import "./MyOwnStyle.css";

export default function MyOwnStyle() {
  const rootRef = useRef(null);
  useScrollReveal(rootRef, { selector: "[data-reveal]", from: { autoAlpha: 0, y: 24 }, stagger: 0.1 });
  useScrollReveal(rootRef, {
    selector: "[data-reveal-media]",
    from: { autoAlpha: 0, scale: 1.06 },
    duration: 1.3,
    start: "top 90%",
  });

  return (
    <div ref={rootRef} className="my-own-style">
      <div className="my-own-style-copy">
        <p className="my-own-style-script" data-reveal>
          {data.script}
        </p>
        <h2 className="my-own-style-heading" data-reveal>
          {data.heading}
        </h2>
        <p className="my-own-style-body" data-reveal>
          {data.body}
        </p>
      </div>
      <div className="my-own-style-media" data-reveal-media>
        <ResponsiveImage {...data.image} sizes="(max-width: 900px) 100vw, 39vw" />
      </div>
    </div>
  );
}

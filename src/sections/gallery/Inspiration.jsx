import { useRef } from "react";
import ResponsiveImage from "../../components/ResponsiveImage";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { inspiration as data } from "../../data/gallery";
import "./Inspiration.css";

export default function Inspiration() {
  const rootRef = useRef(null);
  useScrollReveal(rootRef, { selector: "[data-reveal]", from: { autoAlpha: 0, y: 24 }, stagger: 0.12 });
  useScrollReveal(rootRef, {
    selector: "[data-reveal-media]",
    from: { autoAlpha: 0, scale: 1.05 },
    duration: 1.3,
    start: "top 90%",
  });

  return (
    <div ref={rootRef} className="inspiration">
      <div className="inspiration-frame">
        <div className="inspiration-media inspiration-media-left" data-reveal-media>
          <ResponsiveImage {...data.images[0]} sizes="(max-width: 767px) 40vw, 26vw" />
        </div>
        <div className="inspiration-media inspiration-media-right" data-reveal-media>
          <ResponsiveImage {...data.images[1]} sizes="(max-width: 767px) 40vw, 26vw" />
        </div>

        <div className="inspiration-content">
          <p className="inspiration-script" data-reveal>
            {data.script}
          </p>
          <h2 className="inspiration-heading" data-reveal>
            {data.title}
          </h2>
          <p className="inspiration-body" data-reveal>
            {data.body}
          </p>
        </div>
      </div>
    </div>
  );
}

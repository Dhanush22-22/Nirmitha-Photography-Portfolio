import { useRef } from "react";
import VideoPlayer from "../components/VideoPlayer";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { throughOurLens as data } from "../data/lateSections";
import "./ThroughOurLens.css";

export default function ThroughOurLens() {
  const rootRef = useRef(null);
  useScrollReveal(rootRef, { selector: "[data-reveal]", from: { autoAlpha: 0, y: 24 }, stagger: 0.1 });
  useScrollReveal(rootRef, {
    selector: "[data-reveal-media]",
    from: { autoAlpha: 0, scale: 1.05 },
    duration: 1.3,
    start: "top 90%",
  });

  return (
    <section id="through-our-lens" ref={rootRef} className="lens" aria-label="Through Our Lens">
      <div className="lens-media" data-reveal-media>
        <VideoPlayer {...data.video} />
      </div>

      <div className="lens-copy">
        <h2 className="lens-heading">
          {data.heading.map((line) => (
            <span key={line} data-reveal>
              {line}
            </span>
          ))}
        </h2>
        <p className="lens-paragraph lens-paragraph-1" data-reveal>
          {data.paragraph1}
        </p>
        <p className="lens-paragraph lens-paragraph-2" data-reveal>
          {data.paragraph2}
        </p>
      </div>
    </section>
  );
}

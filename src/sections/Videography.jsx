import { useRef } from "react";
import VideoPlayer from "../components/VideoPlayer";
import SquiggleArrow from "../components/icons/SquiggleArrow";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { videography as data } from "../data/lateSections";
import "./Videography.css";

export default function Videography() {
  const rootRef = useRef(null);
  useScrollReveal(rootRef, { selector: "[data-reveal]", from: { autoAlpha: 0, y: 24 }, stagger: 0.1 });
  useScrollReveal(rootRef, {
    selector: "[data-reveal-media]",
    from: { autoAlpha: 0, scale: 1.05 },
    duration: 1.3,
    start: "top 90%",
  });

  return (
    <section id="videography" ref={rootRef} className="videography" aria-label="Videography">
      <div className="videography-media" data-reveal-media>
        <VideoPlayer {...data.video} />
      </div>

      <div className="videography-copy">
        <h2 className="videography-heading" data-reveal>
          {data.heading}
        </h2>
        <p className="videography-paragraph videography-paragraph-1" data-reveal>
          {data.paragraph1}
        </p>
        <p className="videography-paragraph videography-paragraph-2" data-reveal>
          {data.paragraph2}
        </p>
        <SquiggleArrow className="videography-arrow" aria-hidden="true" />
      </div>
    </section>
  );
}

import { useRef } from "react";
import ResponsiveImage from "../../components/ResponsiveImage";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { elysianShowcase as data } from "../../data/lateSections";
import "./ElysianShowcase.css";

export default function ElysianShowcase() {
  const rootRef = useRef(null);
  useScrollReveal(rootRef, { selector: "[data-reveal]", from: { autoAlpha: 0, y: 20 }, stagger: 0.08 });
  useScrollReveal(rootRef, {
    selector: "[data-reveal-media]",
    from: { autoAlpha: 0, y: 24 },
    stagger: 0.08,
    start: "top 85%",
  });

  return (
    <div ref={rootRef} className="elysian">
      <div className="elysian-frame">
        <div className="elysian-grid-1" data-reveal-media>
          <ResponsiveImage watermark={false} {...data.grids[0]} sizes="(max-width: 767px) 46vw, 21vw" />
        </div>
        <div className="elysian-grid-2" data-reveal-media>
          <ResponsiveImage watermark={false} {...data.grids[1]} sizes="(max-width: 767px) 46vw, 21vw" />
        </div>

        <div className="elysian-info">
          <h2 className="elysian-heading" data-reveal>
            {data.heading}
          </h2>
          <p className="elysian-url" data-reveal>
            <span className="elysian-url-label">URL:</span>{" "}
            <a href={data.urlHref} target="_blank" rel="noreferrer">
              {data.urlLabel}
            </a>
          </p>
        </div>

        <div className="elysian-reel-1" data-reveal-media>
          <ResponsiveImage watermark={false} {...data.reels[0]} sizes="(max-width: 767px) 46vw, 20vw" />
        </div>
        <div className="elysian-reel-2" data-reveal-media>
          <ResponsiveImage watermark={false} {...data.reels[1]} sizes="(max-width: 767px) 46vw, 20vw" />
        </div>

        <p className="elysian-caption" data-reveal>
          {data.caption}
        </p>
      </div>
    </div>
  );
}

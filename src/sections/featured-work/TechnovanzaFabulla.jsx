import { useRef } from "react";
import ResponsiveImage from "../../components/ResponsiveImage";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { technovanzaFabulla as data } from "../../data/lateSections";
import "./TechnovanzaFabulla.css";

export default function TechnovanzaFabulla() {
  const rootRef = useRef(null);
  useScrollReveal(rootRef, { selector: "[data-reveal]", from: { autoAlpha: 0, y: 20 }, stagger: 0.08 });
  useScrollReveal(rootRef, {
    selector: "[data-reveal-media]",
    from: { autoAlpha: 0, y: 24 },
    stagger: 0.1,
    start: "top 85%",
  });

  return (
    <div ref={rootRef} className="tv-fab">
      <div className="tv-fab-media tv-fab-media-left" data-reveal-media>
        <ResponsiveImage watermark={false} {...data.images.technovanza} sizes="(max-width: 900px) 100vw, 26vw" />
      </div>

      <div className="tv-fab-info">
        <div className="tv-fab-block">
          <h2 className="tv-fab-heading" data-reveal>
            {data.technovanza.heading}
          </h2>
          <p className="tv-fab-url" data-reveal>
            <span className="tv-fab-url-label">URL:</span>{" "}
            <a href={data.technovanza.urlHref} target="_blank" rel="noreferrer">
              {data.technovanza.urlLabel}
            </a>
          </p>
          <p className="tv-fab-year" data-reveal>
            {data.technovanza.year}
          </p>
        </div>

        <div className="tv-fab-block">
          <h2 className="tv-fab-heading" data-reveal>
            {data.fabulla.heading}
          </h2>
          <p className="tv-fab-url" data-reveal>
            <span className="tv-fab-url-label">URL:</span>{" "}
            <a href={data.fabulla.urlHref} target="_blank" rel="noreferrer">
              {data.fabulla.urlLabel}
            </a>
          </p>
          <p className="tv-fab-year" data-reveal>
            {data.fabulla.year}
          </p>
        </div>
      </div>

      <div className="tv-fab-media tv-fab-media-right" data-reveal-media>
        <ResponsiveImage watermark={false} {...data.images.fabulla} sizes="(max-width: 900px) 100vw, 27vw" />
      </div>
    </div>
  );
}

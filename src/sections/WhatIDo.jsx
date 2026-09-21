import { useRef } from "react";
import ResponsiveImage from "../components/ResponsiveImage";
import CameraIcon from "../components/icons/CameraIcon";
import ViewfinderBracket from "../components/icons/ViewfinderBracket";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { whatIDo as data } from "../data/whatIDo";
import "./WhatIDo.css";

export default function WhatIDo() {
  const rootRef = useRef(null);
  useScrollReveal(rootRef, { selector: "[data-reveal]", from: { autoAlpha: 0, y: 24 }, stagger: 0.06 });
  useScrollReveal(rootRef, {
    selector: "[data-reveal-media]",
    from: { autoAlpha: 0, scale: 1.06 },
    duration: 1.3,
    start: "top 90%",
  });

  return (
    <section id="what-i-do" ref={rootRef} className="what-i-do" aria-label="What I Do">
      <div className="what-i-do-sidebar">
        <div className="what-i-do-sidebar-top">
          <ViewfinderBracket className="what-i-do-sidebar-icon" />
          <span className="what-i-do-vertical" data-reveal>
            {data.verticalLabel}
          </span>
        </div>
        <div className="what-i-do-sidebar-bottom">
          <span className="what-i-do-vertical what-i-do-vertical-quote" data-reveal>
            &ldquo;{data.verticalQuote}&rdquo;
          </span>
        </div>
      </div>

      <div className="what-i-do-media" data-reveal-media>
        <ResponsiveImage
          name="what-i-do-lens"
          widths={[500, 800, 963]}
          width={963}
          height={1080}
          alt="Close-up of a vintage camera's aperture and focus rings"
          sizes="(max-width: 900px) 100vw, 50vw"
          watermark={false}
        />
      </div>

      <CameraIcon className="what-i-do-icon" data-reveal />

      <div className="what-i-do-panel">
        <div className="what-i-do-panel-inner">
          <CameraIcon className="what-i-do-icon-mobile" aria-hidden="true" />
          <h2 className="what-i-do-heading" data-reveal>{data.heading}</h2>

          <ol className="what-i-do-list">
            {data.items.map((item, i) => (
              <li key={item.title} className="what-i-do-item" data-reveal>
                <span className="what-i-do-index">{String(i + 1).padStart(2, "0")}</span>
                <span className="what-i-do-copy">
                  <span className="what-i-do-title">{item.title}:</span> <span className="what-i-do-body">{item.body}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

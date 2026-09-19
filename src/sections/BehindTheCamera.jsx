import { useRef } from "react";
import ResponsiveImage from "../components/ResponsiveImage";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { behindTheCamera as data } from "../data/behindTheCamera";
import "./BehindTheCamera.css";

export default function BehindTheCamera() {
  const rootRef = useRef(null);
  useScrollReveal(rootRef, { selector: "[data-reveal]", from: { autoAlpha: 0, y: 28 } });
  useScrollReveal(rootRef, {
    selector: "[data-reveal-media]",
    from: { autoAlpha: 0, scale: 1.06 },
    duration: 1.3,
    start: "top 90%",
  });

  return (
    <section id="behind-the-camera" ref={rootRef} className="behind-camera" aria-label="Behind the Camera">
      <div className="behind-camera-grid">
        <div className="behind-camera-media" data-reveal-media>
          <ResponsiveImage
            name="behind-camera"
            widths={[400, 599]}
            width={599}
            height={1017}
            alt="Two mirrorless cameras with telephoto lenses resting on a stage backdrop"
            sizes="(max-width: 767px) 100vw, 45vw"
          />
        </div>

        <div className="behind-camera-copy">
          <div className="behind-camera-copy-inner">
            <h2 className="behind-camera-heading">
              {data.heading.map((line) => (
                <span key={line} data-reveal>
                  {line}
                </span>
              ))}
            </h2>

            {data.paragraphs.map((p) => (
              <p key={p} className="behind-camera-paragraph" data-reveal>
                {p}
              </p>
            ))}
          </div>

          <blockquote className="behind-camera-quote" data-reveal>
            &ldquo;{data.quote}&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}

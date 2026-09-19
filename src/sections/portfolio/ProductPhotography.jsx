import { useRef } from "react";
import ResponsiveImage from "../../components/ResponsiveImage";
import SquiggleArrow from "../../components/icons/SquiggleArrow";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { productPhotography as data } from "../../data/portfolio";
import "./ProductPhotography.css";

export default function ProductPhotography() {
  const rootRef = useRef(null);
  useScrollReveal(rootRef, { selector: "[data-reveal]", from: { autoAlpha: 0, y: 22 }, stagger: 0.08 });
  useScrollReveal(rootRef, {
    selector: "[data-reveal-media]",
    from: { autoAlpha: 0, scale: 1.05 },
    duration: 1.3,
    start: "top 90%",
  });

  return (
    <div ref={rootRef} className="product-photo">
      <div className="product-photo-copy">
        <h2 className="product-photo-heading" data-reveal>
          {data.heading}
        </h2>
        <p className="product-photo-quote" data-reveal>
          &ldquo;{data.quote}&rdquo;
        </p>
        <p className="product-photo-body" data-reveal>
          {data.body}
        </p>
        <div className="product-photo-caption-row" data-reveal>
          <p className="product-photo-caption">{data.caption}</p>
          <SquiggleArrow className="product-photo-arrow" />
        </div>
      </div>
      <div className="product-photo-media" data-reveal-media>
        <ResponsiveImage {...data.image} sizes="(max-width: 900px) 100vw, 43vw" />
      </div>
    </div>
  );
}

import { useRef } from "react";
import ResponsiveImage from "../../components/ResponsiveImage";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { foodBeverage as data } from "../../data/portfolio";
import "./FoodBeverage.css";

export default function FoodBeverage() {
  const rootRef = useRef(null);
  useScrollReveal(rootRef, { selector: "[data-reveal]", from: { autoAlpha: 0, y: 20 }, stagger: 0.08 });
  useScrollReveal(rootRef, {
    selector: "[data-reveal-media]",
    from: { autoAlpha: 0, y: 28 },
    stagger: 0.1,
    start: "top 88%",
  });

  return (
    <div ref={rootRef} className="food-bev">
      <div className="food-bev-frame">
        <p className="food-bev-body" data-reveal>
          {data.body}
        </p>

        <figure className="food-bev-soup" data-reveal-media>
          <ResponsiveImage {...data.imageLeft} sizes="(max-width: 767px) 46vw, 28vw" />
        </figure>

        <h2 className="food-bev-heading" data-reveal>
          {data.heading.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>

        <figure className="food-bev-drink" data-reveal-media>
          <ResponsiveImage {...data.imageRight} sizes="(max-width: 767px) 46vw, 38vw" />
        </figure>

        <span className="food-bev-tag" data-reveal>
          {data.tag}
        </span>
      </div>
    </div>
  );
}

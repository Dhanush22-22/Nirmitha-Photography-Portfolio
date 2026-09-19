import { useRef } from "react";
import ResponsiveImage from "../../components/ResponsiveImage";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { spacesInteriors as data } from "../../data/portfolio";
import "./SpacesInteriors.css";

export default function SpacesInteriors() {
  const rootRef = useRef(null);
  useScrollReveal(rootRef, { selector: "[data-reveal]", from: { autoAlpha: 0, y: 20 }, stagger: 0.1 });
  useScrollReveal(rootRef, {
    selector: "[data-reveal-media]",
    from: { autoAlpha: 0, y: 28 },
    stagger: 0.12,
    start: "top 85%",
  });

  const [first, second, third] = data.items;

  return (
    <div ref={rootRef} className="spaces">
      <div className="spaces-frame">
        <figure className="spaces-item spaces-item-1" data-reveal-media>
          <ResponsiveImage {...first.image} sizes="(max-width: 767px) 80vw, 29vw" />
        </figure>
        <p className="spaces-tag spaces-tag-1" data-reveal>
          {first.tag}
        </p>

        <figure className="spaces-item spaces-item-2" data-reveal-media>
          <ResponsiveImage {...second.image} sizes="(max-width: 767px) 80vw, 32vw" />
        </figure>
        <p className="spaces-tag spaces-tag-2" data-reveal>
          {second.tag}
        </p>

        <figure className="spaces-item spaces-item-3" data-reveal-media>
          <ResponsiveImage {...third.image} sizes="(max-width: 767px) 80vw, 29vw" />
        </figure>
        <p className="spaces-tag spaces-tag-3" data-reveal>
          {third.tag}
        </p>

        <h2 className="spaces-heading" data-reveal>
          {data.heading.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>

        <p className="spaces-quote" data-reveal>
          {data.quote}
        </p>
      </div>
    </div>
  );
}

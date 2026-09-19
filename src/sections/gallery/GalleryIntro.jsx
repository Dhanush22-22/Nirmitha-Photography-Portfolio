import { useRef } from "react";
import ResponsiveImage from "../../components/ResponsiveImage";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { galleryIntro as data } from "../../data/gallery";
import "./GalleryIntro.css";

export default function GalleryIntro() {
  const rootRef = useRef(null);
  useScrollReveal(rootRef, { from: { autoAlpha: 0, y: 24 }, stagger: 0.15, start: "top 78%" });

  return (
    <div ref={rootRef} className="gallery-intro">
      <div className="gallery-intro-media" aria-hidden="true">
        <ResponsiveImage
          name="gallery-intro"
          widths={[500, 800, 1015]}
          width={1015}
          height={1318}
          alt=""
          sizes="45vw"
        />
      </div>
      <div className="gallery-intro-title">
        <h2 className="gallery-intro-photo" data-reveal>
          {data.title}
        </h2>
        <p className="gallery-intro-script" data-reveal>
          {data.script}
        </p>
      </div>
    </div>
  );
}

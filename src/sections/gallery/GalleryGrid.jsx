import { useRef } from "react";
import ResponsiveImage from "../../components/ResponsiveImage";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { galleryGrid as data } from "../../data/gallery";
import "./GalleryGrid.css";

export default function GalleryGrid() {
  const rootRef = useRef(null);
  useScrollReveal(rootRef, {
    selector: "[data-reveal-media]",
    from: { autoAlpha: 0, y: 36 },
    stagger: 0.15,
    start: "top 85%",
  });

  return (
    <div ref={rootRef} className="gallery-grid" aria-label="Gallery collage">
      <span className="gallery-grid-vertical" aria-hidden="true">
        GALLERY
      </span>
      <div className="gallery-grid-track">
        {data.images.map((img, i) => (
          <figure key={img.name} className={`gallery-grid-item gallery-grid-item-${i + 1}`} data-reveal-media>
            <ResponsiveImage
              name={img.name}
              widths={img.widths}
              width={img.width}
              height={img.height}
              alt={img.alt}
              sizes="(max-width: 767px) 82vw, 38vw"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

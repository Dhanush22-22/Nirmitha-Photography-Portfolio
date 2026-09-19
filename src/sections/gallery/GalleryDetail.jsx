import { useRef, useState, useCallback } from "react";
import ResponsiveImage from "../../components/ResponsiveImage";
import Lightbox from "../../components/Lightbox";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { galleryDetail as data } from "../../data/gallery";
import "./GalleryDetail.css";

export default function GalleryDetail() {
  const rootRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useScrollReveal(rootRef, { selector: "[data-reveal]", from: { autoAlpha: 0, y: 20 } });
  useScrollReveal(rootRef, {
    selector: "[data-reveal-media]",
    from: { autoAlpha: 0, y: 32 },
    stagger: 0.08,
    start: "top 85%",
  });

  const navigate = useCallback(
    (dir) => setActiveIndex((i) => (i + dir + data.images.length) % data.images.length),
    []
  );

  const areaClasses = ["flower", "tall", "small-1", "small-2", "small-3", "large"];

  return (
    <div ref={rootRef} className="gallery-detail">
      <div className="gallery-detail-grid">
        <p className="gallery-detail-caption" data-reveal>
          {data.caption}
        </p>

        {data.images.map((img, i) => (
          <button
            key={img.name}
            type="button"
            className={`gallery-detail-item gallery-detail-${areaClasses[i]}`}
            data-reveal-media
            onClick={() => setActiveIndex(i)}
            aria-label={`View larger: ${img.alt}`}
          >
            <ResponsiveImage
              name={img.name}
              widths={img.widths}
              width={img.width}
              height={img.height}
              alt={img.alt}
              sizes="(max-width: 767px) 46vw, (max-width: 1200px) 30vw, 25vw"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={data.images}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={navigate}
        />
      )}
    </div>
  );
}

import { useEffect } from "react";
import ResponsiveImage from "./ResponsiveImage";
import "./Lightbox.css";

/**
 * Minimal click-to-view lightbox. No library — a fixed overlay, one <img>,
 * keyboard + click-outside to close. Images already have the AVIF/WebP/JPEG
 * srcset generated for the grid, so opening it costs no extra network weight
 * beyond whatever size was already loaded (plus a larger source step if needed).
 */
export default function Lightbox({ images, index, onClose, onNavigate }) {
  const image = images[index];

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(1);
      if (e.key === "ArrowLeft") onNavigate(-1);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onNavigate]);

  if (!image) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={image.alt} onClick={onClose}>
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
        &times;
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(-1);
            }}
          >
            &#8249;
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(1);
            }}
          >
            &#8250;
          </button>
        </>
      )}

      <div className="lightbox-frame" onClick={(e) => e.stopPropagation()}>
        <ResponsiveImage
          name={image.name}
          widths={image.widths}
          width={image.width}
          height={image.height}
          alt={image.alt}
          sizes="90vw"
          loading="eager"
        />
      </div>
    </div>
  );
}

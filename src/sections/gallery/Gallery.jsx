import GalleryIntro from "./GalleryIntro";
import GalleryGrid from "./GalleryGrid";
import GalleryDetail from "./GalleryDetail";
import Inspiration from "./Inspiration";

// Slides 5–8 collapse into one continuous "Gallery" website section per the
// 24-slides -> 13-sections blueprint, each slide kept as its own sub-block.
export default function Gallery() {
  return (
    <section id="gallery" aria-label="Gallery">
      <GalleryIntro />
      <GalleryGrid />
      <GalleryDetail />
      <Inspiration />
    </section>
  );
}

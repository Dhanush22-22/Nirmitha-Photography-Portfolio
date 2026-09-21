import Watermark from "./Watermark";

/**
 * Renders the AVIF/WebP/JPEG triplet produced by scripts/optimize-images.mjs.
 * `widths` must match the widths actually generated for `name`. Reserves the
 * image's intrinsic aspect ratio so nothing shifts as it loads.
 */
export default function ResponsiveImage({
  name,
  widths,
  width,
  height,
  alt,
  sizes = "100vw",
  loading = "lazy",
  fetchPriority,
  className = "",
  imgRef,
  watermark = true,
}) {
  const srcset = (ext) => widths.map((w) => `/images/${name}-${w}.${ext} ${w}w`).join(", ");
  const fallbackWidth = widths[widths.length - 1];

  // The rendered width hints in `sizes` (in vw) scale the watermark to the image.
  const desktopVw = sizes.match(/(\d+(?:\.\d+)?)vw\s*$/)?.[1];
  const mobileVw = sizes.match(/\(max-width:[^)]+\)\s*(\d+(?:\.\d+)?)vw/)?.[1];
  const watermarkStyle = { "--wm-w": desktopVw, "--wm-w-sm": mobileVw };

  return (
    <>
    <picture className={className}>
      <source type="image/avif" srcSet={srcset("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcset("webp")} sizes={sizes} />
      <img
        ref={imgRef}
        src={`/images/${name}-${fallbackWidth}.jpg`}
        srcSet={srcset("jpg")}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
      />
    </picture>
    {watermark && <Watermark name={name} style={watermarkStyle} />}
    </>
  );
}

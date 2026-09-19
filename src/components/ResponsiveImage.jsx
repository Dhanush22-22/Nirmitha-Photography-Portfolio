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
}) {
  const srcset = (ext) => widths.map((w) => `/images/${name}-${w}.${ext} ${w}w`).join(", ");
  const fallbackWidth = widths[widths.length - 1];

  return (
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
  );
}

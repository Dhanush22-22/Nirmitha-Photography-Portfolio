// Per-image watermark styling. The mark is always at the exact centre of its media; only
// tone, opacity and (rarely) a faint shadow vary. Default is ivory at 40%.
// Chosen by comparing both tones pixel-by-pixel behind the centred text.
//   tone: "dark" for charcoal lettering (default ivory)
//   opacity: individual override
//   shadow: very faint halo for busy backgrounds
// Color Grading before/after pairs share one setting so the comparison stays fair.
export const watermarkStyles = {
  "behind-camera": { opacity: 0.5 },
  "gallery-2": { opacity: 0.55, shadow: true },
  "gallery-1": { opacity: 0.5, shadow: true },
  "gallery-detail-1": { tone: "dark", opacity: 0.7, shadow: true },
  "gallery-detail-3": { tone: "dark", opacity: 0.55 },
  "inspire-2": { tone: "dark", opacity: 0.65 },
  "elegance-1": { tone: "dark", opacity: 0.55 },
  "elegance-2": { opacity: 0.8, shadow: "tight" },
  "grade-restobar-before": { opacity: 0.65, shadow: "tight" },
  "grade-restobar-after": { opacity: 0.65, shadow: "tight" },
  "grade-arrival-before": { opacity: 0.55, shadow: true },
  "grade-arrival-after": { opacity: 0.55, shadow: true },
  "spaces-1": { opacity: 0.6, shadow: true },
  "spaces-2": { opacity: 0.5, shadow: true },
  "spaces-3": { opacity: 0.7, shadow: "tight" },
  "food-1": { tone: "dark", opacity: 0.55 },
  "food-2": { opacity: 0.7, shadow: "tight" },
  closing: { opacity: 0.75, shadow: true },
};


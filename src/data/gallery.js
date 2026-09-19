// Slides 5–8 — combined into the single "Gallery" website section per the blueprint.
export const galleryIntro = {
  title: "PHOTO",
  script: "gallery",
};

export const galleryGrid = {
  verticalLabel: "GALLERY",
  // Order matches the PPT exactly: rooftop terrace on the left, domed courtyard on the right.
  images: [
    {
      name: "gallery-2",
      widths: [400, 600, 648],
      width: 648,
      height: 864,
      alt: "Rooftop lounge terrace with a glazed canopy, blue upholstered chairs and a glass floor",
    },
    {
      name: "gallery-1",
      widths: [400, 555],
      width: 555,
      height: 871,
      alt: "Domed terracotta-arched courtyard restaurant with hanging pendant chandeliers",
    },
  ],
};

export const galleryDetail = {
  caption:
    "A collection of details, textures, colours, and moments captured through my lens. From floral arrangements to intricate art, grand spaces, and lively occasions, each frame celebrates the beauty found in the details.",
  images: [
    { name: "gallery-detail-1", widths: [400, 600, 609], width: 609, height: 864, alt: "A white flower cart on wheels displaying bunches of fresh cut flowers" },
    { name: "gallery-detail-2", widths: [400, 600, 648], width: 648, height: 864, alt: "Sunlit curtain and monstera plant beside a window with a garden view" },
    { name: "gallery-detail-3", widths: [400, 600, 648], width: 648, height: 864, alt: "A tray of rose-shaped soaps and a candle resting among dark foliage" },
    { name: "gallery-detail-4", widths: [400, 600, 648], width: 648, height: 864, alt: "A black-wrapped rose bouquet beside a mixed bouquet of red and pink roses" },
    { name: "gallery-detail-5", widths: [400, 600, 648], width: 648, height: 864, alt: "Close-up of two hands with jewelled nail art and a diamond ring" },
    { name: "gallery-detail-6", widths: [400, 600, 648], width: 648, height: 864, alt: "Sunlight breaking through trees onto a golden palace archway at dusk" },
  ],
};

export const inspiration = {
  script: "Things that",
  title: "INSPIRE ME",
  body: "I love capturing that brief moment when the sky glows, the world slows down, and everything feels beautifully still.",
  images: [
    { name: "inspire-1", widths: [400, 555], width: 555, height: 740, alt: "Sun setting over silhouetted trees on a beach shoreline" },
    { name: "inspire-2", widths: [400, 555], width: 555, height: 740, alt: "Silhouetted pine trees framing a thatched beach pavilion at sunset" },
  ],
};

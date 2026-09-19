// Slides 9–16 — text transcribed verbatim from the PPTX; images identified by
// direct visual comparison (and, for Slide 8-adjacent ambiguity, XML r:embed
// tracing) against the rendered PPT slides. Order/positions preserved exactly.

export const myOwnStyle = {
  script: "My own",
  heading: "STYLE",
  body: "Portrait photography is an exploration of light, composition, expression, and mood. Each frame brings together subtle details, thoughtful styling, and atmosphere to create a photograph that feels distinctive, refined, and timeless.",
  image: { name: "style", widths: [400, 600, 648], width: 648, height: 864, alt: "A layered green, cream and red drink in a tall glass on a dark table" },
};

export const quietElegance = {
  script: "Quiet",
  heading: "ELEGANCE",
  body: "I capture the ambience, interiors, lighting, and details. From intimate corners to carefully designed spaces, I focus on creating images that convey the mood, warmth, and experience of the place.",
  imageLeft: { name: "elegance-1", widths: [400, 600, 648], width: 648, height: 864, alt: "Bar with antler chandeliers and backlit bottle shelving above a gold counter" },
  imageRight: { name: "elegance-2", widths: [400, 600, 648], width: 648, height: 864, alt: "Ornate mosaic-tiled bar shelving under a thatched roof with mirrored panels" },
};

// Slides 11–13 — fed into one reusable BeforeAfter component.
export const colorGrading = [
  {
    id: "restobar",
    label: "RESTOBAR",
    before: { name: "grade-restobar-before", widths: [400, 555, 602], width: 602, height: 802, alt: "Restobar interior before color grading, cooler tones" },
    after: { name: "grade-restobar-after", widths: [400, 555, 593], width: 593, height: 802, alt: "Restobar interior after color grading, warm red-orange tones" },
    beforeAfterScale: "large",
  },
  {
    id: "hotel-balcony",
    label: "HOTEL BALCONY",
    before: { name: "grade-balcony-before", widths: [400, 555], width: 555, height: 740, alt: "Hotel balcony at night before color grading" },
    after: { name: "grade-balcony-after", widths: [400, 555], width: 555, height: 740, alt: "Hotel balcony at night after color grading, warmer highlights" },
    beforeAfterScale: "large",
  },
  {
    id: "arrival-ambience",
    label: "ARRIVAL & AMBIENCE",
    before: { name: "grade-arrival-before", widths: [400, 555], width: 555, height: 740, alt: "View through a glass stairwell before color grading" },
    after: { name: "grade-arrival-after", widths: [400, 555], width: 555, height: 740, alt: "View through a glass stairwell after color grading, richer greens" },
    beforeAfterScale: "small",
  },
];

export const productPhotography = {
  heading: "PRODUCT PHOTOGRAPHY",
  quote: "EVERY PRODUCT HAS A STORY. THE RIGHT FRAME REVEALS IT.",
  body: "I approach product photography by looking beyond the object itself considering light, angles, composition, texture, and perspective to bring out what makes it unique. I enjoy experimenting with different viewpoints and lighting to highlight the details, character, and purpose of a product. For me, the goal is not simply to photograph what a product looks like, but to create an image that shows how it feels, what it represents, and why it deserves to be noticed.",
  caption: "I captured this frame using dramatic lighting, reflections, and a monochrome composition to create a moody atmosphere. The arrangement of the beverages and surrounding details adds depth and character to the shot.",
  image: { name: "product", widths: [400, 600, 824], width: 824, height: 1099, alt: "Monochrome photo of Coca-Cola, Budweiser and Corona bottles on a table beside a leather chair" },
};

export const spacesInteriors = {
  heading: ["SPACES &", "INTERIORS"],
  quote: "\"FINDING BEAUTY IN SPACES, DETAILS, TEXTURES, AND THE ATMOSPHERE THEY CREATE.\"",
  items: [
    { tag: "Quirky Spaces", image: { name: "spaces-1", widths: [400, 555], width: 555, height: 740, alt: "Covered lounge with hanging lantern lights and woven basket chairs" } },
    { tag: "Goofy Corners", image: { name: "spaces-2", widths: [400, 555], width: 555, height: 740, alt: "Close-up of hanging lanterns beside a blue cushioned bench and plant" } },
    { tag: "Littele Oddities", image: { name: "spaces-3", widths: [400, 555], width: 555, height: 740, alt: "Garden pavilion beside a pond, framed by trees" } },
  ],
};

export const foodBeverage = {
  heading: ["FOOD &", "BEVERAGE", "PHOTOGRAPHY"],
  body: "The colours, textures, details, and the feeling it creates. I enjoy finding the right light and perspective to make every plate feel inviting and capture not just how it looks, but the mood and craft behind it. For me, food photography is about turning something meant to be experienced into something that can be felt through a frame.",
  tag: "Culinary",
  imageLeft: { name: "food-1", widths: [400, 536], width: 536, height: 715, alt: "Overhead view of creamy seafood chowder with toasted bread in a striped bowl" },
  imageRight: { name: "food-2", widths: [400, 600, 738], width: 738, height: 929, alt: "Cola drink, dessert and sunglasses on a granite table beside a plated dessert" },
};

/*
  Where the "NIRMITHA N" signature sits on each photograph, chosen by looking at the
  actual image: the quietest, darkest area, clear of faces, subjects and baked-in text.
  Keys are the image asset names (or video poster names).

  Presets: tl tc tr / ml mr / bl bc br. Middle presets accept a vertical override in
  percent of the image height, e.g. "mr@30".
*/
export const watermarkPositions = {
  "behind-camera": "br",
  "gallery-intro": "tr",
  "gallery-2": "L62T78",
  "gallery-1": "L38T60",
  "gallery-detail-1": "L68T30+",
  "gallery-detail-2": "tr",
  "gallery-detail-3": "tr",
  "gallery-detail-4": "tr",
  "gallery-detail-5": "tl",
  "gallery-detail-6": "bl",
  "inspire-1": "tr",
  "inspire-2": "br",
  style: "tr",
  "elegance-1": "tr",
  "elegance-2": "tr",
  "grade-restobar-before": "bc",
  "grade-restobar-after": "bc",
  "grade-balcony-before": "mr@30",
  "grade-balcony-after": "mr@30",
  "grade-arrival-before": "bl",
  "grade-arrival-after": "bl",
  product: "mr",
  "spaces-1": "bc",
  "spaces-2": "br",
  "spaces-3": "bl",
  "food-1": "tr",
  "food-2": "bl",
  planning: "ml@45",
  closing: "mr@9",
  "videography-poster": "mr",
  "lens-poster": "mr",
};

// One-off build utility: generates optimized web copies of source photographs
// into public/images. Never touches files under "Original Assets" — reads them only.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SOURCE_PHOTOS = path.resolve(ROOT, "..", "Original Assets", "Photos");
// The two video poster frames only exist as the PPTX's own embedded media (the
// original designer's chosen poster for each clip) — not under Original Assets.
const SOURCE_PPTX_MEDIA = path.resolve(
  "C:\\Users\\HP\\AppData\\Local\\Temp\\claude\\C--Users-HP-Documents-Nirmitha-Portfolio\\56bcd1d3-16fd-4acb-823f-41c92225de64\\scratchpad\\pptx_extract\\ppt\\media"
);
const OUT_DIR = path.join(ROOT, "public", "images");

const WIDTHS = [640, 960, 1280, 1600, 1920, 2400];

async function generate(sourceFile, outName, { widths = WIDTHS, quality = 82, sourceDir = SOURCE_PHOTOS } = {}) {
  const srcPath = path.join(sourceDir, sourceFile);
  const meta = await sharp(srcPath).metadata();
  const targetWidths = widths.filter((w) => w <= meta.width);
  if (!targetWidths.includes(meta.width) && meta.width <= Math.max(...widths)) {
    targetWidths.push(meta.width);
  }

  for (const width of targetWidths) {
    const base = sharp(srcPath).resize({ width, withoutEnlargement: true });

    await base
      .clone()
      .avif({ quality })
      .toFile(path.join(OUT_DIR, `${outName}-${width}.avif`));

    await base
      .clone()
      .webp({ quality })
      .toFile(path.join(OUT_DIR, `${outName}-${width}.webp`));

    await base
      .clone()
      .jpeg({ quality, mozjpeg: true })
      .toFile(path.join(OUT_DIR, `${outName}-${width}.jpg`));
  }

  console.log(`optimized ${sourceFile} -> ${outName} [${targetWidths.join(", ")}]`);
}

async function generateCropped(sourceFile, outName, extract, { widths = WIDTHS, quality = 82 } = {}) {
  const srcPath = path.join(SOURCE_PHOTOS, sourceFile);
  const cropped = await sharp(srcPath).extract(extract).toBuffer();
  const meta = await sharp(cropped).metadata();
  const targetWidths = widths.filter((w) => w <= meta.width);
  if (!targetWidths.includes(meta.width)) targetWidths.push(meta.width);

  for (const width of targetWidths) {
    const base = sharp(cropped).resize({ width, withoutEnlargement: true });
    await base.clone().avif({ quality }).toFile(path.join(OUT_DIR, `${outName}-${width}.avif`));
    await base.clone().webp({ quality }).toFile(path.join(OUT_DIR, `${outName}-${width}.webp`));
    await base.clone().jpeg({ quality, mozjpeg: true }).toFile(path.join(OUT_DIR, `${outName}-${width}.jpg`));
  }

  console.log(`optimized (cropped) ${sourceFile} -> ${outName} [${targetWidths.join(", ")}]`);
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  // Hero (Slide 1 — flattened Canva export, used as the hero background photograph)
  await generate("1ST SLIDE.png", "hero", { widths: [640, 960, 1280, 1920, 2250], quality: 85 });

  // Behind the Camera (Slide 2)
  await generate("2ND SLIDE.png", "behind-camera", { widths: [400, 600, 800, 1200], quality: 85 });

  // What I Do (Slide 3 — flattened; cropping just the lens photograph, excluding the
  // 72px decorative sidebar on the left and the cream panel starting at x=1035)
  await generateCropped(
    "3RD SLIDE.png",
    "what-i-do-lens",
    { left: 72, top: 0, width: 963, height: 1080 },
    { widths: [500, 800, 963], quality: 85 }
  );

  // Gallery intro (Slide 5)
  await generate("5TH SLIDE.png", "gallery-intro", { widths: [500, 800, 1015], quality: 85 });

  // Gallery collage (Slide 6)
  await generate("6TH.png", "gallery-1", { widths: [400, 600, 900], quality: 85 });
  await generate("6THH.png", "gallery-2", { widths: [400, 600, 900], quality: 85 });

  // Gallery detail collage (Slide 7)
  const detailSources = [
    "7TH.png",
    "7THH.png",
    "7THHH.png",
    "7THHHH.png",
    "7THHHHH.png",
    "7THHHHHHH.png",
  ];
  for (let i = 0; i < detailSources.length; i++) {
    await generate(detailSources[i], `gallery-detail-${i + 1}`, { widths: [400, 600, 900], quality: 85 });
  }

  // Inspiration (Slide 8)
  await generate("8TH.png", "inspire-1", { widths: [400, 600, 900], quality: 85 });
  await generate("8THH.png", "inspire-2", { widths: [400, 600, 900], quality: 85 });

  // My Own Style (Slide 9)
  await generate("9TH.png", "style", { widths: [400, 600, 648], quality: 85 });

  // Quiet Elegance (Slide 10)
  await generate("10TH.png", "elegance-1", { widths: [400, 600, 648], quality: 85 });
  await generate("10THH.png", "elegance-2", { widths: [400, 600, 648], quality: 85 });

  // Color Grading before/after triptych (Slides 11-13)
  await generate("11TH BEFORE.png", "grade-restobar-before", { widths: [400, 555, 602], quality: 85 });
  await generate("11TH AFTER.png", "grade-restobar-after", { widths: [400, 555, 593], quality: 85 });
  await generate("12TH BEFORE.png", "grade-balcony-before", { widths: [400, 555], quality: 85 });
  await generate("12TH AFTER.png", "grade-balcony-after", { widths: [400, 555], quality: 85 });
  await generate("13TH BEFORE.png", "grade-arrival-before", { widths: [400, 555], quality: 85 });
  await generate("13TH AFTER.png", "grade-arrival-after", { widths: [400, 555], quality: 85 });

  // Product Photography (Slide 14 — already monochrome in the source)
  await generate("14TH.png", "product", { widths: [400, 600, 824], quality: 85 });

  // Spaces & Interiors (Slide 15)
  await generate("15TH.png", "spaces-1", { widths: [400, 555], quality: 85 });
  await generate("15THH.png", "spaces-2", { widths: [400, 555], quality: 85 });
  await generate("15THHH.png", "spaces-3", { widths: [400, 555], quality: 85 });

  // Food & Beverage Photography (Slide 16)
  await generate("16TH.png", "food-1", { widths: [400, 536], quality: 85 });
  await generate("16THH.png", "food-2", { widths: [400, 600, 738], quality: 85 });

  // Videography (Slide 17) — poster frame is the PPTX's own embedded media
  await generate("image35.jpeg", "videography-poster", {
    widths: [400, 480],
    quality: 85,
    sourceDir: SOURCE_PPTX_MEDIA,
  });

  // Featured Work — Elysian (Slide 19)
  await generate("19TH.png", "featured-elysian-grid-1", { widths: [300, 393], quality: 85 });
  await generate("19THH.png", "featured-elysian-grid-2", { widths: [300, 397], quality: 85 });
  await generate("19THHH.png", "featured-elysian-reel-1", { widths: [300, 381], quality: 85 });
  await generate("19THHHH.png", "featured-elysian-reel-2", { widths: [300, 382], quality: 85 });

  // Featured Work — Technovanza / Be Fabulla (Slide 20)
  await generate("20TH.png", "featured-technovanza", { widths: [300, 400, 501], quality: 85 });
  await generate("20THH.png", "featured-fabulla", { widths: [300, 400, 529], quality: 85 });

  // Planning the Perfect Shot (Slide 21)
  await generate("21TH.png", "planning", { widths: [400, 600, 723], quality: 85 });

  // Through Our Lens (Slide 22) — poster frame is the PPTX's own embedded media
  await generate("image45.jpeg", "lens-poster", {
    widths: [400, 600, 720],
    quality: 85,
    sourceDir: SOURCE_PPTX_MEDIA,
  });

  // Closing — Let's Work Together (Slide 24)
  await generate("24TH.png", "closing", { widths: [400, 600, 790], quality: 85 });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

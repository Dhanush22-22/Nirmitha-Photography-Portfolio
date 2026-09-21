import { watermarkPositions } from "./watermarkPositions";
import "./Watermark.css";

// Position spec: a preset ("tr"), a preset with vertical override ("mr@30"), or free
// placement as percent of the photo ("L62T78"). A trailing "+" adds a slightly
// stronger text shadow for that image.
function parsePosition(spec = "tr") {
  const strong = spec.endsWith("+");
  const s = strong ? spec.slice(0, -1) : spec;
  const free = s.match(/^L(\d+(?:\.\d+)?)T(\d+(?:\.\d+)?)$/);
  if (free) return { pos: "xy", vars: { "--wm-l": Number(free[1]) / 100, "--wm-f": Number(free[2]) / 100 }, strong };
  const [pos, mid] = s.split("@");
  return { pos, vars: mid ? { "--wm-mid": Number(mid) / 100 } : {}, strong };
}

export default function Watermark({ name, style }) {
  const { pos, vars, strong } = parsePosition(watermarkPositions[name]);

  return (
    <span
      className="media-watermark"
      data-pos={pos}
      data-shadow={strong ? "strong" : undefined}
      aria-hidden="true"
      style={{ ...style, ...vars }}
    >
      NIRMITHA N
    </span>
  );
}

import { watermarkStyles } from "./watermarkTones";
import "./Watermark.css";

export default function Watermark({ name, style }) {
  const cfg = watermarkStyles[name] ?? {};
  const vars = cfg.opacity ? { "--wm-a": cfg.opacity } : null;

  return (
    <span
      className="media-watermark"
      data-tone={cfg.tone === "dark" ? "dark" : undefined}
      data-shadow={cfg.shadow ? (cfg.shadow === "tight" ? "tight" : "") : undefined}
      aria-hidden="true"
      style={{ ...style, ...vars }}
    >
      NIRMITHA N
    </span>
  );
}


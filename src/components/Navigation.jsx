import { useEffect, useRef, useState } from "react";
import { sections } from "../data/sections";
import "./Navigation.css";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    const firstLink = overlayRef.current?.querySelector("a");
    firstLink?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <header className="nav-bar">
        <div className="nav-bar-right">
          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </header>

      <div
        id="site-menu"
        ref={overlayRef}
        className={`nav-overlay ${open ? "is-open" : ""}`}
        data-lenis-prevent
        aria-hidden={!open}
      >
        <nav aria-label="Section navigation">
          <ul>
            {sections.map((section, i) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  tabIndex={open ? 0 : -1}
                  onClick={handleLinkClick}
                >
                  <span className="nav-overlay-index">{String(i + 1).padStart(2, "0")}</span>
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

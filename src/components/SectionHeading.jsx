import "./SectionHeading.css";

/**
 * Shared headline block: optional eyebrow label, optional Burgues Script accent
 * paired with a TT Ricordi Nobili headline (the recurring pairing from the deck).
 */
export default function SectionHeading({
  eyebrow,
  script,
  scriptPosition = "before",
  title,
  align = "left",
  tone = "light",
  className = "",
  as: Tag = "h2",
}) {
  return (
    <div
      className={`section-heading is-${align} is-${tone} ${className}`.trim()}
    >
      {eyebrow && (
        <p className="section-heading-eyebrow" data-reveal>
          {eyebrow}
        </p>
      )}
      {script && scriptPosition === "before" && (
        <p className="section-heading-script" data-reveal>
          {script}
        </p>
      )}
      <Tag className="section-heading-title" data-reveal>
        {title}
      </Tag>
      {script && scriptPosition === "after" && (
        <p className="section-heading-script" data-reveal>
          {script}
        </p>
      )}
    </div>
  );
}

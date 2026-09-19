// Hand-drawn loop-into-arrow accent beside the Slide 14 caption — traced from
// the PPT's own squiggle: a single loop that unwinds into a curved arrow.
export default function SquiggleArrow({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 90 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 4C-1 16 12 30 25 21C38 12 41 29 27 32C13 35 4 46 14 56C24 65 46 63 58 54"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M55 43L76 50L59 64L62 53Z" fill="currentColor" />
    </svg>
  );
}

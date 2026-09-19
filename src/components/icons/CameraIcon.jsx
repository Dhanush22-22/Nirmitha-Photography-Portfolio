// Minimal line-art stand-in for the camera glyph baked into the original Slide 3 export.
export default function CameraIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="1" y="9" width="46" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 9L19 3H29L33 9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="24" cy="23" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="23" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="40" cy="14" r="1.4" fill="currentColor" />
    </svg>
  );
}

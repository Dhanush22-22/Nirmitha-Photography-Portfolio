// Four-corner "expand/viewfinder" mark — the icon on Slide 3's teal corner chip.
export default function ViewfinderBracket({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M2 12V2H12" stroke="currentColor" strokeWidth="2" />
      <path d="M28 2H38V12" stroke="currentColor" strokeWidth="2" />
      <path d="M38 28V38H28" stroke="currentColor" strokeWidth="2" />
      <path d="M12 38H2V28" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

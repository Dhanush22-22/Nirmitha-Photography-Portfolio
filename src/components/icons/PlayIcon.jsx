export default function PlayIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="currentColor" />
    </svg>
  );
}

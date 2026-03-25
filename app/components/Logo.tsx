export default function Logo() {
  return (
    <div className="relative z-10 flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-sky-500 flex items-center justify-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </div>
      <span className="text-white text-xl font-bold tracking-tight">
        Snippr
      </span>
    </div>
  );
}

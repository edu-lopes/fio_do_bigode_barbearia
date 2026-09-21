export default function DashedRing({
  color = 'currentColor',
  width = 4,
  dash = 9,
  gap = 7,
  speed = 14,
  reverse = false,
  className = '',
}) {
  return (
    <svg
      className={`dashed-ring ${reverse ? 'dashed-ring--rev' : ''} ${className}`}
      style={{ '--ring-speed': `${speed}s` }}
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="50"
        cy="50"
        r={50 - width / 2}
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeDasharray={`${dash} ${gap}`}
        strokeLinecap="round"
      />
    </svg>
  )
}

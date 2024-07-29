import type { SVGProps } from '@/components/lib/svg/base'

export const KyselySVG = (props: SVGProps) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 132 132"
      {...props}
    >
      <g clipPath="url(#kysely_a)">
        <rect width={128} height={128} x={2} y={2} fill="#fff" rx={16} />
        <path
          fill="#000"
          d="M41.298 109V23.91h5.194v49.4h.582l44.872-49.4h6.897L61.906 64.17 98.51 109H92.03L58.582 67.909l-12.09 13.378V109h-5.194Z"
        />
      </g>
      <rect
        width={128}
        height={128}
        x={2}
        y={2}
        stroke="#121212"
        strokeWidth={4}
        rx={16}
      />
      <defs>
        <clipPath id="kysely_a">
          <rect width={128} height={128} x={2} y={2} fill="#fff" rx={16} />
        </clipPath>
      </defs>
    </svg>
  )
}

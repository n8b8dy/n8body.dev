import type { SVGProps } from '@/components/lib/svg/base'

export const ShadcnSVG = (props: SVGProps) => {
  return (
    <svg
      viewBox="0 0 256 256"
      {...props}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="m208 128-80 80M192 40 40 192"
      />
    </svg>
  )
}

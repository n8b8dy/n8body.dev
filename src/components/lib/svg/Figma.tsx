import type { SVGProps } from '@/components/lib/svg/base'

export const FigmaSVG = (props: SVGProps) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill="#24CB71" d="M4 20a4 4 0 0 1 4-4h4v4a4 4 0 0 1-8 0z" />
      <path fill="#FF7237" d="M12 0v8h4a4 4 0 0 0 0-8h-4z" />
      <path fill="#00B6FF" d="M15.967 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <path fill="#FF3737" d="M4 4a4 4 0 0 0 4 4h4V0H8a4 4 0 0 0-4 4z" />
      <path fill="#874FFF" d="M4 12a4 4 0 0 0 4 4h4V8H8a4 4 0 0 0-4 4z" />
    </svg>
  )
}

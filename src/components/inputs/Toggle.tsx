import { cn } from '@/utils/styles'

export interface ToggleProps {
  size?: number
  checked: boolean
  onChange?: (checked: boolean) => void
}

export const Toggle = ({ size = 12, checked, onChange }: ToggleProps) => {
  const width = size * 4
  const height = width / 1.8
  const thumbSize = height * 0.8
  const padding = (height - thumbSize) / 1.68

  return (
    <button
      onClick={() => onChange?.(!checked)}
      style={{ width, height, padding }}
      className={cn(
        'relative flex items-center rounded-full transition-colors',
        checked ? 'bg-purple-600' : 'bg-neutral-600',
      )}
    >
      <span
        style={{
          height: thumbSize,
          transform: cn(
            `translateX(${checked ? width - thumbSize - padding * 2 : 0}px)`,
            'translateY(-50%)',
          ),
        }}
        className={cn(
          'absolute aspect-square top-1/2',
          'bg-white rounded-full transition-transform',
        )}
      />
    </button>
  )
}

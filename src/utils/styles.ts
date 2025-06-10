import type { ClassValue } from 'clsx'

import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs))
}

export function universalColorOpacity(color: string, targetOpacity: number): string {
  const opacity = Math.min(Math.max(targetOpacity, 0), 1)

  const trimmed = color.trim()

  if (/^#([A-Fa-f0-9]{3,8})$/.test(trimmed)) {
    console.log('HEX')

    let hex = trimmed.substring(1)

    if (hex.length === 3 || hex.length === 4) {
      hex = hex
        .split('')
        .map(c => c + c)
        .join('')
    }

    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)

    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }

  if (/^rgba?\(/i.test(trimmed)) {
    const parts = trimmed.match(/rgba?\(([^)]+)\)/i)
    if (!parts) return color

    const nums = parts[1].split(',').map(s => s.trim())
    if (nums.length < 3) return color

    const r = parseFloat(nums[0])
    const g = parseFloat(nums[1])
    const b = parseFloat(nums[2])

    if (isNaN(r) || isNaN(g) || isNaN(b)) return color

    return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${opacity})`
  }

  if (/^hsla?\(/i.test(trimmed)) {
    const parts = trimmed.match(/hsla?\(([^)]+)\)/i)
    if (!parts) return color

    const nums = parts[1].split(',').map(s => s.trim())
    if (nums.length < 3) return color

    const h = parseFloat(nums[0])
    const s = nums[1]
    const l = nums[2]

    // Validate hue value
    if (isNaN(h)) return color

    return `hsla(${Math.round(h)}, ${s}, ${l}, ${opacity})`
  }

  return color
}

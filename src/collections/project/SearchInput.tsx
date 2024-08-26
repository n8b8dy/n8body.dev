'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { cn } from '@/utils/styles'

export interface SearchInputProps {
  initialValue?: string
}

export const SearchInput = ({ initialValue }: SearchInputProps) => {
  const [searchText, setSearchText] = useState(initialValue)

  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString())

      if (searchText) params.set('search', searchText)
      else params.delete('search')

      router.push(`${window.location.pathname}?${params.toString()}`, { scroll: false })
    }, 500)

    return () => clearTimeout(handler)
  }, [searchText, searchParams, router])

  return (
    <input
      type="text"
      placeholder="Type to search..."
      value={searchText}
      onChange={e => setSearchText(e.target.value)}
      className={cn(
        'mb-2 px-3 py-2 border-[1px]',
        'border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 bg-opacity-40 dark:bg-opacity-70 rounded',
      )}
    />
  )
}

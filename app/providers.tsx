import type { PropsWithChildren } from 'react'

import { ThemeProvider } from 'next-themes'

export async function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}

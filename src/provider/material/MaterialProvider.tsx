'use client'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles'
import { FC, PropsWithChildren, useMemo } from 'react'

import { themeOptions } from './theme'

const MaterialProvider: FC<
  PropsWithChildren<{
    theme?(themeOptions: ThemeOptions): Partial<ThemeOptions>
  }>
> = ({ theme, children }) => {
  const innerTheme = theme?.(themeOptions)

  const usedTheme = useMemo(() => createTheme(innerTheme ?? themeOptions), [innerTheme])
  return (
    <ThemeProvider theme={usedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export { MaterialProvider }

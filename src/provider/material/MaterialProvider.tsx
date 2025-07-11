'use client'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { FC, PropsWithChildren, useMemo } from 'react'
import mediaQuery from 'css-mediaquery'

import { themeOptions } from './theme'

const MaterialProvider: FC<PropsWithChildren<{ deviceType?: string }>> = ({ children, deviceType }) => {
  const ssrMatchMedia = (query: string) => ({
    matches: mediaQuery.match(query, {
      width: deviceType === 'mobile' ? '0px' : '1024px',
    }),
  })

  const usedTheme = useMemo(
    () =>
      createTheme({
        ...themeOptions,
        components: { ...themeOptions.components, MuiUseMediaQuery: { defaultProps: { ssrMatchMedia } } },
      }),
    [],
  )
  return (
    <ThemeProvider theme={usedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export { MaterialProvider }

'use client'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import mediaQuery from 'css-mediaquery'
import { FC, PropsWithChildren, useCallback, useMemo } from 'react'

import { themeOptions } from './theme'

const MaterialProvider: FC<PropsWithChildren<{ deviceType?: string }>> = ({ children, deviceType }) => {
  const ssrMatchMedia = useCallback(
    (query: string) => ({
      matches: mediaQuery.match(query, {
        width: deviceType === 'mobile' ? '0px' : '1024px',
      }),
    }),
    [deviceType],
  )

  const usedTheme = useMemo(
    () =>
      createTheme({
        ...themeOptions,
        components: {
          ...themeOptions.components,
          MuiUseMediaQuery: {
            defaultProps: { ssrMatchMedia },
          },
        },
      }),
    [ssrMatchMedia],
  )

  return (
    <ThemeProvider theme={usedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export { MaterialProvider }

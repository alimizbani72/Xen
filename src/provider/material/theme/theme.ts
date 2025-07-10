import { ThemeOptions } from '@mui/material'

import { breakpoints } from './breakpoints'
import { overrides } from './components'

export const themeOptions: ThemeOptions = {
  direction: 'ltr',
  spacing: 4,
  breakpoints,
  components: overrides,
  typography: {
    fontFamily: `poppins`,
  },
}

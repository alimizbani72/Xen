import type { Components, Theme } from '@mui/material/styles'

const muiLink: Components<Theme>['MuiLink'] = {
  defaultProps: {
    underline: 'none',
    color: '#868686',
  },
  styleOverrides: {
    root: {
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'none',
      },
    },
  },
}

export { muiLink }

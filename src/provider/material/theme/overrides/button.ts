import { Components } from '@mui/material'

type MuiButtonType = Components['MuiButton']

const button: MuiButtonType = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      textTransform: 'none',
    },
    textPrimary: {
      backgroundColor: '#FFFFFF',
      color: '#000000',
      borderRadius: 50,
      backdropFilter: 'blur(46.84621810913086px)',
      boxShadow: '0px 0px 55.8px 0px #FFFFFF4D',
    },
    textSecondary: {
      background: 'radial-gradient(46.62% 95.43% at 53.38% 100%, #9398FF 0%, #4750FF 100%)',
      color: '#ffffff',
      borderRadius: 50,
      boxShadow: 'unset',
    },
    textInfo: {
      backgroundColor: 'transparent',
      color: '#ffffff',
      borderRadius: 50,
      boxShadow: 'unset',
      border: '1px solid #ffffff',
    },
    sizeLarge: {
      paddingTop: 10.5,
      paddingBottom: 10.5,
      paddingLeft: 28,
      paddingRight: 28,
      fontWeight: '500',
      fontSize: 22,
    },
    sizeMedium: {
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 24,
      paddingRight: 24,
      fontWeight: '500',
      fontSize: 16.5,
    },
    sizeSmall: {
      paddingTop: 7,
      paddingBottom: 7,
      paddingLeft: 20,
      paddingRight: 20,
      fontWeight: '500',
      fontSize: 12.5,
    },
  },
  variants: [],
}

export { button }

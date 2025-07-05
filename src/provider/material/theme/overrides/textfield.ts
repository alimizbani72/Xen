import { Components, outlinedInputClasses } from '@mui/material'

type MuiTextFieldType = Components['MuiTextField']

const textField: MuiTextFieldType = {
  defaultProps: {
    autoComplete: 'off',
  },
  styleOverrides: {
    root: {
      border: '1px solid #262B4A',
      backgroundColor: '#0F1221',
      borderRadius: 50,
      [`& .Mui-focused fieldset`]: { borderColor: '#4750FF !important' },
      [`& .${outlinedInputClasses.notchedOutline}`]: {
        borderRadius: 50,
      },
      '& input': {
        color: '#4750FF',
        '&::placeholder': {
          color: '#262C53',
        },
      },
      '& input[type=number]::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      },
      '& input[type=number]::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      },
    },
  },
}

export { textField }

import { Components, outlinedInputClasses } from '@mui/material'

type MuiTextFieldType = Components['MuiTextField']

const textField: MuiTextFieldType = {
  defaultProps: {
    autoComplete: 'off',
  },
  styleOverrides: {
    root: {
      '& > div.MuiInputBase-root': { border: '1px solid #262B4A', borderRadius: 50, backgroundColor: '#0F1221' },
      [`& .Mui-focused fieldset`]: { borderColor: '#4750FF !important' },
      [`& .${outlinedInputClasses.root}`]: { paddingRight: 0 },
      [`& .${outlinedInputClasses.notchedOutline}`]: {
        borderRadius: 50,
      },
      '& input': {
        color: '#4750FF',
        '&::placeholder': {
          color: '#262C53',
        },
        '&:-webkit-autofill': {
          boxShadow: '0 0 0 1000px #0F1221 inset',
          WebkitTextFillColor: '#0F1221',
          transition: 'background-color 5000s ease-in-out 0s',
          borderRadius: 50,
          color: '#4750FF',
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

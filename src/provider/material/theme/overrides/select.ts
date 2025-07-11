import { Components } from '@mui/material'

type MuiSelectType = Components['MuiSelect']

const select: MuiSelectType = {
  defaultProps: {},
  styleOverrides: {
    root: {
      minWidth: 200,
      maxHeight: 40,
      border: '1px solid #262B4A',
      borderRadius: '20px',
      backgroundColor: '#0F1221',
      '& fieldset': {
        border: 'none',
      },
    },
    select: {
      color: '#E8E8E8',
      paddingLeft: 16,
    },
  },
  variants: [],
}

export { select }

import { Theme } from '@mui/material'

import { button, textField, select } from './overrides'

const overrides: Theme['components'] = {
  MuiButton: button,
  MuiTextField: textField,
  MuiSelect: select,
}

export { overrides }

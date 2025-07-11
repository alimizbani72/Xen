import { BreakpointsOptions } from '@mui/material'
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true
  }
}

const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 512,
    md: 768,
    lg: 1280,
    xl: 1600,
    xxl: 1920,
  },
}

export { breakpoints }

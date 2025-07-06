import { getFontValue } from '@/utils'
import { Box } from '@mui/material'

export const OrDivider = () => {
  return (
    <Box
      sx={{
        '&::before': {
          content: '""',
          width: 'calc(50% - 30px)',
          bgcolor: '#3D3D3D',
          height: '1px',
          position: 'relative',
          top: 15,
          display: 'block',
        },
        '&::after': {
          content: '""',
          width: 'calc(50% - 30px)',
          bgcolor: '#3D3D3D',
          height: '1px',
          position: 'relative',
          top: -16,
          right: 'calc(-50% - 30px)',
          display: 'block',
        },
        my: 7,
        color: '#3D3D3D',
        ...getFontValue(20, 400),
        textAlign: 'center',
      }}
    >
      Or
    </Box>
  )
}

import { getFontValue } from '@/utils'
import { Box, Typography } from '@mui/material'
import { PropsWithChildren } from 'react'

const Badge = ({ children }: PropsWithChildren) => {
  return (
    <Box
      sx={{
        border: '0.5px solid #9398FF',
        px: 3.7,
        py: 1.6,
        width: 'fit-content',
        display: 'flex',
        borderRadius: 5,
        background: 'linear-gradient(180deg, rgba(0, 9, 70, 0) 0%, #000946 100%); ',
      }}
    >
      <Typography sx={{ ...getFontValue(12.5, 400), color: '#9398FF' }}>{children}</Typography>
    </Box>
  )
}

export default Badge

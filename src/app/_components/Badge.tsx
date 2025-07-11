import { getFontValue } from '@/utils'
import { Box, SxProps, Typography } from '@mui/material'
import { PropsWithChildren } from 'react'
type Props = {
  color?: string
  sx?: SxProps
} & PropsWithChildren
const Badge = ({ children, color = '#9398FF', sx }: Props) => {
  return (
    <Box
      sx={{
        border: '0.5px solid',
        borderColor: color,
        px: 3.7,
        py: 1.6,
        width: 'fit-content',
        display: 'flex',
        borderRadius: 5,
        background: 'linear-gradient(180deg, rgba(0, 9, 70, 0) 0%, #000946 100%); ',
      }}
    >
      <Typography sx={{ ...getFontValue(12.5, 400), color, ...(sx || {}) }}>{children}</Typography>
    </Box>
  )
}

export default Badge

import { getFontValue } from '@/utils'
import { Box, Typography } from '@mui/material'

interface ProgressProps {
  current: number
  total: number
}

export default function DaysRemainingProgress({ current, total }: ProgressProps) {
  const progress = (current / total) * 100

  return (
    <Box sx={{ width: { xs: '100%', lg: '303px' } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, alignItems: 'baseline' }} gap={1}>
        <Typography sx={{ ...getFontValue({ xs: 12, md: 16 }, 500), color: 'white' }}>Days Remaining</Typography>
        <Typography sx={{ ...getFontValue({ xs: 7, md: 11 }, 300), color: 'white' }}>
          {current}/{total} Days Remain
        </Typography>
      </Box>

      {/* Progress bar */}
      <Box
        sx={{
          height: 6,
          width: '100%',
          backgroundColor: '#432A48',
          borderRadius: 5,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #4750FF 0%, #B9BDFF 100%);',
            borderRadius: 5,
            transition: 'width 0.3s ease-in-out',
          }}
        />
      </Box>
    </Box>
  )
}

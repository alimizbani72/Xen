import GridBackgroundAbsolute from '@/components/GridBackground'
import { Box } from '@mui/material'

const Moon = () => {
  return (
    <Box height={'100%'} width={'100%'} position="relative">
      <Box height={'100%'} width="100%">
        <GridBackgroundAbsolute />
      </Box>
      <Box px={13} display={'flex'} flexDirection={'row'}>
        <img src="/assets/png/fast.png" />

        <img
          src="/assets/png/moon.jpg"
          style={{
            background:
              'linear-gradient(180deg, #010226 0%, #010315 100%),linear-gradient(180deg, #000946 0%, #040015 23.93%)',
          }}
        />

        <img src="/assets/png/safe.png" />
      </Box>
    </Box>
  )
}

export default Moon

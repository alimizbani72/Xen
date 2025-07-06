import GridBackgroundAbsolute from '@/components/GridBackground'
import { Box } from '@mui/material'

const Moon = () => {
  return (
    <Box
      position="relative"
      height={'100%'}
      width={'100%'}
      sx={{
        backgroundImage: 'url("/assets/png/123.png")',

        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
      }}
    >
      <GridBackgroundAbsolute />

      <Box></Box>
    </Box>
  )
}

export default Moon

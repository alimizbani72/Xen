'use client'
import FotterSection from '@/components/Fotter'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <Box
      sx={{
        // minHeight: '100dvh',
        background:
          'linear-gradient(180deg, #010226 0%, #010315 100%),linear-gradient(180deg, #000946 0%, #040015 23.93%)',
      }}
    >
      {/* <TextField placeholder="Test field placeholder" type="number" />
      <Icon name="menu" />
      <Box height={850} width="100%" position="relative">
        <GridBackgroundAbsolute />
        <Box color="#fff">Go Fast. Stay Safe. Stay Xen.</Box>
      </Box>
      <Box color="#fff">Go Fast. Stay Safe. Stay Xen.</Box> */}
      <FotterSection />
    </Box>
  )
}

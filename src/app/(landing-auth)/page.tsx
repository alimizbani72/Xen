'use client'
import DustBackground from '@/components/DustBackground'
import HomeSection from '@/home/_section'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <Box position={'relative'}>
      {/* <TextField placeholder="Test field placeholder" type="number" />
      <Icon name="menu" />
      <Box height={850} width="100%" position="relative">
        <GridBackgroundAbsolute />
        <Box color="#fff">Go Fast. Stay Safe. Stay Xen.</Box>
      </Box>
      <Box color="#fff">Go Fast. Stay Safe. Stay Xen.</Box> */}
      <DustBackground numParticles={60} />
      <HomeSection />
    </Box>
  )
}

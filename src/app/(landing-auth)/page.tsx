'use client'
import HomeSection from '@/app/_components/home/_section'
import DustBackground from '@/components/DustBackground'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <Box position={'relative'}>
      <DustBackground numParticles={200} />
      <HomeSection />
    </Box>
  )
}

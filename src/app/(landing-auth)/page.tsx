'use client'
import HomeSection from '@/app/_components/home/_section'
import { RiveFooter } from '@/app/_components/RiveFooter'
import DustBackground from '@/components/DustBackground'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <Box position={'relative'}>
      <DustBackground numParticles={220} />
      <HomeSection />
      <RiveFooter />
    </Box>
  )
}

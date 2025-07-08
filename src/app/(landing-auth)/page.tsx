'use client'
import DustBackground from '@/components/DustBackground'
import HomeSection from '@/home/_section'
import { Box } from '@mui/material'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'XEN | Home',
}

export default function Home() {
  return (
    <Box position={'relative'}>
      <DustBackground numParticles={80} />
      <HomeSection />
    </Box>
  )
}

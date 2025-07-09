'use client'
import HomeSection from '@/app/_components/home/_section'
import DustBackground from '@/components/DustBackground'
import { useApiQuery } from '@/hooks'
import { Box } from '@mui/material'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data } = useSession()
  const { data: sssss } = useApiQuery({
    url: '/my/agency-tickets',
    axiosConfig: {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + data?.token,
      },
    },
    queryOptions: {
      enabled: !!data?.token,
    },
  })
  return (
    <Box position={'relative'}>
      <DustBackground numParticles={200} />
      <HomeSection />
    </Box>
  )
}

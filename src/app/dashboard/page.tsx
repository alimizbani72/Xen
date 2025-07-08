'use client'
import { Box } from '@mui/material'
import { Metadata } from 'next'
import { useSession } from 'next-auth/react'
export const metadata: Metadata = {
  title: 'Dashboard',
}
export default function Home() {
  const session = useSession()

  return <Box sx={{ color: '#fff', p: 4 }}>Username: {session.data?.user?.username}</Box>
}

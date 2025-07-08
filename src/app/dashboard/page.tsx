'use client'
import { Box } from '@mui/material'
import { useSession } from 'next-auth/react'

export default function Home() {
  const session = useSession()

  return <Box sx={{ color: '#fff', p: 4 }}>Username: {session.data?.user?.username}</Box>
}

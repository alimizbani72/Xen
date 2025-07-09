'use client'
import Table from '@/app/dashboard/home/_section/Table'
import { Box } from '@mui/material'
import { useSession } from 'next-auth/react'

export default function Home() {
  return (
    <Box sx={{ p: 4 }}>
      <Table />
    </Box>
  )
}

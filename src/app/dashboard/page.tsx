'use client'
import Table from '@/app/dashboard/_section/Table'
import { useApiQuery } from '@/hooks'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <Box>
      <Table />
    </Box>
  )
}

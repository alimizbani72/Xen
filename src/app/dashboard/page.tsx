'use client'
import Table from '@/app/dashboard/_section/Table'
import { Box } from '@mui/material'
import { ChartView } from './_section/chart/ChartView'

export default function Home() {
  return (
    <Box>
      <ChartView />
      <Table />
    </Box>
  )
}

'use client'
import Table from '@/app/dashboard/_section/Table'
import { Stack } from '@mui/material'
import { ChartView } from './_section/chart/ChartView'
import SubscriptionSection from './_section/subscription'

export default function Home() {
  return (
    <Stack sx={{ px: 4, py: 10 }} gap={7}>
      <Stack direction={{ xs: 'column', lg: 'row' }} spacing={5} width={'100%'}>
        <SubscriptionSection />
        <ChartView />
      </Stack>
      <Table />
    </Stack>
  )
}

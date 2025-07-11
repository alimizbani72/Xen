'use client'
import Table from '@/app/dashboard/_section/Table'
import { Stack } from '@mui/material'
import BreadCrumbs from '../_components/Breadcrumb'
import { ChartView } from './_section/chart/ChartView'
import SubscriptionSection from './_section/subscription'
const breadCrumbsItems = [{ href: '#', label: 'Home' }]
export default function Home() {
  return (
    <Stack
      sx={{
        px: 8,
        pb: 4,
      }}
    >
      <Stack pb={3}>
        <BreadCrumbs items={breadCrumbsItems} />
      </Stack>
      <Stack gap={7}>
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={5} width={'100%'}>
          <SubscriptionSection />
          <ChartView />
        </Stack>
        <Table />
      </Stack>
    </Stack>
  )
}

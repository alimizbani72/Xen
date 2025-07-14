'use client'
import BreadCrumbs from '@/app/_components/Breadcrumb'
import Card from '@/app/_components/Card'
import { ChartView } from '@/app/dashboard/_section/chart/ChartView'
import { InviteHistoryTable } from '@/app/dashboard/referral-resell/invite-history/_section/InviteHistoryTable'
import { AccountListTable } from '@/app/dashboard/referral-resell/resell-program/_section/AccountListTable'
import { Icon } from '@/components/Icon'
import { getFontValue } from '@/utils'

import { Box, Button, Stack } from '@mui/material'
import Link from 'next/link'

const breadCrumbsItems = [
  { href: '/dashboard/referral-resell/', label: 'Referral & Resell' },
  { href: '#', label: 'Resell Program' },
]

const Page = () => {
  return (
    <Stack px={8} spacing={7} height="100%">
      <BreadCrumbs items={breadCrumbsItems} />
      <Stack direction="row" flexWrap="wrap" gap={6}>
        <Card icon="statistics" title="Resell Statistics" sx={{ flex: 1, minWidth: { xs: 283, sm: 317 } }} px={5}>
          <Stack width="100%" alignItems="flex-start" pt={7}>
            <Stack>
              <Box sx={{ ...getFontValue({ xs: 16, md: 21 }, 600), color: '#FFFFFF' }}>
                Total Saved
                <Box component="span" ml={3} sx={{ ...getFontValue(13, 600), color: '#FFFFFF' }}>
                  (LifeTime)
                </Box>
              </Box>
              <Box sx={{ ...getFontValue({ xs: 13, md: 18 }, 400), color: '#B9BDFF' }}>23$</Box>
            </Stack>
            <Stack mt={7.5}>
              <Box sx={{ ...getFontValue({ xs: 16, md: 21 }, 600), color: '#FFFFFF' }}>
                Today Purchases
                <Box component="span" ml={3} sx={{ ...getFontValue(13, 600), color: '#FFFFFF' }}>
                  (LifeTime)
                </Box>
              </Box>
              <Box sx={{ ...getFontValue({ xs: 13, md: 18 }, 400), color: '#B9BDFF' }}>3 Accounts</Box>
            </Stack>

            <Stack direction="row" spacing={3} sx={{ mt: 7 }}>
              <Link href="resell">
                <Button size="small">Buy</Button>
              </Link>

              <Link href="active-subscription">
                <Button size="small" color="info">
                  Active Subscription
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Card>
        <Card
          icon="statistics"
          title="My Balance"
          sx={{ flex: 1, minWidth: { sm: 332 }, height: { xs: 330, md: 'unset' } }}
          px={5}
        >
          <Stack width="100%" height="100%" justifyContent={'space-between'} alignItems="flex-start" pt={7}>
            <Stack>
              <Box sx={{ ...getFontValue({ xs: 18, md: 21 }, 600), color: '#FFFFFF' }}>Total Accounts</Box>
              <Box sx={{ ...getFontValue(18, 400), color: '#B9BDFF' }}>100 Accounts</Box>
            </Stack>

            <Stack direction="row" spacing={5.5} justifyContent={'space-between'}>
              <Stack>
                <Box sx={{ ...getFontValue({ xs: 13, md: 16 }, 500), color: '#49549C' }}>1 Month</Box>
                <Box sx={{ ...getFontValue(31, 600), color: '#ffffff' }}>10</Box>
              </Stack>
              <Box width="1px" height={'100%'} bgcolor="#262C53" />
              <Stack>
                <Box sx={{ ...getFontValue({ xs: 13, md: 16 }, 500), color: '#49549C' }}>3 Month</Box>
                <Box sx={{ ...getFontValue(31, 600), color: '#ffffff' }}>10</Box>
              </Stack>
              <Box width="1px" height={'100%'} bgcolor="#262C53" />
              <Stack>
                <Box sx={{ ...getFontValue({ xs: 13, md: 16 }, 500), color: '#49549C' }}>6 Month</Box>
                <Box sx={{ ...getFontValue(31, 600), color: '#ffffff' }}>10</Box>
              </Stack>
            </Stack>
          </Stack>
        </Card>
        <Stack flex={1.6} height={{ xxl: '100%' }} minWidth={450}>
          <ChartView />
        </Stack>
      </Stack>
      <AccountListTable />
    </Stack>
  )
}

export default Page

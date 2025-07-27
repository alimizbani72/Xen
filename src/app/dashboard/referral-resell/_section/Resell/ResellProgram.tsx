'use client'

import Card from '@/app/_components/Card'
import { AccountPlanForm } from '@/app/dashboard/referral-resell/_section/Resell/AccountPlanForm'
import { Icon } from '@/components/Icon'
import { getFontValue } from '@/utils'
import { Box, Button, Stack, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

export const ResellProgram = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'))
  return (
    <Stack spacing={3} mt={7} mb={11} pb={5}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box sx={{ ...getFontValue(24, 600), color: '#FFFFFF' }}>Resell</Box>
        <Link href="referral-resell/resell">
          <Stack direction="row" alignItems="center" sx={{ ...getFontValue(16, 500), color: '#6B72FF', gap: 1 }}>
            Learn About It <Icon name="arrow-right" color="#6B72FF" size={isMobile ? 12 : 24} />{' '}
          </Stack>
        </Link>
      </Stack>
      <Stack direction={{ xs: 'column', md: 'row' }} flexWrap="wrap" gap={6}>
        <Card
          icon="statistics"
          title="Resell Statistics"
          sx={{ flex: 1.2, minWidth: { sm: 318 }, width: '100%' }}
          px={5}
        >
          <Stack width="100%" alignItems="flex-start" pt={7}>
            <Stack>
              <Box sx={{ ...getFontValue({ xs: 20, md: 24 }, 600), color: '#FFFFFF' }}>Unassigned Accounts</Box>
              <Box sx={{ ...getFontValue(20, 400), color: '#B9BDFF' }}>250 Month</Box>
            </Stack>
            <Stack mt={7.5}>
              <Box sx={{ ...getFontValue({ xs: 20, md: 24 }, 600), color: '#FFFFFF' }}>Total Accounts</Box>
              <Box sx={{ ...getFontValue(20, 400), color: '#B9BDFF' }}>100 Accounts</Box>
            </Stack>
            <Stack direction="row" spacing={3} mt={7}>
              <Link href="referral-resell/plans">
                <Button size="small">Buy</Button>
              </Link>
              <Link href="referral-resell/account-list">
                <Button size="small" color="info">
                  Account List
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Card>
        <Card icon="calculator" title="Referral Calculator" sx={{ flex: 2, width: '100%' }} px={5}>
          <Stack direction={{ xs: 'column', md: 'row' }} width="100%" height="100%" spacing={5} pt={7} minHeight={193}>
            <AccountPlanForm />
          </Stack>
        </Card>
        <Link href="referral-resell/plans">
          <Card
            title=""
            sx={{
              flex: { xs: 2, md: 1 },
              maxHeight: 374,
              minWidth: 250,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(51.9deg, #130F30 0.46%, #594DBA 96.33%)',
              border: '2px solid #6B72FF',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            px={5}
          >
            <Stack
              width="100%"
              height="100%"
              spacing={5}
              pt={7}
              minHeight={193}
              maxWidth={143}
              sx={{ justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
            >
              <Image src={'/assets/svg/box.svg'} width={98} height={98} alt="box" />
              <Stack
                direction="row"
                alignItems="center"
                sx={{ ...getFontValue(23.5, 500), color: '#ffffff', gap: 1, textAlign: 'center' }}
              >
                Buy Reseller Package
              </Stack>
              <Stack direction="row" alignItems="center" sx={{ ...getFontValue(11, 500), color: '#6B72FF', gap: 1 }}>
                Start from 50USDT
              </Stack>
            </Stack>
          </Card>
        </Link>
      </Stack>
    </Stack>
  )
}

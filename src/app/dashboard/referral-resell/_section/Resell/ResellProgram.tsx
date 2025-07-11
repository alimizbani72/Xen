'use client'

import Card from '@/app/_components/Card'
import { AccountPlanForm } from '@/app/dashboard/referral-resell/_section/Resell/AccountPlanForm'
import { Icon } from '@/components/Icon'
import { getFontValue } from '@/utils'
import { Box, Button, MenuItem, Select, Stack, TextField, useMediaQuery } from '@mui/material'

export const ResellProgram = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'))
  return (
    <Stack spacing={3} mt={7} mb={11}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box sx={{ ...getFontValue(24, 600), color: '#FFFFFF' }}>Resell</Box>
        <Stack direction="row" alignItems="center" sx={{ ...getFontValue(16, 500), color: '#6B72FF', gap: 1 }}>
          Learn About It <Icon name="arrow-right" color="#6B72FF" size={isMobile ? 12 : 24} />{' '}
        </Stack>
      </Stack>
      <Stack direction={{ xs: 'column', lg: 'row' }} flexWrap="wrap" gap={6}>
        <Card icon="statistics" title="Resell Statistics" sx={{ flex: 1, minWidth: { sm: 318 }, width: '100%' }}>
          <Stack width="100%" alignItems="flex-start" pt={7}>
            <Stack>
              <Box sx={{ ...getFontValue({ xs: 20, md: 24 }, 600), color: '#FFFFFF' }}>Remain Subscriptions</Box>
              <Box sx={{ ...getFontValue(20, 400), color: '#B9BDFF' }}>250 Month</Box>
            </Stack>
            <Stack mt={7.5}>
              <Box sx={{ ...getFontValue({ xs: 20, md: 24 }, 600), color: '#FFFFFF' }}>Total Purchases</Box>
              <Box sx={{ ...getFontValue(20, 400), color: '#B9BDFF' }}>100 Accounts</Box>
            </Stack>
            <Stack direction="row" spacing={3} mt={7}>
              <Button size="small">Withdraw</Button>
              <Button size="small" color="info">
                Withdraw History
              </Button>
            </Stack>
          </Stack>
        </Card>
        <Card icon="calculator" title="Referral Calculator" sx={{ flex: 2.3, width: '100%' }}>
          <Stack direction={{ xs: 'column', md: 'row' }} width="100%" height="100%" spacing={5} pt={7} minHeight={193}>
            <AccountPlanForm />
            <Stack
              justifyContent="center"
              alignItems="center"
              height="100%"
              flex={1}
              borderLeft={{ md: '1px solid #232246' }}
              pl={2}
            >
              <Box sx={{ ...getFontValue(24.8, 400), color: '#49549C', mb: 3, textDecoration: 'line-through' }}>
                180 USD
              </Box>
              <Box sx={{ ...getFontValue(39, 700), color: '#ffffff', mb: 4 }}>1116 USD</Box>
              <Box sx={{ ...getFontValue(12, 600), color: '#4750FF', textAlign: 'center' }}>
                You Get 20% Discount On This Deal
              </Box>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Stack>
  )
}

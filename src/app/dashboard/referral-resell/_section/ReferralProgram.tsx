'use client'

import Card from '@/app/_components/Card'
import { Icon } from '@/components/Icon'
import { getFontValue } from '@/utils'
import { Box, Button, Stack, useMediaQuery } from '@mui/material'

export const ReferralProgram = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'))
  return (
    <Stack spacing={3} mt={7} mb={11}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box sx={{ ...getFontValue({ xs: 16, md: 24 }, 600), color: '#FFFFFF' }}>Referral Program</Box>
        <Box
          sx={{
            ...getFontValue({ xs: 14, md: 16 }, 500),
            color: '#6B72FF',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          Learn About It <Icon name="arrow-right" color="#6B72FF" size={isMobile ? 12 : 24} />{' '}
        </Box>
      </Stack>
      <Stack direction="row" flexWrap="wrap" gap={6}>
        <Card icon="refferal" title="Referral Code" sx={{ flex: 1.2 }}>
          <Stack width="100%" alignItems="center" pt={7}>
            <Box sx={{ ...getFontValue(15, 400), color: '#49549C' }}>Your Referral Code</Box>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ ...getFontValue(48, 400), color: '#FFFFFF', height: 34, mt: 4, mb: 7 }}
            >
              E8123NAS{' '}
              <Box ml={3}>
                <Icon name="copy" color="#ffffff" size={32} />
              </Box>
            </Stack>
            <Button size="small">Share The Link</Button>
            <Box sx={{ ...getFontValue(15, 400), color: '#49549C', maxWidth: 260, textAlign: 'center', mt: 7 }}>
              Earn 10% of every purchase your referred friends make – forever!
            </Box>
          </Stack>
        </Card>
        <Card icon="money" title="Referral Income" sx={{ flex: 1, minWidth: { sm: 318 } }}>
          <Stack width="100%" alignItems="flex-start" pt={7}>
            <Stack>
              <Box sx={{ ...getFontValue({ xs: 20, md: 24 }, 600), color: '#FFFFFF' }}>
                Total Earned
                <Box component="span" ml={3} sx={{ ...getFontValue(16, 600), color: '#FFFFFF' }}>
                  (LifeTime)
                </Box>
              </Box>
              <Box sx={{ ...getFontValue(20, 400), color: '#B9BDFF' }}>250$</Box>
            </Stack>
            <Stack mt={7.5}>
              <Box sx={{ ...getFontValue({ xs: 20, md: 24 }, 600), color: '#FFFFFF' }}>Withdrawable Balance</Box>
              <Box sx={{ ...getFontValue(20, 400), color: '#B9BDFF' }}>10$</Box>
            </Stack>
            <Stack direction="row" spacing={3} mt={7}>
              <Button size="small">Withdraw</Button>
              <Button size="small" color="info">
                Withdraw History
              </Button>
            </Stack>
          </Stack>
        </Card>

        <Card icon="statistics" title="Referral Statistics" sx={{ flex: 1, minWidth: 277 }}>
          <Stack width="100%" alignItems="flex-start" pt={7}>
            <Stack>
              <Box sx={{ ...getFontValue({ xs: 20, md: 24 }, 600), color: '#FFFFFF' }}>
                Total Invites
                <Box component="span" ml={3} sx={{ ...getFontValue(16, 600), color: '#FFFFFF' }}>
                  (LifeTime)
                </Box>
              </Box>
              <Box sx={{ ...getFontValue(20, 400), color: '#B9BDFF' }}>23 Person</Box>
            </Stack>
            <Stack mt={7.5}>
              <Box sx={{ ...getFontValue({ xs: 20, md: 24 }, 600), color: '#FFFFFF' }}>Today Invites</Box>
              <Box sx={{ ...getFontValue(20, 400), color: '#B9BDFF' }}>3 Person</Box>
            </Stack>
            <Button sx={{ mt: 7 }} size="small" color="info">
              Details
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Stack>
  )
}

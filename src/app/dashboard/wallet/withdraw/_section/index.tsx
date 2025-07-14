'use client'
import { getFontValue } from '@/utils'
import { Divider, Stack, Typography } from '@mui/material'
import WalletRules from './WalletRules'
import WithdrawForm from './WithdrawForm'

const WithDrawSection = () => {
  return (
    <Stack p={{ xs: 4, md: 30 }}>
      <Stack direction={{ xs: 'column', lg: 'row' }} spacing={12}>
        <Stack py={{ xs: 4, md: 12 }} pr={{ xs: 'unset', md: 20 }} width={'100%'} spacing={10} flex={2}>
          <Typography sx={{ ...getFontValue(40, 700), color: 'white' }}>Withdraw</Typography>
          <WithdrawForm />
        </Stack>
        <Divider sx={{ bgcolor: '#232246', display: { xs: 'none', lg: 'unset' } }} orientation="vertical" />
        <Stack py={{ xs: 4, md: 12 }} flex={2}>
          <WalletRules />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default WithDrawSection

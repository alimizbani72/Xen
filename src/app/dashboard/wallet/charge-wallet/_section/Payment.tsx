'use client'
import { Icon } from '@/components/Icon'
import { useApiQuery } from '@/hooks'
import { getFontValue } from '@/utils'
import { Stack, TextField, Typography } from '@mui/material'
import { Session } from 'next-auth'
type Props = {
  amount: string
  setAmount: (value: string) => void
}
const Payment = ({ amount, setAmount }: Props) => {
  const { data } = useApiQuery<Session['user']>({ url: '/my/info' })
  return (
    <Stack spacing={6} width={'100%'}>
      <Typography sx={{ color: 'white', ...getFontValue({ xs: 20, md: 40 }, 700), pb: 4 }}>Charge Wallet</Typography>
      <Stack spacing={6}>
        <Typography sx={{ color: 'white', ...getFontValue(22, 500), pr: 5 }}>Set Your Deposit Amount</Typography>
        <TextField
          name="amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          slotProps={{
            input: {
              endAdornment: <Typography sx={{ color: '#262C53', ...getFontValue(16.5, 400), pr: 5 }}>USDT</Typography>,
            },
          }}
        />
      </Stack>
      <Typography sx={{ color: 'white', ...getFontValue(22, 500) }}> Payment Method</Typography>
      <Stack
        direction={'row'}
        spacing={4}
        alignItems={'center'}
        sx={{
          background: 'linear-gradient(180deg, #040015 -19.13%, #000946 100%);',
          border: '1px solid #9398FF',
          borderRadius: 8,
          py: 4,
          pl: 7,
        }}
      >
        <Icon name="tick" color="#9398FF" size={20} />
        <Typography sx={{ color: '#9398FF', ...getFontValue(18, 500), pr: 5 }}>Crypto</Typography>
      </Stack>
      <Stack
        direction={'row'}
        spacing={4}
        alignItems={'center'}
        sx={{
          background: 'linear-gradient(180deg, #040015 -19.13%, #000946 100%);',
          border: '1px solid #49549C',
          borderRadius: 8,
          py: 4,
          pl: 7,
        }}
      >
        <Typography sx={{ color: '#49549C', ...getFontValue(18, 500), pr: 5 }}>
          Your Wallet: {data?.wallet_amount}$
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Payment

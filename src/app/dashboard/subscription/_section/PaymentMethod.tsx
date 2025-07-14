import { Icon } from '@/components/Icon'
import { getFontValue } from '@/utils'
import { Stack, Typography } from '@mui/material'

const PaymentMethod = () => {
  return (
    <Stack spacing={6} width={'100%'}>
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
        <Typography sx={{ color: '#49549C', ...getFontValue(18, 500), pr: 5 }}>Your Wallet: 10$</Typography>
      </Stack>
    </Stack>
  )
}

export default PaymentMethod

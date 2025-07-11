import { Icon } from '@/components/Icon'
import { getFontValue } from '@/utils'
import { Button, Stack, Typography } from '@mui/material'

const WalletCard = () => {
  return (
    <Stack
      sx={{
        border: '2px solid #262C53',
        borderRadius: 5,
        background:
          ' linear-gradient(0deg, #130F30, #130F30), radial-gradient(64.87% 78.7% at 90.6% -18.1%, #1D1558 0%, #130F30 100%);',
      }}
      minWidth={328}
    >
      <Stack pt={4} px={5.5} pb={3} borderBottom={'1px solid #232246'}>
        <Stack direction={'row'} spacing={2.5}>
          <Icon name="wallet" />
          <Typography sx={{ color: '#6B72FF', ...getFontValue(19, 500) }}>Your Wallet</Typography>
        </Stack>
      </Stack>
      <Stack px={8} py={7.5} spacing={7}>
        <Stack>
          <Typography sx={{ color: 'white', ...getFontValue({ xs: 19, md: 24 }, 600) }}>Your Balance</Typography>
          <Typography sx={{ color: '#B9BDFF', ...getFontValue({ xs: 16, md: 20 }, 400) }}>25$</Typography>
        </Stack>
        <Stack>
          <Typography sx={{ color: 'white', ...getFontValue({ xs: 19, md: 24 }, 600) }}>Withdrawable </Typography>
          <Typography sx={{ color: '#B9BDFF', ...getFontValue({ xs: 16, md: 20 }, 400) }}>10$</Typography>
        </Stack>
        <Stack direction={'row'} spacing={3}>
          <Button size="small">Charge Wallet</Button>
          <Button size="small" color="info">
            Withdraw
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default WalletCard

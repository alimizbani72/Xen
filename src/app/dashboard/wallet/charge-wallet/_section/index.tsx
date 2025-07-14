import { Stack } from '@mui/material'
import PaymentDetail from '../../../../_components/PaymentDetail'
import Payment from './Payment'

const ChargeWalletSection = () => {
  return (
    <Stack py={{ xs: 8, md: 38 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} spacing={40}>
        <Payment />
        <PaymentDetail title="Charge Wallet" />
      </Stack>
    </Stack>
  )
}

export default ChargeWalletSection

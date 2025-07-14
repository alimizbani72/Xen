import { getFontValue } from '@/utils'
import { Stack, Typography } from '@mui/material'
import PaymentDetail from '../../../_components/PaymentDetail'
import PaymentMethod from './PaymentMethod'

const ReviewPayment = () => {
  return (
    <Stack width={'100%'} px={8}>
      <Typography sx={{ ...getFontValue({ xs: 20, md: 40 }, 700), color: 'white', textAlign: 'center' }}>
        Review The Payment Details
      </Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} spacing={40} pt={22}>
        <PaymentMethod />
        <PaymentDetail title="Subscription | 3 Month" />
      </Stack>
    </Stack>
  )
}

export default ReviewPayment

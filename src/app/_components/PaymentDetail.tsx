'use client'
import Card from '@/app/_components/Card'
import { getFontValue } from '@/utils'
import { Button, Divider, Stack, TextField, Typography } from '@mui/material'
type Props = {
  onClick?: VoidFunction
  title: string
}
const PaymentDetail = ({ onClick, title }: Props) => {
  return (
    <Card title="Payment Details" icon="payment" sx={{ width: '100%' }}>
      <Stack py={6} spacing={4} px={5}>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography sx={{ color: '#49549C', ...getFontValue(20, 500) }}>{title}</Typography>
          <Typography sx={{ color: 'white', ...getFontValue(20, 500) }}>10 USDT</Typography>
        </Stack>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography sx={{ color: '#49549C', ...getFontValue(20, 500) }}>VAT (0%)</Typography>
          <Typography sx={{ color: 'white', ...getFontValue(20, 500) }}>0 USDT</Typography>
        </Stack>
        <Stack direction={'row'} justifyContent={'space-between'} pt={2}>
          <Typography sx={{ color: 'white', ...getFontValue(28, 500) }}>Total</Typography>
          <Typography sx={{ color: 'white', ...getFontValue(28, 500) }}>10 USDT</Typography>
        </Stack>
      </Stack>
      <Divider sx={{ bgcolor: '#232246' }} />
      <Stack p={5} spacing={9}>
        <Stack spacing={2.5}>
          <Typography sx={{ color: '#49549C', ...getFontValue(20, 500) }}>Promo Code</Typography>
          <TextField name="code" placeholder="Enter Code Here" />
        </Stack>
        <Button onClick={onClick}>Complete The Payment</Button>
      </Stack>
    </Card>
  )
}

export default PaymentDetail

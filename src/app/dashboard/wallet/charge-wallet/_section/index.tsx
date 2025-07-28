'use client'
import { Stack } from '@mui/material'
import { useState } from 'react'
import PaymentDetail from '../../../../_components/PaymentDetail'
import Payment from './Payment'

const ChargeWalletSection = () => {
  const [amount, setAmount] = useState('')
  return (
    <Stack py={{ xs: 8, md: 38 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} spacing={40}>
        <Payment amount={amount} setAmount={setAmount} />
        <PaymentDetail title="Charge Wallet" amount={amount} />
      </Stack>
    </Stack>
  )
}

export default ChargeWalletSection

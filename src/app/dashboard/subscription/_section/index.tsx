'use client'
import { getFontValue } from '@/utils'
import { Stack, Typography } from '@mui/material'
import { useState } from 'react'
import ActiveBadges from './ActiveBadges'
import Contact from './Contact'
import Plans from './Plans'

const SubscriptionSection = () => {
  const [step, setStep] = useState(0)
  return (
    <Stack justifyContent={'center'} alignItems={'center'} height={'100%'} spacing={10} pt={10}>
      <ActiveBadges step={step} />
      {step === 0 && (
        <>
          <Typography sx={{ ...getFontValue({ xs: 20, md: 40 }, 700), color: 'white' }}>Select Your Plan</Typography>
          <Plans onClick={() => setStep(1)} />
          <Contact />
        </>
      )}
      {step === 1 && (
        <Typography sx={{ ...getFontValue({ xs: 20, md: 40 }, 700), color: 'white' }}>Second Step</Typography>
      )}
    </Stack>
  )
}

export default SubscriptionSection

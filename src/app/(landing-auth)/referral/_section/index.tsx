'use client'
import { RiveFooter } from '@/app/_components/RiveFooter'
import { Stack, useMediaQuery } from '@mui/material'
import Affiliate from './Affiliate'
import MethodSection from './MethodSection'
import Resell from './Resell'

const ReferralSection = () => {
  const between1000ToLg = useMediaQuery(theme => theme.breakpoints.between(985, 'lg'))
  return (
    <Stack position="relative">
      <Stack
        sx={{
          height: between1000ToLg ? 'calc(49vw)' : { xs: '423px', md: 'calc(61vw)', lg: 'calc(56vw)', xl: '1000px' },
          backgroundColor: { md: '#040015' },
          position: 'relative',
        }}
      >
        <Affiliate />
      </Stack>
      <Stack
        sx={{
          background: '#040015',
          zIndex: 1,
        }}
      >
        <MethodSection />
        <Resell />
        <RiveFooter />
      </Stack>
    </Stack>
  )
}

export default ReferralSection

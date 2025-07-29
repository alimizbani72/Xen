'use client'
import Badge from '@/app/_components/Badge'
import { RiveFooter } from '@/app/_components/RiveFooter'
import DustBackground from '@/components/DustBackground'
import { Icon } from '@/components/Icon'
import { useApiQuery } from '@/hooks'
import { getFontValue } from '@/utils'
import { Box, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import PlanCard from './PlanCard'

const PricingSection = () => {
  const router = useRouter()
  const { data, isLoading } = useApiQuery<{ items?: any[] }>({
    url: 'pack/list?skip=0&limit=3',
  })

  return (
    <Box position={'relative'} pb={{ xs: 10, md: 40 }} px={2} overflow="hidden">
      <DustBackground numParticles={220} />
      <Stack
        pt={{ xs: 30, md: 50 }}
        spacing={10}
        m={'auto'}
        width={'100%'}
        maxWidth={'1108px'}
        justifyContent={'center'}
        alignItems={'center'}
        position={'relative'}
        zIndex={1}
      >
        <Stack spacing={3} justifyContent={'center'} alignItems={'center'}>
          <Badge>Price List</Badge>
          <Typography
            sx={{
              ...getFontValue({ xs: 20, md: 48 }, 600),
              color: 'white',
              textAlign: { xs: 'center', md: 'unset' },
              px: { xs: 4, md: 'unset' },
            }}
          >
            Select Your Plan To Go
          </Typography>
        </Stack>
        <Stack direction={{ xs: 'column', lg: 'row' }} alignItems={'center'} spacing={7}>
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <Stack key={index} className="loading-skeleton" sx={{ width: '328px', height: '369px' }} />
              ))
            : data?.items?.map((plan, idx) => (
                <PlanCard
                  key={idx}
                  {...plan}
                  currency={plan.plisio.currency}
                  amount={plan.plisio.amount}
                  isHighlighted={idx === 1}
                  btnText="Purchase"
                  onClick={() => router.push('dashboard/subscription')}
                />
              ))}
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <Icon name="headphone" size={25} color="#8F8F8F" />
          <Typography sx={{ ...getFontValue(16, 400), color: '#8F8F8F' }}>Any Problem?</Typography>

          <Typography sx={{ ...getFontValue(16, 400), color: 'white', textDecoration: 'underline' }}>
            Contact Our Support
          </Typography>
        </Stack>
      </Stack>
      <RiveFooter height={300} />
    </Box>
  )
}

export default PricingSection

import Badge from '@/app/_components/Badge'
import DustBackground from '@/components/DustBackground'
import GridBackgroundAbsolute from '@/components/GridBackground'
import { Icon } from '@/components/Icon'
import { plans } from '@/Mock'
import { getFontValue } from '@/utils'
import { Box, Stack, Typography } from '@mui/material'
import PlanCard from './PlanCard'

const PricingSection = () => {
  return (
    <Box position={'relative'} pb={{ xs: 10, md: 40 }}>
      <DustBackground numParticles={60} />
      <GridBackgroundAbsolute />
      <Stack
        pt={30}
        spacing={10}
        m={'auto'}
        width={'100%'}
        maxWidth={'1108px'}
        justifyContent={'center'}
        alignItems={'center'}
        position={'relative'}
      >
        <Stack spacing={3} justifyContent={'center'} alignItems={'center'}>
          <Badge>Price List</Badge>
          <Typography
            sx={{
              ...getFontValue(48, 600),
              color: 'white',
              textAlign: { xs: 'center', md: 'unset' },
              px: { xs: 4, md: 'unset' },
            }}
          >
            Select Your Plan To Go
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          height={{ xs: 'unset', md: '425px' }}
          alignItems={'center'}
          spacing={7}
        >
          {plans.map((plan, idx) => (
            <PlanCard key={idx} {...plan} />
          ))}
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <Icon name="google" size={25} color="#8F8F8F" />
          <Typography sx={{ ...getFontValue(16, 400), color: '#8F8F8F' }}>Any Problem?</Typography>

          <Typography sx={{ ...getFontValue(16, 400), color: 'white', textDecoration: 'underline' }}>
            Contact Our Support
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default PricingSection

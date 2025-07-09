'use client'
import Badge from '@/app/_components/Badge'
import { referralSteps } from '@/Mock'
import { getFontValue } from '@/utils'
import { Button, Stack, Typography, useMediaQuery } from '@mui/material'
import CardList from './cards/CardList'

const MethodSection = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'))
  return (
    <Stack
      pt={22}
      pb={27}
      px={{ xs: 4, md: 'unset' }}
      justifyContent={'center'}
      direction={'column'}
      alignItems={'center'}
    >
      <Badge>First Method</Badge>
      <Stack spacing={14}>
        <Stack pt={3} spacing={3} textAlign={'center'}>
          <Typography sx={{ ...getFontValue({ xs: 20, md: 48 }, 600), color: 'white' }}>
            Refferal & Affiliate
          </Typography>
          <Typography sx={{ ...getFontValue({ xs: 14, md: 24 }, 400), color: '#868686' }}>
            Earn 10% of every purchase your referred friends make – forever!
          </Typography>
        </Stack>
        <CardList items={referralSteps} />
        <Button size={isMobile ? 'small' : 'large'} sx={{ alignSelf: 'center' }}>
          Recive Refferal Code NOW
        </Button>
      </Stack>
    </Stack>
  )
}

export default MethodSection

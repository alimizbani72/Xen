'use client'
import Badge from '@/app/_components/Badge'
import DustBackground from '@/components/DustBackground'
import { resell } from '@/Mock'
import { getFontValue } from '@/utils'
import { Button, Stack, Typography, useMediaQuery } from '@mui/material'
import CardList from './cards/CardList'

const Resell = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'))
  return (
    <Stack
      pt={10}
      pb={{ xs: 10, md: 70 }}
      px={{ xs: 4, md: 'unset' }}
      justifyContent={'center'}
      direction={'column'}
      alignItems={'center'}
      position={'relative'}
      zIndex={1}
    >
      <DustBackground numParticles={70} />
      <Badge>2nd Method</Badge>
      <Stack spacing={14}>
        <Stack pt={3} spacing={3} textAlign={'center'}>
          <Typography sx={{ ...getFontValue({ xs: 20, md: 48 }, 600), color: 'white' }}>Resell</Typography>
          <Typography sx={{ ...getFontValue({ xs: 14, md: 24 }, 400), color: '#868686' }}>
            Get a bulk user & password list with up to 20% discount on Resell purchases!
          </Typography>
        </Stack>
        <CardList items={resell} />
        <Button size={isMobile ? 'small' : 'large'} sx={{ alignSelf: 'center' }}>
          Get a Bulk Deal
        </Button>
      </Stack>
    </Stack>
  )
}

export default Resell

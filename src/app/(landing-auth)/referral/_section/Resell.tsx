import Badge from '@/app/_components/Badge'
import DustBackground from '@/components/DustBackground'
import { resell } from '@/Mock'
import { getFontValue } from '@/utils'
import { Button, Stack, Typography } from '@mui/material'
import CardList from './cards/CardList'

const Resell = () => {
  return (
    <Stack
      pt={10}
      pb={70}
      px={{ xs: 4, md: 'unset' }}
      justifyContent={'center'}
      direction={'column'}
      alignItems={'center'}
      position={'relative'}
    >
      <DustBackground numParticles={70} />
      <Badge>2nd Method</Badge>
      <Stack spacing={14}>
        <Stack pt={3} spacing={3} textAlign={'center'}>
          <Typography sx={{ ...getFontValue(48, 600), color: 'white' }}>Resell</Typography>
          <Typography sx={{ ...getFontValue(24, 400), color: '#868686' }}>
            Get a bulk user & password list with up to 20% discount on Resell purchases!
          </Typography>
        </Stack>
        <CardList items={resell} />
        <Button size="large" sx={{ alignSelf: 'center' }}>
          Get a Bulk Deal
        </Button>
      </Stack>
    </Stack>
  )
}

export default Resell

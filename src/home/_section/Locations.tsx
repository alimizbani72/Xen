import Badge from '@/app/_components/Badge'
import { getFontValue } from '@/utils'
import { Box, Stack, Typography } from '@mui/material'

const Locations = () => {
  return (
    <Stack
      justifyContent={'flex-end'}
      direction={{ xs: 'column', md: 'row' }}
      alignItems={'center'}
      maxWidth={'1262px'}
      m={'auto'}
      px={{ xs: 4, md: 'unset' }}
      width={'100%'}
    >
      <Stack
        spacing={5}
        maxWidth={'417px'}
        pt={{ xs: 10, md: 'unset' }}
        justifyContent={{ xs: 'center', md: 'unset' }}
        alignItems={{ xs: 'center', md: 'unset' }}
      >
        <Badge>Locations</Badge>
        <Typography sx={{ ...getFontValue(48, 300), color: 'white', textAlign: { xs: 'center', md: 'unset' } }}>
          1 Subscription, 20 Locations!
        </Typography>
        <Typography sx={{ ...getFontValue(20, 300), color: '#9E9E9E', textAlign: { xs: 'center', md: 'unset' } }}>
          Access high-speed servers in the USA, Germany, France, Japan, Canada & more!
        </Typography>
      </Stack>
      <Box
        component="img"
        src="/assets/png/earth.png"
        alt="earth"
        width={{ xs: '100%', md: '620px' }}
        height={{ xs: '400px', md: '620px' }}
      />
    </Stack>
  )
}

export default Locations

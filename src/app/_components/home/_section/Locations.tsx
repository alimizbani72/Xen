import Badge from '@/app/_components/Badge'
import { getFontValue } from '@/utils'
import { Box, Stack, Typography } from '@mui/material'

const Locations = () => {
  return (
    <Stack
      justifyContent={'flex-end'}
      direction={{ xs: 'column', lg: 'row' }}
      alignItems={'center'}
      maxWidth={'1262px'}
      mx={'auto'}
      px={{ xs: 4, md: 6, lg: 'unset' }}
      width={'100%'}
    >
      <Stack
        spacing={5}
        maxWidth={{ lg: '417px' }}
        pt={{ xs: 10, lg: 'unset' }}
        justifyContent={{ xs: 'center', lg: 'unset' }}
        alignItems={{ xs: 'center', lg: 'unset' }}
      >
        <Badge>Locations</Badge>
        <Stack direction={{ lg: 'column', xs: 'row' }} spacing={{ xs: 1, lg: 'unset' }}>
          <Typography
            sx={{ ...getFontValue({ xs: 20, md: 48 }, 300), color: 'white', textAlign: { xs: 'center', md: 'unset' } }}
          >
            1 Subscription,
          </Typography>
          <Typography
            sx={{ ...getFontValue({ xs: 20, md: 48 }, 300), color: 'white', textAlign: { xs: 'center', md: 'unset' } }}
          >
            20 Locations!
          </Typography>
        </Stack>
        <Typography
          sx={{ ...getFontValue({ xs: 14, md: 20 }, 300), color: '#9E9E9E', textAlign: { xs: 'center', lg: 'unset' } }}
        >
          Access high-speed servers in the USA, Germany, France, Japan, Canada & more!
        </Typography>
      </Stack>
      <Box
        component="img"
        src="/assets/png/earth.png"
        alt="earth"
        width={{ xs: '100%', md: '620px' }}
        height={{ xs: '400px', md: '620px' }}
        sx={{ objectFit: 'contain' }}
      />
    </Stack>
  )
}

export default Locations

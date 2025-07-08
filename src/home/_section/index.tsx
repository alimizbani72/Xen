import { Box, Stack } from '@mui/material'
import FaqSection from './faq'
import Features from './Features'
import Locations from './Locations'
import Moon from './Moon'
import PhoneSection from './PhoneSection'

const HomeSection = () => {
  return (
    <Stack>
      <Stack pt={13} pb={10} sx={{ height: { xs: 'unset', md: '700px' } }}>
        <Moon />
      </Stack>
      <Box
        component="img"
        src="/assets/png/beyond.png"
        alt="beyond"
        sx={{
          alignSelf: 'center',
          width: { xs: '380px', sm: '500px', md: '900px', lg: 'unset' },
        }}
      />
      <Features />
      <Locations />
      <Stack
        mt={30}
        sx={{
          height: '700px',
        }}
        px={{ xs: 4, md: 'unset' }}
      >
        <FaqSection />
      </Stack>
      <PhoneSection />
    </Stack>
  )
}

export default HomeSection

import { Box, Stack } from '@mui/material'
import FaqSection from './faq'
import Features from './Features'
import Locations from './Locations'
import Moon from './Moon'
import PhoneSection from './PhoneSection'
import Image from 'next/image'

const HomeSection = () => {
  return (
    <Stack>
      <Stack pt={13} pb={18}>
        <Moon />
      </Stack>
      <Box
        component="a"
        href="#download"
        sx={{
          alignSelf: 'center',
          maxWidth: 1015,
          mx: 10,
          boxShadow: '0px 0px 85px 0px #7678FF40',
          border: '2px solid #4750FF99',
          borderRadius: { xs: 3, md: 7.5 },
          borderWidth: { xs: '1px', md: '2px' },
          overflow: 'hidden',
          width: 'calc(100% - 80px)',
          maxHeight: 444,
          aspectRatio: 2,
          position: 'relative',
        }}
      >
        <Image fill src="/assets/png/beyond.png" alt="beyond" />
      </Box>
      <Features />
      <Locations />
      <Stack mt={30}>
        <FaqSection />
      </Stack>
      <PhoneSection />
    </Stack>
  )
}

export default HomeSection

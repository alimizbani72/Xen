import CustomButton from '@/app/_components/Footer/CustomButton'
import { getFontValue } from '@/utils'
import { Box, Stack, Typography } from '@mui/material'

const PhoneSection = () => {
  return (
    <Stack
      pt={33}
      width={'100%'}
      maxWidth={'1262px'}
      m={'auto'}
      direction={{ xs: 'column', lg: 'row' }}
      justifyContent={'flex-end'}
      px={{ xs: 4, md: 'unset' }}
      alignItems={'center'}
    >
      <Stack maxWidth={'316px'} spacing={12}>
        <Typography sx={{ ...getFontValue(64, 300), color: 'white', textAlign: { xs: 'center', md: 'unset' } }}>
          Go Fast. Stay Safe. Stay Xen.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 5.5,
            justifyContent: { xs: 'center', md: 'unset' },
          }}
        >
          <CustomButton icon="googlePlay">Get From Googleplay</CustomButton>
          <CustomButton icon="appStore">Get From AppStore</CustomButton>
          <CustomButton icon="export">Direct Download</CustomButton>
        </Box>
      </Stack>
      <Box
        component="img"
        src="/assets/png/phones.png"
        alt="earth"
        width={{ xs: '100%', md: '728px' }}
        height={{ xs: '400px', md: '728px' }}
      />
    </Stack>
  )
}

export default PhoneSection

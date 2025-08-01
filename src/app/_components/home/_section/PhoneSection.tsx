import CustomButton from '@/app/_components/Footer/CustomButton'
import { getFontValue } from '@/utils'
import { Box, Stack, Typography } from '@mui/material'

const DownloadButton = () => (
  <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 5.5,
      justifyContent: { xs: 'center', lg: 'unset' },
      flexDirection: { xs: 'column', sm: 'unset' },
    }}
  >
    <CustomButton icon="googlePlay">Get From Googleplay</CustomButton>
    <CustomButton icon="appStore">Get From AppStore</CustomButton>
    <CustomButton icon="export">Direct Download</CustomButton>
  </Box>
)

const PhoneSection = () => {
  return (
    <Stack
      id="download"
      pt={{ xs: 'unset', md: 33 }}
      pb={{ xs: 20, md: 'unset' }}
      width="100%"
      maxWidth="1262px"
      m="auto"
      direction={{ xs: 'column', lg: 'row' }}
      justifyContent="flex-end"
      px={{ xs: 4, md: 10, lg: 'unset' }}
      alignItems="center"
      spacing={{ lg: 9 }}
      zIndex={1}
    >
      {/* Phone Image */}
      <Stack order={{ xs: 1, lg: 2 }}>
        <Box
          component="img"
          src="/assets/png/phones.png"
          alt="earth"
          width={{ xs: '100%', md: '728px' }}
          height={{ xs: '400px', md: '728px' }}
          sx={{ objectFit: 'contain' }}
        />
      </Stack>

      {/* Text + Button */}
      <Stack order={{ xs: 2, lg: 1 }} maxWidth={{ lg: 316 }}>
        <Stack direction={{ xs: 'row', md: 'column' }} spacing={2}>
          <Typography
            sx={{
              ...getFontValue({ xs: 20, md: 64 }, 300),
              color: 'white',
              textAlign: { xs: 'center', lg: 'left' },
            }}
          >
            Go{' '}
            <Box component="span" sx={{ fontWeight: 700 }}>
              Fast.
            </Box>
          </Typography>
          <Typography
            sx={{
              ...getFontValue({ xs: 20, md: 64 }, 300),
              color: 'white',
              textAlign: { xs: 'center', lg: 'left' },
            }}
          >
            Stay{' '}
            <Box component="span" sx={{ fontWeight: 700 }}>
              Safe.
            </Box>
          </Typography>
          <Typography
            sx={{
              ...getFontValue({ xs: 20, md: 64 }, 300),
              color: 'white',
              textAlign: { xs: 'center', lg: 'left' },
            }}
          >
            Stay{' '}
            <Box component="span" sx={{ fontWeight: 700 }}>
              Xen.
            </Box>
          </Typography>
        </Stack>
        <Box mt={{ xs: 12, md: 8 }}>
          <DownloadButton />
        </Box>
      </Stack>
    </Stack>
  )
}

export default PhoneSection

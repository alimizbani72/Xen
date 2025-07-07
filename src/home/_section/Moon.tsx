'use client'
import GridBackgroundAbsolute from '@/components/GridBackground'
import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material'
const Moon = () => {
  const isTabletOrWeb = useMediaQuery(theme => theme.breakpoints.up('md'))
  return (
    <Box
      position="relative"
      height={'100%'}
      width={'100%'}
      sx={{
        backgroundImage: 'url("/assets/png/123.png")',

        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
      }}
    >
      {/* <Box
        position="absolute"
        bottom={0}
        left="50%"
        sx={{
          transform: 'translateX(-50%)',
          width: { xs: '90%', sm: '80%', md: '58%' }, // you can adjust these
          height: { xs: '40%', md: '60%' },
          background:
            'linear-gradient(180deg, #010226 0%, #010315 100%),linear-gradient(180deg, #000946 0%, #040015 23.93%)',
          borderRadius: '50%', // optional, for rounded edges
        }}
      /> */}
      <GridBackgroundAbsolute />
      {isTabletOrWeb && (
        <>
          <Box
            component="img"
            src="/assets/png/fast.png"
            alt="fast"
            sx={{
              position: 'absolute',
              left: '30px',
              top: 0,
              height: 'auto',
            }}
          />

          <Box
            component="img"
            src="/assets/png/safe.png"
            alt="safe"
            sx={{
              position: 'absolute',

              right: '30px',
              top: 0,
              height: 'auto',
            }}
          />
        </>
      )}

      <Box position="absolute" top={{ xs: '50%', md: '70%' }} left="50%" sx={{ transform: 'translate(-50%, -50%)' }}>
        <Stack spacing={2} alignItems="center">
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: '64px', sm: '120px', md: '258.14px' },
              lineHeight: 1,
              letterSpacing: { xs: '0.05em', md: '0.24em' },
              textAlign: 'center',
              color: 'white',
            }}
          >
            XEN
          </Typography>
          <Stack spacing={13}>
            <Typography
              variant="body1"
              color="white"
              sx={{
                fontWeight: 400,
                fontStyle: 'regular',
                fontSize: { xs: '16px', sm: '20px', md: '28px' },
                lineHeight: 1,
                letterSpacing: '0.03em',
                textAlign: 'center',
              }}
            >
              Go Fast. Stay Safe. Stay Xen.
            </Typography>
            <Button
              size="large"
              sx={{
                alignSelf: 'center',
              }}
            >
              Get Started
            </Button>
            <Box
              component="img"
              src="/assets/png/mouse.png"
              alt="mouse"
              width={54}
              height={54}
              sx={{
                alignSelf: 'center',
              }}
            />
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}

export default Moon

'use client'
import GridBackgroundAbsolute from '@/components/GridBackground'
import RiveComp from '@/components/RiveLoader'
import { getFontValue } from '@/utils'
import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import { Alignment, Fit } from '@rive-app/react-canvas'

const Affiliate = () => {
  const between1000ToLg = useMediaQuery(theme => theme.breakpoints.between(985, 'lg'))
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'))
  const mdBreakpoint = useMediaQuery(theme => theme.breakpoints.only('md'))
  if (isMobile) {
    return (
      <Stack
        position={'relative'}
        justifyContent={'center'}
        alignItems={'center'}
        height={'100%'}
        width={{ xs: '100%', xl: '80%' }}
        m={{ xl: '0 auto' }}
      >
        <RiveComp src="assets/rive/affiliate_page_animation.riv" fit={Fit.Contain} />
        <Box
          sx={{
            position: 'absolute',
            top: '60%',
            left: 0,
            right: 0,
            textAlign: 'center',
            px: 2,
          }}
          gap={2}
        >
          <Stack spacing={2} alignItems="center">
            <Typography
              sx={{
                ...getFontValue(20, 600),
                textAlign: 'center',
                color: 'white',
              }}
            >
              Invite & Earn
            </Typography>
            <Stack spacing={5}>
              <Typography
                color="white"
                sx={{
                  ...getFontValue(12, 400),
                  textAlign: 'center',
                }}
              >
                Share the Freedom!
              </Typography>
              <Stack spacing={9.5}>
                <Button
                  size="small"
                  color="secondary"
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
                  width={34}
                  height={34}
                  sx={{
                    alignSelf: 'center',
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    )
  }
  return (
    <Box position="relative" height={'100%'} width={'100%'}>
      <Stack width={'100%'} height={'100%'} position="absolute" top={50} zIndex={0}>
        <RiveComp src="assets/rive/affiliate_page_animation.riv" alignment={Alignment.TopCenter} fit={Fit.FitWidth} />
      </Stack>
      <Box
        position="absolute"
        top={between1000ToLg ? 'calc(37vw)' : { xs: '50%', md: 'calc(47vw)', lg: 'calc(43vw)', xl: '75%' }}
        left="50%"
        sx={{ transform: 'translate(-50%, -50%)' }}
      >
        <Stack spacing={2} alignItems="center">
          <Typography
            sx={{
              fontWeight: '700',
              fontSize: between1000ToLg ? '28px' : { xs: '20px', md: '25px', lg: '40px', xl: '60px' },
              textAlign: 'center',
              color: 'white',
            }}
          >
            Invite & Earn
          </Typography>
          <Stack spacing={{ xs: 8, lg: 13 }}>
            <Typography
              color="white"
              sx={{
                fontWeight: 400,
                fontStyle: 'regular',
                fontSize: { xs: '12px', md: '14px', lg: '18px', xl: '28px' },
                lineHeight: 1,
                letterSpacing: '0.03em',
                textAlign: 'center',
              }}
            >
              Share the Freedom!
            </Typography>
            <Stack spacing={{ xs: 12, lg: 20 }}>
              <Button
                size={mdBreakpoint || isMobile ? 'small' : 'large'}
                color="secondary"
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
        </Stack>
      </Box>
    </Box>
  )
}

export default Affiliate

'use client'
import GridBackgroundAbsolute from '@/components/GridBackground'
import RiveComp from '@/components/RiveLoader'
import { getFontValue } from '@/utils'
import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material'

const Affiliate = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'))
  if (isMobile) {
    return (
      <Stack position={'relative'} justifyContent={'center'} alignItems={'center'} height={'100%'} width={'100%'}>
        {' '}
        <RiveComp src="assets/rive/affiliate_page_animation.riv" />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
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
            <Stack spacing={2}>
              <Typography
                color="white"
                sx={{
                  ...getFontValue(12, 400),
                  textAlign: 'center',
                }}
              >
                Share the Freedom!
              </Typography>
              <Stack spacing={2}>
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
      <RiveComp src="assets/rive/affiliate_page_animation.riv" />
      <Box position="absolute" top={{ xs: '50%', md: '75%' }} left="50%" sx={{ transform: 'translate(-50%, -50%)' }}>
        <Stack spacing={2} alignItems="center">
          <Typography
            sx={{
              fontWeight: '700',
              fontSize: { xs: '20px', md: '72px' },
              textAlign: 'center',
              color: 'white',
            }}
          >
            Invite & Earn
          </Typography>
          <Stack spacing={13}>
            <Typography
              color="white"
              sx={{
                fontWeight: 400,
                fontStyle: 'regular',
                fontSize: { xs: '12px', md: '32px' },
                lineHeight: 1,
                letterSpacing: '0.03em',
                textAlign: 'center',
              }}
            >
              Share the Freedom!
            </Typography>
            <Stack spacing={30}>
              <Button
                size={isMobile ? 'small' : 'large'}
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

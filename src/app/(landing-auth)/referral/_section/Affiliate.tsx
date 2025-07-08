import GridBackgroundAbsolute from '@/components/GridBackground'
import { Box, Button, Stack, Typography } from '@mui/material'

const Affiliate = () => {
  return (
    <Box
      position="relative"
      height={'100%'}
      width={'100%'}
      sx={{
        backgroundImage: 'url("/assets/png/affiliate.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
      }}
    >
      <GridBackgroundAbsolute />
      <Box position="absolute" top={{ xs: '50%', md: '75%' }} left="50%" sx={{ transform: 'translate(-50%, -50%)' }}>
        <Stack spacing={2} alignItems="center">
          <Typography
            sx={{
              fontWeight: '700',
              fontSize: { xs: '44px', sm: '54px', md: '72px' },
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
                fontSize: { xs: '16px', sm: '20px', md: '32px' },
                lineHeight: 1,
                letterSpacing: '0.03em',
                textAlign: 'center',
              }}
            >
              Share the Freedom!
            </Typography>
            <Stack spacing={30}>
              <Button
                size="large"
                color="secondary"
                sx={{
                  position: 'relative',
                  alignSelf: 'center',
                  zIndex: 1,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-6px',
                    left: '-10px',
                    right: '-6px',
                    bottom: '-6px',
                    border: '1px solid transparent',
                    borderRadius: '30px',
                    borderImageSlice: 1,
                    borderImageSource: 'linear-gradient(292.37deg, #8F8F8F 16.72%, rgba(143, 143, 143, 0) 63.57%)',
                    zIndex: -1,
                    pointerEvents: 'none',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  },
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

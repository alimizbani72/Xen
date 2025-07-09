'use client'
import GridBackgroundAbsolute from '@/components/GridBackground'
import { getFontValue } from '@/utils'
import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material'
const Moon = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'))
  // if (isMobile) {
  //   return (
  //     <Stack position={'relative'} justifyContent={'center'} alignItems={'center'}>
  //       <Box component={'img'} src={'/assets/png/123.png'} width={'100%'} />
  //       <Box
  //         sx={{
  //           position: 'absolute',
  //           top: '30%',
  //           left: 0,
  //           right: 0,
  //           textAlign: 'center',
  //           px: 2,
  //         }}
  //         gap={2}
  //       >
  //         <Stack spacing={2} alignItems="center">
  //           <Typography
  //             sx={{
  //               ...getFontValue(24, 400),
  //               textAlign: 'center',
  //               color: 'white',
  //             }}
  //           >
  //             XEN
  //           </Typography>
  //           <Stack spacing={3}>
  //             <Typography
  //               variant="body1"
  //               color="white"
  //               sx={{
  //                 ...getFontValue(14, 300),
  //                 textAlign: 'center',
  //               }}
  //             >
  //               Go Fast. Stay Safe. Stay Xen.
  //             </Typography>
  //             <Button
  //               size="small"
  //               sx={{
  //                 alignSelf: 'center',
  //               }}
  //             >
  //               Get Started
  //             </Button>
  //             <Box
  //               component="img"
  //               src="/assets/png/mouse.png"
  //               alt="mouse"
  //               width={34}
  //               height={34}
  //               sx={{
  //                 alignSelf: 'center',
  //               }}
  //             />
  //           </Stack>
  //         </Stack>
  //       </Box>
  //     </Stack>
  //   )
  // }
  return (
    <Stack justifyContent={'center'} position="relative" maxWidth={1660} width="100%" height="100%" m="0 auto">
      <GridBackgroundAbsolute />
      <Box
        sx={{
          '::after': {
            content: '""',
            bgcolor: 'red',
            height: 200,
            width: '100%',
          },
        }}
      >
        <Box
          component={'img'}
          src="/assets/png/123.png"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
            width: '100%',
          }}
        />
      </Box>

      <Stack spacing={2} alignItems="center" pt="12vw">
        <Stack direction="row" justifyContent="center" gap={{ xl: '30%', md: '60%', lg: '38%', sm: '47%', xs: '64%' }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: '34px', sm: '62px', md: '82px', lg: '175px', xl: '258.14px' },
              color: 'white',
            }}
          >
            X
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: '34px', sm: '62px', md: '82px', lg: '175px', xl: '258.14px' },
              color: 'white',
            }}
          >
            E
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: '34px', sm: '62px', md: '82px', lg: '175px', xl: '258.14px' },
              color: 'white',
            }}
          >
            N
          </Typography>
        </Stack>
        <Stack spacing={{ xs: 5, md: 13 }}>
          <Typography
            variant="body1"
            color="white"
            sx={{
              fontWeight: 400,
              fontStyle: 'regular',
              fontSize: { xs: '9px', sm: '14px', md: '20px', lg: '33px', xl: '44px' },
              lineHeight: 1,
              letterSpacing: '0.03em',
              textAlign: 'center',
            }}
          >
            Go Fast. Stay Safe. Stay Xen.
          </Typography>
          <Button
            size={isMobile ? 'small' : 'large'}
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

      <>
        <Box
          component="img"
          src="/assets/png/Fast.png"
          alt="fast"
          sx={{
            position: 'absolute',
            left: '30px',
            top: 0,
            height: 'auto',
            display: { xs: 'none', lg: 'block' },
          }}
        />

        <Box
          component="img"
          src="/assets/png/Safe.png"
          alt="safe"
          sx={{
            position: 'absolute',
            right: '30px',
            top: 0,
            height: 'auto',
            display: { xs: 'none', lg: 'block' },
          }}
        />
      </>
    </Stack>
  )
}

export default Moon

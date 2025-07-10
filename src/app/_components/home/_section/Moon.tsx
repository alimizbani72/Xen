'use client'
import GridBackgroundAbsolute from '@/components/GridBackground'
import { getFontValue } from '@/utils'
import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
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
    <Stack justifyContent={'center'} position="relative" width="100%" height="100%">
      <GridBackgroundAbsolute zIndex={0} />
      <Box position="relative" maxWidth={1660} width="100%" height="100%" m="0 auto" zIndex={-1}>
        <Image
          src="/assets/png/123.png"
          alt="Planet"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'top center',
            zIndex: 0,
          }}
        />
        <Stack spacing={2} alignItems="center" pt="14vw" position="relative" zIndex={333}>
          <Stack
            direction="row"
            justifyContent="center"
            gap={{ xl: '9%', lg: '13%', md: '30%', sm: '20%', xs: '34%' }}
            sx={{
              '::after': {
                content: '""',
                width: '100%',
                height: { lg: 200, xs: 30, md: 100 },
                left: 0,
                bottom: { lg: 244, md: 233, xs: 137, sm: 140 },
                zIndex: -1,
                position: 'absolute',
                background: 'linear-gradient(to top, #010226 0%, transparent 100%)',
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: { xs: '34px', sm: '62px', md: '82px', lg: '175px', xl: '258.14px' },
                fontFamily: 'syncopate',
                color: 'white',
                lineHeight: 'normal',
              }}
            >
              X
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: { xs: '34px', sm: '62px', md: '82px', lg: '175px', xl: '258.14px' },
                fontFamily: 'syncopate',
                color: 'white',
                lineHeight: 'normal',
              }}
            >
              E
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: { xs: '34px', sm: '62px', md: '82px', lg: '175px', xl: '258.14px' },
                fontFamily: 'syncopate',
                color: 'white',
                lineHeight: 'normal',
              }}
            >
              N
            </Typography>
          </Stack>
          <Stack
            spacing={{ xs: 5, md: 13 }}
            width="100%"
            sx={{
              backgroundColor: '#010226',
            }}
          >
            <Typography
              variant="body1"
              color="white"
              sx={{
                fontWeight: 400,
                fontStyle: 'regular',
                fontSize: { xs: '8px', sm: '11px', md: '16px', lg: '27px', xl: '34px' },
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
      </Box>

      {/* <Box
        component="img"
        sx={{
          objectFit: 'contain',
          objectPosition: 'top center',
          zIndex: 0,
          transform: 'scale(2)',
          top: 176,
        }}
        src="/assets/png/123.png"
      /> */}

      {/* <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', letterSpacing: 8 }}>
          XEN
        </Typography>

        <Typography variant="subtitle1" color="gray">
          Go Fast. Stay Safe. Stay Xen.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#fff',
            color: '#000',
            borderRadius: '999px',
            px: 4,
            py: 1.5,
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#e0e0e0',
            },
          }}
        >
          Get Started
        </Button>
      </Stack>

      */}

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

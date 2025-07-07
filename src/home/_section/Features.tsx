import Badge from '@/app/_components/Badge'
import { featurescardData } from '@/constants/featurescardData'
import { getFontValue } from '@/utils'
import { Box, Stack, Typography } from '@mui/material'

const Features = () => {
  return (
    <Stack
      pt={{ xs: 10, md: 35 }}
      px={{ xs: 4, md: 'unset' }}
      justifyContent={'center'}
      direction={'column'}
      alignItems={'center'}
    >
      <Badge>Features</Badge>
      <Stack pt={3} spacing={10}>
        <Typography sx={{ ...getFontValue(44, 500), color: 'white', textAlign: 'center' }}>
          What Makes Xen Different?
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={12.5}>
          {featurescardData.map((card, index) => (
            <Stack
              key={index}
              sx={{
                border: '2px solid rgba(24, 24, 92, 1)',
                borderRadius: '30px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Box component="img" src={card.imgSrc} alt={card.title} sx={{ width: '100%', display: 'block' }} />
              <Box
                sx={{
                  position: 'absolute',
                  top: '60%',
                  left: 0,
                  right: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  px: 2,
                }}
                gap={2}
              >
                <Typography sx={{ ...getFontValue(24, 700), color: 'white' }}>{card.title}</Typography>
                <Typography
                  sx={{
                    ...getFontValue(12, 400),
                    color: '#9E9E9E',
                    maxWidth: '200px',
                  }}
                >
                  {card.description}
                </Typography>
              </Box>
            </Stack>
          ))}
          {/* <Stack
            sx={{
              border: '2px solid rgba(24, 24, 92, 1)',
              borderRadius: '30px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <Box component="img" src="/assets/png/gaming-one.png" alt="gaming-one" />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                px: 2,
              }}
              gap={2}
            >
              <Typography sx={{ ...getFontValue(24, 700), color: 'white' }}>Advanced Security</Typography>
              <Typography sx={{ ...getFontValue(12, 400), color: '#9E9E9E', maxWidth: '190px' }}>
                Protect your data with AES-256 encryption and a strict no-logs policy.
              </Typography>
            </Box>
          </Stack> */}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Features

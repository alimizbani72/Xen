'use client'
import { Icon } from '@/components/Icon'
import { getFontValue } from '@/utils'
import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import DaysRemainingProgress from './DaysRemainingProgress'

const SubscriptionSection = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'))
  const hasSubscription = true
  return (
    <Stack
      width={'100%'}
      sx={{
        border: '2px solid #262C53',
        borderRadius: 5,
        background:
          'linear-gradient(0deg, #130F30, #130F30), radial-gradient(64.87% 78.7% at 90.6% -18.1%, #1D1558 0%, #130F30 100%);',
      }}
    >
      <Stack py={5} px={5.5} borderBottom={'1px solid #232246'}>
        <Stack direction={'row'} spacing={1}>
          <Icon name="subscription" size={23} />
          <Typography sx={{ ...getFontValue(19, 500), color: '#6B72FF' }}>Your Subscription</Typography>
        </Stack>
      </Stack>
      <Stack px={9} py={4} direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'}>
        <Box
          component={'img'}
          src={hasSubscription ? '/assets/png/subscriptionexist.png' : '/assets/png/nosub.png'}
          sx={{
            ml: isMobile ? 5 : 'unset',
            // width: 204,
            // height: 204,
            aspectRatio: 1.4,
            objectFit: 'cover',
          }}
        />

        <Stack spacing={6}>
          <Stack>
            {hasSubscription ? (
              <Typography
                sx={{
                  ...getFontValue({ xs: 20, md: 36 }, 600),
                  display: 'flex',
                  gap: '4px',
                }}
              >
                <Box
                  component="span"
                  sx={{
                    background:
                      'linear-gradient(0deg, var(--Primary-400, #6B72FF), var(--Primary-400, #6B72FF)), linear-gradient(90deg, #4750FF 0%, #B9BDFF 100%);',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Premium
                </Box>
                <Box
                  component="span"
                  sx={{
                    background: '#B9BDFF',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  User
                </Box>
              </Typography>
            ) : (
              <Typography sx={{ ...getFontValue({ xs: 20, md: 36 }, 600), color: '#8F8F8F' }}>
                No Subscription
              </Typography>
            )}
            <Typography sx={{ ...getFontValue({ xs: 9, md: 15 }, 400), color: '#B9BDFF' }}>
              {hasSubscription ? 'Thanks For Choosing us!' : 'Join Us And Enjoy!'}
            </Typography>
          </Stack>
          {hasSubscription && <DaysRemainingProgress current={10} total={22} />}
          <Button color="secondary" size={isMobile ? 'small' : 'medium'}>
            Renew Subscription
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default SubscriptionSection

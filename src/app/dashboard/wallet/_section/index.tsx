'use client'
import { Box, Button, Stack, Typography } from '@mui/material'
import WalletCard from './WalletCard'
import WalletHistoryTable from './WalletHistoryTable'

const WalletSection = () => {
  return (
    <Stack sx={{ px: 4 }} spacing={7}>
      <Stack direction={{ xs: 'column', lg: 'row' }} spacing={7.5}>
        <WalletCard />
        <Stack
          sx={{
            width: '100%',
            position: 'relative',
            border: '2px solid #262C53',
            borderRadius: 5,
            overflow: 'hidden',
          }}
        >
          <Box
            component={'img'}
            src={'/assets/png/savingbanner.png'}
            sx={{ maxWidth: '100%', height: { xs: 'unset', lg: '347px' }, objectFit: { xs: 'contain', lg: 'unset' } }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingLeft: { xs: 2, sm: 4, md: 6 },
              zIndex: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 14, sm: 18, md: 48 },
                fontWeight: 600,
                color: '#6B72FF',
              }}
            >
              Resell VPN, <br /> Maximum Savings!
            </Typography>

            <Button
              color="secondary"
              size="small"
              sx={{
                mt: 3,
                width: 'fit-content',
                px: { md: '50px' },
              }}
            >
              Power Up Your Business
            </Button>
          </Box>
        </Stack>
      </Stack>
      <WalletHistoryTable />
    </Stack>
  )
}

export default WalletSection

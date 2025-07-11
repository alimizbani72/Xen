import { Box, Stack } from '@mui/material'
import WalletCard from './WalletCard'
import WalletHistoryTable from './WalletHistoryTable'

const WalletSection = () => {
  return (
    <Stack sx={{ px: 4, pt: 4, pb: 7.5 }} spacing={7}>
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
        </Stack>
      </Stack>
      <WalletHistoryTable />
    </Stack>
  )
}

export default WalletSection

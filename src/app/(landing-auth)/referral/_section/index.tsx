import { RiveFooter } from '@/app/_components/RiveFooter'
import { Stack } from '@mui/material'
import Affiliate from './Affiliate'
import MethodSection from './MethodSection'
import Resell from './Resell'

const ReferralSection = () => {
  return (
    <Stack position="relative">
      <Stack sx={{ height: { xs: '450px', md: '1374px' }, position: 'relative' }}>
        <Affiliate />
      </Stack>
      <Stack
        sx={{
          background: '#040015',
          zIndex: 1,
        }}
      >
        <MethodSection />
        <Resell />
        <RiveFooter />
      </Stack>
    </Stack>
  )
}

export default ReferralSection

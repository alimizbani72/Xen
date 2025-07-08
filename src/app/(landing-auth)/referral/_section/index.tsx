import { Stack } from '@mui/material'
import Affiliate from './Affiliate'
import MethodSection from './MethodSection'
import Resell from './Resell'

const ReferralSection = () => {
  return (
    <Stack>
      <Stack sx={{ height: { xs: 'unset', md: '900px' } }}>
        <Affiliate />
      </Stack>
      <MethodSection />
      <Resell />
    </Stack>
  )
}

export default ReferralSection

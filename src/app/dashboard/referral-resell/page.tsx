import BreadCrumbs from '@/app/_components/Breadcrumb'
import { ReferralProgram } from '@/app/dashboard/referral-resell/_section/ReferralProgram'
import { ResellProgram } from '@/app/dashboard/referral-resell/_section/Resell/ResellProgram'
import { Divider, Stack } from '@mui/material'

const breadCrumbsItems = [{ href: '#', label: 'Referral & Resell' }]

const ReferralResellPage = () => {
  return (
    <Stack>
      <Stack px={8}>
        <BreadCrumbs items={breadCrumbsItems} />
        <ReferralProgram />
      </Stack>
      <Divider sx={{ bgcolor: '#232246' }} />
      <Stack px={8}>
        <ResellProgram />
      </Stack>
    </Stack>
  )
}

export default ReferralResellPage

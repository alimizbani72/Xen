import BreadCrumbs from '@/app/_components/Breadcrumb'
import { Information } from '@/app/dashboard/settings/_section/Information'
import { Password } from '@/app/dashboard/settings/_section/Password'
import { Divider, Stack } from '@mui/material'

const breadCrumbsItems = [{ href: '#', label: 'settings' }]

const ReferralResellPage = () => {
  return (
    <Stack>
      <Stack px={8} pb={10}>
        <BreadCrumbs items={breadCrumbsItems} />
        <Information />
      </Stack>
      <Divider sx={{ bgcolor: '#232246' }} />
      <Stack px={8} pb={10}>
        <Password />
      </Stack>
    </Stack>
  )
}

export default ReferralResellPage

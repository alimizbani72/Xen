import BreadCrumbs from '@/app/_components/Breadcrumb'
import { InviteHistoryTable } from '@/app/dashboard/referral-resell/invite-history/_section/InviteHistoryTable'

import { Stack } from '@mui/material'

const breadCrumbsItems = [
  { href: '/dashboard/referral-resell/', label: 'Referral & Resell' },
  { href: '#', label: 'Invite History' },
]

const Page = () => {
  return (
    <Stack px={8} spacing={7} height="100%">
      <BreadCrumbs items={breadCrumbsItems} />
      <InviteHistoryTable />
    </Stack>
  )
}

export default Page

import BreadCrumbs from '@/app/_components/Breadcrumb'
import { WithdrawHistoryTable } from '@/app/dashboard/referral-resell/withdraw-history/_section/WithdrawHistoryTable'

import { Stack } from '@mui/material'

const breadCrumbsItems = [
  { href: '/dashboard/referral-resell/', label: 'Referral & Resell' },
  { href: '#', label: 'Withdraw History' },
]

const Page = () => {
  return (
    <Stack px={8} spacing={7} height="100%">
      <BreadCrumbs items={breadCrumbsItems} />
      <WithdrawHistoryTable />
    </Stack>
  )
}

export default Page

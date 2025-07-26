import BreadCrumbs from '@/app/_components/Breadcrumb'
import { AccountListTable } from '@/app/dashboard/referral-resell/account-list/_section/AccountListTable'

import { Stack } from '@mui/material'

const breadCrumbsItems = [
  { href: '/dashboard/referral-resell/', label: 'Referral & Resell' },
  { href: '#', label: 'Account List' },
]

const Page = () => {
  return (
    <Stack px={8} spacing={7} height="100%">
      <BreadCrumbs items={breadCrumbsItems} />
      <AccountListTable />
    </Stack>
  )
}

export default Page

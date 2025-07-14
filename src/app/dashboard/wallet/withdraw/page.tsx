import BreadCrumbs from '@/app/_components/Breadcrumb'
import { Stack } from '@mui/material'
import WithDrawSection from './_section'
const breadCrumbsItems = [
  { href: '#', label: 'Wallet' },
  { href: '#', label: 'withdraw' },
]
const WithdrawPage = () => {
  return (
    <Stack px={8} pb={4} height={'100%'}>
      <BreadCrumbs items={breadCrumbsItems} />
      <WithDrawSection />
    </Stack>
  )
}

export default WithdrawPage

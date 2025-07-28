import BreadCrumbs from '@/app/_components/Breadcrumb'
import { Stack } from '@mui/material'
import ChargeWalletSection from './_section'

const breadCrumbsItems = [
  { href: '/dashboard/wallet/', label: 'Wallet' },
  { href: '#', label: 'Charge Wallet' },
]
const ChargeWalletPage = () => {
  return (
    <Stack px={8} pb={4} height={'100%'}>
      <BreadCrumbs items={breadCrumbsItems} />
      <ChargeWalletSection />
    </Stack>
  )
}

export default ChargeWalletPage

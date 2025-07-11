import BreadCrumbs from '@/app/_components/Breadcrumb'
import { Stack } from '@mui/material'
import WalletSection from './_section'
const breadCrumbsItems = [{ href: '#', label: 'Wallet' }]
const WalletPage = () => {
  return (
    <Stack px={4} pb={4}>
      <Stack pl={4} pb={3}>
        <BreadCrumbs items={breadCrumbsItems} />
      </Stack>
      <WalletSection />
    </Stack>
  )
}

export default WalletPage

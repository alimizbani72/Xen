import BreadCrumbs from '@/app/_components/Breadcrumb'
import { Stack } from '@mui/material'
import SubscriptionSection from './_section'
const breadCrumbsItems = [{ href: '#', label: 'Buy Subscription' }]
const SubscriptionPage = () => {
  return (
    <Stack>
      <Stack px={8} pt={4}>
        <BreadCrumbs items={breadCrumbsItems} />
      </Stack>
      <SubscriptionSection />
    </Stack>
  )
}

export default SubscriptionPage

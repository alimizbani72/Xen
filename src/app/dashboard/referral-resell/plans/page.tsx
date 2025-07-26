'use client'
import PlanCard from '@/app/(landing-auth)/pricing/_section/PlanCard'
import BreadCrumbs from '@/app/_components/Breadcrumb'
import { plans } from '@/Mock'

import { Stack } from '@mui/material'

const breadCrumbsItems = [
  { href: '/dashboard/referral-resell/', label: 'Referral & Resell' },
  { href: '#', label: 'Plans' },
]

const Page = () => {
  return (
    <Stack px={8} spacing={7} height="100%">
      <BreadCrumbs items={breadCrumbsItems} />
      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={6} px={{ xxl: 30, xl: 10 }}>
        {[...plans, ...plans].map((plan, idx) => (
          <PlanCard key={idx} {...plan} btnText="Next" isHighlighted={false} />
        ))}
      </Stack>
    </Stack>
  )
}

export default Page

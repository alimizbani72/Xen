'use client'
import PlanCard from '@/app/(landing-auth)/pricing/_section/PlanCard'
import BreadCrumbs from '@/app/_components/Breadcrumb'
import { useApiMutation, useApiQuery } from '@/hooks'
import { v4 as uuidv4 } from 'uuid'

import { Stack } from '@mui/material'

const breadCrumbsItems = [
  { href: '/dashboard/referral-resell/', label: 'Referral & Resell' },
  { href: '#', label: 'Plans' },
]

const Page = () => {
  const { data } = useApiQuery<{ items: any[] }>({ url: 'agency-pack/list?skip=0&limit=20' })
  const { mutateAsync } = useApiMutation<any, { invoice_url: string }>()

  const handlePurchase = (id: number, count: number) => {
    mutateAsync({
      url: 'plisio/agency-purchase',
      method: 'POST',
      data: {
        agency_pack_id: id,
        count,
        uuid: uuidv4(),
      },
    }).then(response => {
      if (response.invoice_url) window.open(response.invoice_url)
    })
  }

  return (
    <Stack px={8} spacing={7} height="100%">
      <BreadCrumbs items={breadCrumbsItems} />
      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={6} px={{ xxl: 30, xl: 10 }}>
        {data?.items?.map((plan, idx) => (
          <PlanCard
            key={idx}
            {...plan}
            price={`${plan.plisio.amount} ${plan.plisio.currency}`}
            duration="1 Month"
            total="3.5 USDT Total"
            btnText="Purchase"
            isHighlighted={false}
            onClick={() => handlePurchase(plan.id, plan.minimumCount)}
          />
        ))}
      </Stack>
    </Stack>
  )
}

export default Page

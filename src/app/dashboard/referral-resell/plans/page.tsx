'use client'
import BreadCrumbs from '@/app/_components/Breadcrumb'
import { useApiMutation, useApiQuery } from '@/hooks'
import { v4 as uuidv4 } from 'uuid'

import Scrollbar from '@/components/Scrollbar'
import { getFontValue } from '@/utils'
import { Stack, Typography } from '@mui/material'
import PlanCard from './PlanCard'

const breadCrumbsItems = [
  { href: '/dashboard/referral-resell/', label: 'Referral & Resell' },
  { href: '#', label: 'Plans' },
]

const Page = () => {
  const { data, isLoading } = useApiQuery<{ items: any[] }>({ url: 'agency-pack/list?skip=0&limit=20' })
  const { mutateAsync, isPending } = useApiMutation<any, { invoice_url: string }>()

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
      <Typography sx={{ color: 'white', ...getFontValue(40, 700) }} textAlign={'center'}>
        Select Your Plan
      </Typography>
      <Scrollbar options={{ scrollbars: { clickScroll: true, autoHide: 'never' } }}>
        <Stack
          className="custom-scrollbar"
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={6}
          px={{ xxl: 30, xl: 10 }}
        >
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <Stack key={index} className="loading-skeleton" sx={{ width: '258px', height: '315px' }} />
              ))
            : data?.items?.map((plan, idx) => (
                <PlanCard
                  key={idx}
                  {...plan}
                  price={`${plan.plisio.amount} ${plan.plisio.currency}`}
                  duration="1 Month"
                  total="3.5 USDT Total"
                  btnText="Purchase"
                  onClick={() => handlePurchase(plan.id, plan.minimumCount)}
                  isLoading={isPending}
                />
              ))}
        </Stack>
      </Scrollbar>
    </Stack>
  )
}

export default Page

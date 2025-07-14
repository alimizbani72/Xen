'use client'
import BreadCrumbs from '@/app/_components/Breadcrumb'
import { Stack } from '@mui/material'
import PaymentDetail from '@/app/_components/PaymentDetail'
import Payment from '@/app/dashboard/referral-resell/resell/_section/Payment'
import FormProvider from '@/components/HookForm/form-provider'
import { useForm } from 'react-hook-form'
const breadCrumbsItems = [
  { href: '/dashboard/referral-resell/', label: 'Referral & Resell' },
  { href: '#', label: 'Resell' },
]
const ResellPage = () => {
  const methods = useForm({
    mode: 'onSubmit',
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods
  const onSubmit = handleSubmit(async data => {})

  return (
    <FormProvider methods={methods} onSubmit={onSubmit} sx={{ gap: 5, height: '100%', flex: { xs: 1, xl: 1.8 } }}>
      <Stack px={8} pb={4} height={'100%'}>
        <BreadCrumbs items={breadCrumbsItems} />
        <Stack py={{ xs: 8, md: 38 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} spacing={40}>
            <Payment />
            <PaymentDetail title="Total Accounts" />
          </Stack>
        </Stack>
      </Stack>
    </FormProvider>
  )
}

export default ResellPage

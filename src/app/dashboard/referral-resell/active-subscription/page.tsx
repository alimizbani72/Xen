'use client'

import BreadCrumbs from '@/app/_components/Breadcrumb'
import { RHFTextField } from '@/components/HookForm'
import FormProvider from '@/components/HookForm/form-provider'
import { RHFSelect } from '@/components/HookForm/rhf-select'
import { getFontValue } from '@/utils'
import { Box, Button, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'

const breadCrumbsItems = [
  { href: '/dashboard/referral-resell/', label: 'Referral & Resell' },
  { href: '#', label: 'Active Subscription' },
]
const Page = () => {
  const methods = useForm({
    mode: 'onSubmit',
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods
  const onSubmit = handleSubmit(async data => {})
  return (
    <Stack px={8} pb={4} height={'100%'} minHeight={{ xs: 'calc(100dvh - 160px)', lg: 'unset' }} id="sssss">
      <BreadCrumbs items={breadCrumbsItems} />
      <FormProvider methods={methods} onSubmit={onSubmit} sx={{ width: '100%', height: '100%' }}>
        <Stack width="100%" height="100%" justifyContent="center" alignItems="center">
          <Stack maxWidth={{ sm: 468 }} width="100%">
            <Box
              sx={{
                ...getFontValue({ xs: 23, md: 40 }, 700),
                color: '#ffffff',
                mb: { xs: 10, md: 15 },
                textAlign: 'center',
              }}
            >
              Active Subscription
            </Box>
            <RHFSelect label="Plan" name="plan" sx={{ mb: 7, width: '100%' }} />
            <RHFTextField label="Account E-mail/Username" name="username" fullWidth sx={{ mb: 7 }} />
            <Button>Submit</Button>
            <Box sx={{ ...getFontValue({ xs: 12, md: 15 }, 500), color: '#FF3B30', mt: 4, textAlign: 'center' }}>
              No Account Found !
            </Box>
          </Stack>
        </Stack>
      </FormProvider>
    </Stack>
  )
}

export default Page

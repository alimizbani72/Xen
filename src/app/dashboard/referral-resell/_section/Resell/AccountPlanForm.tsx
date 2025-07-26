'use client'

import { RHFTextField } from '@/components/HookForm'
import FormProvider from '@/components/HookForm/form-provider'
import { RHFSelect } from '@/components/HookForm/rhf-select'
import { getFontValue } from '@/utils'
import { Box, Button, MenuItem, Select, Stack, TextField } from '@mui/material'
import Link from 'next/link'
import { Controller, useForm } from 'react-hook-form'

export const AccountPlanForm = () => {
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
      <Stack justifyContent="space-between" sx={{ height: '100%', maxWidth: { xl: 490 } }}>
        <Stack spacing={3.5}>
          <Stack direction={{ xs: 'column', xl: 'row' }} spacing={7}>
            <RHFSelect name="plan" label="Unassigned Accounts" />
            <Stack spacing={1}>
              <Box sx={{ ...getFontValue(16, 500), color: '#ffffff' }}>Customer E-mail</Box>
              <RHFTextField name="accountCount" label="" placeholder="3" size="small" sx={{ minWidth: 200 }} />
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={3} mt={7}>
          <Link href="referral-resell/resell">
            <Button size="small">Assign</Button>
          </Link>
          <Link href="referral-resell/resell">
            <Button size="small" color="info">
              Manage Account
            </Button>
          </Link>
        </Stack>
      </Stack>
    </FormProvider>
  )
}

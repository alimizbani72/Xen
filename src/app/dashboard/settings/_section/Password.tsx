'use client'

import { RHFTextField } from '@/components/HookForm'
import FormProvider from '@/components/HookForm/form-provider'
import { getFontValue } from '@/utils'
import { Box, Button, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'

export const Password = () => {
  const methods = useForm({
    mode: 'onSubmit',
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods
  const onSubmit = handleSubmit(async data => {})
  return (
    <Stack pt={6}>
      <Box sx={{ ...getFontValue({ xs: 24, md: 32 }, 700), color: '#FFFFFF', mb: 7 }}>Password</Box>
      <FormProvider methods={methods} onSubmit={onSubmit} sx={{ gap: 5, height: '100%', flex: { xs: 1, xl: 1.8 } }}>
        <Stack direction={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'flex-start', md: 'flex-end' }} spacing={10}>
          <Stack direction={'column'} mt={6.5} spacing={10} flex={1} width="100%">
            <RHFTextField
              name="password"
              type="password"
              label="Current Password"
              placeholder="Enter Your Current Password"
              sx={{ maxWidth: { md: 468 } }}
            />
            <RHFTextField
              name="newPassword"
              label="New Password"
              placeholder="Enter Your New Password"
              type="password"
              sx={{ maxWidth: { md: 468 } }}
            />
          </Stack>
          <Stack flex={1} width="100%">
            <RHFTextField
              name="confirmPassword"
              label="Re-type New Password"
              placeholder="Re-type New Password"
              type="password"
              sx={{ maxWidth: { md: 468 } }}
            />
          </Stack>
        </Stack>
        <Button type="submit" sx={{ mt: 9, maxWidth: { md: 200 } }}>
          Change Password
        </Button>
      </FormProvider>
    </Stack>
  )
}

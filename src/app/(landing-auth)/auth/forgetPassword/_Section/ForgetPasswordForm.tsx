import { GoogleSignin } from '@/app/(landing-auth)/auth/_components/GoogleSignin'
import { OrDivider } from '@/app/(landing-auth)/auth/_components/OrDivider'
import { RHFTextField } from '@/components/HookForm'
import FormProvider from '@/components/HookForm/form-provider'
import { useYupValidationResolver } from '@/hooks'
import { getFontValue } from '@/utils'
import { Box, Button, Stack } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const confirmEmailSchema = yup.object({
  email: yup.string().email().required(),
})
const setPasswordSchema = yup.object({
  code: yup.string().required('Code is required'),
  newPassword: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
})

const ForgetPasswordForm = () => {
  const [step, setStep] = useState<'ConfirmEmail' | 'SetPassword'>('ConfirmEmail')
  const isConfirmEmailStep = step === 'ConfirmEmail'

  const schema = isConfirmEmailStep ? confirmEmailSchema : setPasswordSchema
  const resolver = useYupValidationResolver(schema as yup.AnyObjectSchema)
  const methods = useForm({
    resolver,
    mode: 'onSubmit',
  })

  const { handleSubmit } = methods
  const onSubmit = handleSubmit(async data => {
    if (isConfirmEmailStep) setStep('SetPassword')
  })

  return (
    <Stack maxWidth={468} width={'100%'}>
      <FormProvider methods={methods} onSubmit={onSubmit} sx={{ gap: 5 }}>
        <Stack gap={4}>
          {isConfirmEmailStep ? (
            <>
              <RHFTextField name="email" label="Email/Username" placeholder="Enter Your Mail/Username" />

              <Button color="secondary" type="submit" sx={{ my: 2 }}>
                Next
              </Button>
              <Box sx={{ ...getFontValue(16, 400), color: '#8F8F8F', textAlign: 'center' }}>
                Do you Have Account?{' '}
                <Box component={Link} color="#FFFFFF" href="/auth/login">
                  Login Here
                </Box>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ ...getFontValue(24, 600), color: '#6B72FF', mb: 8, textAlign: 'center' }}>
                Code Successfully Sent To Your mail !
              </Box>
              <RHFTextField name="code" label="Your Code" placeholder="Enter Your Code" />
              <RHFTextField name="newPassword" label="New Password" placeholder="Enter Your New Password" />
              <Button color="secondary" type="submit" sx={{ my: 2 }}>
                Submit
              </Button>
              <Box sx={{ ...getFontValue(16, 400), color: '#8F8F8F', textAlign: 'center' }}>
                Not Received Mail?{' '}
                <Box color="#FFFFFF" component="span">
                  Resend Code
                </Box>
              </Box>
            </>
          )}
        </Stack>
      </FormProvider>
    </Stack>
  )
}

export default ForgetPasswordForm

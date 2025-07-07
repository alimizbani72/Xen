import { GoogleSignin } from '@/app/(landing-auth)/auth/_components/GoogleSignin'
import { RHFTextField } from '@/components/HookForm'
import FormProvider from '@/components/HookForm/form-provider'
import { Icon } from '@/components/Icon'
import { useApiMutation, useYupValidationResolver } from '@/hooks'
import { getFontValue } from '@/utils'
import { Box, Button, Stack } from '@mui/material'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

let userSchema = yup.object({
  email: yup.string().email().required(),
  username: yup.string().required(),
  referralCode: yup.string(),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  confirmPassword: yup
    .string()
    .required('Please Re-type your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
})

const RegisterForm = () => {
  const resolver = useYupValidationResolver(userSchema)
  const methods = useForm({
    resolver,
    mode: 'onSubmit',
  })

  const { isPending, mutateAsync } = useApiMutation()

  const { handleSubmit } = methods
  const onSubmit = handleSubmit(async data => {
    mutateAsync({
      url: 'http://185.207.106.81/auth/register',
      method: 'POST',
      data: {
        username: data.username,
        email: data.email,
        password: data.password,
        referal_code: data.referralCode,
      },
    })
  })

  return (
    <Stack maxWidth={468} width={'100%'}>
      <GoogleSignin />
      <Box
        sx={{
          '&::before': {
            content: '""',
            width: 'calc(50% - 30px)',
            bgcolor: '#3D3D3D',
            height: '1px',
            position: 'relative',
            top: 15,
            display: 'block',
          },
          '&::after': {
            content: '""',
            width: 'calc(50% - 30px)',
            bgcolor: '#3D3D3D',
            height: '1px',
            position: 'relative',
            top: -16,
            right: 'calc(-50% - 30px)',
            display: 'block',
          },
          my: 7,
          color: '#3D3D3D',
          ...getFontValue(20, 400),
          textAlign: 'center',
        }}
      >
        Or
      </Box>

      <FormProvider methods={methods} onSubmit={onSubmit} sx={{ gap: 5 }}>
        <Stack spacing={3.5}>
          <RHFTextField name="email" label="Email" placeholder="Enter Your Mail" />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <RHFTextField name="username" label="Username" placeholder="Enter Your Username" sx={{ flex: 1.5 }} />
            <RHFTextField name="referralCode" label="Referral Code" placeholder="Optional" sx={{ flex: 1 }} />
          </Stack>
          <RHFTextField name="password" label="Password" placeholder="Enter Your Password" type="password" />
          <RHFTextField
            name="confirmPassword"
            label="Re-type Password"
            placeholder="Re-type Password"
            type="password"
          />
          <Box sx={{ ...getFontValue(16, 400), color: '#8F8F8F', px: 4, textAlign: 'center' }}>
            By signing up, you confirm that you have read and agreed to our{' '}
            <Box component={Link} href="" color="#9398FF">
              Terms of Service
            </Box>{' '}
            and{' '}
            <Box component={Link} href="" color="#9398FF">
              Privacy Policy
            </Box>
            .
          </Box>
          <Button color="secondary" type="submit">
            Register
          </Button>
          <Box sx={{ ...getFontValue(16, 400), color: '#8F8F8F', textAlign: 'center' }}>
            Do You Have Account?{' '}
            <Box component={Link} color="#FFFFFF" href="/auth/login">
              Login Here
            </Box>
          </Box>
        </Stack>
      </FormProvider>
    </Stack>
  )
}

export default RegisterForm

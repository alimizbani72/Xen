'use client'
import { GoogleSignin } from '@/app/(landing-auth)/auth/_components/GoogleSignin'
import { OrDivider } from '@/app/(landing-auth)/auth/_components/OrDivider'
import { RHFTextField } from '@/components/HookForm'
import FormProvider from '@/components/HookForm/form-provider'
import { useYupValidationResolver } from '@/hooks'
import { getFontValue } from '@/utils'
import { Box, Button, Stack } from '@mui/material'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as yup from 'yup'

let userSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
})

const LoginForm = () => {
  const router = useRouter()
  const resolver = useYupValidationResolver(userSchema)
  const methods = useForm({
    resolver,
    mode: 'onSubmit',
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods
  const onSubmit = handleSubmit(async data => {
    const response = await signIn('SIGN_IN', {
      email: data?.email,
      password: data?.password,
      redirect: false,
    })

    if (response?.ok) {
      router.push('/dashboard')
    } else {
      toast.error('The Email or Password is incorrect.')
    }
  })

  return (
    <Stack maxWidth={468} width={'100%'}>
      <GoogleSignin />
      <OrDivider />

      <FormProvider methods={methods} onSubmit={onSubmit} sx={{ gap: 5 }}>
        <Stack gap={4}>
          <RHFTextField name="email" label="Email" placeholder="Enter Your Mail" />

          <RHFTextField name="password" label="Password" placeholder="Enter Your Password" type="password" />
          <Button color="secondary" type="submit" sx={{ my: 2 }} loading={isSubmitting} disabled={isSubmitting}>
            Login
          </Button>
          <Box sx={{ ...getFontValue(16, 400), color: '#8F8F8F', textAlign: 'center' }}>
            Don’t Have Account?{' '}
            <Box component={Link} color="#FFFFFF" href="/auth/register">
              Register Here
            </Box>
          </Box>
          <Box sx={{ ...getFontValue(16, 400), color: '#8F8F8F', textAlign: 'center' }}>
            Forget Your Password? ?{' '}
            <Box component={Link} color="#FFFFFF" href="/auth/forgetPassword">
              Click Here
            </Box>
          </Box>
        </Stack>
      </FormProvider>
    </Stack>
  )
}

export default LoginForm

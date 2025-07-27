'use client'
import { RHFTextField } from '@/components/HookForm'
import FormProvider from '@/components/HookForm/form-provider'
import { useApiMutation } from '@/hooks'
import { getFontValue } from '@/utils'
import { Button, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

const WithdrawForm = () => {
  const router = useRouter()
  const { mutateAsync: withdrawMutate } = useApiMutation()
  const methods = useForm({
    mode: 'onSubmit',
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
    setValue,
    watch,
  } = methods
  const amount = watch('amount')
  const address = watch('address')

  const isDisabled = !amount || !address
  const onSubmit = handleSubmit(async data => {
    withdrawMutate({
      url: 'wallet/withdraw',
      method: 'POST',
      data: {
        wallet_address: data.address,
        amount: data.amount,
      },
    }).then(response => router.push('/dashboard/wallet/withdraw/success'))
  })

  return (
    <FormProvider methods={methods} onSubmit={onSubmit} sx={{ gap: 8, height: '100%' }}>
      <Stack spacing={8}>
        <Stack width="100%">
          <RHFTextField
            name="amount"
            label="Set Your Deposit Amount"
            placeholder="Enter Your Amount"
            slotProps={{
              input: {
                endAdornment: (
                  <Stack direction="row" spacing={3} alignItems="center" sx={{ pr: 5 }}>
                    <Stack onClick={() => setValue('amount', '100')}>
                      <Typography sx={{ ...getFontValue(16.5, 400), color: '#4750FF' }}>MAX</Typography>
                    </Stack>

                    <Typography sx={{ color: '#262C53', ...getFontValue(16.5, 400) }}>USDT</Typography>
                  </Stack>
                ),
              },
            }}
          />
        </Stack>
        <Stack width="100%">
          <RHFTextField name="address" label="Your USDT-TRC20 Wallet Address" placeholder="Enter Your Address" />
        </Stack>
      </Stack>
      <Button type="submit" sx={{ mt: 2 }} disabled={isDisabled} loading={isSubmitting}>
        Submit The Request
      </Button>
    </FormProvider>
  )
}

export default WithdrawForm

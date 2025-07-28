'use client'

import { Icon } from '@/components/Icon'
import { getFontValue } from '@/utils'
import { Button, Stack, Typography } from '@mui/material'
import { useParams, useRouter } from 'next/navigation'

export const State = () => {
  const params = useParams<{ state: string }>()
  const router = useRouter()
  const isSuccess = params?.state === 'success'
  return (
    <Stack justifyContent="center" alignItems="center" spacing={4} height={'100%'} sx={{ textAlign: 'center' }}>
      <Icon name={isSuccess ? 'tick' : 'close-circle'} size={191} color={isSuccess ? undefined : '#D52121'} />
      <Typography sx={{ ...getFontValue({ xs: 20, md: 54 }, 700), color: 'white' }}>
        Payment {isSuccess ? 'Successful' : ' Failed'}!
      </Typography>
      <Typography sx={{ ...getFontValue({ xs: 14, md: 20 }, 300), color: '#49549C' }}>
        {isSuccess ? 'Thanks For Choosing us ♡' : 'If you have any issues, you can contact our online support.'}.
      </Typography>
      <Button onClick={() => router.push('/dashboard')}>Back</Button>
    </Stack>
  )
}

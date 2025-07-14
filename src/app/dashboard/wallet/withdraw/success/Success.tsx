'use client'
import { Icon } from '@/components/Icon'
import { getFontValue } from '@/utils'
import { Button, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

const Success = () => {
  const router = useRouter()
  return (
    <Stack justifyContent="center" alignItems="center" spacing={4} height={'100%'} sx={{ textAlign: 'center' }}>
      <Icon name="tick" size={191} />
      <Typography sx={{ ...getFontValue({ xs: 20, md: 54 }, 700), color: 'white' }}>Request Submitted!</Typography>
      <Typography sx={{ ...getFontValue({ xs: 14, md: 20 }, 300), color: '#49549C' }}>
        Your funds will be credited to your wallet within 48 hours.
      </Typography>
      <Button onClick={() => router.back()}>Back</Button>
    </Stack>
  )
}

export default Success

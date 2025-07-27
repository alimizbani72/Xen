'use client'

import { getFontValue } from '@/utils'
import { Box, Stack } from '@mui/material'
import { useSession } from 'next-auth/react'

export const Information = () => {
  const { data } = useSession()

  return (
    <Stack mt={12}>
      <Box sx={{ ...getFontValue({ xs: 24, md: 32 }, 700), color: '#FFFFFF', mb: 6 }}>Information</Box>
      <Stack direction="row" spacing={20}>
        <Stack spacing={1}>
          <Box sx={{ ...getFontValue({ xs: 16, md: 22 }, 500), color: '#49549C' }}>Username</Box>
          <Box sx={{ ...getFontValue({ xs: 16, md: 22 }, 500), color: '#FFFFFF' }}>{data?.user?.username}</Box>
        </Stack>
        <Stack spacing={1}>
          <Box sx={{ ...getFontValue({ xs: 16, md: 22 }, 500), color: '#49549C' }}>Mail</Box>
          <Box sx={{ ...getFontValue({ xs: 16, md: 22 }, 500), color: '#FFFFFF' }}>{data?.user?.email}</Box>
        </Stack>
      </Stack>
    </Stack>
  )
}

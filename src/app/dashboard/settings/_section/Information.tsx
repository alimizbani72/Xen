'use client'

import { getFontValue } from '@/utils'
import { Box, Stack } from '@mui/material'

export const Information = () => {
  return (
    <Stack mt={12}>
      <Box sx={{ ...getFontValue({ xs: 24, md: 32 }, 700), color: '#FFFFFF', mb: 6 }}>Information</Box>
      <Stack direction="row" spacing={20}>
        <Stack spacing={1}>
          <Box sx={{ ...getFontValue({ xs: 16, md: 22 }, 500), color: '#49549C' }}>Username</Box>
          <Box sx={{ ...getFontValue({ xs: 16, md: 22 }, 500), color: '#FFFFFF' }}>Test</Box>
        </Stack>
        <Stack spacing={1}>
          <Box sx={{ ...getFontValue({ xs: 16, md: 22 }, 500), color: '#49549C' }}>Mail</Box>
          <Box sx={{ ...getFontValue({ xs: 16, md: 22 }, 500), color: '#FFFFFF' }}>Test@gmail.com</Box>
        </Stack>
      </Stack>
    </Stack>
  )
}

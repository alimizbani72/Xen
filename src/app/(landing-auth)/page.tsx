'use client'
import CurvedLinesBackground from '@/components/GridBackground'
import DustBackground from '@/components/DustBackground'
import { Icon } from '@/components/Icon'
import { Box, TextField } from '@mui/material'
import GridBackgroundAbsolute from '@/components/GridBackground'

export default function Home() {
  return (
    <Box>
      <TextField placeholder="Test field placeholder" type="number" />

      <Box height={850} width="100%" position="relative">
        <GridBackgroundAbsolute />
        <Box color="#fff">Go Fast. Stay Safe. Stay Xen.</Box>
      </Box>
      <Box height={850} width="100%" position="relative">
        <GridBackgroundAbsolute />
        <Box color="#fff">
          Go Fast. Stay Safe. Stay Xen. o Fast. Stay Safe. Stay Xen. o Fast. Stay Safe. Stay Xen. o Fast. Stay Safe.
          Safe. Stay Xen. o Fast. Stay Safe. Stay Xen. o Fast. Stay Safe. Stay Xen.
        </Box>
      </Box>
      <Box height={850} width="100%" position="relative">
        <GridBackgroundAbsolute />
        <Box color="#fff">Go Fast. Stay Safe. Stay Xen.</Box>
      </Box>
      <Box color="#fff">Go Fast. Stay Safe. Stay Xen.</Box>
    </Box>
  )
}

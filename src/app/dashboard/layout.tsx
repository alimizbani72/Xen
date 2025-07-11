import { Stack } from '@mui/material'
import { PropsWithChildren } from 'react'
import Sidebar from '../_components/Sidebar'

export default async function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <Stack direction="row" spacing={7} p={10}>
      <Sidebar />
      <Stack flex="1 1 auto" minWidth={0} border="1px solid #80839B" borderRadius={5}>
        {children}
      </Stack>
    </Stack>
  )
}

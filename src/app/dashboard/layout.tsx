import Sidebar from '@/app/_components/Sidebar'
import { Stack } from '@mui/material'
import { PropsWithChildren } from 'react'

export default async function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <Stack direction="row" spacing={{ lg: 7 }} px={{ xl: 23, lg: 10, xs: 0 }} py={{ xl: 23, lg: 10, xs: 15 }}>
      <Sidebar />
      <Stack
        py={5}
        flex="1 1 auto"
        minWidth={0}
        border={{ lg: '1px solid #80839B' }}
        borderRadius={5}
        height={{ lg: 'calc(100dvh - 80px)', xl: 'calc(100dvh - 184px)' }}
        sx={{ scrollbarColor: { lg: '#262C53 #010225' }, scrollbarWidth: { lg: 'thin' } }}
        overflow="auto"
      >
        {children}
      </Stack>
    </Stack>
  )
}

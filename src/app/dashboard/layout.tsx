import Sidebar from '@/app/_components/Sidebar'
import { Stack } from '@mui/material'
import { PropsWithChildren } from 'react'

export default async function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <Stack direction="row" spacing={{ lg: 7 }} px={{ xxl: 23, lg: 10, xs: 0 }} py={{ xxl: 23, lg: 10, xs: 15 }}>
      <Sidebar />
      <Stack
        py={5}
        flex="1 1 auto"
        minWidth={0}
        border={{ lg: '1px solid #80839B' }}
        borderRadius={5}
        height={{ lg: 'calc(100dvh - 80px)', xxl: 'calc(100dvh - 184px)' }}
        sx={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none', '&::-webkit-scrollbar': { display: 'none' } }}
        overflow="auto"
      >
        {children}
      </Stack>
    </Stack>
  )
}

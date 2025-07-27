import Sidebar from '@/app/_components/Sidebar'
import { Stack } from '@mui/material'
import { PropsWithChildren } from 'react'

export default async function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <Stack
      direction="row"
      spacing={{ lg: 7 }}
      px={{ lg: 10, xs: 0 }}
      py={{ lg: 10, xs: 15 }}
      sx={{
        background: {
          xs: 'linear-gradient(187.72deg, rgba(60, 54, 153, 0.2) 0%, rgba(0, 0, 0, 0.2) 88.51%);',
          lg: 'unset',
        },
      }}
    >
      <Sidebar />
      <Stack
        py={5}
        flex="1 1 auto"
        minWidth={0}
        border={{ lg: '1px solid #80839B' }}
        borderRadius={5}
        height={{ lg: 'calc(100dvh - 80px)' }}
        sx={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
          background: { lg: 'linear-gradient(187.72deg, rgba(60, 54, 153, 0.2) 0%, rgba(0, 0, 0, 0.2) 88.51%);' },
        }}
        overflow="auto"
        minHeight={{ xs: '100%', md: 'unset' }}
      >
        {children}
      </Stack>
    </Stack>
  )
}

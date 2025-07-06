'use client'
import { mainRoutes } from '@/constants/mainRoutes'
import { usePathname } from 'next/navigation'
import { Box } from '@mui/material'
import Link from 'next/link'
import { getFontValue } from '@/utils'

const RoutesSection = () => {
  const pathname = usePathname()
  return (
    <>
      {mainRoutes.map(route => (
        <Box
          component={Link}
          key={route.href}
          color={pathname === route.href ? 'white' : '#868686'}
          sx={{
            ...getFontValue(16, 400),
            maxWidth: 100,
            overflowWrap: 'break-word',
            textDecoration: 'none',
            '&:hover': {
              color: 'common.white',
            },
          }}
          href={route.href}
        >
          {route.label}
        </Box>
      ))}
    </>
  )
}

export default RoutesSection

'use client'
import { mainRoutes } from '@/app/configs/mainRoutes'
import { usePathname } from 'next/navigation'
import Link from '../Link'

const RoutesSection = () => {
  const pathname = usePathname()
  return (
    <>
      {mainRoutes.map(route => (
        <Link
          key={route.href}
          color={pathname === route.href ? 'white' : '#868686'}
          sx={{
            fontWeight: 400,
            maxWidth: 100,
            overflowWrap: 'break-word',
            '&:hover': {
              color: 'common.white',
            },
          }}
          underline="none"
          href={route.href}
        >
          {route.label}
        </Link>
      ))}
    </>
  )
}

export default RoutesSection

import { Icon } from '@/components/Icon'
import { getFontValue } from '@/utils'
import { Box, Breadcrumbs as BreadcrumbsMui } from '@mui/material'
import Link from 'next/link'
interface BreadCrumbsProps {
  items: { href: string; label: string }[]
}

const BreadCrumbs = ({ items }: BreadCrumbsProps) => {
  const allItems = [{ label: 'Dashboard', href: '/dashboard' }, ...items]

  return (
    <BreadcrumbsMui separator={<Icon name="chevron-left" color="#262C53" />}>
      {allItems.map((item, index) => {
        const isLast = index === allItems.length - 1

        return isLast ? (
          <Box key={item.label} sx={{ ...getFontValue({ xs: 14, md: 19.5 }), color: '#fff' }}>
            {item.label}
          </Box>
        ) : (
          <Link key={item.label} href={item.href} style={{ textDecoration: 'none' }}>
            <Box sx={{ ...getFontValue({ xs: 14, md: 19.5 }), color: '#262C53' }}>{item.label}</Box>
          </Link>
        )
      })}
    </BreadcrumbsMui>
  )
}

export default BreadCrumbs

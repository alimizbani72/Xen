import { Icon } from '@/components/Icon'
import { getFontValue } from '@/utils'
import { Box, Breadcrumbs as BreadcrumbsMui } from '@mui/material'
import Link from 'next/link'

interface BreadCrumbsProps {
  items: { href: string; label: string }[]
}

const BreadCrumbs = ({ items }: BreadCrumbsProps) => {
  return (
    <BreadcrumbsMui separator={<Icon name="chevron-left" color="#262C53" />}>
      {[{ label: 'Dashboard', href: '/dashboard' }, ...items].map((item, index, array) => (
        <Box
          key={item.label}
          component={index < array.length - 1 ? Link : 'div'}
          href={item.href}
          color={index < array.length - 1 ? '#262C53' : '#ffffff'}
          sx={{ ...getFontValue({ xs: 14, md: 19.5 }) }}
        >
          {item.label}
        </Box>
      ))}
    </BreadcrumbsMui>
  )
}
export default BreadCrumbs

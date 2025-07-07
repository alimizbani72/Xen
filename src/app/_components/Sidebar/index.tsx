'use client'
import { Icon } from '@/components/Icon'
import { IconType } from '@/components/Icon/iconNames'
import { getFontValue } from '@/utils'
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  useMediaQuery,
} from '@mui/material'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const menus = [
  { label: 'Home', icon: 'home', href: '/dashboard' },
  { label: 'Wallet', icon: 'wallet', href: '/wallet' },
  { label: 'Buy Subscription', icon: 'subscription', href: '/subscription' },
  { label: 'Referral & Resell', icon: 'refferal', href: '/referral' },
  { label: 'Settings', icon: 'setting', href: '/settings' },
]

const Sidebar = () => {
  const pathname = usePathname()
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('lg'))
  const [openDrawer, setOpenDrawer] = useState(true)
  const open = isMobile ? false : openDrawer

  const handleSignout = () => {
    signOut({ redirect: true, callbackUrl: '/' })
  }

  return (
    <Stack
      minHeight="calc(100dvh - 80px)"
      border="1px solid #80839B"
      borderRadius={5}
      minWidth={open ? 280 : 90}
      maxWidth={360}
      justifyContent="space-between"
      width={open ? 'clamp(200px, 25vw, 360px)' : ''}
      flex="0 0 auto"
    >
      <Box>
        <Box p={6} onClick={() => setOpenDrawer(!open)} sx={{ cursor: 'pointer' }}>
          <Image src={'/assets/svg/logo.svg'} width={open ? 90 : 40} height={45} alt="Xen" />
        </Box>
        <Divider sx={{ bgcolor: '#232246' }} />
        <Stack p={6} spacing={6}>
          {menus?.map(menu => (
            <Stack
              key={menu.label}
              direction="row"
              spacing={4}
              justifyContent={open ? 'flex-start' : 'center'}
              sx={{ cursor: 'pointer' }}
            >
              <Icon name={menu.icon as IconType} color={pathname === menu.href ? '#6B72FF' : 'white'} />
              {open && (
                <Box sx={{ ...getFontValue(19, 500) }} color={pathname === menu.href ? '#6B72FF' : 'white'}>
                  {menu.label}
                </Box>
              )}
            </Stack>
          ))}
        </Stack>
      </Box>
      <Box>
        <Divider sx={{ bgcolor: '#232246' }} />
        <Stack direction="row" justifyContent={open ? 'space-between' : 'center'} alignItems="center" p={4}>
          <Stack direction="row" spacing={3}>
            <Avatar sx={{ width: 50, height: 50 }}>D</Avatar>
            {open && (
              <Stack>
                <Box sx={{ ...getFontValue(19, 500), color: '#fff' }}>Danial</Box>
                <Box sx={{ ...getFontValue(12, 400), color: '#555555' }}>
                  Balance:{' '}
                  <Box component="span" color="#fff">
                    23$
                  </Box>
                </Box>
              </Stack>
            )}
          </Stack>
          {open && (
            <Box sx={{ cursor: 'pointer' }} onClick={handleSignout}>
              <Icon name="exit" color="#E0392F" />
            </Box>
          )}
        </Stack>
      </Box>
    </Stack>
  )
}

export default Sidebar

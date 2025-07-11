'use client'
import { Icon } from '@/components/Icon'
import { IconType } from '@/components/Icon/iconNames'
import { useApiQuery } from '@/hooks'
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
import { Session, User } from 'next-auth'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const menus = [
  { label: 'Home', icon: 'home', href: '/dashboard' },
  { label: 'Wallet', icon: 'wallet', href: 'wallet' },
  { label: 'Buy Subscription', icon: 'subscription', href: '/dashboard/subscription' },
  { label: 'Referral & Resell', icon: 'refferal', href: '/dashboard/referral-resell' },
  { label: 'Settings', icon: 'setting', href: '/dashboard/settings' },
]

const Sidebar = () => {
  const pathname = usePathname()
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('lg'))
  const [openDrawer, setOpenDrawer] = useState(isMobile ? false : true)
  const { data } = useApiQuery<Session['user']>({ url: '/my/info' })

  const handleSignout = () => {
    signOut({ redirect: true, callbackUrl: '/' })
  }

  const renderContent = () => {
    return (
      <>
        <Box>
          <Box p={{ xs: 3, md: 6 }} onClick={() => setOpenDrawer(!openDrawer)} sx={{ cursor: 'pointer' }}>
            <Image src={'/assets/svg/logo.svg'} width={openDrawer ? 90 : 40} height={45} alt="Xen" />
          </Box>
          <Divider sx={{ bgcolor: '#232246' }} />
          <Stack p={{ xs: 3, md: 6 }} spacing={{ xs: 3, md: 6 }}>
            {menus?.map(menu => (
              <Stack
                key={menu.label}
                component={Link}
                href={menu.href}
                direction="row"
                spacing={4}
                justifyContent={openDrawer ? 'flex-start' : 'center'}
                sx={{ cursor: 'pointer' }}
              >
                <Icon name={menu.icon as IconType} color={pathname === menu.href ? '#6B72FF' : 'white'} />
                {openDrawer && (
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
          <Stack
            direction={openDrawer ? 'row' : 'column'}
            justifyContent={openDrawer ? 'space-between' : 'center'}
            alignItems="center"
            p={4}
            spacing={2}
          >
            <Stack direction="row" spacing={3}>
              <Avatar sx={{ width: 50, height: 50 }}>{data?.username?.slice(0, 1).toUpperCase()}</Avatar>
              {openDrawer && (
                <Stack>
                  <Box sx={{ ...getFontValue(19, 500), color: '#fff' }}>{data?.username || 'Username'} </Box>
                  <Box sx={{ ...getFontValue(12, 400), color: '#555555' }}>
                    Balance:{' '}
                    <Box component="span" color="#fff">
                      {data?.walletAmount || 0}$
                    </Box>
                  </Box>
                </Stack>
              )}
            </Stack>

            <Box sx={{ cursor: 'pointer' }} onClick={handleSignout}>
              <Icon name="exit" color="#E0392F" />
            </Box>
          </Stack>
        </Box>
      </>
    )
  }

  if (isMobile) {
    return (
      <>
        <Box
          sx={{
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: 1000,
            bgcolor: '#000',
          }}
          onClick={() => setOpenDrawer(true)}
        >
          <Icon name="menu" size={35} />
        </Box>
        <Drawer anchor={'left'} open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <Stack
            justifyContent="space-between"
            sx={{
              width: 250,
              height: '100%',
              pt: 4,
              pb: 8,
              background:
                'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(60, 54, 153, 1) 50%, rgba(0, 0, 0, 1) 100%)',
            }}
          >
            {renderContent()}
          </Stack>
        </Drawer>
      </>
    )
  }

  return (
    <Stack
      height={{ xs: 'calc(100dvh - 80px)', xl: 'calc(100dvh - 184px)' }}
      border="1px solid #80839B"
      borderRadius={5}
      minWidth={openDrawer ? 280 : 90}
      maxWidth={360}
      justifyContent="space-between"
      width={openDrawer ? 'clamp(200px, 25vw, 360px)' : ''}
      flex="0 0 auto"
      position="sticky"
      top={{ xs: 40, xl: 92 }}
    >
      {renderContent()}
    </Stack>
  )
}

export default Sidebar

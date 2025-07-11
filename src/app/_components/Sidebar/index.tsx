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
  const downLg = useMediaQuery(theme => theme.breakpoints.down('lg'))
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'))
  const [openDrawer, setOpenDrawer] = useState(isMobile ? false : true)
  const { data } = useApiQuery<Session['user']>({ url: '/my/info' })

  const open = downLg && !isMobile ? false : openDrawer

  const handleSignout = () => {
    signOut({ redirect: true, callbackUrl: '/' })
  }

  const renderContent = () => {
    return (
      <>
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
          <Stack
            direction={open ? 'row' : 'column'}
            justifyContent={open ? 'space-between' : 'center'}
            alignItems="center"
            p={4}
            spacing={2}
          >
            <Stack direction="row" spacing={3}>
              <Avatar sx={{ width: 50, height: 50 }}>{data?.username?.slice(0, 1).toUpperCase()}</Avatar>
              {open && (
                <Stack>
                  <Box sx={{ ...getFontValue(19, 500), color: '#fff' }}>{data?.username}</Box>
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
      minHeight="calc(100dvh - 80px)"
      border="1px solid #80839B"
      borderRadius={5}
      minWidth={open ? 280 : 90}
      maxWidth={360}
      justifyContent="space-between"
      width={open ? 'clamp(200px, 25vw, 360px)' : ''}
      flex="0 0 auto"
    >
      {renderContent()}
    </Stack>
  )
}

export default Sidebar

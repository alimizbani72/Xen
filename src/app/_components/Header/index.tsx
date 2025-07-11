'use client'

import { Icon } from '@/components/Icon'
import { mainRoutes } from '@/constants/mainRoutes'
import { getFontValue } from '@/utils'
import { Box, Button, Drawer, List, ListItem, ListItemButton, Stack, useMediaQuery } from '@mui/material'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

const Header = () => {
  const router = useRouter()
  const session = useSession()
  const pathname = usePathname()
  const [openDrawer, setOpenDrawer] = useState(false)
  const isTabletOrWeb = useMediaQuery(theme => theme.breakpoints.up('md'))
  if (isTabletOrWeb)
    return (
      <Stack
        direction="row"
        sx={{
          position: 'sticky',
          direction: 'row',
          maxWidth: 1110,
          width: 'calc(100% - 32px)',
          border: '1px solid #80839B',
          borderRadius: 50,
          justifyContent: 'space-between',
          alignItems: 'center',
          top: 50,
          left: 'calc(50% - 555px)',
          p: 3,
          zIndex: 1000,
          mx: 4,
          mb: 13,
          background: 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(60, 54, 153, 1) 50%, rgba(0, 0, 0, 1) 100%)',
        }}
      >
        <Image src={'/assets/svg/logo.svg'} alt="Xen" width={83} height={41} />
        <Stack direction="row" spacing={7}>
          {mainRoutes?.map(link => (
            <Box
              component={Link}
              href={link.href}
              key={link.label}
              sx={{ ...getFontValue(), color: pathname === link.href ? 'white' : '#626585', textDecoration: 'none' }}
            >
              {link.label}
            </Box>
          ))}
        </Stack>
        <Button
          size="small"
          sx={{ py: 3 }}
          onClick={() => router?.push(session?.data?.token ? '/dashboard' : '/auth/login')}
        >
          {session?.data?.token ? 'Dashboard' : 'Login'}
        </Button>
      </Stack>
    )

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
          sx={{
            width: 250,
            height: '100%',
            pt: 4,
            pb: 8,
            background:
              'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(60, 54, 153, 1) 50%, rgba(0, 0, 0, 1) 100%)',
          }}
          role="presentation"
          onClick={() => setOpenDrawer(false)}
          justifyContent="space-between"
        >
          <List>
            {mainRoutes.map(link => (
              <ListItem key={link.label}>
                <ListItemButton
                  LinkComponent={Link}
                  href={link.href}
                  sx={{ ...getFontValue(16), color: '#fff', textDecoration: 'none' }}
                >
                  {link.label}
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Button sx={{ mx: 4 }} onClick={() => router?.push(session?.data?.token ? '/dashboard' : '/auth/login')}>
            {session?.data?.token ? 'Dashboard' : 'Login'}
          </Button>
        </Stack>
      </Drawer>
    </>
  )
}

export default Header

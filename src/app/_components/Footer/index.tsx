'use client'
import { Icon } from '@/components/Icon'
import { IconType } from '@/components/Icon/iconNames'
import { socialIcons } from '@/constants/SocialIcons'
import { IconButton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import CustomButton from './CustomButton'
import RoutesSection from './RoutesSection'
import { usePathname } from 'next/navigation'

const FooterSection = () => {
  const pathname = usePathname()

  return (
    <>
      {!pathname?.includes('auth') && (
        <Stack
          alignItems="center"
          sx={{
            boxShadow: '0px 0px 100px 100px rgba(27,9,189,0.7)',
          }}
          id="download"
        >
          <Stack
            sx={{
              boxShadow: '-1px -200px 400px 130px rgba(27,9,189,1)',
            }}
          />
        </Stack>
      )}
      <Stack bgcolor={'#040015'} width={'100%'}>
        <Stack
          py={22.5}
          m={'auto'}
          maxWidth={'879px'}
          px={10}
          width={'100%'}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: { xs: 20, md: 'unset' },
          }}
        >
          {/* logo  */}
          <Stack spacing={8}>
            <Stack alignItems={{ xs: 'center', md: 'unset' }}>
              <Image src={'/assets/svg/logo.svg'} alt="Xen" width={109} height={54} />
            </Stack>
            <Stack spacing={4}>
              <CustomButton icon="googlePlay">Download From AppStore</CustomButton>
              <CustomButton icon="appStore">Download From Googleplay</CustomButton>
            </Stack>
          </Stack>
          {/* pages  */}
          <Stack spacing={8}>
            <Typography
              sx={{ fontWeight: '700', fontSize: '16px' }}
              color="white"
              textAlign={{ xs: 'center', md: 'unset' }}
            >
              Pages
            </Typography>
            <Stack spacing={4} textAlign={{ xs: 'center', md: 'unset' }}>
              <RoutesSection />
            </Stack>
          </Stack>
          {/* contacts  */}
          <Stack spacing={8}>
            <Typography
              sx={{ fontWeight: '700', fontSize: '16px' }}
              color="white"
              textAlign={{ xs: 'center', md: 'unset' }}
            >
              Contact
            </Typography>
            <Stack spacing={4}>
              <Typography fontWeight={'500'} fontSize={'16px'} color="white">
                Support@Xen.com
              </Typography>
              <Stack direction="row" spacing={4}>
                {socialIcons.map(({ icon, href }, index) => (
                  <IconButton
                    key={index}
                    component={href ? 'a' : 'button'}
                    href={href || undefined}
                    target={href ? '_blank' : undefined}
                    rel={href ? 'noopener noreferrer' : undefined}
                    sx={{
                      bgcolor: '#000946',
                      border: '1px solid #9398FF',
                      borderRadius: '50%',
                      padding: 3,
                      '&:hover': {
                        bgcolor: '#1a1e70',
                      },
                    }}
                  >
                    <Icon name={icon as IconType} size={14} />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack bgcolor={'#0F1221'} py={3}>
        <Typography color="#555555" textAlign={'center'} fontWeight={'300'} fontSize={'14px'}>
          © All Copyrights Reserved For Xen
        </Typography>
      </Stack>
    </>
  )
}

export default FooterSection

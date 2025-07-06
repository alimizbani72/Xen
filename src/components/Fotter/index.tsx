import { socialIcons } from '@/app/configs/SocialIcons'
import { IconButton, Stack, Typography } from '@mui/material'
import { Icon } from '../Icon'
import { IconType } from '../Icon/iconNames'
import CustomButton from './CustomButton'
import RoutesSection from './RoutesSection'

const FotterSection = () => {
  return (
    <>
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
              <Icon name="logo" size={60} color="white" />
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

export default FotterSection

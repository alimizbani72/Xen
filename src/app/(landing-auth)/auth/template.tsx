import { RiveFooter } from '@/app/_components/RiveFooter'
import { Box } from '@mui/material'

const TemplateAuthPage = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <Box>
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        display={{ xs: 'none', md: 'block' }}
        sx={{
          backgroundImage: 'url(/assets/svg/curve-background.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: { md: 'center', lg: '100% 30%' },
          backgroundSize: { md: 'contain', lg: 'cover' },
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pb: 37.5,
          pt: { xs: 37.5, md: 58 },
          px: { xs: 5, sm: 0 },
          zIndex: 1,
          position: 'relative',
        }}
      >
        {children}
      </Box>
      <RiveFooter height={'100%'} />
    </Box>
  )
}

export default TemplateAuthPage

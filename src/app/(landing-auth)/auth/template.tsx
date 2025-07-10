import DustBackground from '@/components/DustBackground'
import { Box } from '@mui/material'

const TemplateAuthPage = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <Box
      position={'relative'}
      sx={{
        backgroundImage: 'url(/assets/svg/curve-background.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <DustBackground />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 37.5,
          px: { xs: 5, sm: 0 },
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default TemplateAuthPage

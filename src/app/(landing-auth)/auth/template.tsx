import { RiveFooter } from '@/app/_components/RiveFooter'
import { Box } from '@mui/material'

const TemplateAuthPage = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <Box position={'relative'} top={-124}>
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        sx={{
          backgroundImage: 'url(/assets/svg/curve-background.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 37.5,
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

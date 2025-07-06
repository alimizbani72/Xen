import { Box } from '@mui/material'

const TemplateAuthPage = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
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
  )
}

export default TemplateAuthPage

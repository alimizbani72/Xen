import { getFontValue } from '@/utils'
import { Box, Typography } from '@mui/material'

const loading = () => {
  return (
    <Box height={'100vh'} justifyContent={'center'} alignItems={'center'} display={'flex'} textAlign={'center'}>
      <Typography color="white" sx={{ ...getFontValue(30, 500) }}>
        isLoaidng...
      </Typography>
    </Box>
  )
}

export default loading

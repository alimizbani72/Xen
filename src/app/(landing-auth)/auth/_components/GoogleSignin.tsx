import { Icon } from '@/components/Icon'
import { getFontValue } from '@/utils'
import { Box } from '@mui/material'

export const GoogleSignin = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #040015 -19.13%, #000946 100%)',
        border: '1px solid #9398FF',
        color: '#9398FF',
        borderRadius: 50,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 3,
        ...getFontValue(19, 400),
      }}
    >
      <Icon name="google" color="#9398FF" size={20} sx={{ mr: 4 }} /> Sign in With Google
    </Box>
  )
}

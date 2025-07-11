import { Icon } from '@/components/Icon'
import { getFontValue } from '@/utils'
import { Stack, Typography } from '@mui/material'

const Contact = () => {
  return (
    <Stack direction={'row'} spacing={2}>
      <Icon name="headphone" size={25} color="#8F8F8F" />
      <Typography sx={{ ...getFontValue(16, 400), color: '#8F8F8F' }}>Any Problem?</Typography>

      <Typography sx={{ ...getFontValue(16, 400), color: 'white', textDecoration: 'underline' }}>
        Contact Our Support
      </Typography>
    </Stack>
  )
}

export default Contact

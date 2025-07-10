import { getFontValue } from '@/utils'
import { Button, Stack } from '@mui/material'

const NotFoundPage = () => {
  return (
    <Stack width="100%" height="100dvh" justifyContent="center" alignItems="center" spacing={5}>
      <Stack sx={{ color: '#fff', ...getFontValue(30) }}>404 </Stack>
      <Stack sx={{ color: '#fff', ...getFontValue() }}>This page could not be found.</Stack>
      <Button href="/">Back to Home</Button>
    </Stack>
  )
}

export default NotFoundPage

import { Icon } from '@/components/Icon'
import { IconType } from '@/components/Icon/iconNames'
import { getFontValue } from '@/utils'
import { Divider, Stack, SxProps } from '@mui/material'
import { PropsWithChildren } from 'react'

interface CardProps {
  title: string
  icon?: IconType
  sx?: SxProps
}

const Card = (props: PropsWithChildren<CardProps>) => {
  const { title, icon, children, sx } = props
  return (
    <Stack
      sx={{
        background:
          'linear-gradient(0deg, #130F30, #130F30),radial-gradient(64.87% 78.7% at 90.6% -18.1%, #1D1558 0%, #130F30 100%)',
        border: '2px solid #262C53',
        borderRadius: 5,
        ...sx,
      }}
      pt={4}
      pb={7.5}
      width="max-content"
    >
      <Stack spacing={2.5} px={5} direction="row" mb={3} alignItems="center">
        <Icon name={icon as IconType} size={28} />
        <Stack sx={{ color: '#6B72FF', ...getFontValue(19, 500) }}>{title}</Stack>
      </Stack>
      <Divider sx={{ bgcolor: '#232246' }} />
      <Stack px={5} height="100%">
        {children}
      </Stack>
    </Stack>
  )
}

export default Card

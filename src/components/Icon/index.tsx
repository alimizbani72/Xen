'use client'
import { Box, SxProps, Theme } from '@mui/material'
import IcoMoon from 'react-icomoon'

import { IconType } from '@/components/Icon/iconNames'
import iconSet from './selection.json'

type IconPropsType = {
  size?: number
  name: IconType
  style?: React.CSSProperties
  color?: string
  sx?: SxProps<Theme>
  disabled?: boolean
  onClick?: (event: React.MouseEvent) => void
}

const Icon = ({
  name,
  size = 24,
  onClick,
  disabled = false,
  cursor,
  color = '#6B72FF',
  sx,
  ...props
}: IconPropsType & { cursor?: string }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: cursor || (disabled ? 'not-allowed !important' : 'pointer'),
        color: color,
        ...sx,
      }}
      height={size}
    >
      <IcoMoon
        iconSet={iconSet}
        icon={name}
        size={size}
        fontSize={size}
        onClick={(event: React.MouseEvent) => {
          if (!disabled) {
            onClick?.(event)
          }
        }}
        {...props}
      />
    </Box>
  )
}

export { Icon }

import { Icon } from '@/components/Icon'
import { IconType } from '@/components/Icon/iconNames'
import { Button } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  icon: IconType
  children?: ReactNode
  onClick?: VoidFunction
}
const CustomButton = ({ icon, children, onClick }: Props) => {
  return (
    <Button
      onClick={onClick}
      startIcon={<Icon name={icon} size={16} />}
      color="info"
      size="small"
      sx={{
        bgcolor: '#000946',
        borderColor: '#9398FF',
        fontWeight: '400',
        typography: {
          color: '#9398FF',
        },
        '&:hover': {
          bgcolor: '#1a1e70',
        },
      }}
    >
      {children}
    </Button>
  )
}

export default CustomButton

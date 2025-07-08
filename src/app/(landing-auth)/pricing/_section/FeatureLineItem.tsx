import { Icon } from '@/components/Icon'
import { IconType } from '@/components/Icon/iconNames'
import { getFontValue } from '@/utils'
import { Stack, Typography } from '@mui/material'

type Props = {
  icon: IconType
  label: string
  color?: string
}

const FeatureLineItem = ({ icon, label, color = 'white' }: Props) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Icon name={icon} color={color} size={16} />
      <Typography sx={{ ...getFontValue(14, 400), color }}>{label}</Typography>
    </Stack>
  )
}

export default FeatureLineItem

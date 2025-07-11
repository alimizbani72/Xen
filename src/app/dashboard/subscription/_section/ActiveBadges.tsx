'use client'
import Badge from '@/app/_components/Badge'
import { Icon } from '@/components/Icon'
import { getFontValue } from '@/utils'
import { Stack, useMediaQuery } from '@mui/material'
const steps = [
  { label: 'Choose Your Plan', color: '#6B72FF' },
  { label: 'Review Recipt', color: '#49549C' },
  { label: 'Pay', color: '#49549C' },
]
type Props = {
  step: number
}
const ActiveBadges = ({ step }: Props) => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    <Stack direction="row" spacing={4} alignItems="center">
      {steps.map((s, index) => (
        <Stack key={index} direction="row" alignItems="center" spacing={4}>
          <Badge color={index <= step ? '#6B72FF' : '#49549C'} sx={{ ...getFontValue({ xs: 9, md: 12.5 }, 400) }}>
            {s.label}
          </Badge>
          {index < steps.length - 1 && <Icon name="arrow-right" color="#262C53" size={isMobile ? 16 : 24} />}
        </Stack>
      ))}
    </Stack>
  )
}

export default ActiveBadges

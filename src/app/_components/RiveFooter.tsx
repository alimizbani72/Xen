'use client'

import RiveComp from '@/components/RiveLoader'
import { Stack } from '@mui/material'

interface RiveFooterProps {
  height?: string | number
}

export const RiveFooter = ({ height = 500 }: RiveFooterProps) => {
  return (
    <Stack width="100%" height={height} position="absolute" bottom={0} zIndex={0}>
      <RiveComp src="/assets/rive/footer_animation.riv" />
    </Stack>
  )
}

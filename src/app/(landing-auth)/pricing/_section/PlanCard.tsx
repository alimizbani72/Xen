import { getFontValue } from '@/utils'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import FeatureLineItem from './FeatureLineItem'

type Props = {
  title: string
  duration: string
  price: string

  total: string
  isHighlighted?: boolean
}

const PlanCard = ({ title, duration, price, total, isHighlighted = false }: Props) => {
  return (
    <Stack
      position={'relative'}
      sx={{
        background: isHighlighted
          ? 'url(/assets/svg/background-card.svg)'
          : 'linear-gradient(180deg, #0B0037 0%, #040015 33.22%, #040015 73.37%, #2E1A80 100%)',
        width: isHighlighted ? { xs: 'calc(100% )', sm: '378px' } : '328px',
        backgroundPosition: isHighlighted ? 'top center' : 'unset',
        backgroundRepeat: 'no-repeat',
        maxWidth: 378,
        height: isHighlighted ? '425px' : '369px',
        border: '2px solid #18185C',
        borderRadius: isHighlighted ? '35px' : '30px',
        overflow: 'hidden',
      }}
    >
      <Stack pt={isHighlighted ? 7 : 4} pb={isHighlighted ? 0 : 4} textAlign={'center'}>
        <Typography
          sx={{ ...getFontValue(isHighlighted ? 16 : 14, 400), color: isHighlighted ? '#ffffff' : '#8F8F8F' }}
        >
          {title}
        </Typography>
        <Typography sx={{ ...getFontValue(isHighlighted ? 54 : 47.4, 700), color: 'white' }}>{duration}</Typography>
      </Stack>
      <Stack px={7} spacing={isHighlighted ? 5 : 2}>
        <Stack spacing={2}>
          <FeatureLineItem icon="user" label="Unlimited User" />
          <FeatureLineItem icon="dwonload" label="Unlimited Traffic" />
        </Stack>
        <Divider sx={{ bgcolor: '#232246' }} orientation="horizontal" />
        <Stack>
          <Typography sx={{ ...getFontValue(12, 400), color: '#8F8F8F', textAlign: 'center' }}>Price</Typography>
          <Stack direction={'row'} alignItems={'baseline'}>
            <Typography sx={{ ...getFontValue(isHighlighted ? { xs: 50, sm: 54 } : 47.4, 700), color: 'white' }}>
              {price}
            </Typography>
            <Typography sx={{ ...getFontValue(16, 400), color: 'white' }}>/Month</Typography>
          </Stack>
          <Typography sx={{ ...getFontValue(14, 400), color: 'white', textAlign: 'center' }}>{total}</Typography>
        </Stack>
        <Button size="small">Purchase</Button>
      </Stack>
    </Stack>
  )
}

export default PlanCard

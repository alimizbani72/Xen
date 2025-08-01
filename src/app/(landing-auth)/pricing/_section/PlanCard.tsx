import { getFontValue } from '@/utils'
import { Button, Divider, Stack, Typography } from '@mui/material'
import FeatureLineItem from './FeatureLineItem'

type Props = {
  name: string
  duration: string
  price: string
  isHighlighted?: boolean
  btnText?: string
  onClick?: VoidFunction
  downloadLimit?: number
  trafficBytes?: number
  ttlSeconds: number
  amount: string
  currency: string
}

const PlanCard = ({
  name,
  price,
  onClick,
  btnText = 'Purchase',
  isHighlighted = false,
  trafficBytes,
  downloadLimit,
  ttlSeconds,
  amount,
  currency,
}: Props) => {
  const bytesInGiB = Math.pow(1024, 3)
  const gibTraffic = ((trafficBytes || 0) / bytesInGiB).toFixed(0)
  const secondsInMonth = 30 * 24 * 60 * 60 // 30 days as 1 month = 2592000 seconds
  const months = Math.floor(ttlSeconds / secondsInMonth)
  const duration = `${months} month`
  const total = +amount * months
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
          sx={{
            ...getFontValue(isHighlighted ? 16 : 14, 400),
            color: isHighlighted ? '#ffffff' : '#8F8F8F',
            width: 'calc(100% - 56px)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            textWrap: 'nowrap',
            margin: '0 auto',
            direction: 'rtl',
          }}
        >
          {name}
        </Typography>
        <Typography sx={{ ...getFontValue(isHighlighted ? 54 : 47.4, 700), color: 'white' }}>{duration}</Typography>
      </Stack>
      <Stack px={7} spacing={isHighlighted ? 5 : 2}>
        <Stack spacing={2}>
          <FeatureLineItem icon="user" label={`${downloadLimit} User`} />
          <FeatureLineItem icon="dwonload" label={`${gibTraffic}GB`} />
        </Stack>
        <Divider sx={{ bgcolor: '#232246' }} orientation="horizontal" />
        <Stack>
          <Typography sx={{ ...getFontValue(12, 400), color: '#8F8F8F', textAlign: 'center' }}>Price</Typography>
          <Stack direction={'row'} justifyContent={'center'} alignItems={'baseline'}>
            <Typography sx={{ ...getFontValue(isHighlighted ? { xs: 50, sm: 54 } : 47.4, 700), color: 'white' }}>
              {amount}
              {'  '}
              {currency}
            </Typography>
            <Typography sx={{ ...getFontValue(16, 400), color: 'white' }}>/Month</Typography>
          </Stack>
          <Typography sx={{ ...getFontValue(14, 400), color: 'white', textAlign: 'center' }}>
            {`${total} ${currency}`} Total
          </Typography>
        </Stack>
        <Button size="small" onClick={onClick}>
          {btnText}
        </Button>
      </Stack>
    </Stack>
  )
}

export default PlanCard

import FeatureLineItem from '@/app/(landing-auth)/pricing/_section/FeatureLineItem'
import { getFontValue } from '@/utils'
import { Button, Divider, Stack, Typography } from '@mui/material'

type Props = {
  name: string
  duration: string
  price: string
  total: string
  btnText?: string
  onClick?: VoidFunction
  minimumCount?: number
  trafficBytes?: number
}

const PlanCard = ({
  name,
  duration,
  price,
  total,
  onClick,
  btnText = 'Purchase',
  minimumCount,
  trafficBytes,
}: Props) => {
  const bytesInGiB = Math.pow(1024, 3)
  const gibTraffic = ((trafficBytes || 0) / bytesInGiB).toFixed(2)
  return (
    <Stack
      position={'relative'}
      sx={{
        background: 'linear-gradient(180deg, #0B0037 0%, #040015 33.22%, #040015 73.37%, #2E1A80 100%)',
        width: '258px',
        backgroundRepeat: 'no-repeat',
        border: '2px solid #18185C',
        borderRadius: '30px',
        overflow: 'hidden',
        py: 3,
      }}
    >
      <Stack pt={2} pb={4} textAlign={'center'}>
        <Typography sx={{ ...getFontValue(14, 400), color: '#8F8F8F' }}>{name}</Typography>
        <Typography sx={{ ...getFontValue(37, 700), color: 'white' }}>{duration}</Typography>
      </Stack>
      <Stack px={5} spacing={2}>
        <Stack spacing={2}>
          <FeatureLineItem icon="user" label={`${minimumCount} User`} />
          <FeatureLineItem icon="dwonload" label={`${gibTraffic}GB`} />
        </Stack>
        <Divider sx={{ bgcolor: '#232246' }} orientation="horizontal" />
        <Stack>
          <Typography sx={{ ...getFontValue(12, 400), color: '#8F8F8F', textAlign: 'center' }}>Price</Typography>
          <Stack direction={'row'} alignItems={'baseline'} justifyContent="center">
            <Typography sx={{ ...getFontValue(25, 700), color: 'white' }}>{price}</Typography>
            <Typography sx={{ ...getFontValue(16, 400), color: 'white' }}>/Month</Typography>
          </Stack>
          <Typography sx={{ ...getFontValue(14, 400), color: 'white', textAlign: 'center' }}>{total}</Typography>
        </Stack>
        <Button size="small" onClick={onClick}>
          {btnText}
        </Button>
      </Stack>
    </Stack>
  )
}

export default PlanCard

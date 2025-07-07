import { getFontValue } from '@/utils'
import { Button, Divider, Stack, Typography } from '@mui/material'
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
      sx={{
        // position: 'relative',
        background: isHighlighted
          ? 'linear-gradient(180deg, rgb(145, 56, 228) 0%, #06001D 22.22%, #06001D 80.37%,rgb(140, 47, 228) 100%)'
          : 'linear-gradient(180deg, #0B0037 0%, #040015 33.22%, #040015 73.37%, #2E1A80 100%)',
        width: isHighlighted ? '378px' : '328px',
        height: isHighlighted ? '425px' : '369px',
        border: '2px solid #18185C',
        borderRadius: isHighlighted ? '35px' : '30px',
        // overflow: 'hidden',
      }}
    >
      {/* {isHighlighted && (
        <Box
          component="img"
          src="/assets/png/highlight.png"
          alt="highlight"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            pointerEvents: 'none',
          }}
        />
      )} */}
      <Stack py={4} textAlign={'center'}>
        <Typography sx={{ ...getFontValue(14, 400), color: '#8F8F8F' }}>{title}</Typography>
        <Typography sx={{ ...getFontValue(isHighlighted ? 54 : 47.4, 700), color: 'white' }}>{duration}</Typography>
      </Stack>
      <Stack px={7} spacing={isHighlighted ? 5 : 2}>
        <Stack spacing={2}>
          <FeatureLineItem icon="calculator" label="Unlimited User" />
          <FeatureLineItem icon="export" label="Unlimited Traffic" />
        </Stack>
        <Divider sx={{ border: '1px solid grey' }} orientation="horizontal" />
        <Stack>
          <Typography sx={{ ...getFontValue(12, 400), color: '#8F8F8F', textAlign: 'center' }}>Price</Typography>
          <Stack direction={'row'} alignItems={'center'}>
            <Typography sx={{ ...getFontValue(isHighlighted ? 54 : 47.4, 700), color: 'white' }}>{price}</Typography>
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

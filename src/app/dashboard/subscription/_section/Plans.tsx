import PlanCard from '@/app/(landing-auth)/pricing/_section/PlanCard'
import { useApiQuery } from '@/hooks'
import { Stack } from '@mui/material'
type Props = {
  onClick?: VoidFunction
}
const Plans = ({ onClick }: Props) => {
  const { data, isLoading } = useApiQuery<{ items?: any[] }>({
    url: 'pack/list?skip=0&limit=3',
  })
  return (
    <Stack direction={{ xs: 'column', lg: 'row' }} alignItems={'center'} spacing={7}>
      {isLoading
        ? Array.from({ length: 3 }).map((_, index) => (
            <Stack key={index} className="loading-skeleton" sx={{ width: '328px', height: '369px' }} />
          ))
        : data?.items?.map((plan, idx) => (
            <PlanCard
              key={idx}
              {...plan}
              isHighlighted={idx === 1}
              btnText="Next"
              onClick={onClick}
              duration="3 Month"
              price={`${plan.plisio.amount} ${plan.plisio.currency}`}
              total="3.5 USDT Total"
            />
          ))}
    </Stack>
  )
}

export default Plans

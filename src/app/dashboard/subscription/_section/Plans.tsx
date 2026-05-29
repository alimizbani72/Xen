import PlanCard from '@/app/(landing-auth)/pricing/_section/PlanCard'
import { Stack } from '@mui/material'
type Props = {
  onClick?: VoidFunction
}
export const mockPlans = {
  items: [
    {
      name: 'Starter Plan',
      duration: '1 month',
      price: 'Basic',
      isHighlighted: false,
      btnText: 'Buy Now',
      downloadLimit: 1,
      trafficBytes: 5 * 1024 * 1024 * 1024, // 5 GB
      ttlSeconds: 30 * 24 * 60 * 60, // 1 month
      amount: '10',
      currency: 'USD',
      plisio: {
        amount: '10',
        currency: 'USD',
      },
    },
    {
      name: 'Pro Plan',
      duration: '3 months',
      price: 'Popular',
      isHighlighted: true,
      btnText: 'Get Pro',
      downloadLimit: 3,
      trafficBytes: 50 * 1024 * 1024 * 1024, // 50 GB
      ttlSeconds: 90 * 24 * 60 * 60, // 3 months
      amount: '25',
      currency: 'USD',
      plisio: {
        amount: '25',
        currency: 'USD',
      },
    },
    {
      name: 'Enterprise Plan',
      duration: '6 months',
      price: 'Premium',
      isHighlighted: false,
      btnText: 'Upgrade',
      downloadLimit: 10,
      trafficBytes: 200 * 1024 * 1024 * 1024, // 200 GB
      ttlSeconds: 180 * 24 * 60 * 60, // 6 months
      amount: '45',
      currency: 'USD',
      plisio: {
        amount: '45',
        currency: 'USD',
      },
    },
  ],
}
const Plans = ({ onClick }: Props) => {
  // const { data, isLoading } = useApiQuery<{ items?: any[] }>({
  //   url: 'pack/list?skip=0&limit=3',
  // })
  return (
    <Stack direction={{ xs: 'column', lg: 'row' }} alignItems={'center'} spacing={7}>
      {mockPlans?.items?.map((plan, idx) => (
        <PlanCard
          key={idx}
          {...plan}
          isHighlighted={idx === 1}
          btnText="Next"
          onClick={onClick}
          currency={plan.plisio.currency}
          amount={plan.plisio.amount}
        />
      ))}
    </Stack>
  )
}

export default Plans

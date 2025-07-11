import PlanCard from '@/app/(landing-auth)/pricing/_section/PlanCard'
import { plans } from '@/Mock'
import { Stack } from '@mui/material'
type Props = {
  onClick?: VoidFunction
}
const Plans = ({ onClick }: Props) => {
  return (
    <Stack direction={{ xs: 'column', lg: 'row' }} alignItems={'center'} spacing={7}>
      {plans.map((plan, idx) => (
        <PlanCard key={idx} {...plan} btnText="Next" onClick={onClick} />
      ))}
    </Stack>
  )
}

export default Plans

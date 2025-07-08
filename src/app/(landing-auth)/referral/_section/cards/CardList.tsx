import { Stack } from '@mui/material'
import CardItem from './CardItem'
import { CardItemProps } from './type'
type Props = {
  items: CardItemProps[]
}
const CardList = ({ items }: Props) => {
  return (
    <Stack direction={{ xs: 'column', lg: 'row' }} alignItems={'center'} justifyContent={'center'} spacing={11}>
      {items.map((item, index) => (
        <CardItem key={index} {...item} />
      ))}
    </Stack>
  )
}

export default CardList

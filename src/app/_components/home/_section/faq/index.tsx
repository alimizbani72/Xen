import Badge from '@/app/_components/Badge'
import { faqList } from '@/Mock'
import { getFontValue } from '@/utils'
import { Box, Stack, Typography } from '@mui/material'
import FaqItem from './FaqItem'

const FaqSection = () => {
  return (
    <Box
      position={'relative'}
      height={'100%'}
      width={'100%'}
      sx={{
        backgroundImage: 'url("/assets/png/effect.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        py: 13,
      }}
      px={{ xs: 4, md: 6, lg: 'unset' }}
    >
      <Stack justifyContent={'center'} alignItems={'center'} spacing={3} pb={9}>
        <Badge>FAQ</Badge>
        <Typography sx={{ ...getFontValue({ xs: 20, md: 48 }, 600), color: 'white', textAlign: 'center' }}>
          Frequently Asked Questions
        </Typography>
      </Stack>
      <Stack spacing={4.5} m={'auto'} maxWidth={'973px'}>
        {faqList.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </Stack>
    </Box>
  )
}

export default FaqSection

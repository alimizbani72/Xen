import { Icon } from '@/components/Icon'
import { getFontValue } from '@/utils'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
type Props = {
  question: string
  answer: string
}

const FaqItem = ({ question, answer }: Props) => {
  return (
    <Accordion
      disableGutters
      sx={{
        backgroundColor: 'rgba(15, 18, 33, 0.5)',
        borderRadius: '20px !important',
        boxShadow: 'none',
        border: '1px solid rgba(61, 61, 85, 1)',
      }}
    >
      <AccordionSummary
        expandIcon={<Icon name="arrow-down" color="white" size={16} />}
        sx={{
          height: 72,
          '& .MuiAccordionSummary-content': {
            pl: 5,
          },
        }}
      >
        <Typography sx={{ ...getFontValue(20, 400), color: 'white' }}>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ pb: 5, px: 6 }}>
        <Typography sx={{ ...getFontValue(20, 400), color: '#3D3D55' }}>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default FaqItem

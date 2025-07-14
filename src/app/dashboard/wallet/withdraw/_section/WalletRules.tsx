import { getFontValue } from '@/utils'
import { List, ListItem, Typography } from '@mui/material'

const walletNotes = [
  'Once funds are added, they cannot be reversed or refunded.',
  'Ensure your wallet address and payment details are correct before confirming.',
  'Funds can only be used within your account and cannot be transferred to others.',
  'Deposits may take a few minutes to reflect in your wallet.',
  'Suspicious transactions may be reviewed or rejected.',
  'You are responsible for all transactions made through your account.',
  'Deposits must meet the required minimum and maximum limits.',
]

export default function WalletRules() {
  return (
    <List sx={{ pl: 2, color: '#49549C', listStyleType: 'disc' }}>
      {walletNotes.map((note, idx) => (
        <ListItem
          key={idx}
          sx={{
            display: 'list-item',
            py: 0.5,
            px: 0,
            color: '#C7C9F1',
            '&::marker': {
              fontSize: '8px',
              color: '#49549C',
            },
          }}
        >
          <Typography sx={{ ...getFontValue(16, 500) }}>{note}</Typography>
        </ListItem>
      ))}
    </List>
  )
}

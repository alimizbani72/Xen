import { getFontValue } from '@/utils'
import { Box, Stack, Typography } from '@mui/material'
import { CardItemProps } from './type'
const getTitleWithLineBreak = (text: string, breakAfterWords = 2): string => {
  const words = text.trim().split(' ')
  if (words.length <= breakAfterWords) return text
  return `${words.slice(0, breakAfterWords).join(' ')}\n${words.slice(breakAfterWords).join(' ')}`
}
const CardItem = ({ description, image, title }: CardItemProps) => {
  return (
    <Stack
      sx={{
        border: '2px solid #18185C',
        borderRadius: '30px',
        overflow: 'hidden',
        position: 'relative',
        background: 'linear-gradient(180deg, #0B0037 0%, #040015 100%);',
      }}
    >
      <Box component="img" src={image} alt={image} sx={{ width: '100%' }} />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
        gap={2.5}
        px={7}
      >
        <Typography
          sx={{
            ...getFontValue(24, 700),
            color: 'white',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            minHeight: 72,
          }}
        >
          {getTitleWithLineBreak(title, 3)}
        </Typography>
        <Typography sx={{ ...getFontValue(12, 400), color: '#9E9E9E' }}>{description}</Typography>
      </Box>
    </Stack>
  )
}

export default CardItem

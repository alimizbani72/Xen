import { Stack } from '@mui/material'
import { ChartArea } from './ChartArea'

export function ChartView() {
  return (
    <Stack sx={{ border: '2px solid #262C53', m: 5, borderRadius: '20px', overflow: 'hidden' }}>
      <ChartArea
        chart={{
          categories: [
            '2023-09-19T00:00:00.000Z',
            '2023-09-19T01:30:00.000Z',
            '2023-09-19T02:30:00.000Z',
            '2023-09-19T03:30:00.000Z',
            '2023-09-19T04:30:00.000Z',
            '2023-09-19T05:30:00.000Z',
            '2023-09-19T06:30:00.000Z',
            '2023-09-19T07:30:00.000Z',
            '2023-09-19T08:30:00.000Z',
          ],
          series: [
            { name: '', data: [32, 40, 28, 42, 64, 72, 56, 80, 100] },
            // { name: 'Series B', data: [12, 32, 45, 32, 34, 52, 40, 60, 60] },
          ],
        }}
      />
    </Stack>
  )
}

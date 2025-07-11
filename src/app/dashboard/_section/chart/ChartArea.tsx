import { Icon } from '@/components/Icon'
import { getFontValue } from '@/utils'
import { Card, CardProps, Stack, Typography } from '@mui/material'
import { Chart } from './Chart'
import { useChart } from './useChart'

// ----------------------------------------------------------------------

type Props = CardProps & {
  chart: {
    colors?: string[]
    categories: string[]
    series: {
      name?: string
      data: number[]
    }[]
  }
}

export function ChartArea({ chart, ...other }: Props) {
  //   const theme = useTheme()

  //   const chartColors = chart.colors ?? [theme.palette.primary.main, theme.palette.warning.main]

  const chartOptions = useChart()

  return (
    <Card
      {...other}
      sx={{
        background:
          'linear-gradient(0deg, #130F30, #130F30), radial-gradient(64.87% 78.7% at 90.6% -18.1%, #1D1558 0%, #130F30 100%);',
      }}
    >
      <Stack sx={{ gap: 1, mt: 4, pl: 5.5 }} direction={'row'} alignItems={'center'}>
        <Icon name="chart" size={28} />
        <Typography sx={{ ...getFontValue(19, 500), color: '#6B72FF' }}>Usage Chart</Typography>
      </Stack>

      <Chart type="area" series={chart.series} options={chartOptions} height={320} />
    </Card>
  )
}

import { useTheme } from '@mui/material/styles'

import type { ChartOptions } from './types'

// ----------------------------------------------------------------------

export function useChart(options?: ChartOptions): ChartOptions {
  const theme = useTheme()

  const RESPONSIVE = [
    {
      breakpoint: theme.breakpoints.values.sm,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 3,
            columnWidth: '80%',
          },
        },
      },
    },
    {
      breakpoint: theme.breakpoints.values.md,
      options: {
        plotOptions: {
          bar: {
            columnWidth: '60%',
          },
        },
      },
    },
    ...(options?.responsive ?? []),
  ]
  const uniqueResponsive = RESPONSIVE.reduce((acc: typeof RESPONSIVE, cur) => {
    if (!acc.some(item => item.breakpoint === cur.breakpoint)) {
      acc.push(cur)
    }
    return acc
  }, [])
  return {
    ...options,

    chart: {
      type: 'area',
      toolbar: { show: false },
      zoom: { enabled: false },
      parentHeightOffset: 0,
      fontFamily: theme.typography.fontFamily,
      foreColor: '',
      animations: {
        enabled: true,
        speed: 360,
        animateGradually: { enabled: true, delay: 120 },
        dynamicAnimation: { enabled: true, speed: 360 },
      },
      ...options?.chart,
    },

    colors: ['#6B72FF'], // Line color

    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shadeIntensity: 0,
        opacityFrom: 1,
        opacityTo: 1,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(107, 114, 255, 0.3)',
            opacity: 1,
          },
          {
            offset: 100,
            color: 'rgba(137, 121, 255, 0.05)',
            opacity: 1,
          },
        ],
        stops: [0, 100],
      },
      ...options?.fill,
    },
    stroke: {
      curve: 'smooth',
      lineCap: 'round',
      width: 1,
      colors: ['#6B72FF'], // Line color
      ...options?.stroke,
    },

    dataLabels: {
      enabled: false,
      ...options?.dataLabels,
    },

    grid: {
      strokeDashArray: 0,
      borderColor: '#232246',
      padding: {
        top: 0,
        right: 0,
        bottom: -15, // <- force bottom trim
        left: -10,
      },
      xaxis: {
        lines: { show: true }, // vertical lines
      },
      yaxis: {
        lines: { show: true }, // horizontal lines
      },
      ...options?.grid,
    },

    xaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false },
      crosshairs: { show: false },
    },

    yaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    markers: {
      size: 0,
      strokeColors: '#6B72FF',
      ...options?.markers,
    },

    tooltip: {
      theme: 'false',
      fillSeriesColor: false,
      x: { show: true },
      ...options?.tooltip,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const value = series[seriesIndex][dataPointIndex]
        const rawDate = new Date(w.globals.seriesX[seriesIndex][dataPointIndex])
        const date = rawDate.toLocaleDateString('en-CA').replace(/-/g, '/')

        return `
          <div style="
        background: #262B4A;
        color: #ffffff;
        padding: 7px 12px;
        border-radius: 10px;
        font-size: 17px;
        font-weight: 600;
        line-height: 1.5;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        margin-left: 6px
      ">
        <div style="
          display: inline-block;
          padding: 2px 6px;
        
          font-size: 8px;
          font-weight: 400;
          color: #6B72FF;
        ">
          ${date}
        </div>
        <div style="margin-top: 6px;">
          ${value} GB
        </div>
      </div>
        `
      },
    },

    legend: {
      show: false,
    },
    responsive: uniqueResponsive,
  }
}

'use client'

import { Icon } from '@/components/Icon'
import { IconType } from '@/components/Icon/iconNames'
import { getFontValue } from '@/utils'
import { Pagination, Paper, Stack, Typography } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import type React from 'react'
import type { ReactNode } from 'react'

type PropType = {
  totalCount?: number
  page?: number
  title?: React.ReactNode
  columns: { title: string | ((item: any) => ReactNode); modify: (item: any) => ReactNode }[]
  data: any[]
  width?: any
  minWidthCell?: any
  action?: ReactNode
  leftIcon?: IconType
  isPending?: boolean
  emptyTitle?: string
  emptySubtitle?: string
  onTableClick?: (id: string) => void
  handleChangePage?: (_event: React.ChangeEvent<unknown>, newPage: number) => void
  hasTitle?: boolean
}

const CustomTable = ({
  page = 1,
  handleChangePage,
  title,
  columns,
  data,
  width,
  minWidthCell,
  leftIcon,
  action,
  isPending,
  onTableClick,
  emptyTitle,
  emptySubtitle,
  totalCount = 10,
  hasTitle = true,
}: PropType) => {
  return (
    <Stack
      sx={{
        borderRadius: hasTitle ? 5 : 0,
        border: '2px solid',
        borderColor: '#262C53',
        background:
          'linear-gradient(0deg, #130F30, #130F30), radial-gradient(64.87% 78.7% at 90.6% -18.1%, #1D1558 0%, #130F30 100%);',
        width: width ?? '100%',
        overflow: 'hidden',
      }}
    >
      {hasTitle && (
        <Stack
          direction="row"
          alignItems="center"
          width={'100%'}
          justifyContent={'space-between'}
          py={3}
          px={6}
          borderBottom={'2px solid #262C53'}
        >
          <Stack direction={'row'} spacing={3}>
            {!!leftIcon && <Icon name={leftIcon} size={24} />}
            <Typography sx={{ ...getFontValue(19, 500), color: '#6B72FF' }}>{title}</Typography>
          </Stack>

          {action && action}
        </Stack>
      )}
      <TableContainer
        component={Paper}
        sx={{
          background:
            'linear-gradient(0deg, #130F30, #130F30), radial-gradient(64.87% 78.7% at 90.6% -18.1%, #1D1558 0%, #130F30 100%);',
          borderRadius: 0,
          boxShadow: 'none', // removes default Paper shadow
          borderTop: 'none', // removes any top border
          borderBottom: 'none', // prevents bottom border too
          outline: 'none', // in case it's rendering as an outline
          '&::before': {
            display: 'none', // removes any pseudo-element line
          },
          '.MuiTableCell-head': {
            borderBottom: 'none',
            background:
              'linear-gradient(0deg, #130F30, #130F30), radial-gradient(64.87% 78.7% at 90.6% -18.1%, #1D1558 0%, #130F30 100%);',
            typography: { ...getFontValue(16, 500) },
            textTransform: 'uppercase',
            color: 'grey.light',
            p: 0,
            py: 5,

            '&:first-of-type': { pl: 6 },
            '&:last-of-type': { pr: 6 },
            '&:not(:last-of-type)': { pr: '14px' },
          },
          '.MuiTableCell-root:not(.MuiTableCell-head)': {
            minWidth: minWidthCell ?? 150,
            typography: 'p2-medium',
            color: 'white',
            textAlign: 'start',
            p: 0,
            py: 2,
            borderBottomStyle: 'solid',

            border: 'none',
            '&:first-of-type': { pl: 6 },
            '&:last-of-type': { pr: 6 },
            '&:not(:last-of-type)': { pr: '14px' },
          },
          '.MuiTableRow-head': { height: 40 },
          '.MuiTableRow-root:not(.MuiTableRow-head)': { height: 56 },
        }}
      >
        {isPending ? (
          <Typography color="white">isLoading...</Typography>
        ) : (
          <>
            {!data?.length ? (
              //   <Empty title={emptyTitle} subtitle={emptySubtitle} />
              <Typography color="white">isLoading...</Typography>
            ) : (
              <Table aria-label="customized table" sx={{ px: '0 !important' }}>
                <TableHead>
                  <TableRow>
                    {columns.map((head, index) => (
                      <TableCell align="left" key={index} sx={{ color: '#262C53', ...getFontValue(16, 400) }}>
                        {typeof head.title === 'string' ? head.title : head.title(data)}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.length > 0 &&
                    !isPending &&
                    data?.map(rowItem => (
                      <TableRow
                        key={rowItem.id}
                        onClick={() => onTableClick && onTableClick(rowItem.id)}
                        sx={{
                          cursor: onTableClick ? 'pointer' : 'default',
                          px: '30px !important',
                          ':hover': { bgcolor: 'dark.3' },
                        }}
                      >
                        {columns.map((item, index) => (
                          <TableCell align="left" key={index}>
                            {item.modify(rowItem)}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            )}
          </>
        )}
      </TableContainer>

      {totalCount > 5 && (
        <Stack direction={'row'} justifyContent={'center'} py={1.5}>
          <Pagination
            sx={{
              '& .MuiPaginationItem-root': {
                color: 'white',
                mx: 3,
              },
              '& .Mui-selected': {
                backgroundColor: '#31315C !important',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#31315C',
                },
              },
              '& .MuiPaginationItem-previousNext': {
                backgroundColor: '#31315C',
                borderRadius: '1000px',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#31315C',
                },
              },
            }}
            count={Math.ceil(totalCount / 5)}
            defaultPage={1}
            page={page}
            onChange={handleChangePage}
            boundaryCount={2}
          />
        </Stack>
      )}
    </Stack>
  )
}

export default CustomTable

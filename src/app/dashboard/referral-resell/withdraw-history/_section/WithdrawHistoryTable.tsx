'use client'

import CustomTable, { ColumnType } from '@/app/_components/CustomTable'
import { Icon } from '@/components/Icon'
import { withdrawHistory } from '@/Mock'
import { Button, Stack } from '@mui/material'
import { ChangeEvent, ReactNode, useState } from 'react'

const columns: ColumnType[] = [
  {
    title: 'Date',
    modify: (row: any) => row.date,
    minWidth: 200,
  },
  {
    title: 'Price',
    modify: (row: any) => row.price,
    minWidth: 90,
  },
  {
    title: 'Method',
    modify: (row: any) => row.method,
    minWidth: 150,
  },
  {
    title: 'status',
    modify: (row: any) => <Icon name={row.status ? 'tick' : 'refresh'} />,
    minWidth: 100,
  },
  {
    title: 'Details',
    modify: (row: any) => `Transaction Code: ${row.transactionCode}`,
    minWidth: 440,
  },
]
export const WithdrawHistoryTable = () => {
  const [page, setPage] = useState(1)
  const itemsPerPage = 12
  const totalCount = withdrawHistory.length
  const handleChangePage = (_event: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage)
  }
  const paginatedData = withdrawHistory.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  return (
    <CustomTable
      leftIcon="history"
      totalCount={totalCount}
      page={page}
      columns={columns}
      itemPerPage={itemsPerPage}
      height={'100%'}
      title="Withdraw History"
      data={paginatedData}
      handleChangePage={handleChangePage}
      action={
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={'center'}>
          <Button color="info" size="small" sx={{ color: '#6B72FF', borderColor: '#6B72FF', py: 1.5 }}>
            <Icon name="filter" size={17} sx={{ mr: 2 }} /> Filter
          </Button>
          <Button color="info" size="small" sx={{ color: '#6B72FF', borderColor: '#6B72FF', py: 1.5 }}>
            <Icon name="export" size={17} sx={{ mr: 2 }} /> Export
          </Button>
        </Stack>
      }
    />
  )
}

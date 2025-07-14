'use client'

import CustomTable, { ColumnType } from '@/app/_components/CustomTable'
import { Icon } from '@/components/Icon'
import { accountList, inviteHistory } from '@/Mock'
import { Button, Stack } from '@mui/material'
import { ChangeEvent, useState } from 'react'

const columns: ColumnType[] = [
  {
    title: 'Username',
    modify: (row: any) => row.username,
  },
  {
    title: 'Plan',
    modify: (row: any) => row.plan,
  },
  {
    title: 'Remaining',
    modify: (row: any) => row.remaining,
  },
  {
    title: 'Activation Date',
    modify: (row: any) => row.activationDate,
  },
]
export const AccountListTable = () => {
  const [page, setPage] = useState(1)
  const itemsPerPage = 6
  const totalCount = accountList.length
  const handleChangePage = (_event: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage)
  }
  const paginatedData = accountList.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  return (
    <CustomTable
      leftIcon="history"
      totalCount={totalCount}
      page={page}
      columns={columns}
      itemPerPage={itemsPerPage}
      height={'100%'}
      title="Account List"
      data={paginatedData}
      handleChangePage={handleChangePage}
      action={
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={'center'}>
          <Button color="info" size="small" sx={{ color: '#6B72FF', borderColor: '#6B72FF', py: 1.5 }}>
            <Icon name="export" size={17} sx={{ mr: 2 }} /> Charge an Account
          </Button>
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

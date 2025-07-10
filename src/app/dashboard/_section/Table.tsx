'use client'
import CustomTable from '@/app/_components/CustomTable'
import { Icon } from '@/components/Icon'
import { purchaseHistory } from '@/Mock'
import { getFontValue } from '@/utils'
import { Box, Stack, Typography } from '@mui/material'
import { ChangeEvent, ReactNode, useState } from 'react'

type Columns = {
  title: string | ((item: any) => ReactNode)
  modify: (row: any) => ReactNode
}
const columns: Columns[] = [
  {
    title: 'Date',
    modify: (row: any) => row.date,
  },
  {
    title: 'Price',
    modify: (row: any) => row.price,
  },
  {
    title: 'paymentMethod',
    modify: (row: any) => row.paymentMethod,
  },
  {
    title: 'status',
    modify: (row: any) => <Icon name="tick" color="white" />,
  },
  {
    title: 'transactionCode',
    modify: (row: any) => row.transactionCode,
  },
]
export default function Table() {
  const [page, setPage] = useState(1)
  const itemsPerPage = 5
  const totalCount = purchaseHistory.length
  const handleChangePage = (_event: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage)
  }
  const paginatedData = purchaseHistory.slice((page - 1) * itemsPerPage, page * itemsPerPage)
  return (
    <Box sx={{ p: 4 }}>
      <CustomTable
        leftIcon="history"
        totalCount={totalCount}
        page={page}
        columns={columns}
        title="Purchase History"
        data={paginatedData}
        handleChangePage={handleChangePage}
        action={
          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            <Typography color="#6B72FF" sx={{ ...getFontValue(15, 500) }}>
              View More
            </Typography>
            <Icon name="arrow-right" color="#6B72FF" size={24} />
          </Stack>
        }
      />
    </Box>
  )
}

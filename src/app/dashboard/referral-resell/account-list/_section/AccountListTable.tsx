'use client'

import CustomTable, { ColumnType } from '@/app/_components/CustomTable'
import { Icon } from '@/components/Icon'
import { useApiMutation, useApiQuery } from '@/hooks'
import { accountList, inviteHistory } from '@/Mock'
import { Button, Stack } from '@mui/material'
import { useSession } from 'next-auth/react'
import { ChangeEvent, useState } from 'react'

export const AccountListTable = () => {
  const [page, setPage] = useState(1)
  const session = useSession()
  const itemsPerPage = 12
  const { mutateAsync: assignTicketMutate } = useApiMutation()
  const { data, isPending } = useApiQuery({
    url: `my/agency-tickets?skip=${(page - 1) * itemsPerPage}&limit=${itemsPerPage}`,
  })
  const totalCount = data?.totalItems
  const handleChangePage = (_event: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage)
  }

  const handleAssign = (id: number) => {
    assignTicketMutate({
      url: '/ticket/agency-sell',
      method: 'POST',
      data: {
        ticket_id: id,
        user_email: session?.data?.user?.email,
      },
    })
  }

  const columns: ColumnType[] = [
    {
      title: 'Account ID',
      modify: (row: any) => row.packId,
    },
    {
      title: 'Plan',
      modify: (row: any) => row.plan || '-',
    },
    {
      title: 'Assigned',
      modify: (row: any) => <Icon name={row?.isAgency ? 'tick' : 'close-circle'} color="#6B72FF" />,
    },
    {
      title: 'Assigned To',
      modify: (row: any) => row.assignedTo || '-',
    },
    {
      title: 'Assign Date',
      modify: (row: any) => (row.createdAt ? new Date(row.createdAt).toLocaleDateString() : '-'),
    },
    {
      title: '',
      modify: (row: any) => (
        <Button
          color="info"
          size="small"
          sx={{ color: '#6B72FF', borderColor: '#6B72FF' }}
          onClick={() => handleAssign(row?.id)}
        >
          Assign
        </Button>
      ),
    },
  ]

  return (
    <CustomTable
      isPending={isPending}
      leftIcon="user"
      totalCount={totalCount}
      page={page}
      columns={columns}
      itemPerPage={itemsPerPage}
      height={'100%'}
      title="Resell Account List"
      data={data?.items}
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

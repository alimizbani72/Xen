'use client'
import { MaterialProvider } from '@/provider/material/MaterialProvider'
import { PropsWithChildren } from 'react'

const ClientLayout = ({ children }: PropsWithChildren) => {
  return <MaterialProvider>{children}</MaterialProvider>
}

export default ClientLayout

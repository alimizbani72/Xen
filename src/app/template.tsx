'use client'
import AuthProvider from '@/provider/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import dynamic from 'next/dynamic'
import { PropsWithChildren } from 'react'

const Toaster = dynamic(() => import('react-hot-toast').then(mod => mod.Toaster), { ssr: false })

const Template = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient()
  return (
    <SessionProvider refetchOnWindowFocus={false} refetchWhenOffline={false} refetchInterval={4 * 60 * 60}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster containerStyle={{ zIndex: 9999999999999 }} />
          {children}
        </QueryClientProvider>
      </AuthProvider>
    </SessionProvider>
  )
}

export default Template

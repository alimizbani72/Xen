'use client'
import { useSession } from 'next-auth/react'
import { RedirectType, redirect, usePathname } from 'next/navigation'
import { useEffect, type ReactNode } from 'react'

interface AuthProviderProps {
  children: ReactNode
  accessToken?: string
}

const publicRoutes = ['/pricing', '/download', '/referral', '/dashboard']

export default function AuthProvider({ children }: AuthProviderProps) {
  const pathname = usePathname()
  const session = useSession()

  const token = session?.data?.token
  useEffect(() => {
    if (pathname !== '/' && !publicRoutes.includes(pathname)) {
      //  && session?.status !== 'loading'
      if (pathname?.startsWith('/finance')) {
        // && token
        redirect('/auth/login', RedirectType.replace)
      }

      if (!token && pathname?.startsWith('/auth')) {
        redirect('/dashboard', RedirectType.replace)
      }
    }
  }, [pathname, session?.status, token])

  return <>{children}</>
}

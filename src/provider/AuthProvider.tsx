'use client'
import { getToken } from '@/utils/localstorage'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState, type ReactNode } from 'react'

const publicRoutes = ['/', '/pricing', '/download', '/referral']

export default function AuthProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  const [hydrated, setHydrated] = useState(false)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    setToken(getToken())
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return

    const isPublic = publicRoutes.includes(pathname)

    // ❌ not logged in → block private pages
    if (!token && !isPublic) {
      router.replace('/auth/login')
    }

    // ❌ logged in → block auth pages
    if (token && (pathname === '/auth/login' || pathname === '/auth/register')) {
      router.replace('/dashboard')
    }
  }, [token, pathname, hydrated])
  if (!hydrated) return null

  return <>{children}</>
}

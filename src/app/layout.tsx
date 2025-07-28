import ProgressBar from '@/components/progress-bar'
import { MaterialProvider } from '@/provider/material/MaterialProvider'
import type { Metadata } from 'next'
import { Poppins, Syncopate } from 'next/font/google'
import { headers } from 'next/headers'
import { UAParser } from 'ua-parser-js'
import '../../public/assets/global.css'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const syncopate = Syncopate({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Xen',
  description: 'Xen',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersList = await headers()
  return (
    <html lang="en" className={`${(poppins.className, syncopate.className)}`}>
      <body>
        <MaterialProvider deviceType={UAParser(headersList.get('user-agent') || '')?.device.type || 'desktop'}>
          <ProgressBar />
          {children}
        </MaterialProvider>
      </body>
    </html>
  )
}
